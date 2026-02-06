import { TanStackDevtools } from "@tanstack/react-devtools"
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: "utf-8",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                title: "Moniak",
            },
        ],
        links: [
            {
                rel: "stylesheet",
                href: appCss,
            },
            {
                rel: "icon",
                type: "image/svg+xml",
                href: "/favicon.svg",
            },
        ],
    }),

    shellComponent: RootDocument,
    notFoundComponent: () => (
        <main className="w-contain flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold lg:text-6xl">404</h1>
            <p className="text-lg lg:text-xl">Page not found</p>
        </main>
    ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    )
}
