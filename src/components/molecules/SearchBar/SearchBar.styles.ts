import styled from 'styled-components';

export const Wrapper = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;

	padding: 0.75em;
	border-radius: 15px;

	background-color: ${({ theme }) => theme.foreground};
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.25);
`;

export const SearchInput = styled.div`
	flex: 1;

	display: flex;
	align-items: center;
	gap: 1.25rem;
`;

export const StyledInput = styled.input`
	max-width: 250px;
	width: 100%;

	padding: 0.25em;
	border: none;
	outline: none;

	background-color: transparent;
	color: ${({ theme }) => theme.text};

	&::placeholder {
		color: ${({ theme }) => theme.inputFocusText};
	}
`;
