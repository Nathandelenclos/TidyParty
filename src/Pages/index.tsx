import React from 'react';
import { Button, ButtonSize } from '@Components/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '@Components/Container';

export const Index: React.FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Button size={ButtonSize.LARGE} onClick={onClick}>Click me</Button>
    </Container>
  );
};
