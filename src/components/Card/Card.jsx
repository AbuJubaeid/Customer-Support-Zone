
const Card = ({card, resolvedCard}) => {

    console.log("inside card", card)
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center max-w-[1440px] mx-auto mt-15 mb-15 gap-4">
            <div className="w-[370px] sm:w-[700px] sm:h-[250px] rounded-xl flex justify-center items-center bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                <img className="hidden sm:block sm:ml-[-300px]" src="https://i.ibb.co.com/gLprh3yn/img-1.png" alt="" />
                <div>
                    <p className="text-[24px]">In-Progress</p>
                    <h3 className="text-center text-[60px] font-semibold">{card.length}</h3>
                </div>
                <img className="hidden sm:block sm:mr-[-300px]" src="https://i.ibb.co.com/7xgwMczg/img-2.png" alt="" />
            </div>
            <div className="backgroundImage w-[370px] sm:w-[700px] sm:h-[250px] rounded-xl flex justify-center items-center bg-linear-to-r from-[#54CF68] to-[#00827A]">
                <img className="hidden sm:block sm:ml-[-300px]" src="https://i.ibb.co.com/gLprh3yn/img-1.png" alt="" />
                <div>
                    <p className="text-[24px]">Resolved</p>
                    <h3 className="text-center text-[60px] font-semibold">{resolvedCard.length}</h3> 
                </div>
                <img className="hidden sm:block sm:mr-[-300px]" src="https://i.ibb.co.com/7xgwMczg/img-2.png" alt="" />
            </div>
        </div>
    );
};

export default Card;