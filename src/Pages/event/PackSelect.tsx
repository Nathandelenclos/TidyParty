import React from 'react';
import { CardImage } from '@Components/CardImage';
import { Container } from '@Components/Container';
import json from '@Root/package.json';
import { Button, ButtonSize, ButtonType } from '@Components/Button';

export const PackSelectPage: React.FC = () => (
  <Container style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    <h1>Sélection du pack</h1>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
      width: '70%',
      marginBottom: '50px',
    }}
    >
      {(new Array(5)).fill(0)
        .map((_, i) => (
          <CardImage key={i} src={`/${json.homepage}/assets/lieu.jpeg`}>
            <Container style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '20px',
            }}
            >
              <h3>
                Titre du pack
              </h3>
              <p style={{
                margin: 0,
              }}
              >
                Description du pack
              </p>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
              </ul>
              <h3>
                Prix: 430€
              </h3>
              <Button>
                Sélectionner
              </Button>
            </Container>
          </CardImage>
        ))}
    </div>
    <Button
      type={ButtonType.SECONDARY}
      size={ButtonSize.LARGE}
      style={{
        margin: '0 0 50px 0',
        width: '70%',
      }}
    >
      Créer son pack
    </Button>
  </Container>
);
