import { Button } from './_components/Button'
import { CodeBlock } from './_components/CodeBlock'

export function OverridingComponents() {
  return (
    <div>
      <div className={'text-2xl mb-4'}>Overriding the styles of components</div>
      <div className="flex flex-row space-x-4">
        <Button>This is the basic themed button</Button>
        <Button className={'bg-red-500 italic rounded-none'}>
          This is the same button but different style
        </Button>
      </div>
      <CodeBlock>
        {`
        <Button>This is the basic themed button</Button>
        <Button className={'bg-red-500 italic rounded-none'}>
          This is the same button but different style
        </Button>
        `}
      </CodeBlock>
    </div>
  )
}
