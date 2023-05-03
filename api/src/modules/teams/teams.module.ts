import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsResolver } from './teams.resolver';
import { UsersService } from '@modules/users/users.service';

@Module({
  providers: [TeamsResolver, TeamsService, UsersService],
  exports: [TeamsService],
})
export class TeamsModule {}
