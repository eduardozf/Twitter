import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, CreateDateColumn, JoinColumn, Unique } from "typeorm";
import { Users } from './Users';
import { Tweets } from './Tweets';

@Entity()
@Unique(['user_id', 'tweet_id'])
export class Favorites {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Users, {
    cascade: true
  })
  @JoinColumn({ name: 'user_id' })
  user_id: Users;

  @ManyToOne(() => Tweets, {
    cascade: true
  })
  @JoinColumn({ name: 'tweet_id' })
  tweet_id: Tweets[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;
}
