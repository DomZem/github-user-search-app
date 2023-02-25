import { COUNTRIES_API_URL } from 'api';
import SearchBar from 'components/molecules/SearchBar/SearchBar';
import UserProfileCard from 'components/molecules/UserProfileCard/UserProfileCard';
import { userDataType } from 'lib/types/userData';
import { useEffect, useState } from 'react';
import { Wrapper } from './UserSearch.styles';

const UserSearch = () => {
	const [nickName, setNickname] = useState('');
	const [userData, setUserData] = useState<userDataType>();

	const handleSearchUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const usernameValue = e.currentTarget['username'].value;
		setNickname(usernameValue);
	};

	useEffect(() => {
		if (!nickName) return;

		(async () => {
			try {
				const request = await fetch(`${COUNTRIES_API_URL}/${nickName}`);
				const data = await request.json();
				setUserData(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [nickName]);

	return (
		<Wrapper>
			<SearchBar handleSearchUser={handleSearchUser} />
			{userData && <UserProfileCard userData={userData} />}
		</Wrapper>
	);
};

export default UserSearch;
