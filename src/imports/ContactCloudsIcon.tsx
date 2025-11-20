import svgPaths from "./svg-rpo1pq0gev";
import imgVector202 from "figma:asset/0f47e6f5d8621087af13c4d27c58ee4c02f5ee77.png";

function FrameLinkedIn({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Frame/linked in">
      <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-7.7%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
            <path d={svgPaths.p30d99500} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.34%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 22">
            <path d={svgPaths.p1417b00} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25.02%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb5ab080} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FrameInsta({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Frame/insta">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
            <path d={svgPaths.p453d380} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.15%_33.15%_33.51%_33.51%]" data-name="Vector">
        <div className="absolute inset-[-12.51%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p26055700} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.08%_27.04%_72.92%_72.92%]" data-name="Vector">
        <div className="absolute inset-[-1.51px_-9780.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d="M1.50952 1.50952H1.52495" id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.01903" />
          </svg>
        </div>
      </div>
    </div>
  );
}

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

function Email() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Email">
      <div className="[grid-area:1_/_1] h-[95px] ml-0 mt-0 relative w-[160px]" data-name="Vector 20 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVector202} />
      </div>
      <FrameMail className="[grid-area:1_/_1] h-[36.193px] ml-[61.39px] mt-[28.18px] overflow-clip relative w-[36.228px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-end relative shrink-0 size-[160px]">
      <Email />
    </div>
  );
}

function Insta() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="insta">
      <div className="[grid-area:1_/_1] h-[95px] ml-0 mt-0 relative w-[160px]" data-name="Vector 20 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVector202} />
      </div>
      <FrameInsta className="[grid-area:1_/_1] h-[36.193px] ml-[61.39px] mt-[28.18px] overflow-clip relative w-[36.228px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 size-[160px]">
      <Insta />
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Linked in">
      <div className="[grid-area:1_/_1] h-[95px] ml-0 mt-0 relative w-[160px]" data-name="Vector 20 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVector202} />
      </div>
      <FrameLinkedIn className="[grid-area:1_/_1] h-[36.193px] ml-[61.39px] mt-[28.18px] overflow-clip relative w-[36.228px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-end relative shrink-0 size-[160px]">
      <LinkedIn />
    </div>
  );
}

function Phone() {
  return (
    <div className="[grid-area:1_/_1] ml-[61.39px] mt-[28.18px] relative size-[36.228px]" data-name="Phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Phone">
          <rect fill="white" height="36.2284" width="36.2284" />
          <path d={svgPaths.p14e2840} id="Vector" stroke="var(--stroke-0, #CD5C5C)" strokeWidth="3.01903" />
        </g>
      </svg>
    </div>
  );
}

function Phone1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="phone">
      <div className="[grid-area:1_/_1] h-[95px] ml-0 mt-0 relative w-[160px]" data-name="Vector 20 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgVector202} />
      </div>
      <Phone />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 size-[160px]">
      <Phone1 />
    </div>
  );
}

export default function ContactCloudsIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="contact clouds icon">
      <Frame />
      <Frame2 />
      <Frame3 />
      <Frame1 />
    </div>
  );
}
