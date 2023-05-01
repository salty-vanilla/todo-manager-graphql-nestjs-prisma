import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeamMembersService } from './team-members.service';
import { TeamMember, TeamMemberCreateInput, TeamMemberUpdateInput } from 'src/types/prisma-nestjs-graphql';

@Resolver(() => TeamMember)
export class TeamMembersResolver {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  @Mutation(() => TeamMember)
  createTeamMember(@Args('teamMemberCreateInput') teamMemberCreateInput: TeamMemberCreateInput) {
    return this.teamMembersService.create(teamMemberCreateInput);
  }

  @Query(() => [TeamMember], { name: 'teamMembers' })
  findAll() {
    return this.teamMembersService.findAll();
  }

  @Query(() => TeamMember, { name: 'teamMember' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.teamMembersService.findOne(id);
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
}
