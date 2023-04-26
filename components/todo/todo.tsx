'use client'

import { PlusCircleIcon, SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { TodoType } from './todoType/todoType'
import { TodoCard } from './todoCard/todoCard'
import { Suspense } from 'react'
import { TodoCreateDialog } from './TodoCreate/TodoCreateDialog'
import TooltipComponent from '../tooltip/TooltipComponent'


export default function Todo() {

    return (<>

        {/* MY TODO NAVBAR */}
        <div className="mx-4 flex justify-between items-center h-auto">
            <div className="flex justify-start">
                <TodoType />
            </div>
            <div className="flex justify-center">
                <Input type="text" placeholder="Search..." />
                <Button type="submit" ><SearchIcon /></Button>
            </div>
            <div className="flex justify-end mr-2">
                <TodoCreateDialog />
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-40'>
                {/* @ts-expect-error Server Component */}
                <TodoCard />
        </div>
    </>)
};
