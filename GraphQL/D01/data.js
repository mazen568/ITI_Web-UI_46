export const users = [
  {
    id: 1,
    name: "Mazen",
    email: "mazen@gmail.com",
  },
  {
    id: 2,
    name: "Ahmed",
    email: "ahmed@gmail.com",
  },
];

export const posts = [
  {
    id: 1,
    title: "Learning GraphQL",
    content: "GraphQL is awesome",
    userId: 1,
  },
  {
    id: 2,
    title: "React Native Tips",
    content: "Use FlatList for performance",
    userId: 1,
  },
  {
    id: 3,
    title: "Node.js Basics",
    content: "Express is a web framework",
    userId: 2,
  },
];

export const comments = [
  {
    id: 1,
    text: "Great post!",
    postId: 1,
    userId: 2,
  },
  {
    id: 2,
    text: "Very helpful",
    postId: 1,
    userId: 1,
  },
  {
    id: 3,
    text: "Thanks for sharing",
    postId: 3,
    userId: 1,
  },
];
