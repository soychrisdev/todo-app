import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react"


export default function TooltipComponent({
    children, text// will be a page or nested layout
  }: {
    children: React.ReactNode,
    text: string
  }) {

    return (

        <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
         {children}
        </TooltipTrigger>
        <TooltipContent>
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    )
}