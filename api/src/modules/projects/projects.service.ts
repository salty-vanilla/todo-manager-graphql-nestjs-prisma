import { Injectable } from '@nestjs/common';
import { ProjectCreateInput, ProjectUpdateInput } from 'src/types/prisma-nestjs-graphql';
import { prisma } from '@lib/prisma';

@Injectable()
export class ProjectsService {
  async create(projectCreateInput: ProjectCreateInput) {
    const project = await prisma.project.create({
      data: projectCreateInput,
    });
    return project;
  }

  async findAll() {
    const projects = await prisma.project.findMany(
      {
        include: {
          stories: true,
        }
      }
    );
    return projects;
  }

  async findOne(id: number) {
    const project = await prisma.project.findUnique({
      where: { id: id },
    });
    return project;
  }

  async update(id: number, projectUpdateInput: ProjectUpdateInput) {
    const project = await prisma.project.update({
      where: { id: id },
      data: projectUpdateInput,
    });
    return project;
  }

  async remove(id: number) {
    const project = await prisma.project.delete({
      where: { id: id },
    });
    return project;
  }
}
