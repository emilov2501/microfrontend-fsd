import { PostEntity } from "../../entities/PostEntity";
import { HTTP } from "../../http";

export default {
  async getPosts(): Promise<PostEntity[]> {
    try {
      const response = await HTTP.get("/posts");
      return response.data.map((post: any) => new PostEntity(post));
    } catch (e) {
      throw e;
    }
  },
};
