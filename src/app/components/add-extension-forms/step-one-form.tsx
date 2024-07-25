'use client'

import { Button } from "../../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "../ui/textarea"

export default function StepOneForm() {
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        description: z.string().min(2, {
            message: "Description must be at least 2 characters.",
        }),
        website: z.string().url({
            message: "Please enter a valid URL.",
        }),
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            website: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Extension name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the name of your extension." {...field} className="w-full text-white bg-transparent focus-visible:ring-0" />
                            </FormControl>
                            <FormDescription className="text-white">
                                Enter the name of your extension.
                            </FormDescription>
                            <FormMessage className="text-red-700" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Write a description of your extension. This will be displayed in the marketplace" {...field} className="w-full text-white bg-transparent focus-visible:ring-0" />
                            </FormControl>
                            <FormDescription className="text-white">
                                Provide a description for your hook.
                            </FormDescription>
                            <FormMessage className="text-red-700" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Website</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the website URL for your hook." {...field} className="w-full text-white bg-transparent focus-visible:ring-0" />
                            </FormControl>
                            <FormDescription className="text-white">
                                Enter the website URL for your hook.
                            </FormDescription>
                            <FormMessage className="text-red-700" />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Submit extension details</Button>
            </form>
        </Form>
    )
}