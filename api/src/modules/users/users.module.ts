import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TeamsService } from '@modules/teams/teams.service';
import { TeamMembersService } from '@modules/team-members/team-members.service';

@Module({
  providers: [UsersResolver, UsersService, TeamsService, TeamMembersService],
  exports: [UsersService],
})
export class UsersModule {}
