import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography, Autocomplete, TextField, createFilterOptions, Box} from '@mui/material';
import { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
import { adduser } from '../api-calling/api';
import FormTabled from './FormTabled';

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




const Department =()=>{
    const [user, setuser]=useState(intialvalue)
    const [valname ,getvalname]=useState("")
    const [valuserstatus ,getvaluserstatus]=useState("")



    // const navigate = useNavigate();

const valuechange =(e)=>{
    // console.log( e.target.name,e.target.value)
   setuser({...user, [e.target.name]:e.target.value})
   console.log(user);   

 
}




const handling =(e)=>{
    e.preventDefault()
    if(user.name !=="" && user.status !== ""  ){
        console.log(user);
        const AdduserDetails = async()=>{
         await adduser(user)
        
       };
       AdduserDetails()
 
     }else{
         if(user.name === ""  ){
             getvalname("enter your details")
         }
         else{
             getvalname("")
 
         }
         if(user.status === ""  ){
            getvaluserstatus("enter your details")
         }
         else{
            getvaluserstatus("")
 
         }
}
}

    return(
        <>
           <Controller>
       <Typography variant='h4'  style={{marginBottom: 20}}><div className='text-white'>Department-user</div></Typography>
    <FormControl>
<Label>Name</Label>
<Input onChange={(e)=>valuechange(e)} name='name'/>
{/* <p style={{color:"red"}}>{valname}</p> */}
    </FormControl>

    <FormControl>
{/* <Label>Status</Label> */}



<select onChange={(e)=>valuechange(e)} name='status'>
    <option disabled selected> Choose-one </option>
    <option value={1}>true</option>
    <option value={0}>false</option>
</select>

    </FormControl>


    <FormControl>
    <Button onClick={(e)=>handling(e)} variant="contained">Create-User</Button>
    </FormControl>

   </Controller>







   <Box>
<FormTabled/>

   </Box>
        </>
    )
}


export default Department;