import svgPaths from "./svg-vlzvb048eh";
import imgMenuPortrait1 from "figma:asset/2c3bd0f27575b8b5839b7d287f1d3981004be3ff.png";
import imgTodaysSpecialPortrait2 from "figma:asset/bf786248e9b8b71f919d9a6512eb65b602a556db.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[133px] left-[325px] top-[50.75px] w-[203px]">
        <div className="absolute inset-[-0.38%_-1.53%_-6.24%_-1.53%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210 142">
            <g filter="url(#filter0_d_18_28)" id="Vector 7">
              <path d={svgPaths.p2d969600} fill="var(--fill-0, white)" fillOpacity="0.64" shapeRendering="crispEdges" />
              <path d={svgPaths.p2d969600} shapeRendering="crispEdges" stroke="var(--stroke-0, #E6E8E6)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="141.8" id="filter0_d_18_28" width="209.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="5.2" />
                <feGaussianBlur stdDeviation="1.3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_28" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_28" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.2079116851091385)+(var(--transform-inner-height)*0.978147566318512)))] items-center justify-center left-[185.75px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.2079116851091385)+(var(--transform-inner-width)*0.978147566318512)))]" style={{ "--transform-inner-width": "200", "--transform-inner-height": "394.078125" } as React.CSSProperties}>
        <div className="flex-none rotate-[12deg]">
          <div className="h-[394.08px] relative w-[200px]" data-name="Menu-portrait 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMenuPortrait1} />
          </div>
        </div>
      </div>
      <div className="absolute h-[114px] left-0 top-[269.75px] w-[174px]">
        <div className="absolute inset-[-0.44%_-1.78%_-7.28%_-1.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181 123">
            <g filter="url(#filter0_d_18_30)" id="Vector 22">
              <path d={svgPaths.p2568fa80} fill="var(--fill-0, white)" fillOpacity="0.64" shapeRendering="crispEdges" />
              <path d={svgPaths.p2568fa80} shapeRendering="crispEdges" stroke="var(--stroke-0, #E6E8E6)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="122.8" id="filter0_d_18_30" width="180.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="5.2" />
                <feGaussianBlur stdDeviation="1.3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_30" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_30" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.13917309045791626)+(var(--transform-inner-height)*0.9902680516242981)))] items-center justify-center left-[47.7px] top-[0.59px] w-[calc(1px*((var(--transform-inner-height)*0.13917309045791626)+(var(--transform-inner-width)*0.9902680516242981)))]" style={{ "--transform-inner-width": "200", "--transform-inner-height": "394.078125" } as React.CSSProperties}>
        <div className="flex-none rotate-[352deg]">
          <div className="h-[394.08px] relative w-[200px]" data-name="Todays special-portrait 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTodaysSpecialPortrait2} />
          </div>
        </div>
      </div>
    </div>
  );
}