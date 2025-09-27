import { useState } from "react";

const Tickets = ({ticket, handleTask}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleProgress = ()=>{
        setIsOpen(true)
    }


    return (
        <div>
            <div onClick={()=>{
                handleTask(ticket)
                handleProgress()
                }} className="bg-white rounded-xl w-[370px] h-[150px] sm:w-full p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                    <h3 className="text-[18px] font-medium">{ticket.title}</h3>
                    <p className="flex justify-between items-center gap-2 text-[16px] font-medium"><img src="https://i.ibb.co.com/RpqKGC9y/Ellipse-22.png" alt="" />{isOpen?"In-Progress" : "Open"}</p>
                </div>
                <p className="text-[16px] text-[#627382] mt-4">{ticket.description}</p>
                <div className="flex justify-between items-center mt-3">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-[14px] font-medium text-[#627382]">{ticket.ticket_id}</p>
                        <p className="text-[14px] font-medium text-red-500">{ticket.priority}</p>
                    </div>
                    <div className="flex justify-between items-center text-[14px] font-medium text-[#627382] gap-3">
                        <p>{ticket.customer_name}</p>
                        <p className="flex justify-between items-center gap-1"><img src="https://i.ibb.co.com/23p3d9Rj/calender.png" alt="" />{ticket.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tickets;