import { Injectable } from '@nestjs/common';
import { StoryCreateInput, StoryUpdateInput } from 'src/types/prisma-nestjs-graphql';
import { prisma } from '@lib/prisma';

@Injectable()
export class StoriesService {
  async create(createStoryInput: StoryCreateInput) {
    const story = await prisma.story.create({
      data: createStoryInput,
    });
    return story;
  }

  async findAll() {
    const stories = await prisma.story.findMany()
    return stories;
  }

  async findOne(id: number) {
    const story = await prisma.story.findUnique({
      where: { id: id },
    });
    return story;
  }

  async update(id: number, updateStoryInput: StoryUpdateInput) {
    const story = await prisma.story.update({
      where: { id: id },
      data: updateStoryInput,
    });
    return story;
  }

  async remove(id: number) {
    const story = await prisma.story.delete({
      where: { id: id },
    });
    return story;
  }
}
