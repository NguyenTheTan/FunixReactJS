import React, { Component } from 'react';
import { Card, CardText, CardImg, CardTitle, CardBody } from 'reactstrap';
import dateFormat from "dateformat";


class StaffDetails extends Component {

    
   render(props) {       
       let staff = this.props.staff; 
       return (
           <div className="container">
               <div  className="row">
                   <div className="col-12 col-md-5 m-1" >
                        <Card style={{width: '300px'}}>
                            <CardImg width="100%" src={staff.image} alt={staff.name} />
                            <CardBody>
                                <CardTitle>
                                    Họ và tên: {staff.name}
                                </CardTitle>
                                <CardText>
                                    Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                                </CardText>
                                <CardText>
                                    Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                                </CardText>
                                
                                <CardText>
                                    Phòng ban: {staff.department.name}
                                </CardText> 
                                
                                <CardText>
                                    Số ngày nghỉ còn lại: {staff.annualLeave}
                                </CardText>

                                <CardText>
                                    Số ngày đã làm thêm: {staff.overTime}
                                </CardText>
                            
                            </CardBody>
                        </Card>
                   </div>
                   
               </div>
           </div>
       )
   }

}
export default StaffDetails