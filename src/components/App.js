import { Component } from "react";
import { Form } from "./Form";
import shortid from "shortid";

export class App extends Component {
    state = {
    contacts: [],
    name: ''
    }
  
  addContact = (name) => { 
    const contact = { 
      id: shortid.generate(),
      name: name
    }
    this.setState(prevState => ({ 
      contacts: [contact, ...prevState.contacts]
    }))
  }
  render() { 
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact}></Form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
};
