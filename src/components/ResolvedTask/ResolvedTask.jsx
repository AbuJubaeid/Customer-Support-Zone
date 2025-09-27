
const ResolvedTask = ({resolveTask}) => {
    
    return (
        <div className="p-4 rounded-xl mb-2 mt-3 mx-4 bg-[#E0E7FF]">
            <h3 className="text-[18px] font-medium">{resolveTask.title}</h3>
        </div>
    );
};

export default ResolvedTask;