import "../assets/css/ContentJobDone.css";
import done from "../assets/img/done.png";
import firework from "../assets/img/firework.gif"; //
export default function ContentJobDone({ selectedJob }) {
    return (
        <div className="wrapper">
            {selectedJob.isChecked ? (
                <div className="selected-content checked">
                    <h2 className="selected-title">{selectedJob.title}</h2>
                    <p className="in-date"><strong>Innitiated Date:</strong> {selectedJob.inDate}</p>
                    <p className="due-date"><strong>Due Date:</strong> {selectedJob.dueDate}</p>
                    <p className="selected-detail"><strong>Detail Content: </strong>{selectedJob.content}</p>
                    <div className="done-show">
                        <img src={done} alt="" className="done-img" />
                        <div className="done-content">
                            <img src={firework} alt="" className="firework firework1" />
                            <div className="done-title">
                                <span>This job is done!!!</span>
                            </div>
                            <img src={firework} alt="" className="firework firework2" />
                        </div>
                    </div>

                </div>
            ) : (
                <div className="selected-content unchecked">
                    <h2 className="selected-title">{selectedJob.title}</h2>
                    <p className="in-date"><strong>Innitiated Date:</strong> {selectedJob.inDate}</p>
                    <p className="due-date"><strong>Due Date:</strong> {selectedJob.dueDate}</p>
                    <p className="selected-detail"><strong>Detail Content: </strong>{selectedJob.content}</p>
                </div>
            )
            }
        </div>
    )
}