
const Footer = () => {
    return (
        <div className="bg-black text-white mt-10 pt-12">
            <div className="max-w-[1440px] mx-auto grid sm:grid-cols-5 grid-cols-1 p-[16px] sm:p-[-16px] gap-10 border-b-2 border-gray-500 pb-12">
            <div>
                <h3 className="text-[20px] font-medium">CS — Ticket System</h3>
                <p className="text-[#A1A1AA]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <ul className="cursor-pointer">
                    <li className="text-[20px] font-medium">Company</li>
                    <li className="text-[#A1A1AA]">About Us</li>
                    <li className="text-[#A1A1AA]">Our Mission</li>
                    <li className="text-[#A1A1AA]">Contact Saled</li>
                </ul>
            </div>
            <div>
                <ul className="cursor-pointer">
                    <li className="text-[20px] font-medium">Services</li>
                    <li className="text-[#A1A1AA]">Products & Services</li>
                    <li className="text-[#A1A1AA]">Customer Stories</li>
                    <li className="text-[#A1A1AA]">Download App</li>
                </ul>
            </div>
            <div>
                <ul className="cursor-pointer">
                    <li className="text-[20px] font-medium">Information</li>
                    <li className="text-[#A1A1AA]">Privacy Policy</li>
                    <li className="text-[#A1A1AA]">Terms & Conditions</li>
                    <li className="text-[#A1A1AA]">Join Us</li>
                </ul>
            </div>
            <div>
                <ul className="cursor-pointer">
                    <li className="text-[20px] font-medium">Social Links</li>
                    <li className="text-[#A1A1AA] flex  gap-1 mt-2"><img src="https://i.ibb.co.com/r2Pcvcy1/logo-1.png" alt="" /> @CS — Ticket System</li>
                    <li className="text-[#A1A1AA] flex  gap-1 mt-2"><img src="https://i.ibb.co.com/wH7SSX2/logo-2.png" alt="" /> @CS — Ticket System</li>
                    <li className="text-[#A1A1AA] flex  gap-1 mt-2"><img src="https://i.ibb.co.com/vK4Qp5P/logo-3.png" alt="" /> @CS — Ticket System</li>
                    <li className="text-[#A1A1AA] flex  gap-1 mt-2"><img src="https://i.ibb.co.com/rGmFpVpn/logo-4.png" alt="" /> support@cst.com</li>
                </ul>
            </div>
        </div>
        <div>
            <p className="text-center mt-3 text-[16px] pb-5">© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;