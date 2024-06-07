import { Button } from './_components/Button'
import { CodeBlock } from './_components/CodeBlock'
import { Section } from './_components/Section'
import { SectionHeading } from './_components/SectionHeading'

export function OverridingComponents() {
  return (
    <Section>
      <SectionHeading>Overriding the styles of components</SectionHeading>
      <div className="flex flex-col gap-4 mb-4 items-center md:flex-row md:justify-center">
        <Button className={'w-6/12 md:w-max'}>
          This is the basic themed button
        </Button>
        <Button
          className={'bg-viki-gray-800 italic rounded-none w-6/12 md:w-max'}
        >
          This is the same button but different style
        </Button>
      </div>
    </Section>
  )
}
