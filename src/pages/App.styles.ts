import styled from 'styled-components';

export const AppContainer = styled.main`
	min-height: 100vh;
	width: 100%;

	padding: 3rem 1.5rem;

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Wrapper = styled.div`
	max-width: 745px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3.6rem;
`;
