import React from 'react';
import { Button, ButtonSize } from '@Components/Button';
import { useNavigate } from 'react-router-dom';

export const Index: React.FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <Button size={ButtonSize.LARGE} onClick={onClick}>Click me</Button>
    </div>
  );
};
