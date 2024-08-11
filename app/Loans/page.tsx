'use client'
import React from 'react'
import { DataTable } from '@/components/DataTable'
import { columns } from './columns'

const data = [
    {
        id: 1,
        name: 'Juan Perez',
        amount: 1000,
        requestedAt: '2021-01-01',
        status: 'Aprobado'
    },
    {
        id: 2,
        name: 'Maria Lopez',
        amount: 2000,
        requestedAt: '2021-01-02',
        status: 'Rechazado'
    },
    {
        id: 3,
        name: 'Pedro Ramirez',
        amount: 3000,
        requestedAt: '2021-01-03',
        status: 'Pendiente'
    },
    {
        id: 4,
        name: 'Jose Perez',
        amount: 4000,
        requestedAt: '2021-01-04',
        status: 'Aprobado'
    },
    {
        id: 5,
        name: 'Ana Lopez',
        amount: 5000,
        requestedAt: '2021-01-05',
        status: 'Rechazado'
    },
    {
        id: 6,
        name: 'Rosa Ramirez',
        amount: 6000,
        requestedAt: '2021-01-06',
        status: 'Pendiente'
    },
    {
        id: 7,
        name: 'Juan Perez',
        amount: 1000,
        requestedAt: '2021-01-01',
        status: 'Aprobado'
    },
    {
        id: 8,
        name: 'Maria Lopez',
        amount: 2000,
        requestedAt: '2021-01-02',
        status: 'Rechazado'
    },
    {
        id: 9,
        name: 'Pedro Ramirez',
        amount: 3000,
        requestedAt: '2021-01-03',
        status: 'Pendiente'
    },
    {
        id: 10,
        name: 'Jose Perez',
        amount: 4000,
        requestedAt: '2021-01-04',
        status: 'Aprobado'
    },
    {
        id: 11,
        name: 'Ana Lopez',
        amount: 5000,
        requestedAt: '2021-01-05',
        status: 'Rechazado'
    },
    {
        id: 12,
        name: 'Rosa Ramirez',
        amount: 6000,
        requestedAt: '2021-01-06',
        status: 'Pendiente'
    },
    {
        id: 13,
        name: 'Juan Perez',
        amount: 1000,
        requestedAt: '2021-01-01',
        status: 'Aprobado'
    },
    {
        id: 14,
        name: 'Maria Lopez',
        amount: 2000,
        requestedAt: '2021-01-02',
        status: 'Rechazado'
    },
    {
        id: 15,
        name: 'Pedro Ramirez',
        amount: 3000,
        requestedAt: '2021-01-03',
        status: 'Pendiente'
    },
    {
        id: 16,
        name: 'Jose Perez',
        amount: 4000,
        requestedAt: '2021-01-04',
        status: 'Aprobado'
    },
    {
        id: 17,
        name: 'Ana Lopez',
        amount: 5000,
        requestedAt: '2021-01-05',
        status: 'Rechazado'
    },
    {
        id: 18,
        name: 'Rosa Ramirez',
        amount: 6000,
        requestedAt: '2021-01-06',
        status: 'Pendiente'
    },
    {
        id: 19,
        name: 'Juan Perez',
        amount: 1000,
        requestedAt: '2021-01-01',
        status: 'Aprobado'
    },

]

export default function Requests() {

    return (
        <>
            <h2 className='font-bold text-2xl pb-2 col-span-4'>Lista de solicitudes</h2>
            <DataTable columns={columns} data={data} filterField='name' scrollableClassName='h-[calc(100vh-340px)]' />
        </>
    )

}
