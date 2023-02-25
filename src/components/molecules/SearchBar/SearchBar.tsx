// import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton';
import { PrimaryButton } from 'components/atoms/PrimaryButton/PrimaryButton';
import { ReactComponent as SearchIcon } from 'lib/icons/icon-search.svg';
import React, { FC } from 'react';
import { SearchInput, StyledInput, Wrapper } from './SearchBar.styles';

type SearchBarProps = {
	handleSearchUser: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchBar: FC<SearchBarProps> = ({ handleSearchUser }) => {
	return (
		<Wrapper onSubmit={handleSearchUser}>
			<SearchInput>
				<SearchIcon />
				<StyledInput type='text' name='username' id='username' placeholder='Search GitHub username…' />
			</SearchInput>
			<PrimaryButton type='submit'>Search</PrimaryButton>
		</Wrapper>
	);
};

export default SearchBar;
