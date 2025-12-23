import svgPaths from "./svg-a1oc9snoe8";
import React from "react";
import imgFinFlexPhones from "figma:asset/c03c13f6fd6bbabffc2b6bcc776e03c17181f0e2.png";
import imgBunny from "figma:asset/af94adb267afbad0106c8498eeac2bada7600e7e.png";
import imgCloud from "figma:asset/933424ab3570da3e21cd28ea5f9232bbafe12f53.png";

function Group4() {
  return (
    <div className="relative shrink-0">
      <img
        alt="FinFlex AI app mockups"
        className="w-full h-auto object-contain"
        src={imgFinFlexPhones}
      />
    </div>
  );
}

function ResumeCloud() {
  const handleClick = () => {
    window.open(
      "https://cargo-widen-48043221.figma.site",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="[grid-area:1_/_1] bg-[indianred] box-border content-stretch flex gap-[13.125px] h-[60px] items-center justify-center ml-0 mt-[4px] px-[50.625px] py-[22.5px] relative rounded-[93.75px] cursor-pointer hover:opacity-90 transition-opacity border-none"
      data-name="Resume cloud"
    >
      <p
        className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[22.5px] text-center text-nowrap text-white whitespace-pre"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Explore
      </p>
    </button>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] leading-[0] ml-[202px] mt-0 relative w-[64.017px] h-[69px]">
      <div className="absolute h-[19.627px] left-0 top-[49.37px] w-[64.017px]">
        <img alt="" className="w-full h-full object-contain" src={imgCloud} />
      </div>
      <div
        className="absolute left-[2px] size-[59.121px] top-0"
        data-name="Bunny"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src={imgBunny}
        />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[136px] place-items-start relative">
      <ResumeCloud />
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <p
        className="[grid-area:1_/_1] font-['Fredoka:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative text-[#474460] text-[40px] w-[652px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        Designing a Gen-Z First Finance Companion
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group1 />
      <Group />
    </div>
  );
}

export default function Frame211() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[64px] items-center leading-[0] px-[114px] py-[94px] relative size-full">
          <Group4 />
          <Group3 />
        </div>
      </div>
    </div>
  );
}
