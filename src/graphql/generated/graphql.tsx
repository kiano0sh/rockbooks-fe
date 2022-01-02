import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IGraphQLResolverContext } from './context';
import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type IGraphQLAuthor = {
  __typename?: 'Author';
  books?: Maybe<Array<IGraphQLBook>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IGraphQLBook = {
  __typename?: 'Book';
  author: IGraphQLAuthor;
  cover: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  publisher: IGraphQLPublisher;
  wallpaper: Scalars['String'];
};

export type IGraphQLBookAudio = {
  __typename?: 'BookAudio';
  audio: Scalars['String'];
  book: IGraphQLBook;
  createdAt: Scalars['String'];
  createdBy: IGraphQLUser;
  cursorEnds: Scalars['Int'];
  cursorStarts: Scalars['Int'];
  id: Scalars['ID'];
};

export type IGraphQLBookPage = {
  __typename?: 'BookPage';
  content: Scalars['String'];
  id: Scalars['ID'];
  pageNumber: Scalars['Int'];
};

export type IGraphQLBookPagesWithPagination = {
  __typename?: 'BookPagesWithPagination';
  bookPages?: Maybe<Array<Maybe<IGraphQLBookPage>>>;
  pagination: IGraphQLPaginationType;
};

export type IGraphQLBooksWithPagination = {
  __typename?: 'BooksWithPagination';
  books?: Maybe<Array<Maybe<IGraphQLBook>>>;
  pagination: IGraphQLPaginationType;
};

export type IGraphQLCreateAuthorInput = {
  name: Scalars['String'];
};

export type IGraphQLCreateBookAudioInput = {
  audio: Scalars['String'];
  bookId: Scalars['ID'];
  cursorEnds: Scalars['Int'];
  cursorStarts: Scalars['Int'];
};

export type IGraphQLCreateBookInput = {
  authorId: Scalars['ID'];
  bookFile: Scalars['Upload'];
  coverFile: Scalars['Upload'];
  name: Scalars['String'];
  publisherId: Scalars['ID'];
  wallpaperFile: Scalars['Upload'];
};

export type IGraphQLCreatePublisherInput = {
  name: Scalars['String'];
};

export type IGraphQLLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IGraphQLMutation = {
  __typename?: 'Mutation';
  createAuthor: IGraphQLAuthor;
  createBook: IGraphQLBook;
  createBookAudio: IGraphQLBookAudio;
  createPublisher: IGraphQLPublisher;
  deleteAuthor: Scalars['Boolean'];
  deleteBook: Scalars['Boolean'];
  deleteBookAudio: Scalars['Boolean'];
  deletePublisher: Scalars['Boolean'];
  login: Scalars['String'];
  refreshToken: Scalars['String'];
  register: Scalars['String'];
  updateAuthor: IGraphQLAuthor;
  updateBook: IGraphQLBook;
  updateBookAudio: IGraphQLBookAudio;
  updatePublisher: IGraphQLPublisher;
};


export type IGraphQLMutationCreateAuthorArgs = {
  input: IGraphQLCreateAuthorInput;
};


export type IGraphQLMutationCreateBookArgs = {
  input: IGraphQLCreateBookInput;
};


export type IGraphQLMutationCreateBookAudioArgs = {
  input: IGraphQLCreateBookAudioInput;
};


export type IGraphQLMutationCreatePublisherArgs = {
  input: IGraphQLCreatePublisherInput;
};


export type IGraphQLMutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type IGraphQLMutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type IGraphQLMutationDeleteBookAudioArgs = {
  id: Scalars['ID'];
};


export type IGraphQLMutationDeletePublisherArgs = {
  id: Scalars['ID'];
};


export type IGraphQLMutationLoginArgs = {
  input: IGraphQLLoginInput;
};


export type IGraphQLMutationRefreshTokenArgs = {
  input: IGraphQLRefreshTokenInput;
};


export type IGraphQLMutationRegisterArgs = {
  input: IGraphQLRegisterInput;
};


export type IGraphQLMutationUpdateAuthorArgs = {
  input: IGraphQLUpdateAuthorInput;
};


export type IGraphQLMutationUpdateBookArgs = {
  input: IGraphQLUpdateBookInput;
};


export type IGraphQLMutationUpdateBookAudioArgs = {
  input: IGraphQLUpdateBookAudioInput;
};


export type IGraphQLMutationUpdatePublisherArgs = {
  input: IGraphQLUpdatePublisherInput;
};

export type IGraphQLPaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<IGraphQLSortByEnum>;
  sortOrder?: InputMaybe<IGraphQLSortOrderEnum>;
};

