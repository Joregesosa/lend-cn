import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Link from "next/link";
import { permission, title } from "process";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between px-10 h-16 items-center shadow-md sticky top-0 bg-white">
        <figure className="rounded-full w-16 h-full overflow-hidden">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={256}
            height={256}
            priority
          />
        </figure>
        <ul className="flex gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

      </nav>

      <div className="absolute top-0 left-0 w-[23rem] h-screen -z-10 px-7 pb-7 pt-[5.8rem]">
        <aside className="w-full h-full bg-white rounded-xl shadow-md overflow-y-scroll overflow-x-hidden px-4 py-4">
          {
            Object.entries(AppMenu).map(([key, value]) =>

              'content' in value ?
                <>

                  <h2 className="font-bold text-sm py-1">{key}</h2>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" className="border-none" >

                      <AccordionTrigger className="hover:bg-slate-100 hover:no-underline focus:ring-2 px-2 h-fit py-2 rounded-lg text-sm gap-4 font-semibold">
                        <div className="flex items-center gap-4">
                          <i className={value.icon} />
                          {value.title}
                        </div>
                      </AccordionTrigger>

                      {
                        value.content.map((item, index) =>
                          <AccordionContent key={index} className="p-0">
                            <Link href={item.href} className="flex gap-4 items-center text-sm pl-4 py-2 rounded-lg hover:bg-slate-100 active:font-bold active:text-blue-600">

                              <i className={item.icon} />
                              {item.title}
                            </Link>
                          </AccordionContent>
                        )
                      }

                    </AccordionItem>
                  </Accordion>

                </>
                :

                <>
                  <h2 className="font-bold text-sm py-1" key={key}>{key}</h2>

                  <Link href={value.href} className="flex gap-4 items-center text-sm pl-4 py-2 rounded-lg hover:bg-slate-100 active:font-bold active:text-blue-600">

                    <i className={value.icon} />
                    {value.title}
                  </Link>

                </>



            )}



        </aside>
      </div>

    </div>
  );
}

const AppMenu = {
  Home: {
    title: "Dashboard",
    href: "/",
    icon: "pi pi-home",
    permission: "dashboard.view"
  },
  Operaciones: {
    title: "Prestamos",
    icon: "pi pi-money-bill",
    content: [
      {
        title: "Nuevo Prestamo",
        href: "/prestamos/solicitar",
        icon: "pi pi-plus-circle",
        permission: "prestamos.create"
      },
      {
        title: "Solicitudes",
        href: "/prestamos/solicitudes",
        icon: "pi pi-list",
        permission: "prestamos.view"
      }
    ]
  }


}


interface CustomItemProps {
  items: any[];

}

const CustomItem: React.FC<CustomItemProps> = ({ items }) => {
  return (
    <Accordion type="single" collapsible className="">

    </Accordion>
  )
}