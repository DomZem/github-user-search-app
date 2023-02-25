import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto repeat(3, 1fr);
	grid-template-rows: repeat(4, auto);
	gap: 2.5rem;

	padding: 2.5rem;
	border-radius: 15px;

	background-color: ${({ theme }) => theme.foreground};
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);

	@media (min-width: 768px) {
		padding: 3.5rem;
	}
`;

export const ProfileImage = styled.img`
	grid-column: 1/2;
	width: 70px;
	border-radius: 100%;

	@media (min-width: 768px) {
		width: 117px;
	}
`;

export const ProfileIdentify = styled.div`
	grid-column: 2/-1;
	grid-row: 1/2;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	align-items: center;

	& > * {
		grid-column: 1/-1;
	}

	@media (min-width: 1024px) {
		& > *:not(:nth-child(3)) {
			grid-column: 1/2;
		}

		& > *:last-child {
			grid-row: 1/2;
			grid-column: 2/3;
			margin-left: auto;
		}
	}
`;

export const Name = styled.h2`
	font-weight: bold;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.header};

	@media (min-width: 768px) {
		font-size: 2.6rem;
	}
`;

export const Login = styled.p`
	color: ${({ theme }) => theme.blue};

	@media (min-width: 768px) {
		font-size: 1.6rem;
	}
`;

export const JoinData = styled.p``;

export const ProfileBio = styled.p`
	grid-column: 1/-1;
	grid-row: 2/3;

	line-height: 1.8;

	@media (min-width: 1024px) {
		grid-column: 2/-1;
	}
`;

export const ProfileStatsList = styled.div`
	grid-column: 1/-1;
	grid-row: 3/4;

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 1rem;

	padding: 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.background};

	@media (min-width: 1024px) {
		grid-column: 2/-1;
	}
`;

export const ProfileDetails = styled.ul`
	grid-column: 1/-1;
	grid-row: 4/-1;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;

	@media (min-width: 1024px) {
		grid-column: 2/-1;
	}

	li {
		grid-column: 1/-1;

		@media (min-width: 768px) {
			grid-column: auto / auto;
		}
	}
`;
