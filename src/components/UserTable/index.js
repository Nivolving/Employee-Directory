import React from "react";
import { Table } from "react-bootstrap";

function UserTable( props ) {
  const filterBySearch = (user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    return (
      !props.search ||
      fullName.toLowerCase().includes(props.search.toLowerCase())
    );
  };

  const sortByLocation = (userA, userB) => {
    if (!props.sort) return 0;
    console.log(props.sort);
    
    const locationA = `${userA.location.city}, ${userA.location.state}`;
    const locationB = `${userB.location.city}, ${userB.location.state}`;

    if (locationA < locationB) {
      return props.sort === "asc" ? -1 : 1;
    }

    if (locationA > locationB) {
      return 1;
    }

    return 0;
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone #</th>
          <th scope="col">Email</th>
          <th>
            Location
            <button
              onClick={() => props.updateSort("asc")}
              className="fa fa-angle-double-up"
            ></button>
            <button
              onClick={() => props.updateSort("desc")}
              className="fa fa-angle-double-down"
            ></button>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.users
          .filter(filterBySearch)
          .sort(sortByLocation)
          .map((user) => {
            return (
              <tr key={user.id.value}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  {user.location.city}, {user.location.state}
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default UserTable;
