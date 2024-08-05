import React from 'react'
import { Input } from '../ui/input'

interface FilterProps {
    table: any
    field: string
    className?: string
}

const Filter: React.FC<FilterProps> = ({ table, field, className }) => {
    return (
        <Input
            placeholder={`Filter by ${field}...`}
            value={(table.getColumn(field)?.getFilterValue() as string) ?? ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                table.getColumn(field)?.setFilterValue(event.target.value)
            }
            className="max-w-sm bg-white"
        />
    )
}

export default Filter