import localFont from "next/font/local";
import Navigation from "../components/Navigation";

const agrandirVariable = localFont({
    src: "../fonts/Agrandir Narrow Bold.otf",
    variable: "--font-agrandir",
    display: "swap",
    weight: "400",
});

const agrandirBody = localFont({
    src: "../fonts/Agrandir-C3-Regular.otf",
    variable: "--font-agrandirBody",
    display: "swap",
    weight: "400",
});

const IBMPlexSans = localFont({
    src: "../fonts/IBMPlexSans-Bold.otf",
    variable: "--font-IBMPlexSans",
    display: "swap",
});

const circular = localFont({
    src: "../fonts/CircularLL-Book.ttf",
    variable: "--font-circular",
    display: "swap",
});

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div lang="en" className={`${IBMPlexSans.variable} ${agrandirVariable.variable} ${circular.variable} ${agrandirBody.variable} w-full`}>
            <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
                <Navigation />
                {children}
            </div>
        </div>
    );
}
