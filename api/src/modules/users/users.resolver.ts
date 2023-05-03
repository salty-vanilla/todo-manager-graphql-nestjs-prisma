import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { TeamsService } from '@modules/teams/teams.service';
import { User, UserCreateInput, UserUpdateInput, FindManyUserArgs, Team, FindManyTeamArgs, StringFilter } from 'src/types/prisma-nestjs-graphql';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly teamsService: TeamsService,
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

  @ResolveField('teams', () => [Team])
  findTeams(
    @Parent() user: User,
    @Args({nullable: true}) findManyTeamArgs: FindManyTeamArgs
  ){
    let newFindManyArgs = findManyTeamArgs;

    newFindManyArgs.where = { ...newFindManyArgs.where, ...{
      members: {
        some: {
          userId: {
            equals: user.id
          }
        }
      }
    }}
    return this.teamsService.findAll(newFindManyArgs)
  }

}
