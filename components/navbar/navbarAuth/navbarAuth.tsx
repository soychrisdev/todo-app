export default function NavbarAuth() {
    const content = (
        <div className="sm:flex sm:gap-4">
            <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/"
            >
                Login
            </a>

            <div className="hidden sm:flex">
                <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/"
                >
                    Register
                </a>
            </div>
        </div>

    )

    return content
};
