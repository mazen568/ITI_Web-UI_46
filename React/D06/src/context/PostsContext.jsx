import { createContext, useState } from "react";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPostById = (id) => {
    return posts.find((post) => post.id === parseInt(id));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        loading,
        setLoading,
        getPostById,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}