import Layout from '../../components/layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'

// gets the list of all valid paths (IDs of each post)
export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

// gets the post data given the ID
export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <title>{projectData.title}</title>
      <article>
        <h1>{projectData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}