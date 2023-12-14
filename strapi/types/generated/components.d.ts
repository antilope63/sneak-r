import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'IMAGE';
  };
  attributes: {
    small: Attribute.String;
    original: Attribute.String;
    thumbnail: Attribute.String;
  };
}

export interface LinksLinks extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    goat: Attribute.String;
    stockX: Attribute.String;
    flightClub: Attribute.String;
    stadiumGoods: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image.image': ImageImage;
      'links.links': LinksLinks;
    }
  }
}
