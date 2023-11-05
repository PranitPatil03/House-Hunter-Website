import { heroImg, location } from "../assets";
import Button from "../components/Button";
import { LogoImages } from "../constants/index";

const Hero = () => {
  return (
    <section className="flex xl:flex-row flex-col justify-between min-h-screen gap-10 max-container w-full">
      <div className="relative xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:padding-x">
        <h3 className="hero-text-shadow mTop text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold font-lexend text-logo capitalize">
          find the place to <br className="" />
          <span className="">live your dreams</span> <br className="" /> easily
          here
        </h3>
        <p className="text-left mt-6">
          Everything you need about finding your place to live will be <br />{" "}
          here, where it will be easier for you
        </p>
        <div className="">
          <img src={location} />
          <p className=""></p>\
          <Button />
        </div>
        <div className="">
          <p className="text-left mt-6">Our Partnership</p>

          <ul className="flex-1 flex justify-end items-center">
            {LogoImages.map((item) => (
              <li key={item.label} className="nav-items px-4 py-2">
                <img
                  href={item}
                  className="flex gap-16 text-sm font-lexend leading-normal text-white font-semibold"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative flex-1 flex justify-end items-center xl:min-h-screen max-xl:py-40">
        <img
          src={heroImg}
          alt="heroImg"
          width={720}
          height={720}
          className="object-contain absolute pBottom right-0 z-1"
        />
      </div>
    </section>
  );
};

export default Hero;
