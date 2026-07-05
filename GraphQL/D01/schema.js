export const typeDefs = `#graphql
  type User {
    id: Int
    name: String
    email: String

    posts:[Post]
  }

  type Post {
    id: Int
    title: String
    content: String
    userId: Int

    user:User
    comments:[Comment]
  }

  type Comment {
    id: ID
    text: String
    postId: Int
    userId: Int

    user: User
    post: Post
  }

  type Query {
    getAllUsers: [User]
    getAllPosts: [Post]
    getAllComments: [Comment]

    getUserById(id: Int!): User
    getPostById(id: Int!): Post
    getCommentById(id: Int!): Comment

    getPostsByUser(userId: Int!): [Post]
    getUserByPost(postId: Int!): User
    getCommentsByPost(postId: Int!): [Comment]
    getPostByComment(commentId: Int!): Post
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    updateUser(id: Int!, name: String, email: String): User
    deleteUser(id: Int!): User
  
    addPost(title: String!, content: String!, userId: Int!): Post
    updatePost(id: Int!, title: String, content: String): Post
    deletePost(id: Int!): Post
  
    addComment(text: String!, postId: Int!, userId: Int!): Comment
    updateComment(id: Int!, text: String): Comment
    deleteComment(id: Int!): Comment
  }
`;
