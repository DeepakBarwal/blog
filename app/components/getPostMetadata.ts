import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`posts/${filename}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: filename.replace(".md", ""),
    };
  });

  const sortedPosts = posts.sort((post1, post2) => {
    const dateParts1 = post1.date.split("-");
    const dateObject1 = new Date(
      dateParts1[2],
      dateParts1[1] - 1,
      dateParts1[0]
    );
    const dateParts2 = post2.date.split("-");
    const dateObject2 = new Date(
      dateParts2[2],
      dateParts2[1] - 1,
      dateParts2[0]
    );

    return dateObject2.getTime() - dateObject1.getTime();
  });

  return sortedPosts;
};
