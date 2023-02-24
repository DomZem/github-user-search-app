import ButtonToggleMode from 'components/atoms/ButtonToggleMode/ButtonToggleMode';
import { Title } from 'components/atoms/Title/Title';
import styled from 'styled-components';

const Header = () => (
	<Wrapper>
		<Title>devfinder</Title>
		<ButtonToggleMode />
	</Wrapper>
);

export const Wrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export default Header;
