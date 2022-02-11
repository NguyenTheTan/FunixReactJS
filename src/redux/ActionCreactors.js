import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl'


export const fetchStaff = () => (dispatch) => {
    dispatch(staffLoading(true));
    
    return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaff(response)))
    .catch((error) => dispatch(staffFailed(error.message)));
}
export const addStaff = (staff) => ({
    
    type: ActionTypes.ADD_STAFF,
    payload: {
        staff,

    }     
})

export const postStaff = (staff) => (dispatch) =>  {
    console.log("log-newstafrf", staff)
    const newStaff = {
        staff
    }

    console.log("log-newstafrf3333", newStaff)
    return fetch(baseUrl + "staffs", {
        method: "POST",
        body: JSON.stringify(newStaff),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin", //gửi thông tin đăng nhập nếu URL yêu cầu có cùng nguồn gốc với tập lệnh gọi
    })
    .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + " :" + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addStaff(response)))
      .catch((error) => {
        console.log("ERROR MESSAGE " + error.message);
        alert(
          "Your POST newstaff could not be posted\nError: " + error.message
        );
      });
}

export const staffLoading = () => ({
    type: ActionTypes.STAFF_LOADING
});

export const staffFailed = (errmess) => ({
    type: ActionTypes.STAFF_FAILED,
    payload: errmess
})

export const fetchDepartment = () => (dispatch) => {
    dispatch(departmentLoading(true));
    
    return fetch(baseUrl + "departments")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error :" + response.status + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addDepartment(response)))
    .catch((error) => dispatch(departmentFailed(error.message)));
}

export const addDepartment = (department) => ({
    
    type: ActionTypes.ADD_DEPARTMENT,
    payload: {
        department,

    }     
})

export const departmentLoading = () => ({
    type: ActionTypes.DEPARTMENT_LOADING
});

export const departmentFailed = (department) => ({
    type: ActionTypes.DEPARTMENT_FAILED,
    payload: department
})

export const fetchStaffSalary = () => (dispatch) => {
    return fetch(baseUrl + "staffsSalary")
      .then(
        (response) => {
          if (response.ok) return response;
          else {
            var error = new Error(
              "ERROR :" + response.status + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((response) => response.json())
      .then((response) => dispatch(addSalary(response)))
      .catch((error) => dispatch(salaryFailed(error)));
  };
  
  export const addSalary = (salary) => ({
    type: ActionTypes.ADD_STAFFSALARY,
    payload: salary,
  });
  export const salaryLoading = () => ({
    type: ActionTypes.STAFFSALARY_LOADING,
  });
  export const salaryFailed = (salary) => ({
    type: ActionTypes.STAFFSALARY_FAILED,
    payload: salary,
  });