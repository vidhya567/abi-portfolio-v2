import imgGiphy201Clapping from "figma:asset/f62da3e5b1788d7e01212b895a7a0172ae62156b.png";
import ContactCloudsIcon from "./ContactCloudsIcon";

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <ContactCloudsIcon />
      <div className="relative shrink-0 size-[193px]" data-name="giphy (20) 1 clapping">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGiphy201Clapping} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-center relative size-full">
      <p className="font-['Fredoka:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[36px] text-[indianred] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`Pick your favorite and let's chat`}</p>
      <Frame1 />
    </div>
  );
}