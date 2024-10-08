import React from 'react'
import { AppMenu } from '@/config/siteConfig'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Link from 'next/link'
import { ScrollArea } from './ui/scroll-area'

export default function Appbar() {
  return (
    <aside className="w-[280px] h-[calc(100vh-8.1rem)] bg-white rounded-xl shadow-md  overflow-x-hidden flex-shrink-0">
      <ScrollArea className="h-full py-4">
        <Accordion type="single" collapsible className='mx-2 px-2'>
          {
            Object.entries(AppMenu).map(([key, value]) =>

              Array.isArray(value) ?
                <>

                  <h2 className="font-bold text-sm py-1">{key}</h2>

                  {value.map((part) =>

                    <AccordionItem value={part.title} className="border-none" key={part.title}>

                      <AccordionTrigger className="hover:bg-slate-100 hover:no-underline focus:ring-2 px-4 h-fit py-2 rounded-lg text-sm gap-4 font-semibold">
                        <div className="flex items-center gap-4">
                          <i className={part.icon} />
                          {part.title}
                        </div>
                      </AccordionTrigger>

                      {
                        part.content.map((item, index) =>
                          <AccordionContent key={index} className="p-0">
                            <Link href={item.href} className="flex gap-4 items-center text-sm pl-4 py-2 rounded-lg hover:bg-slate-100 active:font-bold active:text-blue-600">

                              <i className={item.icon} />
                              {item.title}
                            </Link>
                          </AccordionContent>
                        )
                      }

                    </AccordionItem>
                  )}


                </> :

                <>
                  <h2 className="font-bold text-sm py-1" key={key}>{key}</h2>

                  <Link href={value.href} className="flex gap-4 items-center text-sm pl-4 py-2 rounded-lg hover:bg-slate-100 active:font-bold active:text-blue-600">

                    <i className={value.icon} />
                    {value.title}
                  </Link>

                </>
            )}

        </Accordion>
      </ScrollArea>
    </aside>
  )
}
