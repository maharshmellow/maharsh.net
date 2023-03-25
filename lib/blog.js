import fs from "fs";
import path from "path";

const blogDirectory = path.join(process.cwd(), "data/blog");

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getBlogData(id) {
  const fullPath = path.join(blogDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
}
