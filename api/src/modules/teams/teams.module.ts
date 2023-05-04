import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsResolver } from './teams.resolver';
import { UsersService } from '@modules/users/users.service';
import { TeamMembersService } from '@modules/team-members/team-members.service';

@Module({
  providers: [TeamsResolver, TeamsService, UsersService, TeamMembersService],
  exports: [TeamsService],
})
export class TeamsModule {}
