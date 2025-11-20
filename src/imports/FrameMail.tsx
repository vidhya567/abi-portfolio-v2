import svgPaths from "./svg-ncuhbpd0qj";

function FrameMail({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Frame/mail">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.99%_-6.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 28">
            <path d={svgPaths.p2d222400} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.85765" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-18.27%_-6.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 15">
            <path d={svgPaths.p3bc0c600} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.85765" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function FrameMail1() {
  return <FrameMail className="relative size-full" />;
}
