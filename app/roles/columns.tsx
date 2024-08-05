"use client"

import { ActionMenu } from "@/components/DataTable/ActionMenu"
import { ColumnDef } from "@tanstack/react-table"

export type Type = {
    id: string,
    rol: string,
    status: string,
    permissions: string,
}

export const columns: ColumnDef<Type>[] = [
    {
        header: "ID",
        accessorKey: "id",
    },
    {
        header: "Rol",
        accessorKey: "rol",
    },
    {
        header: "Status",
        accessorKey: "status",
    },
    {
        header: "Permissions",
        accessorKey: "permissions",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => ActionMenu({ row, endpoint: `/roles/edit/${row.original.id}` }),
    },
]

