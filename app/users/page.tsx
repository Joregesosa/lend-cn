import { Users as users, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<users[]> {
    // Fetch data from your API here.
    return [
        { id: "1", fullName: "John Doe", status: "Active", email: "example@gmail.com", role: "Admin" },
        { id: "2", fullName: "Jane Doe", status: "Inactive", email: "example2@gmail.com", role: "User" },
        // ...
    ]
}

export default async function Users() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
