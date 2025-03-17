import axios from "axios";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";

const UserList = ({ listofUser, setListofUser }) => {
//use effect 

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListofUser(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{padding:'20px', fontFamily:'sans-serif'}}>
      <h2 style={{textDecoration:'underline' , display:'flex' , justifyContent:'center'}}>The total of user is {listofUser.length}</h2>
      <Table striped bordered hover style={{border:'2px solid' , borderRadius:'5px'}}>
        <thead>
          <tr style={{textDecorationColor:'blue'}}>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {listofUser.map(element => (
            <tr>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.username}</td>
              <td>{element.email}</td>
              <td>{element.address.street}</td>
              <td>{element.phone}</td>
              <td>{element.website}</td>
              <td>{element.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
// user component 