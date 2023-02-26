import styled from 'styled-components';

export const ViewWrapper = styled.div`
	border-radius: 15px;
	background-color: ${({ theme }) => theme.foreground};
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.25);
`;
