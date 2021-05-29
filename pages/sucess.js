import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 200px;
`;

export default function Sucess() {
	return (
		<Container>
			<h1>Obrigado!</h1>
		</Container>
	);
}
