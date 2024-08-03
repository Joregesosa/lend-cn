"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { format } from "date-fns"
import { DatePicker } from '@/components/ui/datepicker'

const formSchema = z.object({
    first_name: z.string().min(3).max(50),
    second_name: z.string().min(3).max(50),
    last_name: z.string().min(3).max(50),
    second_last_name: z.string().min(3).max(50),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    role: z.string().min(3).max(50),
    phone: z.string().min(3).max(50),
    address: z.string().min(3).max(50),
    city: z.string().min(3).max(50),
    country: z.string().min(3).max(50),
    birthday: z.date(),
})

export default function New() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            second_name: "",
            last_name: "",
            second_last_name: "",
            email: "",
            password: "",
            role: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            birthday: new Date(),
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const formattedValues = {
            ...values,
            birthday: format(values.birthday, 'yyyy-MM-dd'),
        };
        console.log(formattedValues)
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-2">
                <h2 className='text-2xl font-semibold'>Nuevo Usuario</h2>
                <legend className='form-grid gap-8'>
                    <FormField
                        control={form.control}
                        name="first_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Primer Nombre: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Primer nombre" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="second_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Segundo Nombre: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Segundo nombre" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Primer Apellido: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Primer apellido" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="second_last_name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Segundo Apellido: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Segundo apellido" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Password" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Rol: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Rol" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefono: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Telefono" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Direccion: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Direccion" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ciudad: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Ciudad" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pais: </FormLabel>
                                <FormControl>
                                    <Input placeholder="Pais" {...field} className='bg-white' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}

                    />

                    <FormField
                        control={form.control}
                        name="birthday"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Fecha de nacimiento: </FormLabel>
                                <FormControl>
                                    <DatePicker className="bg-white" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </legend>


                <Button type="submit">Enviar</Button>
            </form>
        </Form>
    )

}



