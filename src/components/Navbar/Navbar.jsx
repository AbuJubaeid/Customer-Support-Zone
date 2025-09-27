
const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center max-w-[1440px] mx-auto h-[180px] sm:h-[80px]">
            <div>
                <h3 className="text-[24px] font-bold">CS — Ticket System</h3>
            </div>
            <div className="grid grid-cols-2 sm:flex sm:flex-row" >
                <button className="text-[16px] cursor-pointer">Home</button>
                <button className="ml-4 text-[16px] cursor-pointer">FAQ</button>
                <button className="ml-4 text-[16px] cursor-pointer">ChangeLog</button>
                <button className="ml-4 text-[16px] cursor-pointer">Blog</button>
                <button className="ml-4 text-[16px] cursor-pointer">Download</button>
                <button className="ml-4 text-[16px] cursor-pointer">Contact</button>
                <button className="ml-4 border-2 rounded-2xl px-4 py-3 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white cursor-p cursor-pointer">+ New Ticket</button>
            </div>
        </div>
        </div>
    );
};

export default Navbar;