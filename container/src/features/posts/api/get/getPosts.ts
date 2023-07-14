import { PostEntity } from "@api/entities/PostEntity";
import { postsApi } from "@api/services";

export const useGetPosts = async (): Promise<PostEntity[]> => {
  const response = await postsApi.getPosts();
  return response;
};
