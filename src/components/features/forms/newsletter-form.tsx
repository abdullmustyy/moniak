"use client"

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"

import { Button } from "@/components/ui/button"
import FormField from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"

const newsletterSchema = z.object({
    email: z.email("Please enter a valid email address"),
})

type TNewsletterFormData = z.infer<typeof newsletterSchema>

const NewsletterForm = () => {
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
            <FormField name="email" control={form.control}>
                {(field, fieldState) => (
                    <Input
                        {...field}
                        id="newsletter-email"
                        type="email"
                        placeholder="Enter your email address"
                        className="h-11 rounded-l-[6px]! rounded-r-none border-0 bg-white! placeholder:text-xs placeholder:text-[#848484] focus-visible:ring-0 lg:h-20.5 lg:w-115! lg:rounded-l-[14px]! lg:placeholder:text-base"
                        aria-invalid={fieldState.invalid}
                    />
                )}
            </FormField>
            <Button
                type="submit"
                className="h-11 rounded-l-none rounded-r-[6px]! text-xs lg:h-20.5 lg:rounded-r-[14px]! lg:px-10 lg:text-base"
            >
                Subscribe
            </Button>
        </form>
    )
}

export default NewsletterForm
