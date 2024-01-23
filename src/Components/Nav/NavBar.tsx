import React from 'react';
import { NavLink } from '@Components/Nav/NavLink';
import { Logo } from '@Components/Logo';
import { Link } from 'react-router-dom';
import json from '@Root/package.json';

enum PageNames {
  HOME = 'home',
  TEST = 'test',
}

type Page = {
  href: string;
  name: PageNames;
  children?: React.ReactNode;
};

export const NavBar: React.FC = () => {
  const [activePage, setActivePage] = React.useState<PageNames>(PageNames.HOME);

  const pages: Page[] = [
    {
      href: '/',
      name: PageNames.HOME,
      children: 'Home',
    },
    {
      href: '/test',
      name: PageNames.TEST,
      children: 'Test',
    },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 50px',
      height: '60px',
      borderBottom: '1px solid #E5E5E5',
    }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
        }}
      >
        <Logo />
      </Link>
      <div style={{
        display: 'flex',
        listStyle: 'none',
        gap: '10px',
        margin: 0,
        padding: 0,
      }}
      >
        {pages.map((page) => (
          <NavLink
            key={page.name}
            href={page.href}
            active={activePage === page.name}
            onClick={() => setActivePage(page.name)}
          >
            {page.children}
          </NavLink>
        ))}
      </div>
      <div style={{
        width: '40px',
        height: '40px',
      }}
      >
        <img
          src={`${json.homepage}/assets/user-image.jpeg`}
          alt="Avatar"
          style={{
            borderRadius: '50%',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </div>
  );
};
