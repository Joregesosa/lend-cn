import React from "react";

interface FieldsetProps {
    legend: string;
    children: React.ReactNode;
    className?: string;
    legendClassName?: string;

}

export const Fieldset: React.FC<FieldsetProps> = ({ children, legend, className, legendClassName }) => {
    return (
        <fieldset className={`form-grid gap-8 ${className}`}>
            <legend className={`font-semibold py-2 ${legendClassName}`}>
                {legend}
            </legend>
            {children}
        </fieldset>
    );
}