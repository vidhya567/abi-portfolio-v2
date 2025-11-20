import imgFrame195 from "figma:asset/fdc2bc9dfa9b4ab44679cc8ee7482f110d4203b0.png";
import imgLogo from "figma:asset/ac062af1f28c2b89cf7111f9275ea648c2b117a1.png";

function Frame1() {
  return (
    <div className="h-[98px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame195} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[98px] items-center justify-center px-[18px] py-[38px] relative w-full">
          <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[17.333px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Projects
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[162px] items-center justify-end relative shrink-0 w-[172px]">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[98px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame195} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[98px] items-center justify-center px-[18px] py-[38px] relative w-full">
          <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[17.333px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Bio
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[162px] items-center relative shrink-0 w-[172px]">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[98px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame195} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[98px] items-center justify-center px-[18px] py-[38px] relative w-full">
          <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[17.333px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Resume
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[162px] items-center justify-end relative shrink-0 w-[172px]">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[98px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame195} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[98px] items-center justify-center px-[18px] py-[38px] relative w-full">
          <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[17.333px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Contacts
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[162px] items-center relative shrink-0 w-[172px]">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[30px] py-[24px] relative size-full">
          <div className="h-[114px] relative shrink-0 w-[216px]" data-name="Logo">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
          </div>
          <Frame5 />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col px-6 py-8 gap-6">
        <div className="h-[60px] relative w-[120px]" data-name="Logo">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Work */}
          <div className="relative h-[80px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#E8B4B8] rounded-[40px]"></div>
            <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] text-[16px] text-black text-center z-10" style={{ fontVariationSettings: "'wdth' 100" }}>
              Work
            </p>
          </div>
          
          {/* Bio */}
          <div className="relative h-[80px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#E8B4B8] rounded-[40px]"></div>
            <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] text-[16px] text-black text-center z-10" style={{ fontVariationSettings: "'wdth' 100" }}>
              Bio
            </p>
          </div>
          
          {/* Resume */}
          <div className="relative h-[80px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#E8B4B8] rounded-[40px]"></div>
            <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] text-[16px] text-black text-center z-10" style={{ fontVariationSettings: "'wdth' 100" }}>
              Resume
            </p>
          </div>
          
          {/* Contact */}
          <div className="relative h-[80px] flex items-center justify-center">
            <div className="absolute inset-0 border-2 border-[#E8B4B8] rounded-[40px]"></div>
            <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] text-[16px] text-black text-center z-10" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}