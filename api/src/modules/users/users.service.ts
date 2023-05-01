import { Injectable } from '@nestjs/common';
import { prisma } from '@lib/prisma';
import { UserCreateInput, UserUpdateInput, FindManyUserArgs } from 'src/types/prisma-nestjs-graphql';

@Injectable()
export class UsersService {
  async create(createUserInput: UserCreateInput) {
    const user = await prisma.user.create({
      data: createUserInput
    });
    return user;
  }

  async findAll(findManyUserArgs: FindManyUserArgs) {
    const users = await prisma.user.findMany(findManyUserArgs);
    return users;
  }

  async findOne(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }

  async update(id: string, updateUserInput: UserUpdateInput) {
    const user = await prisma.user.update({
      where: { id: id },
      data: updateUserInput,
    });
    return user;
  }

  async remove(id: string) {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return user;
  }
}
