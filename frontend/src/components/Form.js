import React, { Component } from 'react';

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState( {
      [e.target.name]: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('Submit');
  }

  render() {
    return (
      <div>
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="name" onChange={this.onChange} value={this.state.name}/>
          <label htmlFor="">Email</label>
          <input type="email" name="email" onChange={this.onChange} value={this.state.email}/>
          <label htmlFor="">Message</label>
          <input type="text" name="message" onChange={this.onChange} value={this.state.message}/>
          <button type="submit">Add Lead</button>
        </form>
      </div>
    )
  }
}

export default Form;