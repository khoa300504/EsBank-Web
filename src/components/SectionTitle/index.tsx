interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="font-inter text-[22px] font-semibold">{title}</div>
  )
}