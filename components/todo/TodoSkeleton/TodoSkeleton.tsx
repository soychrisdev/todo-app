import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Skeleton } from "@/components/ui/skeleton";
import { TodoType } from "../todoType/todoType";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { TodoCreateDialog } from "../TodoCreate/TodoCreateDialog";
import TodoCardSkeleton from "./TodoCardSkeleton";

export default function TodoSkeleton() {
    return (
        <>
        <div className="mx-4 flex justify-between items-center h-auto">
            <div className="flex justify-start">
            <Skeleton className="h-10 w-20" />
            </div>
            <div className="flex justify-center">
            <Skeleton className="h-10 w-20" />
            </div>
            <div className="flex justify-end mr-2">
            <Skeleton className="h-10 w-20" />
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40 bg-yellow-100'>
            <TodoCardSkeleton/>
            <TodoCardSkeleton/>
            <TodoCardSkeleton/>
            <TodoCardSkeleton/>
            <TodoCardSkeleton/>
            <TodoCardSkeleton/>
        </div>
        </>
        
    )

};
