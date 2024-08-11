import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function Page() {


    return (
        <>
            <h2 className='font-bold text-2xl pb-2'>Registrar pogo</h2>



            <div className='grid grid-cols-3 gap-4'>

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
            <Label htmlhtmlFor={`${id}`} className='flex items-center gap-4'>
                <Checkbox id={`${id}`} disabled={status === 2} checked={status === 2} />
                Cuota {id}
                <p className="text-muted-foreground text-sm">Vence el {expirationDate}</p>
            </Label>
            <Label htmlhtmlFor={`${id}`} className='flex items-center justify-between'>
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
        <div className='col-span-2'>
            <div className="bg-primary text-primary-foreground py-4 px-6 rounded-t-md col-span-2">
                <h2 className="text-2xl font-bold">Datos del cliente</h2>
            </div>

            <div
                className="rounded-b-md border bg-card text-card-foreground shadow-sm w-full p-6 grid gap-6"
            >
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-muted-foreground">Cliente</p>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Client ID:</span>
                            <span>12345678</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">No.:</span>
                            <span>987654321</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">$</span>
                        <Input
                            className="text-lg font-medium max-w-36"
                            type="number"
                            value="1500"
                        />
                    </div>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">DNI:</span>
                        <span>12345678</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Dirección:</span>
                        <span>123 Main St, Anytown USA</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Teléfono:</span>
                        <span>555-1234</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span>john@example.com</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Garante:</span>
                        <span>Jane Doe (555-5678)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            role="checkbox"
                            aria-checked="false"
                            data-state="unchecked"
                            value="on"
                            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                            id="additional-charges"
                        ></button>
                        <div className="grid gap-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="additional-charges"
                            >
                                Additional Charges
                            </label>
                            <div className="grid md:grid-cols-2 gap-2">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="charge-amount"
                                    >
                                        Charge Amount
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="charge-amount"
                                        type="number"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        htmlFor="charge-description"
                                    >
                                        Charge Description
                                    </label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="charge-description"
                                    ></textarea>
                                </div>
                            </div>

                            <Button className="w-52">Record Payment</Button>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}