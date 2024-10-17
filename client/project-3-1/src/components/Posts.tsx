import { useEffect, useState } from "react";
import { $api } from "../api";

interface Post {
  userId: string;
  title: string;
  body: string;
  imageUrl?: string;
  likes?: string[];
  tags?: string[];
  comments?: Comment[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface Comment {
  userId: string;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
}
// TO-DO Component Posts & Post

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    $api.get(`/posts`).then((res) => setPosts(res.data));
  }, []);

  return <div>{posts.map((item) => item)}</div>;
};
export default PostsList;
