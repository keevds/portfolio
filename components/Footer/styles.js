import styled from 'styled-components';
import { BehanceSquare } from '@styled-icons/fa-brands/BehanceSquare';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';

export const Container = styled.div`
	text-align: center;
	padding-bottom: 2%;
	text-transform: lowercase;
	color: black;
	margin-top: 60px;
	padding: 50px 0px;

	h1 {
		font-size: 1.2rem;
		font-weight: 600;
	}
	a {
		text-decoration: none;
		color: black;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Icons = styled.div`
	margin-top: 20px;
	margin-left: 20px;
`;

export const BehanceIcon = styled(BehanceSquare)`
	width: 25px;
	color: black;
	margin-right: 20px;
	&:hover {
		color: #f42a2c;
	}
`;

export const LinkedinIcon = styled(Linkedin)`
	width: 25px;
	color: black;
	margin-right: 20px;
	&:hover {
		color: #f42a2c;
	}
`;

export const GithubIcon = styled(GithubSquare)`
	width: 25px;
	color: black;
	margin-right: 20px;
	&:hover {
		color: #f42a2c;
	}
`;
