import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default function MessageCard ({ m: { name, email, message } }) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{email}</Card.Subtitle>
          <Card.Text>
            {message}
          </Card.Text>
          <Card.Link href='#'>Marquer comme lu</Card.Link>
          <Card.Link href='#'>Supprimer</Card.Link>
        </Card.Body>
      </Card>

    </div>
  );
}
