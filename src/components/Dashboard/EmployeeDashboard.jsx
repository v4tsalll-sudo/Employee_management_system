import React, { useEffect, useState } from 'react'
import { LogOut } from 'lucide-react'
import { Hourglass } from 'lucide-react'
import { CheckSquareIcon } from 'lucide-react'
import { CircleX } from 'lucide-react'



const EmployeeDashboard = ({handleLogout, data}) => {

    
    const [tasks, setTasks] = useState(data.tasks)
    const acceptedCount = tasks.filter(t => t.stat === "Accepted").length
    const completedCount = tasks.filter(t => t.stat === "Completed").length
    const failedCount = tasks.filter(t => t.stat === "Failed").length
    
    

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem('employees'))
        if (!employees) return;

        const currentEmployee = employees.find(
            emp => emp.fullname === data.fullname
        )

        if(currentEmployee) {
            setTasks(currentEmployee.tasks)
        }
}, [])
    
    const updateTaskStatus = (taskId, newStatus) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId
            ? {...task, stat : newStatus}
            : task 
        )

        setTasks(updatedTasks)
        syncTasksToLocalStorage(updatedTasks)
    }

    const syncTasksToLocalStorage = (updatedTasks) => {
        const employees = JSON.parse(localStorage.getItem('employees'))

        const updatedEmployees = employees.map(emp => 
            emp.fullname === data.fullname
            ? {...emp, tasks : updatedTasks}
            : emp
        )

        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }
    
    
    
    

  return (
    <div className=' h-screen  w-screen text-white bg-[#0f172a] px-5'>
        {/* HEADER */}
        <header className='text-black flex justify-between w-full h-[10%] sm:px-5 items-center '>
            <p id='greetinTxt2' className='font-semibold text-lg text-[#e5e7eb]'>Hi, {data.fullname}👋</p>
            <button onClick={handleLogout}
            className='bg-[#6366f1] text-[#e5e7eb] text-sm h-fit pb-1 px-4 pt-0.5 rounded-[2.5px]'>Logout <LogOut id='logoutIcon' size={20} className='inline ml-1' /> </button>
        </header>

        {/* INFORMATION */}
        <div id='info' className='h-[25%] w-full  flex gap-5 items-center justify-center'>
            <div id='infoCard1' className='h-[85%] w-85 bg-[#1e293b] rounded-[10px] text-[#e5e7eb] flex flex-col justify-center items-center gap-5'> 
                <p className='w-[80%]  text-[25px] '> <Hourglass className='inline text-green-500'/> </p>
                <p className='w-[80%] text-[20px] '> Accepted Task <span className='font-semibold text-[23px] ml-2'>{acceptedCount}</span> </p>
            </div>
            <div id='extra' className='flex  h-[85%] gap-5 w-170'>
              <div id='infoCard2' className='h-full w-1/2 bg-[#1e293b] rounded-[10px] text-[#e5e7eb] flex flex-col justify-center items-center gap-5'> 
                <p className='w-[80%]  text-[25px] '> <CheckSquareIcon className='inline text-blue-500'/> </p>
                <p className='w-[80%] text-[20px] '> Completed task  <span className='font-semibold text-[23px] ml-2'>{completedCount}</span> </p>
              </div>
              <div id='infoCard3' className='h-full w-1/2 bg-[#1e293b] rounded-[10px] text-[#e5e7eb] flex flex-col justify-center items-center gap-5'> 
                <p className='w-[80%]  text-[25px] '> <CircleX className='inline text-red-500' /></p>
                <p className='w-[80%] text-[20px]  '>  Failed task  <span className='font-semibold text-[23px] ml-2'>{failedCount}</span>  </p>
              </div>
            </div>

            </div>
        

        {/* TASKS */}
        <div id='tasks' className='h-[65%] w-full text-black '>
            <p className='text-md text-[#e5e7eb] border-l-[#e5e7eb] font-semibold border-l-3 pl-2  h-[7%]'>All Tasks</p>
            {/* TASK LIST */}
            <div className='h-[93%]  flex flex-col gap-5 items-center overflow-x-scroll py-5'>
                {tasks.map(function(e, idx){
                    
                    return <div key={e.id} id='taskCard' className='w-[95%] h-fit bg-[#1e293b] text-[#e5e7eb] shrink-0 rounded-[10px] px-5 py-2.5 border border-[#ffffff14]'>
                    <div className='flex justify-between'>
                        <p id='Title' className='text-[20px]'>{e.title} <span id='date1' className='text-[13px] text-[#94a3b8] ml-1'>{e.date}</span></p>
                        {e.stat === 'pending' && (
                            <button id='acceptBtn' onClick={() => updateTaskStatus(e.id, "Accepted")} className='text-sm bg-[#46ef46] pb-1 px-4 rounded-[5px] self-center text-black'>Accept </button>
                        )}
                        {e.stat === 'Accepted' && (<p className='text-green-500'>Active</p>)}
                        {e.stat === 'Completed' && (<p className='text-blue-500'>Completed</p>)}
                        {e.stat === 'Failed' && (<p className='text-red-500'>Failed</p>)}
                    </div>
                    <p id='descri' className='text-[#94a3b8] w-full'>{e.description}</p>
                    <div id='lowerSec' className='mt-3 flex justify-between  h-fit items-center'>
                        <div id='date_and_catt' className='flex '>
                        <p id='catt' className='self-center'>{e.category}</p>
                        <p id='date2' className='text-[13px] text-[#e5e7eb] rounded-[5px] hidden ml-1'>•  {e.date}</p>
                        </div>
                        {e.stat === 'Accepted'&& ( 
                            <div id='cntrls' className='flex  gap-3 self-center'>
                                <button id='btns' onClick={() => updateTaskStatus(e.id, "Completed")} className='text-sm bg-[#1881f8] pb-1.5 pt-1 px-4 rounded-[5px] self-center text-white'> Completed</button>
                                <button id='btns' onClick={() => updateTaskStatus(e.id, "Failed")} className='text-sm bg-[red] pb-1.5 pt-1 px-4 rounded-[5px] self-center text-white'> Failed</button>
                                </div>
                             )}
                    </div>
                </div>
                })}

            </div>
        </div>
    </div>
  )
}

export default EmployeeDashboard