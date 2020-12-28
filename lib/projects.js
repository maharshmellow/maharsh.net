import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getAllProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'castroom'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'inhale'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.mdx$/, '')
      }
    }
  })
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return fileContents;
}