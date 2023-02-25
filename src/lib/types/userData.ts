export type userDataType = {
	login: string;
	name: string;
	avatar_url: string;
	created_at: Date;

	bio: string;

	// stats
	followers: number;
	following: number;
	public_repos: number;

	// social media
	location: string;
	twitter_username: string;
	company: string;
	blog: string;
};
