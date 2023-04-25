import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography, Autocomplete, TextField, createFilterOptions, Box} from '@mui/material';
import { useState,useEffect } from 'react';
// import {useNavigate} from 'react-router-dom';
import { rolesgetuser,  roleseditUser, rolesgetsingleuser } from '../../api-calling/api';


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
    Status:'',
    
}




const RolesEdituser =()=>{
    const { id } = useParams();
  
    const [user, setuser]=useState(intialvalue)
    const navigate = useNavigate();


    useEffect(()=>{
          loadUserDetails();
    }, [])
const loadUserDetails = async(id)=>{
    let response = await rolesgetsingleuser(id); 
// response = response.data
    // setuser(response);
console.log("rolesedituser",response);

}
const valuechange =(e)=>{
    // console.log( e.target.name,e.target.value)
   setuser({...user, [e.target.name]:e.target.value})
//    console.log(user);
 
}

 const AdduserDetails = async(e)=>{
    e.preventDefault()
   await  roleseditUser(user, id);
   navigate('/roleregister');
 }


    return(
        <>
           <Controller>
       <Typography variant='h4'  style={{marginBottom: 20}}><div className='text-white'>Roles-Edit-user</div></Typography>
    <FormControl>
<Label>Name</Label>
<Input onChange={(e)=>valuechange(e)} name='name'  value={user.name}/>
{/* <p style={{color:"red"}}>{valname}</p> */}
    </FormControl>

    <FormControl>
{/* <Label>Status</Label> */}



<select onChange={(e)=>valuechange(e)} name='Status '  value={user.Status}>
    <option>true</option>
    <option>false</option>
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


export default RolesEdituser;