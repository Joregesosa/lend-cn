"use client"

import * as React from "react"
import { Type, columns } from "./columns"
import { DataTable } from "@/components/DataTable"

const data: Type[] = [
    {
        id: "1",
        rol: "Admin",
        status: "Active",
        permissions: "users.show, users.create, users.update, users.delete",
    },
    {
        id: "2",
        rol: "User",
        status: "Active",
        permissions: "users.show",
    },
    {
        id: "3",
        rol: "Guest",
        status: "Active",
        permissions: "users.show",
    }





]


export default function Roles() {


    return (
        <DataTable data={data} columns={columns} />
    )
} 
