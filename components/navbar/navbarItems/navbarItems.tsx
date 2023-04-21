export default function NavbarItems() {
    const content = (

        <div className="hidden md:block">
            <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm">
                    <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Careers
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            History
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href="/"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )


    return content
}