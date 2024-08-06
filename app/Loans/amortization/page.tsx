'use client'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ComboBox } from '@/components/ui/combobox';
import React, { useEffect } from 'react'
import { calculateInstallments, PaymentType } from '@/helpers/computePayments'
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
        monto: '',
        tipo: '',
        plazo: '',
        tasa: ''
    })

    useEffect(() => {
        const { monto, tipo, plazo, tasa } = values;
        if (monto && tipo && plazo && tasa) {
            const cuotas = calculateInstallments(Number(monto), Number(plazo), Number(tasa), tipo as PaymentType);
            console.log(cuotas);

        }
    }, [values]);



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

        </>
    )
}

export default Page

/* function calcularCuotas(_monto: number, tipo: TipoPago, _plazo: number, _interes: number) {
        let monto: number = Number(_monto);
        let plazo: number = Number(_plazo);
        let interes: number = Number(_interes);

        let totalInteres = monto * interes / 100;
        let totalPagar = monto + totalInteres;
        let proyeccion: number = totalPagar / plazo;
        const cuotas: CuotaDetalle[] = [];

        for (let i = 0; i < plazo; i++) {
            if ((i + 1) === plazo) {
                cuotas.push({
                    numeroCuota: i + 1,
                    cuota: monto + totalInteres,
                    capital: monto,
                    interes: totalInteres,
                    saldoRestante: 0.00
                });
                break;
            }
            let interesCuota = totalInteres * 60 / 100;
            totalInteres -= interesCuota;
            let capitalCuota = proyeccion - interesCuota;
            monto -= capitalCuota;

            cuotas.push({
                numeroCuota: i + 1,
                cuota: proyeccion,
                capital: capitalCuota,
                interes: interesCuota,
                saldoRestante: monto
            });


        }

        console.log(cuotas);


    }
 */