import { ReactComponent as MoonIcon } from 'lib/icons/icon-moon.svg';
import { ReactComponent as SunIcon } from 'lib/icons/icon-sun.svg';
import { DarkModeContext } from 'pages/App';
import { useContext } from 'react';
import { Wrapper } from './ButtonToggleMode.styles';

const ButtonToggleMode = () => {
	const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
	return (
		<Wrapper onClick={toggleDarkMode}>
			{darkMode ? 'light' : 'dark'}
			{darkMode ? <SunIcon /> : <MoonIcon />}
		</Wrapper>
	);
};

export default ButtonToggleMode;
