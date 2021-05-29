import styled from 'styled-components';
import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	@media (max-width: 600px) {
		margin-top: 0;
	}
`;
export const ContainerPerfil = styled.div`
	max-width: 1000px;
	display: flex;
	flex-direction: row;
	> img {
		border-radius: 20px;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: center;

		> img {
			max-height: 381px;
			max-width: 332px;
		}
	}
`;

export const ConteudoPerfil = styled.div`
	margin-left: 40px;
	@media (max-width: 900px) {
		margin: 20px 20px;
		text-align: center;
	}
`;

export const Apresentacao = styled.h2`
	margin: 0;
`;
export const Nome = styled.h1`
	font-size: 4.5rem;
	line-height: 96%;
	width: 50%;
	@media (max-width: 900px) {
		width: 100%;
	}
`;
export const Infos = styled.p`
	font-size: 1.2rem;
	color: #f42a2c;
`;
export const Texto = styled.p`
	margin-top: 20px;
`;

export const ContainerGrito = styled.div`
	max-width: 1000px;
	margin-top: 50px;
	> iframe {
		margin-top: 20px;
		width: 100%;
		min-height: 500px;
	}
	@media (max-width: 900px) {
		text-align: center;
		margin: 10px 20px;
	}
`;

export const GritoTitulo = styled.h1`
	font-size: 3rem;
`;

export const GritoTexto = styled.p`
	> a {
		color: black;
		margin: 5px 0px;
		text-decoration: underline;
		&:hover {
			color: #f42a2c;
		}
	}
`;

function sobre() {
	useEffect(() => {
		AOS.init({ offset: 1000, duration: 2000 });
	}, []);
	return (
		<Container>
			<ContainerPerfil>
				<img src="/images/perfil-sobre.png" data-aos-offset="0" data-aos-once="true" data-aos="fade-right"></img>
				<ConteudoPerfil data-aos-offset="0" data-aos-once="true" data-aos="fade-left">
					<Apresentacao>Olá, meu nome é</Apresentacao>
					<Nome>Kevin Barbosa</Nome>
					<Infos>Moro no Rio de Janeiro e tenho 25 anos</Infos>
					<Texto>
						Tenho 9 anos de experiência como designer, já trabalhei em gráficas, agências e em alguns projetos pessoais. Atualmente estudo UX/UI
						Design na EBAC e estou me aprofundando mais na minha segunda paixão, que é a programação.
					</Texto>
				</ConteudoPerfil>
			</ContainerPerfil>
			<ContainerGrito data-aos-offset="400" data-aos-once="true" data-aos="fade-up">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube-nocookie.com/embed/Fho2jUxjhNU?controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
				<GritoTitulo>Grito Filmes</GritoTitulo>
				<GritoTexto>
					A Grito é uma produtora Co/Fundada em 2015 por mim e pelo meu amigo{' '}
					<a href="https://www.instagram.com/ianmiiranda/" target="_blank">
						@ianmiiranda
					</a>
					. Temos um pouco mais de 600+ inscritos no{' '}
					<a href="https://www.youtube.com/channel/UCAXJDHJtf8eYwW88lzJiFEw" target="_blank">
						Youtube
					</a>{' '}
					e diversas músicas e clipes produzidos por nós.
				</GritoTexto>
			</ContainerGrito>
		</Container>
	);
}

export default sobre;
