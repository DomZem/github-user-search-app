import { FC } from 'react';
import { Number, Title, Wrapper } from './StatsItem.styles';

type StatsListItemProps = {
	title: string;
	number: number;
};

const StatsListItem: FC<StatsListItemProps> = ({ title, number }) => (
	<Wrapper>
		<Title>{title}</Title>
		<Number>{number}</Number>
	</Wrapper>
);

export default StatsListItem;
