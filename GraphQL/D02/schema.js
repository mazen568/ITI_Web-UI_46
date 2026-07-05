export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    userId: ID!
    user: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
    postId: ID!
    userId: ID!
    user: User
    post: Post
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    getAllUsers: [User]
    getAllPosts: [Post]
    getAllComments: [Comment]

    getUserById(id: ID!): User
    getPostById(id: ID!): Post
    getCommentById(id: ID!): Comment

    getPostsByUser(userId: ID!): [Post]
    getUserByPost(postId: ID!): User
    getCommentsByPost(postId: ID!): [Comment]
    getPostByComment(commentId: ID!): Post
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload

    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
  
    addPost(title: String!, content: String!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Post
  
    addComment(text: String!, postId: ID!): Comment
    updateComment(id: ID!, text: String): Comment
    deleteComment(id: ID!): Comment
  }
`;
