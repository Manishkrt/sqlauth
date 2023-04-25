import axios from 'axios';




const URL = 'http://localhost:8000';

 export const adduser= async(data)=>{
    try{
       await axios.post(`${URL}/create`, data)

    }catch(error){
        console.log('api calling is not connecting correct ',error)

    }
}

export  const getuser = async()=>{
    try{
     return  await axios.get(`${URL}/getusers`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}





export const editUser = async(user, id)=>{
    try{
        return await 
        axios.put(`${URL}/rolesupdateuser/${id}`,user);

    }catch(error){
        console.log('error  while calling editUser api',error)

    }
}


// deleteUser api call

export const deleteUser= async(id)=>{
   try{
    return await axios.delete(`${URL}/deleteuser/${id}`);

   }catch(error){
    console.log("error while calling deleteUser api",error);
   }
}



// single user view port starting

export  const rolesinduser= async(id)=>{
    try{
     return  await axios.get(`${URL}/rolesinduser/${id}`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}



// single user view port ending 



// roles pages api to post starting 
// roles page api 
// roles page api 
// roles page api 
// roles page api 
// roles page api 



export const rolesadduser= async(data)=>{
    try{
       await axios.post(`${URL}/rolescreate`, data)

    }catch(error){
        console.log('api calling is not connecting correct ',error)

    }
}



// roles getapi staring

export  const rolesgetuser = async()=>{
    try{
     return  await axios.get(`${URL}/rolesgetusers`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}



// roles getapi ending 
export const rolesdeleteUser= async(id)=>{
    try{
     return await axios.delete(`${URL}/rolesdeleteuser/${id}`);
 
    }catch(error){
     console.log("error while calling deleteUser api",error);
    }
 }




// roles edit roles user starting


export const roleseditUser = async(user, id)=>{
    try{
        return await 
        axios.put(`${URL}/rolesupdateuser/${id}`,user);

    }catch(error){
        console.log('error  while calling editUser api',error)

    }
}



// roles edit roles user ending 


// singleuser edit user get item starting


export  const rolesgetsingleuser = async(id)=>{
    try{
     return  await axios.get(`${URL}/rolesinduser/${id}`)

    }catch(error){
        console.log('error while calling getusers')
     
    }
}




// singleuser edit user get item ending


// roles pages api to post ending



