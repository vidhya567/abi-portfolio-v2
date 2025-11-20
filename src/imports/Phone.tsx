import svgPaths from "./svg-edewgklhn6";

function Phone({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Phone">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
            <path d={svgPaths.p14e2840} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Phone1() {
  return <Phone className="relative size-full" />;
}
