import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  CreateDateColumn,
  JoinColumn,
  Unique,
} from 'typeorm';
import Tweets from './Tweets';

@Entity()
@Unique(['tweet_id', 'retweet_id'])
export default class Retweets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Tweets, {
    cascade: true,
  })
  @JoinColumn({ name: 'tweet_id' })
  tweet_id: Tweets;

  @OneToOne(() => Tweets, {
    cascade: true,
  })
  @JoinColumn({ name: 'retweet_id' })
  retweet_id: Tweets;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;
}
