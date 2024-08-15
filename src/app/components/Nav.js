import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import Image from 'next/image';
import logoImg from '../../../public/next.svg'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const links = [
    {
      name: 'Discover',
      href: '/discover',
    },
    {
      name: 'Join',
      href: '/join',
    },
    {
      name: 'About',
      href: '/about',
    },
  ];

  return (
    <Navbar color="light" light expand="md" className="py-3">
      <Container>
        <Link href="/" passHref>
          <NavbarBrand style={{ cursor: 'pointer' }}>
            <Image src={logoImg} alt="Onyx Creative Labs Logo" width={120} height={60} />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map((link) => (
              <NavItem key={link.href}>
                <Link href={link.href} passHref>
                  <NavLink className="font-weight-bold text-lg">{link.name}</NavLink>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
