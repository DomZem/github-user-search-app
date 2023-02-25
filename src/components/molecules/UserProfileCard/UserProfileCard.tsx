import { ReactComponent as CompanyIcon } from 'lib/icons/icon-company.svg';
import { ReactComponent as LocationIcon } from 'lib/icons/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'lib/icons/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from 'lib/icons/icon-website.svg';
import { userDataType } from 'lib/types/userData';
import { FC } from 'react';
import styled from 'styled-components';

type UserProfileCardProps = {
	userData: userDataType;
};

const UserProfileCard: FC<UserProfileCardProps> = ({ userData: { avatar_url, login, name, created_at, public_repos, followers, following, bio, location, company, twitter_username, blog } }) => {
	const joinData = new Date(created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

	return (
		<Wrapper>
			<ProfileImage src={avatar_url} alt={`${login}'s profile image`} />
			<ProfileIdentify>
				<Name>{name}</Name>
				<Login>@{login}</Login>
				<JoinData>Joined {joinData}</JoinData>
			</ProfileIdentify>
			<ProfileBio>{!bio ? 'This profile has no bio' : bio}</ProfileBio>
			<ProfileStats>
				<ProfileStatsBox>
					<p>Repos</p>
					<h6>{public_repos}</h6>
				</ProfileStatsBox>
				<ProfileStatsBox>
					<p>Followers</p>
					<h6>{followers}</h6>
				</ProfileStatsBox>
				<ProfileStatsBox>
					<p>Following</p>
					<h6>{following}</h6>
				</ProfileStatsBox>
			</ProfileStats>
			<ProfileDetails>
				<li>
					<LocationIcon />
					{location}
				</li>
				<li>
					<WebsiteIcon />
					{blog}
				</li>
				<li>
					<TwitterIcon />
					{twitter_username}
				</li>
				<li>
					<CompanyIcon />
					{company}
				</li>
			</ProfileDetails>
		</Wrapper>
	);
};

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto repeat(3, 1fr);
	grid-template-rows: repeat(4, auto);
	row-gap: 2rem;
	column-gap: 3rem;
	padding: 2rem;
	border-radius: 15px;

	background-color: ${({ theme }) => theme.foreground};
	box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.25);
`;

export const ProfileImage = styled.img`
	grid-column: 1/2;
	max-width: 117px;

	border-radius: 100%;
`;

export const ProfileIdentify = styled.div`
	grid-column: 2/-1;
	grid-row: 1/2;

	display: flex;
	flex-direction: column;
	justify-content: center;

	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`;

export const Name = styled.h2`
	font-weight: bold;
	font-size: 1.6rem;
	color: ${({ theme }) => theme.header};

	@media (min-width: 768px) {
		font-size: 2.6rem;
	}
`;

export const Login = styled.p`
	color: ${({ theme }) => theme.blue};
`;

export const JoinData = styled.p``;

export const ProfileBio = styled.p`
	grid-column: 1/-1;
	grid-row: 2/3;

	@media (min-width: 1024px) {
		grid-column: 2/-1;
	}
`;

export const ProfileStats = styled.div`
	grid-column: 1/-1;
	grid-row: 3/4;

	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 1rem;

	padding: 2rem;
	border-radius: 10px;

	background-color: ${({ theme }) => theme.background};

	@media (min-width: 1024px) {
		grid-column: 2/-1;
	}
`;

export const ProfileStatsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	h6 {
		color: ${({ theme }) => theme.header};
		font-size: 1.6rem;
		font-weight: bold;
	}

	p {
		font-size: 1.1rem;
		font-weight: 400;
	}
`;

export const ProfileDetails = styled.ul`
	grid-column: 1/-1;
	grid-row: 4/-1;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, auto);
	gap: 1.5rem;

	@media (min-width: 768px) {
		gap: 2.5rem;
	}

	@media (min-width: 1024px) {
		grid-column: 2/-1;
	}

	li {
		grid-column: 1/-1;

		display: flex;
		gap: 1rem;
		font-size: 1.3rem;

		@media (min-width: 768px) {
			grid-column: auto / auto;
		}
	}
`;

export default UserProfileCard;
