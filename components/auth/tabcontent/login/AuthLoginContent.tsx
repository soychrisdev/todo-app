
'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChromeIcon, AppleIcon, GithubIcon } from "lucide-react";
import {  useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import toast, { Toaster } from 'react-hot-toast';
import { useSession } from 'next-auth/react'

export default function AuthLoginContent() {
    const { data: session } = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    
    if (session) return router.push(callbackUrl)

    const onSubmit = async (e: React.FormEvent) => {
        const toastId = toast.loading('Loading...');
      e.preventDefault()
      try {
        const res = await signIn('credentials', {
          redirect: false,
          email,
          password,
          callbackUrl
        })
        if (!res?.error) {
          router.push(callbackUrl)
          toast.success('Log In Success', {
            id: toastId,
            duration: 2000
          });

        } else {
          toast.error('Invalid email and password!', {
            id: toastId,
            duration: 1000
          });
        }
      } catch (err: any) {}
    }


    

    return (
        <>
        <pre className="hidden">{JSON.stringify(session)}</pre>
        <Toaster 
        position="top-right"
        />
        <form onSubmit={onSubmit}>
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
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Log In</Button>
            </CardFooter>
        </Card>
        </form>
        </>
    )
};
