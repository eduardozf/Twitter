import React, { useContext, useEffect } from 'react';

import { TweetsContext } from '../../context/TweetsContext';
import { AuthContext } from '../../context/AuthContext';

import Tweet from '../Tweet';

const TweetList: React.FC = () => {
  const { tweets, UpdateTweets } = useContext(TweetsContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    UpdateTweets();
  }, []);

  function checkIsMine(id: string) {
    if (user.id === id) {
      return true;
    }
    return false;
  }

  return (
    <>
      {tweets &&
        tweets.map(tweetData => (
          <Tweet
            key={tweetData.content.tweet.id}
            TweetData={tweetData}
            isMine={checkIsMine(tweetData.content.tweet.user_id.id)}
          />
        ))}
    </>
  );
};

export default TweetList;
