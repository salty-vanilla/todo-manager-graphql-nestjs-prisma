import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TeamsService } from '@modules/teams/teams.service';

@Module({
  providers: [UsersResolver, UsersService, TeamsService],
  exports: [UsersService],
})
export class UsersModule {}
