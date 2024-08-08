'use client'
import React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"


interface ComboBoxProps {
  options: { [key: string]: string | number | boolean }[]
  optionlabel: string
  optionvalue: string
  onchange: (value: string) => void
  name: string
}

export const ComboBox: React.FC<ComboBoxProps> = ({ options, optionlabel, optionvalue, onchange }) => {
  const [selected, setSelected] = React.useState<{ [key: string]: string | number | boolean }>({});

  const handleSelect = (data: { [key: string]: string | number | boolean }) => {
    setSelected(data)
    onchange(data[optionvalue].toString())
  }

  return (
    <>

      <Popover>
        <PopoverTrigger asChild>

          <Button
            variant="outline"
            role="combobox"
            className={cn(
              "justify-between bg-white mt-2 w-full",
              !selected && selected[optionlabel]
            )}
          >
            {selected[optionlabel] || "Select an option"}

          </Button>

        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput
              placeholder="Search..."
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    value={option[optionlabel].toString()}
                    key={option[optionvalue].toString()}
                    onSelect={() => { handleSelect(option) }}
                  >
                    {option[optionlabel]}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        option[optionvalue] === selected[optionvalue]
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

    </>
  )
}