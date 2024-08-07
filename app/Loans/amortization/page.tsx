'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComboBox } from '@/components/ui/combobox';
import React, { useEffect } from 'react'
import { calculateInstallments, InstallmentDetail, PaymentType } from '@/helpers/computePayments'
import { DataTable } from '@/components/DataTable';
import { columns } from './columns'
import { ScrollArea } from '@/components/ui/scroll-area';

const types = [
    {
        value: 'monthly',
        label: 'Mensual'
    },
    {
        value: 'biweekly',
        label: 'Quincenal'
    },
    {
        value: 'weekly',
        label: 'Semanal'
    },
    {
        value: 'daily',
        label: 'Diario'
    },
]


type Values = {
    monto: string
    tipo: string
    plazo: string
    tasa: string
}

const Page = () => {
    const [values, setValues] = React.useState<Values>({
        monto: '', tipo: '', plazo: '', tasa: ''
    })
    const [installments, setInstallments] = React.useState<InstallmentDetail[]>([])


    useEffect(() => {
        const { monto, tipo, plazo, tasa } = values;
        if (monto && tipo && plazo && tasa) {
            const cuotas = calculateInstallments(Number(monto), Number(plazo), Number(tasa), tipo as PaymentType);
            setInstallments(cuotas)
        }
    }, [values]);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
        <>

            <div className="grid form-grid gap-4 bg-slate-100 z-10">
                <h2 className='font-bold text-2xl pb-2 col-span-4'>Tabla amortizadora</h2>
                <Label htmlFor="monto">
                    Monto del préstamo
                    <Input
                        id='monto'
                        value={values?.monto}
                        placeholder='$00.00'
                        className='w-full bg-white mt-2'
                        name='monto'
                        onChange={handleChange}
                    />
                </Label>

                <Label >
                    Frecuencia de pago
                    <ComboBox

                        options={types}
                        optionlabel='label'
                        optionvalue='value'
                        name="tipo"
                        onchange={(value) => setValues({ ...values, tipo: value })}
                    />
                </Label>

                <Label htmlFor="plazo">
                    Plazo del préstamo
                    <Input
                        id='plazo'
                        value={values?.plazo}
                        placeholder='plazo'
                        className='w-full bg-white mt-2'
                        name='plazo'
                        onChange={handleChange}
                    />
                </Label>

                <Label htmlFor="tasa">
                    Tasa de interés
                    <Input
                        id='tasa'
                        value={values?.tasa}
                        placeholder='0'
                        className='w-full bg-white mt-2'
                        name='tasa'
                        onChange={handleChange}
                    />
                </Label>

            </div>
            <DataTable columns={columns} data={installments} scrolableClassName='h-[calc(100vh-420px)]'/>
        </>
    )
}

export default Page
