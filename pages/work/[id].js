import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize.js";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { getAllWorkIds, getWorkData } from "../../lib/work";
import Layout from "../../components/layout";
import WorkExpCard from "../../components/workExpCard";

const components = { WorkExpCard };

export async function getStaticPaths() {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.id);
  const { data, content } = matter(workData);
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

export default function Work({ source, frontMatter }) {
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
              alt="Cover image"
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
