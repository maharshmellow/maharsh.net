import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { getAllProjectIds, getProjectData } from '../../lib/projects';
import Layout from '../../components/layout';

const components = {};

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
  const projectData = await getProjectData(params.id);
  const { data, content } = matter(projectData);
  const mdxSource = await renderToString(content, {
    components,
    scope: data
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
}

export default function Project({ source, frontMatter }) {
  const content = hydrate(source, { components });

  return (
    <Layout>
      <article className="project-page">
        <div className="project-banner">
          <h1 className="project-title">{frontMatter.title}</h1> 
          {
            frontMatter.cover ?
              <img className="project-cover" src={`${frontMatter.cover}`}/>
            : null
          }
        </div>
        
        <div className="project-content">
          {content}
        </div>
      </article>
    </Layout>
  )
}