import Link from 'next/link';
import React, { useState } from 'react';
import { Nav, NavLogo, StyledLinks, NavLinks, InstaIcon, Hamburger, Container } from './styles';

function Navbar() {
	const [click, setClick] = useState(false);
	return (
		<Container>
			<Nav>
				<NavLogo>
					<Link href="/">
						<img src="/images/bake-logo.png"></img>
					</Link>
				</NavLogo>
				<NavLinks click={click}>
					<Link href="/">
						<StyledLinks onClick={() => setClick(!click)}>trabalhos</StyledLinks>
					</Link>
					<Link href="/sobre">
						<StyledLinks onClick={() => setClick(!click)}>sobre</StyledLinks>
					</Link>
					<Link href="/contato">
						<StyledLinks onClick={() => setClick(!click)}>contato</StyledLinks>
					</Link>
					<a href="https://www.instagram.com/kevinbbarbosa/" target="_blank">
						<InstaIcon />
					</a>
				</NavLinks>
			</Nav>
			<Hamburger onClick={() => setClick(!click)}>
				<span />
				<span />
				<span />
			</Hamburger>
		</Container>
	);
}

export default Navbar;