export type IGraphQLPaginationType = {
  __typename?: 'PaginationType';
  limit: Scalars['Int'];
  page: Scalars['Int'];
  total: Scalars['Int'];
};

export type IGraphQLPublisher = {
  __typename?: 'Publisher';
  books?: Maybe<Array<IGraphQLBook>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IGraphQLQuery = {
  __typename?: 'Query';
  audios?: Maybe<Array<Maybe<IGraphQLBookAudio>>>;
  author: IGraphQLAuthor;
  authors?: Maybe<Array<Maybe<IGraphQLAuthor>>>;
  book: IGraphQLBook;
  books: IGraphQLBooksWithPagination;
  pages: IGraphQLBookPagesWithPagination;
  publisher: IGraphQLPublisher;
  publishers?: Maybe<Array<Maybe<IGraphQLPublisher>>>;
  self: IGraphQLUser;
};


export type IGraphQLQueryAudiosArgs = {
  id: Scalars['ID'];
};


export type IGraphQLQueryAuthorArgs = {
  id: Scalars['ID'];
};


export type IGraphQLQueryBookArgs = {
  id: Scalars['ID'];
};


export type IGraphQLQueryBooksArgs = {
  pagination?: InputMaybe<IGraphQLPaginationInput>;
};


export type IGraphQLQueryPagesArgs = {
  id: Scalars['ID'];
  pagination?: InputMaybe<IGraphQLPaginationInput>;
};


export type IGraphQLQueryPublisherArgs = {
  id: Scalars['ID'];
};

export type IGraphQLRefreshTokenInput = {
  token: Scalars['String'];
};

export type IGraphQLRegisterInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum IGraphQLSortByEnum {
  CreatedAt = 'CreatedAt',
  Id = 'Id',
  UpdatedAt = 'UpdatedAt'
}

export enum IGraphQLSortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type IGraphQLUpdateAuthorInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IGraphQLUpdateBookAudioInput = {
  audio: Scalars['String'];
  bookId: Scalars['ID'];
  cursorEnds: Scalars['Int'];
  cursorStarts: Scalars['Int'];
  id: Scalars['ID'];
};

export type IGraphQLUpdateBookInput = {
  authorId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  publisherId: Scalars['ID'];
};

export type IGraphQLUpdatePublisherInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IGraphQLUser = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  email: Scalars['String'];
};



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
export type IGraphQLResolversTypes = {
  Author: ResolverTypeWrapper<IGraphQLAuthor>;
  Book: ResolverTypeWrapper<IGraphQLBook>;
  BookAudio: ResolverTypeWrapper<IGraphQLBookAudio>;
  BookPage: ResolverTypeWrapper<IGraphQLBookPage>;
  BookPagesWithPagination: ResolverTypeWrapper<IGraphQLBookPagesWithPagination>;
  BooksWithPagination: ResolverTypeWrapper<IGraphQLBooksWithPagination>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAuthorInput: IGraphQLCreateAuthorInput;
  CreateBookAudioInput: IGraphQLCreateBookAudioInput;
  CreateBookInput: IGraphQLCreateBookInput;
  CreatePublisherInput: IGraphQLCreatePublisherInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginInput: IGraphQLLoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationInput: IGraphQLPaginationInput;
  PaginationType: ResolverTypeWrapper<IGraphQLPaginationType>;
  Publisher: ResolverTypeWrapper<IGraphQLPublisher>;
  Query: ResolverTypeWrapper<{}>;
  RefreshTokenInput: IGraphQLRefreshTokenInput;
  RegisterInput: IGraphQLRegisterInput;
  SortByEnum: IGraphQLSortByEnum;
  SortOrderEnum: IGraphQLSortOrderEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateAuthorInput: IGraphQLUpdateAuthorInput;
  UpdateBookAudioInput: IGraphQLUpdateBookAudioInput;
  UpdateBookInput: IGraphQLUpdateBookInput;
  UpdatePublisherInput: IGraphQLUpdatePublisherInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<IGraphQLUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IGraphQLResolversParentTypes = {
  Author: IGraphQLAuthor;
  Book: IGraphQLBook;
  BookAudio: IGraphQLBookAudio;
  BookPage: IGraphQLBookPage;
  BookPagesWithPagination: IGraphQLBookPagesWithPagination;
  BooksWithPagination: IGraphQLBooksWithPagination;
  Boolean: Scalars['Boolean'];
  CreateAuthorInput: IGraphQLCreateAuthorInput;
  CreateBookAudioInput: IGraphQLCreateBookAudioInput;
  CreateBookInput: IGraphQLCreateBookInput;
  CreatePublisherInput: IGraphQLCreatePublisherInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LoginInput: IGraphQLLoginInput;
  Mutation: {};
  PaginationInput: IGraphQLPaginationInput;
  PaginationType: IGraphQLPaginationType;
  Publisher: IGraphQLPublisher;
  Query: {};
  RefreshTokenInput: IGraphQLRefreshTokenInput;
  RegisterInput: IGraphQLRegisterInput;
  String: Scalars['String'];
  UpdateAuthorInput: IGraphQLUpdateAuthorInput;
  UpdateBookAudioInput: IGraphQLUpdateBookAudioInput;
  UpdateBookInput: IGraphQLUpdateBookInput;
  UpdatePublisherInput: IGraphQLUpdatePublisherInput;
  Upload: Scalars['Upload'];
  User: IGraphQLUser;
};

export type IGraphQLAuthorResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Author'] = IGraphQLResolversParentTypes['Author']> = {
  books?: Resolver<Maybe<Array<IGraphQLResolversTypes['Book']>>, ParentType, ContextType>;
  id?: Resolver<IGraphQLResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Book'] = IGraphQLResolversParentTypes['Book']> = {
  author?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType>;
  cover?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IGraphQLResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  publisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType>;
  wallpaper?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookAudioResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['BookAudio'] = IGraphQLResolversParentTypes['BookAudio']> = {
  audio?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  book?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType>;
  createdAt?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<IGraphQLResolversTypes['User'], ParentType, ContextType>;
  cursorEnds?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  cursorStarts?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<IGraphQLResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookPageResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['BookPage'] = IGraphQLResolversParentTypes['BookPage']> = {
  content?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IGraphQLResolversTypes['ID'], ParentType, ContextType>;
  pageNumber?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookPagesWithPaginationResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['BookPagesWithPagination'] = IGraphQLResolversParentTypes['BookPagesWithPagination']> = {
  bookPages?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['BookPage']>>>, ParentType, ContextType>;
  pagination?: Resolver<IGraphQLResolversTypes['PaginationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBooksWithPaginationResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['BooksWithPagination'] = IGraphQLResolversParentTypes['BooksWithPagination']> = {
  books?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['Book']>>>, ParentType, ContextType>;
  pagination?: Resolver<IGraphQLResolversTypes['PaginationType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLMutationResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Mutation'] = IGraphQLResolversParentTypes['Mutation']> = {
  createAuthor?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateAuthorArgs, 'input'>>;
  createBook?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateBookArgs, 'input'>>;
  createBookAudio?: Resolver<IGraphQLResolversTypes['BookAudio'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateBookAudioArgs, 'input'>>;
  createPublisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType, RequireFields<IGraphQLMutationCreatePublisherArgs, 'input'>>;
  deleteAuthor?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteAuthorArgs, 'id'>>;
  deleteBook?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteBookArgs, 'id'>>;
  deleteBookAudio?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteBookAudioArgs, 'id'>>;
  deletePublisher?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeletePublisherArgs, 'id'>>;
  login?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType, RequireFields<IGraphQLMutationLoginArgs, 'input'>>;
  refreshToken?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType, RequireFields<IGraphQLMutationRefreshTokenArgs, 'input'>>;
  register?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType, RequireFields<IGraphQLMutationRegisterArgs, 'input'>>;
  updateAuthor?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateAuthorArgs, 'input'>>;
  updateBook?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateBookArgs, 'input'>>;
  updateBookAudio?: Resolver<IGraphQLResolversTypes['BookAudio'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateBookAudioArgs, 'input'>>;
  updatePublisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdatePublisherArgs, 'input'>>;
};

export type IGraphQLPaginationTypeResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['PaginationType'] = IGraphQLResolversParentTypes['PaginationType']> = {
  limit?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  page?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  total?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLPublisherResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Publisher'] = IGraphQLResolversParentTypes['Publisher']> = {
  books?: Resolver<Maybe<Array<IGraphQLResolversTypes['Book']>>, ParentType, ContextType>;
  id?: Resolver<IGraphQLResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLQueryResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Query'] = IGraphQLResolversParentTypes['Query']> = {
  audios?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['BookAudio']>>>, ParentType, ContextType, RequireFields<IGraphQLQueryAudiosArgs, 'id'>>;
  author?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType, RequireFields<IGraphQLQueryAuthorArgs, 'id'>>;
  authors?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['Author']>>>, ParentType, ContextType>;
  book?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType, RequireFields<IGraphQLQueryBookArgs, 'id'>>;
  books?: Resolver<IGraphQLResolversTypes['BooksWithPagination'], ParentType, ContextType, RequireFields<IGraphQLQueryBooksArgs, never>>;
  pages?: Resolver<IGraphQLResolversTypes['BookPagesWithPagination'], ParentType, ContextType, RequireFields<IGraphQLQueryPagesArgs, 'id'>>;
  publisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType, RequireFields<IGraphQLQueryPublisherArgs, 'id'>>;
  publishers?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['Publisher']>>>, ParentType, ContextType>;
  self?: Resolver<IGraphQLResolversTypes['User'], ParentType, ContextType>;
};

export interface IGraphQLUploadScalarConfig extends GraphQLScalarTypeConfig<IGraphQLResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type IGraphQLUserResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['User'] = IGraphQLResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<IGraphQLResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLResolvers<ContextType = IGraphQLResolverContext> = {
  Author?: IGraphQLAuthorResolvers<ContextType>;
  Book?: IGraphQLBookResolvers<ContextType>;
  BookAudio?: IGraphQLBookAudioResolvers<ContextType>;
  BookPage?: IGraphQLBookPageResolvers<ContextType>;
  BookPagesWithPagination?: IGraphQLBookPagesWithPaginationResolvers<ContextType>;
  BooksWithPagination?: IGraphQLBooksWithPaginationResolvers<ContextType>;
  Mutation?: IGraphQLMutationResolvers<ContextType>;
  PaginationType?: IGraphQLPaginationTypeResolvers<ContextType>;
  Publisher?: IGraphQLPublisherResolvers<ContextType>;
  Query?: IGraphQLQueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: IGraphQLUserResolvers<ContextType>;
};


export type IGraphQLUserLoginMutationVariables = Exact<{
  input: IGraphQLLoginInput;
}>;


export type IGraphQLUserLoginMutation = { __typename?: 'Mutation', login: string };

export type IGraphQLUserRegisterMutationVariables = Exact<{
  input: IGraphQLRegisterInput;
}>;


export type IGraphQLUserRegisterMutation = { __typename?: 'Mutation', register: string };

export type IGraphQLBookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type IGraphQLBookQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: number, name: string, wallpaper: string, cover: string, createdAt: string, author: { __typename?: 'Author', id: number, name: string }, publisher: { __typename?: 'Publisher', id: number, name: string } } };

export type IGraphQLBooksQueryVariables = Exact<{
  pagination: IGraphQLPaginationInput;
}>;


export type IGraphQLBooksQuery = { __typename?: 'Query', books: { __typename?: 'BooksWithPagination', books?: Array<{ __typename?: 'Book', id: number, name: string, cover: string, wallpaper: string, createdAt: string, author: { __typename?: 'Author', id: number, name: string }, publisher: { __typename?: 'Publisher', id: number, name: string } } | null | undefined> | null | undefined, pagination: { __typename?: 'PaginationType', limit: number, page: number, total: number } } };

export type IGraphQLPagesQueryVariables = Exact<{
  id: Scalars['ID'];
  pagination: IGraphQLPaginationInput;
}>;


export type IGraphQLPagesQuery = { __typename?: 'Query', pages: { __typename?: 'BookPagesWithPagination', bookPages?: Array<{ __typename?: 'BookPage', content: string, pageNumber: number } | null | undefined> | null | undefined, pagination: { __typename?: 'PaginationType', limit: number, page: number, total: number } } };


export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode;
export type IGraphQLUserLoginMutationFn = Apollo.MutationFunction<IGraphQLUserLoginMutation, IGraphQLUserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<IGraphQLUserLoginMutation, IGraphQLUserLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IGraphQLUserLoginMutation, IGraphQLUserLoginMutationVariables>(UserLoginDocument, options);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<IGraphQLUserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<IGraphQLUserLoginMutation, IGraphQLUserLoginMutationVariables>;
export const UserRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userRegister"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode;
export type IGraphQLUserRegisterMutationFn = Apollo.MutationFunction<IGraphQLUserRegisterMutation, IGraphQLUserRegisterMutationVariables>;

/**
 * __useUserRegisterMutation__
 *
 * To run a mutation, you first call `useUserRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUserRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserRegisterMutation(baseOptions?: Apollo.MutationHookOptions<IGraphQLUserRegisterMutation, IGraphQLUserRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IGraphQLUserRegisterMutation, IGraphQLUserRegisterMutationVariables>(UserRegisterDocument, options);
      }
export type UserRegisterMutationHookResult = ReturnType<typeof useUserRegisterMutation>;
export type UserRegisterMutationResult = Apollo.MutationResult<IGraphQLUserRegisterMutation>;
export type UserRegisterMutationOptions = Apollo.BaseMutationOptions<IGraphQLUserRegisterMutation, IGraphQLUserRegisterMutationVariables>;
export const BookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"book"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wallpaper"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<IGraphQLBookQuery, IGraphQLBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGraphQLBookQuery, IGraphQLBookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGraphQLBookQuery, IGraphQLBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGraphQLBookQuery, IGraphQLBookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<IGraphQLBookQuery, IGraphQLBookQueryVariables>;
export const BooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"books"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"wallpaper"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useBooksQuery(baseOptions: Apollo.QueryHookOptions<IGraphQLBooksQuery, IGraphQLBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGraphQLBooksQuery, IGraphQLBooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGraphQLBooksQuery, IGraphQLBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGraphQLBooksQuery, IGraphQLBooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<IGraphQLBooksQuery, IGraphQLBooksQueryVariables>;
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"pages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function usePagesQuery(baseOptions: Apollo.QueryHookOptions<IGraphQLPagesQuery, IGraphQLPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGraphQLPagesQuery, IGraphQLPagesQueryVariables>(PagesDocument, options);
      }
export function usePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGraphQLPagesQuery, IGraphQLPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGraphQLPagesQuery, IGraphQLPagesQueryVariables>(PagesDocument, options);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<IGraphQLPagesQuery, IGraphQLPagesQueryVariables>;