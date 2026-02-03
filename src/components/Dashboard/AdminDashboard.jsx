import React, { useContext, useEffect, useState } from 'react'
import { authContxt } from '../../context/AuthContext'
import { LogOut } from 'lucide-react'
const AdminDashboard = ({ handleLogout }) => {

    const Data = useContext(authContxt)

    const employees = JSON.parse(localStorage.getItem('employees'))

    const employeeTaskSummary = employees.map(emp => {
        const accepted = emp.tasks.filter(t => t.stat === 'Accepted').length
        const completed = emp.tasks.filter(t => t.stat === 'Completed').length
        const failed = emp.tasks.filter(t => t.stat === 'Failed').length

        return {
            Name: emp.fullname,
            accepted,
            completed,
            failed,
        }
    })

    // console.log(employeeTaskSummary)


    const [newEmployees, setNewEmployees] = useState([])

    useEffect(() => {
        if(newEmployees.length > 0) {
          localStorage.setItem("employees", JSON.stringify(newEmployees))
         
        }
      }, [newEmployees])
    const taskCreation = () => {
        const newTask = {
            id: Date.now(),
            title: title,
            description: descri,
            fullName: assignTo,
            date: dueDate,
            category: catt,
            stat: 'pending'
        }

        const updatedEmployees = employees.map(function (e) {
            if (e.fullname == assignTo) {
                return { ...e, tasks: [...e.tasks, newTask] }
            } return e;
        })
        setNewEmployees(updatedEmployees)
        settitle('')
        setassignTo('')
        setcatt('')
        setdescri('')
        setdueDate('')
    }
    const [title, settitle] = useState('')
    const [descri, setdescri] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [dueDate, setdueDate] = useState('')
    const [catt, setcatt] = useState('')

    return (
        <div className='bg-[#0f172a] h-fit w-screen'>
            {/* HEADER */}
            <header id='header' className=' w-full py-2 pt-3 flex flex-row justify-between items-center px-15'>
                <p id='greetinTxt' className='font-semibold text-[25px] text-[#e5e7eb]'>Hello, Admin!</p>
                <button id='logoutBtn' onClick={handleLogout} className='bg-[#6366f1] text-sm px-4 pb-1.5 pt-0.5 rounded-[5px] text-[#e5e7eb] '>Logout <LogOut id='logoutIcon' size={15} className='inline ml-1' /> </button>
            </header>

            {/* TASK CREATION */}
            <div className='px-5 py-2'>
                <div className="bg-[#1e293b] border border-[#ffffff14] p-6 rounded-lg">
                    <h2 className="text-lg font-semibold text-[#e5e7eb] mb-4">
                        Create Task for Employees
                    </h2>
                    <form onSubmit={function(e){
                    e.preventDefault()
                    taskCreation()
                }}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <input
                             required onChange={function(e){
                                settitle(e.target.value)
                             }} value={title}
                                type="text"
                                placeholder="Task Title"
                                className="bg-[#0f172a] text-[#94a3b8] active:outline-2 outline-[#6366f1] rounded-md p-2 w-full"
                            />

                            <select required onChange={function(e){
                              setassignTo(e.target.value)
                              }} value={assignTo}
                             className=" rounded-md p-2 w-full bg-[#0f172a] text-[#94a3b8] active:outline-2 outline-[#6366f1]">
                                <option>Select Employee</option>
                                <option>Kishore Kumar</option>
                                <option>Amitabh Bachhan</option>
                                <option>Dilip Kumar</option>
                                <option>Sashi Kaapor</option>
                                <option>Mohammed Raafi</option>
                            </select>

                            <input required onChange={function(e){
                             setdueDate(e.target.value)
                              }} value={dueDate}
                                type="date"
                                className=" rounded-md p-2 w-full bg-[#0f172a] text-[#94a3b8] active:outline-2 outline-[#6366f1]"
                            />
                        </div>

                        <textarea required  onChange={function(e){
                            setdescri(e.target.value) }}
                            value={descri}
                            placeholder="Description"
                            className=" rounded-md p-2 w-full   mb-4 bg-[#0f172a] text-[#94a3b8] active:outline-2 outline-[#6366f1]"
                            rows="4"
                        />

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <select required onChange={function(e){
                              setcatt(e.target.value)
                               }} value={catt} className=" rounded-md p-2 w-full md:w-1/3 bg-[#0f172a] text-[#94a3b8] active:outline-2 outline-[#6366f1]">
                                <option>Select Category</option>
                                <option>Design</option>
                                <option>Development</option>
                                <option>Testing</option>
                            </select>

                            <button className="bg-[#6366f1] hover:bg-[#6365f1c5] text-[#e5e7eb] px-6 py-2 rounded-md">
                                Add Task
                            </button>
                        </div>
                    </form>

                </div>
            </div>

            {/* OVERVIEW SECTION */}
            <div className='p-5'>
                <div className="bg-[#1e293b] border border-[#ffffff14] p-6 rounded-lg  overflow-x-auto">
                    <h2 className="text-lg font-semibold text-[#e5e7eb] mb-4">
                        Employee Task Overview
                    </h2>

                    <table className="w-full border-collapse ">
                        <thead>
                            <tr className="bg-[#0f172a]  text-center">
                                <th className="p-3 border border-[#94a3b8] text-[#e5e7eb]">Employee Name</th>
                                <th className="p-3 border border-[#94a3b8] text-[#e5e7eb]">Accepted tasks </th>
                                <th className="p-3 border border-[#94a3b8] text-[#e5e7eb]">Completed tasks</th>
                                <th className="p-3 border border-[#94a3b8] text-[#e5e7eb]">Failed tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeTaskSummary.map((emp, index) => (
                                <tr key={index} className="hover:bg-[#1e293b]">
                                    <td className="p-3 border border-[#94a3b8] text-[#e5e7eb]">{emp.Name}</td>
                                    <td className="p-3  border border-[#94a3b8] text-[#e5e7eb] text-center font-semibold">
                                        {emp.accepted}
                                    </td>
                                    <td className="p-3 border border-[#94a3b8] text-[#e5e7eb] text-center font-semibold">
                                        {emp.completed}
                                    </td>
                                    <td className="p-3 border border-[#94a3b8] text-[#e5e7eb] text-center font-semibold">
                                        {emp.failed}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard