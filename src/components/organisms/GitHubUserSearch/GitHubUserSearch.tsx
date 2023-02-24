import SearchBar from 'components/molecules/SearchBar/SearchBar';
import styled from 'styled-components';

const GitHubUserSearch = () => (
	<Wrapper>
		<SearchBar />
	</Wrapper>
);

export const Wrapper = styled.div`
	max-width: 745px;
	width: 100%;

	display: flex;
	flex-direction: column;
`;

export default GitHubUserSearch;
