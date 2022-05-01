import React, { useState } from "react";

type BlogContextType = {
  data: { title: string }[];
  addBlogPosts: () => void;
};
const BlogContext = React.createContext<BlogContextType>({
  data: [{ title: "" }],
  addBlogPosts: () => {},
});

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogPosts, setBlogPosts] = useState<{ title: string }[]>([]);
  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };
  return (
    <BlogContext.Provider
      value={{ data: blogPosts, addBlogPosts: addBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
