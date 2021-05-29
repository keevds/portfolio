import React, { useEffect } from 'react';
import styled from 'styled-components';

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

export const Post = styled.div`
	display: flex;
	max-width: 1228px;
	align-items: center;
	margin: 0px 20px 100px 20px;
	> video {
		max-height: 430px;
		border-radius: 10px;
		margin: 20px;
	}
	&.right {
		flex-direction: row-reverse;
		text-align: right;
		@media (max-width: 900px) {
			flex-direction: inherit;
		}
	}
	@media (max-width: 900px) {
		flex-direction: column;
		margin: 0px 20px 50px 20px;
	}
	@media (max-width: 600px) {
		margin: 20px 0px;
		> img {
			border-radius: 0px;
			width: 100%;
			height: 100%;
		}
		> video {
			border-radius: 0px;
			width: 100%;
			height: 100%;
		}
	}
`;
export const PostContent = styled.div`
	margin: 0px 30px;
	> h1 {
		border-left: 7px solid #f42a2c;
		padding-left: 10px;
	}
	&.right {
		> h1 {
			border-left: 0;
			border-right: 7px solid #f42a2c;
			padding-right: 10px;
		}
	}
	> h1,
	p {
		margin-bottom: 15px;
	}
	@media (max-width: 1024px) {
		margin: 0px 20px;
	}
	@media (max-width: 900px) {
		text-align: center;
		margin-top: 10px;
		> h1,
		p {
			margin: 0;
			border: 0;
		}
		&.right {
			> h1 {
				border: 0;
			}
		}
	}
	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const VejaMais = styled.div`
	display: flex;
	border-radius: 10px;
	cursor: pointer;
	transition: all ease 0.2s;
	&.right {
		justify-content: flex-end;
	}
	> a {
		color: black;
		margin: 5px 0px;
		text-decoration: none;
		color: #f42a2c;
		&:hover {
			text-decoration: underline;
		}
	}
	@media (max-width: 900px) {
		justify-content: center;
		&.right {
			justify-content: center;
		}
	}
	@media (max-width: 600px) {
		min-width: 200px;
		> a {
			margin: 15px 0px;
		}
	}
`;
export default function Home(props) {
	// const [offsetY, setOffsetY] = useState()
	// const handleScroll = () => setOffsetY(window.)

	useEffect(() => {
		AOS.init({ offset: 1000, duration: 2000 });
	}, []);

	return (
		<Container>
			<Post data-aos="fade-right" data-aos-offset="0" data-aos-once="true">
				<img src="/images/banner-virgula-2.png"></img>
				<PostContent>
					<h1>{props.titulo[0]}</h1>
					<p>{props.texto[0]}</p>
					<VejaMais>
						<a href="https://bityli.com/yJgZN" target="_blank">
							Veja mais
						</a>
					</VejaMais>
				</PostContent>
			</Post>
			<Post className="right" data-aos="fade-left" data-aos-offset="300" data-aos-once="true">
				<img src="/images/banner-socialmedia-2.png"></img>
				<PostContent className="right">
					<h1>{props.titulo[1]}</h1>
					<p>{props.texto[1]}</p>
					<VejaMais className="right">
						<a href="https://bityli.com/A8ms2" target="_blank">
							Veja mais
						</a>
					</VejaMais>
				</PostContent>
			</Post>
			<Post data-aos="fade-up" data-aos-offset="400" data-aos-once="true">
				<img src="/images/banner-maxterfit-2.png"></img>
				<PostContent>
					<h1>{props.titulo[2]}</h1>
					<p>{props.texto[2]}</p>
					<VejaMais>
						<a href="https://bityli.com/lPAq2" target="_blank">
							Veja mais
						</a>
					</VejaMais>
				</PostContent>
			</Post>
			<Post className="right" data-aos="fade-up" data-aos-offset="410" data-aos-once="true">
				<img src="/images/banner-fotografia.png"></img>
				<PostContent className="right">
					<h1>{props.titulo[3]}</h1>
					<p>{props.texto[3]}</p>
					<VejaMais className="right">
						<a href="https://bityli.com/zkP5A" target="_blank">
							Veja mais
						</a>
					</VejaMais>
				</PostContent>
			</Post>
			<Post data-aos="fade-up" data-aos-offset="500" data-aos-once="true">
				<video autoplay="autoplay" loop="true">
					<source src="/images/bakelogo-loop.mp4" type="video/mp4" />
				</video>
				<PostContent>
					<h1>{props.titulo[4]}</h1>
					<p>{props.texto[4]}</p>
					<VejaMais>
						<a href="https://bityli.com/lPAq2" target="_blank">
							Veja mais
						</a>
					</VejaMais>
				</PostContent>
			</Post>
		</Container>
	);
}

export async function getStaticProps() {
	const infos = await fetch('http://localhost:3000/api/post').then((res) => res.json());

	return {
		props: {
			titulo: infos.titulo,
			texto: infos.texto,
		},
	};
}
