import petStatusTypes from "./petStatus.types";

const initialPetStatus = {
  health: 90,
  strength: 100,
  intellect: 0,
  mood: "Happy",
  asyncLoading: false,
  asyncError: false,
  asyncSuccess: [],
  errorMessage: null,
};

const petStatus = (state = initialPetStatus, action) => {
  switch (action.type) {
    case petStatusTypes.EAT:
      return {
        ...state,
        health: state.health < 100 ? state.health + 5 : state.health,
      };
    case petStatusTypes.GetsATreat:
      return {
        ...state,
        health: state.health < 100 ? state.health + 1 : state.health,
        mood: (state.mood = "Happy"),
      };
    case petStatusTypes.WorksOut:
      return {
        ...state,
        health: state.health < 100 ? state.health + 2 : state.health,
        strength: state.strength < 100 ? state.strength + 5 : state.strength,
        Mood: (state.mood = "Happy"),
      };
    case petStatusTypes.ReadsABook:
      return {
        ...state,
        intellect:
          state.intellect < 100 ? state.intellect + 3 : state.intellect,
      };
    case petStatusTypes.Sleeps:
      return {
        ...state,
        health: (state.health = 100),
        mood: (state.mood = "Happy"),
      };
    case petStatusTypes.ASYNC_LOADING:
      return {
        ...state,
        asyncLoading: action.loading,
      };
    case petStatusTypes.ASYNC_ERROR:
      return {
        ...state,
        asyncError: action.isError,
        errorMessage: action.errorMessage,
        asyncLoading: false,
      };
    case petStatusTypes.ASYNC_SUCCESS:
      return {
        ...state,
        asyncSuccess: action.data,
        asyncLoading: false,
      };
    default:
      return state;
  }
};

export default petStatus;
