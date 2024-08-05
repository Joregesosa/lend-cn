import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import React from 'react'

interface PermissionProps {
    form: {
        control: any,
    }
}
type Permission = {
    id: number;
    permission: string;
};

const permissions: readonly Permission[] = [
    { id: 1, permission: "users.view" },
    { id: 2, permission: "users.create" },
    { id: 3, permission: "users.update" },
    { id: 4, permission: "users.delete" },
    { id: 5, permission: "roles.view" },
    { id: 6, permission: "roles.create" },
    { id: 7, permission: "roles.update" },
    { id: 8, permission: "roles.delete" },
    { id: 9, permission: "permissions.view" },
    { id: 10, permission: "permissions.create" },
    { id: 11, permission: "permissions.update" },
    { id: 12, permission: "permissions.delete" },
] as const;

const Permissions: React.FC<PermissionProps> = ({ form }) => {
    const sortedPermissions = () => {
        const sorted: Record<string, Permission[]> = {};

        permissions.forEach((permission) => {
            const key = permission.permission.split(".")[1];

            if (!sorted[key]) {
                sorted[key] = [];
            }

            sorted[key].push(permission);
        });

        return sorted;
    };

    const sorted = sortedPermissions();

    return (
        <FormField
            control={form.control}
            name="permissions"
            render={() => (
                <legend className="form-grid">
                    {Object.entries(sorted).map(([key, values]) => (
                        <div key={key}>
                            <div className="mb-4">
                                <FormLabel className="text-base">{key}</FormLabel>
                            </div>
                            {values.map((permission) => (
                                <FormField
                                    key={permission.id}
                                    control={form.control}
                                    name="permissions"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={permission.id}
                                                className="flex flex-row items-start space-x-3 space-y-0 py-2"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(permission.id)}
                                                        className='size-5'
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...field.value, permission.id])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value:any) => value !== permission.id
                                                                    )
                                                                )
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="text-sm font-normal">
                                                    {permission.permission}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />

                            ))}

                        </div>

                    ))}

                </legend>

            )}
        />
    )
}

export default Permissions