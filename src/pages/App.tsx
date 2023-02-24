import GitHubUserSearch from 'components/organisms/GitHubUserSearch/GitHubUserSearch';
import { GlobalStyle } from 'lib/styles/GlobalStyle';
import { darkTheme, lightTheme } from 'lib/styles/theme';
import { createContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
				<Wrapper>
					<GitHubUserSearch />
				</Wrapper>
			</ThemeProvider>
		</DarkModeContext.Provider>
	);
};

export const Wrapper = styled.main`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5rem;
`;

export default App;
