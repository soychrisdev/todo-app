'use client'
import NavbarLogo from "./navbarLogo/navbarLogo"
import NavbarAuth from "./navbarAuth/navbarAuth"
import NavbarItems from "./navbarItems/navbarItems"
import { MenuIcon } from "lucide-react"
import { menuItems } from "@/utils/navbarUtils/menuItems"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import NavbarItemsMobile from "./navbarItemsMobile/navbarItemsMobile"
import { Skeleton } from "../ui/skeleton"
import NavbarUser from "./navbarUser/navbarUser"

export default function Navbar() {


    const userLogged = true;

    const handleClick = () => {
        // setCounter(counter++)
    }
    const content = (

        <header aria-label="Site Header" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <NavbarLogo />
                    <NavbarItems menuItems={menuItems} />
                    <div className="flex items-center gap-4">
                        <NavbarUser status={userLogged} />
                        <NavbarItemsMobile menuItems={menuItems} />
                    </div>
                </div>
            </div>
        </header>
    )


    return content
}
