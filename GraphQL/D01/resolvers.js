import { users, posts, comments } from "./data.js";

export const resolvers = {
  Query: {
    getAllUsers: () => {
      return users;
    },
    getAllPosts: () => {
      return posts;
    },
    getAllComments: () => {
      return comments;
    },

    getUserById: (_, { id }) => {
      const user = users.find((u) => u.id === id);
      return user;
    },
    getPostById: (_, { id }) => {
      const post = posts.find((p) => p.id === id);
      return post;
    },
    getCommentById: (_, { id }) => {
      const comment = comments.find((c) => c.id === id);
      return comment;
    },

    getPostsByUser: (_, { userId }) => {
      return posts.filter((post) => post.userId === userId);
    },

    getUserByPost: (_, { postId }) => {
      const post = posts.find((post) => post.id === postId);

      return users.find((user) => user.id === post.userId);
    },
    getCommentsByPost: (_, { postId }) => {
      return comments.filter((comment) => comment.postId === postId);
    },
    getPostByComment: (_, { commentId }) => {
      const comment = comments.find((comment) => comment.id === commentId);

      return posts.find((post) => post.id === comment.postId);
    },
  },

  Mutation: {
    // ---------------- USER ----------------
  
    addUser: (_, { name, email }) => {
      const newUser = {
        id: users.length + 1,
        name,
        email,
      };
  
      users.push(newUser);
      return newUser;
    },
  
    updateUser: (_, { id, name, email }) => {
      const user = users.find(u => u.id === id);
      if (!user) return null;
  
      if (name) user.name = name;
      if (email) user.email = email;
  
      return user;
    },
  
    deleteUser: (_, { id }) => {
      const index = users.findIndex(u => u.id === id);
      if (index === -1) return null;
  
      const deleted = users[index];
      users.splice(index, 1);
  
      return deleted;
    },
  
    // ---------------- POST ----------------
  
    addPost: (_, { title, content, userId }) => {
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        userId,
      };
  
      posts.push(newPost);
      return newPost;
    },
  
    updatePost: (_, { id, title, content }) => {
      const post = posts.find(p => p.id === id);
      if (!post) return null;
  
      if (title) post.title = title;
      if (content) post.content = content;
  
      return post;
    },
  
    deletePost: (_, { id }) => {
      const index = posts.findIndex(p => p.id === id);
      if (index === -1) return null;
  
      const deleted = posts[index];
      posts.splice(index, 1);
  
      return deleted;
    },
  
    // ---------------- COMMENT ----------------
  
    addComment: (_, { text, postId, userId }) => {
      const newComment = {
        id: comments.length + 1,
        text,
        postId,
        userId,
      };
  
      comments.push(newComment);
      return newComment;
    },
  
    updateComment: (_, { id, text }) => {
      const comment = comments.find(c => c.id === id);
      if (!comment) return null;
  
      if (text) comment.text = text;
  
      return comment;
    },
  
    deleteComment: (_, { id }) => {
      const index = comments.findIndex(c => c.id === id);
      if (index === -1) return null;
  
      const deleted = comments[index];
      comments.splice(index, 1);
  
      return deleted;
    },
  },

  User: {
    posts(parent) {
      return posts.filter((post) => post.userId === parent.id);
    },
  },

  Post: {
    user(parent) {
      return users.find((user) => user.id === parent.userId);
    },

    comments(parent) {
      return comments.filter((comment) => comment.postId === parent.id);
    },
  },

  Comment: {
    user(parent) {
      return users.find(user => user.id === parent.userId);
    },
  
    post(parent) {
      return posts.find(post => post.id === parent.postId);
    }
  }
};
