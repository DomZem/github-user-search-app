import styled from 'styled-components';

export const Wrapper = styled.li<{ isNoText: boolean }>`
	display: flex;
	align-items: center;
	gap: 1rem;

	opacity: ${({ isNoText }) => (isNoText ? 0.5 : 1)};

	svg {
		fill: ${({ theme }) => theme.text};
	}

	a {
		color: ${({ theme }) => theme.text};

		@media (min-width: 1024px) {
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;
