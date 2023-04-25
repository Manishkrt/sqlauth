import {Table, TableHead, TableRow, TableCell, TableBody, styled, Button} from '@mui/material';
import { useEffect, useState } from 'react';
import {getuser,deleteUser} from '../api-calling/api';

import {Link} from 'react-router-dom';



const Container=styled(Table)`
width:100%;

margin: 50px auto 0 auto;
`
const Thead=styled(TableRow)`
background-color:black;
& > th{
    color:#ffff;
    font-size:24px
}

`
const Tbody =styled(TableRow)`
& > td{
    font-size:24px;
    color:white;
    background-color:black;
}
`

const FormTabled =()=>{
    const [users, setUsers] = useState([])

useEffect(()=>{
    getAllusers();
},[])

const getAllusers =async()=>{
   let response =  await getuser();
   setUsers(response.data);
// console.log(response)
}
console.log("department",users)



const deleteUserDetails = async(id)=>{
    await deleteUser(id);
    getAllusers();
}

    return(
      <Container className='New-container'>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
               
              <TableCell></TableCell>

            </Thead>
        </TableHead>
        <TableBody>
            {
                users.map((user,i)=>{

               return(
                // users.map(user =>(
                    <Tbody key={i}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.status ? "active" : "inactive" }</TableCell> 
                    
                        <TableCell>
                        <Button variant='contained' style={{marginRight: 10, width:91 , marginTop:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant='contained' style={{marginTop: 10, marginRight:20}}  color="secondary" onClick={()=>deleteUserDetails(user.id)}>Delete</Button>
                <Button variant='contained' style={{marginTop: 10}}  color="secondary" component={Link} to={`/view/${user.id}`}>view</Button>
                </TableCell>
                    </Tbody>
)
})
                // ))
            }
        </TableBody>
      </Container>
    )
}


export default FormTabled;