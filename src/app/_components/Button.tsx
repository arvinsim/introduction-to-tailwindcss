interface ButtonProps {
  className?: string
}

export function Button({
  className,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={`bg-viki-blue-800 p-2 rounded-md ${className}`}>
      {children}
    </button>
  )
}
