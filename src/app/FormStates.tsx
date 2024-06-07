import React, { useEffect, useRef } from 'react'
import { Section } from './_components/Section'
import { SectionHeading } from './_components/SectionHeading'
import { InputText } from './_components/InputText'

export function FormStates() {
  return (
    <Section>
      <SectionHeading>Form States</SectionHeading>
      <form className={'flex flex-col gap-4 w-6/12'}>
        <label className="block">
          <span className="block text-sm font-medium text-viki-blue-700">
            Normal
          </span>
          <InputText placeholder="This field is editable" />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-viki-blue-700">
            Disabled
          </span>
          <InputText placeholder="This field is disabled" disabled />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-viki-blue-700">
            Error
          </span>
          <InputText placeholder="This field is required" required />
        </label>
      </form>
    </Section>
  )
}