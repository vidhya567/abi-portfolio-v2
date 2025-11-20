import svgPaths from "./svg-i2bqufk3of";
import imgWelcomeRabbit from "figma:asset/dcf7c463f79aecf330fa640f7a92b3435302c32d.png";
import imgMyPicture from "figma:asset/3573441ce5af79ad16cfbad43a11fd6adf6c82c5.png";
import Vector7 from "./Vector7";

function WelcomeRabbit() {
  return (
    <div className="absolute h-[203px] left-0 pointer-events-none shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[48.04px] w-[169px]" data-name="welcome rabbit">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full" src={imgWelcomeRabbit} />
      <div aria-hidden="true" className="absolute border-[26.896px] border-[rgba(255,255,255,0)] border-solid inset-0" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[48.04px]">
      <div className="absolute h-[60px] left-[16px] top-[205.04px] w-[167px]">
        <Vector7 />
      </div>
      <WelcomeRabbit />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Fredoka:Regular',sans-serif] font-normal leading-[normal] left-[233px] text-[#474460] text-[24px] top-[132.66px]">
      <p className="absolute h-[64.091px] left-[233px] top-[132.66px] w-[401.214px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        I am a UX/UI designer based in the Bay area, California.
      </p>
      <p className="absolute h-[32.046px] left-[233.28px] top-[220.75px] w-[216px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Feel free to explore.
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents left-[232px] top-[48.04px]" data-name="Text">
      <p className="absolute font-['Fredoka:Medium',sans-serif] font-['Inter:Bold',sans-serif] font-bold font-medium leading-[normal] left-[322px] not-italic text-[0px] text-[36px] text-center text-nowrap text-white top-[48.04px] translate-x-[-50%] whitespace-pre">
        <span className="text-[#1f1d36]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Hi, `}</span>
        <span className="text-[#1f1d36]" style={{ fontVariationSettings: "'wdth' 100" }}>
          I am
        </span>
        <span className="text-[indianred]" style={{ fontVariationSettings: "'wdth' 100" }}>{` Abi`}</span>
      </p>
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[48.04px]">
      <Group1 />
      <Text />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[754px] top-0">
      <div className="absolute h-[170px] left-[887px] top-[160.14px] w-[260px]">
        <div className="absolute bottom-[-4.59%] left-[-1%] right-[-1%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266 178">
            <g filter="url(#filter0_d_9_891)" id="Vector 7">
              <path d={svgPaths.p323aed80} fill="var(--fill-0, white)" fillOpacity="0.8" shapeRendering="crispEdges" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="177.8" id="filter0_d_9_891" width="265.2" x="-5.97053e-10" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="5.2" />
                <feGaussianBlur stdDeviation="1.3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_891" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_891" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[281.28px] left-[754px] top-0 w-[283px]" data-name="My picture">
        <div className="absolute inset-[-4.66%_-6.46%_-8.33%_-6.46%]">
          <img alt="" className="block max-w-none size-full" height="317.839" src={imgMyPicture} width="319.558" />
        </div>
      </div>
    </div>
  );
}

function ProfilePictureTop() {
  return (
    <div className="absolute contents left-[754px] top-0" data-name="Profile picture top">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group3 />
      <ProfilePictureTop />
    </div>
  );
}