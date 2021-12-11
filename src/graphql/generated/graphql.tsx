import { GraphQLResolveInfo } from 'graphql';
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
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IGraphQLAuthor = {
  __typename?: 'Author';
  book?: Maybe<Array<IGraphQLBook>>;
  name: Scalars['String'];
  publishers?: Maybe<Array<IGraphQLPublisher>>;
};

export type IGraphQLBook = {
  __typename?: 'Book';
  audios?: Maybe<Array<IGraphQLBookAudio>>;
  author: IGraphQLAuthor;
  createdAt: Scalars['String'];
  name: Scalars['String'];
  pages?: Maybe<Array<IGraphQLBookPage>>;
  publisher: IGraphQLPublisher;
};

export type IGraphQLBookAudio = {
  __typename?: 'BookAudio';
  audio: Scalars['String'];
  book: IGraphQLBook;
  createdAt: Scalars['String'];
  createdBy: IGraphQLUser;
  cursorEnds: Scalars['Int'];
  cursorStarts: Scalars['Int'];
};

export type IGraphQLBookPage = {
  __typename?: 'BookPage';
  content: Scalars['String'];
  pageNumber: Scalars['Int'];
};

export type IGraphQLCreateAuthorInput = {
  name: Scalars['String'];
  publisherIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type IGraphQLCreateBookAudioInput = {
  audio: Scalars['String'];
  bookId: Scalars['ID'];
  cursorEnds: Scalars['Int'];
  cursorStarts: Scalars['Int'];
};

export type IGraphQLCreateBookInput = {
  authorId: Scalars['ID'];
  name: Scalars['String'];
  publisherId: Scalars['ID'];
};

export type IGraphQLCreateBookPageInput = {
  bookId: Scalars['ID'];
  content: Scalars['String'];
  pageNumber: Scalars['Int'];
};

export type IGraphQLCreatePublisherInput = {
  authorIds?: InputMaybe<Array<Scalars['ID']>>;
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
  createBookPage: IGraphQLBookPage;
  createPublisher: IGraphQLPublisher;
  deleteAuthor: Scalars['Boolean'];
  deleteBook: Scalars['Boolean'];
  deleteBookAudio: Scalars['Boolean'];
  deleteBookPage: Scalars['Boolean'];
  deletePublisher: Scalars['Boolean'];
  login: Scalars['String'];
  refreshToken: Scalars['String'];
  register: Scalars['String'];
  updateAuthor: IGraphQLAuthor;
  updateBook: IGraphQLBook;
  updateBookAudio: IGraphQLBookAudio;
  updateBookPage: IGraphQLBookPage;
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


export type IGraphQLMutationCreateBookPageArgs = {
  input: IGraphQLCreateBookPageInput;
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


export type IGraphQLMutationDeleteBookPageArgs = {
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


export type IGraphQLMutationUpdateBookPageArgs = {
  input: IGraphQLUpdateBookPageInput;
};


export type IGraphQLMutationUpdatePublisherArgs = {
  input: IGraphQLUpdatePublisherInput;
};

export type IGraphQLPublisher = {
  __typename?: 'Publisher';
  authors?: Maybe<Array<IGraphQLAuthor>>;
  book?: Maybe<Array<IGraphQLBook>>;
  name: Scalars['String'];
};

export type IGraphQLQuery = {
  __typename?: 'Query';
  author: IGraphQLAuthor;
  authors?: Maybe<Array<Maybe<IGraphQLAuthor>>>;
  book: IGraphQLBook;
  books?: Maybe<Array<Maybe<IGraphQLBook>>>;
  publisher: IGraphQLPublisher;
  publishers?: Maybe<Array<Maybe<IGraphQLPublisher>>>;
  self: IGraphQLUser;
};


export type IGraphQLQueryAuthorArgs = {
  id: Scalars['ID'];
};


export type IGraphQLQueryBookArgs = {
  id: Scalars['ID'];
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

export type IGraphQLUpdateAuthorInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  publisherIds?: InputMaybe<Array<Scalars['ID']>>;
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

export type IGraphQLUpdateBookPageInput = {
  bookId: Scalars['ID'];
  content: Scalars['String'];
  id: Scalars['ID'];
  pageNumber: Scalars['Int'];
};

export type IGraphQLUpdatePublisherInput = {
  authorIds?: InputMaybe<Array<Scalars['ID']>>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAuthorInput: IGraphQLCreateAuthorInput;
  CreateBookAudioInput: IGraphQLCreateBookAudioInput;
  CreateBookInput: IGraphQLCreateBookInput;
  CreateBookPageInput: IGraphQLCreateBookPageInput;
  CreatePublisherInput: IGraphQLCreatePublisherInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginInput: IGraphQLLoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Publisher: ResolverTypeWrapper<IGraphQLPublisher>;
  Query: ResolverTypeWrapper<{}>;
  RefreshTokenInput: IGraphQLRefreshTokenInput;
  RegisterInput: IGraphQLRegisterInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateAuthorInput: IGraphQLUpdateAuthorInput;
  UpdateBookAudioInput: IGraphQLUpdateBookAudioInput;
  UpdateBookInput: IGraphQLUpdateBookInput;
  UpdateBookPageInput: IGraphQLUpdateBookPageInput;
  UpdatePublisherInput: IGraphQLUpdatePublisherInput;
  User: ResolverTypeWrapper<IGraphQLUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IGraphQLResolversParentTypes = {
  Author: IGraphQLAuthor;
  Book: IGraphQLBook;
  BookAudio: IGraphQLBookAudio;
  BookPage: IGraphQLBookPage;
  Boolean: Scalars['Boolean'];
  CreateAuthorInput: IGraphQLCreateAuthorInput;
  CreateBookAudioInput: IGraphQLCreateBookAudioInput;
  CreateBookInput: IGraphQLCreateBookInput;
  CreateBookPageInput: IGraphQLCreateBookPageInput;
  CreatePublisherInput: IGraphQLCreatePublisherInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LoginInput: IGraphQLLoginInput;
  Mutation: {};
  Publisher: IGraphQLPublisher;
  Query: {};
  RefreshTokenInput: IGraphQLRefreshTokenInput;
  RegisterInput: IGraphQLRegisterInput;
  String: Scalars['String'];
  UpdateAuthorInput: IGraphQLUpdateAuthorInput;
  UpdateBookAudioInput: IGraphQLUpdateBookAudioInput;
  UpdateBookInput: IGraphQLUpdateBookInput;
  UpdateBookPageInput: IGraphQLUpdateBookPageInput;
  UpdatePublisherInput: IGraphQLUpdatePublisherInput;
  User: IGraphQLUser;
};

export type IGraphQLAuthorResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Author'] = IGraphQLResolversParentTypes['Author']> = {
  book?: Resolver<Maybe<Array<IGraphQLResolversTypes['Book']>>, ParentType, ContextType>;
  name?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  publishers?: Resolver<Maybe<Array<IGraphQLResolversTypes['Publisher']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Book'] = IGraphQLResolversParentTypes['Book']> = {
  audios?: Resolver<Maybe<Array<IGraphQLResolversTypes['BookAudio']>>, ParentType, ContextType>;
  author?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType>;
  createdAt?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<IGraphQLResolversTypes['BookPage']>>, ParentType, ContextType>;
  publisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookAudioResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['BookAudio'] = IGraphQLResolversParentTypes['BookAudio']> = {
  audio?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  book?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType>;
  createdAt?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<IGraphQLResolversTypes['User'], ParentType, ContextType>;
  cursorEnds?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  cursorStarts?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLBookPageResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['BookPage'] = IGraphQLResolversParentTypes['BookPage']> = {
  content?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  pageNumber?: Resolver<IGraphQLResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLMutationResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Mutation'] = IGraphQLResolversParentTypes['Mutation']> = {
  createAuthor?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateAuthorArgs, 'input'>>;
  createBook?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateBookArgs, 'input'>>;
  createBookAudio?: Resolver<IGraphQLResolversTypes['BookAudio'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateBookAudioArgs, 'input'>>;
  createBookPage?: Resolver<IGraphQLResolversTypes['BookPage'], ParentType, ContextType, RequireFields<IGraphQLMutationCreateBookPageArgs, 'input'>>;
  createPublisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType, RequireFields<IGraphQLMutationCreatePublisherArgs, 'input'>>;
  deleteAuthor?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteAuthorArgs, 'id'>>;
  deleteBook?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteBookArgs, 'id'>>;
  deleteBookAudio?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteBookAudioArgs, 'id'>>;
  deleteBookPage?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeleteBookPageArgs, 'id'>>;
  deletePublisher?: Resolver<IGraphQLResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IGraphQLMutationDeletePublisherArgs, 'id'>>;
  login?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType, RequireFields<IGraphQLMutationLoginArgs, 'input'>>;
  refreshToken?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType, RequireFields<IGraphQLMutationRefreshTokenArgs, 'input'>>;
  register?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType, RequireFields<IGraphQLMutationRegisterArgs, 'input'>>;
  updateAuthor?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateAuthorArgs, 'input'>>;
  updateBook?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateBookArgs, 'input'>>;
  updateBookAudio?: Resolver<IGraphQLResolversTypes['BookAudio'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateBookAudioArgs, 'input'>>;
  updateBookPage?: Resolver<IGraphQLResolversTypes['BookPage'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdateBookPageArgs, 'input'>>;
  updatePublisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType, RequireFields<IGraphQLMutationUpdatePublisherArgs, 'input'>>;
};

export type IGraphQLPublisherResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Publisher'] = IGraphQLResolversParentTypes['Publisher']> = {
  authors?: Resolver<Maybe<Array<IGraphQLResolversTypes['Author']>>, ParentType, ContextType>;
  book?: Resolver<Maybe<Array<IGraphQLResolversTypes['Book']>>, ParentType, ContextType>;
  name?: Resolver<IGraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGraphQLQueryResolvers<ContextType = IGraphQLResolverContext, ParentType extends IGraphQLResolversParentTypes['Query'] = IGraphQLResolversParentTypes['Query']> = {
  author?: Resolver<IGraphQLResolversTypes['Author'], ParentType, ContextType, RequireFields<IGraphQLQueryAuthorArgs, 'id'>>;
  authors?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['Author']>>>, ParentType, ContextType>;
  book?: Resolver<IGraphQLResolversTypes['Book'], ParentType, ContextType, RequireFields<IGraphQLQueryBookArgs, 'id'>>;
  books?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['Book']>>>, ParentType, ContextType>;
  publisher?: Resolver<IGraphQLResolversTypes['Publisher'], ParentType, ContextType, RequireFields<IGraphQLQueryPublisherArgs, 'id'>>;
  publishers?: Resolver<Maybe<Array<Maybe<IGraphQLResolversTypes['Publisher']>>>, ParentType, ContextType>;
  self?: Resolver<IGraphQLResolversTypes['User'], ParentType, ContextType>;
};

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
  Mutation?: IGraphQLMutationResolvers<ContextType>;
  Publisher?: IGraphQLPublisherResolvers<ContextType>;
  Query?: IGraphQLQueryResolvers<ContextType>;
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