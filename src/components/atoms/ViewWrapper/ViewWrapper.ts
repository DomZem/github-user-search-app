import styled from 'styled-components';

export const ViewWrapper = styled.div`
	border-radius: 15px;
	background-color: ${({ theme }) => theme.foreground};
	box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.25);
`;
