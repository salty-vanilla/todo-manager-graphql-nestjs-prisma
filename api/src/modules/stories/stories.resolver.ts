import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StoriesService } from './stories.service';
import { Story, StoryCreateInput, StoryUpdateInput } from 'src/types/prisma-nestjs-graphql';

@Resolver(() => Story)
export class StoriesResolver {
  constructor(private readonly storiesService: StoriesService) {}

  @Mutation(() => Story)
  createStory(@Args('createStoryInput') createStoryInput: StoryCreateInput) {
    return this.storiesService.create(createStoryInput);
  }

  @Query(() => [Story], { name: 'stories' })
  findAll() {
    return this.storiesService.findAll();
  }

  @Query(() => Story, { name: 'story' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storiesService.findOne(id);
  }

  @Mutation(() => Story)
  updateStory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateStoryInput') updateStoryInput: StoryUpdateInput
  ){
    return this.storiesService.update(id, updateStoryInput);
  }

  @Mutation(() => Story)
  removeStory(@Args('id', { type: () => Int }) id: number) {
    return this.storiesService.remove(id);
  }
}
