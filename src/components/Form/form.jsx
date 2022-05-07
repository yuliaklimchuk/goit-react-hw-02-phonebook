import { Component } from "react";

export class Form extends Component {
  state = {
    contacts: [],
    name: ''
  }
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type='submit'>Add contacts</button>
      </form>
    );
  }
}
