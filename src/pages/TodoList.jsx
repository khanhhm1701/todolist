import React, { useState, useEffect } from "react"
import "../assets/css/TodoList.css"
import NavBar from "../parts/NavBar"
import ContentJobDone from "../parts/ContentJobDone"
import FormContent from "../parts/FomContent"
import SideBar from "../parts/SideBar"
import Menu from "../parts/Menu"
import { deleteJob, postJob, putJob } from "../services/jobAPI"

export default function TodoList() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [nextId, setNextId] = useState(1)
    const [editing, setEditing] = useState(null)
    const [dueDate, setDueDate] = useState(null)
    const [inDate, setInDate] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://640fe591864814e5b6420012.mockapi.io/api/todo')
            .then(res => res.json())
            .then(listJobs => {
                setJobs(listJobs)
            })
    }, [])


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
                putJob(editing.id, newJob)
                return newJob

            } else {
                return job
            }
        });
        setJobs(newJobs)
        setEditing(null)
        setTitle("")
        setContent("")
        alert("Update Successful")
        setInDate(null)
        setDueDate(null)
    }



    function handleDelete(id) {
        const updatedJobs = jobs.filter((job) => job.id !== id);
        setJobs(updatedJobs)
        deleteJob(id)
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
            postJob(newJob)
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
        setInDate(null)
        setDueDate(null)
    }

    function handleCheckedChange(id) {
        const updatedJobs = jobs.map((job) => {
            if (job.id === id) {
                const newJob = { ...job, isChecked: !job.isChecked }
                putJob(id, newJob)
                return newJob
            }
            return job;
        });
        setJobs(updatedJobs);
    }

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
        <div className="todo-page">
            {/* Menu */}
            <Menu
                handleAdd={handleAddNewJob}
            />
            <div className="sidebar-and-content">
                {/* Side bar */}
                <SideBar
                    jobs={filteredJobs}
                    onClick={handleJobClick}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                    onCheckedChange={handleCheckedChange}
                />
                {/* Content and NavBar */}
                <div className="content-and-nav">
                    {/* Navbar */}
                    <NavBar
                        handleAddNewJob={handleAddNewJob}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <div className="content">
                        <div className="welcome">Welcome back, <strong>Khanh</strong></div>
                        {selectedJob ? (
                            <ContentJobDone selectedJob={selectedJob} />
                        ) : (
                            <FormContent
                                inDate={inDate}
                                setInDate={setInDate}
                                dueDate={dueDate}
                                setDueDate={setDueDate}
                                title={title}
                                content={content}
                                handleTitleChange={handleTitleChange}
                                handleContentChange={handleContentChange}
                                handleEdit={handleEdit}
                                handleSubmit={handleSubmit}
                                editing={editing}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}