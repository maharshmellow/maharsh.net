import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import { getAllWorkIds, getWorkData } from '../../lib/work';
import Layout from '../../components/layout';
import WorkExpCard from "../../components/workExpCard";

const components = {WorkExpCard};

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id);
  const { data, content } = matter(workData);
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

export default function Work({ source, frontMatter }) {
  const content = hydrate(source, { components });

  return (
    <Layout>
      <article className="page">
        <div className="banner">
          <h1 className="title">{frontMatter.title}</h1> 
          {
            frontMatter.cover ?
              <img className="cover" src={`${frontMatter.cover}`}/>
            : null
          }
        </div>
        
        <div className="content">
          {content}
        </div>
      </article>
    </Layout>
  )
}