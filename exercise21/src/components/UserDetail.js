import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function UserDetail({ users }) {
  const { userId } = useParams();
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="my-5">
      <Card className="card-small">  {/* Áp dụng class card-small */}
        <Card.Body>
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
          <Card.Text>
            <strong>Age:</strong> {user.age}
          </Card.Text>
          <Button variant="primary" onClick={() => alert('More details coming soon!')}>More Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetail;
