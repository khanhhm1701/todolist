import "../assets/css/TodoList.css";
import SideBarItem from "./SideBarItem";

export default function SideBar(props) {
    return (
        <div className="side-bar">
            <div className="todo-logo">TO DO LIST</div>
            <SideBarItem
                jobs={props.jobs}
                onClick={props.onClick}
                onUpdate={props.onUpdate}
                onDelete={props.onDelete}
                onCheckChange={props.onCheckedChange}
            />
        </div>
    )
}