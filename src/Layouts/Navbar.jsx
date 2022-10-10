import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <Container>
<B>

</B>

<C>
      <Element> 
         <List>
          <Kink to="./"> Add student</Kink>
          
        
        </List>
        <List>
          <Kink to="./viewstudents"> <SearchIcon/></Kink>
       
        
       </List>
       <List>
  
        </List>
  </Element>
  </C>
      
      
    </Container>
  )
}

const B=styled.a`
 
`
const Kink=styled(Link)`
text-decoration:none;
color:white;
outline-style:dashed;
outline-width:0.1rem; 
padding:0.5rem;
display:flex;

`
const C=styled.div`

`
 const Container=styled.div`
 padding:1.5%;
 background-color:black;
 color:whitesmoke;
display:flex;

 `
const Element=styled.ul`
text-decoration:none;
display:inline;
 display:flex;
 
`
const List=styled.li`

margin-left:50px;
display:flex;
&:hover{
  cursor: pointer;
}
`

export default Navbar