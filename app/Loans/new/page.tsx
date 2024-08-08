'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form'
import { string, z } from 'zod';
import { loanType } from '../types';
import { ComboBox } from '@/components/ui/combobox';
import { Fieldset } from '@/components/ui/fieldset';



const formSchema = z.object({
    amount: z.preprocess((val) => parseFloat(val as string), z.number().min(0)),
    term: z.preprocess((val) => parseInt(val as string), z.number().min(0)),
    rate: z.preprocess((val) => parseFloat(val as string), z.number().min(0)),
    type: z.string().min(3).max(50),
    first_name: z.string().min(3).max(50),
    second_name: z.string().min(3).max(50),
    last_name: z.string().min(3).max(50),
    second_last_name: z.string().min(3).max(50),
    birthdate: z.preprocess((val) => val instanceof Date ?
        format(new Date(val as unknown as string), 'yyyy-MM-dd')
        : '', z.string().min(8)),
    idCard: z.string().min(3).max(50),
    email: z.string().email(),
    phone: z.string().min(3).max(50),
    address: z.string().min(3).max(50),
    city: z.string().min(3).max(50),
    country: z.string().min(3).max(50),
    job: z.string().min(3).max(50),
    company: z.string().min(3).max(50),
    position: z.string().min(3).max(50),
    maritalStatus: z.string().min(3).max(50),
    salary: z.preprocess((val) => parseFloat(val as string), z.number().min(0)),
    dependents: z.preprocess((val) => parseInt(val as string), z.number().min(0)),

    spouse: z.string().min(3).max(50).optional(),
    spouseJob: z.string().min(3).max(50).optional(),
    spouseSalary: z.preprocess((val) => parseFloat(val as string), z.number().min(0)).optional(),
    spouseCompany: z.string().min(3).max(50).optional(),
    spousePosition: z.string().min(3).max(50).optional(),
    spousePhone: z.string().min(3).max(50).optional(),
    spouseEmail: z.string().email().optional(),
    spouseBirthdate: z.preprocess((val) => val instanceof Date ?
        format(new Date(val as unknown as string), 'yyyy-MM-dd')
        : '', z.string().optional()),
    spouseIdCard: z.string().min(3).max(50).optional(),
})


export default function New() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            amount: 0,
            term: 0,
            rate: 0,
            type: "",
            first_name: "",
            second_name: "",
            last_name: "",
            second_last_name: "",
            birthdate: '',
            idCard: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            job: "",
            company: "",
            position: "",
            maritalStatus: "",
            salary: 0,
            dependents: 0,
            spouse: "",
            spouseJob: "",
            spouseSalary: 0,
            spouseCompany: "",
            spousePosition: "",
            spousePhone: "",
            spouseEmail: "",
            spouseBirthdate: '',
            spouseIdCard: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <>
            <h2 className='text-2xl font-semibold sticky top-0 bg-slate-100 pb-2'>Solicituid de prestamo</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-2">

                    <Fieldset legend="Datos del prestamo">

                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Monto: </FormLabel>
                                    <FormControl>
                                        <Input type='number' placeholder="Monto" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="term"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Plazo: </FormLabel>
                                    <FormControl>
                                        <Input type='number' placeholder="Plazo" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="rate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tasa: </FormLabel>
                                    <FormControl>
                                        <Input type='number' placeholder="Tasa" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo: </FormLabel>
                                    <FormControl>
                                        <ComboBox
                                            name='type'
                                            options={loanType}
                                            optionlabel='label'
                                            optionvalue='value'
                                            onchange={(value) => field.onChange(value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </Fieldset>
                    <Fieldset legend="Datos del solicitante">

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
                            name="birthdate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fecha de nacimiento: </FormLabel>
                                    <FormControl>
                                        <DatePicker className="bg-white"
                                            onChange={field.onChange}
                                            name='birthdate'
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="idCard"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cédula: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cédula" {...field} className='bg-white' />
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
                                    <FormLabel>Correo: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Correo" {...field} className='bg-white' />
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
                                    <FormLabel>Teléfono: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Teléfono" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className='md:col-span-2'>
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
                            name="job"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Trabajo: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Trabajo" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Compañia: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Compañia" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="position"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cargo: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cargo" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="salary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Salario: </FormLabel>
                                    <FormControl>
                                        <Input type='number' placeholder="Salario" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="dependents"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Dependientes: </FormLabel>
                                    <FormControl>
                                        <Input type='number' placeholder="Dependientes" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="maritalStatus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Estado civil: </FormLabel>
                                    <FormControl>
                                        <ComboBox

                                            options={
                                                [
                                                    { label: 'Soltero', value: 'single' },
                                                    { label: 'Casado', value: 'married' },
                                                    { label: 'Divorciado', value: 'divorced' },
                                                    { label: 'Viudo', value: 'widower' },
                                                    { label: 'Union libre', value: 'freeUnion' },
                                                ]
                                            }
                                            optionlabel='label'
                                            optionvalue='value'
                                            name='maritalStatus'
                                            onchange={(value) => field.onChange(value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </Fieldset>

                    <Fieldset legend='Datos del conyugue'>
                        <FormField
                            control={form.control}
                            name="spouse"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="spouseJob"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Trabajo Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Trabajo Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="spouseSalary"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Salario Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input type='number' placeholder="Salario Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="spouseCompany"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Compañia Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Compañia Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="spousePosition"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cargo Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cargo Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="spousePhone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Telefono Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Telefono Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />

                        <FormField
                            control={form.control}
                            name="spouseEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Correo Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Correo Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />


                        <FormField
                            control={form.control}
                            name="spouseBirthdate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fecha de nacimiento Conyuge: </FormLabel>
                                    <FormControl>
                                        <DatePicker className="bg-white" name={field.name} onChange={field.onChange} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="spouseIdCard"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cédula Conyuge: </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Cédula Conyuge" {...field} className='bg-white' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}

                        />
                    </Fieldset>

                    <Button type="submit">Enviar</Button>
                </form>
            </Form >
        </>
    )
}
