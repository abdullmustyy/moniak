"use client"

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import FormField from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "@tanstack/react-router"

const quoteSchema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.email("Please enter a valid email address"),
    telephone: z.string().min(1, "Please enter your telephone number"),
    budget: z.string().min(1, "Please select a budget"),
    message: z.string().min(1, "Please tell us about your project"),
    marketingConsent: z.boolean().optional(),
})

type TQuoteFormData = z.infer<typeof quoteSchema>

const budgetOptions = [
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-25k", label: "$10,000 - $25,000" },
    { value: "25k-50k", label: "$25,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "100k+", label: "$100,000+" },
]

const QuoteForm = () => {
    const form = useForm<TQuoteFormData>({
        resolver: standardSchemaResolver(quoteSchema),
        defaultValues: {
            name: "",
            email: "",
            telephone: "",
            budget: "",
            message: "",
            marketingConsent: false,
        },
    })

    const onSubmit = (data: TQuoteFormData) => {
        console.log("Quote submitted:", data)
        form.reset()
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
                <FormField name="name" control={form.control}>
                    {({ value, ...field }) => (
                        <Input
                            {...field}
                            value={value as string}
                            placeholder="Name"
                            className="h-12 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                        />
                    )}
                </FormField>

                <FormField name="email" control={form.control}>
                    {({ value, ...field }) => (
                        <Input
                            {...field}
                            value={value as string}
                            type="email"
                            placeholder="Email"
                            className="h-12 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                        />
                    )}
                </FormField>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                <FormField name="telephone" control={form.control}>
                    {({ value, ...field }) => (
                        <Input
                            {...field}
                            value={value as string}
                            type="tel"
                            placeholder="Telephone"
                            className="h-12 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                        />
                    )}
                </FormField>

                <FormField name="budget" control={form.control}>
                    {({ value, onChange }) => (
                        <Select value={value as string} onValueChange={onChange}>
                            <SelectTrigger className="h-12! w-full rounded-lg border-[#E5E5E5] text-xs text-[#858B8E]">
                                <SelectValue placeholder="Budget" />
                            </SelectTrigger>
                            <SelectContent>
                                {budgetOptions.map((option, index) => (
                                    <SelectItem key={option.value + index} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                </FormField>
            </div>

            <FormField name="message" control={form.control}>
                {({ value, ...field }) => (
                    <Textarea
                        {...field}
                        value={value as string}
                        placeholder="Tell us more about your project, needs and budget."
                        className="min-h-32 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                    />
                )}
            </FormField>

            <FormField name="marketingConsent" control={form.control} orientation="horizontal">
                {({ value, onChange }) => (
                    <div className="flex items-start gap-3">
                        <Checkbox
                            id="marketingConsent"
                            checked={value as boolean}
                            onCheckedChange={onChange}
                            className="mt-1"
                        />
                        <label htmlFor="marketingConsent" className="text-sm leading-relaxed">
                            Yes, I&apos;d like to receive occasional marketing emails from us. I have the right to opt
                            out at any time.{" "}
                            <Link to="/" className="text-[#20A91E] underline">
                                View privacy policy.
                            </Link>
                        </label>
                    </div>
                )}
            </FormField>

            <Button type="submit" className="h-14 w-full rounded-lg lg:text-lg">
                Get Started
            </Button>
        </form>
    )
}

export default QuoteForm
