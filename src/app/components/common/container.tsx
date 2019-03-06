import styled, { ThemedStyledProps } from "styled-components";

export const Container = styled.div<IContainerProps>`
  max-width: ${(props : IContainerProps) : string => props.maxWidth || "80%"};
  margin: auto;
`;

interface IContainerProps {
  /**
   * Max width of the container
   */
  maxWidth? : string;
}
