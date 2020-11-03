import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { Users } from './Users';

@Entity()
@Unique(['users_id', 'follows_id'])
export class Follows {

  @PrimaryColumn()
  @ManyToOne(() => Users)
  @JoinColumn({ name: 'users_id' })
  users_id: Users;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'follows_id' })
  follows_id: Users;
}
