export default function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    ></div>
  );
}