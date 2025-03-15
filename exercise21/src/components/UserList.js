import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users }) {  // Nhận users qua props
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`/user/${user.id}`}>{user.firstName} {user.lastName}</Link>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
