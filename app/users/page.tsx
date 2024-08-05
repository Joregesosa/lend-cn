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
         <DataTable data={data} columns={columns}/>
    )
} 
