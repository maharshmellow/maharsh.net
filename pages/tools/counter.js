import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/layout";

const ToolsWrapper = styled.section`
  margin-top: 80px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const CounterCard = styled.div`
  padding: 24px;
  border: 1px solid #e7e7e7;
  border-radius: 16px;
  background: #ffffff;
  width: 100%;
`;

const CounterTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: #111111;
`;

const CounterSubtitle = styled.p`
  margin: 0 0 20px;
  color: #5f5f5f;
  font-size: 14px;
`;

const CounterDisplay = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #111111;
  margin-bottom: 18px;
`;

const CounterActions = styled.div`
  display: flex;
  gap: 12px;
`;

const CounterButton = styled.button`
  flex: 1;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  background: #f8f8f8;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f0f0f0;
    border-color: #c9c9c9;
  }
`;

export default function CounterTool() {
  const [count, setCount] = useState(0);

  return (
    <Layout
      title="Counter - Tools"
      description="A simple counter tool."
      hideNav
    >
      <ToolsWrapper>
        <CounterCard>
          <CounterTitle>Counter</CounterTitle>
          <CounterSubtitle>
            A tiny stateful example using React hooks.
          </CounterSubtitle>

          <CounterDisplay>{count}</CounterDisplay>

          <CounterActions>
            <CounterButton
              type="button"
              onClick={() => setCount((value) => value - 1)}
              aria-label="Decrease count"
            >
              -
            </CounterButton>
            <CounterButton
              type="button"
              onClick={() => setCount((value) => value + 1)}
              aria-label="Increase count"
            >
              +
            </CounterButton>
          </CounterActions>
        </CounterCard>
      </ToolsWrapper>
    </Layout>
  );
}

