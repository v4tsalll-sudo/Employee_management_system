import React, { useContext, useState } from 'react'
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

    console.log(employeeTaskSummary)

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

        localStorage.setItem("employees", JSON.stringify(updatedEmployees))
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
        <div className='bg-[#f4f6f9] h-fit w-screen'>
            {/* HEADER */}
            <header id='header' className='bg-linear-to-r from-cyan-500 to-blue-500 w-full py-2 flex flex-row justify-between items-center px-15'>
                <p id='greetinTxt' className='font-semibold text-[25px] text-white'>Hello, Admin!</p>
                <button id='logoutBtn' onClick={handleLogout} className='bg-[#2e86c1] px-4 pb-1.5 pt-0.5 rounded-[5px] text-white'>Logout <LogOut size={20} className='inline ml-1' /> </button>
            </header>

            {/* TASK CREATION */}
            <div className='p-5'>
                <div className="bg-blue-50 p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-blue-800 mb-4">
                        Create Task for Employees
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Task Title"
                            className="border rounded-md p-2 w-full"
                        />

                        <select className="border rounded-md p-2 w-full">
                            <option>Select Employee</option>
                            <option>John Doe</option>
                            <option>Sarah Smith</option>
                        </select>

                        <input
                            type="date"
                            className="border rounded-md p-2 w-full"
                        />
                    </div>

                    <textarea
                        placeholder="Description"
                        className="border rounded-md p-2 w-full mb-4"
                        rows="4"
                    />

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <select className="border rounded-md p-2 w-full md:w-1/3">
                            <option>Select Category</option>
                            <option>Design</option>
                            <option>Development</option>
                            <option>Testing</option>
                        </select>

                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md">
                            Add Task
                        </button>
                    </div>
                </div>
            </div>

            {/* OVERVIEW SECTION */}
            <div className='p-5'>
            <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
                <h2 className="text-lg font-semibold mb-4">
                    Employee Task Overview
                </h2>

                <table className="w-full border-collapse ">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3 border">Employee Name</th>
                            <th className="p-3 border">Accepted Tasks</th>
                            <th className="p-3 border">Completed Tasks</th>
                            <th className="p-3 border">Failed Tasks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeTaskSummary.map((emp, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="p-3 border">{emp.Name}</td>
                                <td className="p-3 border text-center font-semibold">
                                    {emp.accepted}
                                </td>
                                <td className="p-3 border text-center font-semibold">
                                    {emp.completed}
                                </td>
                                <td className="p-3 border text-center font-semibold">
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