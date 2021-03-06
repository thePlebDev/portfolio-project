import React from 'react';
import styled from 'styled-components'

import useFilter from '../../Hooks/useFilterHook';

const FilterContainer =styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`


const Text = styled.div`
  margin:5px;
  cursor:pointer;
`

const Filter = ({filters,setBlogState,blogState,useApiCall=useFilter})=>{

  const {handleClick} = useApiCall(setBlogState,blogState)

  return(
    <FilterContainer data-testid="container">
        <Text data-testid="text" onClick={(e)=>handleClick(e)}>{filters}</Text>
    </FilterContainer>
  )
}

export default Filter
