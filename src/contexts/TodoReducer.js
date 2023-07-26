// contexts/TodoReducer.js
export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'SET_FILTERED_USER_ID':
        return { ...state, filteredUserId: action.payload };
      default:
        return state;
    }
  };

