import styled from 'styled-components'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'
const Addstudent = () => {
const [formdata,setFormdata]=useState(
  {name:"",
    std:"",
    fees:"",
    no:""
  })

     const handleformsubmit=async(e)=>{
      e.preventDefault();
     let response=await axios.post('http://localhost:4000/posts',formdata);
     if(response){
      console.log("data submitted sucessfully");
     }else{
      alert("something went wrong");
     }


      setFormdata({
      name:"",
      std:"",
      fees:"",
      no:""
    })
     }
  return (
   <Mform>
    <Sform>

    <Int placeholder='Name of student' value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}></Int>

    <FormControl sx={{m:1,minWidth:250}}>
  <InputLabel>STD</InputLabel>
  <Select
    
    value={formdata.std}
    label="STD"
    onChange={(e)=>setFormdata({...formdata,std:e.target.value})}
  >
    <MenuItem value={'Jr.KG'}>Jr.KG</MenuItem>
    <MenuItem value={'Sr.KG'}>Sr.KG</MenuItem>
    <MenuItem value={'1 st'}>1 st</MenuItem>
    <MenuItem value={"2 nd"}>2 nd</MenuItem>
    <MenuItem value={'3 rd'}>3 rd</MenuItem>
    <MenuItem value={'4 th'}>4 th</MenuItem>
    <MenuItem value={'5 th'}>5 th</MenuItem>
    <MenuItem value={'6 th'}>6 th</MenuItem>
    <MenuItem value={'7 th'}>7 th</MenuItem>
    <MenuItem value={'8 th'}>8 th</MenuItem>
    <MenuItem value={'9 th'}>9 th</MenuItem>
    <MenuItem value={'10 th'}>10 th</MenuItem>
  </Select>
</FormControl>

    <Int placeholder='Fees' value={formdata.fees} onChange={(e)=>setFormdata({...formdata,fees:e.target.value})}></Int> 
    <Int placeholder='Phone Number' value={formdata.no} onChange={(e)=>setFormdata({...formdata,no:e.target.value})}></Int>
    <Btn onClick={handleformsubmit}>Submit</Btn> 
    </Sform>
    
    
    </Mform>
    
    
  )
}
const Btn=styled.button`
margin:20px;
height:40px;
width:100px;
border-radius:20px;
background:black;
color:white;
&:hover{cursor:pointer}
`

const Sform=styled.form`
align-items:center; 

box-shadow:black;
margin:90px;
display:flex;
flex-direction:column;
`
const Mform=styled.div`
  align-items:center;
  justify-content:center;
  display:flex;
`
const Int=styled.input`
margin:20px;
height:50px;
width:250px;
border-radius:20px;
text-align:center;
font-size:14pt;
`


export default Addstudent
