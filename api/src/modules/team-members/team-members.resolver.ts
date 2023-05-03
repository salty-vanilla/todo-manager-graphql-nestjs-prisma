import { Resolver, Query, Mutation, Args, Int, Info, ResolveField, Parent } from '@nestjs/graphql';
import { TeamMembersService } from './team-members.service';
import { FindManyTeamMemberArgs, FindManyUserArgs, Team, TeamMember, TeamMemberCreateInput, TeamMemberUpdateInput, User } from 'src/types/prisma-nestjs-graphql';
import { GraphQLResolveInfo } from 'graphql';
import { UsersService } from '@modules/users/users.service';
import { TeamsService } from '@modules/teams/teams.service';

@Resolver(() => TeamMember)
export class TeamMembersResolver {
  constructor(
    private readonly teamMembersService: TeamMembersService,
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
  ) {}

  @Mutation(() => TeamMember)
  createTeamMember(@Args('teamMemberCreateInput') teamMemberCreateInput: TeamMemberCreateInput) {
    return this.teamMembersService.create(teamMemberCreateInput);
  }

  @Query(() => [TeamMember], { name: 'teamMembers' })
  findAll(
    @Args() findManyTeamMemberArgs: FindManyTeamMemberArgs,
  ) {
    return this.teamMembersService.findAll(findManyTeamMemberArgs);
  }

  @Query(() => TeamMember, { name: 'teamMember' })
  findOne(
    @Args('teamId', { type: () => Int }) teamId: number,
    @Args('userd', { type: () => String }) userId: string    
  ) {
    return this.teamMembersService.findOne(teamId, userId);
  }

  @Mutation(() => TeamMember)
  updateTeamMember(
    @Args('teamId', { type: () => Int }) teamId: number,
    @Args('userd', { type: () => String }) userId: string,
    @Args('teamMemberUpdateInput') teamMemberUpdateInput: TeamMemberUpdateInput
  ) {
    return this.teamMembersService.update(teamId, userId, teamMemberUpdateInput);
  }

  @Mutation(() => TeamMember)
  removeTeamMember(@Args('id', { type: () => Int }) id: number) {
    return this.teamMembersService.remove(id);
  }

  @ResolveField('user', () => User)
  findOneUser(
    @Parent() teamMember: TeamMember,
  ) {
    return this.usersService.findOne(teamMember.userId);
  }

  @ResolveField('team', () => Team)
  findOneTeam(
    @Parent() teamMember: TeamMember,
  ) {
    return this.teamsService.findOne(teamMember.teamId);
  }
}
