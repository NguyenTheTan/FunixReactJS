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

function AddStaff() {
  const [open, setOpen] = useState(false);
  const [newStaff, setNewStaff] = useState({
    id: "",
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
  console.log(newStaff.name);
  return (
    <>
      <Modal isOpen={open} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Thêm nhân viên</ModalHeader>
        <ModalBody>
          {/* Uncontrolled Form */}
          <Form>
            {/* Full name */}
            <FormGroup>
              <Row>
                <Label htmlFor="name">Họ tên</Label>
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
                <Label htmlFor="doB">Ngày sinh</Label>
                <Col md={7}>
                  <Input type="date" id="doB" name="doB" />
                </Col>
              </Row>
            </FormGroup>
            {/* Started Date*/}
            <FormGroup>
              <Row>
                <Label htmlFor="startDate">Ngày vào công ty</Label>
                <Col md={7}>
                  <Input type="date" id="startDate" name="startDate" />
                </Col>
              </Row>
            </FormGroup>
            {/* Department */}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="department">Phòng ban</Label>
                <Col md={7}>
                  <Input type="select" id="department" name="department">
                    <option value="Finance">Finance</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sale">Sale</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            {/* Salary Scale*/}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="SalaryScale">Hệ số lương</Label>
                <Col md={7}>
                  <Input id="SalaryScale" name="SalaryScale" />
                </Col>
              </Row>
            </FormGroup>
            {/* annual Leave*/}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
                <Col md={7}>
                  <Input id="annualLeave" name="annualLeave" />
                </Col>
              </Row>
            </FormGroup>
            {/* Overtime*/}
            <FormGroup>
              <Row className="form-group">
                <Label htmlFor="overTime">Ngày vào công ty</Label>
                <Col md={7}>
                  <Input id="overTime" name="overTime" />
                </Col>
              </Row>
            </FormGroup>
            {/* Submit Button */}
            <FormGroup>
              <Row className="form-group">
                <Col className="col-7 offset-5">
                  <Button type="submit" color="primary">
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
              Thêm
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
}

export default AddStaff;
