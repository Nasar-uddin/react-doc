import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import fire from './config/firebase';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends React.Component {
	state = {
		user:null
	}
	componentDidMount(){
		// console.log(this.state);
		this.authListner();
	}
	authListner = ()=>{
		fire.auth().onAuthStateChanged((user)=>{
			console.log(user);
			if(user){
				this.setState({user:user});
				localStorage.setItem('user',user.uid);

			}else{
				this.setState({'user':null});
				localStorage.removeItem('user');
			}
		});
	}
	render(){
		return (
			<BrowserRouter>
				<Navbar user={this.state.user}/>
				<div className="App container">
					<Route exact path="/" component={Home}/>
					<Route path="/signup" component={Signup}/>
					<Route path="/login" component={Login}/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
