import React, { Component } from 'react';
import StaffDetail from '../components/StaffdetailComponent'
import { STAFFS } from '../shared/staffs';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import StaffList from '../components/StaffsListComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    };
  }
  
  render() {
    const StaffId = ({match}) => {
        return(
            <StaffDetail staff={this.state.staffs.find((staff) => staff.id === + match.params.id)} />
        );
    };

    return (
        <div>
          <Header />
          <Switch>             
            <Route exact path='/home' component={() => <StaffList staff={this.state.staffs} />} />
            <Route exact path='/staff' component={() => <StaffId staff={this.state.staffs} />} />
            <Route exact path='/staff/:id' component={StaffId} />
            <Redirect to="/home" />
          </Switch>         
          <Footer />
        </div>
      );
  }
}
export default Main;