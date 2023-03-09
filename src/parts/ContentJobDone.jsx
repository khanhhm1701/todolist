import "../assets/css/TodoList.css";
export default function ContentJobDone({selectedJob}) {
    return (
        <div className="selectedContent">
            <h2 className="selected-title">{selectedJob.title}</h2>
            <p className="in-date">Innitiated Date: {selectedJob.inDate}</p>
            <p className="due-date">Due Date: {selectedJob.dueDate}</p>
            <p className="selected-detail">{selectedJob.content}</p>
            {selectedJob.isChecked && <h2 className="done-mess">This job is done!!!</h2>}
        </div>
    )
}