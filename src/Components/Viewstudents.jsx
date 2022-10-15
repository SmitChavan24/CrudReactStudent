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

a.push(parseInt(fees))
for (let i = 0; i < 
  a.length; i += 1){
   sum+=a[i]
   
  }
 
console.log(sum);
document.getElementById("y").innerHTML = sum;
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
  <h2> Edit User</h2>
 <Btn onClick={()=>setModalIsOpen(false)}>close</Btn> 
 </Mcontainer> 
 <Mbody>
  <label>Name</label>
<Int value={updateData.name} onChange={(e)=>setupdateData({...updateData,name:e.target.value})}></Int>
<label>std</label>
<Int  value={updateData.std} onChange={(e)=>setupdateData({...updateData,std:e.target.value})}></Int>
<label>fees</label>
<Int  value={updateData.fees} onChange={(e)=>setupdateData({...updateData,fees:e.target.value})}></Int>
<label>phone no</label>
<Int value={updateData.no} onChange={(e)=>setupdateData({...updateData,no:e.target.value})}></Int>
<button onClick={()=>handleUpdate(updateData.fees)}>Update</button>

 </Mbody>
 </Modal>

     <Game><div><Int  value={value} onChange={(e)=>setValue(e.target.value)}></Int><button style={{width:60,height:25,margin:2}} onClick={handlesearch}>search</button>
     </div>
      
      <table style={{padding:10}}>
        <Head>
          <tr> 
            <Col>Id</Col>
            <Col>Name</Col>
            <Col>Std</Col>
            <Col>Fees</Col>
            <Col>Phoneno</Col>
          </tr>
        </Head>
        <tbody>
          {data && data.map((student) => (
            <tr>
              <Col>{student.id}</Col>
              <Col>{student.name}</Col>
              <Col>{student.std}</Col>
              <Col>{student.fees}</Col>
              <Col>{student.no}</Col>
              <Col><Btn onClick={() => { paid(student.fees); } }>paid</Btn><Btn onClickCapture={() => setModalIsOpen(true)} onClick={() => setupdateData({ id: student.id, name: student.name, std: student.std, fees: student.fees, no: student.no, })}>Edit</Btn><Btn onClick={() => { handledelete(student.id); } }>Delete</Btn></Col>
            </tr>
          ))}
          <tr>-----</tr>
          <tr><Total>Total</Total><Total></Total><Total></Total><Total id='y'></Total></tr>
        </tbody>
      </table>
       

    </Game></>
    
  )
}

const Total=styled.th`
border:none;
outline:none;
`
const Int=styled.input``

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
  margin: 2px;


`
 const Game=styled.div`
  margin:5%;
 `
 const Head=styled.thead`
 font-size:17pt;
 font-weight:35px;
 `
 const Col=styled.th`
 padding:4px;
 outline:groove;
 padding-bottom:10px;
 
 `










export default Viewstudents