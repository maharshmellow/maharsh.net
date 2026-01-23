import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/layout";

const SAMPLE_LOG = `https 2026-01-16T18:34:18.996954Z app/prd-maharsh-6DYFMM5L0KLD/6795112393553c49 35.210.223.105:60941 - 0.000 -1 -1 460 - 16816 0 "POST https://www.maharsh.net:443/graphql HTTP/1.1" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0" ECDHE-RSA-AES128-GCM-SHA256 TLSv1.2 arn:aws:elasticloadbalancing:us-west-2:984333333333:targetgroup/prd-maharsh-ARIQWRV4IJGZ/cb4090c210b06763 "Self=1-696a84aa-006519293c9dc4f64ead1a27;Root=1-796a84aa-37e9d2b1350b0fbd19cea023" "prd.a.maharsh.net" "arn:aws:acm:us-west-2:984333333333:certificate/09d7ef40-abf2-4ebd-9735-55af7e59139d" 0 2026-01-16T18:34:18.958000Z "forward" "-" "-" "-" "-" "-" "-" TID_mrpb11838917bf46af147808f276bcdf "-" "-" "-"`;

const FIELD_DEFS = [
  {
    key: "type",
    position: 1,
    label: "type",
    description:
      "The type of request or connection (http, https, h2, grpcs, ws, wss).",
  },
  {
    key: "time",
    position: 2,
    label: "time",
    description:
      "The time when the load balancer generated a response to the client.",
  },
  {
    key: "elb",
    position: 3,
    label: "elb",
    description: "The resource ID of the load balancer.",
  },
  {
    key: "client",
    position: 4,
    label: "client:port",
    description: "The client IP address and port.",
  },
  {
    key: "target",
    position: 5,
    label: "target:port",
    description: "The target IP address and port.",
  },
  {
    key: "request_processing_time",
    position: 6,
    label: "request_processing_time",
    description:
      "Total time from the load balancer receiving the request to sending it to the target (seconds).",
  },
  {
    key: "target_processing_time",
    position: 7,
    label: "target_processing_time",
    description:
      "Total time from the target receiving the request to sending a response (seconds).",
  },
  {
    key: "response_processing_time",
    position: 8,
    label: "response_processing_time",
    description:
      "Total time from the load balancer receiving the response to sending it to the client (seconds).",
  },
  {
    key: "elb_status_code",
    position: 9,
    label: "elb_status_code",
    description: "The status code sent to the client by the load balancer.",
  },
  {
    key: "target_status_code",
    position: 10,
    label: "target_status_code",
    description: "The status code from the target.",
  },
  {
    key: "received_bytes",
    position: 11,
    label: "received_bytes",
    description: "The size of the request, in bytes, received by the load balancer.",
  },
  {
    key: "sent_bytes",
    position: 12,
    label: "sent_bytes",
    description: "The size of the response, in bytes, sent by the load balancer.",
  },
  {
    key: "request",
    position: 13,
    label: "request",
    description: "The request line from the client.",
  },
  {
    key: "user_agent",
    position: 14,
    label: "user_agent",
    description: "The user agent string.",
  },
  {
    key: "ssl_cipher",
    position: 15,
    label: "ssl_cipher",
    description: "The SSL cipher used for HTTPS connections.",
  },
  {
    key: "ssl_protocol",
    position: 16,
    label: "ssl_protocol",
    description: "The SSL protocol used for HTTPS connections.",
  },
  {
    key: "target_group_arn",
    position: 17,
    label: "target_group_arn",
    description: "The ARN of the target group.",
  },
  {
    key: "trace_id",
    position: 18,
    label: "trace_id",
    description: "The contents of the X-Amzn-Trace-Id header.",
  },
  {
    key: "domain_name",
    position: 19,
    label: "domain_name",
    description: "The SNI domain name provided by the client.",
  },
  {
    key: "chosen_cert_arn",
    position: 20,
    label: "chosen_cert_arn",
    description: "The ARN of the certificate selected for the connection.",
  },
  {
    key: "matched_rule_priority",
    position: 21,
    label: "matched_rule_priority",
    description: "The priority value of the rule that matched the request.",
  },
  {
    key: "request_creation_time",
    position: 22,
    label: "request_creation_time",
    description: "The time when the load balancer received the request from the client.",
  },
  {
    key: "actions_executed",
    position: 23,
    label: "actions_executed",
    description: "The actions taken when processing the request.",
  },
  {
    key: "redirect_url",
    position: 24,
    label: "redirect_url",
    description: "The URL of the redirect target.",
  },
  {
    key: "error_reason",
    position: 25,
    label: "error_reason",
    description: "The error reason code, if any.",
  },
  {
    key: "target_port_list",
    position: 26,
    label: "target_port_list",
    description: "The list of target ports for the request.",
  },
  {
    key: "target_status_code_list",
    position: 27,
    label: "target_status_code_list",
    description: "The list of target status codes for the request.",
  },
  {
    key: "classification",
    position: 28,
    label: "classification",
    description: "Classification for desync mitigation.",
  },
  {
    key: "classification_reason",
    position: 29,
    label: "classification_reason",
    description: "The reason for the desync mitigation classification.",
  },
  {
    key: "trace_id2",
    position: 30,
    label: "trace_id",
    description: "The trace ID (duplicate field for certain log formats).",
  },
  {
    key: "requested_domain_name",
    position: 31,
    label: "domain_name",
    description: "The domain name in the request.",
  },
  {
    key: "chosen_cert_arn2",
    position: 32,
    label: "chosen_cert_arn",
    description: "The ARN of the certificate used for the request.",
  },
];

