import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import AuthTabContent from "./tabcontent/AuthTabContent"
import AuthTabList from "./tablist/AuthTabList"

export default function Auth() {
    const content = (
        <>
            <div>
                <Tabs defaultValue="login" className="w-auto sm:p-0 md:p-4 lg:p-8">
                    <AuthTabList />
                    <AuthTabContent />
                </Tabs>
            </div>
        </>
    )

    return content

};
