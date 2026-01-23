import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize.js";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { getAllBlogIds, getBlogData } from "../../lib/blog";
import Layout from "../../components/layout";

const components = {};

// gets the list of all valid paths (IDs of each post)
export async function getStaticPaths() {
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

// gets the post data given the ID
export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id);
  const { data, content } = matter(blogData);
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

export default function Blog({ source, frontMatter }) {
  return (
    <Layout
      title={`${frontMatter.title} - Maharsh Patel`}
      description={frontMatter.description}
      date={frontMatter.date}
    >
      <article className="page">
        <div className="banner">
          <h1 className="title">{frontMatter.title}</h1>
          {frontMatter.subtitle ? (
            <div className="subtitle">{frontMatter.subtitle}</div>
          ) : null}
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
