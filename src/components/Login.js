import React,{Component} from 'react';
import fire from '../config/firebase';

class Login extends Component{
    state = {
        email:'',
        password:'',
        errorMsg:null
    }
    handelSubmit = (e)=>{
        e.preventDefault();
        if(this.state.email===''|| this.state.password===''){
            this.setState({errorMsg:'Email or password is empty'});
            
        }else{
            fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(res=>{
                // console.log('I am response from login response');
                // console.log(res);
                // this.props.setUser()
                this.props.history.push('/');
            }).catch(error=>{
                var errorCode = error.code;
                var errorMessage = error.message;
                this.setState({errorMsg:errorMessage+' with code '+errorCode});
            });
            // console.log(this.state);
        }
    }
    handelChnage = (e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
    render(){
        return (
            <div className="login row">
                <h1>Login with your account</h1>
                <form className="col s6 offset-s3" onSubmit={this.handelSubmit}>
                    <div className="input-field">
                        <input type="text" id="email" placeholder="Email" onChange={this.handelChnage}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password" onChange={this.handelChnage}/>
                        {this.state.errorMsg!==null?
                            (<span className="helper-text red-text">{this.state.errorMsg}</span>):
                            (<span></span>)
                        }
                    </div>
                    <button className="btn purple">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;