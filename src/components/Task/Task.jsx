
const Task = ({task, handleResolved}) => {
    

    const onClickHandler = () =>{
        handleResolved(task); 
    }

    
    return (
        <div className=" w-full p-4 rounded-xl mb-2 mt-3 mr-4 bg-white">
            <h3 className="text-[18px] font-medium">{task.title}</h3>
            <button onClick={onClickHandler}
                 className="rounded-xl bg-[#02A53B] w-full mt-2 py-1 cursor-pointer">Complete</button>
        </div>
    );
};

export default Task;