const ToolsWrapper = styled.section`
  margin-top: 80px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    sans-serif;

  @media screen and (max-width: 640px) {
    margin-top: 24px;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
    color: #5f5f5f;
    font-size: 15px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 170px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #d8d8d8;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;

  @media screen and (max-width: 640px) {
    border-radius: 8px;
    padding: 12px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (max-width: 640px) {
    gap: 10px;
  }
`;

const ActionButton = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  background: #f8f8f8;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f0f0f0;
    border-color: #c9c9c9;
  }
`;

const PrimaryActionButton = styled(ActionButton)`
  background: #111111;
  color: #ffffff;
  border-color: #111111;
  font-weight: 500;

  &:hover {
    background: #000000;
    border-color: #000000;
  }
`;

const TableWrapper = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 12px;
  overflow: visible;

  @media screen and (max-width: 640px) {
    border-radius: 8px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  thead th:first-child {
    border-top-left-radius: 12px;
  }

  thead th:last-child {
    border-top-right-radius: 12px;
  }

  @media screen and (max-width: 640px) {
    display: block;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 12px 14px;
  background: #f8f8f8;
  border-bottom: 1px solid #e7e7e7;
  font-weight: 600;

  @media screen and (max-width: 640px) {
    display: block;
    padding: 12px;
  }
`;

const Td = styled.td`
  padding: 12px 14px;
  border-bottom: 1px solid #f0f0f0;
  vertical-align: top;
  color: #2e2e2e;
  word-break: break-word;

  @media screen and (max-width: 640px) {
    display: block;
    padding: 10px 12px;
  }
`;

const FieldCell = styled(Td)`
  white-space: nowrap;
  width: 320px;

  @media screen and (max-width: 640px) {
    width: 100%;
    white-space: normal;
    border-bottom: none;
    padding-bottom: 4px;
  }
`;

const FieldLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
`;

const TooltipWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Tooltip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  border: 1px solid #cfcfcf;
  color: #6b6b6b;
  font-size: 11px;
  font-weight: 700;
  cursor: help;
`;

const TooltipContent = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  max-width: 320px;
  padding: 8px 10px;
  background: #111111;
  color: #ffffff;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
  z-index: 10;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;

  ${TooltipWrapper}:hover & {
    opacity: 1;
  }
`;

const EmptyState = styled.div`
  padding: 18px;
  color: #7a7a7a;
  font-size: 14px;
`;

const Footer = styled.div`
  margin-top: 8px;
  text-align: center;
  font-size: 12px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

function tokenizeLog(line) {
  const tokens = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === " " && !inQuotes) {
      if (current.length > 0) {
        tokens.push(current);
        current = "";
      }
      continue;
    }

    current += char;
  }

  if (current.length > 0) {
    tokens.push(current);
  }

  return tokens;
}

function parseLog(line) {
  const trimmed = line.trim();
  if (!trimmed) {
    return [];
  }

  const tokens = tokenizeLog(trimmed);
  const rows = FIELD_DEFS.map((field, index) => {
    const raw = tokens[index] ?? "";
    const value = raw === "-" ? "" : raw;
    return { ...field, value };
  });

  return rows;
}

export default function AwsAlbLogParser() {
  const router = useRouter();
  const [logInput, setLogInput] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    const logParam = router.query.log;
    if (typeof logParam === "string") {
      setLogInput(decodeURIComponent(logParam));
    }
  }, [router.isReady, router.query.log]);

  const rows = useMemo(() => parseLog(logInput), [logInput]);

  const updateUrl = (value) => {
    const params = new URLSearchParams(router.query);
    if (value) {
      params.set("log", encodeURIComponent(value));
    } else {
      params.delete("log");
    }
    const queryString = params.toString();
    const nextUrl = queryString ? `/tools/aws-alb-log-parser?${queryString}` : "/tools/aws-alb-log-parser";
    router.replace(nextUrl, undefined, { shallow: true });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setLogInput(value);
    updateUrl(value);
  };

  const handleCopyUrl = async () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch (error) {
      const fallback = document.createElement("textarea");
      fallback.value = url;
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      document.body.removeChild(fallback);
    }
  };

  const handleSample = () => {
    setLogInput(SAMPLE_LOG);
    updateUrl(SAMPLE_LOG);
  };

  return (
    <Layout title="AWS ALB Log Parser - Tools" hideNav noBottomPadding>
      <ToolsWrapper>
        <Header>
          <h1>AWS ALB Log Parser</h1>
          <p>Paste a single ALB access log line to see each parsed field.</p>
        </Header>

        <div>
          <TextArea
            placeholder="Paste an ALB access log line here..."
            value={logInput}
            onChange={handleChange}
          />
        </div>

        <Actions>
          <PrimaryActionButton type="button" onClick={handleCopyUrl}>
            Copy URL
          </PrimaryActionButton>
          <ActionButton type="button" onClick={handleSample}>
            Show sample log
          </ActionButton>
        </Actions>

        <TableWrapper>
          {rows.length === 0 ? (
            <EmptyState>Paste a log line to see parsed fields.</EmptyState>
          ) : (
            <Table>
              <thead>
                <tr>
                  <Th>Field</Th>
                  <Th>Value</Th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.key}>
                    <FieldCell>
                      <FieldLabel>
                        {row.label}
                        <TooltipWrapper aria-label={row.description}>
                          <Tooltip>i</Tooltip>
                          <TooltipContent>{row.description}</TooltipContent>
                        </TooltipWrapper>
                      </FieldLabel>
                    </FieldCell>
                    <Td>{row.value}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </TableWrapper>

        <Footer>
          <a href="https://maharsh.net">Made by Maharsh</a>
        </Footer>
      </ToolsWrapper>
    </Layout>
  );
}

