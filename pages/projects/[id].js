import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize.js";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Layout from "../../components/layout";

const components = {};

// gets the list of all valid paths (IDs of each post)
export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

// gets the post data given the ID
export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  const { data, content } = matter(projectData);
  const mdxSource = await serialize(content, {
    components,
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export default function Project({ source, frontMatter }) {
  return (
    <Layout
      title={`Maharsh Patel - ${frontMatter.title}`}
      description={frontMatter.description}
    >
      <article className="page">
        <div className="banner">
          <h1 className="title">{frontMatter.title}</h1>
          {frontMatter.cover ? (
            <img
              className="coverImage"
              src={`${frontMatter.cover}`}
              alt="Cover Image"
            />
          ) : null}
        </div>

        <div className="content">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </Layout>
  );
}
