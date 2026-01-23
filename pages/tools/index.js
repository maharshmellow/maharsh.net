import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/layout";

const tools = [
  {
    slug: "counter",
    title: "Counter",
    description: "A simple stateful counter with plus and minus controls.",
    badge: "Sample",
  },
  {
    slug: "aws-alb-log-parser",
    title: "AWS ALB Log Parser",
    description: "Paste an ALB access log line to parse fields instantly.",
    badge: "Utility",
  },
];

const ToolsWrapper = styled.section`
  margin-top: 80px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const ToolsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;

  p {
    margin: 0;
    color: #5f5f5f;
    font-size: 16px;
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
`;

const ToolCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  border: 1px solid #e7e7e7;
  background: #ffffff;
  box-shadow: 0 6px 18px rgba(16, 24, 40, 0.04);
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #d2d2d2;
    box-shadow: 0 10px 24px rgba(16, 24, 40, 0.08);
    text-decoration: none;
  }
`;

const ToolBadge = styled.span`
  align-self: flex-start;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #111111;
  background: #f1f1f1;
`;

const ToolTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #111111;
`;

const ToolDescription = styled.p`
  margin: 0;
  color: #5f5f5f;
  font-size: 14px;
  line-height: 1.5;
`;

export default function ToolsIndex() {
  return (
    <Layout
      title="Tools - Maharsh Patel"
      description="Small, focused tools."
      hideNav
    >
      <ToolsWrapper>
        <ToolsHeader>
          <h1>Tools</h1>
        </ToolsHeader>

        <ToolsGrid>
          {tools.map((tool) => (
            <Link key={tool.slug} href={`/tools/${tool.slug}`} passHref>
              <ToolCard>
                <ToolBadge>{tool.badge}</ToolBadge>
                <ToolTitle>{tool.title}</ToolTitle>
                <ToolDescription>{tool.description}</ToolDescription>
              </ToolCard>
            </Link>
          ))}
        </ToolsGrid>
      </ToolsWrapper>
    </Layout>
  );
}

