import React, { createContext, useState, useCallback } from 'react';
import api from '../services/api';

import { ITweetData } from '../components/Tweet';

interface ContextProps {
  tweets: ITweetData[];
  UpdateTweets(): void;
  // eslint-disable-next-line no-unused-vars
  HandleNewTweet(data: ITweetData): void;
}

export const TweetsContext = createContext({} as ContextProps);

const TweetsProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tweets, setTweets] = useState<ITweetData[]>([]);

  const UpdateTweets = useCallback(async () => {
    const response = await api.get('/tweets');
    setTweets(response.data);
  }, []);

  const HandleNewTweet = useCallback((data: ITweetData) => {
    setTweets(list => [data, ...list]);
  }, []);

  return (
    <TweetsContext.Provider value={{ tweets, UpdateTweets, HandleNewTweet }}>
      {children}
    </TweetsContext.Provider>
  );
};

export default TweetsProvider;
