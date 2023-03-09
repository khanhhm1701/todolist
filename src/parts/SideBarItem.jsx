import "../assets/css/TodoList.css";
export default function SideBarItem(props) {
    
    return (
        props.jobs.map((job, index) => (
            <li key={job.id} className="job-item" onClick={() => props.onClick(job)}>
                <div className="job-item-title">{index + 1}. {job.title}</div>
                <i onClick={(e) => {
                    e.stopPropagation()
                    props.onUpdate(job)
                }} className="update fa-solid fa-pen-to-square"></i>
                <i onClick={(e) => {
                    e.stopPropagation()
                    props.onDelete(job.id)
                }} className="delete fa-solid fa-trash-can"></i>
                <input type="checkbox" checked={job.isChecked} onChange={(e) => {
                    e.stopPropagation()
                    props.onCheckedChange(job.id)
                }} />
            </li>
        ))
    )
}