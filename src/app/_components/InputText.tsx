'use client'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  customValidity?(): void
}

export function InputText({
  className,
  children,
  ...rest
}: React.PropsWithChildren<InputProps>) {
  return (
    <input
      type="text"
      className={`mt-1 text-viki-gray-900 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-viki-gray-200
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600 invalid:placeholder-red-200
      focus:invalid:border-red-500 focus:invalid:ring-red-500 ${className}`}
      {...rest}
    />
  )
}
