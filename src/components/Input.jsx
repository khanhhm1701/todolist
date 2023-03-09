import "../assets/css/RegisterAccount.css";

export default function Input(props) {
    console.log(props);
    return (
        <div className="input">
            <label htmlFor= {props.id} className="form-label">{props.title}</label>
            <input
                id= {props.id}
                type= {props.type}
                className="form-control"
                name= {props.name}
                value={props.formValue}
                onChange={props.handleChange}
            />
        </div>
    )
}