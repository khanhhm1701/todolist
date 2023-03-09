import React, { useState } from "react"
import "../assets/css/TodoList.css"
import NavBar from "../parts/NavBar"
import SideBarItem from "../parts/SideBarItem"
import ContentJobDone from "../parts/ContentJobDone"
import FormContent from "../parts/FomContent"

export default function TodoList() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('listJobs')) || []);
    const [selectedJob, setSelectedJob] = useState(null);
    const [nextId, setNextId] = useState(1)
    const [editing, setEditing] = useState(null)
    const [dueDate, setDueDate] = useState(null)
    const [inDate, setInDate] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

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
        setInDate(null)
        setDueDate(null)
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
        setInDate(null)
        setDueDate(null)
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

            {/* <SideBar>
                jobs={filteredJobs}
                onClick={handleJobClick}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onCheckChange={handleCheckedChange}
            </SideBar> */}
            <div className="side-bar">
                <div className="todo-logo">TO DO LIST</div>
                <ul className="list-job">
                    <SideBarItem
                        jobs={filteredJobs}
                        onClick={handleJobClick}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                        onCheckChange={handleCheckedChange}
                    />
                </ul>
            </div>
            {/* Content and NavBar */}
            <div className="content-and-nav">
                {/* Navbar */}
                <NavBar
                    handleAddNewJob={handleAddNewJob}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <div className="content">
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
        </div >
    )
}