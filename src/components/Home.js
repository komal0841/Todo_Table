// Home.js
import React from 'react';

import { Button } from '@mui/material';
import TodoTable from '../components/TodoTable';
import Filter from '../components/Filter';
import { useGlobalContext } from '../contexts/TodoContext';

const Home = () => {
  const { loading, handleRefresh } = useGlobalContext();

  return (
    <div className='header_bar'>
      <header>
        <h1>To Do Table</h1>
        <Button variant="contained" onClick={handleRefresh}>
          Refresh
        </Button>
      </header>
     <Filter />
      {loading ? <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p> : <TodoTable />}
    </div>
  );
};

export default Home;


// import React from 'react';
// import Button from '@mui/material/Button';
// import { useGlobalContext } from '../contexts/TodoContext';
// import Filter from './Filter';
// import TodoTable from './TodoTable';

// const Home = () => {
// const { refreshData,isloading } = useGlobalContext;

//   return (
//     <>
//       <div >
//         <header className='header_bar'>
//           <h1>To DO Table</h1>
//           <Button variant='outlined'  onClick={refreshData}>Refresh</Button>
//         </header>
//         <Filter />
//         {isloading ? <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p> : <TodoTable />}
//       </div>
//     </>
//   );
// };

// export default Home;
