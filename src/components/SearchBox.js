import React from 'react';

const SearchBox=({searchfield,searchChange})=>{
	return(
		<div className='pa2'>
		<input  className='pa3 ma2 br5 bg-lightest-blue'
		 type='search'
		  placeholder='Search here'
		  onChange={searchChange}
		  />
		</div>
		);

}
export default SearchBox;