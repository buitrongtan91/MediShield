import fbIcon from "@/assets/icons/facebook.svg";
import ytbIcon from "@/assets/icons/youtube.svg";
import zaloIcon from "@/assets/icons/zalo.svg";
import cod from "@/assets/icons/COD.png";
import visa from "@/assets/icons/Visa.png";
import mc from "@/assets/icons/MasterCard.png";
import jbc from "@/assets/icons/JCB.png";
import momo from "@/assets/icons/Momo.png";
import zp from "@/assets/icons/ZaloPay.png";

function Footer() {
    return (
        <div className="bg-neutral-200 py-8">
            <div className="container flex flex-col justify-between gap-10">
                <div className="w-full grid grid-cols-[1fr_1fr_2fr]">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold">About MedShield</span>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Introduce
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Shop system
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Business license
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Operating regulations
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Return policy
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Delivery policy
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Privacy Policy
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Payment policy
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Membership card program rules
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Frequently asked questions
                        </a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold">Category</span>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Medicine
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Functional foods
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Personal care
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Mother and baby
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Beauty care
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Medical equipment
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Convenient product
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Health care
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            Pharmacity brand
                        </a>
                        <a href="/" className="text-neutral-700 hover:text-primary-500">
                            HOT promotions
                        </a>
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <span className="text-lg font-bold">Customer care hotline</span>
                            <a href="/" className="text-neutral-700 hover:text-primary-500">
                                Order support
                            </a>
                            <a href="/" className="text-sky-500 hover:text-primary-500">
                                1800 6821
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-lg font-bold">Follow us on</span>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={fbIcon} alt="" />
                                <span>Facebook</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={ytbIcon} alt="" />
                                <span>Youtube</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <img src={zaloIcon} alt="" />
                                <span>Zalo</span>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <span className="text-lg font-bold">Payment support</span>
                            <div className="flex gap-5 mt-5">
                                <img src={cod} alt="" width={50} />
                                <img src={visa} alt="" width={50} />
                                <img src={jbc} alt="" width={50} />
                                <img src={mc} alt="" width={50} />
                                <img src={momo} alt="" width={50} />
                                <img src={zp} alt="" width={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
