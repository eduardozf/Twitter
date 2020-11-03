import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { Users } from './Users';

@Entity()
@Unique(['id', 'user_id'])
export class Tweets {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, {
    onDelete: 'CASCADE',
    eager: true
  })
  @JoinColumn({ name: 'user_id' })
  user_id: Users;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;
}
