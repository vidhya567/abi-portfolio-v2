import svgPaths from "./svg-xirylqs0et";
import imgHappyFireSticker1 from "figma:asset/175fbcfd00659881cde2c8554f6322299b88863f.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[19.627px] left-0 top-[49.37px] w-[64.017px]">
        <div className="absolute inset-[-0.98%_-1.5%_-12.7%_-1.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 23">
            <g filter="url(#filter0_d_18_32)" id="Vector 7">
              <path d={svgPaths.p28dc0200} fill="var(--fill-0, white)" fillOpacity="0.78" shapeRendering="crispEdges" />
              <path d={svgPaths.p28dc0200} shapeRendering="crispEdges" stroke="var(--stroke-0, #E6E8E6)" strokeWidth="0.383333" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.31" id="filter0_d_18_32" width="65.9336" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1.53333" />
                <feGaussianBlur stdDeviation="0.383333" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_32" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_32" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[2px] size-[59.121px] top-0" data-name="Happy Fire Sticker 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHappyFireSticker1} />
      </div>
    </div>
  );
}