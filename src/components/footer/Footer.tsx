    import React from "react";
    import Logo from "../../assets/logo/Logo.png";
    import Layer from "../../assets/footerCircule/Layer.png";
    import Circle from "../../assets/footerIcon/Base.png";
    import Heart from "../../assets/footerIcon/heart.png";

    function Footer() {
    return (
<>
        <footer >
      <div className="container mx-auto gap-2 grid grid-cols-2  md:grid-cols-5 flex md:flex-row sm:flex-col justify-between mt-5 w-full static text-[#183B56]" >
        <div className="flex flex-col mx-auto sm:ms-4 max-w-[262px] order-last md:order-first sm:text-start text-center   sm:col-auto col-span-full"
        >
            <div className="flex content-center text-center justify-center sm:content-start sm:text-start sm:justify-start mb-5">
                <img src={Logo} width={100} height={100} alt="Logo" />
                </div>
            <p className="text-[#5A7184] text-wrap  mb-5">
            Build a modern and creative website with crealand
            </p>
            <span className="flex flex-row gap-1 ms-0 justify-center sm:justify-start">
            <img src={Layer} className="w-8" alt="Layer" />
            <img src={Layer} className="w-8" alt="Layer" />
            <img src={Layer} className="w-8" alt="Layer" />
            <img src={Layer} className="w-8" alt="Layer" />
            </span>
        </div>
        <div className="flex flex-col gap-5 px-2 ">
            <h2 className="text-xl font-bold">Products</h2>
            <ul >
            <li className="my-2">Landingpage</li>
            <li className="my-2">Features</li>
            <li className="my-2">Documentation</li>
            <li className="my-2">Referral Program</li>
            <li className="my-2">Pricing</li>
                
            </ul>
        </div>
        <div className="flex flex-col gap-5 px-2 ">
            <h2 className="text-xl font-bold">Services</h2>
            <ul>
            <li className="my-2">Documentation</li>
            <li className="my-2">Design</li>
            <li className="my-2">Themes</li>
            <li className="my-2">Illustrations</li>
            <li className="my-2">UI Kit</li>
                
            </ul>
        </div>
        <div className="flex flex-col gap-5 px-2">
            <h2 className="text-xl font-bold">Company</h2>
            <ul >
            <li className="my-2">About</li>
            <li className="my-2">Terms</li>
            <li className="my-2">Privacy Policy</li>
            <li className="my-2">Careers</li>            
            </ul>
        </div>
        <div className="flex flex-col gap-5 px-2">
            <h2 className="text-xl font-bold ">More</h2>
            <ul>
            <li className="my-2">Documentation</li>
            <li className="my-2">License</li>
            <li className="my-2">Changelog</li>             
            </ul>
        </div>
        </div>
        <div className="grid grid-cols-1 hidden flex-col my-16 gap-3 text-center justify-center items-center sm:flex">
 <div className="flex text-center justify-center items-center">
     <img src={Circle} alt="circle" className="relative" />
  <img src={Heart} alt="heart" className="absolute transform left-50% " />
    </div>
    <p className="text-[#5A7184]">Copyright © 2019. Crafted with love.</p>
</div>
        </footer>
</>
    );
    }

    export default Footer;
