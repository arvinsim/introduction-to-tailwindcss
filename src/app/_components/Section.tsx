type SectionProps = {
  className?: string
}

export function Section({
  className,
  children,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <section className={`w-full flex flex-col ${className}`}>
      {children}
    </section>
  )
}
