import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "./svg-fh4eh3og7z";
import imgLogo from "figma:asset/49bb2529e223d2529df0645e2aaafa256bddf016.png";

function Logo() {
  return (
    <div className="[grid-area:1_/_1] h-[53.927px] ml-[50px] mt-0 relative w-[103px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function LogoWithCloud() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer hover:scale-105 transition-transform" 
      data-name="Logo with cloud"
      onClick={scrollToTop}
    >
      <div className="[grid-area:1_/_1] h-[51px] ml-[36px] mt-[16.87px] relative w-[87px]">
        <div className="absolute inset-[-0.53%_-1.92%_-8.78%_-1.92%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 56">
            <g filter="url(#filter0_d_23_265)" id="Vector 8">
              <path d={svgPaths.p20b04d80} fill="var(--fill-0, white)" fillOpacity="0.64" shapeRendering="crispEdges" />
              <path d={svgPaths.p20b04d80} shapeRendering="crispEdges" stroke="var(--stroke-0, #E6E8E6)" strokeWidth="0.539267" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.7456" id="filter0_d_23_265" width="90.3436" x="5.96046e-08" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2.80419" />
                <feGaussianBlur stdDeviation="0.701047" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_23_265" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_23_265" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Logo />
    </div>
  );
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToBio = () => {
    const bioSection = document.getElementById('bio-section');
    if (bioSection) {
      bioSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('work-section');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1Qm2aBjqUX7udRqgn6ZxamEplI62BZXIO/view', '_blank');
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex box-border content-stretch font-['Fredoka:Regular',sans-serif] font-normal gap-[72px] items-center justify-center leading-[normal] px-0 py-[40px] relative shrink-0 text-[#1f1d36] text-[20px] text-center text-nowrap whitespace-pre" data-name="Nav bar">
        <p 
          className="relative shrink-0 cursor-pointer hover:text-[indianred] transition-colors" 
          style={{ fontVariationSettings: "'wdth' 100" }}
          onClick={scrollToWork}
        >
          Work
        </p>
        <p 
          className="relative shrink-0 cursor-pointer hover:text-[indianred] transition-colors" 
          style={{ fontVariationSettings: "'wdth' 100" }}
          onClick={scrollToBio}
        >
          Bio
        </p>
        <p 
          className="relative shrink-0 cursor-pointer hover:text-[indianred] transition-colors" 
          style={{ fontVariationSettings: "'wdth' 100" }}
          onClick={openResume}
        >
          Resume
        </p>
        <p 
          className="relative shrink-0 cursor-pointer hover:text-[indianred] transition-colors" 
          style={{ fontVariationSettings: "'wdth' 100" }}
          onClick={scrollToContact}
        >
          Contact
        </p>
      </div>

      {/* Mobile Burger Menu */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden relative z-[110] p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-[#1f1d36]" />
        ) : (
          <Menu className="w-6 h-6 text-[#1f1d36]" />
        )}
      </button>

      {/* Dark Overlay Behind Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu from Left - Mobile Only */}
      <div className={`md:hidden fixed top-0 left-0 h-screen w-[80%] max-w-[300px] bg-white z-[105] transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`} style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
        {/* Logo in Menu */}
        <div className="p-8 border-b border-gray-200 flex justify-end">
          <div className="w-[80px]">
            <img alt="Logo" src={imgLogo} className="w-full h-auto" />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-2 p-6 font-['Fredoka:Regular',sans-serif] font-normal text-[#1f1d36] text-[20px]">
          <p 
            className="cursor-pointer hover:text-[indianred] hover:bg-gray-100 transition-all p-4 rounded-lg" 
            style={{ fontVariationSettings: "'wdth' 100" }}
            onClick={scrollToWork}
          >
            Work
          </p>
          <p 
            className="cursor-pointer hover:text-[indianred] hover:bg-gray-100 transition-all p-4 rounded-lg" 
            style={{ fontVariationSettings: "'wdth' 100" }}
            onClick={scrollToBio}
          >
            Bio
          </p>
          <p 
            className="cursor-pointer hover:text-[indianred] hover:bg-gray-100 transition-all p-4 rounded-lg" 
            style={{ fontVariationSettings: "'wdth' 100" }}
            onClick={openResume}
          >
            Resume
          </p>
          <p 
            className="cursor-pointer hover:text-[indianred] hover:bg-gray-100 transition-all p-4 rounded-lg" 
            style={{ fontVariationSettings: "'wdth' 100" }}
            onClick={scrollToContact}
          >
            Contact
          </p>
        </div>
      </div>
    </>
  );
}

export default function Header() {
  return (
    <div className="fixed top-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 bg-white z-50" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pl-[32px] pr-[64px] md:pl-[32px] md:pr-[64px] px-4 py-[16px] relative size-full">
          {/* Mobile: Burger on left, Logo on right */}
          <div className="md:hidden flex items-center justify-between w-full gap-8">
            <NavBar />
            <LogoWithCloud />
          </div>
          
          {/* Desktop: Logo on left, Nav on right */}
          <div className="hidden md:flex items-center justify-between w-full">
            <LogoWithCloud />
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}