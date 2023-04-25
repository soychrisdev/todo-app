
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonLoading from "@/components/ui/custom/buttonLoading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { ChromeIcon, AppleIcon, GithubIcon } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

export default function AuthLoginContent() {
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        loading ? setLoading(false) : setLoading(true)
    }



    return (
        <Card>
            <CardHeader>
                <CardTitle>Login Section</CardTitle>
                <CardDescription>
                    Enter your email and password below, or just use it!
                    <section className="md:flex justify-center mt-2">
                        <Button disabled className="m-2">
                            <ChromeIcon className="mr-2 h-4 w-4" /> Login with Google
                        </Button>
                        <Button className="m-2">
                            <GithubIcon className="mr-2 h-4 w-4" /> Login with Github
                        </Button>
                        <Button disabled className="m-2">
                            <AppleIcon className="mr-2 h-4 w-4" /> Login with Apple
                        </Button>
                    </section>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                {loading ? <ButtonLoading /> : <Button>Log In</Button>}

                <Button onClick={handleLogin}>run loader</Button>

            </CardFooter>
        </Card>
    )
};
