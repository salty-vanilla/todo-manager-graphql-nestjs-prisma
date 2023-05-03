import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { TeamsService } from './teams.service';
import { FindManyTeamArgs, FindManyUserArgs, Team, TeamCreateInput, TeamUpdateInput, User } from 'src/types/prisma-nestjs-graphql';
import { UsersService } from '@modules/users/users.service';


@Resolver(() => Team)
export class TeamsResolver {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => Team)
  createTeam(@Args('teamCreateInput') teamCreateInput: TeamCreateInput) {
    return this.teamsService.create(teamCreateInput);
  }

  @Query(() => [Team], { name: 'teams' })
  findAll(@Args() findManyTeamArgs: FindManyTeamArgs) {
    return this.teamsService.findAll(findManyTeamArgs);
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

  @ResolveField('members', () => [User])
  fetchTeams(
    @Parent() team: Team,
    @Args({nullable: true}) findManyUserArgs: FindManyUserArgs
  ){
    let newFindManyArgs = findManyUserArgs;

    newFindManyArgs.where = { ...newFindManyArgs.where, ...{
      teams: {
        some: {
          teamId: {
            equals: team.id
          }
        }
      }
    }}
    return this.usersService.findAll(newFindManyArgs)
  }
}
