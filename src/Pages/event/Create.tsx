import React from 'react';
import { Container } from '@Components/Container';
import { Card } from '@Components/Card';
import { Button, ButtonType } from '@Components/Button';
import { useNavigate } from 'react-router-dom';

enum YouAre {
  INDIVIDUAL,
  COMPANY,
  ASSOCIATION,
  OTHER,
}

enum EventType {
  WEDDING,
  PROFESSIONAL_EVENT,
  TALK,
  TEAM_BUILDING,
  PARTY,
  BIRTHDAY,
  DISCOVERY,
  RECEPTION,
  OTHER,
}

enum Need {
  DJ,
  CATERER,
  PHOTOGRAPHER,
  HAIRDRESSER,
  ANIMATION,
  DECORATION,
  MAKEUP,
  FLORIST,
  OTHER,
}

export const CreateEventPage = () => {
  const navigate = useNavigate();

  const youAre = [
    {
      name: 'Un particulier',
      value: YouAre.INDIVIDUAL,
    },
    {
      name: 'Une entreprise',
      value: YouAre.COMPANY,
    },
    {
      name: 'Une association',
      value: YouAre.ASSOCIATION,
    },
    {
      name: 'Autre',
      value: YouAre.OTHER,
    },
  ];

  const eventType = [
    {
      name: 'Mariage',
      value: EventType.WEDDING,
    },
    {
      name: 'Événement professionnel',
      value: EventType.PROFESSIONAL_EVENT,
    },
    {
      name: 'Conférence',
      value: EventType.TALK,
    },
    {
      name: 'Team building',
      value: EventType.TEAM_BUILDING,
    },
    {
      name: 'Soirée',
      value: EventType.PARTY,
    },
    {
      name: 'Anniversaire',
      value: EventType.BIRTHDAY,
    },
    {
      name: 'Découverte',
      value: EventType.DISCOVERY,
    },
    {
      name: 'Réception',
      value: EventType.RECEPTION,
    },
    {
      name: 'Autre',
      value: EventType.OTHER,
    },
  ];

  const need = [
    {
      name: 'DJ',
      value: Need.DJ,
    },
    {
      name: 'Traiteur',
      value: Need.CATERER,
    },
    {
      name: 'Photographe',
      value: Need.PHOTOGRAPHER,
    },
    {
      name: 'Coiffeur',
      value: Need.HAIRDRESSER,
    },
    {
      name: 'Animation',
      value: Need.ANIMATION,
    },
    {
      name: 'Décoration',
      value: Need.DECORATION,
    },
    {
      name: 'Maquillage',
      value: Need.MAKEUP,
    },
    {
      name: 'Fleuriste',
      value: Need.FLORIST,
    },
    {
      name: 'Autre',
      value: Need.OTHER,
    },
  ];

  const onValidate = () => {
    navigate('/events/pack/select');
  };

  const onCancel = () => {
    navigate('/');
  };

  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
      <h1>Création d’un nouvel événement</h1>
      <Card style={{
        width: '100%',
        padding: '20px 40px',
      }}
      >
        <h2>Vous êtes ?</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
        >
          {youAre.map((item) => (
            <div>
              <input type="radio" id={item.name} name="youAre" value={item.value} />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>
        <h2>Type d’événement</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '20%',
        }}
        >
          {eventType.map((item) => (
            <div style={{ marginBottom: '20px' }}>
              <input type="radio" id={item.name} name="type" value={item.value} />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>

        <h2>Besoin</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'start',
          flexWrap: 'wrap',
          gap: '20%',
        }}
        >
          {need.map((item) => (
            <div style={{ marginBottom: '20px' }}>
              <input type="checkbox" id={item.name} name="need" value={item.value} />
              <label htmlFor={item.name}>{item.name}</label>
            </div>
          ))}
        </div>
        <h2>Votre budget</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="maxBudget">Budget maximum</label>
            <input type="number" id="maxBudget" name="maxBudget" />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="minBudget">Budget minimum</label>
            <input type="number" id="minBudget" name="minBudget" />
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '20px',
        }}
        >
          <Button type={ButtonType.SECONDARY} onClick={onCancel}>Annuler</Button>
          <Button type={ButtonType.PRIMARY} onClick={onValidate}>Valider</Button>
        </div>
      </Card>
    </Container>
  );
};
