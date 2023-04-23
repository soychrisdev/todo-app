import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { TabsContent } from "@/components/ui/tabs"
import AuthRegisterContent from "./register/AuthRegisterContent"
import AuthLoginContent from "./login/AuthLoginContent"
export default function AuthTabContent() {
    return (
        <>
            <TabsContent value="login">
                <AuthLoginContent />
            </TabsContent>
            <TabsContent value="register">
                <AuthRegisterContent />
            </TabsContent>
        </>

    )
};
