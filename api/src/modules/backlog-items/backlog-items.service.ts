import { Injectable } from '@nestjs/common';
import { BacklogItemCreateInput, BacklogItemUpdateInput, FindManyBacklogItemArgs } from 'src/types/prisma-nestjs-graphql';
import { prisma } from '@lib/prisma';

@Injectable()
export class BacklogItemsService {
  async create(createBacklogItemInput: BacklogItemCreateInput) {
    const item = await prisma.backlogItem.create({
      data: createBacklogItemInput,
    });
    return item;
  }

  async findAll(findManyBacklogItemArgs: FindManyBacklogItemArgs) {
    const items = await prisma.backlogItem.findMany(findManyBacklogItemArgs);
    return items;
  }

  async findOne(id: number) {
    const item = await prisma.backlogItem.findUnique({
      where: { id: id },
    });
    return item;
  }

  async update(id: number, updateBacklogItemInput: BacklogItemUpdateInput) {
    const item = await prisma.backlogItem.update({
      where: { id: id },
      data: updateBacklogItemInput,
    });
    return item;
  }

  async remove(id: number) {
    const item = await prisma.backlogItem.delete({
      where: { id: id },
    });
    return item;
  }
}
