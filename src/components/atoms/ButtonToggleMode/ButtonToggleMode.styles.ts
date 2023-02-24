import styled from 'styled-components';

export const Wrapper = styled.button`
	display: inline-flex;
	align-items: center;
	gap: 2rem;

	padding: 0.5em;

	background-color: transparent;
	border: none;

	font-size: 1.3rem;
	font-weight: bold;
	color: ${({ theme }) => theme.toggleButton};
	letter-spacing: 2px;
	text-transform: uppercase;

	svg {
		fill: ${({ theme }) => theme.toggleButton};
	}

	@media (min-width: 1024px) {
		cursor: pointer;

		&:hover {
			color: ${({ theme }) => theme.toggleButtonHover};

			svg {
				fill: ${({ theme }) => theme.toggleButtonHover};
			}
		}
	}
`;
