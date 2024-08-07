import { ColumnDef } from "@tanstack/react-table"
import { InstallmentDetail } from "@/helpers/computePayments"

export const columns: ColumnDef<InstallmentDetail>[] = [
    {
        header: 'No. Cuota',
        accessorKey: 'installmentNumber',
    },
    {
        header: 'Cuota',
        accessorKey: 'installmentAmount',
        cell: ({ row }) => row.original.installmentAmount.toFixed(2),
    },
    {
        header: 'Interes',
        accessorKey: 'interest',
        cell: ({ row }) => row.original.interest.toFixed(2),
    },
    {
        header: 'Capital',
        accessorKey: 'principal',
        cell: ({ row }) => row.original.principal.toFixed(2),
    },
    {
        header: 'Saldo',
        accessorKey: 'remainingBalance',
        cell: ({ row }) => row.original.remainingBalance.toFixed(2),
    },
]

