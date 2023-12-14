import { cn } from "@/lib/utils"
import {ReactNode} from "react"
const MaxWidthWrapper_2 = ({
    className,
    children

}: {
    className?: string
    children: ReactNode
} ) => {
    return (
        <div className={cn('pl-16 pr-16 pt-9 ', 'grid grid-cols-4 gap-4', className)}>
      {children}
    </div>
    )

}
export default MaxWidthWrapper_2