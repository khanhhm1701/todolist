import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./TodoList.css"
import ToDay from "../date/date"

export default function TodoList() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('listJobs')) || []);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [nextId, setNextId] = useState(1)
    const [editing, setEditing] = useState(null)
    const [dueDate, setDueDate] = useState()
    const [inDate, setInDate] = useState()

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    function handleContentChange(e) {
        setContent(e.target.value)
    }

    function handleUpdate(job) {
        setSelectedJob(null)
        setEditing(job)
        setTitle(job.title)
        setContent(job.content)
        setInDate(job.inDate)
        setDueDate(job.dueDate)
    }

    const handleEdit = () => {
        const newJobs = jobs.map((job) => {
            if (job.id === editing.id) {
                const newJob = {
                    ...job,
                    inDate: inDate,
                    dueDate: dueDate,
                    title: title,
                    content: content,
                }
                setSelectedJob(newJob)
                return newJob
            
            } else {
                return job
            }
        });
        setJobs(newJobs)
        localStorage.setItem("listJobs", JSON.stringify(newJobs))
        setEditing(null)
        setTitle("")
        setContent("")
        alert("Update Successful")
        setInDate()
        setDueDate()
    }



    function handleDelete(id) {
        const updatedJobs = jobs.filter((job) => job.id !== id);
        setJobs(updatedJobs)
        localStorage.setItem('listJobs', JSON.stringify(updatedJobs));
    }

    function handleSubmit(e) {
        e.preventDefault()
        setJobs(pre => {
            const newJob = {
                id: nextId,
                inDate: inDate,
                dueDate: dueDate,
                title,
                content,
                isChecked: false
            }
            const newJobs = [...pre, newJob]
            const jsonListJobs = JSON.stringify(newJobs)
            localStorage.setItem('listJobs', jsonListJobs)
            return newJobs
        })
        setNextId(nextId + 1)
    }

    function handleJobClick(job) {
        setSelectedJob(job)
    }

    function handleAddNewJob() {
        setSelectedJob(null)
        setEditing(false)
        setTitle("")
        setContent("")
        setInDate()
        setDueDate()
    }

    function handleCheckedChange(id) {
        const updatedJobs = jobs.map((job) => {
            if (job.id === id) {
                return { ...job, isChecked: !job.isChecked };
            }
            return job;
        });
        setJobs(updatedJobs);
        localStorage.setItem('listJobs', JSON.stringify(updatedJobs))

    }

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="todo-page">
            {/* Side bar */}
            <div className="side-bar">
                <div className="todo-logo">TO DO LIST</div>
                <ul className="list-job">
                    {
                        filteredJobs.map((job, index) => (
                            <li key={job.id} className="job-item" onClick={() => handleJobClick(job)}>
                                <div className="job-item-title">{index + 1}. {job.title}</div>
                                <i onClick={(e) => {
                                    e.stopPropagation()
                                    handleUpdate(job)
                                }} className="update fa-solid fa-pen-to-square"></i>
                                <i onClick={(e) => {
                                    e.stopPropagation()
                                    handleDelete(job.id)
                                }} className="delete fa-solid fa-trash-can"></i>
                                <input type="checkbox" checked={job.isChecked} onChange={(e) => {
                                    e.stopPropagation()
                                    handleCheckedChange(job.id)
                                }} />
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Content and NavBar */}
            <div className="content-and-nav">
                {/* Navbar */}
                <div className="nav-bar">
                    <button className="btn-add" onClick={handleAddNewJob}>+ Add a new job</button>
                    <div className="search-and-logout">
                        <div className="search-box">
                            <input
                                type="text"
                                className="search-input"
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Search..."
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <NavLink to="/" className="log-out">
                            <i title="Logout" className="btn-logout fa-solid fa-right-from-bracket"></i>
                        </NavLink>
                    </div>  

                </div>
                <div className="content">
                    <ToDay />
                    {selectedJob ? (
                        <div className="selectedContent">
                            <h2 className="selected-title">{selectedJob.title}</h2>
                            <p className="in-date">Innitiated Date: {selectedJob.inDate}</p>
                            <p className="due-date">Due Date: {selectedJob.dueDate}</p>
                            <p className="selected-detail">{selectedJob.content}</p>
                            {selectedJob.isChecked && <h2 className="done-mess">This job is done!!!</h2>}
                        </div>
                    ) : (

                        <form className="content-form">
                            <label className="in-date-label">
                                Innitiated date:
                                <input className="input-date input-indate" value={inDate} type="date" onChange={e => setInDate(e.target.value)} />
                            </label>
                            <label className="due-date-label">
                                Due date:
                                <input className="input-date input-duedate" value={dueDate} type="date" onChange={e => setDueDate(e.target.value)} />
                            </label>
                            <label htmlFor="content-title" className="content-lable">Add title for new job</label>
                            <input
                                id="content-title"
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                            />
                            <label htmlFor="content-detail" className="content-lable">Add detail content for job</label>
                            <textarea
                                type="text"
                                id="content-detail"
                                value={content}
                                onChange={handleContentChange}
                            />
                            {editing ? (<button onClick={handleEdit} className="confirm-add">Update</button>)
                                : (
                                    (<button onClick={handleSubmit} className="confirm-add">Add</button>)
                                )

                            }
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}