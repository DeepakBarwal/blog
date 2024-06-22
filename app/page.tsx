import Link from "next/link";
import { getPostMetadata } from "./components/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={index} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
