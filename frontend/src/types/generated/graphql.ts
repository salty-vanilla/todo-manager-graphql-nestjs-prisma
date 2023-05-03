import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BacklogItem = {
  __typename?: 'BacklogItem';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  status: BacklogItemStatus;
  story: Story;
  storyId: Scalars['Int'];
  targetDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type BacklogItemAvgAggregate = {
  __typename?: 'BacklogItemAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

export type BacklogItemCountAggregate = {
  __typename?: 'BacklogItemCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  startDate: Scalars['Int'];
  status: Scalars['Int'];
  storyId: Scalars['Int'];
  targetDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BacklogItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<BacklogItemStatus>;
  story: StoryCreateNestedOneWithoutBacklogItemsInput;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutBacklogItemsInput>;
};

export type BacklogItemCreateManyStoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<BacklogItemStatus>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type BacklogItemCreateManyStoryInputEnvelope = {
  data: Array<BacklogItemCreateManyStoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BacklogItemCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<BacklogItemStatus>;
  storyId: Scalars['Int'];
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BacklogItemCreateManyUserInputEnvelope = {
  data: Array<BacklogItemCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BacklogItemCreateNestedManyWithoutStoryInput = {
  connect?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BacklogItemCreateOrConnectWithoutStoryInput>>;
  create?: InputMaybe<Array<BacklogItemCreateWithoutStoryInput>>;
  createMany?: InputMaybe<BacklogItemCreateManyStoryInputEnvelope>;
};

export type BacklogItemCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BacklogItemCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BacklogItemCreateWithoutUserInput>>;
  createMany?: InputMaybe<BacklogItemCreateManyUserInputEnvelope>;
};

export type BacklogItemCreateOrConnectWithoutStoryInput = {
  create: BacklogItemCreateWithoutStoryInput;
  where: BacklogItemWhereUniqueInput;
};

export type BacklogItemCreateOrConnectWithoutUserInput = {
  create: BacklogItemCreateWithoutUserInput;
  where: BacklogItemWhereUniqueInput;
};

export type BacklogItemCreateWithoutStoryInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<BacklogItemStatus>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user?: InputMaybe<UserCreateNestedOneWithoutBacklogItemsInput>;
};

export type BacklogItemCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<BacklogItemStatus>;
  story: StoryCreateNestedOneWithoutBacklogItemsInput;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BacklogItemListRelationFilter = {
  every?: InputMaybe<BacklogItemWhereInput>;
  none?: InputMaybe<BacklogItemWhereInput>;
  some?: InputMaybe<BacklogItemWhereInput>;
};

export type BacklogItemMaxAggregate = {
  __typename?: 'BacklogItemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<BacklogItemStatus>;
  storyId?: Maybe<Scalars['Int']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BacklogItemMinAggregate = {
  __typename?: 'BacklogItemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<BacklogItemStatus>;
  storyId?: Maybe<Scalars['Int']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type BacklogItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BacklogItemOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  story?: InputMaybe<StoryOrderByWithRelationInput>;
  storyId?: InputMaybe<SortOrder>;
  targetDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type BacklogItemScalarFieldEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'name'
  | 'startDate'
  | 'status'
  | 'storyId'
  | 'targetDate'
  | 'updatedAt'
  | 'userId';

export type BacklogItemScalarWhereInput = {
  AND?: InputMaybe<Array<BacklogItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<BacklogItemScalarWhereInput>>;
  OR?: InputMaybe<Array<BacklogItemScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumBacklogItemStatusFilter>;
  storyId?: InputMaybe<IntFilter>;
  targetDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type BacklogItemStatus =
  | 'doing'
  | 'done'
  | 'pending'
  | 'stuck';

export type BacklogItemSumAggregate = {
  __typename?: 'BacklogItemSumAggregate';
  id?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
};

export type BacklogItemUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBacklogItemStatusFieldUpdateOperationsInput>;
  story?: InputMaybe<StoryUpdateOneRequiredWithoutBacklogItemsNestedInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutBacklogItemsNestedInput>;
};

export type BacklogItemUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBacklogItemStatusFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BacklogItemUpdateManyWithWhereWithoutStoryInput = {
  data: BacklogItemUpdateManyMutationInput;
  where: BacklogItemScalarWhereInput;
};

export type BacklogItemUpdateManyWithWhereWithoutUserInput = {
  data: BacklogItemUpdateManyMutationInput;
  where: BacklogItemScalarWhereInput;
};

export type BacklogItemUpdateManyWithoutStoryNestedInput = {
  connect?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BacklogItemCreateOrConnectWithoutStoryInput>>;
  create?: InputMaybe<Array<BacklogItemCreateWithoutStoryInput>>;
  createMany?: InputMaybe<BacklogItemCreateManyStoryInputEnvelope>;
  delete?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BacklogItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  set?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  update?: InputMaybe<Array<BacklogItemUpdateWithWhereUniqueWithoutStoryInput>>;
  updateMany?: InputMaybe<Array<BacklogItemUpdateManyWithWhereWithoutStoryInput>>;
  upsert?: InputMaybe<Array<BacklogItemUpsertWithWhereUniqueWithoutStoryInput>>;
};

export type BacklogItemUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BacklogItemCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BacklogItemCreateWithoutUserInput>>;
  createMany?: InputMaybe<BacklogItemCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BacklogItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  set?: InputMaybe<Array<BacklogItemWhereUniqueInput>>;
  update?: InputMaybe<Array<BacklogItemUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BacklogItemUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BacklogItemUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BacklogItemUpdateWithWhereUniqueWithoutStoryInput = {
  data: BacklogItemUpdateWithoutStoryInput;
  where: BacklogItemWhereUniqueInput;
};

export type BacklogItemUpdateWithWhereUniqueWithoutUserInput = {
  data: BacklogItemUpdateWithoutUserInput;
  where: BacklogItemWhereUniqueInput;
};

export type BacklogItemUpdateWithoutStoryInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBacklogItemStatusFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneWithoutBacklogItemsNestedInput>;
};

export type BacklogItemUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumBacklogItemStatusFieldUpdateOperationsInput>;
  story?: InputMaybe<StoryUpdateOneRequiredWithoutBacklogItemsNestedInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BacklogItemUpsertWithWhereUniqueWithoutStoryInput = {
  create: BacklogItemCreateWithoutStoryInput;
  update: BacklogItemUpdateWithoutStoryInput;
  where: BacklogItemWhereUniqueInput;
};

export type BacklogItemUpsertWithWhereUniqueWithoutUserInput = {
  create: BacklogItemCreateWithoutUserInput;
  update: BacklogItemUpdateWithoutUserInput;
  where: BacklogItemWhereUniqueInput;
};

export type BacklogItemWhereInput = {
  AND?: InputMaybe<Array<BacklogItemWhereInput>>;
  NOT?: InputMaybe<Array<BacklogItemWhereInput>>;
  OR?: InputMaybe<Array<BacklogItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  status?: InputMaybe<EnumBacklogItemStatusFilter>;
  story?: InputMaybe<StoryRelationFilter>;
  storyId?: InputMaybe<IntFilter>;
  targetDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type BacklogItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumBacklogItemStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<BacklogItemStatus>;
};

export type EnumBacklogItemStatusFilter = {
  equals?: InputMaybe<BacklogItemStatus>;
  in?: InputMaybe<Array<BacklogItemStatus>>;
  not?: InputMaybe<NestedEnumBacklogItemStatusFilter>;
  notIn?: InputMaybe<Array<BacklogItemStatus>>;
};

export type EnumMemberRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<MemberRole>;
};

export type EnumMemberRoleFilter = {
  equals?: InputMaybe<MemberRole>;
  in?: InputMaybe<Array<MemberRole>>;
  not?: InputMaybe<NestedEnumMemberRoleFilter>;
  notIn?: InputMaybe<Array<MemberRole>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type MemberRole =
  | 'admin'
  | 'pending'
  | 'regular';

export type Mutation = {
  __typename?: 'Mutation';
  createBacklogItem: BacklogItem;
  createProject: Project;
  createStory: Story;
  createTeam: Team;
  createTeamMember: TeamMember;
  createUser: User;
  removeBacklogItem: BacklogItem;
  removeProject: Project;
  removeStory: Story;
  removeTeam: Team;
  removeTeamMember: TeamMember;
  removeUser: User;
  updateBacklogItem: BacklogItem;
  updateProject: Project;
  updateStory: Story;
  updateTeam: Team;
  updateTeamMember: TeamMember;
  updateUser: User;
};


export type MutationCreateBacklogItemArgs = {
  createBacklogItemInput: BacklogItemCreateInput;
};


export type MutationCreateProjectArgs = {
  projectCreateInput: ProjectCreateInput;
};


export type MutationCreateStoryArgs = {
  createStoryInput: StoryCreateInput;
};


export type MutationCreateTeamArgs = {
  teamCreateInput: TeamCreateInput;
};


export type MutationCreateTeamMemberArgs = {
  teamMemberCreateInput: TeamMemberCreateInput;
};


export type MutationCreateUserArgs = {
  createUserInput: UserCreateInput;
};


export type MutationRemoveBacklogItemArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveProjectArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveStoryArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTeamArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTeamMemberArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationUpdateBacklogItemArgs = {
  id: Scalars['Int'];
  updateBacklogItemInput: BacklogItemUpdateInput;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['Int'];
  updateProjectInput: ProjectUpdateInput;
};


export type MutationUpdateStoryArgs = {
  id: Scalars['Int'];
  updateStoryInput: StoryUpdateInput;
};


export type MutationUpdateTeamArgs = {
  id: Scalars['Int'];
  teamUpdateInput: TeamUpdateInput;
};


export type MutationUpdateTeamMemberArgs = {
  teamId: Scalars['Int'];
  teamMemberUpdateInput: TeamMemberUpdateInput;
  userd: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UserUpdateInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumBacklogItemStatusFilter = {
  equals?: InputMaybe<BacklogItemStatus>;
  in?: InputMaybe<Array<BacklogItemStatus>>;
  not?: InputMaybe<NestedEnumBacklogItemStatusFilter>;
  notIn?: InputMaybe<Array<BacklogItemStatus>>;
};

export type NestedEnumMemberRoleFilter = {
  equals?: InputMaybe<MemberRole>;
  in?: InputMaybe<Array<MemberRole>>;
  not?: InputMaybe<NestedEnumMemberRoleFilter>;
  notIn?: InputMaybe<Array<MemberRole>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count: ProjectCount;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  stories?: Maybe<Array<Story>>;
  targetDate?: Maybe<Scalars['DateTime']>;
  team: Team;
  teamId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type ProjectAvgAggregate = {
  __typename?: 'ProjectAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

export type ProjectCount = {
  __typename?: 'ProjectCount';
  stories: Scalars['Int'];
};

export type ProjectCountAggregate = {
  __typename?: 'ProjectCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  startDate: Scalars['Int'];
  targetDate: Scalars['Int'];
  teamId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ProjectCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  stories?: InputMaybe<StoryCreateNestedManyWithoutProjectInput>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutProjectsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyTeamInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateManyTeamInputEnvelope = {
  data: Array<ProjectCreateManyTeamInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutTeamInput>>;
  createMany?: InputMaybe<ProjectCreateManyTeamInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutStoriesInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutStoriesInput>;
  create?: InputMaybe<ProjectCreateWithoutStoriesInput>;
};

export type ProjectCreateOrConnectWithoutStoriesInput = {
  create: ProjectCreateWithoutStoriesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutTeamInput = {
  create: ProjectCreateWithoutTeamInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutStoriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  team: TeamCreateNestedOneWithoutProjectsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectCreateWithoutTeamInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  stories?: InputMaybe<StoryCreateNestedManyWithoutProjectInput>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectMaxAggregate = {
  __typename?: 'ProjectMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  teamId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectMinAggregate = {
  __typename?: 'ProjectMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  teamId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  stories?: InputMaybe<StoryOrderByRelationAggregateInput>;
  targetDate?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<ProjectScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProjectScalarWhereInput>>;
  OR?: InputMaybe<Array<ProjectScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  targetDate?: InputMaybe<DateTimeNullableFilter>;
  teamId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectSumAggregate = {
  __typename?: 'ProjectSumAggregate';
  id?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

export type ProjectUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  stories?: InputMaybe<StoryUpdateManyWithoutProjectNestedInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutProjectsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutTeamInput = {
  data: ProjectUpdateManyMutationInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutTeamNestedInput = {
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ProjectCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<ProjectCreateWithoutTeamInput>>;
  createMany?: InputMaybe<ProjectCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProjectScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>;
  update?: InputMaybe<Array<ProjectUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<ProjectUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<ProjectUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type ProjectUpdateOneRequiredWithoutStoriesNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutStoriesInput>;
  create?: InputMaybe<ProjectCreateWithoutStoriesInput>;
  update?: InputMaybe<ProjectUpdateWithoutStoriesInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutStoriesInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
  data: ProjectUpdateWithoutTeamInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutStoriesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutProjectsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutTeamInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  stories?: InputMaybe<StoryUpdateManyWithoutProjectNestedInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
  create: ProjectCreateWithoutTeamInput;
  update: ProjectUpdateWithoutTeamInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutStoriesInput = {
  create: ProjectCreateWithoutStoriesInput;
  update: ProjectUpdateWithoutStoriesInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<ProjectWhereInput>>;
  NOT?: InputMaybe<Array<ProjectWhereInput>>;
  OR?: InputMaybe<Array<ProjectWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  stories?: InputMaybe<StoryListRelationFilter>;
  targetDate?: InputMaybe<DateTimeNullableFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  backlogItem: BacklogItem;
  backlogItems: Array<BacklogItem>;
  project: Project;
  projects: Array<Project>;
  stories: Array<Story>;
  story: Story;
  team: Team;
  teamMember: TeamMember;
  teamMembers: Array<TeamMember>;
  teams: Array<Team>;
  user: User;
  users: Array<User>;
};


export type QueryBacklogItemArgs = {
  id: Scalars['Int'];
};


export type QueryBacklogItemsArgs = {
  cursor?: InputMaybe<BacklogItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<BacklogItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BacklogItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BacklogItemWhereInput>;
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
};


export type QueryStoryArgs = {
  id: Scalars['Int'];
};


export type QueryTeamArgs = {
  id: Scalars['Int'];
};


export type QueryTeamMemberArgs = {
  teamId: Scalars['Int'];
  userd: Scalars['String'];
};


export type QueryTeamMembersArgs = {
  cursor?: InputMaybe<TeamMemberWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamMemberScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamMemberOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamMemberWhereInput>;
};


export type QueryTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type SortOrder =
  | 'asc'
  | 'desc';

export type Story = {
  __typename?: 'Story';
  _count: StoryCount;
  backlogItems?: Maybe<Array<BacklogItem>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  project: Project;
  projectId: Scalars['Int'];
  startDate?: Maybe<Scalars['DateTime']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type StoryAvgAggregate = {
  __typename?: 'StoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  projectId?: Maybe<Scalars['Float']>;
};

export type StoryCount = {
  __typename?: 'StoryCount';
  backlogItems: Scalars['Int'];
};

export type StoryCountAggregate = {
  __typename?: 'StoryCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  projectId: Scalars['Int'];
  startDate: Scalars['Int'];
  targetDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type StoryCreateInput = {
  backlogItems?: InputMaybe<BacklogItemCreateNestedManyWithoutStoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  project: ProjectCreateNestedOneWithoutStoriesInput;
  startDate?: InputMaybe<Scalars['DateTime']>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StoryCreateManyProjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StoryCreateManyProjectInputEnvelope = {
  data: Array<StoryCreateManyProjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type StoryCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<StoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoryCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<StoryCreateWithoutProjectInput>>;
  createMany?: InputMaybe<StoryCreateManyProjectInputEnvelope>;
};

export type StoryCreateNestedOneWithoutBacklogItemsInput = {
  connect?: InputMaybe<StoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoryCreateOrConnectWithoutBacklogItemsInput>;
  create?: InputMaybe<StoryCreateWithoutBacklogItemsInput>;
};

export type StoryCreateOrConnectWithoutBacklogItemsInput = {
  create: StoryCreateWithoutBacklogItemsInput;
  where: StoryWhereUniqueInput;
};

export type StoryCreateOrConnectWithoutProjectInput = {
  create: StoryCreateWithoutProjectInput;
  where: StoryWhereUniqueInput;
};

export type StoryCreateWithoutBacklogItemsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  project: ProjectCreateNestedOneWithoutStoriesInput;
  startDate?: InputMaybe<Scalars['DateTime']>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StoryCreateWithoutProjectInput = {
  backlogItems?: InputMaybe<BacklogItemCreateNestedManyWithoutStoryInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  startDate?: InputMaybe<Scalars['DateTime']>;
  targetDate?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StoryListRelationFilter = {
  every?: InputMaybe<StoryWhereInput>;
  none?: InputMaybe<StoryWhereInput>;
  some?: InputMaybe<StoryWhereInput>;
};

export type StoryMaxAggregate = {
  __typename?: 'StoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StoryMinAggregate = {
  __typename?: 'StoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
  targetDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type StoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StoryOrderByWithRelationInput = {
  backlogItems?: InputMaybe<BacklogItemOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  targetDate?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StoryRelationFilter = {
  is?: InputMaybe<StoryWhereInput>;
  isNot?: InputMaybe<StoryWhereInput>;
};

export type StoryScalarWhereInput = {
  AND?: InputMaybe<Array<StoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<StoryScalarWhereInput>>;
  OR?: InputMaybe<Array<StoryScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  targetDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StorySumAggregate = {
  __typename?: 'StorySumAggregate';
  id?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['Int']>;
};

export type StoryUpdateInput = {
  backlogItems?: InputMaybe<BacklogItemUpdateManyWithoutStoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutStoriesNestedInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoryUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoryUpdateManyWithWhereWithoutProjectInput = {
  data: StoryUpdateManyMutationInput;
  where: StoryScalarWhereInput;
};

export type StoryUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<StoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoryCreateOrConnectWithoutProjectInput>>;
  create?: InputMaybe<Array<StoryCreateWithoutProjectInput>>;
  createMany?: InputMaybe<StoryCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<StoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StoryWhereUniqueInput>>;
  set?: InputMaybe<Array<StoryWhereUniqueInput>>;
  update?: InputMaybe<Array<StoryUpdateWithWhereUniqueWithoutProjectInput>>;
  updateMany?: InputMaybe<Array<StoryUpdateManyWithWhereWithoutProjectInput>>;
  upsert?: InputMaybe<Array<StoryUpsertWithWhereUniqueWithoutProjectInput>>;
};

export type StoryUpdateOneRequiredWithoutBacklogItemsNestedInput = {
  connect?: InputMaybe<StoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoryCreateOrConnectWithoutBacklogItemsInput>;
  create?: InputMaybe<StoryCreateWithoutBacklogItemsInput>;
  update?: InputMaybe<StoryUpdateWithoutBacklogItemsInput>;
  upsert?: InputMaybe<StoryUpsertWithoutBacklogItemsInput>;
};

export type StoryUpdateWithWhereUniqueWithoutProjectInput = {
  data: StoryUpdateWithoutProjectInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpdateWithoutBacklogItemsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutStoriesNestedInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoryUpdateWithoutProjectInput = {
  backlogItems?: InputMaybe<BacklogItemUpdateManyWithoutStoryNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  startDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  targetDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoryUpsertWithWhereUniqueWithoutProjectInput = {
  create: StoryCreateWithoutProjectInput;
  update: StoryUpdateWithoutProjectInput;
  where: StoryWhereUniqueInput;
};

export type StoryUpsertWithoutBacklogItemsInput = {
  create: StoryCreateWithoutBacklogItemsInput;
  update: StoryUpdateWithoutBacklogItemsInput;
};

export type StoryWhereInput = {
  AND?: InputMaybe<Array<StoryWhereInput>>;
  NOT?: InputMaybe<Array<StoryWhereInput>>;
  OR?: InputMaybe<Array<StoryWhereInput>>;
  backlogItems?: InputMaybe<BacklogItemListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectRelationFilter>;
  projectId?: InputMaybe<IntFilter>;
  startDate?: InputMaybe<DateTimeNullableFilter>;
  targetDate?: InputMaybe<DateTimeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type StoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  _count: TeamCount;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  members: Array<User>;
  name: Scalars['String'];
  projects?: Maybe<Array<Project>>;
  updatedAt: Scalars['DateTime'];
};


export type TeamMembersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type TeamAvgAggregate = {
  __typename?: 'TeamAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type TeamCount = {
  __typename?: 'TeamCount';
  members: Scalars['Int'];
  projects: Scalars['Int'];
};

export type TeamCountAggregate = {
  __typename?: 'TeamCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TeamCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeamCreateNestedOneWithoutMembersInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<TeamCreateWithoutMembersInput>;
};

export type TeamCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<TeamCreateWithoutProjectsInput>;
};

export type TeamCreateOrConnectWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateOrConnectWithoutProjectsInput = {
  create: TeamCreateWithoutProjectsInput;
  where: TeamWhereUniqueInput;
};

export type TeamCreateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutTeamInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeamCreateWithoutProjectsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<TeamMemberCreateNestedManyWithoutTeamInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeamMaxAggregate = {
  __typename?: 'TeamMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  role: MemberRole;
  team: Team;
  teamId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type TeamMemberAvgAggregate = {
  __typename?: 'TeamMemberAvgAggregate';
  teamId?: Maybe<Scalars['Float']>;
};

export type TeamMemberCountAggregate = {
  __typename?: 'TeamMemberCountAggregate';
  _all: Scalars['Int'];
  color: Scalars['Int'];
  createdAt: Scalars['Int'];
  role: Scalars['Int'];
  teamId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TeamMemberCreateInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<MemberRole>;
  team: TeamCreateNestedOneWithoutMembersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTeamsInput;
};

export type TeamMemberCreateManyTeamInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<MemberRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TeamMemberCreateManyTeamInputEnvelope = {
  data: Array<TeamMemberCreateManyTeamInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TeamMemberCreateManyUserInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<MemberRole>;
  teamId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeamMemberCreateManyUserInputEnvelope = {
  data: Array<TeamMemberCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TeamMemberCreateNestedManyWithoutTeamInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyTeamInputEnvelope>;
};

export type TeamMemberCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyUserInputEnvelope>;
};

export type TeamMemberCreateOrConnectWithoutTeamInput = {
  create: TeamMemberCreateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateOrConnectWithoutUserInput = {
  create: TeamMemberCreateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberCreateWithoutTeamInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<MemberRole>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutTeamsInput;
};

export type TeamMemberCreateWithoutUserInput = {
  color: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<MemberRole>;
  team: TeamCreateNestedOneWithoutMembersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TeamMemberListRelationFilter = {
  every?: InputMaybe<TeamMemberWhereInput>;
  none?: InputMaybe<TeamMemberWhereInput>;
  some?: InputMaybe<TeamMemberWhereInput>;
};

export type TeamMemberMaxAggregate = {
  __typename?: 'TeamMemberMaxAggregate';
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<MemberRole>;
  teamId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TeamMemberMinAggregate = {
  __typename?: 'TeamMemberMinAggregate';
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<MemberRole>;
  teamId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TeamMemberOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TeamMemberOrderByWithRelationInput = {
  color?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  team?: InputMaybe<TeamOrderByWithRelationInput>;
  teamId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type TeamMemberScalarFieldEnum =
  | 'color'
  | 'createdAt'
  | 'role'
  | 'teamId'
  | 'updatedAt'
  | 'userId';

export type TeamMemberScalarWhereInput = {
  AND?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  role?: InputMaybe<EnumMemberRoleFilter>;
  teamId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TeamMemberSumAggregate = {
  __typename?: 'TeamMemberSumAggregate';
  teamId?: Maybe<Scalars['Int']>;
};

export type TeamMemberTeamIdUserIdCompoundUniqueInput = {
  teamId: Scalars['Int'];
  userId: Scalars['String'];
};

export type TeamMemberUpdateInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMemberRoleFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutMembersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeamsNestedInput>;
};

export type TeamMemberUpdateManyMutationInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMemberRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
  data: TeamMemberUpdateManyMutationInput;
  where: TeamMemberScalarWhereInput;
};

export type TeamMemberUpdateManyWithoutTeamNestedInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutTeamInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutTeamInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyTeamInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutTeamInput>>;
  updateMany?: InputMaybe<Array<TeamMemberUpdateManyWithWhereWithoutTeamInput>>;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutTeamInput>>;
};

export type TeamMemberUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TeamMemberCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TeamMemberCreateWithoutUserInput>>;
  createMany?: InputMaybe<TeamMemberCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TeamMemberScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  set?: InputMaybe<Array<TeamMemberWhereUniqueInput>>;
  update?: InputMaybe<Array<TeamMemberUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TeamMemberUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TeamMemberUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
  data: TeamMemberUpdateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
  data: TeamMemberUpdateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpdateWithoutTeamInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMemberRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeamsNestedInput>;
};

export type TeamMemberUpdateWithoutUserInput = {
  color?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMemberRoleFieldUpdateOperationsInput>;
  team?: InputMaybe<TeamUpdateOneRequiredWithoutMembersNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
  create: TeamMemberCreateWithoutTeamInput;
  update: TeamMemberUpdateWithoutTeamInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
  create: TeamMemberCreateWithoutUserInput;
  update: TeamMemberUpdateWithoutUserInput;
  where: TeamMemberWhereUniqueInput;
};

export type TeamMemberWhereInput = {
  AND?: InputMaybe<Array<TeamMemberWhereInput>>;
  NOT?: InputMaybe<Array<TeamMemberWhereInput>>;
  OR?: InputMaybe<Array<TeamMemberWhereInput>>;
  color?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  role?: InputMaybe<EnumMemberRoleFilter>;
  team?: InputMaybe<TeamRelationFilter>;
  teamId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TeamMemberWhereUniqueInput = {
  color?: InputMaybe<Scalars['String']>;
  teamId_userId?: InputMaybe<TeamMemberTeamIdUserIdCompoundUniqueInput>;
};

export type TeamMinAggregate = {
  __typename?: 'TeamMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TeamOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  members?: InputMaybe<TeamMemberOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TeamRelationFilter = {
  is?: InputMaybe<TeamWhereInput>;
  isNot?: InputMaybe<TeamWhereInput>;
};

export type TeamScalarFieldEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'name'
  | 'updatedAt';

export type TeamSumAggregate = {
  __typename?: 'TeamSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type TeamUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<TeamMemberUpdateManyWithoutTeamNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutTeamNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutMembersInput>;
  create?: InputMaybe<TeamCreateWithoutMembersInput>;
  update?: InputMaybe<TeamUpdateWithoutMembersInput>;
  upsert?: InputMaybe<TeamUpsertWithoutMembersInput>;
};

export type TeamUpdateOneRequiredWithoutProjectsNestedInput = {
  connect?: InputMaybe<TeamWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeamCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<TeamCreateWithoutProjectsInput>;
  update?: InputMaybe<TeamUpdateWithoutProjectsInput>;
  upsert?: InputMaybe<TeamUpsertWithoutProjectsInput>;
};

export type TeamUpdateWithoutMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutTeamNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpdateWithoutProjectsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  members?: InputMaybe<TeamMemberUpdateManyWithoutTeamNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TeamUpsertWithoutMembersInput = {
  create: TeamCreateWithoutMembersInput;
  update: TeamUpdateWithoutMembersInput;
};

export type TeamUpsertWithoutProjectsInput = {
  create: TeamCreateWithoutProjectsInput;
  update: TeamUpdateWithoutProjectsInput;
};

export type TeamWhereInput = {
  AND?: InputMaybe<Array<TeamWhereInput>>;
  NOT?: InputMaybe<Array<TeamWhereInput>>;
  OR?: InputMaybe<Array<TeamWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  members?: InputMaybe<TeamMemberListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  backlogItems?: Maybe<Array<BacklogItem>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  teams: Array<Team>;
};


export type UserTeamsArgs = {
  cursor?: InputMaybe<TeamWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeamScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeamOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeamWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  backlogItems: Scalars['Int'];
  teams: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type UserCreateInput = {
  backlogItems?: InputMaybe<BacklogItemCreateNestedManyWithoutUserInput>;
  id: Scalars['String'];
  name: Scalars['String'];
  teams?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
};

export type UserCreateNestedOneWithoutBacklogItemsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBacklogItemsInput>;
  create?: InputMaybe<UserCreateWithoutBacklogItemsInput>;
};

export type UserCreateNestedOneWithoutTeamsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<UserCreateWithoutTeamsInput>;
};

export type UserCreateOrConnectWithoutBacklogItemsInput = {
  create: UserCreateWithoutBacklogItemsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutBacklogItemsInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  teams?: InputMaybe<TeamMemberCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTeamsInput = {
  backlogItems?: InputMaybe<BacklogItemCreateNestedManyWithoutUserInput>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByWithRelationInput = {
  backlogItems?: InputMaybe<BacklogItemOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  teams?: InputMaybe<TeamMemberOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserScalarFieldEnum =
  | 'id'
  | 'name';

export type UserUpdateInput = {
  backlogItems?: InputMaybe<BacklogItemUpdateManyWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamMemberUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeamsInput>;
  create?: InputMaybe<UserCreateWithoutTeamsInput>;
  update?: InputMaybe<UserUpdateWithoutTeamsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTeamsInput>;
};

export type UserUpdateOneWithoutBacklogItemsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBacklogItemsInput>;
  create?: InputMaybe<UserCreateWithoutBacklogItemsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutBacklogItemsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBacklogItemsInput>;
};

export type UserUpdateWithoutBacklogItemsInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  teams?: InputMaybe<TeamMemberUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutTeamsInput = {
  backlogItems?: InputMaybe<BacklogItemUpdateManyWithoutUserNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutBacklogItemsInput = {
  create: UserCreateWithoutBacklogItemsInput;
  update: UserUpdateWithoutBacklogItemsInput;
};

export type UserUpsertWithoutTeamsInput = {
  create: UserCreateWithoutTeamsInput;
  update: UserUpdateWithoutTeamsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  backlogItems?: InputMaybe<BacklogItemListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  teams?: InputMaybe<TeamMemberListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BacklogItem: ResolverTypeWrapper<BacklogItem>;
  BacklogItemAvgAggregate: ResolverTypeWrapper<BacklogItemAvgAggregate>;
  BacklogItemCountAggregate: ResolverTypeWrapper<BacklogItemCountAggregate>;
  BacklogItemCreateInput: BacklogItemCreateInput;
  BacklogItemCreateManyStoryInput: BacklogItemCreateManyStoryInput;
  BacklogItemCreateManyStoryInputEnvelope: BacklogItemCreateManyStoryInputEnvelope;
  BacklogItemCreateManyUserInput: BacklogItemCreateManyUserInput;
  BacklogItemCreateManyUserInputEnvelope: BacklogItemCreateManyUserInputEnvelope;
  BacklogItemCreateNestedManyWithoutStoryInput: BacklogItemCreateNestedManyWithoutStoryInput;
  BacklogItemCreateNestedManyWithoutUserInput: BacklogItemCreateNestedManyWithoutUserInput;
  BacklogItemCreateOrConnectWithoutStoryInput: BacklogItemCreateOrConnectWithoutStoryInput;
  BacklogItemCreateOrConnectWithoutUserInput: BacklogItemCreateOrConnectWithoutUserInput;
  BacklogItemCreateWithoutStoryInput: BacklogItemCreateWithoutStoryInput;
  BacklogItemCreateWithoutUserInput: BacklogItemCreateWithoutUserInput;
  BacklogItemListRelationFilter: BacklogItemListRelationFilter;
  BacklogItemMaxAggregate: ResolverTypeWrapper<BacklogItemMaxAggregate>;
  BacklogItemMinAggregate: ResolverTypeWrapper<BacklogItemMinAggregate>;
  BacklogItemOrderByRelationAggregateInput: BacklogItemOrderByRelationAggregateInput;
  BacklogItemOrderByWithRelationInput: BacklogItemOrderByWithRelationInput;
  BacklogItemScalarFieldEnum: BacklogItemScalarFieldEnum;
  BacklogItemScalarWhereInput: BacklogItemScalarWhereInput;
  BacklogItemStatus: BacklogItemStatus;
  BacklogItemSumAggregate: ResolverTypeWrapper<BacklogItemSumAggregate>;
  BacklogItemUpdateInput: BacklogItemUpdateInput;
  BacklogItemUpdateManyMutationInput: BacklogItemUpdateManyMutationInput;
  BacklogItemUpdateManyWithWhereWithoutStoryInput: BacklogItemUpdateManyWithWhereWithoutStoryInput;
  BacklogItemUpdateManyWithWhereWithoutUserInput: BacklogItemUpdateManyWithWhereWithoutUserInput;
  BacklogItemUpdateManyWithoutStoryNestedInput: BacklogItemUpdateManyWithoutStoryNestedInput;
  BacklogItemUpdateManyWithoutUserNestedInput: BacklogItemUpdateManyWithoutUserNestedInput;
  BacklogItemUpdateWithWhereUniqueWithoutStoryInput: BacklogItemUpdateWithWhereUniqueWithoutStoryInput;
  BacklogItemUpdateWithWhereUniqueWithoutUserInput: BacklogItemUpdateWithWhereUniqueWithoutUserInput;
  BacklogItemUpdateWithoutStoryInput: BacklogItemUpdateWithoutStoryInput;
  BacklogItemUpdateWithoutUserInput: BacklogItemUpdateWithoutUserInput;
  BacklogItemUpsertWithWhereUniqueWithoutStoryInput: BacklogItemUpsertWithWhereUniqueWithoutStoryInput;
  BacklogItemUpsertWithWhereUniqueWithoutUserInput: BacklogItemUpsertWithWhereUniqueWithoutUserInput;
  BacklogItemWhereInput: BacklogItemWhereInput;
  BacklogItemWhereUniqueInput: BacklogItemWhereUniqueInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  EnumBacklogItemStatusFieldUpdateOperationsInput: EnumBacklogItemStatusFieldUpdateOperationsInput;
  EnumBacklogItemStatusFilter: EnumBacklogItemStatusFilter;
  EnumMemberRoleFieldUpdateOperationsInput: EnumMemberRoleFieldUpdateOperationsInput;
  EnumMemberRoleFilter: EnumMemberRoleFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  MemberRole: MemberRole;
  Mutation: ResolverTypeWrapper<{}>;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumBacklogItemStatusFilter: NestedEnumBacklogItemStatusFilter;
  NestedEnumMemberRoleFilter: NestedEnumMemberRoleFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NullableDateTimeFieldUpdateOperationsInput: NullableDateTimeFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Project: ResolverTypeWrapper<Project>;
  ProjectAvgAggregate: ResolverTypeWrapper<ProjectAvgAggregate>;
  ProjectCount: ResolverTypeWrapper<ProjectCount>;
  ProjectCountAggregate: ResolverTypeWrapper<ProjectCountAggregate>;
  ProjectCreateInput: ProjectCreateInput;
  ProjectCreateManyTeamInput: ProjectCreateManyTeamInput;
  ProjectCreateManyTeamInputEnvelope: ProjectCreateManyTeamInputEnvelope;
  ProjectCreateNestedManyWithoutTeamInput: ProjectCreateNestedManyWithoutTeamInput;
  ProjectCreateNestedOneWithoutStoriesInput: ProjectCreateNestedOneWithoutStoriesInput;
  ProjectCreateOrConnectWithoutStoriesInput: ProjectCreateOrConnectWithoutStoriesInput;
  ProjectCreateOrConnectWithoutTeamInput: ProjectCreateOrConnectWithoutTeamInput;
  ProjectCreateWithoutStoriesInput: ProjectCreateWithoutStoriesInput;
  ProjectCreateWithoutTeamInput: ProjectCreateWithoutTeamInput;
  ProjectListRelationFilter: ProjectListRelationFilter;
  ProjectMaxAggregate: ResolverTypeWrapper<ProjectMaxAggregate>;
  ProjectMinAggregate: ResolverTypeWrapper<ProjectMinAggregate>;
  ProjectOrderByRelationAggregateInput: ProjectOrderByRelationAggregateInput;
  ProjectOrderByWithRelationInput: ProjectOrderByWithRelationInput;
  ProjectRelationFilter: ProjectRelationFilter;
  ProjectScalarWhereInput: ProjectScalarWhereInput;
  ProjectSumAggregate: ResolverTypeWrapper<ProjectSumAggregate>;
  ProjectUpdateInput: ProjectUpdateInput;
  ProjectUpdateManyMutationInput: ProjectUpdateManyMutationInput;
  ProjectUpdateManyWithWhereWithoutTeamInput: ProjectUpdateManyWithWhereWithoutTeamInput;
  ProjectUpdateManyWithoutTeamNestedInput: ProjectUpdateManyWithoutTeamNestedInput;
  ProjectUpdateOneRequiredWithoutStoriesNestedInput: ProjectUpdateOneRequiredWithoutStoriesNestedInput;
  ProjectUpdateWithWhereUniqueWithoutTeamInput: ProjectUpdateWithWhereUniqueWithoutTeamInput;
  ProjectUpdateWithoutStoriesInput: ProjectUpdateWithoutStoriesInput;
  ProjectUpdateWithoutTeamInput: ProjectUpdateWithoutTeamInput;
  ProjectUpsertWithWhereUniqueWithoutTeamInput: ProjectUpsertWithWhereUniqueWithoutTeamInput;
  ProjectUpsertWithoutStoriesInput: ProjectUpsertWithoutStoriesInput;
  ProjectWhereInput: ProjectWhereInput;
  ProjectWhereUniqueInput: ProjectWhereUniqueInput;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  SortOrder: SortOrder;
  Story: ResolverTypeWrapper<Story>;
  StoryAvgAggregate: ResolverTypeWrapper<StoryAvgAggregate>;
  StoryCount: ResolverTypeWrapper<StoryCount>;
  StoryCountAggregate: ResolverTypeWrapper<StoryCountAggregate>;
  StoryCreateInput: StoryCreateInput;
  StoryCreateManyProjectInput: StoryCreateManyProjectInput;
  StoryCreateManyProjectInputEnvelope: StoryCreateManyProjectInputEnvelope;
  StoryCreateNestedManyWithoutProjectInput: StoryCreateNestedManyWithoutProjectInput;
  StoryCreateNestedOneWithoutBacklogItemsInput: StoryCreateNestedOneWithoutBacklogItemsInput;
  StoryCreateOrConnectWithoutBacklogItemsInput: StoryCreateOrConnectWithoutBacklogItemsInput;
  StoryCreateOrConnectWithoutProjectInput: StoryCreateOrConnectWithoutProjectInput;
  StoryCreateWithoutBacklogItemsInput: StoryCreateWithoutBacklogItemsInput;
  StoryCreateWithoutProjectInput: StoryCreateWithoutProjectInput;
  StoryListRelationFilter: StoryListRelationFilter;
  StoryMaxAggregate: ResolverTypeWrapper<StoryMaxAggregate>;
  StoryMinAggregate: ResolverTypeWrapper<StoryMinAggregate>;
  StoryOrderByRelationAggregateInput: StoryOrderByRelationAggregateInput;
  StoryOrderByWithRelationInput: StoryOrderByWithRelationInput;
  StoryRelationFilter: StoryRelationFilter;
  StoryScalarWhereInput: StoryScalarWhereInput;
  StorySumAggregate: ResolverTypeWrapper<StorySumAggregate>;
  StoryUpdateInput: StoryUpdateInput;
  StoryUpdateManyMutationInput: StoryUpdateManyMutationInput;
  StoryUpdateManyWithWhereWithoutProjectInput: StoryUpdateManyWithWhereWithoutProjectInput;
  StoryUpdateManyWithoutProjectNestedInput: StoryUpdateManyWithoutProjectNestedInput;
  StoryUpdateOneRequiredWithoutBacklogItemsNestedInput: StoryUpdateOneRequiredWithoutBacklogItemsNestedInput;
  StoryUpdateWithWhereUniqueWithoutProjectInput: StoryUpdateWithWhereUniqueWithoutProjectInput;
  StoryUpdateWithoutBacklogItemsInput: StoryUpdateWithoutBacklogItemsInput;
  StoryUpdateWithoutProjectInput: StoryUpdateWithoutProjectInput;
  StoryUpsertWithWhereUniqueWithoutProjectInput: StoryUpsertWithWhereUniqueWithoutProjectInput;
  StoryUpsertWithoutBacklogItemsInput: StoryUpsertWithoutBacklogItemsInput;
  StoryWhereInput: StoryWhereInput;
  StoryWhereUniqueInput: StoryWhereUniqueInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Team: ResolverTypeWrapper<Team>;
  TeamAvgAggregate: ResolverTypeWrapper<TeamAvgAggregate>;
  TeamCount: ResolverTypeWrapper<TeamCount>;
  TeamCountAggregate: ResolverTypeWrapper<TeamCountAggregate>;
  TeamCreateInput: TeamCreateInput;
  TeamCreateNestedOneWithoutMembersInput: TeamCreateNestedOneWithoutMembersInput;
  TeamCreateNestedOneWithoutProjectsInput: TeamCreateNestedOneWithoutProjectsInput;
  TeamCreateOrConnectWithoutMembersInput: TeamCreateOrConnectWithoutMembersInput;
  TeamCreateOrConnectWithoutProjectsInput: TeamCreateOrConnectWithoutProjectsInput;
  TeamCreateWithoutMembersInput: TeamCreateWithoutMembersInput;
  TeamCreateWithoutProjectsInput: TeamCreateWithoutProjectsInput;
  TeamMaxAggregate: ResolverTypeWrapper<TeamMaxAggregate>;
  TeamMember: ResolverTypeWrapper<TeamMember>;
  TeamMemberAvgAggregate: ResolverTypeWrapper<TeamMemberAvgAggregate>;
  TeamMemberCountAggregate: ResolverTypeWrapper<TeamMemberCountAggregate>;
  TeamMemberCreateInput: TeamMemberCreateInput;
  TeamMemberCreateManyTeamInput: TeamMemberCreateManyTeamInput;
  TeamMemberCreateManyTeamInputEnvelope: TeamMemberCreateManyTeamInputEnvelope;
  TeamMemberCreateManyUserInput: TeamMemberCreateManyUserInput;
  TeamMemberCreateManyUserInputEnvelope: TeamMemberCreateManyUserInputEnvelope;
  TeamMemberCreateNestedManyWithoutTeamInput: TeamMemberCreateNestedManyWithoutTeamInput;
  TeamMemberCreateNestedManyWithoutUserInput: TeamMemberCreateNestedManyWithoutUserInput;
  TeamMemberCreateOrConnectWithoutTeamInput: TeamMemberCreateOrConnectWithoutTeamInput;
  TeamMemberCreateOrConnectWithoutUserInput: TeamMemberCreateOrConnectWithoutUserInput;
  TeamMemberCreateWithoutTeamInput: TeamMemberCreateWithoutTeamInput;
  TeamMemberCreateWithoutUserInput: TeamMemberCreateWithoutUserInput;
  TeamMemberListRelationFilter: TeamMemberListRelationFilter;
  TeamMemberMaxAggregate: ResolverTypeWrapper<TeamMemberMaxAggregate>;
  TeamMemberMinAggregate: ResolverTypeWrapper<TeamMemberMinAggregate>;
  TeamMemberOrderByRelationAggregateInput: TeamMemberOrderByRelationAggregateInput;
  TeamMemberOrderByWithRelationInput: TeamMemberOrderByWithRelationInput;
  TeamMemberScalarFieldEnum: TeamMemberScalarFieldEnum;
  TeamMemberScalarWhereInput: TeamMemberScalarWhereInput;
  TeamMemberSumAggregate: ResolverTypeWrapper<TeamMemberSumAggregate>;
  TeamMemberTeamIdUserIdCompoundUniqueInput: TeamMemberTeamIdUserIdCompoundUniqueInput;
  TeamMemberUpdateInput: TeamMemberUpdateInput;
  TeamMemberUpdateManyMutationInput: TeamMemberUpdateManyMutationInput;
  TeamMemberUpdateManyWithWhereWithoutTeamInput: TeamMemberUpdateManyWithWhereWithoutTeamInput;
  TeamMemberUpdateManyWithWhereWithoutUserInput: TeamMemberUpdateManyWithWhereWithoutUserInput;
  TeamMemberUpdateManyWithoutTeamNestedInput: TeamMemberUpdateManyWithoutTeamNestedInput;
  TeamMemberUpdateManyWithoutUserNestedInput: TeamMemberUpdateManyWithoutUserNestedInput;
  TeamMemberUpdateWithWhereUniqueWithoutTeamInput: TeamMemberUpdateWithWhereUniqueWithoutTeamInput;
  TeamMemberUpdateWithWhereUniqueWithoutUserInput: TeamMemberUpdateWithWhereUniqueWithoutUserInput;
  TeamMemberUpdateWithoutTeamInput: TeamMemberUpdateWithoutTeamInput;
  TeamMemberUpdateWithoutUserInput: TeamMemberUpdateWithoutUserInput;
  TeamMemberUpsertWithWhereUniqueWithoutTeamInput: TeamMemberUpsertWithWhereUniqueWithoutTeamInput;
  TeamMemberUpsertWithWhereUniqueWithoutUserInput: TeamMemberUpsertWithWhereUniqueWithoutUserInput;
  TeamMemberWhereInput: TeamMemberWhereInput;
  TeamMemberWhereUniqueInput: TeamMemberWhereUniqueInput;
  TeamMinAggregate: ResolverTypeWrapper<TeamMinAggregate>;
  TeamOrderByWithRelationInput: TeamOrderByWithRelationInput;
  TeamRelationFilter: TeamRelationFilter;
  TeamScalarFieldEnum: TeamScalarFieldEnum;
  TeamSumAggregate: ResolverTypeWrapper<TeamSumAggregate>;
  TeamUpdateInput: TeamUpdateInput;
  TeamUpdateOneRequiredWithoutMembersNestedInput: TeamUpdateOneRequiredWithoutMembersNestedInput;
  TeamUpdateOneRequiredWithoutProjectsNestedInput: TeamUpdateOneRequiredWithoutProjectsNestedInput;
  TeamUpdateWithoutMembersInput: TeamUpdateWithoutMembersInput;
  TeamUpdateWithoutProjectsInput: TeamUpdateWithoutProjectsInput;
  TeamUpsertWithoutMembersInput: TeamUpsertWithoutMembersInput;
  TeamUpsertWithoutProjectsInput: TeamUpsertWithoutProjectsInput;
  TeamWhereInput: TeamWhereInput;
  TeamWhereUniqueInput: TeamWhereUniqueInput;
  User: ResolverTypeWrapper<User>;
  UserCount: ResolverTypeWrapper<UserCount>;
  UserCountAggregate: ResolverTypeWrapper<UserCountAggregate>;
  UserCreateInput: UserCreateInput;
  UserCreateNestedOneWithoutBacklogItemsInput: UserCreateNestedOneWithoutBacklogItemsInput;
  UserCreateNestedOneWithoutTeamsInput: UserCreateNestedOneWithoutTeamsInput;
  UserCreateOrConnectWithoutBacklogItemsInput: UserCreateOrConnectWithoutBacklogItemsInput;
  UserCreateOrConnectWithoutTeamsInput: UserCreateOrConnectWithoutTeamsInput;
  UserCreateWithoutBacklogItemsInput: UserCreateWithoutBacklogItemsInput;
  UserCreateWithoutTeamsInput: UserCreateWithoutTeamsInput;
  UserMaxAggregate: ResolverTypeWrapper<UserMaxAggregate>;
  UserMinAggregate: ResolverTypeWrapper<UserMinAggregate>;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserScalarFieldEnum: UserScalarFieldEnum;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneRequiredWithoutTeamsNestedInput: UserUpdateOneRequiredWithoutTeamsNestedInput;
  UserUpdateOneWithoutBacklogItemsNestedInput: UserUpdateOneWithoutBacklogItemsNestedInput;
  UserUpdateWithoutBacklogItemsInput: UserUpdateWithoutBacklogItemsInput;
  UserUpdateWithoutTeamsInput: UserUpdateWithoutTeamsInput;
  UserUpsertWithoutBacklogItemsInput: UserUpsertWithoutBacklogItemsInput;
  UserUpsertWithoutTeamsInput: UserUpsertWithoutTeamsInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BacklogItem: BacklogItem;
  BacklogItemAvgAggregate: BacklogItemAvgAggregate;
  BacklogItemCountAggregate: BacklogItemCountAggregate;
  BacklogItemCreateInput: BacklogItemCreateInput;
  BacklogItemCreateManyStoryInput: BacklogItemCreateManyStoryInput;
  BacklogItemCreateManyStoryInputEnvelope: BacklogItemCreateManyStoryInputEnvelope;
  BacklogItemCreateManyUserInput: BacklogItemCreateManyUserInput;
  BacklogItemCreateManyUserInputEnvelope: BacklogItemCreateManyUserInputEnvelope;
  BacklogItemCreateNestedManyWithoutStoryInput: BacklogItemCreateNestedManyWithoutStoryInput;
  BacklogItemCreateNestedManyWithoutUserInput: BacklogItemCreateNestedManyWithoutUserInput;
  BacklogItemCreateOrConnectWithoutStoryInput: BacklogItemCreateOrConnectWithoutStoryInput;
  BacklogItemCreateOrConnectWithoutUserInput: BacklogItemCreateOrConnectWithoutUserInput;
  BacklogItemCreateWithoutStoryInput: BacklogItemCreateWithoutStoryInput;
  BacklogItemCreateWithoutUserInput: BacklogItemCreateWithoutUserInput;
  BacklogItemListRelationFilter: BacklogItemListRelationFilter;
  BacklogItemMaxAggregate: BacklogItemMaxAggregate;
  BacklogItemMinAggregate: BacklogItemMinAggregate;
  BacklogItemOrderByRelationAggregateInput: BacklogItemOrderByRelationAggregateInput;
  BacklogItemOrderByWithRelationInput: BacklogItemOrderByWithRelationInput;
  BacklogItemScalarWhereInput: BacklogItemScalarWhereInput;
  BacklogItemSumAggregate: BacklogItemSumAggregate;
  BacklogItemUpdateInput: BacklogItemUpdateInput;
  BacklogItemUpdateManyMutationInput: BacklogItemUpdateManyMutationInput;
  BacklogItemUpdateManyWithWhereWithoutStoryInput: BacklogItemUpdateManyWithWhereWithoutStoryInput;
  BacklogItemUpdateManyWithWhereWithoutUserInput: BacklogItemUpdateManyWithWhereWithoutUserInput;
  BacklogItemUpdateManyWithoutStoryNestedInput: BacklogItemUpdateManyWithoutStoryNestedInput;
  BacklogItemUpdateManyWithoutUserNestedInput: BacklogItemUpdateManyWithoutUserNestedInput;
  BacklogItemUpdateWithWhereUniqueWithoutStoryInput: BacklogItemUpdateWithWhereUniqueWithoutStoryInput;
  BacklogItemUpdateWithWhereUniqueWithoutUserInput: BacklogItemUpdateWithWhereUniqueWithoutUserInput;
  BacklogItemUpdateWithoutStoryInput: BacklogItemUpdateWithoutStoryInput;
  BacklogItemUpdateWithoutUserInput: BacklogItemUpdateWithoutUserInput;
  BacklogItemUpsertWithWhereUniqueWithoutStoryInput: BacklogItemUpsertWithWhereUniqueWithoutStoryInput;
  BacklogItemUpsertWithWhereUniqueWithoutUserInput: BacklogItemUpsertWithWhereUniqueWithoutUserInput;
  BacklogItemWhereInput: BacklogItemWhereInput;
  BacklogItemWhereUniqueInput: BacklogItemWhereUniqueInput;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  DateTimeFieldUpdateOperationsInput: DateTimeFieldUpdateOperationsInput;
  DateTimeFilter: DateTimeFilter;
  DateTimeNullableFilter: DateTimeNullableFilter;
  EnumBacklogItemStatusFieldUpdateOperationsInput: EnumBacklogItemStatusFieldUpdateOperationsInput;
  EnumBacklogItemStatusFilter: EnumBacklogItemStatusFilter;
  EnumMemberRoleFieldUpdateOperationsInput: EnumMemberRoleFieldUpdateOperationsInput;
  EnumMemberRoleFilter: EnumMemberRoleFilter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  Mutation: {};
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedDateTimeNullableFilter: NestedDateTimeNullableFilter;
  NestedEnumBacklogItemStatusFilter: NestedEnumBacklogItemStatusFilter;
  NestedEnumMemberRoleFilter: NestedEnumMemberRoleFilter;
  NestedIntFilter: NestedIntFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  NullableDateTimeFieldUpdateOperationsInput: NullableDateTimeFieldUpdateOperationsInput;
  NullableStringFieldUpdateOperationsInput: NullableStringFieldUpdateOperationsInput;
  Project: Project;
  ProjectAvgAggregate: ProjectAvgAggregate;
  ProjectCount: ProjectCount;
  ProjectCountAggregate: ProjectCountAggregate;
  ProjectCreateInput: ProjectCreateInput;
  ProjectCreateManyTeamInput: ProjectCreateManyTeamInput;
  ProjectCreateManyTeamInputEnvelope: ProjectCreateManyTeamInputEnvelope;
  ProjectCreateNestedManyWithoutTeamInput: ProjectCreateNestedManyWithoutTeamInput;
  ProjectCreateNestedOneWithoutStoriesInput: ProjectCreateNestedOneWithoutStoriesInput;
  ProjectCreateOrConnectWithoutStoriesInput: ProjectCreateOrConnectWithoutStoriesInput;
  ProjectCreateOrConnectWithoutTeamInput: ProjectCreateOrConnectWithoutTeamInput;
  ProjectCreateWithoutStoriesInput: ProjectCreateWithoutStoriesInput;
  ProjectCreateWithoutTeamInput: ProjectCreateWithoutTeamInput;
  ProjectListRelationFilter: ProjectListRelationFilter;
  ProjectMaxAggregate: ProjectMaxAggregate;
  ProjectMinAggregate: ProjectMinAggregate;
  ProjectOrderByRelationAggregateInput: ProjectOrderByRelationAggregateInput;
  ProjectOrderByWithRelationInput: ProjectOrderByWithRelationInput;
  ProjectRelationFilter: ProjectRelationFilter;
  ProjectScalarWhereInput: ProjectScalarWhereInput;
  ProjectSumAggregate: ProjectSumAggregate;
  ProjectUpdateInput: ProjectUpdateInput;
  ProjectUpdateManyMutationInput: ProjectUpdateManyMutationInput;
  ProjectUpdateManyWithWhereWithoutTeamInput: ProjectUpdateManyWithWhereWithoutTeamInput;
  ProjectUpdateManyWithoutTeamNestedInput: ProjectUpdateManyWithoutTeamNestedInput;
  ProjectUpdateOneRequiredWithoutStoriesNestedInput: ProjectUpdateOneRequiredWithoutStoriesNestedInput;
  ProjectUpdateWithWhereUniqueWithoutTeamInput: ProjectUpdateWithWhereUniqueWithoutTeamInput;
  ProjectUpdateWithoutStoriesInput: ProjectUpdateWithoutStoriesInput;
  ProjectUpdateWithoutTeamInput: ProjectUpdateWithoutTeamInput;
  ProjectUpsertWithWhereUniqueWithoutTeamInput: ProjectUpsertWithWhereUniqueWithoutTeamInput;
  ProjectUpsertWithoutStoriesInput: ProjectUpsertWithoutStoriesInput;
  ProjectWhereInput: ProjectWhereInput;
  ProjectWhereUniqueInput: ProjectWhereUniqueInput;
  Query: {};
  Story: Story;
  StoryAvgAggregate: StoryAvgAggregate;
  StoryCount: StoryCount;
  StoryCountAggregate: StoryCountAggregate;
  StoryCreateInput: StoryCreateInput;
  StoryCreateManyProjectInput: StoryCreateManyProjectInput;
  StoryCreateManyProjectInputEnvelope: StoryCreateManyProjectInputEnvelope;
  StoryCreateNestedManyWithoutProjectInput: StoryCreateNestedManyWithoutProjectInput;
  StoryCreateNestedOneWithoutBacklogItemsInput: StoryCreateNestedOneWithoutBacklogItemsInput;
  StoryCreateOrConnectWithoutBacklogItemsInput: StoryCreateOrConnectWithoutBacklogItemsInput;
  StoryCreateOrConnectWithoutProjectInput: StoryCreateOrConnectWithoutProjectInput;
  StoryCreateWithoutBacklogItemsInput: StoryCreateWithoutBacklogItemsInput;
  StoryCreateWithoutProjectInput: StoryCreateWithoutProjectInput;
  StoryListRelationFilter: StoryListRelationFilter;
  StoryMaxAggregate: StoryMaxAggregate;
  StoryMinAggregate: StoryMinAggregate;
  StoryOrderByRelationAggregateInput: StoryOrderByRelationAggregateInput;
  StoryOrderByWithRelationInput: StoryOrderByWithRelationInput;
  StoryRelationFilter: StoryRelationFilter;
  StoryScalarWhereInput: StoryScalarWhereInput;
  StorySumAggregate: StorySumAggregate;
  StoryUpdateInput: StoryUpdateInput;
  StoryUpdateManyMutationInput: StoryUpdateManyMutationInput;
  StoryUpdateManyWithWhereWithoutProjectInput: StoryUpdateManyWithWhereWithoutProjectInput;
  StoryUpdateManyWithoutProjectNestedInput: StoryUpdateManyWithoutProjectNestedInput;
  StoryUpdateOneRequiredWithoutBacklogItemsNestedInput: StoryUpdateOneRequiredWithoutBacklogItemsNestedInput;
  StoryUpdateWithWhereUniqueWithoutProjectInput: StoryUpdateWithWhereUniqueWithoutProjectInput;
  StoryUpdateWithoutBacklogItemsInput: StoryUpdateWithoutBacklogItemsInput;
  StoryUpdateWithoutProjectInput: StoryUpdateWithoutProjectInput;
  StoryUpsertWithWhereUniqueWithoutProjectInput: StoryUpsertWithWhereUniqueWithoutProjectInput;
  StoryUpsertWithoutBacklogItemsInput: StoryUpsertWithoutBacklogItemsInput;
  StoryWhereInput: StoryWhereInput;
  StoryWhereUniqueInput: StoryWhereUniqueInput;
  String: Scalars['String'];
  StringFieldUpdateOperationsInput: StringFieldUpdateOperationsInput;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Team: Team;
  TeamAvgAggregate: TeamAvgAggregate;
  TeamCount: TeamCount;
  TeamCountAggregate: TeamCountAggregate;
  TeamCreateInput: TeamCreateInput;
  TeamCreateNestedOneWithoutMembersInput: TeamCreateNestedOneWithoutMembersInput;
  TeamCreateNestedOneWithoutProjectsInput: TeamCreateNestedOneWithoutProjectsInput;
  TeamCreateOrConnectWithoutMembersInput: TeamCreateOrConnectWithoutMembersInput;
  TeamCreateOrConnectWithoutProjectsInput: TeamCreateOrConnectWithoutProjectsInput;
  TeamCreateWithoutMembersInput: TeamCreateWithoutMembersInput;
  TeamCreateWithoutProjectsInput: TeamCreateWithoutProjectsInput;
  TeamMaxAggregate: TeamMaxAggregate;
  TeamMember: TeamMember;
  TeamMemberAvgAggregate: TeamMemberAvgAggregate;
  TeamMemberCountAggregate: TeamMemberCountAggregate;
  TeamMemberCreateInput: TeamMemberCreateInput;
  TeamMemberCreateManyTeamInput: TeamMemberCreateManyTeamInput;
  TeamMemberCreateManyTeamInputEnvelope: TeamMemberCreateManyTeamInputEnvelope;
  TeamMemberCreateManyUserInput: TeamMemberCreateManyUserInput;
  TeamMemberCreateManyUserInputEnvelope: TeamMemberCreateManyUserInputEnvelope;
  TeamMemberCreateNestedManyWithoutTeamInput: TeamMemberCreateNestedManyWithoutTeamInput;
  TeamMemberCreateNestedManyWithoutUserInput: TeamMemberCreateNestedManyWithoutUserInput;
  TeamMemberCreateOrConnectWithoutTeamInput: TeamMemberCreateOrConnectWithoutTeamInput;
  TeamMemberCreateOrConnectWithoutUserInput: TeamMemberCreateOrConnectWithoutUserInput;
  TeamMemberCreateWithoutTeamInput: TeamMemberCreateWithoutTeamInput;
  TeamMemberCreateWithoutUserInput: TeamMemberCreateWithoutUserInput;
  TeamMemberListRelationFilter: TeamMemberListRelationFilter;
  TeamMemberMaxAggregate: TeamMemberMaxAggregate;
  TeamMemberMinAggregate: TeamMemberMinAggregate;
  TeamMemberOrderByRelationAggregateInput: TeamMemberOrderByRelationAggregateInput;
  TeamMemberOrderByWithRelationInput: TeamMemberOrderByWithRelationInput;
  TeamMemberScalarWhereInput: TeamMemberScalarWhereInput;
  TeamMemberSumAggregate: TeamMemberSumAggregate;
  TeamMemberTeamIdUserIdCompoundUniqueInput: TeamMemberTeamIdUserIdCompoundUniqueInput;
  TeamMemberUpdateInput: TeamMemberUpdateInput;
  TeamMemberUpdateManyMutationInput: TeamMemberUpdateManyMutationInput;
  TeamMemberUpdateManyWithWhereWithoutTeamInput: TeamMemberUpdateManyWithWhereWithoutTeamInput;
  TeamMemberUpdateManyWithWhereWithoutUserInput: TeamMemberUpdateManyWithWhereWithoutUserInput;
  TeamMemberUpdateManyWithoutTeamNestedInput: TeamMemberUpdateManyWithoutTeamNestedInput;
  TeamMemberUpdateManyWithoutUserNestedInput: TeamMemberUpdateManyWithoutUserNestedInput;
  TeamMemberUpdateWithWhereUniqueWithoutTeamInput: TeamMemberUpdateWithWhereUniqueWithoutTeamInput;
  TeamMemberUpdateWithWhereUniqueWithoutUserInput: TeamMemberUpdateWithWhereUniqueWithoutUserInput;
  TeamMemberUpdateWithoutTeamInput: TeamMemberUpdateWithoutTeamInput;
  TeamMemberUpdateWithoutUserInput: TeamMemberUpdateWithoutUserInput;
  TeamMemberUpsertWithWhereUniqueWithoutTeamInput: TeamMemberUpsertWithWhereUniqueWithoutTeamInput;
  TeamMemberUpsertWithWhereUniqueWithoutUserInput: TeamMemberUpsertWithWhereUniqueWithoutUserInput;
  TeamMemberWhereInput: TeamMemberWhereInput;
  TeamMemberWhereUniqueInput: TeamMemberWhereUniqueInput;
  TeamMinAggregate: TeamMinAggregate;
  TeamOrderByWithRelationInput: TeamOrderByWithRelationInput;
  TeamRelationFilter: TeamRelationFilter;
  TeamSumAggregate: TeamSumAggregate;
  TeamUpdateInput: TeamUpdateInput;
  TeamUpdateOneRequiredWithoutMembersNestedInput: TeamUpdateOneRequiredWithoutMembersNestedInput;
  TeamUpdateOneRequiredWithoutProjectsNestedInput: TeamUpdateOneRequiredWithoutProjectsNestedInput;
  TeamUpdateWithoutMembersInput: TeamUpdateWithoutMembersInput;
  TeamUpdateWithoutProjectsInput: TeamUpdateWithoutProjectsInput;
  TeamUpsertWithoutMembersInput: TeamUpsertWithoutMembersInput;
  TeamUpsertWithoutProjectsInput: TeamUpsertWithoutProjectsInput;
  TeamWhereInput: TeamWhereInput;
  TeamWhereUniqueInput: TeamWhereUniqueInput;
  User: User;
  UserCount: UserCount;
  UserCountAggregate: UserCountAggregate;
  UserCreateInput: UserCreateInput;
  UserCreateNestedOneWithoutBacklogItemsInput: UserCreateNestedOneWithoutBacklogItemsInput;
  UserCreateNestedOneWithoutTeamsInput: UserCreateNestedOneWithoutTeamsInput;
  UserCreateOrConnectWithoutBacklogItemsInput: UserCreateOrConnectWithoutBacklogItemsInput;
  UserCreateOrConnectWithoutTeamsInput: UserCreateOrConnectWithoutTeamsInput;
  UserCreateWithoutBacklogItemsInput: UserCreateWithoutBacklogItemsInput;
  UserCreateWithoutTeamsInput: UserCreateWithoutTeamsInput;
  UserMaxAggregate: UserMaxAggregate;
  UserMinAggregate: UserMinAggregate;
  UserOrderByWithRelationInput: UserOrderByWithRelationInput;
  UserRelationFilter: UserRelationFilter;
  UserUpdateInput: UserUpdateInput;
  UserUpdateOneRequiredWithoutTeamsNestedInput: UserUpdateOneRequiredWithoutTeamsNestedInput;
  UserUpdateOneWithoutBacklogItemsNestedInput: UserUpdateOneWithoutBacklogItemsNestedInput;
  UserUpdateWithoutBacklogItemsInput: UserUpdateWithoutBacklogItemsInput;
  UserUpdateWithoutTeamsInput: UserUpdateWithoutTeamsInput;
  UserUpsertWithoutBacklogItemsInput: UserUpsertWithoutBacklogItemsInput;
  UserUpsertWithoutTeamsInput: UserUpsertWithoutTeamsInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
}>;

export type BacklogItemResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BacklogItem'] = ResolversParentTypes['BacklogItem']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BacklogItemStatus'], ParentType, ContextType>;
  story?: Resolver<ResolversTypes['Story'], ParentType, ContextType>;
  storyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BacklogItemAvgAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BacklogItemAvgAggregate'] = ResolversParentTypes['BacklogItemAvgAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  storyId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BacklogItemCountAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BacklogItemCountAggregate'] = ResolversParentTypes['BacklogItemCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storyId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BacklogItemMaxAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BacklogItemMaxAggregate'] = ResolversParentTypes['BacklogItemMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['BacklogItemStatus']>, ParentType, ContextType>;
  storyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BacklogItemMinAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BacklogItemMinAggregate'] = ResolversParentTypes['BacklogItemMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['BacklogItemStatus']>, ParentType, ContextType>;
  storyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BacklogItemSumAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['BacklogItemSumAggregate'] = ResolversParentTypes['BacklogItemSumAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  storyId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createBacklogItem?: Resolver<ResolversTypes['BacklogItem'], ParentType, ContextType, RequireFields<MutationCreateBacklogItemArgs, 'createBacklogItemInput'>>;
  createProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'projectCreateInput'>>;
  createStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationCreateStoryArgs, 'createStoryInput'>>;
  createTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationCreateTeamArgs, 'teamCreateInput'>>;
  createTeamMember?: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationCreateTeamMemberArgs, 'teamMemberCreateInput'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserInput'>>;
  removeBacklogItem?: Resolver<ResolversTypes['BacklogItem'], ParentType, ContextType, RequireFields<MutationRemoveBacklogItemArgs, 'id'>>;
  removeProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationRemoveProjectArgs, 'id'>>;
  removeStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationRemoveStoryArgs, 'id'>>;
  removeTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationRemoveTeamArgs, 'id'>>;
  removeTeamMember?: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationRemoveTeamMemberArgs, 'id'>>;
  removeUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRemoveUserArgs, 'id'>>;
  updateBacklogItem?: Resolver<ResolversTypes['BacklogItem'], ParentType, ContextType, RequireFields<MutationUpdateBacklogItemArgs, 'id' | 'updateBacklogItemInput'>>;
  updateProject?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<MutationUpdateProjectArgs, 'id' | 'updateProjectInput'>>;
  updateStory?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<MutationUpdateStoryArgs, 'id' | 'updateStoryInput'>>;
  updateTeam?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<MutationUpdateTeamArgs, 'id' | 'teamUpdateInput'>>;
  updateTeamMember?: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<MutationUpdateTeamMemberArgs, 'teamId' | 'teamMemberUpdateInput' | 'userd'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'updateUserInput'>>;
}>;

export type ProjectResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  _count?: Resolver<ResolversTypes['ProjectCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stories?: Resolver<Maybe<Array<ResolversTypes['Story']>>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectAvgAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectAvgAggregate'] = ResolversParentTypes['ProjectAvgAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectCount'] = ResolversParentTypes['ProjectCount']> = ResolversObject<{
  stories?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectCountAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectCountAggregate'] = ResolversParentTypes['ProjectCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectMaxAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectMaxAggregate'] = ResolversParentTypes['ProjectMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectMinAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectMinAggregate'] = ResolversParentTypes['ProjectMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectSumAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProjectSumAggregate'] = ResolversParentTypes['ProjectSumAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  backlogItem?: Resolver<ResolversTypes['BacklogItem'], ParentType, ContextType, RequireFields<QueryBacklogItemArgs, 'id'>>;
  backlogItems?: Resolver<Array<ResolversTypes['BacklogItem']>, ParentType, ContextType, Partial<QueryBacklogItemsArgs>>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projects?: Resolver<Array<ResolversTypes['Project']>, ParentType, ContextType>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  story?: Resolver<ResolversTypes['Story'], ParentType, ContextType, RequireFields<QueryStoryArgs, 'id'>>;
  team?: Resolver<ResolversTypes['Team'], ParentType, ContextType, RequireFields<QueryTeamArgs, 'id'>>;
  teamMember?: Resolver<ResolversTypes['TeamMember'], ParentType, ContextType, RequireFields<QueryTeamMemberArgs, 'teamId' | 'userd'>>;
  teamMembers?: Resolver<Array<ResolversTypes['TeamMember']>, ParentType, ContextType, Partial<QueryTeamMembersArgs>>;
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType, Partial<QueryTeamsArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
}>;

export type StoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story']> = ResolversObject<{
  _count?: Resolver<ResolversTypes['StoryCount'], ParentType, ContextType>;
  backlogItems?: Resolver<Maybe<Array<ResolversTypes['BacklogItem']>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryAvgAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StoryAvgAggregate'] = ResolversParentTypes['StoryAvgAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StoryCount'] = ResolversParentTypes['StoryCount']> = ResolversObject<{
  backlogItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryCountAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StoryCountAggregate'] = ResolversParentTypes['StoryCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projectId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  targetDate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryMaxAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StoryMaxAggregate'] = ResolversParentTypes['StoryMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryMinAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StoryMinAggregate'] = ResolversParentTypes['StoryMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  targetDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StorySumAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StorySumAggregate'] = ResolversParentTypes['StorySumAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  _count?: Resolver<ResolversTypes['TeamCount'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<TeamMembersArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  projects?: Resolver<Maybe<Array<ResolversTypes['Project']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamAvgAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamAvgAggregate'] = ResolversParentTypes['TeamAvgAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamCount'] = ResolversParentTypes['TeamCount']> = ResolversObject<{
  members?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  projects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamCountAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamCountAggregate'] = ResolversParentTypes['TeamCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMaxAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMaxAggregate'] = ResolversParentTypes['TeamMaxAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMember'] = ResolversParentTypes['TeamMember']> = ResolversObject<{
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['MemberRole'], ParentType, ContextType>;
  team?: Resolver<ResolversTypes['Team'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberAvgAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMemberAvgAggregate'] = ResolversParentTypes['TeamMemberAvgAggregate']> = ResolversObject<{
  teamId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberCountAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMemberCountAggregate'] = ResolversParentTypes['TeamMemberCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberMaxAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMemberMaxAggregate'] = ResolversParentTypes['TeamMemberMaxAggregate']> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['MemberRole']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberMinAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMemberMinAggregate'] = ResolversParentTypes['TeamMemberMinAggregate']> = ResolversObject<{
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['MemberRole']>, ParentType, ContextType>;
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMemberSumAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMemberSumAggregate'] = ResolversParentTypes['TeamMemberSumAggregate']> = ResolversObject<{
  teamId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamMinAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamMinAggregate'] = ResolversParentTypes['TeamMinAggregate']> = ResolversObject<{
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TeamSumAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TeamSumAggregate'] = ResolversParentTypes['TeamSumAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _count?: Resolver<ResolversTypes['UserCount'], ParentType, ContextType>;
  backlogItems?: Resolver<Maybe<Array<ResolversTypes['BacklogItem']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  teams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType, Partial<UserTeamsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCount'] = ResolversParentTypes['UserCount']> = ResolversObject<{
  backlogItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teams?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserCountAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserCountAggregate'] = ResolversParentTypes['UserCountAggregate']> = ResolversObject<{
  _all?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMaxAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserMaxAggregate'] = ResolversParentTypes['UserMaxAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserMinAggregateResolvers<ContextType = Context, ParentType extends ResolversParentTypes['UserMinAggregate'] = ResolversParentTypes['UserMinAggregate']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  BacklogItem?: BacklogItemResolvers<ContextType>;
  BacklogItemAvgAggregate?: BacklogItemAvgAggregateResolvers<ContextType>;
  BacklogItemCountAggregate?: BacklogItemCountAggregateResolvers<ContextType>;
  BacklogItemMaxAggregate?: BacklogItemMaxAggregateResolvers<ContextType>;
  BacklogItemMinAggregate?: BacklogItemMinAggregateResolvers<ContextType>;
  BacklogItemSumAggregate?: BacklogItemSumAggregateResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectAvgAggregate?: ProjectAvgAggregateResolvers<ContextType>;
  ProjectCount?: ProjectCountResolvers<ContextType>;
  ProjectCountAggregate?: ProjectCountAggregateResolvers<ContextType>;
  ProjectMaxAggregate?: ProjectMaxAggregateResolvers<ContextType>;
  ProjectMinAggregate?: ProjectMinAggregateResolvers<ContextType>;
  ProjectSumAggregate?: ProjectSumAggregateResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  StoryAvgAggregate?: StoryAvgAggregateResolvers<ContextType>;
  StoryCount?: StoryCountResolvers<ContextType>;
  StoryCountAggregate?: StoryCountAggregateResolvers<ContextType>;
  StoryMaxAggregate?: StoryMaxAggregateResolvers<ContextType>;
  StoryMinAggregate?: StoryMinAggregateResolvers<ContextType>;
  StorySumAggregate?: StorySumAggregateResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  TeamAvgAggregate?: TeamAvgAggregateResolvers<ContextType>;
  TeamCount?: TeamCountResolvers<ContextType>;
  TeamCountAggregate?: TeamCountAggregateResolvers<ContextType>;
  TeamMaxAggregate?: TeamMaxAggregateResolvers<ContextType>;
  TeamMember?: TeamMemberResolvers<ContextType>;
  TeamMemberAvgAggregate?: TeamMemberAvgAggregateResolvers<ContextType>;
  TeamMemberCountAggregate?: TeamMemberCountAggregateResolvers<ContextType>;
  TeamMemberMaxAggregate?: TeamMemberMaxAggregateResolvers<ContextType>;
  TeamMemberMinAggregate?: TeamMemberMinAggregateResolvers<ContextType>;
  TeamMemberSumAggregate?: TeamMemberSumAggregateResolvers<ContextType>;
  TeamMinAggregate?: TeamMinAggregateResolvers<ContextType>;
  TeamSumAggregate?: TeamSumAggregateResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCount?: UserCountResolvers<ContextType>;
  UserCountAggregate?: UserCountAggregateResolvers<ContextType>;
  UserMaxAggregate?: UserMaxAggregateResolvers<ContextType>;
  UserMinAggregate?: UserMinAggregateResolvers<ContextType>;
}>;

