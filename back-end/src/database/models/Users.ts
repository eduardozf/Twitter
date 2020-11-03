import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, } from "typeorm";
import { } from '../models/Follows'

@Entity()
export class Users {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  screen_name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'https://api.hello-avatar.com/adorables/face/eyes1/nose2/mouth4/f7ddaf/140' })
  avatar: string;

  @Column({ default: false })
  verified: boolean;

  @ManyToMany(() => Users, {
    onDelete: 'CASCADE',
    lazy: true,
  })
  @JoinTable({
    name: 'follows',
    joinColumn: { name: 'users_id' },
    inverseJoinColumn: { name: 'follows_id' },
  })
  follows: Users[];

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_At: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', onUpdate: 'now()' })
  updated_At: Date;

}
