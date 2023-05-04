import { prisma } from '@lib/prisma';
import { Injectable } from '@nestjs/common';
import { PRESET_COLORS } from 'src/types/colors';
import { FindManyTeamArgs, TeamCreateInput, TeamUpdateInput } from 'src/types/prisma-nestjs-graphql';
import { findNewColor } from 'src/utils/findNewColor';

@Injectable()
export class TeamsService {
  async create(createTeamInput: TeamCreateInput) {
    if ('create' in createTeamInput.members) {
      createTeamInput.members.create = createTeamInput.members.create.map((obj, index) => {
        return {
          ...obj,
          color: PRESET_COLORS[index],
        }
      })
    const team = await prisma.team.create({
      data: createTeamInput
    });
    return team;
    }
  }

  async findAll(findManyTeamArgs: FindManyTeamArgs) {
    const teams = await prisma.team.findMany(findManyTeamArgs);
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
