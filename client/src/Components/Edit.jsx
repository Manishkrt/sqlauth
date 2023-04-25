import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography, Autocomplete, TextField, createFilterOptions, Box} from '@mui/material';
import { useState,useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';
import { editUser,getuser, rolesinduser } from '../api-calling/api';
import FormTabled from './FormTabled';
import { useNavigate, useParams } from 'react-router-dom';


// import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


const Controller=styled( FormGroup)`
width:50%;
margin: 2% auto 0 auto;
& > div {

height:96px}
`
const Label =styled(InputLabel)`
color:darkgrey;`


const intialvalue={
    name:'',
    status:'',
    
}




const Edit =()=>{
  
    const [user, setuser]=useState(intialvalue)
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(()=>{
          loadUserDetails();
    }, [])
const loadUserDetails = async()=>{
    const response = await rolesinduser(id); 
    setuser(response.data[0]);
}
console.log("depart",user);
const valuechange =(e)=>{
    // console.log( e.target.name,e.target.value)
   setuser({...user, [e.target.name]:e.target.value})
//    console.log(user);
 
}

 const AdduserDetails = async(e)=>{
    e.preventDefault()
   console.log("aduserdetails",user,id);

   await editUser(user, id);
   navigate('/department');
 }


    return(
        <>
           <Controller>
       <Typography variant='h4'  style={{marginBottom: 20}}><div className='text-white'>Edit-user</div></Typography>
    <FormControl>
<Label>Name</Label>
<Input onChange={(e)=>valuechange(e)} name='name'  value={user.name}/>
{/* <p style={{color:"red"}}>{valname}</p> */}
    </FormControl>

    <FormControl>
{/* <Label>Status</Label> */}



<select onChange={(e)=>valuechange(e)} name='status'  value={user.status}>
    <option value={user.status} selected>{user.status ? "active" : "inactive"}</option>
    <option value={1}>true</option>
    <option value={0}>false</option>
</select>

    </FormControl>


    <FormControl>
    <Button onClick={(e)=>AdduserDetails(e)} variant="contained">Edit-User</Button>
    </FormControl>

   </Controller>







   {/* <Box>
<FormTabled/>

   </Box> */}
        </>
    )
}


export default Edit;