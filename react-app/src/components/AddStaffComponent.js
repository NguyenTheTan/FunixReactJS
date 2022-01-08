import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Row,
  Col,
} from "reactstrap";
import { DEPARTMENTS } from "../shared/staffs";

function AddStaff(props) {
  const staffList = [...props.staffList];
  const [open, setOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({
    id: staffList.length,
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    department: "",
    annualLeave: "",
    overTime: "",
    salary: "",
    image: "/assets/images/alberto.png",
  });

  const toggleModal = () => {
    setOpen(!open);
  };
  // Handle Submit
  function handleSubmit(e) {
    e.preventDefault();
    const depart = DEPARTMENTS.find((dep) => {
      return dep.id === newStaff.department;
    });

    staffList.push(newStaff);
    props.onStaff({ ...newStaff, department: depart });
  }
  return (
    <>
      <Modal isOpen={open} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Thêm nhân viên</ModalHeader>
        <ModalBody>
          {/* Uncontrolled Form */}
          <Form onSubmit={handleSubmit}>
            {/* Full name */}
            <FormGroup>
              <Row>
                <Label htmlFor="name" md={5}>
                  Họ tên
                </Label>
                <Col md={7}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={newStaff.name}
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, name: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* Date of birth */}
            <FormGroup>
              <Row>
                <Label htmlFor="doB" md={5}>
                  Ngày sinh
                </Label>
                <Col md={7}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, doB: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* Started Date*/}
            <FormGroup>
              <Row>
                <Label htmlFor="startDate" md={5}>
                  Ngày vào công ty
                </Label>
                <Col md={7}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, startDate: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* Department */}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="department" md={5}>
                  Phòng ban
                </Label>
                <Col md={7}>
                  <Input
                    type="select"
                    id="department"
                    name="department"
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, department: e.target.value });
                    }}
                  >
                    <option value="Dept00">Chọn Phòng Ban</option>
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            {/* Salary Scale*/}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="SalaryScale" md={5}>
                  Hệ số lương
                </Label>
                <Col md={7}>
                  <Input
                    id="SalaryScale"
                    name="SalaryScale"
                    placeholder="1-3"
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, salaryScale: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* annual Leave*/}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={5}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col md={7}>
                  <Input
                    id="annualLeave"
                    name="annualLeave"
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, annualLeave: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* Overtime*/}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="overTime" md={5}>
                  Ngày vào công ty
                </Label>
                <Col md={7}>
                  <Input
                    id="overTime"
                    name="overTime"
                    onChange={(e) => {
                      setNewStaff({ ...newStaff, overTime: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </FormGroup>
            {/* Submit Button */}
            <FormGroup>
              <Row className="form-group">
                <Col className="col-7 offset-5">
                  <Button type="submit" color="primary" onClick={toggleModal}>
                    Thêm
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      <FormGroup>
        <Row className="form-group">
          <Col className="col-7 offset-5">
            <Button color="primary" onClick={toggleModal}>
              Thêm Nhân viên
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
}

export default AddStaff;
