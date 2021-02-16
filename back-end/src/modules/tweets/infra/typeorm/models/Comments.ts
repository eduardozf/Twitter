import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  Unique,
} from 'typeorm';
import Tweets from './Tweets';

@Entity()
@Unique(['tweet_id', 'comment_tweet_id'])
export default class Comments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Tweets, {
    cascade: true,
  })
  @JoinColumn({ name: 'tweet_id' })
  tweet_id: Tweets;

  @ManyToOne(() => Tweets, {
    cascade: true,
  })
  @JoinColumn({ name: 'comment_tweet_id' })
  comment_tweet_id: Tweets;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;
}
