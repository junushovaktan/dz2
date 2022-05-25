import classes from "./services.module.css";
export const Services = (props) => {
    return(
        <div>
            <ul className = {classes.ul}>
                {props.services.map((el, key)=> {
                    return <li key={key} className = {classes.li}>{el}</li>
                })}
            </ul>
        </div>
    )
}