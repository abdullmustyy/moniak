import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod/v4"

import { Button } from "@/components/ui/button"
import { Field, FieldError } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { footerLinks, socialLinks } from "@/constants"
import { Link } from "@tanstack/react-router"

const newsletterSchema = z.object({
    email: z.email("Please enter a valid email address"),
})

type TNewsletterFormData = z.infer<typeof newsletterSchema>

const Footer = () => {
    const form = useForm<TNewsletterFormData>({
        resolver: standardSchemaResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    })

    const onSubmit = (data: TNewsletterFormData) => {
        // Handle newsletter subscription
        console.log("Subscribed:", data.email)
        form.reset()
    }

    return (
        <footer>
            {/* Subscribe to our Quarterly Newsletter */}
            <section className="bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(180deg,rgba(0,0,0,0.53)_0.48%,rgba(0,0,0,0)_100%),url('/images/newsletter-bg.png')] bg-cover bg-center py-15 lg:px-15">
                <div className="w-contain flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-center text-lg font-bold lg:text-left lg:text-xl">
                        Subscribe to our Quarterly Newsletter
                    </p>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
                        <Controller
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <Input
                                        {...field}
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="h-11 rounded-l-[14px]! rounded-r-none border-0 bg-white! placeholder:text-[#848484] focus-visible:ring-0 lg:h-20.5 lg:w-115!"
                                        aria-invalid={fieldState.invalid}
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />
                        <Button type="submit" className="h-11 rounded-l-none rounded-r-[14px]! px-10 lg:h-20.5">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            {/* Links */}
            <section className="bg-primary pt-15 pb-30">
                <div className="w-contain flex flex-col gap-15 border-b border-white pb-5 lg:flex-row lg:gap-30">
                    <div className="flex flex-2/5 flex-col gap-6">
                        <Link to="/" className="w-fit">
                            <img src="/images/logo.svg" alt="Moniak Logo" />
                        </Link>
                        <p className="text-xs lg:text-lg">
                            Each project we undertake is more than just
                            <br className="inline lg:hidden" /> construction; it's an opportunity to leave a lasting
                            <br className="inline lg:hidden" /> legacy. Through meticulous attention to detail
                        </p>
                    </div>

                    <div className="flex flex-3/5 flex-col gap-30">
                        <div className="grid gap-10 lg:grid-cols-3 lg:gap-4">
                            {footerLinks.map((section) => (
                                <div key={section.title} className="space-y-6">
                                    <h3 className="font-montserrat text-lg font-semibold lg:text-2xl">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.label} className="whitespace-nowrap">
                                                <Link to={link.to} className="lg:text-xl">
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="font-michroma text-xs lg:text-xl">Connect with us on social media</p>
                            <div className="flex gap-4 lg:gap-8">
                                {socialLinks.map((link) => (
                                    <Link key={link.to} to={link.to}>
                                        <img src={link.icon} alt="Social Icon" className="size-4 lg:size-auto" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#4A1111] py-4">
                <div className="w-contain flex items-center justify-center">
                    <p className="text-center text-sm lg:text-lg">
                        Copyright @ 2024:{" "}
                        <a href="mailto:moniak@project.com" className="text-[#20A91E]">
                            moniak@project.com
                        </a>
                        . All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
