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

export const GritoTexto = styled.p``;

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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla nisi, hendrerit ut felis vitae, tempus egestas arcu. Donec turpis
						tortor, pharetra a justo at, cursus facilisis dolor. Ut at pellentesque risus. Phasellus eget finibus erat. Aenean malesuada lacus ac.
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla nisi, hendrerit ut felis vitae, tempus egestas arcu. Donec turpis
					tortor, pharetra a justo at, cursus facilisis dolor. Ut at pellentesque risus. Phasellus
				</GritoTexto>
			</ContainerGrito>
		</Container>
	);
}

export default sobre;
