import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 50px;

	> h1 {
		margin-bottom: 5%;
		font-size: 2rem;
	}
`;

export const Caixas = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-template-areas:
		'nome sobrenome'
		'assunto email'
		'mensagem mensagem';
	column-gap: 30px;
	row-gap: 40px;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-areas:
			'nome'
			'sobrenome'
			'assunto'
			'email'
			'mensagem';
	}
`;

export const Nome = styled.div`
	grid-area: nome;
`;
export const Sobrenome = styled.div`
	grid-area: sobrenome;
`;
export const Assunto = styled.div`
	grid-area: assunto;
`;
export const Email = styled.div`
	grid-area: email;
	width: 100%;
`;
export const Mensagem = styled.div`
	grid-area: mensagem;
	margin-bottom: 5%;

	> textarea {
		width: 100%;
		border: 0;
		border-bottom: 0.5px solid rgb(0, 0, 0, 0.2);
		text-align: unset;
		resize: none;
		stroke: none;

		&:focus {
			outline: none;
		}
	}
`;

export const Input = styled.input`
	border: 0;
	border-bottom: 0.5px solid rgb(0, 0, 0, 0.2);
	height: 25px;
	text-align: unset;
	resize: none;
	stroke: none;
	width: 100%;
	&:focus {
		outline: none;
	}
`;

export const Enviar = styled.input`
	background: #f42a2c;
	color: white;
	cursor: pointer;
	font-size: 1.1rem;
	border: 0;
	border-radius: 4px;
	transition: all 0.3s ease;
	font-weight: 300;
	height: 40px;
	width: 100%;
	text-align: center;

	&:hover {
		background: #d62124;
	}
`;

export const Formulario = styled.form`
	max-width: 800px;
	width: 100%;
`;

function Contato() {
	return (
		<Container>
			<h1>Contato</h1>
			<Formulario action="https://api.staticforms.xyz/submit" method="post" className="form">
				<input type="hidden" name="accessKey" value="56abd8c9-2ec3-4d1c-9ac4-8db3439ff853"></input>
				<Caixas>
					<Nome>
						<Input type="text" name="name" placeholder="Nome"></Input>
					</Nome>
					<Sobrenome>
						<Input type="text" name="$sobrenome" placeholder="Sobrenome"></Input>
					</Sobrenome>
					<Assunto>
						<Input type="text" name="subject" placeholder="Assunto"></Input>
					</Assunto>
					<Email>
						<Input type="text" name="email" placeholder="Email"></Input>
					</Email>
					<Mensagem>
						<textarea name="message" placeholder="Mensagem"></textarea>
					</Mensagem>
				</Caixas>
				<input type="hidden" name="redirectTo" value="/sucess"></input>
				<Enviar type="submit" value="Enviar"></Enviar>
			</Formulario>
		</Container>
	);
}
export default Contato;
