
export const AppMenu = {
    Home: {
        title: "Dashboard",
        href: "/",
        icon: "pi pi-home",
        permission: "dashboard.view"
    },

    Operaciones: [
        {
            title: "Prestamos",
            icon: "pi pi-money-bill",
            content: [
                {
                    title: "Tabla de Mortizaciones",
                    href: "/prestamos/tabla",
                    icon: "pi pi-table",
                    permission: "default"
                }
                , {
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
        },
        {
            title: "Cobros",
            icon: "pi pi-money-bill",
            content: [
                {
                    title: "Tabla de Mortizaciones",
                    href: "/prestamos/tabla",
                    icon: "pi pi-table",
                    permission: "default"
                }
                , {
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
        },

    ],

    Configuraciones: [
        {
            title: "Usuarios",
            icon: "pi pi-users",
            content: [
                {
                    title: "Usuarios",
                    href: "/users",
                    icon: "pi pi-users",
                    permission: "usuarios.view"
                },
                {
                    title: "Nuevo Usuarios",
                    href: "/users/new",
                    icon: "pi pi-user-plus",
                    permission: "usuarios.create"
                },
            ]
        },
        {
            title: "Roles",
            icon: "pi pi-lock",
            content: [
                {
                    title: "Roles",
                    href: "/roles",
                    icon: "pi pi-list",
                    permission: "roles.view"
                },
                {
                    title: "Nuevo Rol",
                    href: "/roles/nuevo",
                    icon: "pi pi-plus-circle",
                    permission: "roles.create"
                }
            ]
        }

    ]



}
