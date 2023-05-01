import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TeamsService } from './teams.service';
import { Team, TeamCreateInput, TeamUpdateInput } from 'src/types/prisma-nestjs-graphql';


@Resolver(() => Team)
export class TeamsResolver {
  constructor(private readonly teamsService: TeamsService) {}

  @Mutation(() => Team)
  createTeam(@Args('teamCreateInput') teamCreateInput: TeamCreateInput) {
    return this.teamsService.create(teamCreateInput);
  }

  @Query(() => [Team], { name: 'teams' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Query(() => Team, { name: 'team' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.teamsService.findOne(id);
  }

  @Mutation(() => Team)
  updateTeam(
    @Args('id', { type: () => Int }) id: number,
    @Args('teamUpdateInput') teamUpdateInput: TeamUpdateInput
  ) {
    return this.teamsService.update(id, teamUpdateInput);
  }

  @Mutation(() => Team)
  removeTeam(@Args('id', { type: () => Int }) id: number) {
    return this.teamsService.remove(id);
  }
}
