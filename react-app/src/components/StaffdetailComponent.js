import React from 'react';
import dateFormat from "dateformat";
import { CardImg,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderStaff({staff}) {
    if (staff !== null)
    return (
        <div className="content">
            <img src={staff.image} alt={staff.name} />
            <div key={staff.id} className="">
                
                <h3> {staff.name} </h3>
                <p>
                    Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}
                </p>
                <p>
                    Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}
                </p>
                <p>
                    Phòng ban: {staff.department.name}
                </p>
                <p>
                    Số ngày nghỉ còn lại: {staff.annualLeave}
                </p>
                <p>
                    Số ngày đã làm thêm: {staff.overTime}
                </p>
            </div>
        </div>
    );
    else
        return(
            <div></div>
        )             
}
const StaffDetail = (props) => {
    if (props.staff !== null)
        return(
            <div>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb> 
                </div>               
                <div className="content">
                    <RenderStaff staff={props.staff}/>
                </div>
            </div>
        )
    else
        return(
            <div></div>
        )
    
}


export default StaffDetail;