import React from 'react';
import { Button, ButtonSize } from '@Components/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from '@Components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

export const Index: React.FC = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/events/create');
  };

  return (
    <div>
      <Helmet>
        <title>Accueil - TidyParty</title>
        <meta name="keywords" content="tidyParty, party, tidy" />
        <meta name="author" content="Nathan DELENCLOS" />
        <meta property="og:title" content="Accueil - TidyParty" />
        <meta
          property="og:description"
          content="Elevate every gathering into a memorable celebration with Tidy Party: the ultimate app for effortlessly organizing unforgettable soirées with style and ease!"
        />
        <meta
          property="og:image"
          content="https://www.francebleu.fr/s3/cruiser-production/2023/04/ea0c723d-d743-4204-9c50-4153e6769d8e/1200x680_sc_gettyimages-451813251.jpg"
        />
        <meta property="og:url" content="https://nathandelenclos.github.io/TidyParty/" />
      </Helmet>
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
    </div>
  );
};
