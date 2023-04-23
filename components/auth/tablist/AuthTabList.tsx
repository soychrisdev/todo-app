import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AuthTabList() {
    return (
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
    )
};
