import { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
    return (
        <main className="flex-grow content-start max-w-3xl mx-auto grid p-6 gap-6">
            {children}
        </main>
    );
};
