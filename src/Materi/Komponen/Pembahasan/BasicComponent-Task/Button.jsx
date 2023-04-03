const Button = (props) => {
    return (
        <div>
            <button onClick= {() => props.clicked()}> Click here! </button>
            <br/>
        </div>
    )
}

//	export diikuti nama variable
export default Button;
