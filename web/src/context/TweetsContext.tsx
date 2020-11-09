import React, { createContext, useEffect, useState, useCallback } from 'react';
import { ITweetData } from '../components/Tweet';
import api from '../services/api';

interface IContext {
  tweets: ITweetData[];
}


export const tweetsContext = createContext({} as IContext)

const TweetsProvider: React.FC = ({ children }) => {
  const [tweets, setTweets] = useState<ITweetData[]>([]);

  useEffect(() => {
    api.get('/tweets').then(res => {
      setTweets(res.data);
    })
  }, [])

  return (
    <tweetsContext.Provider value={{ tweets }}>
      {children}
    </tweetsContext.Provider>
  )
}

export default TweetsProvider;
