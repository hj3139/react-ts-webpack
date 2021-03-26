import React from "react";
import styled from "styled-components";

// 부모 컴포에서 전달받은 props의 type를 지정한다
export interface HelloProps {
  compiler: string;
  framework: string;
}

const StyledHello = styled.div`
  h1 {
    color: red;
  }
`;
// props의 type을 helloProps 인터페이스와 연결
export const Hello = (props: HelloProps) => {
  return (
    <StyledHello>
      <h1>
        {props.compiler} and {props.framework}!
      </h1>
    </StyledHello>
  );
};
