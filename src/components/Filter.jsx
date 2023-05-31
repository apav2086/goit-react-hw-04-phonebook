import React from 'react';

    const Filter = ({ filter, setFilter }) => {
        const handleChange = evt => {
            const filterValue = evt.target.value;
            setFilter(filterValue);
        };

    return (
        <div>
               <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          />
        </div>
    )
}
export default Filter;