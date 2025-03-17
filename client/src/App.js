import { useState } from 'react';
import './App.css';
import UserList from './UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [listofUser,setListofUser] = useState([]);
  return (
   <>
   <UserList setListofUser={setListofUser} listofUser={listofUser}/>
   </>
  );
}

export default App;
// this the app.js 