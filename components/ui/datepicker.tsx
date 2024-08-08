import React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { format } from "date-fns"

interface DatePickerProps {
    className?: string,
    onChange?: (date: Date | undefined) => void,
    name: string,
}

export const DatePicker: React.FC<DatePickerProps> = ({ className, onChange, name }) => {
    const [date, setDate] = React.useState<Date>()

    const handleDateChange = (date: Date | undefined) => {
        setDate(date)

        if (onChange) {
            onChange(date)
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    name={name}
                    className={cn(
                        `w-full justify-start text-left font-normal ${className}`,
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "yyyy-MM-dd") : <span>Seleccionar fecha</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}