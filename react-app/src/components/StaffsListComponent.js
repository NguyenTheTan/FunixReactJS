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
        <div className="col-lg-3 col-md-5 m-1" key={staff.id}>
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







// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay,
//   CardTitle } from 'reactstrap';
// import  StaffDetails from './StaffdetailComponent';


// class Staff extends Component {

//   constructor(props) {
//       super(props);

//       this.state = {
//           selectedStaff: null
//       }
//   }

//   onStaffSelect(staff){
//     // console.log("staff",staff)
//     this.setState({selectedStaff: staff})
//   }
 

//   renderStaff(staff) {
//     console.log("staff",staff)
//       if (staff != null)
//           return(

//               <StaffDetails staff={staff} />
             
//           );
//       else
//           return(
//               <div></div>
//           );
//   }

//   render() {
      // const staff = this.props.staff.map((staff) => {
      //     return (
      //       <div  className="col-lg-3 col-md-5 m-1">
      //         <Card key={staff.id}
      //           onClick={() => this.onStaffSelect(staff)}>
      //           <CardImg width="100%" src={staff.image} alt={staff.name} />
      //           <CardImgOverlay>
      //               <CardTitle>{staff.name}</CardTitle>
      //           </CardImgOverlay>
      //         </Card>
      //       </div>
      //     );
      // });

//       return (
//           <div className="container">
//               <div className="row">
//                   {staff}
//               </div>
//               <div className="row">
//                 <div  className="col-lg-3 col-md-5 m-1">
//                   {this.renderStaff(this.state.selectedStaff)}
//                 </div>
//               </div>
//           </div>
//       );
//   }
// }

// export default Staff;