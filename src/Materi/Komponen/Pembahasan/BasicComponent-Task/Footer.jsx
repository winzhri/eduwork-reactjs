import React from "react";

class Footer extends React.Component{
   
    // berhubung footer mrupakan class component, maka gunakan constructor
    constructor (props) {
        super (props)
    };

    render() {
        return (
            <div>
                <h2> My Footer </h2>
                <b> {this.props.paragraf()} </b>
            </div>
        )
    }
}

export default Footer;