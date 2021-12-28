import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardTitle} from 'reactstrap'
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
          <Card onClick={ () => this.onStaffSelect(staff)}>
            <CardBody>
              <CardImg src={staff.image} alt={staff.name} />
              <CardTitle> {staff.name} </CardTitle>              
            </CardBody>
          </Card>
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
