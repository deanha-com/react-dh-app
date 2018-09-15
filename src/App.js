import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Dean', age: 28 },
			{ name: 'Cam', age: 18 },
			{ name: 'Billy', age: 38 }
		],
		otherStates: 'some other value',
		showPersons: false
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons]
		persons.splice(personIndex,1);
		this.setState({persons: persons});
	}

	nameChangedHandler = (event) => {
		this.setState(
			{
				persons: [
					{ name: 'newName', age: 888		},
					{ name: 'Cam', age: 23		},
					{ name: event.target.value, age: 3		}
				]
			}
		)
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});

	}

	render() {
		const btnStyle = {
			backgroundColor: 'gold',
			border: 'solid red 1px',
			padding: '10px 15px',
			marginBottom: '10px'
		};

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
				{this.state.persons.map((person, index) =>{
					return <Person
					click={()=>this.deletePersonHandler(index)}				
					name={person.name}
					age={person.age}/>
				})}
				</div>)
		};
	return (
		<div className="App">
			<h1>Dean's ReactApp</h1>
			<p>This is a list of people living in Jubilee Court</p>
			<button
				style={btnStyle}
				onClick={this.togglePersonHandler}>Toggle Persons</button>
				{persons}
		</div>
	);
  }
}

export default App;