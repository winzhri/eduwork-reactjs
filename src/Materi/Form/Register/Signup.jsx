import React from "react";
import * as Validator from 'validatorjs';
import 'bootstrap/dist/css/bootstrap.min.css';


const Input = ({Label, type, name, onChange}) => {
    return (
        <div>
            <label> {Label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map ((error, i) => <li key={i}> {error} </li>)
            }
        </ul>            
    )
}

class Validation extends React.Component {
    state =  {
        fullname: '',
        username: '',
        email: '',
        password: '',
        // confirmPassword: '',
        errors: []
    }
   
    handleSubmit = event => {
        event.preventDefault();
            const { fullname, username, email, password } = this.state;
                // console.log (this.state);
                alert(`
                    fullName: ${this.state. fullname}
                    username: ${this.state.username}
                    email: ${this.state.email}
                    password: ${this.state.password}
                    
                `)
        
        let data = { fullname, username, email, password };
           
        let rules = {
            fullname: 'required',
            username: 'required',
            email: 'required|email',
            password: 'required|min:8',
            // confirmPassword: 'required|password'
        };
            let validation = new Validator(data, rules);
            validation.passes();
                this.setState({
                    errors: [
                        ...validation.errors.get('fullname'),
                        ...validation.errors.get('username'),
                        ...validation.errors.get('emailAddress'),
                        ...validation.errors.get('password'),
                        // ...validation.errors.get('confimPassword')
                    ]
                })

        // this.setState({ 
        //     fullName
        //     username: '',
        //     email: '',
        //     password: '',
        //     errors: []
        // })
    }    
    //     let message  [];
    //     if (email.length === 0) {
    //         message = [...message, 'Email tidak boleh kosong'];
    //     }    
    //     if (password.length === 0)
    //         message = [...message, 'Password tidak boleh kosong'];
    //     }
    //     const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     if (re.test(String(email).toLowerCase() )) {
    //         message = [...message, 'Email tidak valid'];
    //     }
    //     if (password.length < 8)
    //         message = [...message, 'Password terlalu pendek'];
    //     }

    //     if (message.length > 0 ) {
    //         this.setState ({
    //             errors: message
    //         });
    //     }
    //     else {
    //      alert(`
    //         nama: ${this.state.nama}
    //         jurusan: ${this.state.jurusan}
    //      `);
       
    //     this.setState({ 
    //         errors: []
    //     })
    //     }
    // 

    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '15px',
            // border-radius: '3px',
            
        }
            return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                 
                <h3> Registration Form </h3>
                <form onSubmit = {this.handleSubmit}>
                    <Input type="fullname" name="fullname" Label="Full Name"
                        onChange={value => this.setState({fullname: value})}
                        value={this.state.value} />                        
                    <Input type="username" name="username" Label="Username"
                        onChange={value => this.setState({username: value})} />
                    <Input type="email" name="email" Label="Email address"
                        onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" Label="Password"
                        onChange={value => this.setState({password: value})} />
                    {/* <Input type="confirmPassword" name="confirmPassword" Label="Confirm Password"
                        onChange={value => this.setState({confirmPassword: value})} />       */}
                    <br />    
                    <button type="submit"> Signup </button>
                </form>
            </div>
        )
    }
}

export default Validation;