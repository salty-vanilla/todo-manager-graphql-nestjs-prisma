import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum TeamMemberScalarFieldEnum {
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    teamId = "teamId",
    userId = "userId",
    role = "role",
    color = "color"
}

export enum TeamScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    description = "description"
}

export enum StoryScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    startDate = "startDate",
    targetDate = "targetDate",
    name = "name",
    description = "description",
    projectId = "projectId"
}

export enum ProjectScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    startDate = "startDate",
    targetDate = "targetDate",
    name = "name",
    description = "description",
    teamId = "teamId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum MemberRole {
    admin = "admin",
    regular = "regular",
    pending = "pending"
}

export enum BacklogItemStatus {
    pending = "pending",
    doing = "doing",
    done = "done",
    stuck = "stuck"
}

export enum BacklogItemScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    startDate = "startDate",
    targetDate = "targetDate",
    name = "name",
    description = "description",
    status = "status",
    storyId = "storyId",
    userId = "userId"
}

registerEnumType(BacklogItemScalarFieldEnum, { name: 'BacklogItemScalarFieldEnum', description: undefined })
registerEnumType(BacklogItemStatus, { name: 'BacklogItemStatus', description: undefined })
registerEnumType(MemberRole, { name: 'MemberRole', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(ProjectScalarFieldEnum, { name: 'ProjectScalarFieldEnum', description: undefined })
registerEnumType(StoryScalarFieldEnum, { name: 'StoryScalarFieldEnum', description: undefined })
registerEnumType(TeamScalarFieldEnum, { name: 'TeamScalarFieldEnum', description: undefined })
registerEnumType(TeamMemberScalarFieldEnum, { name: 'TeamMemberScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateBacklogItem {
    @Field(() => BacklogItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BacklogItemCountAggregate>;
    @Field(() => BacklogItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BacklogItemAvgAggregate>;
    @Field(() => BacklogItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BacklogItemSumAggregate>;
    @Field(() => BacklogItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BacklogItemMinAggregate>;
    @Field(() => BacklogItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BacklogItemMaxAggregate>;
}

@ArgsType()
export class BacklogItemAggregateArgs {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => [BacklogItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BacklogItemOrderByWithRelationInput>;
    @Field(() => BacklogItemWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BacklogItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BacklogItemCountAggregateInput>;
    @Field(() => BacklogItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BacklogItemAvgAggregateInput>;
    @Field(() => BacklogItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BacklogItemSumAggregateInput>;
    @Field(() => BacklogItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BacklogItemMinAggregateInput>;
    @Field(() => BacklogItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BacklogItemMaxAggregateInput>;
}

@InputType()
export class BacklogItemAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    storyId?: true;
}

@ObjectType()
export class BacklogItemAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    storyId?: number;
}

@InputType()
export class BacklogItemAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
}

@InputType()
export class BacklogItemCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    storyId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class BacklogItemCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    startDate!: number;
    @Field(() => Int, {nullable:false})
    targetDate!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    storyId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class BacklogItemCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class BacklogItemCreateManyStoryInputEnvelope {
    @Field(() => [BacklogItemCreateManyStoryInput], {nullable:false})
    @Type(() => BacklogItemCreateManyStoryInput)
    data!: Array<BacklogItemCreateManyStoryInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class BacklogItemCreateManyStoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class BacklogItemCreateManyUserInputEnvelope {
    @Field(() => [BacklogItemCreateManyUserInput], {nullable:false})
    @Type(() => BacklogItemCreateManyUserInput)
    data!: Array<BacklogItemCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class BacklogItemCreateManyUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:false})
    storyId!: number;
}

@InputType()
export class BacklogItemCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:false})
    storyId!: number;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class BacklogItemCreateNestedManyWithoutStoryInput {
    @Field(() => [BacklogItemCreateWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutStoryInput)
    create?: Array<BacklogItemCreateWithoutStoryInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutStoryInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutStoryInput>;
    @Field(() => BacklogItemCreateManyStoryInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyStoryInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyStoryInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
}

@InputType()
export class BacklogItemCreateNestedManyWithoutUserInput {
    @Field(() => [BacklogItemCreateWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutUserInput)
    create?: Array<BacklogItemCreateWithoutUserInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutUserInput>;
    @Field(() => BacklogItemCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyUserInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
}

@InputType()
export class BacklogItemCreateOrConnectWithoutStoryInput {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemCreateWithoutStoryInput, {nullable:false})
    @Type(() => BacklogItemCreateWithoutStoryInput)
    create!: InstanceType<typeof BacklogItemCreateWithoutStoryInput>;
}

@InputType()
export class BacklogItemCreateOrConnectWithoutUserInput {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemCreateWithoutUserInput, {nullable:false})
    @Type(() => BacklogItemCreateWithoutUserInput)
    create!: InstanceType<typeof BacklogItemCreateWithoutUserInput>;
}

@InputType()
export class BacklogItemCreateWithoutStoryInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => UserCreateNestedOneWithoutBacklogItemsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutBacklogItemsInput>;
}

@InputType()
export class BacklogItemCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => StoryCreateNestedOneWithoutBacklogItemsInput, {nullable:false})
    story!: InstanceType<typeof StoryCreateNestedOneWithoutBacklogItemsInput>;
}

@InputType()
export class BacklogItemCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => StoryCreateNestedOneWithoutBacklogItemsInput, {nullable:false})
    story!: InstanceType<typeof StoryCreateNestedOneWithoutBacklogItemsInput>;
    @Field(() => UserCreateNestedOneWithoutBacklogItemsInput, {nullable:true})
    user?: InstanceType<typeof UserCreateNestedOneWithoutBacklogItemsInput>;
}

@ArgsType()
export class BacklogItemGroupByArgs {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => [BacklogItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BacklogItemOrderByWithAggregationInput>;
    @Field(() => [BacklogItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BacklogItemScalarFieldEnum>;
    @Field(() => BacklogItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof BacklogItemScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => BacklogItemCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BacklogItemCountAggregateInput>;
    @Field(() => BacklogItemAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BacklogItemAvgAggregateInput>;
    @Field(() => BacklogItemSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BacklogItemSumAggregateInput>;
    @Field(() => BacklogItemMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BacklogItemMinAggregateInput>;
    @Field(() => BacklogItemMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BacklogItemMaxAggregateInput>;
}

@ObjectType()
export class BacklogItemGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:false})
    status!: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:false})
    storyId!: number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => BacklogItemCountAggregate, {nullable:true})
    _count?: InstanceType<typeof BacklogItemCountAggregate>;
    @Field(() => BacklogItemAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof BacklogItemAvgAggregate>;
    @Field(() => BacklogItemSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof BacklogItemSumAggregate>;
    @Field(() => BacklogItemMinAggregate, {nullable:true})
    _min?: InstanceType<typeof BacklogItemMinAggregate>;
    @Field(() => BacklogItemMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof BacklogItemMaxAggregate>;
}

@InputType()
export class BacklogItemListRelationFilter {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    every?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => BacklogItemWhereInput, {nullable:true})
    some?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => BacklogItemWhereInput, {nullable:true})
    none?: InstanceType<typeof BacklogItemWhereInput>;
}

@InputType()
export class BacklogItemMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    storyId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class BacklogItemMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:true})
    storyId?: number;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class BacklogItemMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class BacklogItemMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    storyId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
}

@ObjectType()
export class BacklogItemMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:true})
    storyId?: number;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class BacklogItemMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
}

@InputType()
export class BacklogItemOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class BacklogItemOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => BacklogItemCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof BacklogItemCountOrderByAggregateInput>;
    @Field(() => BacklogItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof BacklogItemAvgOrderByAggregateInput>;
    @Field(() => BacklogItemMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof BacklogItemMaxOrderByAggregateInput>;
    @Field(() => BacklogItemMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof BacklogItemMinOrderByAggregateInput>;
    @Field(() => BacklogItemSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof BacklogItemSumOrderByAggregateInput>;
}

@InputType()
export class BacklogItemOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => StoryOrderByWithRelationInput, {nullable:true})
    story?: InstanceType<typeof StoryOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class BacklogItemScalarWhereWithAggregatesInput {
    @Field(() => [BacklogItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BacklogItemScalarWhereWithAggregatesInput>;
    @Field(() => [BacklogItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BacklogItemScalarWhereWithAggregatesInput>;
    @Field(() => [BacklogItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BacklogItemScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => EnumBacklogItemStatusWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    storyId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class BacklogItemScalarWhereInput {
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    AND?: Array<BacklogItemScalarWhereInput>;
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    OR?: Array<BacklogItemScalarWhereInput>;
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    NOT?: Array<BacklogItemScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumBacklogItemStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    storyId?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class BacklogItemSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    storyId?: true;
}

@ObjectType()
export class BacklogItemSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    storyId?: number;
}

@InputType()
export class BacklogItemSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    storyId?: keyof typeof SortOrder;
}

@InputType()
export class BacklogItemUncheckedCreateNestedManyWithoutStoryInput {
    @Field(() => [BacklogItemCreateWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutStoryInput)
    create?: Array<BacklogItemCreateWithoutStoryInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutStoryInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutStoryInput>;
    @Field(() => BacklogItemCreateManyStoryInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyStoryInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyStoryInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
}

@InputType()
export class BacklogItemUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [BacklogItemCreateWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutUserInput)
    create?: Array<BacklogItemCreateWithoutUserInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutUserInput>;
    @Field(() => BacklogItemCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyUserInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
}

@InputType()
export class BacklogItemUncheckedCreateWithoutStoryInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class BacklogItemUncheckedCreateWithoutUserInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:false})
    storyId!: number;
}

@InputType()
export class BacklogItemUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemStatus, {nullable:true})
    status?: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:false})
    storyId!: number;
    @Field(() => String, {nullable:true})
    userId?: string;
}

@InputType()
export class BacklogItemUncheckedUpdateManyWithoutBacklogItemsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class BacklogItemUncheckedUpdateManyWithoutStoryNestedInput {
    @Field(() => [BacklogItemCreateWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutStoryInput)
    create?: Array<BacklogItemCreateWithoutStoryInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutStoryInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutStoryInput>;
    @Field(() => [BacklogItemUpsertWithWhereUniqueWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemUpsertWithWhereUniqueWithoutStoryInput)
    upsert?: Array<BacklogItemUpsertWithWhereUniqueWithoutStoryInput>;
    @Field(() => BacklogItemCreateManyStoryInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyStoryInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyStoryInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    set?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    disconnect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    delete?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemUpdateWithWhereUniqueWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemUpdateWithWhereUniqueWithoutStoryInput)
    update?: Array<BacklogItemUpdateWithWhereUniqueWithoutStoryInput>;
    @Field(() => [BacklogItemUpdateManyWithWhereWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemUpdateManyWithWhereWithoutStoryInput)
    updateMany?: Array<BacklogItemUpdateManyWithWhereWithoutStoryInput>;
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    @Type(() => BacklogItemScalarWhereInput)
    deleteMany?: Array<BacklogItemScalarWhereInput>;
}

@InputType()
export class BacklogItemUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [BacklogItemCreateWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutUserInput)
    create?: Array<BacklogItemCreateWithoutUserInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutUserInput>;
    @Field(() => [BacklogItemUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BacklogItemUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => BacklogItemCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyUserInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    set?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    disconnect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    delete?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BacklogItemUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [BacklogItemUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BacklogItemUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    @Type(() => BacklogItemScalarWhereInput)
    deleteMany?: Array<BacklogItemScalarWhereInput>;
}

@InputType()
export class BacklogItemUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    storyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class BacklogItemUncheckedUpdateWithoutStoryInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class BacklogItemUncheckedUpdateWithoutUserInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    storyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class BacklogItemUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    storyId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class BacklogItemUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
}

@InputType()
export class BacklogItemUpdateManyWithWhereWithoutStoryInput {
    @Field(() => BacklogItemScalarWhereInput, {nullable:false})
    @Type(() => BacklogItemScalarWhereInput)
    where!: InstanceType<typeof BacklogItemScalarWhereInput>;
    @Field(() => BacklogItemUpdateManyMutationInput, {nullable:false})
    @Type(() => BacklogItemUpdateManyMutationInput)
    data!: InstanceType<typeof BacklogItemUpdateManyMutationInput>;
}

@InputType()
export class BacklogItemUpdateManyWithWhereWithoutUserInput {
    @Field(() => BacklogItemScalarWhereInput, {nullable:false})
    @Type(() => BacklogItemScalarWhereInput)
    where!: InstanceType<typeof BacklogItemScalarWhereInput>;
    @Field(() => BacklogItemUpdateManyMutationInput, {nullable:false})
    @Type(() => BacklogItemUpdateManyMutationInput)
    data!: InstanceType<typeof BacklogItemUpdateManyMutationInput>;
}

@InputType()
export class BacklogItemUpdateManyWithoutStoryNestedInput {
    @Field(() => [BacklogItemCreateWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutStoryInput)
    create?: Array<BacklogItemCreateWithoutStoryInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutStoryInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutStoryInput>;
    @Field(() => [BacklogItemUpsertWithWhereUniqueWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemUpsertWithWhereUniqueWithoutStoryInput)
    upsert?: Array<BacklogItemUpsertWithWhereUniqueWithoutStoryInput>;
    @Field(() => BacklogItemCreateManyStoryInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyStoryInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyStoryInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    set?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    disconnect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    delete?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemUpdateWithWhereUniqueWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemUpdateWithWhereUniqueWithoutStoryInput)
    update?: Array<BacklogItemUpdateWithWhereUniqueWithoutStoryInput>;
    @Field(() => [BacklogItemUpdateManyWithWhereWithoutStoryInput], {nullable:true})
    @Type(() => BacklogItemUpdateManyWithWhereWithoutStoryInput)
    updateMany?: Array<BacklogItemUpdateManyWithWhereWithoutStoryInput>;
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    @Type(() => BacklogItemScalarWhereInput)
    deleteMany?: Array<BacklogItemScalarWhereInput>;
}

@InputType()
export class BacklogItemUpdateManyWithoutUserNestedInput {
    @Field(() => [BacklogItemCreateWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateWithoutUserInput)
    create?: Array<BacklogItemCreateWithoutUserInput>;
    @Field(() => [BacklogItemCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<BacklogItemCreateOrConnectWithoutUserInput>;
    @Field(() => [BacklogItemUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<BacklogItemUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => BacklogItemCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => BacklogItemCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof BacklogItemCreateManyUserInputEnvelope>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    set?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    disconnect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    delete?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemWhereUniqueInput], {nullable:true})
    @Type(() => BacklogItemWhereUniqueInput)
    connect?: Array<BacklogItemWhereUniqueInput>;
    @Field(() => [BacklogItemUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<BacklogItemUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [BacklogItemUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => BacklogItemUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<BacklogItemUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [BacklogItemScalarWhereInput], {nullable:true})
    @Type(() => BacklogItemScalarWhereInput)
    deleteMany?: Array<BacklogItemScalarWhereInput>;
}

@InputType()
export class BacklogItemUpdateWithWhereUniqueWithoutStoryInput {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemUpdateWithoutStoryInput, {nullable:false})
    @Type(() => BacklogItemUpdateWithoutStoryInput)
    data!: InstanceType<typeof BacklogItemUpdateWithoutStoryInput>;
}

@InputType()
export class BacklogItemUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemUpdateWithoutUserInput, {nullable:false})
    @Type(() => BacklogItemUpdateWithoutUserInput)
    data!: InstanceType<typeof BacklogItemUpdateWithoutUserInput>;
}

@InputType()
export class BacklogItemUpdateWithoutStoryInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutBacklogItemsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutBacklogItemsNestedInput>;
}

@InputType()
export class BacklogItemUpdateWithoutUserInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => StoryUpdateOneRequiredWithoutBacklogItemsNestedInput, {nullable:true})
    story?: InstanceType<typeof StoryUpdateOneRequiredWithoutBacklogItemsNestedInput>;
}

@InputType()
export class BacklogItemUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => EnumBacklogItemStatusFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFieldUpdateOperationsInput>;
    @Field(() => StoryUpdateOneRequiredWithoutBacklogItemsNestedInput, {nullable:true})
    story?: InstanceType<typeof StoryUpdateOneRequiredWithoutBacklogItemsNestedInput>;
    @Field(() => UserUpdateOneWithoutBacklogItemsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneWithoutBacklogItemsNestedInput>;
}

@InputType()
export class BacklogItemUpsertWithWhereUniqueWithoutStoryInput {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemUpdateWithoutStoryInput, {nullable:false})
    @Type(() => BacklogItemUpdateWithoutStoryInput)
    update!: InstanceType<typeof BacklogItemUpdateWithoutStoryInput>;
    @Field(() => BacklogItemCreateWithoutStoryInput, {nullable:false})
    @Type(() => BacklogItemCreateWithoutStoryInput)
    create!: InstanceType<typeof BacklogItemCreateWithoutStoryInput>;
}

@InputType()
export class BacklogItemUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemUpdateWithoutUserInput, {nullable:false})
    @Type(() => BacklogItemUpdateWithoutUserInput)
    update!: InstanceType<typeof BacklogItemUpdateWithoutUserInput>;
    @Field(() => BacklogItemCreateWithoutUserInput, {nullable:false})
    @Type(() => BacklogItemCreateWithoutUserInput)
    create!: InstanceType<typeof BacklogItemCreateWithoutUserInput>;
}

@InputType()
export class BacklogItemWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class BacklogItemWhereInput {
    @Field(() => [BacklogItemWhereInput], {nullable:true})
    AND?: Array<BacklogItemWhereInput>;
    @Field(() => [BacklogItemWhereInput], {nullable:true})
    OR?: Array<BacklogItemWhereInput>;
    @Field(() => [BacklogItemWhereInput], {nullable:true})
    NOT?: Array<BacklogItemWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => EnumBacklogItemStatusFilter, {nullable:true})
    status?: InstanceType<typeof EnumBacklogItemStatusFilter>;
    @Field(() => IntFilter, {nullable:true})
    storyId?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    userId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StoryRelationFilter, {nullable:true})
    story?: InstanceType<typeof StoryRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class BacklogItem {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Date, {nullable:true})
    startDate!: Date | null;
    @Field(() => Date, {nullable:true})
    targetDate!: Date | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => BacklogItemStatus, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof BacklogItemStatus;
    @Field(() => Int, {nullable:false})
    storyId!: number;
    @Field(() => String, {nullable:true})
    userId!: string | null;
    @Field(() => Story, {nullable:false})
    story?: InstanceType<typeof Story>;
    @Field(() => User, {nullable:true})
    user?: InstanceType<typeof User> | null;
}

@ArgsType()
export class CreateManyBacklogItemArgs {
    @Field(() => [BacklogItemCreateManyInput], {nullable:false})
    @Type(() => BacklogItemCreateManyInput)
    data!: Array<BacklogItemCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneBacklogItemArgs {
    @Field(() => BacklogItemCreateInput, {nullable:false})
    @Type(() => BacklogItemCreateInput)
    data!: InstanceType<typeof BacklogItemCreateInput>;
}

@ArgsType()
export class DeleteManyBacklogItemArgs {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
}

@ArgsType()
export class DeleteOneBacklogItemArgs {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
}

@ArgsType()
export class FindFirstBacklogItemOrThrowArgs {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => [BacklogItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BacklogItemOrderByWithRelationInput>;
    @Field(() => BacklogItemWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BacklogItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BacklogItemScalarFieldEnum>;
}

@ArgsType()
export class FindFirstBacklogItemArgs {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => [BacklogItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BacklogItemOrderByWithRelationInput>;
    @Field(() => BacklogItemWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BacklogItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BacklogItemScalarFieldEnum>;
}

@ArgsType()
export class FindManyBacklogItemArgs {
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
    @Field(() => [BacklogItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BacklogItemOrderByWithRelationInput>;
    @Field(() => BacklogItemWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [BacklogItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BacklogItemScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueBacklogItemOrThrowArgs {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueBacklogItemArgs {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyBacklogItemArgs {
    @Field(() => BacklogItemUpdateManyMutationInput, {nullable:false})
    @Type(() => BacklogItemUpdateManyMutationInput)
    data!: InstanceType<typeof BacklogItemUpdateManyMutationInput>;
    @Field(() => BacklogItemWhereInput, {nullable:true})
    @Type(() => BacklogItemWhereInput)
    where?: InstanceType<typeof BacklogItemWhereInput>;
}

@ArgsType()
export class UpdateOneBacklogItemArgs {
    @Field(() => BacklogItemUpdateInput, {nullable:false})
    @Type(() => BacklogItemUpdateInput)
    data!: InstanceType<typeof BacklogItemUpdateInput>;
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneBacklogItemArgs {
    @Field(() => BacklogItemWhereUniqueInput, {nullable:false})
    @Type(() => BacklogItemWhereUniqueInput)
    where!: InstanceType<typeof BacklogItemWhereUniqueInput>;
    @Field(() => BacklogItemCreateInput, {nullable:false})
    @Type(() => BacklogItemCreateInput)
    create!: InstanceType<typeof BacklogItemCreateInput>;
    @Field(() => BacklogItemUpdateInput, {nullable:false})
    @Type(() => BacklogItemUpdateInput)
    update!: InstanceType<typeof BacklogItemUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumBacklogItemStatusFieldUpdateOperationsInput {
    @Field(() => BacklogItemStatus, {nullable:true})
    set?: keyof typeof BacklogItemStatus;
}

@InputType()
export class EnumBacklogItemStatusFilter {
    @Field(() => BacklogItemStatus, {nullable:true})
    equals?: keyof typeof BacklogItemStatus;
    @Field(() => [BacklogItemStatus], {nullable:true})
    in?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => [BacklogItemStatus], {nullable:true})
    notIn?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => NestedEnumBacklogItemStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumBacklogItemStatusFilter>;
}

@InputType()
export class EnumBacklogItemStatusWithAggregatesFilter {
    @Field(() => BacklogItemStatus, {nullable:true})
    equals?: keyof typeof BacklogItemStatus;
    @Field(() => [BacklogItemStatus], {nullable:true})
    in?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => [BacklogItemStatus], {nullable:true})
    notIn?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => NestedEnumBacklogItemStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumBacklogItemStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumBacklogItemStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumBacklogItemStatusFilter>;
    @Field(() => NestedEnumBacklogItemStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumBacklogItemStatusFilter>;
}

@InputType()
export class EnumMemberRoleFieldUpdateOperationsInput {
    @Field(() => MemberRole, {nullable:true})
    set?: keyof typeof MemberRole;
}

@InputType()
export class EnumMemberRoleFilter {
    @Field(() => MemberRole, {nullable:true})
    equals?: keyof typeof MemberRole;
    @Field(() => [MemberRole], {nullable:true})
    in?: Array<keyof typeof MemberRole>;
    @Field(() => [MemberRole], {nullable:true})
    notIn?: Array<keyof typeof MemberRole>;
    @Field(() => NestedEnumMemberRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMemberRoleFilter>;
}

@InputType()
export class EnumMemberRoleWithAggregatesFilter {
    @Field(() => MemberRole, {nullable:true})
    equals?: keyof typeof MemberRole;
    @Field(() => [MemberRole], {nullable:true})
    in?: Array<keyof typeof MemberRole>;
    @Field(() => [MemberRole], {nullable:true})
    notIn?: Array<keyof typeof MemberRole>;
    @Field(() => NestedEnumMemberRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMemberRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumMemberRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumMemberRoleFilter>;
    @Field(() => NestedEnumMemberRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumMemberRoleFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    @Field(() => NestedDateTimeNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumBacklogItemStatusFilter {
    @Field(() => BacklogItemStatus, {nullable:true})
    equals?: keyof typeof BacklogItemStatus;
    @Field(() => [BacklogItemStatus], {nullable:true})
    in?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => [BacklogItemStatus], {nullable:true})
    notIn?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => NestedEnumBacklogItemStatusFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumBacklogItemStatusFilter>;
}

@InputType()
export class NestedEnumBacklogItemStatusWithAggregatesFilter {
    @Field(() => BacklogItemStatus, {nullable:true})
    equals?: keyof typeof BacklogItemStatus;
    @Field(() => [BacklogItemStatus], {nullable:true})
    in?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => [BacklogItemStatus], {nullable:true})
    notIn?: Array<keyof typeof BacklogItemStatus>;
    @Field(() => NestedEnumBacklogItemStatusWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumBacklogItemStatusWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumBacklogItemStatusFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumBacklogItemStatusFilter>;
    @Field(() => NestedEnumBacklogItemStatusFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumBacklogItemStatusFilter>;
}

@InputType()
export class NestedEnumMemberRoleFilter {
    @Field(() => MemberRole, {nullable:true})
    equals?: keyof typeof MemberRole;
    @Field(() => [MemberRole], {nullable:true})
    in?: Array<keyof typeof MemberRole>;
    @Field(() => [MemberRole], {nullable:true})
    notIn?: Array<keyof typeof MemberRole>;
    @Field(() => NestedEnumMemberRoleFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMemberRoleFilter>;
}

@InputType()
export class NestedEnumMemberRoleWithAggregatesFilter {
    @Field(() => MemberRole, {nullable:true})
    equals?: keyof typeof MemberRole;
    @Field(() => [MemberRole], {nullable:true})
    in?: Array<keyof typeof MemberRole>;
    @Field(() => [MemberRole], {nullable:true})
    notIn?: Array<keyof typeof MemberRole>;
    @Field(() => NestedEnumMemberRoleWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumMemberRoleWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumMemberRoleFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumMemberRoleFilter>;
    @Field(() => NestedEnumMemberRoleFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumMemberRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateProject {
    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregate>;
    @Field(() => ProjectAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProjectAvgAggregate>;
    @Field(() => ProjectSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProjectSumAggregate>;
    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregate>;
    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}

@ArgsType()
export class CreateManyProjectArgs {
    @Field(() => [ProjectCreateManyInput], {nullable:false})
    @Type(() => ProjectCreateManyInput)
    data!: Array<ProjectCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProjectArgs {
    @Field(() => ProjectCreateInput, {nullable:false})
    @Type(() => ProjectCreateInput)
    data!: InstanceType<typeof ProjectCreateInput>;
}

@ArgsType()
export class DeleteManyProjectArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
}

@ArgsType()
export class DeleteOneProjectArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProjectOrThrowArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}

@ArgsType()
export class FindFirstProjectArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}

@ArgsType()
export class FindManyProjectArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProjectOrThrowArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueProjectArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class ProjectAggregateArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithRelationInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    @Field(() => ProjectAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProjectAvgAggregateInput>;
    @Field(() => ProjectSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProjectSumAggregateInput>;
    @Field(() => ProjectMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}

@InputType()
export class ProjectAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}

@ObjectType()
export class ProjectAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    teamId?: number;
}

@InputType()
export class ProjectAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@InputType()
export class ProjectCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProjectCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    startDate!: number;
    @Field(() => Int, {nullable:false})
    targetDate!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProjectCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@ObjectType()
export class ProjectCount {
    @Field(() => Int, {nullable:false})
    stories?: number;
}

@InputType()
export class ProjectCreateManyTeamInputEnvelope {
    @Field(() => [ProjectCreateManyTeamInput], {nullable:false})
    @Type(() => ProjectCreateManyTeamInput)
    data!: Array<ProjectCreateManyTeamInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class ProjectCreateManyTeamInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class ProjectCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
}

@InputType()
export class ProjectCreateNestedManyWithoutTeamInput {
    @Field(() => [ProjectCreateWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTeamInput)
    create?: Array<ProjectCreateWithoutTeamInput>;
    @Field(() => [ProjectCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTeamInput>;
    @Field(() => ProjectCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyTeamInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateNestedOneWithoutStoriesInput {
    @Field(() => ProjectCreateWithoutStoriesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutStoriesInput)
    create?: InstanceType<typeof ProjectCreateWithoutStoriesInput>;
    @Field(() => ProjectCreateOrConnectWithoutStoriesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutStoriesInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutStoriesInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutStoriesInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutStoriesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutStoriesInput)
    create!: InstanceType<typeof ProjectCreateWithoutStoriesInput>;
}

@InputType()
export class ProjectCreateOrConnectWithoutTeamInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateWithoutTeamInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTeamInput)
    create!: InstanceType<typeof ProjectCreateWithoutTeamInput>;
}

@InputType()
export class ProjectCreateWithoutStoriesInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TeamCreateNestedOneWithoutProjectsInput, {nullable:false})
    team!: InstanceType<typeof TeamCreateNestedOneWithoutProjectsInput>;
}

@InputType()
export class ProjectCreateWithoutTeamInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => StoryCreateNestedManyWithoutProjectInput, {nullable:true})
    stories?: InstanceType<typeof StoryCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => StoryCreateNestedManyWithoutProjectInput, {nullable:true})
    stories?: InstanceType<typeof StoryCreateNestedManyWithoutProjectInput>;
    @Field(() => TeamCreateNestedOneWithoutProjectsInput, {nullable:false})
    team!: InstanceType<typeof TeamCreateNestedOneWithoutProjectsInput>;
}

@ArgsType()
export class ProjectGroupByArgs {
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => [ProjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProjectOrderByWithAggregationInput>;
    @Field(() => [ProjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ProjectScalarFieldEnum>;
    @Field(() => ProjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProjectScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProjectCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregateInput>;
    @Field(() => ProjectAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProjectAvgAggregateInput>;
    @Field(() => ProjectSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProjectSumAggregateInput>;
    @Field(() => ProjectMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregateInput>;
    @Field(() => ProjectMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregateInput>;
}

@ObjectType()
export class ProjectGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProjectCountAggregate>;
    @Field(() => ProjectAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ProjectAvgAggregate>;
    @Field(() => ProjectSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ProjectSumAggregate>;
    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProjectMinAggregate>;
    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxAggregate>;
}

@InputType()
export class ProjectListRelationFilter {
    @Field(() => ProjectWhereInput, {nullable:true})
    every?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    some?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    none?: InstanceType<typeof ProjectWhereInput>;
}

@InputType()
export class ProjectMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}

@ObjectType()
export class ProjectMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:true})
    teamId?: number;
}

@InputType()
export class ProjectMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@InputType()
export class ProjectMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}

@ObjectType()
export class ProjectMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:true})
    teamId?: number;
}

@InputType()
export class ProjectMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@InputType()
export class ProjectOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class ProjectOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => ProjectCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProjectCountOrderByAggregateInput>;
    @Field(() => ProjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ProjectAvgOrderByAggregateInput>;
    @Field(() => ProjectMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProjectMaxOrderByAggregateInput>;
    @Field(() => ProjectMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProjectMinOrderByAggregateInput>;
    @Field(() => ProjectSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ProjectSumOrderByAggregateInput>;
}

@InputType()
export class ProjectOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => StoryOrderByRelationAggregateInput, {nullable:true})
    stories?: InstanceType<typeof StoryOrderByRelationAggregateInput>;
    @Field(() => TeamOrderByWithRelationInput, {nullable:true})
    team?: InstanceType<typeof TeamOrderByWithRelationInput>;
}

@InputType()
export class ProjectRelationFilter {
    @Field(() => ProjectWhereInput, {nullable:true})
    is?: InstanceType<typeof ProjectWhereInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProjectWhereInput>;
}

@InputType()
export class ProjectScalarWhereWithAggregatesInput {
    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProjectScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProjectScalarWhereWithAggregatesInput>;
    @Field(() => [ProjectScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    teamId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class ProjectScalarWhereInput {
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    AND?: Array<ProjectScalarWhereInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    OR?: Array<ProjectScalarWhereInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    NOT?: Array<ProjectScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    teamId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class ProjectSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}

@ObjectType()
export class ProjectSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    teamId?: number;
}

@InputType()
export class ProjectSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@InputType()
export class ProjectUncheckedCreateNestedManyWithoutTeamInput {
    @Field(() => [ProjectCreateWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTeamInput)
    create?: Array<ProjectCreateWithoutTeamInput>;
    @Field(() => [ProjectCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTeamInput>;
    @Field(() => ProjectCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyTeamInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
}

@InputType()
export class ProjectUncheckedCreateWithoutStoriesInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
}

@InputType()
export class ProjectUncheckedCreateWithoutTeamInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => StoryUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    stories?: InstanceType<typeof StoryUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => StoryUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    stories?: InstanceType<typeof StoryUncheckedCreateNestedManyWithoutProjectInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyWithoutProjectsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyWithoutTeamNestedInput {
    @Field(() => [ProjectCreateWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTeamInput)
    create?: Array<ProjectCreateWithoutTeamInput>;
    @Field(() => [ProjectCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTeamInput>;
    @Field(() => [ProjectUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutTeamInput>;
    @Field(() => ProjectCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyTeamInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutTeamInput>;
    @Field(() => [ProjectUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutTeamInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}

@InputType()
export class ProjectUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutStoriesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUncheckedUpdateWithoutTeamInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StoryUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    stories?: InstanceType<typeof StoryUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StoryUncheckedUpdateManyWithoutProjectNestedInput, {nullable:true})
    stories?: InstanceType<typeof StoryUncheckedUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class ProjectUpdateManyWithWhereWithoutTeamInput {
    @Field(() => ProjectScalarWhereInput, {nullable:false})
    @Type(() => ProjectScalarWhereInput)
    where!: InstanceType<typeof ProjectScalarWhereInput>;
    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectUpdateManyMutationInput>;
}

@InputType()
export class ProjectUpdateManyWithoutTeamNestedInput {
    @Field(() => [ProjectCreateWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateWithoutTeamInput)
    create?: Array<ProjectCreateWithoutTeamInput>;
    @Field(() => [ProjectCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<ProjectCreateOrConnectWithoutTeamInput>;
    @Field(() => [ProjectUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => ProjectUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<ProjectUpsertWithWhereUniqueWithoutTeamInput>;
    @Field(() => ProjectCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => ProjectCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof ProjectCreateManyTeamInputEnvelope>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    set?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    disconnect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    delete?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectWhereUniqueInput], {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Array<ProjectWhereUniqueInput>;
    @Field(() => [ProjectUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => ProjectUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<ProjectUpdateWithWhereUniqueWithoutTeamInput>;
    @Field(() => [ProjectUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => ProjectUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<ProjectUpdateManyWithWhereWithoutTeamInput>;
    @Field(() => [ProjectScalarWhereInput], {nullable:true})
    @Type(() => ProjectScalarWhereInput)
    deleteMany?: Array<ProjectScalarWhereInput>;
}

@InputType()
export class ProjectUpdateOneRequiredWithoutStoriesNestedInput {
    @Field(() => ProjectCreateWithoutStoriesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutStoriesInput)
    create?: InstanceType<typeof ProjectCreateWithoutStoriesInput>;
    @Field(() => ProjectCreateOrConnectWithoutStoriesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutStoriesInput)
    connectOrCreate?: InstanceType<typeof ProjectCreateOrConnectWithoutStoriesInput>;
    @Field(() => ProjectUpsertWithoutStoriesInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutStoriesInput)
    upsert?: InstanceType<typeof ProjectUpsertWithoutStoriesInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutStoriesInput, {nullable:true})
    @Type(() => ProjectUpdateWithoutStoriesInput)
    update?: InstanceType<typeof ProjectUpdateWithoutStoriesInput>;
}

@InputType()
export class ProjectUpdateWithWhereUniqueWithoutTeamInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutTeamInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutTeamInput)
    data!: InstanceType<typeof ProjectUpdateWithoutTeamInput>;
}

@InputType()
export class ProjectUpdateWithoutStoriesInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => TeamUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    team?: InstanceType<typeof TeamUpdateOneRequiredWithoutProjectsNestedInput>;
}

@InputType()
export class ProjectUpdateWithoutTeamInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StoryUpdateManyWithoutProjectNestedInput, {nullable:true})
    stories?: InstanceType<typeof StoryUpdateManyWithoutProjectNestedInput>;
}

@InputType()
export class ProjectUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => StoryUpdateManyWithoutProjectNestedInput, {nullable:true})
    stories?: InstanceType<typeof StoryUpdateManyWithoutProjectNestedInput>;
    @Field(() => TeamUpdateOneRequiredWithoutProjectsNestedInput, {nullable:true})
    team?: InstanceType<typeof TeamUpdateOneRequiredWithoutProjectsNestedInput>;
}

@InputType()
export class ProjectUpsertWithWhereUniqueWithoutTeamInput {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectUpdateWithoutTeamInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutTeamInput)
    update!: InstanceType<typeof ProjectUpdateWithoutTeamInput>;
    @Field(() => ProjectCreateWithoutTeamInput, {nullable:false})
    @Type(() => ProjectCreateWithoutTeamInput)
    create!: InstanceType<typeof ProjectCreateWithoutTeamInput>;
}

@InputType()
export class ProjectUpsertWithoutStoriesInput {
    @Field(() => ProjectUpdateWithoutStoriesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutStoriesInput)
    update!: InstanceType<typeof ProjectUpdateWithoutStoriesInput>;
    @Field(() => ProjectCreateWithoutStoriesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutStoriesInput)
    create!: InstanceType<typeof ProjectCreateWithoutStoriesInput>;
}

@InputType()
export class ProjectWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class ProjectWhereInput {
    @Field(() => [ProjectWhereInput], {nullable:true})
    AND?: Array<ProjectWhereInput>;
    @Field(() => [ProjectWhereInput], {nullable:true})
    OR?: Array<ProjectWhereInput>;
    @Field(() => [ProjectWhereInput], {nullable:true})
    NOT?: Array<ProjectWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    teamId?: InstanceType<typeof IntFilter>;
    @Field(() => StoryListRelationFilter, {nullable:true})
    stories?: InstanceType<typeof StoryListRelationFilter>;
    @Field(() => TeamRelationFilter, {nullable:true})
    team?: InstanceType<typeof TeamRelationFilter>;
}

@ObjectType()
export class Project {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Date, {nullable:true})
    startDate!: Date | null;
    @Field(() => Date, {nullable:true})
    targetDate!: Date | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => [Story], {nullable:true})
    stories?: Array<Story>;
    @Field(() => Team, {nullable:false})
    team?: InstanceType<typeof Team>;
    @Field(() => ProjectCount, {nullable:false})
    _count?: InstanceType<typeof ProjectCount>;
}

@ArgsType()
export class UpdateManyProjectArgs {
    @Field(() => ProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectUpdateManyMutationInput)
    data!: InstanceType<typeof ProjectUpdateManyMutationInput>;
    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: InstanceType<typeof ProjectWhereInput>;
}

@ArgsType()
export class UpdateOneProjectArgs {
    @Field(() => ProjectUpdateInput, {nullable:false})
    @Type(() => ProjectUpdateInput)
    data!: InstanceType<typeof ProjectUpdateInput>;
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProjectArgs {
    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: InstanceType<typeof ProjectWhereUniqueInput>;
    @Field(() => ProjectCreateInput, {nullable:false})
    @Type(() => ProjectCreateInput)
    create!: InstanceType<typeof ProjectCreateInput>;
    @Field(() => ProjectUpdateInput, {nullable:false})
    @Type(() => ProjectUpdateInput)
    update!: InstanceType<typeof ProjectUpdateInput>;
}

@ObjectType()
export class AggregateStory {
    @Field(() => StoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StoryCountAggregate>;
    @Field(() => StoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof StoryAvgAggregate>;
    @Field(() => StorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof StorySumAggregate>;
    @Field(() => StoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StoryMinAggregate>;
    @Field(() => StoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StoryMaxAggregate>;
}

@ArgsType()
export class CreateManyStoryArgs {
    @Field(() => [StoryCreateManyInput], {nullable:false})
    @Type(() => StoryCreateManyInput)
    data!: Array<StoryCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneStoryArgs {
    @Field(() => StoryCreateInput, {nullable:false})
    @Type(() => StoryCreateInput)
    data!: InstanceType<typeof StoryCreateInput>;
}

@ArgsType()
export class DeleteManyStoryArgs {
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
}

@ArgsType()
export class DeleteOneStoryArgs {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
}

@ArgsType()
export class FindFirstStoryOrThrowArgs {
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
    @Field(() => [StoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithRelationInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StoryScalarFieldEnum>;
}

@ArgsType()
export class FindFirstStoryArgs {
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
    @Field(() => [StoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithRelationInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StoryScalarFieldEnum>;
}

@ArgsType()
export class FindManyStoryArgs {
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
    @Field(() => [StoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithRelationInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [StoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StoryScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueStoryOrThrowArgs {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueStoryArgs {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
}

@ArgsType()
export class StoryAggregateArgs {
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
    @Field(() => [StoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithRelationInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StoryCountAggregateInput>;
    @Field(() => StoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof StoryAvgAggregateInput>;
    @Field(() => StorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof StorySumAggregateInput>;
    @Field(() => StoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StoryMinAggregateInput>;
    @Field(() => StoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StoryMaxAggregateInput>;
}

@InputType()
export class StoryAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
}

@ObjectType()
export class StoryAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    projectId?: number;
}

@InputType()
export class StoryAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
}

@InputType()
export class StoryCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class StoryCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    startDate!: number;
    @Field(() => Int, {nullable:false})
    targetDate!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class StoryCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
}

@ObjectType()
export class StoryCount {
    @Field(() => Int, {nullable:false})
    backlogItems?: number;
}

@InputType()
export class StoryCreateManyProjectInputEnvelope {
    @Field(() => [StoryCreateManyProjectInput], {nullable:false})
    @Type(() => StoryCreateManyProjectInput)
    data!: Array<StoryCreateManyProjectInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class StoryCreateManyProjectInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class StoryCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    projectId!: number;
}

@InputType()
export class StoryCreateNestedManyWithoutProjectInput {
    @Field(() => [StoryCreateWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateWithoutProjectInput)
    create?: Array<StoryCreateWithoutProjectInput>;
    @Field(() => [StoryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<StoryCreateOrConnectWithoutProjectInput>;
    @Field(() => StoryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => StoryCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof StoryCreateManyProjectInputEnvelope>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    connect?: Array<StoryWhereUniqueInput>;
}

@InputType()
export class StoryCreateNestedOneWithoutBacklogItemsInput {
    @Field(() => StoryCreateWithoutBacklogItemsInput, {nullable:true})
    @Type(() => StoryCreateWithoutBacklogItemsInput)
    create?: InstanceType<typeof StoryCreateWithoutBacklogItemsInput>;
    @Field(() => StoryCreateOrConnectWithoutBacklogItemsInput, {nullable:true})
    @Type(() => StoryCreateOrConnectWithoutBacklogItemsInput)
    connectOrCreate?: InstanceType<typeof StoryCreateOrConnectWithoutBacklogItemsInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    connect?: InstanceType<typeof StoryWhereUniqueInput>;
}

@InputType()
export class StoryCreateOrConnectWithoutBacklogItemsInput {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => StoryCreateWithoutBacklogItemsInput, {nullable:false})
    @Type(() => StoryCreateWithoutBacklogItemsInput)
    create!: InstanceType<typeof StoryCreateWithoutBacklogItemsInput>;
}

@InputType()
export class StoryCreateOrConnectWithoutProjectInput {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => StoryCreateWithoutProjectInput, {nullable:false})
    @Type(() => StoryCreateWithoutProjectInput)
    create!: InstanceType<typeof StoryCreateWithoutProjectInput>;
}

@InputType()
export class StoryCreateWithoutBacklogItemsInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => ProjectCreateNestedOneWithoutStoriesInput, {nullable:false})
    project!: InstanceType<typeof ProjectCreateNestedOneWithoutStoriesInput>;
}

@InputType()
export class StoryCreateWithoutProjectInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemCreateNestedManyWithoutStoryInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemCreateNestedManyWithoutStoryInput>;
}

@InputType()
export class StoryCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemCreateNestedManyWithoutStoryInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemCreateNestedManyWithoutStoryInput>;
    @Field(() => ProjectCreateNestedOneWithoutStoriesInput, {nullable:false})
    project!: InstanceType<typeof ProjectCreateNestedOneWithoutStoriesInput>;
}

@ArgsType()
export class StoryGroupByArgs {
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
    @Field(() => [StoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StoryOrderByWithAggregationInput>;
    @Field(() => [StoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StoryScalarFieldEnum>;
    @Field(() => StoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof StoryScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => StoryCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StoryCountAggregateInput>;
    @Field(() => StoryAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof StoryAvgAggregateInput>;
    @Field(() => StorySumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof StorySumAggregateInput>;
    @Field(() => StoryMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StoryMinAggregateInput>;
    @Field(() => StoryMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StoryMaxAggregateInput>;
}

@ObjectType()
export class StoryGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => StoryCountAggregate, {nullable:true})
    _count?: InstanceType<typeof StoryCountAggregate>;
    @Field(() => StoryAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof StoryAvgAggregate>;
    @Field(() => StorySumAggregate, {nullable:true})
    _sum?: InstanceType<typeof StorySumAggregate>;
    @Field(() => StoryMinAggregate, {nullable:true})
    _min?: InstanceType<typeof StoryMinAggregate>;
    @Field(() => StoryMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof StoryMaxAggregate>;
}

@InputType()
export class StoryListRelationFilter {
    @Field(() => StoryWhereInput, {nullable:true})
    every?: InstanceType<typeof StoryWhereInput>;
    @Field(() => StoryWhereInput, {nullable:true})
    some?: InstanceType<typeof StoryWhereInput>;
    @Field(() => StoryWhereInput, {nullable:true})
    none?: InstanceType<typeof StoryWhereInput>;
}

@InputType()
export class StoryMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
}

@ObjectType()
export class StoryMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:true})
    projectId?: number;
}

@InputType()
export class StoryMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
}

@InputType()
export class StoryMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    startDate?: true;
    @Field(() => Boolean, {nullable:true})
    targetDate?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
}

@ObjectType()
export class StoryMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:true})
    projectId?: number;
}

@InputType()
export class StoryMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
}

@InputType()
export class StoryOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class StoryOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => StoryCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof StoryCountOrderByAggregateInput>;
    @Field(() => StoryAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof StoryAvgOrderByAggregateInput>;
    @Field(() => StoryMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof StoryMaxOrderByAggregateInput>;
    @Field(() => StoryMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof StoryMinOrderByAggregateInput>;
    @Field(() => StorySumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof StorySumOrderByAggregateInput>;
}

@InputType()
export class StoryOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    targetDate?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
    @Field(() => BacklogItemOrderByRelationAggregateInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemOrderByRelationAggregateInput>;
    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    project?: InstanceType<typeof ProjectOrderByWithRelationInput>;
}

@InputType()
export class StoryRelationFilter {
    @Field(() => StoryWhereInput, {nullable:true})
    is?: InstanceType<typeof StoryWhereInput>;
    @Field(() => StoryWhereInput, {nullable:true})
    isNot?: InstanceType<typeof StoryWhereInput>;
}

@InputType()
export class StoryScalarWhereWithAggregatesInput {
    @Field(() => [StoryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StoryScalarWhereWithAggregatesInput>;
    @Field(() => [StoryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StoryScalarWhereWithAggregatesInput>;
    @Field(() => [StoryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StoryScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class StoryScalarWhereInput {
    @Field(() => [StoryScalarWhereInput], {nullable:true})
    AND?: Array<StoryScalarWhereInput>;
    @Field(() => [StoryScalarWhereInput], {nullable:true})
    OR?: Array<StoryScalarWhereInput>;
    @Field(() => [StoryScalarWhereInput], {nullable:true})
    NOT?: Array<StoryScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    projectId?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StorySumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    projectId?: true;
}

@ObjectType()
export class StorySumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    projectId?: number;
}

@InputType()
export class StorySumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;
}

@InputType()
export class StoryUncheckedCreateNestedManyWithoutProjectInput {
    @Field(() => [StoryCreateWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateWithoutProjectInput)
    create?: Array<StoryCreateWithoutProjectInput>;
    @Field(() => [StoryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<StoryCreateOrConnectWithoutProjectInput>;
    @Field(() => StoryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => StoryCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof StoryCreateManyProjectInputEnvelope>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    connect?: Array<StoryWhereUniqueInput>;
}

@InputType()
export class StoryUncheckedCreateWithoutBacklogItemsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    projectId!: number;
}

@InputType()
export class StoryUncheckedCreateWithoutProjectInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => BacklogItemUncheckedCreateNestedManyWithoutStoryInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedCreateNestedManyWithoutStoryInput>;
}

@InputType()
export class StoryUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Date, {nullable:true})
    startDate?: Date | string;
    @Field(() => Date, {nullable:true})
    targetDate?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => BacklogItemUncheckedCreateNestedManyWithoutStoryInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedCreateNestedManyWithoutStoryInput>;
}

@InputType()
export class StoryUncheckedUpdateManyWithoutProjectNestedInput {
    @Field(() => [StoryCreateWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateWithoutProjectInput)
    create?: Array<StoryCreateWithoutProjectInput>;
    @Field(() => [StoryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<StoryCreateOrConnectWithoutProjectInput>;
    @Field(() => [StoryUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => StoryUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<StoryUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => StoryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => StoryCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof StoryCreateManyProjectInputEnvelope>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    set?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    disconnect?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    delete?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    connect?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => StoryUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<StoryUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [StoryUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => StoryUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<StoryUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [StoryScalarWhereInput], {nullable:true})
    @Type(() => StoryScalarWhereInput)
    deleteMany?: Array<StoryScalarWhereInput>;
}

@InputType()
export class StoryUncheckedUpdateManyWithoutStoriesInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class StoryUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class StoryUncheckedUpdateWithoutBacklogItemsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class StoryUncheckedUpdateWithoutProjectInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUncheckedUpdateManyWithoutStoryNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedUpdateManyWithoutStoryNestedInput>;
}

@InputType()
export class StoryUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    projectId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUncheckedUpdateManyWithoutStoryNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedUpdateManyWithoutStoryNestedInput>;
}

@InputType()
export class StoryUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class StoryUpdateManyWithWhereWithoutProjectInput {
    @Field(() => StoryScalarWhereInput, {nullable:false})
    @Type(() => StoryScalarWhereInput)
    where!: InstanceType<typeof StoryScalarWhereInput>;
    @Field(() => StoryUpdateManyMutationInput, {nullable:false})
    @Type(() => StoryUpdateManyMutationInput)
    data!: InstanceType<typeof StoryUpdateManyMutationInput>;
}

@InputType()
export class StoryUpdateManyWithoutProjectNestedInput {
    @Field(() => [StoryCreateWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateWithoutProjectInput)
    create?: Array<StoryCreateWithoutProjectInput>;
    @Field(() => [StoryCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => StoryCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<StoryCreateOrConnectWithoutProjectInput>;
    @Field(() => [StoryUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => StoryUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<StoryUpsertWithWhereUniqueWithoutProjectInput>;
    @Field(() => StoryCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => StoryCreateManyProjectInputEnvelope)
    createMany?: InstanceType<typeof StoryCreateManyProjectInputEnvelope>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    set?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    disconnect?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    delete?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryWhereUniqueInput], {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    connect?: Array<StoryWhereUniqueInput>;
    @Field(() => [StoryUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => StoryUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<StoryUpdateWithWhereUniqueWithoutProjectInput>;
    @Field(() => [StoryUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => StoryUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<StoryUpdateManyWithWhereWithoutProjectInput>;
    @Field(() => [StoryScalarWhereInput], {nullable:true})
    @Type(() => StoryScalarWhereInput)
    deleteMany?: Array<StoryScalarWhereInput>;
}

@InputType()
export class StoryUpdateOneRequiredWithoutBacklogItemsNestedInput {
    @Field(() => StoryCreateWithoutBacklogItemsInput, {nullable:true})
    @Type(() => StoryCreateWithoutBacklogItemsInput)
    create?: InstanceType<typeof StoryCreateWithoutBacklogItemsInput>;
    @Field(() => StoryCreateOrConnectWithoutBacklogItemsInput, {nullable:true})
    @Type(() => StoryCreateOrConnectWithoutBacklogItemsInput)
    connectOrCreate?: InstanceType<typeof StoryCreateOrConnectWithoutBacklogItemsInput>;
    @Field(() => StoryUpsertWithoutBacklogItemsInput, {nullable:true})
    @Type(() => StoryUpsertWithoutBacklogItemsInput)
    upsert?: InstanceType<typeof StoryUpsertWithoutBacklogItemsInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:true})
    @Type(() => StoryWhereUniqueInput)
    connect?: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => StoryUpdateWithoutBacklogItemsInput, {nullable:true})
    @Type(() => StoryUpdateWithoutBacklogItemsInput)
    update?: InstanceType<typeof StoryUpdateWithoutBacklogItemsInput>;
}

@InputType()
export class StoryUpdateWithWhereUniqueWithoutProjectInput {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => StoryUpdateWithoutProjectInput, {nullable:false})
    @Type(() => StoryUpdateWithoutProjectInput)
    data!: InstanceType<typeof StoryUpdateWithoutProjectInput>;
}

@InputType()
export class StoryUpdateWithoutBacklogItemsInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateOneRequiredWithoutStoriesNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneRequiredWithoutStoriesNestedInput>;
}

@InputType()
export class StoryUpdateWithoutProjectInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUpdateManyWithoutStoryNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUpdateManyWithoutStoryNestedInput>;
}

@InputType()
export class StoryUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    targetDate?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUpdateManyWithoutStoryNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUpdateManyWithoutStoryNestedInput>;
    @Field(() => ProjectUpdateOneRequiredWithoutStoriesNestedInput, {nullable:true})
    project?: InstanceType<typeof ProjectUpdateOneRequiredWithoutStoriesNestedInput>;
}

@InputType()
export class StoryUpsertWithWhereUniqueWithoutProjectInput {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => StoryUpdateWithoutProjectInput, {nullable:false})
    @Type(() => StoryUpdateWithoutProjectInput)
    update!: InstanceType<typeof StoryUpdateWithoutProjectInput>;
    @Field(() => StoryCreateWithoutProjectInput, {nullable:false})
    @Type(() => StoryCreateWithoutProjectInput)
    create!: InstanceType<typeof StoryCreateWithoutProjectInput>;
}

@InputType()
export class StoryUpsertWithoutBacklogItemsInput {
    @Field(() => StoryUpdateWithoutBacklogItemsInput, {nullable:false})
    @Type(() => StoryUpdateWithoutBacklogItemsInput)
    update!: InstanceType<typeof StoryUpdateWithoutBacklogItemsInput>;
    @Field(() => StoryCreateWithoutBacklogItemsInput, {nullable:false})
    @Type(() => StoryCreateWithoutBacklogItemsInput)
    create!: InstanceType<typeof StoryCreateWithoutBacklogItemsInput>;
}

@InputType()
export class StoryWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class StoryWhereInput {
    @Field(() => [StoryWhereInput], {nullable:true})
    AND?: Array<StoryWhereInput>;
    @Field(() => [StoryWhereInput], {nullable:true})
    OR?: Array<StoryWhereInput>;
    @Field(() => [StoryWhereInput], {nullable:true})
    NOT?: Array<StoryWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => DateTimeNullableFilter, {nullable:true})
    targetDate?: InstanceType<typeof DateTimeNullableFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => IntFilter, {nullable:true})
    projectId?: InstanceType<typeof IntFilter>;
    @Field(() => BacklogItemListRelationFilter, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemListRelationFilter>;
    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: InstanceType<typeof ProjectRelationFilter>;
}

@ObjectType()
export class Story {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Date, {nullable:true})
    startDate!: Date | null;
    @Field(() => Date, {nullable:true})
    targetDate!: Date | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Int, {nullable:false})
    projectId!: number;
    @Field(() => [BacklogItem], {nullable:true})
    backlogItems?: Array<BacklogItem>;
    @Field(() => Project, {nullable:false})
    project?: InstanceType<typeof Project>;
    @Field(() => StoryCount, {nullable:false})
    _count?: InstanceType<typeof StoryCount>;
}

@ArgsType()
export class UpdateManyStoryArgs {
    @Field(() => StoryUpdateManyMutationInput, {nullable:false})
    @Type(() => StoryUpdateManyMutationInput)
    data!: InstanceType<typeof StoryUpdateManyMutationInput>;
    @Field(() => StoryWhereInput, {nullable:true})
    @Type(() => StoryWhereInput)
    where?: InstanceType<typeof StoryWhereInput>;
}

@ArgsType()
export class UpdateOneStoryArgs {
    @Field(() => StoryUpdateInput, {nullable:false})
    @Type(() => StoryUpdateInput)
    data!: InstanceType<typeof StoryUpdateInput>;
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneStoryArgs {
    @Field(() => StoryWhereUniqueInput, {nullable:false})
    @Type(() => StoryWhereUniqueInput)
    where!: InstanceType<typeof StoryWhereUniqueInput>;
    @Field(() => StoryCreateInput, {nullable:false})
    @Type(() => StoryCreateInput)
    create!: InstanceType<typeof StoryCreateInput>;
    @Field(() => StoryUpdateInput, {nullable:false})
    @Type(() => StoryUpdateInput)
    update!: InstanceType<typeof StoryUpdateInput>;
}

@ObjectType()
export class AggregateTeam {
    @Field(() => TeamCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TeamCountAggregate>;
    @Field(() => TeamAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TeamAvgAggregate>;
    @Field(() => TeamSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TeamSumAggregate>;
    @Field(() => TeamMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TeamMinAggregate>;
    @Field(() => TeamMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TeamMaxAggregate>;
}

@ArgsType()
export class CreateManyTeamArgs {
    @Field(() => [TeamCreateManyInput], {nullable:false})
    @Type(() => TeamCreateManyInput)
    data!: Array<TeamCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTeamArgs {
    @Field(() => TeamCreateInput, {nullable:false})
    @Type(() => TeamCreateInput)
    data!: InstanceType<typeof TeamCreateInput>;
}

@ArgsType()
export class DeleteManyTeamArgs {
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
}

@ArgsType()
export class DeleteOneTeamArgs {
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTeamOrThrowArgs {
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
    @Field(() => [TeamOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithRelationInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TeamScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamScalarFieldEnum>;
}

@ArgsType()
export class FindFirstTeamArgs {
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
    @Field(() => [TeamOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithRelationInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TeamScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamScalarFieldEnum>;
}

@ArgsType()
export class FindManyTeamArgs {
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
    @Field(() => [TeamOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithRelationInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TeamScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTeamOrThrowArgs {
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueTeamArgs {
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
}

@ArgsType()
export class TeamAggregateArgs {
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
    @Field(() => [TeamOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithRelationInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TeamCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TeamCountAggregateInput>;
    @Field(() => TeamAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TeamAvgAggregateInput>;
    @Field(() => TeamSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TeamSumAggregateInput>;
    @Field(() => TeamMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TeamMinAggregateInput>;
    @Field(() => TeamMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TeamMaxAggregateInput>;
}

@InputType()
export class TeamAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class TeamAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class TeamAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class TeamCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TeamCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TeamCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@ObjectType()
export class TeamCount {
    @Field(() => Int, {nullable:false})
    members?: number;
    @Field(() => Int, {nullable:false})
    projects?: number;
}

@InputType()
export class TeamCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class TeamCreateNestedOneWithoutMembersInput {
    @Field(() => TeamCreateWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateWithoutMembersInput)
    create?: InstanceType<typeof TeamCreateWithoutMembersInput>;
    @Field(() => TeamCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutMembersInput)
    connectOrCreate?: InstanceType<typeof TeamCreateOrConnectWithoutMembersInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: InstanceType<typeof TeamWhereUniqueInput>;
}

@InputType()
export class TeamCreateNestedOneWithoutProjectsInput {
    @Field(() => TeamCreateWithoutProjectsInput, {nullable:true})
    @Type(() => TeamCreateWithoutProjectsInput)
    create?: InstanceType<typeof TeamCreateWithoutProjectsInput>;
    @Field(() => TeamCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: InstanceType<typeof TeamCreateOrConnectWithoutProjectsInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: InstanceType<typeof TeamWhereUniqueInput>;
}

@InputType()
export class TeamCreateOrConnectWithoutMembersInput {
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => TeamCreateWithoutMembersInput, {nullable:false})
    @Type(() => TeamCreateWithoutMembersInput)
    create!: InstanceType<typeof TeamCreateWithoutMembersInput>;
}

@InputType()
export class TeamCreateOrConnectWithoutProjectsInput {
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => TeamCreateWithoutProjectsInput, {nullable:false})
    @Type(() => TeamCreateWithoutProjectsInput)
    create!: InstanceType<typeof TeamCreateWithoutProjectsInput>;
}

@InputType()
export class TeamCreateWithoutMembersInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => ProjectCreateNestedManyWithoutTeamInput, {nullable:true})
    projects?: InstanceType<typeof ProjectCreateNestedManyWithoutTeamInput>;
}

@InputType()
export class TeamCreateWithoutProjectsInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TeamMemberCreateNestedManyWithoutTeamInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberCreateNestedManyWithoutTeamInput>;
}

@InputType()
export class TeamCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TeamMemberCreateNestedManyWithoutTeamInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberCreateNestedManyWithoutTeamInput>;
    @Field(() => ProjectCreateNestedManyWithoutTeamInput, {nullable:true})
    projects?: InstanceType<typeof ProjectCreateNestedManyWithoutTeamInput>;
}

@ArgsType()
export class TeamGroupByArgs {
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
    @Field(() => [TeamOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TeamOrderByWithAggregationInput>;
    @Field(() => [TeamScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TeamScalarFieldEnum>;
    @Field(() => TeamScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TeamScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TeamCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TeamCountAggregateInput>;
    @Field(() => TeamAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TeamAvgAggregateInput>;
    @Field(() => TeamSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TeamSumAggregateInput>;
    @Field(() => TeamMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TeamMinAggregateInput>;
    @Field(() => TeamMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TeamMaxAggregateInput>;
}

@ObjectType()
export class TeamGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TeamCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TeamCountAggregate>;
    @Field(() => TeamAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TeamAvgAggregate>;
    @Field(() => TeamSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TeamSumAggregate>;
    @Field(() => TeamMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TeamMinAggregate>;
    @Field(() => TeamMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TeamMaxAggregate>;
}

@InputType()
export class TeamMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
}

@ObjectType()
export class TeamMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class TeamMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@InputType()
export class TeamMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
}

@ObjectType()
export class TeamMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class TeamMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
}

@InputType()
export class TeamOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => TeamCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TeamCountOrderByAggregateInput>;
    @Field(() => TeamAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TeamAvgOrderByAggregateInput>;
    @Field(() => TeamMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TeamMaxOrderByAggregateInput>;
    @Field(() => TeamMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TeamMinOrderByAggregateInput>;
    @Field(() => TeamSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TeamSumOrderByAggregateInput>;
}

@InputType()
export class TeamOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => TeamMemberOrderByRelationAggregateInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberOrderByRelationAggregateInput>;
    @Field(() => ProjectOrderByRelationAggregateInput, {nullable:true})
    projects?: InstanceType<typeof ProjectOrderByRelationAggregateInput>;
}

@InputType()
export class TeamRelationFilter {
    @Field(() => TeamWhereInput, {nullable:true})
    is?: InstanceType<typeof TeamWhereInput>;
    @Field(() => TeamWhereInput, {nullable:true})
    isNot?: InstanceType<typeof TeamWhereInput>;
}

@InputType()
export class TeamScalarWhereWithAggregatesInput {
    @Field(() => [TeamScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TeamScalarWhereWithAggregatesInput>;
    @Field(() => [TeamScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TeamScalarWhereWithAggregatesInput>;
    @Field(() => [TeamScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TeamScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class TeamSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class TeamSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class TeamSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class TeamUncheckedCreateWithoutMembersInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => ProjectUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    projects?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutTeamInput>;
}

@InputType()
export class TeamUncheckedCreateWithoutProjectsInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TeamMemberUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberUncheckedCreateNestedManyWithoutTeamInput>;
}

@InputType()
export class TeamUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => TeamMemberUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberUncheckedCreateNestedManyWithoutTeamInput>;
    @Field(() => ProjectUncheckedCreateNestedManyWithoutTeamInput, {nullable:true})
    projects?: InstanceType<typeof ProjectUncheckedCreateNestedManyWithoutTeamInput>;
}

@InputType()
export class TeamUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamUncheckedUpdateWithoutMembersInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProjectUncheckedUpdateManyWithoutTeamNestedInput, {nullable:true})
    projects?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutTeamNestedInput>;
}

@InputType()
export class TeamUncheckedUpdateWithoutProjectsInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => TeamMemberUncheckedUpdateManyWithoutTeamNestedInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberUncheckedUpdateManyWithoutTeamNestedInput>;
}

@InputType()
export class TeamUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => TeamMemberUncheckedUpdateManyWithoutTeamNestedInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberUncheckedUpdateManyWithoutTeamNestedInput>;
    @Field(() => ProjectUncheckedUpdateManyWithoutTeamNestedInput, {nullable:true})
    projects?: InstanceType<typeof ProjectUncheckedUpdateManyWithoutTeamNestedInput>;
}

@InputType()
export class TeamUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamUpdateOneRequiredWithoutMembersNestedInput {
    @Field(() => TeamCreateWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateWithoutMembersInput)
    create?: InstanceType<typeof TeamCreateWithoutMembersInput>;
    @Field(() => TeamCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutMembersInput)
    connectOrCreate?: InstanceType<typeof TeamCreateOrConnectWithoutMembersInput>;
    @Field(() => TeamUpsertWithoutMembersInput, {nullable:true})
    @Type(() => TeamUpsertWithoutMembersInput)
    upsert?: InstanceType<typeof TeamUpsertWithoutMembersInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => TeamUpdateWithoutMembersInput, {nullable:true})
    @Type(() => TeamUpdateWithoutMembersInput)
    update?: InstanceType<typeof TeamUpdateWithoutMembersInput>;
}

@InputType()
export class TeamUpdateOneRequiredWithoutProjectsNestedInput {
    @Field(() => TeamCreateWithoutProjectsInput, {nullable:true})
    @Type(() => TeamCreateWithoutProjectsInput)
    create?: InstanceType<typeof TeamCreateWithoutProjectsInput>;
    @Field(() => TeamCreateOrConnectWithoutProjectsInput, {nullable:true})
    @Type(() => TeamCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: InstanceType<typeof TeamCreateOrConnectWithoutProjectsInput>;
    @Field(() => TeamUpsertWithoutProjectsInput, {nullable:true})
    @Type(() => TeamUpsertWithoutProjectsInput)
    upsert?: InstanceType<typeof TeamUpsertWithoutProjectsInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:true})
    @Type(() => TeamWhereUniqueInput)
    connect?: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => TeamUpdateWithoutProjectsInput, {nullable:true})
    @Type(() => TeamUpdateWithoutProjectsInput)
    update?: InstanceType<typeof TeamUpdateWithoutProjectsInput>;
}

@InputType()
export class TeamUpdateWithoutMembersInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ProjectUpdateManyWithoutTeamNestedInput, {nullable:true})
    projects?: InstanceType<typeof ProjectUpdateManyWithoutTeamNestedInput>;
}

@InputType()
export class TeamUpdateWithoutProjectsInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => TeamMemberUpdateManyWithoutTeamNestedInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberUpdateManyWithoutTeamNestedInput>;
}

@InputType()
export class TeamUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => TeamMemberUpdateManyWithoutTeamNestedInput, {nullable:true})
    members?: InstanceType<typeof TeamMemberUpdateManyWithoutTeamNestedInput>;
    @Field(() => ProjectUpdateManyWithoutTeamNestedInput, {nullable:true})
    projects?: InstanceType<typeof ProjectUpdateManyWithoutTeamNestedInput>;
}

@InputType()
export class TeamUpsertWithoutMembersInput {
    @Field(() => TeamUpdateWithoutMembersInput, {nullable:false})
    @Type(() => TeamUpdateWithoutMembersInput)
    update!: InstanceType<typeof TeamUpdateWithoutMembersInput>;
    @Field(() => TeamCreateWithoutMembersInput, {nullable:false})
    @Type(() => TeamCreateWithoutMembersInput)
    create!: InstanceType<typeof TeamCreateWithoutMembersInput>;
}

@InputType()
export class TeamUpsertWithoutProjectsInput {
    @Field(() => TeamUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => TeamUpdateWithoutProjectsInput)
    update!: InstanceType<typeof TeamUpdateWithoutProjectsInput>;
    @Field(() => TeamCreateWithoutProjectsInput, {nullable:false})
    @Type(() => TeamCreateWithoutProjectsInput)
    create!: InstanceType<typeof TeamCreateWithoutProjectsInput>;
}

@InputType()
export class TeamWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class TeamWhereInput {
    @Field(() => [TeamWhereInput], {nullable:true})
    AND?: Array<TeamWhereInput>;
    @Field(() => [TeamWhereInput], {nullable:true})
    OR?: Array<TeamWhereInput>;
    @Field(() => [TeamWhereInput], {nullable:true})
    NOT?: Array<TeamWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => TeamMemberListRelationFilter, {nullable:true})
    members?: InstanceType<typeof TeamMemberListRelationFilter>;
    @Field(() => ProjectListRelationFilter, {nullable:true})
    projects?: InstanceType<typeof ProjectListRelationFilter>;
}

@ObjectType()
export class Team {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => [TeamMember], {nullable:true})
    members?: Array<TeamMember>;
    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;
    @Field(() => TeamCount, {nullable:false})
    _count?: InstanceType<typeof TeamCount>;
}

@ArgsType()
export class UpdateManyTeamArgs {
    @Field(() => TeamUpdateManyMutationInput, {nullable:false})
    @Type(() => TeamUpdateManyMutationInput)
    data!: InstanceType<typeof TeamUpdateManyMutationInput>;
    @Field(() => TeamWhereInput, {nullable:true})
    @Type(() => TeamWhereInput)
    where?: InstanceType<typeof TeamWhereInput>;
}

@ArgsType()
export class UpdateOneTeamArgs {
    @Field(() => TeamUpdateInput, {nullable:false})
    @Type(() => TeamUpdateInput)
    data!: InstanceType<typeof TeamUpdateInput>;
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTeamArgs {
    @Field(() => TeamWhereUniqueInput, {nullable:false})
    @Type(() => TeamWhereUniqueInput)
    where!: InstanceType<typeof TeamWhereUniqueInput>;
    @Field(() => TeamCreateInput, {nullable:false})
    @Type(() => TeamCreateInput)
    create!: InstanceType<typeof TeamCreateInput>;
    @Field(() => TeamUpdateInput, {nullable:false})
    @Type(() => TeamUpdateInput)
    update!: InstanceType<typeof TeamUpdateInput>;
}

@ObjectType()
export class AggregateTeamMember {
    @Field(() => TeamMemberCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TeamMemberCountAggregate>;
    @Field(() => TeamMemberAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TeamMemberAvgAggregate>;
    @Field(() => TeamMemberSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TeamMemberSumAggregate>;
    @Field(() => TeamMemberMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TeamMemberMinAggregate>;
    @Field(() => TeamMemberMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TeamMemberMaxAggregate>;
}

@ArgsType()
export class CreateManyTeamMemberArgs {
    @Field(() => [TeamMemberCreateManyInput], {nullable:false})
    @Type(() => TeamMemberCreateManyInput)
    data!: Array<TeamMemberCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTeamMemberArgs {
    @Field(() => TeamMemberCreateInput, {nullable:false})
    @Type(() => TeamMemberCreateInput)
    data!: InstanceType<typeof TeamMemberCreateInput>;
}

@ArgsType()
export class DeleteManyTeamMemberArgs {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
}

@ArgsType()
export class DeleteOneTeamMemberArgs {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
}

@ArgsType()
export class FindFirstTeamMemberOrThrowArgs {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => [TeamMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamMemberOrderByWithRelationInput>;
    @Field(() => TeamMemberWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TeamMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamMemberScalarFieldEnum>;
}

@ArgsType()
export class FindFirstTeamMemberArgs {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => [TeamMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamMemberOrderByWithRelationInput>;
    @Field(() => TeamMemberWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TeamMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamMemberScalarFieldEnum>;
}

@ArgsType()
export class FindManyTeamMemberArgs {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => [TeamMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamMemberOrderByWithRelationInput>;
    @Field(() => TeamMemberWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TeamMemberScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TeamMemberScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTeamMemberOrThrowArgs {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueTeamMemberArgs {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
}

@ArgsType()
export class TeamMemberAggregateArgs {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => [TeamMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TeamMemberOrderByWithRelationInput>;
    @Field(() => TeamMemberWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TeamMemberCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TeamMemberCountAggregateInput>;
    @Field(() => TeamMemberAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TeamMemberAvgAggregateInput>;
    @Field(() => TeamMemberSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TeamMemberSumAggregateInput>;
    @Field(() => TeamMemberMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TeamMemberMinAggregateInput>;
    @Field(() => TeamMemberMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TeamMemberMaxAggregateInput>;
}

@InputType()
export class TeamMemberAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}

@ObjectType()
export class TeamMemberAvgAggregate {
    @Field(() => Float, {nullable:true})
    teamId?: number;
}

@InputType()
export class TeamMemberAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@InputType()
export class TeamMemberCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    color?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TeamMemberCountAggregate {
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    color!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TeamMemberCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class TeamMemberCreateManyTeamInputEnvelope {
    @Field(() => [TeamMemberCreateManyTeamInput], {nullable:false})
    @Type(() => TeamMemberCreateManyTeamInput)
    data!: Array<TeamMemberCreateManyTeamInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TeamMemberCreateManyTeamInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
}

@InputType()
export class TeamMemberCreateManyUserInputEnvelope {
    @Field(() => [TeamMemberCreateManyUserInput], {nullable:false})
    @Type(() => TeamMemberCreateManyUserInput)
    data!: Array<TeamMemberCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TeamMemberCreateManyUserInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
}

@InputType()
export class TeamMemberCreateManyInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
}

@InputType()
export class TeamMemberCreateNestedManyWithoutTeamInput {
    @Field(() => [TeamMemberCreateWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutTeamInput)
    create?: Array<TeamMemberCreateWithoutTeamInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutTeamInput>;
    @Field(() => TeamMemberCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyTeamInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
}

@InputType()
export class TeamMemberCreateNestedManyWithoutUserInput {
    @Field(() => [TeamMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutUserInput)
    create?: Array<TeamMemberCreateWithoutUserInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutUserInput>;
    @Field(() => TeamMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyUserInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
}

@InputType()
export class TeamMemberCreateOrConnectWithoutTeamInput {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberCreateWithoutTeamInput, {nullable:false})
    @Type(() => TeamMemberCreateWithoutTeamInput)
    create!: InstanceType<typeof TeamMemberCreateWithoutTeamInput>;
}

@InputType()
export class TeamMemberCreateOrConnectWithoutUserInput {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => TeamMemberCreateWithoutUserInput)
    create!: InstanceType<typeof TeamMemberCreateWithoutUserInput>;
}

@InputType()
export class TeamMemberCreateWithoutTeamInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
    @Field(() => UserCreateNestedOneWithoutTeamsInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutTeamsInput>;
}

@InputType()
export class TeamMemberCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
    @Field(() => TeamCreateNestedOneWithoutMembersInput, {nullable:false})
    team!: InstanceType<typeof TeamCreateNestedOneWithoutMembersInput>;
}

@InputType()
export class TeamMemberCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
    @Field(() => TeamCreateNestedOneWithoutMembersInput, {nullable:false})
    team!: InstanceType<typeof TeamCreateNestedOneWithoutMembersInput>;
    @Field(() => UserCreateNestedOneWithoutTeamsInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutTeamsInput>;
}

@ArgsType()
export class TeamMemberGroupByArgs {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => [TeamMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TeamMemberOrderByWithAggregationInput>;
    @Field(() => [TeamMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TeamMemberScalarFieldEnum>;
    @Field(() => TeamMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TeamMemberScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TeamMemberCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TeamMemberCountAggregateInput>;
    @Field(() => TeamMemberAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TeamMemberAvgAggregateInput>;
    @Field(() => TeamMemberSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TeamMemberSumAggregateInput>;
    @Field(() => TeamMemberMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TeamMemberMinAggregateInput>;
    @Field(() => TeamMemberMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TeamMemberMaxAggregateInput>;
}

@ObjectType()
export class TeamMemberGroupBy {
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => MemberRole, {nullable:false})
    role!: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
    @Field(() => TeamMemberCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TeamMemberCountAggregate>;
    @Field(() => TeamMemberAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TeamMemberAvgAggregate>;
    @Field(() => TeamMemberSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TeamMemberSumAggregate>;
    @Field(() => TeamMemberMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TeamMemberMinAggregate>;
    @Field(() => TeamMemberMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TeamMemberMaxAggregate>;
}

@InputType()
export class TeamMemberListRelationFilter {
    @Field(() => TeamMemberWhereInput, {nullable:true})
    every?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => TeamMemberWhereInput, {nullable:true})
    some?: InstanceType<typeof TeamMemberWhereInput>;
    @Field(() => TeamMemberWhereInput, {nullable:true})
    none?: InstanceType<typeof TeamMemberWhereInput>;
}

@InputType()
export class TeamMemberMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    color?: true;
}

@ObjectType()
export class TeamMemberMaxAggregate {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    teamId?: number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:true})
    color?: string;
}

@InputType()
export class TeamMemberMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class TeamMemberMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    role?: true;
    @Field(() => Boolean, {nullable:true})
    color?: true;
}

@ObjectType()
export class TeamMemberMinAggregate {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:true})
    teamId?: number;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:true})
    color?: string;
}

@InputType()
export class TeamMemberMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class TeamMemberOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TeamMemberOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
    @Field(() => TeamMemberCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TeamMemberCountOrderByAggregateInput>;
    @Field(() => TeamMemberAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TeamMemberAvgOrderByAggregateInput>;
    @Field(() => TeamMemberMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TeamMemberMaxOrderByAggregateInput>;
    @Field(() => TeamMemberMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TeamMemberMinOrderByAggregateInput>;
    @Field(() => TeamMemberSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TeamMemberSumOrderByAggregateInput>;
}

@InputType()
export class TeamMemberOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
    @Field(() => TeamOrderByWithRelationInput, {nullable:true})
    team?: InstanceType<typeof TeamOrderByWithRelationInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class TeamMemberScalarWhereWithAggregatesInput {
    @Field(() => [TeamMemberScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TeamMemberScalarWhereWithAggregatesInput>;
    @Field(() => [TeamMemberScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TeamMemberScalarWhereWithAggregatesInput>;
    @Field(() => [TeamMemberScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TeamMemberScalarWhereWithAggregatesInput>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    teamId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumMemberRoleWithAggregatesFilter, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    color?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class TeamMemberScalarWhereInput {
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    AND?: Array<TeamMemberScalarWhereInput>;
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    OR?: Array<TeamMemberScalarWhereInput>;
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    NOT?: Array<TeamMemberScalarWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    teamId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMemberRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    color?: InstanceType<typeof StringFilter>;
}

@InputType()
export class TeamMemberSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    teamId?: true;
}

@ObjectType()
export class TeamMemberSumAggregate {
    @Field(() => Int, {nullable:true})
    teamId?: number;
}

@InputType()
export class TeamMemberSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    teamId?: keyof typeof SortOrder;
}

@InputType()
export class TeamMemberTeamIdUserIdCompoundUniqueInput {
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => String, {nullable:false})
    userId!: string;
}

@InputType()
export class TeamMemberUncheckedCreateNestedManyWithoutTeamInput {
    @Field(() => [TeamMemberCreateWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutTeamInput)
    create?: Array<TeamMemberCreateWithoutTeamInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutTeamInput>;
    @Field(() => TeamMemberCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyTeamInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
}

@InputType()
export class TeamMemberUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [TeamMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutUserInput)
    create?: Array<TeamMemberCreateWithoutUserInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutUserInput>;
    @Field(() => TeamMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyUserInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
}

@InputType()
export class TeamMemberUncheckedCreateWithoutTeamInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
}

@InputType()
export class TeamMemberUncheckedCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
}

@InputType()
export class TeamMemberUncheckedCreateInput {
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => MemberRole, {nullable:true})
    role?: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
}

@InputType()
export class TeamMemberUncheckedUpdateManyWithoutMembersInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateManyWithoutTeamNestedInput {
    @Field(() => [TeamMemberCreateWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutTeamInput)
    create?: Array<TeamMemberCreateWithoutTeamInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutTeamInput>;
    @Field(() => [TeamMemberUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>;
    @Field(() => TeamMemberCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyTeamInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    set?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    disconnect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    delete?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>;
    @Field(() => [TeamMemberUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<TeamMemberUpdateManyWithWhereWithoutTeamInput>;
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    @Type(() => TeamMemberScalarWhereInput)
    deleteMany?: Array<TeamMemberScalarWhereInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateManyWithoutTeamsInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [TeamMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutUserInput)
    create?: Array<TeamMemberCreateWithoutUserInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutUserInput>;
    @Field(() => [TeamMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TeamMemberUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => TeamMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyUserInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    set?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    disconnect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    delete?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TeamMemberUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [TeamMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TeamMemberUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    @Type(() => TeamMemberScalarWhereInput)
    deleteMany?: Array<TeamMemberScalarWhereInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateManyInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateWithoutTeamInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateWithoutUserInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUncheckedUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    teamId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TeamMemberUpdateManyWithWhereWithoutTeamInput {
    @Field(() => TeamMemberScalarWhereInput, {nullable:false})
    @Type(() => TeamMemberScalarWhereInput)
    where!: InstanceType<typeof TeamMemberScalarWhereInput>;
    @Field(() => TeamMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => TeamMemberUpdateManyMutationInput)
    data!: InstanceType<typeof TeamMemberUpdateManyMutationInput>;
}

@InputType()
export class TeamMemberUpdateManyWithWhereWithoutUserInput {
    @Field(() => TeamMemberScalarWhereInput, {nullable:false})
    @Type(() => TeamMemberScalarWhereInput)
    where!: InstanceType<typeof TeamMemberScalarWhereInput>;
    @Field(() => TeamMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => TeamMemberUpdateManyMutationInput)
    data!: InstanceType<typeof TeamMemberUpdateManyMutationInput>;
}

@InputType()
export class TeamMemberUpdateManyWithoutTeamNestedInput {
    @Field(() => [TeamMemberCreateWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutTeamInput)
    create?: Array<TeamMemberCreateWithoutTeamInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutTeamInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutTeamInput>;
    @Field(() => [TeamMemberUpsertWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberUpsertWithWhereUniqueWithoutTeamInput)
    upsert?: Array<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>;
    @Field(() => TeamMemberCreateManyTeamInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyTeamInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyTeamInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    set?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    disconnect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    delete?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberUpdateWithWhereUniqueWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberUpdateWithWhereUniqueWithoutTeamInput)
    update?: Array<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>;
    @Field(() => [TeamMemberUpdateManyWithWhereWithoutTeamInput], {nullable:true})
    @Type(() => TeamMemberUpdateManyWithWhereWithoutTeamInput)
    updateMany?: Array<TeamMemberUpdateManyWithWhereWithoutTeamInput>;
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    @Type(() => TeamMemberScalarWhereInput)
    deleteMany?: Array<TeamMemberScalarWhereInput>;
}

@InputType()
export class TeamMemberUpdateManyWithoutUserNestedInput {
    @Field(() => [TeamMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateWithoutUserInput)
    create?: Array<TeamMemberCreateWithoutUserInput>;
    @Field(() => [TeamMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TeamMemberCreateOrConnectWithoutUserInput>;
    @Field(() => [TeamMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TeamMemberUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => TeamMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TeamMemberCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof TeamMemberCreateManyUserInputEnvelope>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    set?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    disconnect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    delete?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberWhereUniqueInput], {nullable:true})
    @Type(() => TeamMemberWhereUniqueInput)
    connect?: Array<TeamMemberWhereUniqueInput>;
    @Field(() => [TeamMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TeamMemberUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [TeamMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TeamMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TeamMemberUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [TeamMemberScalarWhereInput], {nullable:true})
    @Type(() => TeamMemberScalarWhereInput)
    deleteMany?: Array<TeamMemberScalarWhereInput>;
}

@InputType()
export class TeamMemberUpdateWithWhereUniqueWithoutTeamInput {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberUpdateWithoutTeamInput, {nullable:false})
    @Type(() => TeamMemberUpdateWithoutTeamInput)
    data!: InstanceType<typeof TeamMemberUpdateWithoutTeamInput>;
}

@InputType()
export class TeamMemberUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => TeamMemberUpdateWithoutUserInput)
    data!: InstanceType<typeof TeamMemberUpdateWithoutUserInput>;
}

@InputType()
export class TeamMemberUpdateWithoutTeamInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutTeamsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutTeamsNestedInput>;
}

@InputType()
export class TeamMemberUpdateWithoutUserInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TeamUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    team?: InstanceType<typeof TeamUpdateOneRequiredWithoutMembersNestedInput>;
}

@InputType()
export class TeamMemberUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => EnumMemberRoleFieldUpdateOperationsInput, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TeamUpdateOneRequiredWithoutMembersNestedInput, {nullable:true})
    team?: InstanceType<typeof TeamUpdateOneRequiredWithoutMembersNestedInput>;
    @Field(() => UserUpdateOneRequiredWithoutTeamsNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutTeamsNestedInput>;
}

@InputType()
export class TeamMemberUpsertWithWhereUniqueWithoutTeamInput {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberUpdateWithoutTeamInput, {nullable:false})
    @Type(() => TeamMemberUpdateWithoutTeamInput)
    update!: InstanceType<typeof TeamMemberUpdateWithoutTeamInput>;
    @Field(() => TeamMemberCreateWithoutTeamInput, {nullable:false})
    @Type(() => TeamMemberCreateWithoutTeamInput)
    create!: InstanceType<typeof TeamMemberCreateWithoutTeamInput>;
}

@InputType()
export class TeamMemberUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberUpdateWithoutUserInput, {nullable:false})
    @Type(() => TeamMemberUpdateWithoutUserInput)
    update!: InstanceType<typeof TeamMemberUpdateWithoutUserInput>;
    @Field(() => TeamMemberCreateWithoutUserInput, {nullable:false})
    @Type(() => TeamMemberCreateWithoutUserInput)
    create!: InstanceType<typeof TeamMemberCreateWithoutUserInput>;
}

@InputType()
export class TeamMemberWhereUniqueInput {
    @Field(() => String, {nullable:true})
    color?: string;
    @Field(() => TeamMemberTeamIdUserIdCompoundUniqueInput, {nullable:true})
    teamId_userId?: InstanceType<typeof TeamMemberTeamIdUserIdCompoundUniqueInput>;
}

@InputType()
export class TeamMemberWhereInput {
    @Field(() => [TeamMemberWhereInput], {nullable:true})
    AND?: Array<TeamMemberWhereInput>;
    @Field(() => [TeamMemberWhereInput], {nullable:true})
    OR?: Array<TeamMemberWhereInput>;
    @Field(() => [TeamMemberWhereInput], {nullable:true})
    NOT?: Array<TeamMemberWhereInput>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => IntFilter, {nullable:true})
    teamId?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => EnumMemberRoleFilter, {nullable:true})
    role?: InstanceType<typeof EnumMemberRoleFilter>;
    @Field(() => StringFilter, {nullable:true})
    color?: InstanceType<typeof StringFilter>;
    @Field(() => TeamRelationFilter, {nullable:true})
    team?: InstanceType<typeof TeamRelationFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class TeamMember {
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Int, {nullable:false})
    teamId!: number;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => MemberRole, {nullable:false,defaultValue:'pending'})
    role!: keyof typeof MemberRole;
    @Field(() => String, {nullable:false})
    color!: string;
    @Field(() => Team, {nullable:false})
    team?: InstanceType<typeof Team>;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyTeamMemberArgs {
    @Field(() => TeamMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => TeamMemberUpdateManyMutationInput)
    data!: InstanceType<typeof TeamMemberUpdateManyMutationInput>;
    @Field(() => TeamMemberWhereInput, {nullable:true})
    @Type(() => TeamMemberWhereInput)
    where?: InstanceType<typeof TeamMemberWhereInput>;
}

@ArgsType()
export class UpdateOneTeamMemberArgs {
    @Field(() => TeamMemberUpdateInput, {nullable:false})
    @Type(() => TeamMemberUpdateInput)
    data!: InstanceType<typeof TeamMemberUpdateInput>;
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneTeamMemberArgs {
    @Field(() => TeamMemberWhereUniqueInput, {nullable:false})
    @Type(() => TeamMemberWhereUniqueInput)
    where!: InstanceType<typeof TeamMemberWhereUniqueInput>;
    @Field(() => TeamMemberCreateInput, {nullable:false})
    @Type(() => TeamMemberCreateInput)
    create!: InstanceType<typeof TeamMemberCreateInput>;
    @Field(() => TeamMemberUpdateInput, {nullable:false})
    @Type(() => TeamMemberUpdateInput)
    update!: InstanceType<typeof TeamMemberUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    backlogItems?: number;
    @Field(() => Int, {nullable:false})
    teams?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class UserCreateNestedOneWithoutBacklogItemsInput {
    @Field(() => UserCreateWithoutBacklogItemsInput, {nullable:true})
    @Type(() => UserCreateWithoutBacklogItemsInput)
    create?: InstanceType<typeof UserCreateWithoutBacklogItemsInput>;
    @Field(() => UserCreateOrConnectWithoutBacklogItemsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBacklogItemsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutBacklogItemsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutTeamsInput {
    @Field(() => UserCreateWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateWithoutTeamsInput)
    create?: InstanceType<typeof UserCreateWithoutTeamsInput>;
    @Field(() => UserCreateOrConnectWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTeamsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTeamsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutBacklogItemsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutBacklogItemsInput, {nullable:false})
    @Type(() => UserCreateWithoutBacklogItemsInput)
    create!: InstanceType<typeof UserCreateWithoutBacklogItemsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutTeamsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutTeamsInput, {nullable:false})
    @Type(() => UserCreateWithoutTeamsInput)
    create!: InstanceType<typeof UserCreateWithoutTeamsInput>;
}

@InputType()
export class UserCreateWithoutBacklogItemsInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => TeamMemberCreateNestedManyWithoutUserInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutTeamsInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => BacklogItemCreateNestedManyWithoutUserInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => BacklogItemCreateNestedManyWithoutUserInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemCreateNestedManyWithoutUserInput>;
    @Field(() => TeamMemberCreateNestedManyWithoutUserInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberCreateNestedManyWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => BacklogItemOrderByRelationAggregateInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemOrderByRelationAggregateInput>;
    @Field(() => TeamMemberOrderByRelationAggregateInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutBacklogItemsInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => TeamMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateWithoutTeamsInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => BacklogItemUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => BacklogItemUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => TeamMemberUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberUncheckedCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutBacklogItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TeamMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutTeamsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => TeamMemberUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberUncheckedUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutTeamsNestedInput {
    @Field(() => UserCreateWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateWithoutTeamsInput)
    create?: InstanceType<typeof UserCreateWithoutTeamsInput>;
    @Field(() => UserCreateOrConnectWithoutTeamsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTeamsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutTeamsInput>;
    @Field(() => UserUpsertWithoutTeamsInput, {nullable:true})
    @Type(() => UserUpsertWithoutTeamsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutTeamsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutTeamsInput, {nullable:true})
    @Type(() => UserUpdateWithoutTeamsInput)
    update?: InstanceType<typeof UserUpdateWithoutTeamsInput>;
}

@InputType()
export class UserUpdateOneWithoutBacklogItemsNestedInput {
    @Field(() => UserCreateWithoutBacklogItemsInput, {nullable:true})
    @Type(() => UserCreateWithoutBacklogItemsInput)
    create?: InstanceType<typeof UserCreateWithoutBacklogItemsInput>;
    @Field(() => UserCreateOrConnectWithoutBacklogItemsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBacklogItemsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutBacklogItemsInput>;
    @Field(() => UserUpsertWithoutBacklogItemsInput, {nullable:true})
    @Type(() => UserUpsertWithoutBacklogItemsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutBacklogItemsInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutBacklogItemsInput, {nullable:true})
    @Type(() => UserUpdateWithoutBacklogItemsInput)
    update?: InstanceType<typeof UserUpdateWithoutBacklogItemsInput>;
}

@InputType()
export class UserUpdateWithoutBacklogItemsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TeamMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutTeamsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUpdateManyWithoutUserNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => BacklogItemUpdateManyWithoutUserNestedInput, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemUpdateManyWithoutUserNestedInput>;
    @Field(() => TeamMemberUpdateManyWithoutUserNestedInput, {nullable:true})
    teams?: InstanceType<typeof TeamMemberUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpsertWithoutBacklogItemsInput {
    @Field(() => UserUpdateWithoutBacklogItemsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBacklogItemsInput)
    update!: InstanceType<typeof UserUpdateWithoutBacklogItemsInput>;
    @Field(() => UserCreateWithoutBacklogItemsInput, {nullable:false})
    @Type(() => UserCreateWithoutBacklogItemsInput)
    create!: InstanceType<typeof UserCreateWithoutBacklogItemsInput>;
}

@InputType()
export class UserUpsertWithoutTeamsInput {
    @Field(() => UserUpdateWithoutTeamsInput, {nullable:false})
    @Type(() => UserUpdateWithoutTeamsInput)
    update!: InstanceType<typeof UserUpdateWithoutTeamsInput>;
    @Field(() => UserCreateWithoutTeamsInput, {nullable:false})
    @Type(() => UserCreateWithoutTeamsInput)
    create!: InstanceType<typeof UserCreateWithoutTeamsInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => BacklogItemListRelationFilter, {nullable:true})
    backlogItems?: InstanceType<typeof BacklogItemListRelationFilter>;
    @Field(() => TeamMemberListRelationFilter, {nullable:true})
    teams?: InstanceType<typeof TeamMemberListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [BacklogItem], {nullable:true})
    backlogItems?: Array<BacklogItem>;
    @Field(() => [TeamMember], {nullable:true})
    teams?: Array<TeamMember>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}
