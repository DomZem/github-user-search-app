import { COUNTRIES_API_URL } from 'api';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import UserProfileCard from 'components/molecules/UserProfileCard/UserProfileCard';
import { userDataType } from 'lib/types/userData';
import { useEffect, useState } from 'react';
import { ErrorMessage, Wrapper } from './UserSearch.styles';

const UserSearch = () => {
	const [nickName, setNickname] = useState('');
	const [userData, setUserData] = useState<userDataType>();
	const [isError, setIsError] = useState(false);

	const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const usernameValue = e.currentTarget['username'].value;
		setNickname(usernameValue);
	};

	useEffect(() => {
		if (!nickName) return;

		(async () => {
			try {
				setIsError(false);

				const request = await fetch(`${COUNTRIES_API_URL}/${nickName}`);
				const data = await request.json();

				setUserData(data);
			} catch (err) {
				setIsError(true);
			}
		})();
	}, [nickName]);

	return (
		<Wrapper>
			<SearchBar handleSearchUser={handleSearchUser} />
			{isError ? (
				<ErrorMessage>
					Sorry, unexpected error from server. <span>We are working on fixing the problem. Be back soon.</span>
				</ErrorMessage>
			) : userData?.name ? (
				<UserProfileCard userData={userData} />
			) : (
				userData !== undefined && <ErrorMessage>No results</ErrorMessage>
			)}
		</Wrapper>
	);
};

export default UserSearch;
