import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/services")({ component: ServicesPage })

function ServicesPage() {
    return (
        <main>
            <section className="w-contain py-15">
                <h1 className="text-3xl text-white/50 text-outline lg:text-[2.8125rem]">Services</h1>
                <p className="mt-6 text-lg">Our services page is coming soon.</p>
            </section>
        </main>
    )
}
