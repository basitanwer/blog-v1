import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";
import prismjs from "remark-prism";

const postsDirectory = join(process.cwd(), "_posts");

export interface Post {
  contentHtml: string;
  data: { [key: string]: any };
  fileName: string;
}

/**
 * Reads the file and returns the post details (PrismJS syntax highlighting)
 * @param fileName FIle to read data from
 * @param fields Fileds to fetch from the file
 * @returns Post object
 */
export async function getPostBySlug(slug: string, fields: string[] = []): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(prismjs)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml: contentHtml,
    data: matterResult.data,
    fileName: realSlug,
  };
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  let posts: Post[] = [];
  for (const slug of slugs) {
    const post = await getPostBySlug(slug, fields);
    posts.push(post);
  }
  posts.sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));
  return posts;
}
