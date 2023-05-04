import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { TeamsService } from '@modules/teams/teams.service';
import { User, UserCreateInput, UserUpdateInput, FindManyUserArgs, Team, FindManyTeamArgs, StringFilter, TeamMember, FindManyTeamMemberArgs, MemberRole } from 'src/types/prisma-nestjs-graphql';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { TeamMembersService } from '@modules/team-members/team-members.service';
import { Z_UNKNOWN } from 'zlib';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
    private readonly teamMembersService: TeamMembersService,
  ) {}

  @Mutation(() => User)
  @UseGuards(JwtGuard)
  createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll(@Args() findManyUserArgs: FindManyUserArgs) {
    return this.usersService.findAll(findManyUserArgs);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UserUpdateInput) {
    return this.usersService.update(updateUserInput.id as string, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }

  @ResolveField('teams', () => [TeamMember])
  fetchTeams(
    @Parent() user: User,
    @Args({nullable: true}) findManyTeamMemberArgs: FindManyTeamMemberArgs
  ){
    let newFindManyArgs = findManyTeamMemberArgs;
    newFindManyArgs.where = { ...newFindManyArgs.where, ...{
      userId: {
        equals: user.id
      }
    }}

    return this.teamMembersService.findAll(newFindManyArgs);
  }

}
