import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface ActionMenuProps {
    row: any,
    endpoint: string
}

export const ActionMenu: React.FC<ActionMenuProps> = ({ row, endpoint }) => {
    const item = row.original

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <DotsHorizontalIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                    <button className='flex gap-2 hover:text-blue-700 items-center' onClick={() => navigator.clipboard.writeText(item.id)}>
                        <i className='pi pi-copy'></i>
                        Copiar ID
                    </button>

                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={endpoint} className='flex gap-2 hover:text-blue-700 items-center'>
                        <i className='pi pi-pencil'></i>
                        Edit
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    <button className='flex gap-2 hover:text-blue-700 items-center'>
                        <i className='pi pi-trash'></i>
                        Eliminar
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}