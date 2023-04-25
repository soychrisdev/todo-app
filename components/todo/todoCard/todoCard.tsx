'use client'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import fetchTodo from "@/lib/fetchTodo"
import { Badge, badgeVariants } from "@/components/ui/badge"




import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TodoEditDialog } from "../TodoEdit/TodoEditDialog"

interface TodoInterface {
    completed: boolean;
    id: number;
    title: string;
    userId: number
}



export async function TodoCard() {
    const data: TodoInterface[] = await fetchTodo();
    return (
        <>
            {
                data.slice(0, 10).map(({ completed, id, title, userId }) => (
                    <Card key={id} className="m-4" >
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                                {title.slice(0, 8)}...
                                <Badge className={badgeVariants(completed ? { variant: 'default' } : { variant: 'destructive' })}>{completed ? 'done' : 'pending..'}</Badge>
                            </CardTitle>
                            <CardDescription>{title}</CardDescription>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="ghost">{userId}</Button>
                            <TodoEditDialog />
                        </CardFooter>
                    </Card>
                ))
            }
        </>
    )
}
