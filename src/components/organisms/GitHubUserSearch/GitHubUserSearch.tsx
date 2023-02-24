import Header from 'components/molecules/Header/Header';
import styled from 'styled-components';

const GitHubUserSearch = () => (
	<Wrapper>
		<Header />
	</Wrapper>
);

export const Wrapper = styled.div`
	max-width: 745px;
	width: 100%;
`;

export default GitHubUserSearch;
