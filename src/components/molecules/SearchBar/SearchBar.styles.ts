import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled(ViewWrapper)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	padding: 0.75rem;

	@media (min-width: 768px) {
		padding-left: 2rem;
	}
`;

export const SearchInput = styled.div`
	flex: 1;

	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const StyledInput = styled.input`
	max-width: 250px;
	width: 100%;

	padding: 0.25em;
	border: none;
	outline: none;

	background-color: transparent;
	color: ${({ theme }) => theme.inputFocusText};
	font-size: 1.3rem;

	&::placeholder {
		color: ${({ theme }) => theme.text};
	}

	@media (min-width: 768px) {
		font-size: 1.8rem;
	}
`;
