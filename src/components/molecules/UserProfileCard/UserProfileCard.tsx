import SocialMediaItem from 'components/atoms/SocialMediaItem/SocialMediaItem';
import StatsListItem from 'components/atoms/StatsListItem/StatsListItem';
import { userDataType } from 'lib/types/userData';
import { FC } from 'react';
import { JoinData, Login, Name, ProfileBio, ProfileDetails, ProfileIdentify, ProfileImage, ProfileStatsList, Wrapper } from './UserProfileCard.styles';

type UserProfileCardProps = {
	userData: userDataType;
};

const UserProfileCard: FC<UserProfileCardProps> = ({ userData }) => {
	const joinData = new Date(userData.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

	return (
		<Wrapper>
			<ProfileImage src={userData.avatar_url} alt={`${userData.login}'s profile picture`} />
			<ProfileIdentify>
				<Name>{userData.name}</Name>
				<Login>@{userData.login}</Login>
				<JoinData>Joined {joinData}</JoinData>
			</ProfileIdentify>
			<ProfileBio>{!userData.bio ? 'This profile has no bio' : userData.bio}</ProfileBio>
			<ProfileStatsList>
				<StatsListItem title='Repos' number={userData.public_repos} />
				<StatsListItem title='Followers' number={userData.followers} />
				<StatsListItem title='Following' number={userData.following} />
			</ProfileStatsList>
			<ProfileDetails>
				<SocialMediaItem type='location' text={userData.location} />
				<SocialMediaItem type='website' text={userData.blog} />
				<SocialMediaItem type='twitter' text={userData.twitter_username} />
				<SocialMediaItem type='company' text={userData.company} />
			</ProfileDetails>
		</Wrapper>
	);
};

export default UserProfileCard;
