import { Module } from '@nestjs/common';
import { TeamMembersService } from './team-members.service';
import { TeamMembersResolver } from './team-members.resolver';
import { UsersService } from '@modules/users/users.service';
import { UsersResolver } from '@modules/users/users.resolver';
import { TeamsService } from '@modules/teams/teams.service';
import { TeamsResolver } from '@modules/teams/teams.resolver';

@Module({
  providers: [
    TeamMembersResolver,
    TeamMembersService,
    UsersService,
    UsersResolver,
    TeamsService,
    TeamsResolver
  ],
  exports: [
    TeamMembersService,
  ]
})
export class TeamMembersModule {}
