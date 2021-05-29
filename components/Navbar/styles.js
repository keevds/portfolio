import styled from 'styled-components';

import { Instagram } from '@styled-icons/bootstrap/Instagram';

export const Container = styled.div`
	@media (max-width: 600px) {
		display: flex;
		justify-content: center;
		margin: 20px 40px;
	}
`;

export const Nav = styled.nav`
	background: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px 350px 0 350px;

	@media (max-width: 900px) {
		margin: 0 60px;
	}
	@media (max-width: 600px) {
		flex-direction: column;
		transition: all ease 5s;
	}
`;

export const NavLogo = styled.a`
	> img {
		transform: scale(0.6);
		transition: all ease 0.1s;
		cursor: pointer;
		:hover {
			transform: scale(0.7);
		}
	}
`;

export const NavLinks = styled.div`
	@media (max-width: 600px) {
		display: flex;
		opacity: ${({ click }) => (click ? '1' : '0')};
		max-height: ${({ click }) => (click ? '500px' : '0px')};
		flex-direction: column;
		align-items: center;
		overflow: hidden;
		transition: all ease-in 0.4s;
	}
`;

export const Hamburger = styled.div`
	display: none;
	position: absolute;
	right: 40px;
	flex-direction: column;
	margin-top: 20px;

	> span {
		height: 7px;
		width: 38px;
		background: black;
		margin-bottom: 4px;
		border-radius: 5px;
	}

	@media (max-width: 600px) {
		display: flex;
	}
`;

export const StyledLinks = styled.a`
	margin-right: 20px;
	cursor: pointer;
	font-size: 1.3rem;
	:hover {
		text-decoration: underline;
		color: #f42a2c;
	}
	@media (max-width: 600px) {
		margin: 20px 0px;
		font-size: 2rem;
	}
`;

export const InstaIcon = styled(Instagram)`
	width: 25px;
	cursor: pointer;
	color: #f42a2c;
	:hover {
		color: black;
	}
	@media (max-width: 600px) {
		margin-top: 10px;
		width: 40px;
	}
`;
