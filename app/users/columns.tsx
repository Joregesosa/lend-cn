"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Users = {
    id: string,
    fullName: string,
    status: string,
    email: string,
    role: string,
}

export const columns: ColumnDef<Users>[] = [
    {
        header: "ID",
        accessorKey: "id",
    },
    {
        header: "Nombre",
        accessorKey: "fullName",
    },
    {
        header: "Status",
        accessorKey: "status",
    },
    {
        header: "Email",
        accessorKey: "email",
    },
    {
        header: "Role",
        accessorKey: "role",
    },
]

 