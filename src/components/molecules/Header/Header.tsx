import ButtonToggleMode from 'components/atoms/ButtonToggleMode/ButtonToggleMode';
import { Title } from 'components/atoms/Title/Title';
import { Wrapper } from './Header.styles';

const Header = () => (
	<Wrapper>
		<Title>devfinder</Title>
		<ButtonToggleMode />
	</Wrapper>
);

export default Header;
