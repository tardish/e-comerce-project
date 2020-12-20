import React,{ useState }  from 'react';
import PrivateRoutes from './private-routes/PrivateRoutes';
import LocalStorageService from './services/localStorageService';

function App () {
  const [role,setRole]= useState(LocalStorageService.getRole());

    return (
      <div>
       <PrivateRoutes role={role} setRole={setRole}/>
      </div>
  ); 
}

export default App;
