import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.find(p => p.id === id);
        setPost(foundPost);
      })
      .catch(error => console.error('Error loading post:', error));
  }, [id]);

  if (!post) {
    return <h2 className="text-danger">Post not found</h2>;
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PostDetail;
