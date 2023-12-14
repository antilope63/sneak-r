import { cn } from "@/lib/utils"
import {ReactNode} from "react"
const MaxWidthWrapper_3 = ({
    className,
    children

}: {
    className?: string
    children: ReactNode
} ) => {
    return (
        <div className={cn('p-16 ', '', className)}>
            {children}
        </div>
    )

}
export default MaxWidthWrapper_3