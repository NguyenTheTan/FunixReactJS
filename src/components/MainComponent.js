/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import StaffDetail from "../components/StaffdetailComponent";
import { connect } from "react-redux";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import StaffList from "../components/StaffsListComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Department from "./DepartmentComponent";
import SalaryTable from "./SalaryTableComponent";
// import { STAFFS, DEPARTMENTS } from "../shared/staffs";


// Khai báo state reducer
const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    department: state.department,
  };
};



class Main extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   staffs: STAFFS,
    //   department: DEPARTMENTS,
    // };
  }
  onAddStaff = (newStaff) => {
    this.setState({ staffs: [...this.props.staffs, newStaff] });
  };

  render() {
    console.log(this.props.staffs)
    const StaffId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.filter(
              (staff) => staff.id === parseInt(match.params.id, 10)
            )[0]
          }
          
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => (
              <StaffList
                staff={this.props.staffs}
                onAddStaff={this.onAddStaff}
                addStaff={this.props.addStaff}
              />
            )}
          />

          <Route exact path="/staff/:id" component={StaffId} />
          <Route
            exact
            path="/department"
            component={() => <Department department={this.props.department} />}
          />
          <Route
            path="/salary"
            component={() => <SalaryTable staffList={this.props.staffs} />}
          />
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, null)(Main));
