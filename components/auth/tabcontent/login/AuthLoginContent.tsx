import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChromeIcon, AppleIcon, GithubIcon } from "lucide-react";

export default function AuthLoginContent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Login Card</CardTitle>
                <CardDescription>
                    Enter your email and password below, or just use it!
                    <Separator />
                    <div className="flex justify-center p-4">
                        <Button disabled >
                            <ChromeIcon className="mr-2 h-4 w-4" /> Login with Google
                        </Button>
                        <Button>
                            <GithubIcon className="mr-2 h-4 w-4" /> Login with Github
                        </Button>
                        <Button disabled>
                            <AppleIcon className="mr-2 h-4 w-4" /> Login with Apple
                        </Button>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save password</Button>
            </CardFooter>
        </Card>
    )
};
