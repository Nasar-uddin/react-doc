import React, { Component } from 'react';
import fire from '../config/firebase';

class Signup extends Component {
    state = {
        email:null,
        password:null,
        comfirmPassword:null,
        errorMsg:null
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        if(this.state.email!==null||this.state.password!==null){
            if(this.state.password===this.state.comfirmPassword){
                fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(res=>{
                    console.log(res);
                    this.props.history.push('/')
                }).catch(error=>{
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode==='auth/weak-password'){
                        alert('The password is too weak.');
                    }else{
                        alert(errorMessage);
                    }
                    console.log(error);
                });
            }else{
                this.setState({errorMsg:'Passwod didn\'t match'})
            }
        }else{
            this.setState({errorMsg:'Fill the form'})
        }
        // console.log(this.state);
    }
    handelChnage = (e)=>{
        // console.log(e.target.id);
        this.setState({[e.target.id]:e.target.value})
    }
    render() {
        return (
            <div className="login row">
                <h1>Sign up for new Accoutn</h1>
                <form className="col s6 offset-s3" onSubmit={this.handelSubmit}>
                    <div className="input-field">
                        <input type="text" id="email" placeholder="Email" onChange={this.handelChnage}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" onChange={this.handelChnage}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="comfirmPassword" placeholder="Confirm password" onChange={this.handelChnage}/>
                        {this.state.errorMsg!==null?
                            (<span className="helper-text red-text">{this.state.errorMsg}</span>):
                            (<span></span>)
                        }
                    </div>
                    <button className="btn purple">Sign Up</button>
                </form>
            </div>
                );
            }
        }

export default Signup;