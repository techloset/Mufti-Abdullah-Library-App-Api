import Logo from "../../assets/logo/Logo.png";
import Layer from "../../assets/footerCircule/Layer.png";
import Circle from "../../assets/footerIcon/Base.png";
import Heart from "../../assets/footerIcon/heart.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="container mx-auto gap-2 grid grid-cols-2  md:grid-cols-5  md:flex-row sm:flex-col justify-between mt-5 w-full static text-primary">
          <div className="flex flex-col mx-auto sm:ms-4 max-w-[262px] order-last md:order-first sm:text-start text-center   sm:col-auto col-span-full">
            <div className="flex content-center text-center justify-center mb-8 sm:content-start sm:text-start sm:justify-start ">
              <img src={Logo} width={100} height={100} alt="Logo" />
            </div>
            <p className="text-tersary text-wrap  mb-7">
              Build a modern and creative website with crealand
            </p>
            <span className="flex flex-row gap-1 ms-0 mb-2 justify-center sm:justify-start">
              <img src={Layer} className="w-8" alt="Layer" />
              <img src={Layer} className="w-8" alt="Layer" />
              <img src={Layer} className="w-8" alt="Layer" />
              <img src={Layer} className="w-8" alt="Layer" />
            </span>
          </div>
          <div className="flex flex-col gap-5 px-2 ">
            <h2 className="text-xl font-bold">Products</h2>
            <ul>
              <li className="mb-4 sm:mb-6">Landingpage</li>
              <li className="mb-4 sm:mb-6">Features</li>
              <li className="mb-4 sm:mb-6">Documentation</li>
              <li className="mb-4 sm:mb-6">Referral Program</li>
              <li className="mb-4 sm:mb-6">Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 px-2 ">
            <h2 className="text-xl font-bold">Services</h2>
            <ul>
              <li className="mb-4 sm:mb-6">Documentation</li>
              <li className="mb-4 sm:mb-6">Design</li>
              <li className="mb-4 sm:mb-6">Themes</li>
              <li className="mb-4 sm:mb-6">Illustrations</li>
              <li className="mb-4 sm:mb-6">UI Kit</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 px-2">
            <h2 className="text-xl font-bold">Company</h2>
            <ul>
              <li className="mb-4 sm:mb-6">About</li>
              <li className="mb-4 sm:mb-6">Terms</li>
              <li className="mb-4 sm:mb-6">Privacy Policy</li>
              <li className="mb-4 sm:mb-6">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 px-2">
            <h2 className="text-xl font-bold ">More</h2>
            <ul>
              <li className="mb-4 sm:mb-6">Documentation</li>
              <li className="mb-4 sm:mb-6">License</li>
              <li className="mb-4 sm:mb-6">Changelog</li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-1 hidden flex-col my-16 gap-3 text-center justify-center items-center sm:flex">
          <div className="flex text-center justify-center items-center">
            <img src={Circle} alt="circle" className="relative" />
            <img
              src={Heart}
              alt="heart"
              className="absolute transform left-50% "
            />
          </div>
          <p className="text-tersary">Copyright © 2019. Crafted with love.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
