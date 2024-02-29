/**
 * A React component that renders a section element.
 * @param  - `className` - the class name of the section
 * @returns A React component
 */

type SectionProps = {
  className?: string;
  children: React.ReactNode;
}

function Section({ className, children }: SectionProps) {
  return <section className={className}>{children}</section>;
}

export default Section;
