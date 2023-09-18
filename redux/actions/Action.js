export const ADD_ADDONS = 'ADD_ADDONS';
export const ADD_PLAN = 'ADD_PLAN';
export const SET_DURATION = 'SET_DURATION';
export const SET_ACTIVE_NUMBER='SET_ACTIVE_NUMBER';

export const addAddons = (addons) => ({
    type: ADD_ADDONS,
    payload: addons,
  });
  
  export const addPlan = (plan) => ({
    type: ADD_PLAN,
    payload: plan,
  });
 export const setDuration =(duration) =>({
  type: SET_DURATION,
  payload : duration
 })
 export const setActiveNumber = (number) => {
  return {
    type: SET_ACTIVE_NUMBER,
    payload: number,
  };
};