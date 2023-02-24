import styled from 'styled-components';

export const PrimaryButton = styled.button`
	border: none;

	padding: 0.75em 1em;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.primaryButtonBackground};
	color: ${({ theme }) => theme.primaryButtonText};

	font-size: 1.4rem;

	@media (min-width: 768px) {
		font-size: 1.6rem;
	}

	@media (min-width: 1024px) {
		transition: background-color 0.2s linear;
		cursor: pointer;

		&:hover {
			background-color: ${({ theme }) => theme.primaryButtonHover};
		}
	}
`;
