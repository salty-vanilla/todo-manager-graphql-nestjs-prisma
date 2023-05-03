import { prisma } from '@lib/prisma';
import { Injectable } from '@nestjs/common';
import { FindManyTeamArgs, TeamCreateInput, TeamUpdateInput } from 'src/types/prisma-nestjs-graphql';

@Injectable()
export class TeamsService {
  async create(createTeamInput: TeamCreateInput) {
    const team = await prisma.team.create({
      data: createTeamInput
    });
    return team;
  }

  async findAll(findManyTeamArgs: FindManyTeamArgs) {
    const teams = await prisma.team.findMany(findManyTeamArgs);
    console.log(teams);
    return teams;
  }

  async findOne(id: number) {
    const team = await prisma.team.findUnique({
      where: { id: id },
    });
    return team;
  }

  async update(id: number, teamUpdateInput: TeamUpdateInput) {
    const team = await prisma.team.update({
      where: { id: id },
      data: teamUpdateInput,
    });
    return team;
  }

  async remove(id: number) {
    const team = await prisma.team.delete({
      where: { id: id },
    });
    return team;
  }
}
