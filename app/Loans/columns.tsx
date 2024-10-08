import { ActionMenu } from "@/components/DataTable/ActionMenu"
import { ColumnDef } from "@tanstack/react-table"


interface LoansRequests {
    id: number
    name: string
    amount: number
    requestedAt: string
    status: string

}


export const columns: ColumnDef<LoansRequests>[] = [
    {
        header: 'ID',
        accessorKey: 'id',
    },
    {
        header: 'Nombre',
        accessorKey: 'name',
    },
    {
        header: 'Monto',
        accessorKey: 'amount',
    },
    {
        header: 'Fecha de solicitud',
        accessorKey: 'requestedAt',
    },
    {
        header: 'Estado',
        accessorKey: 'status',
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => ActionMenu({ row, endpoint: `/roles/edit/${row.original.id}` }),
    },
]

