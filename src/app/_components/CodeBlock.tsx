export function CodeBlock({ children }: React.PropsWithChildren<{}>) {
  return (
    <pre className={'bg-gray-800 text-white p-2 rounded-md'}>
      <code>{children}</code>
    </pre>
  )
}
