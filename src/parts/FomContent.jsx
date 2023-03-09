import "../assets/css/TodoList.css";
export default function FormContent(props) {
    
    return (
        <form className="content-form">
            <label className="in-date-label">
                Innitiated date:
                <input className="input-date input-indate" value={props.inDate} type="date" onChange={e => props.setInDate(e.target.value)} />
            </label>
            <label className="due-date-label">
                Due date:
                <input className="input-date input-duedate" value={props.dueDate} type="date" onChange={e => props.setDueDate(e.target.value)} />
            </label>
            <label htmlFor="content-title" className="content-lable">Add title for new job</label>
            <input
                id="content-title"
                type="text"
                value={props.title}
                onChange={props.handleTitleChange}
            />
            <label htmlFor="content-detail" className="content-lable">Add detail content for job</label>
            <textarea
                type="text"
                id="content-detail"
                value={props.content}
                onChange={props.handleContentChange}
            />
            {props.editing ? (<button onClick={props.handleEdit} className="confirm-add">Update</button>)
                : (
                    (<button onClick={props.handleSubmit} className="confirm-add">Add</button>)
                )   
            }
        </form>
    )
}