import React from "react";

function RenderDepartment({ department }) {
  return (
    <div className="container">
      <div className="row">
        <div key={department.id}>
          <h4>{department.name}</h4>
          <p>Số lượng nhân viên: {department.numberOfStaff}</p>
        </div>
      </div>
    </div>
  );
}

function Department(props) {
  const department = props.department.map((department) => {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <RenderDepartment department={department} />
      </div>
    );
  });

  return <div className="row">{department}</div>;
}

export default Department;
