
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
                    title: "Tabla de amortización",
                    href: "/loans/amortization",
                    icon: "pi pi-table",
                    permission: "default"
                }
                , {
                    title: "Nuevo Préstamo",
                    href: "/loans/new",
                    icon: "pi pi-plus-circle",
                    permission: "prestamos.create"
                },
                {
                    title: "Solicitudes",
                    href: "/loans",
                    icon: "pi pi-list",
                    permission: "prestamos.view"
                }
            ]
        },
        {
            title: "Cobros",
            icon: "pi pi-wallet",
            content: [
                {
                    title: "Nuevo Cobro",
                    href: "/collections/new",
                    icon: "pi pi-plus-circle",
                    permission: "cobros.create"
                },
                {
                    title: "Cobros",
                    href: "/collections",
                    icon: "pi pi-list",
                    permission: "cobros.view"
                }
            ]
        }
      

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
                    href: "/roles/new",
                    icon: "pi pi-plus-circle",
                    permission: "roles.create"
                }
            ]
        }

    ],
}
