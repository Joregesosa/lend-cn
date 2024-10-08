"use client"

import { ActionMenu } from "@/components/DataTable/ActionMenu"
import { ColumnDef } from "@tanstack/react-table"

export type Type = {
    id: string,
    fullName: string,
    status: string,
    email: string,
    role: string,
}

export const columns: ColumnDef<Type>[] = [
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
    {
        id: "actions",
        enableHiding: false,
        cell:({row})=> ActionMenu({row, endpoint: `/users/edit/${row.original.id}`}),
    },
]

