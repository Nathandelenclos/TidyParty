import React from 'react';
import { Container } from '@Components/Container';
import { Card } from '@Components/Card';
import json from '@Root/package.json';
import { UserCard } from '@Components/UserCard';
import { Button, ButtonSize, ButtonType } from '@Components/Button';
import { useNavigate } from 'react-router-dom';

export const PackCreatePage: React.FC = () => {
  const [DJ, setDJ] = React.useState<number | null>(null);
  const [makeup, setMakeup] = React.useState<number | null>(null);
  const [designer, setDesigner] = React.useState<number | null>(null);
  const [photographer, setPhotographer] = React.useState<number | null>(null);
  const [caterer, setCaterer] = React.useState<number | null>(null);

  const navigate = useNavigate();
  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <h1>Créer un pack</h1>
      <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '50px',
      }}
      >
        <Card style={{ width: '100%' }}>
          <h2>DJ</h2>
          <div style={{
            display: 'flex',
            gap: '35px',
            overflowX: 'auto',
          }}
          >
            {(new Array(10)).fill(0)
              .map((_, index) => (
                <UserCard
                  selected={index === DJ}
                  key={index}
                  src={`/${json.homepage}/assets/user-image.jpeg`}
                  onClick={() => setDJ(index)}
                >
                  <Container>
                    <h3>John Doe</h3>
                    <p>Freelance</p>
                  </Container>
                </UserCard>
              ))}
          </div>
        </Card>

        <Card style={{ width: '100%' }}>
          <h2>Maquilleur</h2>
          <div style={{
            display: 'flex',
            gap: '35px',
            overflowX: 'auto',
          }}
          >
            {(new Array(10)).fill(0)
              .map((_, index) => (
                <UserCard
                  selected={index === makeup}
                  key={index}
                  src={`/${json.homepage}/assets/user-image.jpeg`}
                  onClick={() => setMakeup(index)}
                >
                  <Container>
                    <h3>John Doe</h3>
                    <p>Freelance</p>
                  </Container>
                </UserCard>
              ))}
          </div>
        </Card>

        <Card style={{ width: '100%' }}>
          <h2>Décorateur</h2>
          <div style={{
            display: 'flex',
            gap: '35px',
            overflowX: 'auto',
          }}
          >
            {(new Array(10)).fill(0)
              .map((_, index) => (
                <UserCard
                  selected={index === designer}
                  key={index}
                  src={`/${json.homepage}/assets/user-image.jpeg`}
                  onClick={() => setDesigner(index)}
                >
                  <Container>
                    <h3>John Doe</h3>
                    <p>Freelance</p>
                  </Container>
                </UserCard>
              ))}
          </div>
        </Card>

        <Card style={{ width: '100%' }}>
          <h2>Photographe</h2>
          <div style={{
            display: 'flex',
            gap: '35px',
            overflowX: 'auto',
          }}
          >
            {(new Array(10)).fill(0)
              .map((_, index) => (
                <UserCard
                  selected={index === photographer}
                  key={index}
                  src={`/${json.homepage}/assets/user-image.jpeg`}
                  onClick={() => setPhotographer(index)}
                >
                  <Container>
                    <h3>John Doe</h3>
                    <p>Freelance</p>
                  </Container>
                </UserCard>
              ))}
          </div>
        </Card>

        <Card style={{ width: '100%' }}>
          <h2>Traiteur</h2>
          <div style={{
            display: 'flex',
            gap: '35px',
            overflowX: 'auto',
          }}
          >
            {(new Array(10)).fill(0)
              .map((_, index) => (
                <UserCard
                  selected={index === caterer}
                  key={index}
                  src={`/${json.homepage}/assets/user-image.jpeg`}
                  onClick={() => setCaterer(index)}
                >
                  <Container>
                    <h3>John Doe</h3>
                    <p>Freelance</p>
                  </Container>
                </UserCard>
              ))}
          </div>
        </Card>
      </div>

      <Button
        onClick={() => navigate('/')}
        type={ButtonType.PRIMARY}
        size={ButtonSize.LARGE}
        style={{
          margin: '50px 0',
          width: '70%',
        }}
      >
        Valider le pack
      </Button>
    </Container>
  );
};
