import { menuItems } from "@/utils/navbarUtils/menuItems";

export default function Footer() {
    return (

        <footer className="inset-x-0 mx-auto bg-white rounded-lg shadow m-4 dark:bg-gray-800 fixed md:bottom-0">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Christian Mesina™ All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">

                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.href} className="mr-4 hover:underline md:mr-6 ">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>


    )
};
