import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BacklogItemsService } from './backlog-items.service';
import { BacklogItem, BacklogItemCreateInput, BacklogItemUpdateInput, FindManyBacklogItemArgs } from 'src/types/prisma-nestjs-graphql';

@Resolver(() => BacklogItem)
export class BacklogItemsResolver {
  constructor(private readonly backlogItemsService: BacklogItemsService) {}

  @Mutation(() => BacklogItem)
  createBacklogItem(@Args('createBacklogItemInput') createBacklogItemInput: BacklogItemCreateInput) {
    return this.backlogItemsService.create(createBacklogItemInput);
  }

  @Query(() => [BacklogItem], { name: 'backlogItems' })
  findAll(@Args() findManyBacklogItemArgs: FindManyBacklogItemArgs) {
    return this.backlogItemsService.findAll(findManyBacklogItemArgs);
  }

  @Query(() => BacklogItem, { name: 'backlogItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.backlogItemsService.findOne(id);
  }

  @Mutation(() => BacklogItem)
  updateBacklogItem(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateBacklogItemInput') updateBacklogItemInput: BacklogItemUpdateInput
  ) {
    return this.backlogItemsService.update(id, updateBacklogItemInput);
  }

  @Mutation(() => BacklogItem)
  removeBacklogItem(@Args('id', { type: () => Int }) id: number) {
    return this.backlogItemsService.remove(id);
  }
}
