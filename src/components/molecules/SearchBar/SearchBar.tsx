// import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton';
import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton';
import { ReactComponent as SearchIcon } from 'lib/icons/icon-search.svg';
import { SearchInput, StyledInput, Wrapper } from './SearchBar.styles';

const SearchBar = () => (
	<Wrapper>
		<SearchInput>
			<SearchIcon />
			<StyledInput placeholder='Search GitHub username…' />
		</SearchInput>
		<PrimaryButton type='submit'>Search</PrimaryButton>
	</Wrapper>
);

export default SearchBar;
