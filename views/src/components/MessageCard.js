import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default function MessageCard ({ m: { id, name, email, message }, handlePatch, handleDelete }) {

  return (
    <div>
      <Card className='card-messages'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{email}</Card.Subtitle>
          <Card.Text>
            {message}
          </Card.Text>
          <Card.Link className='btn-card' onClick={() => handlePatch(id)}>Marquer comme lu</Card.Link>
          <Card.Link className='btn-card' onClick={() => handleDelete(id)}>Supprimer</Card.Link>
        </Card.Body>
      </Card>

    </div>
  );
}
