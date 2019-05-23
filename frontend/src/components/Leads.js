import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'
import { getLeads, deleteLead } from '../actions/leads';

class Leads extends Component{
  static propTypes = {
    leads: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td><button onClick={this.props.deleteLead.bind(this, lead.id)}>Delete</button></td>
              </tr>  
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
//[whatever]: state.[reducerName].[part of state wanted from reducer]
  leads: state.leads.leads,
})

//  connect([if it needs to pull down state, make a mapStateToProps function. if not then make this null], { [any actions needed. import at top of file] })(Component)
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);