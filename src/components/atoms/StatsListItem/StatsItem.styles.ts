import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	@media (min-width: 768px) {
		align-items: flex-start;
	}
`;

export const Title = styled.h4`
	font-size: 1.1rem;
	font-weight: 400;

	@media (min-width: 768px) {
		font-size: 1.3rem;
	}
`;

export const Number = styled.p`
	color: ${({ theme }) => theme.header};
	font-size: 1.6rem;
	font-weight: bold;

	@media (min-width: 768px) {
		font-size: 2.2rem;
	}
`;
