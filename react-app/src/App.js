import React, { Component } from 'react';
import Class from './App.module.css';
import StaffList from './components/StaffsListComponent';
import { STAFFS } from './shared/stapffs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS  
    };
  }
  render() {
    return (
      <div className= {Class.App}>
        <div>
          <div>
            <h3>Ứng dụng quản lý nhân sự v1.0</h3>
          </div>
        </div>
        <StaffList staff={this.state.staffs} />
      </div>
    );
  }
}
export default App;


