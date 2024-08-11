"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Permissions from "../../permissions"
import { useParams } from "next/navigation"


const FormSchema = z.object({
    permissions: z.array(z.number()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
    role: z.string().min(3).max(45),
})

export default function Edit() {
    const {id} = useParams();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            permissions: [],
            role: "",
        },
    })

    function onSubmit(value: z.infer<typeof FormSchema>) {
        console.log(value)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <h2 className='text-2xl font-semibold'>Editar Rol</h2>
                <legend className='form-grid gap-8'>
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Primer Nombre: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre del role" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </legend>
                <Permissions form={form} />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}