import { HTMLAttributes } from "react";

export const Button = ({ children, className = '', ...props }: HTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className={`text-white bg-slate-900 px-5 py-2 border-4 border-slate-100 font-bold cursor-custom transition-transform hover:scale-[1.1] ${className}`}
  >
    {children}
  </button>
)
