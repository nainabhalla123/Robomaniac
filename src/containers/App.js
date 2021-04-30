import React,{Component} from 'react';
import Cardlist from './Cardlist';
//import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';



class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
	}
	}

	componentDidMount()
	{
		//console.log('check');
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users})
		})
		
	}

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		
	
	}


	render()
	{
			const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})	
			if(this.state.robots.length===0)
				return <h1><b>LOADING !!</b></h1>
			else
			{
				return(
		<div className='tc'>
		<h1 className='bg-lightest-blue'>ROBOFRIENDS</h1>
		<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
		<Cardlist robots={filteredRobots}/>	
			</Scroll>
		</div>	
		);
			}
	
	}
		
	
	
}
export default App;
