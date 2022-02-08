import * as ActionTypes from './ActionTypes';

export const addStaff = (id, image, name, doB, salaryScale, startDate, department, annualLeave, overTime) => {
    console.log(id,name)
    return{
        
    type: ActionTypes.ADD_STAFF,
    payload: {
        id: id,
        image: image,
        name: name,
        doB: doB,
        salaryScale: salaryScale,
        startDate: startDate,
        department: department,
        annualLeave: annualLeave,
        overTime: overTime
    }
           
}}