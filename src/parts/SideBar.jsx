import "../assets/css/TodoList.css"

export default function SideBar({ jobs, onClick, onUpdate, onDelete, onCheckedChange }) {
    return (
        <div className="side-bar">
            <div className="todo-logo">TO DO LIST</div>
            <div className="todo-list">
                {jobs.map((job, index) => (
                    <li key={job.id} className="job-item" onClick={() => onClick(job)}>
                        <div className="job-item-title">{index + 1}. {job.title}</div>
                        <i onClick={(e) => {
                            e.stopPropagation()
                            onUpdate(job)
                        }} className="update fa-solid fa-pen-to-square"></i>
                        <i onClick={(e) => {
                            e.stopPropagation()
                            onDelete(job.id)
                        }} className="delete fa-solid fa-trash-can"></i>
                        <input type="checkbox" checked={job.isChecked} onChange={(e) => {
                            e.stopPropagation()
                            onCheckedChange(job.id)
                        }} />
                    </li>
                ))}
            </div>
        </div>
    )
}