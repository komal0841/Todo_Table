// contexts/TodoContext.js
import React, { createContext, useEffect, useReducer, useContext } from 'react';
import { todoReducer } from './TodoReducer';

const TodoContext = createContext();

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const initialState = {
  data: [],
  loading: true,
  filteredUserId: '',
  error: null,
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: jsonData });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };

  const handleRefresh = () => {
    fetchData();
  };

  const handleFilterChange = (event) => {
    const selectedUserId = event.target.value;
    dispatch({ type: 'SET_FILTERED_USER_ID', payload: selectedUserId });
  };

  // Filter data based on the selected User ID
  const filteredData = state.filteredUserId
    ? state.data.filter((item) => item.userId === parseInt(state.filteredUserId))
    : state.data;

  return (
    <TodoContext.Provider
      value={{
        ...state,
        data: filteredData,
        handleRefresh,
        handleFilterChange,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const useGlobalContext = () => {
      return useContext(TodoContext);
    };
    
    
    
    export { TodoContext, TodoProvider, useGlobalContext };

// import React, { useEffect, useContext, useReducer } from 'react';
// import todoReducer from './TodoReducer';

// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const initialState = {
//   data: [],
//   isloading: true,
//   filteredUserId: '',
//   error: null,
// };

// //context create
// const TodoContext = React.createContext();

// //provider

// const TodoProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(todoReducer, initialState);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     dispatch({ type: 'SET_LOADING' });
//     try {
//       const response = await fetch(apiUrl);
//       const jsonData = await response.json();
//       dispatch({ type: 'FETCH_DATA_SUCCESS', payload: jsonData });
//     } catch (error) {
//       dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
//       console.log(error);
//     }
//   };


//   const refreshData = () => {
//     fetchData();
//   };


//   const filterChange = (event) => {
//     const selectedUserId = event.target.value;
//     dispatch({ type: 'SET_FILTERED_USER_ID', payload: String(selectedUserId )});
//   };

//   // Filter data based on the selected User ID
//   const filteredData = state.filteredUserId
//     ? state.data.filter(
//         (item) => item.userId === parseInt(state.filteredUserId)
//       )
//     : state.data;



//   return (
//     <TodoContext.Provider
//       value={{
//         ...state,
//         data: filteredData,
//         refreshData,
//         filterChange,
//       }}
//     >
//       {children}
//     </TodoContext.Provider>
//   );
// };

// //Global Hook creation

// const useGlobalContext = () => {
//   return useContext(TodoContext);
// };



// export { TodoContext, TodoProvider, useGlobalContext };
