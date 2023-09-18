import { ADD_ADDONS, ADD_PLAN,  SET_ACTIVE_NUMBER,  SET_DURATION } from "../actions/Action";

const initialState = {
    Addons: [],
    Plan:[] ,
    Duration: 'Monthly',
    activeNumber:1
    };
  
  export const selectedAddonsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ADDONS:
        return {
          ...state,
          Addons: action.payload,
        };
      default:
        return state;
    }
  };
  export const selectedPlanReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PLAN:
        return {
          ...state,
          Plan: [action.payload], 
        };
      default:
        return state;
    }
  };
  export const selectedDurationReducer = (state = initialState, action)=>
  {
    switch (action.type){
      case SET_DURATION:
        return{
          ...state,
          Duration:action.payload
        }
        default:
          return state;
    }
  }

  
export const activeNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_NUMBER:
      return {
        ...state,
        activeNumber: action.payload,
      };
    default:
      return state;
  }
};

  