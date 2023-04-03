function Navbar (props) {
    return (
        <div>
            <h2> {props.heading} </h2>
            <ul>
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#"> About</a> </li>
                <li> <a href="#"> Contact </a> </li>
                <li> <a href="#"> {props.text} </a> </li>
            </ul>
        </div>
    )
}

export default Navbar;