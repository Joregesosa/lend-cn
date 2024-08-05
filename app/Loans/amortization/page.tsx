'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComboBox } from '@/components/ui/combobox';
import React from 'react'

const types = [
    {
        value: 'mensual',
        label: 'Mensual'
    },
    {
        value: 'quincenal',
        label: 'Quincenal'
    },
    {
        value: 'semanal',
        label: 'Semanal'
    }
]

type Values = {
    monto: number | undefined;
    tipo: string;
    plazo: number | undefined;
    tasa: number | undefined;
}
const Page = () => {
    const [values, setValues] = React.useState<Values>({
        monto: undefined,
        tipo: '',
        plazo: undefined,
        tasa: undefined
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
        <>
            <div className="grid form-grid gap-4">
                <Label htmlFor="monto">
                    Monto del préstamo
                    <Input
                        value={values?.monto}
                        placeholder='$00.00'
                        className='w-full bg-white mt-2'
                        name='monto'
                        onChange={handleChange}
                    />
                </Label>

                <Label htmlFor="tipo">
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
                        value={values?.tasa}
                        placeholder='0'
                        className='w-full bg-white mt-2'
                        name='tasa'
                        onChange={handleChange}
                    />
                </Label>

            </div>

        </>
    )
}

export default Page
