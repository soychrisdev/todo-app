import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import NavbarAuth from "../navbarAuth/navbarAuth"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserIcon, WalletIcon, SettingsIcon, DollarSign, LayoutDashboardIcon } from 'lucide-react'
import Link from "next/link"

export default function NavbarUser({ status }: { status: boolean }) {
    const content = (
        <>
            {status
                ?
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback><Skeleton className="h-12 w-12 rounded-full" /></AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><LayoutDashboardIcon className="h-4 w-4 mr-1" /><Link href={'dashboard'}>Dashboard</Link></DropdownMenuItem>
                        <DropdownMenuItem><UserIcon className="h-4 w-4 mr-1" /><Link href={'/'}>Profile</Link></DropdownMenuItem>
                        <DropdownMenuItem disabled><WalletIcon className="h-4 w-4 mr-1" />Billing</DropdownMenuItem>
                        <DropdownMenuItem disabled><SettingsIcon className="h-4 w-4 mr-1" />Settings</DropdownMenuItem>
                        <DropdownMenuItem disabled><DollarSign className="h-4 w-4 mr-1" />Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                :
                <NavbarAuth />
            }
        </>
    )
    return content

};
