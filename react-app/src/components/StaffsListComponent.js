import React, { Component } from 'react';
import StaffDetails from './StaffdetailComponent';

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null
    }
  }
  
  onStaffSelect(staff){
    this.setState({
      selectedStaff: staff
    })
  }

  renderStaff(staff){
    if (staff != null)
      return (
        <StaffDetails staff={staff} />
      )
    else {
      <div></div>
    }
  }

  render() {
    const staff1 = this.props.staff.map((staff) => {
      return (
        <div className="col-lg-4 col-md-6" key={staff.id}>
          <div onClick={ () => this.onStaffSelect(staff)}>
            <div>
              <img src={staff.image} alt={staff.name} className="cardImg"/>
              <h4 className="name"> {staff.name} </h4>              
            </div>
          </div>
        </div>
      )      
    });

    return (
      <div className="container">
        <div className="row">
          {staff1}
        </div>
        <div>
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    )
    
  }

}

export default StaffList;
