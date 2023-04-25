import { FormGroup, FormControl , InputLabel,Input , styled, Button, Typography, Autocomplete, TextField, createFilterOptions, Box} from '@mui/material';
import { useState } from 'react';
import { adduser, rolesadduser } from '../../api-calling/api';
import RoleShow from './RoleShow';
// import {useNavigate} from 'react-router-dom';

// import FormTabled from './FormTabled';

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




const RoleRegister =()=>{
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
    if(user.name !=="" && user.Status !== ""  ){
        console.log(user);
        const AdduserDetails = async()=>{
         await rolesadduser(user)
        
       };
       AdduserDetails()
 
     }else{
         if(user.name === ""  ){
             getvalname("enter your details")
         }
         else{
             getvalname("")
 
         }
         if(user.Status === ""  ){
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
       <Typography variant='h4'  style={{marginBottom: 20}}><div className='text-white'>Roles-register-user</div></Typography>
    <FormControl>
<Label>Name</Label>
<Input onChange={(e)=>valuechange(e)} name='name'/>
{/* <p style={{color:"red"}}>{valname}</p> */}
    </FormControl>

    <FormControl>
{/* <Label>Status</Label> */}



<select onChange={(e)=>valuechange(e)} name='Status'>
    <option>true</option>
    <option>false</option>
</select>

    </FormControl>


    <FormControl>
    <Button onClick={(e)=>handling(e)} variant="contained">Create-User</Button>
    </FormControl>

   </Controller>







   <Box>
<RoleShow/>

   </Box>
        </>
    )
}


export default RoleRegister;