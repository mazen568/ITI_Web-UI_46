import { User } from './models/User.js';
import { Post } from './models/Post.js';
import { Comment } from './models/Comment.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const resolvers = {
  Query: {
    getAllUsers: async () => await User.find(),
    getAllPosts: async () => await Post.find(),
    getAllComments: async () => await Comment.find(),

    getUserById: async (_, { id }) => await User.findById(id),
    getPostById: async (_, { id }) => await Post.findById(id),
    getCommentById: async (_, { id }) => await Comment.findById(id),

    getPostsByUser: async (_, { userId }) => await Post.find({ userId }),

    getUserByPost: async (_, { postId }) => {
      const post = await Post.findById(postId);
      return await User.findById(post.userId);
    },
    getCommentsByPost: async (_, { postId }) => await Comment.find({ postId }),
    getPostByComment: async (_, { commentId }) => {
      const comment = await Comment.findById(commentId);
      return await Post.findById(comment.postId);
    },
  },

  Mutation: {
    register: async (_, { name, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('User already exists');

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();

      return {
        token: generateToken(user),
        user,
      };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('Invalid credentials');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');

      return {
        token: generateToken(user),
        user,
      };
    },

    updateUser: async (_, { id, name, email }, context) => {
      if (!context.user) throw new Error('Unauthorized');
      if (context.user.id !== id) throw new Error('You can only update your own profile');

      const updates = {};
      if (name) updates.name = name;
      if (email) updates.email = email;

      return await User.findByIdAndUpdate(id, updates, { new: true });
    },

    deleteUser: async (_, { id }, context) => {
      if (!context.user) throw new Error('Unauthorized');
      if (context.user.id !== id) throw new Error('You can only delete your own profile');

      return await User.findByIdAndDelete(id);
    },

    addPost: async (_, { title, content }, context) => {
      if (!context.user) throw new Error('Unauthorized');

      const post = new Post({ title, content, userId: context.user.id });
      await post.save();
      return post;
    },

    updatePost: async (_, { id, title, content }, context) => {
      if (!context.user) throw new Error('Unauthorized');

      const post = await Post.findById(id);
      if (!post) throw new Error('Post not found');
      if (post.userId.toString() !== context.user.id) throw new Error('Not authorized to update this post');

      if (title) post.title = title;
      if (content) post.content = content;

      await post.save();
      return post;
    },

    deletePost: async (_, { id }, context) => {
      if (!context.user) throw new Error('Unauthorized');

      const post = await Post.findById(id);
      if (!post) throw new Error('Post not found');
      if (post.userId.toString() !== context.user.id) throw new Error('Not authorized to delete this post');

      await Post.findByIdAndDelete(id);
      return post;
    },

    addComment: async (_, { text, postId }, context) => {
      if (!context.user) throw new Error('Unauthorized');

      const comment = new Comment({ text, postId, userId: context.user.id });
      await comment.save();
      return comment;
    },

    updateComment: async (_, { id, text }, context) => {
      if (!context.user) throw new Error('Unauthorized');

      const comment = await Comment.findById(id);
      if (!comment) throw new Error('Comment not found');
      if (comment.userId.toString() !== context.user.id) throw new Error('Not authorized to update this comment');

      if (text) comment.text = text;

      await comment.save();
      return comment;
    },

    deleteComment: async (_, { id }, context) => {
      if (!context.user) throw new Error('Unauthorized');

      const comment = await Comment.findById(id);
      if (!comment) throw new Error('Comment not found');
      if (comment.userId.toString() !== context.user.id) throw new Error('Not authorized to delete this comment');

      await Comment.findByIdAndDelete(id);
      return comment;
    },
  },

  User: {
    posts: async (parent) => await Post.find({ userId: parent.id }),
  },

  Post: {
    user: async (parent) => await User.findById(parent.userId),
    comments: async (parent) => await Comment.find({ postId: parent.id }),
  },

  Comment: {
    user: async (parent) => await User.findById(parent.userId),
    post: async (parent) => await Post.findById(parent.postId),
  },
};
