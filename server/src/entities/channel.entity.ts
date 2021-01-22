import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { AbstractEntity } from './abstract.entity';
import { Guild } from './guild.entity';

@Entity('channels')
export class Channel extends AbstractEntity {
  @Column('varchar', { length: 100 })
  name: string;

  @Column('boolean', { default: true })
  public: boolean;

  @Column('boolean', { default: false })
  dm: boolean;

  @ManyToOne(() => Guild, (guild) => guild.id)
  guild: Guild;

  @ManyToMany(() => User)
  @JoinColumn({ name: 'channel_member' })
  members: Promise<User[]>;

  // @OneToMany(() => PCMember, (pcmember) => pcmember.channel)
  // pcmembers: Promise<PCMember[]>;
}