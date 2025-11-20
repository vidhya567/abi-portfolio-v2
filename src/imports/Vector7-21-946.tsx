import svgPaths from "./svg-1xag992buv";

export default function Vector() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-0.83%_-1.5%_-10.83%_-1.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 67">
          <g filter="url(#filter0_d_21_950)" id="Vector 7">
            <path d={svgPaths.p6e71300} fill="var(--fill-0, white)" fillOpacity="0.78" shapeRendering="crispEdges" />
            <path d={svgPaths.p6e71300} shapeRendering="crispEdges" stroke="var(--stroke-0, #E6E8E6)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="67" id="filter0_d_21_950" width="172" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_21_950" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_21_950" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}