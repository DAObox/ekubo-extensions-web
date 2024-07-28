'use client'

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
import { useRouter } from "next/navigation"

import { Button } from "../../components/ui/button"

import { useState } from "react"

export default function StepTwoForm() {
    const router = useRouter()
    const formSchema = z.object({
        repo: z.string().url({
            message: "Please enter a valid github URL.",
        }),
        deployment_address: z.string().min(2, {
            message: "Deployment address must be at least 2 characters.",
        }),
        network: z.string().min(2, {
            message: "Please select a network",
        })
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            repo: "",
            deployment_address: "",
            network: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        router.push("/submit-extension/step-two")
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                <FormField
                    control={form.control}
                    name="repo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Website</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the github URL for your extension." {...field} className="w-full text-white bg-transparent focus-visible:ring-0" />
                            </FormControl>
                            <FormDescription className="text-white">
                                Enter the URL of your GitHub repository.
                            </FormDescription>
                            <FormMessage className="text-red-700" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deployment_address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-white">Deployment address</FormLabel>
                            <FormControl>
                                <Input placeholder="0x1234..." {...field} className="w-full text-white bg-transparent focus-visible:ring-0" />
                            </FormControl>
                            <FormDescription className="text-white">
                                Enter the address of your deployed hook.
                            </FormDescription>
                            <FormMessage className="text-red-700" />
                        </FormItem>
                    )} />
                <Button type="submit" className="h-8 text-white bg-[#41127E] hover:bg-transparent hover:border-2 border-[#41127E]">Next</Button>
            </form>
        </Form>
    )
}