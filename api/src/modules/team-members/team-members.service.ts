import { prisma } from '@lib/prisma';
import { Injectable } from '@nestjs/common';
import { PRESET_COLORS } from 'src/types/colors';
import { FindManyTeamMemberArgs, TeamMemberCreateInput, TeamMemberUpdateInput } from 'src/types/prisma-nestjs-graphql';
import { findNewColor } from 'src/utils/findNewColor';

@Injectable()
export class TeamMembersService {
  async create(createTeamMemberInput: TeamMemberCreateInput) {
    const teamMember = await prisma.teamMember.create({
      data: {
        ...createTeamMemberInput,
        color: await findNewColor(createTeamMemberInput.team.connect.id),
      }
    });
    return teamMember;
  }

  async findAll(findManyTeamMemberArgs: FindManyTeamMemberArgs) {
    const teamMembers = await prisma.teamMember.findMany(findManyTeamMemberArgs)
    return teamMembers;
  }

  async findOne(
    teamId: number,
    userId: string
  ) {
    const teamMember = await prisma.teamMember.findUnique({
      where: {
        teamId_userId: {
          teamId: teamId,
          userId: userId,
        }
      }
    })
    return teamMember;
  }

  async update(
    teamId: number,
    userId: string,
    updateTeamMemberInput: TeamMemberUpdateInput
  ) {
    const teamMember = await prisma.teamMember.update({
      where: {
        teamId_userId: {
          teamId: teamId,
          userId: userId
        }
      },
      data: updateTeamMemberInput,
    })
    return teamMember;
  }

  remove(id: number) {
    return `This action removes a #${id} teamMember`;
  }
}
