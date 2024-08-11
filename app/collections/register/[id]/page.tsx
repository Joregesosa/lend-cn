import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import exp from 'constants'
import React from 'react'
import { Interface } from 'readline'

export default function Page() {


    return (
        <>
            <h2 className='font-bold text-2xl pb-2'>Registrar pogo</h2>



            <div className='grid grid-cols-3'>

                <CustomerCard />

                <div className="">
                    <div className="bg-primary text-primary-foreground py-4 px-6 rounded-t-md">
                        <h2 className="text-2xl font-bold">Cuotas a pagar</h2>
                    </div>
                    <ul className="space-y-3">

                        {paymentRecord.map((payment) => (
                            <PaymentItem key={payment.id} payment={payment} />
                        ))}
                    </ul>
                </div>



            </div>

        </>
    )
}

const paymentRecord = [
    {
        id: 1,
        amount: 250,
        status: 2,
        expirationDate: '15/05/2023'
    },
    {
        id: 2,
        amount: 250,
        status: 1,
        expirationDate: '15/06/2023'
    },
    {
        id: 3,
        amount: 250,
        status: 3,
        expirationDate: '15/07/2023'
    },
    {
        id: 4,
        amount: 250,
        status: 2,
        expirationDate: '15/08/2023'
    },
    {
        id: 5,
        amount: 250,
        status: 1,
        expirationDate: '15/09/2023'
    },
    {
        id: 6,
        amount: 250,
        status: 3,
        expirationDate: '15/10/2023'
    },

]
interface PaymentItemProps {
    payment: {
        id: number,
        amount: number,
        status: number,
        expirationDate: string
    }
}
const PaymentItem: React.FC<PaymentItemProps> = ({ payment: { id, amount, status, expirationDate } }) => {
    const RenderStatus = ({ status }: { status: number }) => {
        switch (status) {
            case 1:
                return (
                    <span className='text-primary'>
                        pendiente
                    </span>
                )
            case 2:
                return (
                    <span className='text-green-600'>
                        pagada
                    </span>
                )
            case 3:
                return (
                    <span className='text-red-600'>
                        vencida
                    </span>
                )
            default:
                return (
                    <span className='text-gray-400'>
                        no definido
                    </span>
                )
        }
    }
    return (
        <li className="flex flex-col justify-center bg-card py-2  px-3 gap-1 shadow-md rounded-sm">
            <Label htmlFor={`${id}`} className='flex items-center gap-4'>
                <Checkbox id={`${id}`} disabled={status === 2} checked={status === 2} />
                Cuota {id}
                <p className="text-muted-foreground text-sm">Vence el {expirationDate}</p>
            </Label>
            <Label htmlFor={`${id}`} className='flex items-center justify-between'>
                <RenderStatus status={status} />
                <h6 className="text-xl font-bold text-right">${amount}</h6>
            </Label>
        </li>
    )

}

interface CustomerCardProps {
    customer: {
        id: number,
        name: string,
        lastName: string,
        dni: string,
        email: string,
        phone: string,
        address: string,
        city: string,
        province: string,
        postalCode: string,
        country: string,
        birthDate: string,
    }
}


export const CustomerCard: React.FC = () => {
    return (
        <div className="bg-primary text-primary-foreground py-4 px-6 rounded-t-md col-span-2">
            <h2 className="text-2xl font-bold">Datos del cliente</h2>
        </div>
    )
}