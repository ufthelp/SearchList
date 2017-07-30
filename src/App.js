import React, { Component } from 'react';
import ContactList from './ContactList'


class App extends Component {

	//function to remove contactlist item
	remove =(contact) =>{
		this.setState((state) =>({
			contacts: state.contacts.filter((c) => c.id !== contact.id 
			)})
		)
	}

	state = {
		//Test data for contact list
				contacts : [
					{
						"id": "1",
						"name": "Ryan",
						"email": "ryan@uftHelp.com",
					},
					{
						"id": "2",
						"name": "Rion",
						"email": "rion@uftHelp.com",
					},
					{
						"id": "3",
						"name": "Rian",
						"email": "rian@uftHelp.com"
					}
				]
			}
	//render method to display the contactlist component
	render() {
		return (
			<div>
			<ContactList contact ={ this.state.contacts } clickDelete={this.remove}/>
			</div>
		)
  }
}

export default App;
