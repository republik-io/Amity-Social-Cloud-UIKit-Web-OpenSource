import React from 'react';
import TrendingCommunitiesList from '.';

export default {
  title: 'SDK Connected/Social/Community',
};

export const SdkTrendingCommunities = props => <TrendingCommunitiesList {...props} />;

SdkTrendingCommunities.storyName = 'Trending list';

SdkTrendingCommunities.args = {
  slim: false,
};

SdkTrendingCommunities.argTypes = {
  slim: { control: { type: 'boolean' } },
};
