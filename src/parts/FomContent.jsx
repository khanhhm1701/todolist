import "../assets/css/TodoList.css";
export default function FormContent({ inDate, setInDate, dueDate, setDueDate, title, handleTitleChange,
    content, handleContentChange, editing, handleEdit, handleSubmit }) {

    return (
        <form className="content-form">
            <div className="date">
                <div className="in-date-label">
                    <span>Innitiated date:</span>
                    <input className="input-date input-indate" value={inDate} type="date" onChange={e => setInDate(e.target.value)} />
                </div>
                <div className="due-date-label">
                    <span>Due date:</span>
                    <input className="input-date input-duedate" value={dueDate} type="date" onChange={e => setDueDate(e.target.value)} />
                </div>
            </div>
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
    )
}