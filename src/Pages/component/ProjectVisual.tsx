export default function SectionHeader({ badge, title, subtitle }: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      {badge && <span className="badge badge-primary badge-outline mb-4">{badge}</span>}
      <h2 className="text-4xl md:text-5xl font-bold mb-2">{title}</h2>
      <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      {subtitle && <p className="mt-4 opacity-70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}