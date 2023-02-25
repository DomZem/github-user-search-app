import { ReactComponent as CompanyIcon } from 'lib/icons/icon-company.svg';
import { ReactComponent as LocationIcon } from 'lib/icons/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'lib/icons/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from 'lib/icons/icon-website.svg';
import { FC } from 'react';
import { Wrapper } from './SocialMediaItem.styles';

const iconMap = {
	website: WebsiteIcon,
	location: LocationIcon,
	company: CompanyIcon,
	twitter: TwitterIcon,
};

type SocialMediaItemProps = {
	type: 'website' | 'location' | 'company' | 'twitter';
	text: string;
};

const SocialMediaItem: FC<SocialMediaItemProps> = ({ type, text }) => {
	const Icon = iconMap[type];

	return (
		<Wrapper isNoText={!text}>
			<Icon />
			{!text ? (
				'Not Available'
			) : text.includes('https') ? (
				<a href={text} target='_blank' rel='noreferrer'>
					{text}
				</a>
			) : (
				text
			)}
		</Wrapper>
	);
};

export default SocialMediaItem;
