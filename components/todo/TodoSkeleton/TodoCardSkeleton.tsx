import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TodoCardSkeleton(){
    return (
        <Card className="m-4" >
                        <CardHeader>
                            <CardTitle className="flex justify-between">
                            <Skeleton className="h-4 w-[250px]" />
                               <Skeleton className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-10"/>
                            </CardTitle>
                            <CardDescription> <Skeleton className="h-4 w-[250px]" /></CardDescription>
                        </CardHeader>
                        <CardContent>


                        </CardContent>
                        <CardFooter className="flex justify-between">
                            {/* <Button variant="ghost">{userId}</Button> */}
                            <Skeleton className="h-10 w-10" />

                            <Skeleton className="h-10 w-20" />
                        </CardFooter>
                    </Card>
    )
}