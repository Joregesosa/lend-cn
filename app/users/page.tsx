"use client"

import * as React from "react"
import { Type, columns } from "./columns"
import { DataTable } from "@/components/DataTable"

const data: Type[] = [
    {
        id: "1",
        fullName: "John Doe",
        status: "Active",
        email: "John@hotmail.com",
        role: "Admin",
    },
    {
        id: "2",
        fullName: "Jane Doe",
        status: "Active",
        email: "Jane@hotmail.com",
        role: "User",
    },
]


export default function Users() {


    return (
        <>
            <h2 className='font-bold text-2xl pb-2 col-span-4'>Lista de usuarios</h2>
            <DataTable data={data} columns={columns} filterField="fullName" scrollableClassName='h-[calc(100vh-340px)]' />
        </>

    )
} 
