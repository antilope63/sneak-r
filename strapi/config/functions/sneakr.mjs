import cron from "node-cron";
import fetch from "node-fetch";

const targetApiUrl = "http://127.0.0.1:1337/api/sneakers";
const loginUrl = "http://127.0.0.1:1337/auth/local";

const credentials = {
  identifier: "antonin",
  password: "password"
};

let authToken = '';

async function loginAndGetToken() {
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const data = await response.json();
    authToken = data.jwt;
  } catch (error) {
    console.error("Erreur lors de la connexion à Strapi :", error);
  }
}

async function fetchSneakersData(page) {
  const sourceApiUrl = `http://54.37.12.181:1337/api/sneakers?pagination%5Bpage%5D=${page}&pagination%5BpageSize%5D=100`;
  try {
    const response = await fetch(sourceApiUrl);
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la récupération des données des sneakers :", error);
  }
}
 
// Fonction pour envoyer les données à l'API Strapi
async function postToTargetApi(sneakerData) {
  try {
    console.log("Envoi des données suivantes :", JSON.stringify(sneakerData, null, 2));

    const response = await fetch(targetApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`
      },
      body: JSON.stringify(sneakerData)
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Réponse du serveur :", responseData);
  } catch (error) {
    console.error("Erreur lors de l'envoi des données à l'API Strapi :", error);
  }
}

async function processSneakersData() {
  try {
    await loginAndGetToken();

    for (let page = 2; page <= 493; page++) {
      console.log(`Début du traitement des sneakers pour la page ${page}`);
      const data = await fetchSneakersData(page);

      if (data && data.data) {
        for (const item of data.data) {
        let sneakerData = {
          data: {
            id: item.id,
            brand: item.attributes.brand,
            colorway: item.attributes.colorway,
            estimatedMarketValue: item.attributes.estimatedMarketValue,
            gender: item.attributes.gender,
            image: item.attributes.image,
            links: item.attributes.links,
            name: item.attributes.name,
            releaseDate: item.attributes.releaseDate,
            releaseYear: item.attributes.releaseYear,
            retailPrice: item.attributes.retailPrice,
            silhouette: item.attributes.silhouette,
            sku: item.attributes.sku,
            story: item.attributes.story,
            createdAt: item.attributes.createdAt,
            updatedAt: item.attributes.updatedAt,
            publishedAt: item.attributes.publishedAt,
            UID: item.attributes.UID,
          },
        };
 
        // Envoi des données à l'API Strapi
        await postToTargetApi(sneakerData);
        }
      }
    }

    console.log("Traitement de toutes les pages terminé");
  } catch (error) {
    console.error("Erreur lors du traitement des données :", error);
  }
}


 function scheduledTask() {
processSneakersData();
 }
 
 const cronConfig = {
   crons: [
     {
       path: "/api/epitech-calendar",
       schedule: "0 8 * * 1", 
       task: scheduledTask,
     },
   ],
 };
 
 cronConfig.crons.forEach((cronJob) => {
   cron.schedule(cronJob.schedule, cronJob.task);
   console.log(
     `Tâche planifiée configurée : ${cronJob.path} avec l'horaire "${cronJob.schedule}"`
   );
 });