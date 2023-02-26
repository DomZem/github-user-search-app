import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 745px;
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const ErrorMessage = styled(ViewWrapper)`
	padding: 1.424em 1.5em;

	color: ${({ theme }) => theme.error};
	font-size: 1.3rem;
	font-weight: 700;

	span {
		display: block;
		color: ${({ theme }) => theme.text};
		font-weight: 400;
	}

	@media (min-width: 768px) {
		padding: 1.028em 1.5em;
		font-size: 1.8rem;
	}
`;
