import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function NavbarAuth() {
    const content = (
        <div className="sm:flex sm:gap-4">

            <Link href={'/'} className={buttonVariants({ variant: "default", className: 'rounded-md bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white shadow' })}>Authenticate</Link>

        </div>

    )

    return content
};

// '' 
