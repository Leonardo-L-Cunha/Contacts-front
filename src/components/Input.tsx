import { InputHTMLAttributes, forwardRef } from "react"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    label: string;
}
 
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type, placeholder, ...rest }, ref) => {
    return (
        <>
            <label className="text-white" htmlFor={type}>{label}</label>
            <input className="w-full h-12 rounded pl-2 bg-bg-input border border-white text-white" type={type} placeholder={placeholder} ref={ref} {...rest}/>
        </>
    )
}
)