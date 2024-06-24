import { Button } from "../_components/Button";
import { Section } from "../_components/Section";
import { SectionHeading } from "../_components/SectionHeading";

function OverridingComponentsPage() {
  return (
    <Section>
      <SectionHeading>Overriding the styles of components</SectionHeading>
      <div className="flex flex-col gap-4 mb-4 items-center md:flex-row md:justify-center">
        <Button>This is the basic themed button</Button>
        <Button className={"bg-viki-gray-800 italic rounded-none"}>
          This is the same button but different style
        </Button>
      </div>
    </Section>
  );
}

export default OverridingComponentsPage;
