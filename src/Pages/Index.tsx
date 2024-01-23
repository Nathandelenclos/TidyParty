import React from 'react';
import { Button, ButtonSize } from '@Components/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '@Components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const Index: React.FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/events/create');
  };

  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'end',
    }}
    >
      <Button size={ButtonSize.LARGE} onClick={onClick}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: '10px' }} />
          Créer un événement
        </div>
      </Button>
    </Container>
  );
};
