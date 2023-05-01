import { prisma } from '@lib/prisma';
import { Injectable } from '@nestjs/common';
import { TeamMemberCreateInput, TeamMemberUpdateInput } from 'src/types/prisma-nestjs-graphql';
import internal from 'stream';

@Injectable()
export class TeamMembersService {
  async create(createTeamMemberInput: TeamMemberCreateInput) {
    const teamMember = await prisma.teamMember.create({
      data: createTeamMemberInput,
    });
    return teamMember;
  }

  findAll() {
    return `This action returns all teamMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamMember`;
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
