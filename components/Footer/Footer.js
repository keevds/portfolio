import Link from 'next/link';
import { Container, BehanceIcon, LinkedinIcon, GithubIcon, Icons } from './styles';

function Footer() {
	return (
		<Container>
			<h1>
				<a href="https://github.com/keevds/portfolio-react" target="_blank">
					Desenvolvido por mim mesmo! &#128539;
				</a>
			</h1>
			<p>Com React.js</p>
			<Icons>
				<a href="https://www.behance.net/bakedesign" target="_blank">
					<BehanceIcon />
				</a>
				<a href="https://www.linkedin.com/in/kevin-barbosa-878496186/" target="_blank">
					<LinkedinIcon />
				</a>
				<a href="https://github.com/keevds" target="_blank">
					<GithubIcon />
				</a>
			</Icons>
		</Container>
	);
}

export default Footer;
