import { Entity, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, Column, JoinColumn, Unique } from "typeorm";
import { Tweets } from './Tweets';

@Entity()
@Unique(['id', 'tweet_id'])
export class Contents {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Tweets, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'tweet_id' })
  tweet_id: Tweets;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  video: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;
}
