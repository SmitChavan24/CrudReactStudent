import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';



var sum=0;
var a=[];
const Viewstudents = () => {
const [modalisOpen,setModalIsOpen]=useState(false)
const [data,setData]=useState([{}]);
const [value,setValue]=useState("")
const[sortvalue,setSortvalue]=useState('')
const sortOptions=['name','std','fees','no']
 


const paid=(fees)=>{
const cb=document.querySelector('#gf');
if(cb.checked){
  a.push(parseInt(fees))
  for (let i = 0; i < 
    a.length; i += 1){
     sum+=a[i]
    }
  console.log(sum);
  document.getElementById("y").innerHTML = sum+' rs';
}else{

}

return sum;
}
const handlesearch=async(e)=>{
e.preventDefault();
await axios.get(`http://localhost:4000/posts?q=${value}`).then((res)=>{setData(res.data);setValue("")}).catch((err)=>console.log("error"));

}

useEffect(()=>{
  getStudent(); 
},[]);
const handlesort= async(e)=>{
  let value=e.target.value;
  setSortvalue(value);
  return await axios.get(`http://localhost:4000/posts?_sort=${value}&_order=asc`).then((res)=>{setData(res.data)}).catch((err)=>console.log("error"));
}
const handledelete=async(id)=>{
  await axios.delete("http://localhost:4000/posts/"+id).then((res)=>console.log("deleted sucessfully"));
  getStudent();

}
const getStudent=async()=>{
  await axios.get("http://localhost:4000/posts").then((res)=>setData(res.data.reverse()));
};

const[updateData,setupdateData]=useState({
  id:"",
  name:"",
  std:"",
  fees:"",
  no:"",
});
const handleUpdate=async()=>{
  await axios.put(`http://localhost:4000/posts/${updateData.id}`,updateData).then((res)=>alert("user updated"));
  getStudent();
};


  return (
 <>
    <Modal  isOpen={modalisOpen} onRequestClose={()=>setModalIsOpen(false)}>
  <Mcontainer>
  <h2>Edit User</h2>
 <Btn onClick={()=>setModalIsOpen(false)}>close</Btn> 
 </Mcontainer> 
 <Mbody>
  <label><b>Name</b></label>
<Int value={updateData.name} onChange={(e)=>setupdateData({...updateData,name:e.target.value})}></Int>
<label><b>Std</b></label>
<Int  value={updateData.std} onChange={(e)=>setupdateData({...updateData,std:e.target.value})}></Int>
<label><b>Fees</b></label>
<Int  value={updateData.fees} onChange={(e)=>setupdateData({...updateData,fees:e.target.value})}></Int>
<label><b>Phone No</b></label>
<Int value={updateData.no} onChange={(e)=>setupdateData({...updateData,no:e.target.value})}></Int>
<Btn onClick={()=>handleUpdate(updateData.fees)}>Update</Btn>

 </Mbody>
 </Modal>

     <Game><div>
      <select style={{width:90,height:40,borderRadius:20,textAlign:'center'}} value={sortvalue} onChange={handlesort}>
      <option>Select </option>
      {sortOptions.map((items,index)=>(<option value={items} key={index}>{items}</option>
      ))}
       
      </select>
      <Int placeholder='Search Name...' value={value} onChange={(e)=>setValue(e.target.value)}></Int><Btn onClick={handlesearch}>search</Btn>
     </div>
      <Div>
      <table style={{textAlign:'center'}}>
        <Head>
          <tr> 
            <Col>Id</Col>
            <Col>Name</Col>
            <Col>Std</Col>
            <Col>Fees</Col>
            <Col>Phoneno</Col>
            <Col>Actions</Col>
          </tr>
        </Head>
        <tbody>
          {data && data.map((student) => (
            <tr style={{textAlign:'center'}}>
              <Col>{student.id}</Col>
              <Col>{student.name}</Col>
              <Col>{student.std}</Col>
              <Col><h3><b>{student.fees}</b></h3></Col>
              <Col>{student.no}</Col>
              <Col> 
             
           <input type="checkbox" id='gf'  onChange={()=>{paid(student.fees)}}></input>

<span>     </span><span>Paid</span>
    
                 
              
              <Btn onClickCapture={() => setModalIsOpen(true)} onClick={() => setupdateData({ id: student.id, name: student.name, std: student.std, fees: student.fees, no: student.no, })}>Edit</Btn><Btn onClick={() => { handledelete(student.id); } }>Delete</Btn></Col>
            </tr>
          ))}
          <tr>.</tr>
          <tr><th></th><th></th><th></th><Total id='y'><h2><b>Total</b></h2></Total></tr>
        </tbody>
      </table>
      </Div>

    </Game></>
    
  )
}
const Div=styled.div`
  
`
const Total=styled.th`
border:none;
outline:double;
`
const Int=styled.input`
margin:10px;
height:50px;
width:250px;
border-radius:20px;
text-align:center;
font-size:14pt;`

const Mbody=styled.div`
  display:flex;
  flex-direction:column;
 padding:50px;
  align-items:center;
  box-sizing:border-box;
`
const Mcontainer=styled.div`
display:flex;
justify-content:space-between;

`
const Btn=styled.button`
margin:5px;
height:40px;
width:100px;
border-radius:20px;
background:black;
color:white;
&:hover{cursor:pointer}

`
 const Game=styled.div`
  margin:0.5%;
  display:flex;
  align-items:center;
  flex-direction:column;
 `
 const Head=styled.thead`
 font-size:17pt;
 font-weight:35px;
 text-align:center;
 width:120%;
 `
 const Col=styled.th`
 padding:2px; 
 outline:groove;
 height:2rem;
width:50px;
text-align:center;
@media (min-width:769px){
  padding:0px;
  width:200px;

}
`










export default Viewstudents;