// components/Filter.js
import React from 'react';

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useGlobalContext } from '../contexts/TodoContext';

const Filter = () => {
  const { filteredUserId, handleFilterChange } = useGlobalContext();

  return (
    <div className='filter'>
      <FormControl className='form_control' sx={{ ml: 20, mr: 2 }}>
        <InputLabel id='filter-label' >Filter by Id</InputLabel>
        <Select
          labelId='filter-label'
          id='filter-select'
          value={filteredUserId}
          onChange={handleFilterChange}
          label='Filter by User ID'
        >
          <MenuItem value=''>
            <em>All</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem> <MenuItem value={2}>2</MenuItem>{' '}
          <MenuItem value={3}>3</MenuItem> <MenuItem value={4}>4</MenuItem>{' '}
          <MenuItem value={5}>5</MenuItem> <MenuItem value={6}>6</MenuItem>{' '}
          <MenuItem value={7}>7</MenuItem> <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem> <MenuItem value={10}>10</MenuItem>
          
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
