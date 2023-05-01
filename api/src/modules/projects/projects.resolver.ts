import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectsService } from './projects.service';
import { Project, ProjectCreateInput, ProjectUpdateInput } from 'src/types/prisma-nestjs-graphql';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private readonly projectsService: ProjectsService) {}

  @Mutation(() => Project)
  createProject(@Args('projectCreateInput') projectCreateInput: ProjectCreateInput) {
    return this.projectsService.create(projectCreateInput);
  }

  @Query(() => [Project], { name: 'projects' })
  findAll() {
    return this.projectsService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.findOne(id);
  }

  @Mutation(() => Project)
  updateProject(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProjectInput') projectUpdateInput: ProjectUpdateInput
  ) {
    return this.projectsService.update(id, projectUpdateInput);
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.remove(id);
  }
}
