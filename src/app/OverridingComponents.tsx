import { Button } from './_components/Button'
import { CodeBlock } from './_components/CodeBlock'

export function OverridingComponents() {
  return (
    <div className={'w-full flex flex-col'}>
      <div className={'text-xl mb-4'}>Overriding the styles of components</div>
      <div className="flex flex-col gap-4 space-x-4 mb-4 md:flex-row">
        <Button className={'w-6/12 md:w-max'}>
          This is the basic themed button
        </Button>
        <Button
          className={'bg-viki-gray-800 italic rounded-none w-6/12 md:w-max'}
        >
          This is the same button but different style
        </Button>
      </div>
      <CodeBlock>
        {`
        <button className={\`bg-viki-blue-800 p-2 rounded-md \${className}\`}>
            {children}
        </button>

        ...

        <Button>This is the basic themed button</Button>
        <Button className={'bg-viki-gray-800 italic rounded-none'}>
          This is the same button but different style
        </Button>
        `}
      </CodeBlock>
    </div>
  )
}
