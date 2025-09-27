import { use, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import Task from "../Task/Task";
import Tickets from "../Tickets/Tickets";

const CustomerTicket = ({customerPromise, handleCard, handleResolvedCard}) => {
    
    const customerData = use(customerPromise)
    const [task, setTask] = useState([])
    const [resolved, setResolved] = useState([])
    // const [isOpen, setIsOpen] = useState(false)
    const [cTicket, setCTicket] = useState(customerData)



    const handleTask = (ticket) =>{
        
        if (task.find(t => t.ticket_id === ticket.ticket_id)) {
         toast("Ticket already in Task Status");
         return;
         }
        const taskStatus = [...task, ticket]
        setTask(taskStatus)
        handleCard(task)
        toast("Task added to Task Status")
    }

    const handleFilteredTask = (filterTask) =>{
          const filteredFromTaskStatus = task.filter(newTask=> newTask.ticket_id !== filterTask.ticket_id)
          setTask(filteredFromTaskStatus)
            
    }
    
    const handleFilterTaskFromCustomerTicket = (ticket) =>{
            const filteredFromCustomerTicket = cTicket.filter(cTask=> cTask.ticket_id !== ticket.ticket_id)
            setCTicket(filteredFromCustomerTicket)
            // handleCard(cTicket)
        
    }
    

    const handleResolved = (rTask) =>{
        const resolvedTask = [...resolved, rTask]
        setResolved(resolvedTask)
        toast("Task Resolved")
        handleResolvedCard(resolvedTask)
        handleFilteredTask(rTask)
        handleFilterTaskFromCustomerTicket(rTask)
    }

    return (
        <div> 
            <div className="max-w-[1440px] mx-auto flex flex-col-reverse sm:flex-row sm:justify-between">
                <div className="w-[70%]">
                   <h3 className="text-[24px] font-semibold mb-3">Customer Tickets</h3>
                   <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
                      {
                     cTicket.map(ticket=><Tickets  handleTask={handleTask} key={ticket.ticket_id} ticket={ticket}></Tickets>)
                      }
                   </div>
                </div>
                <div className="w-90% sm:w-[30%] sm:ml-4">
                   <div className="mb-10">
                    <h3 className="text-[24px] font-semibold">Task Status</h3>
                   {
                    task.map(task=><Task handleResolved={handleResolved} key={task.title} task={task}></Task>)
                   }
                   </div>
                   <div>
                      <h3 className="text-[24px] font-semibold ">Resolved Task</h3>
                      {
                        resolved.map(resolveTask=><ResolvedTask key={resolveTask.description} resolveTask={resolveTask}></ResolvedTask>)
                      }
                      {resolved.length === 0 && (
                        <p className="">No tasks yet.</p>
                        )}
                   </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CustomerTicket;