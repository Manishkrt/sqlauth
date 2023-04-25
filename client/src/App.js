
import './App.css';
import Department from './Components/Department';
import Edit from './Components/Edit';
import RoleRegister from './Components/Roles/RoleRegister';
// import RoleShow from './Components/Roles/RoleShow';
import RolesEdituser from './Components/Roles/RolesEdituser';
import Admin from './Components/admin';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
<>

<BrowserRouter>
      
     <Routes>
     <Route path='/admin' element={ <Admin/>}/>
    
    <Route path='/department' element={  <Department/>}/>
    <Route path='/edit/:id' element={ <Edit/>}/>
    <Route path='/roleregister' element={<RoleRegister/>}/>
   
    
    <Route path='/rolesedituser/:id' element={<RolesEdituser/>}/>
 
     </Routes>
    </BrowserRouter>

{/* <Admin/> */}

</>
  
  );
}

export default App;
