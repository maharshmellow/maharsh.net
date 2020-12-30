import fs from "fs";
import path from "path";

const workDirectory = path.join(process.cwd(), "data/work");

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(workDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export async function getWorkData(id) {
  const fullPath = path.join(workDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  return fileContents;
}