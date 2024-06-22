import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <div className="border-2 border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <p className="text-sm text-slate-400">{props.date}</p>
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-medium text-violet-600 hover:underline mb-4">
          {props.title}
        </h2>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  );
}
