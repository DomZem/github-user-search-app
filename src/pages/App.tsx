import Header from 'components/molecules/Header/Header';
import UserSearch from 'components/organisms/UserSearch/UserSearch';
import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { darkTheme, lightTheme } from 'lib/styles/theme';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContainer, Wrapper } from './App.styles';

export const DarkModeContext = createContext({
	darkMode: true,
	toggleDarkMode: () => {},
});

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((darkMode) => !darkMode);
	};

	return (
		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<GlobalStyle />
				<AppContainer>
					<Wrapper>
						<Header />
						<UserSearch />
					</Wrapper>
				</AppContainer>
			</ThemeProvider>
		</DarkModeContext.Provider>
	);
};

export default App;
