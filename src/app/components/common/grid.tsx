import styled from "styled-components";

export const Grid = styled.div<IGridProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props : IGridProps) : string => props.column || "1fr 1fr"};
  grid-column-gap: ${(props : IGridProps) : string => props.columnGap || "0"};
  grid-row-gap: ${(props : IGridProps) : string => props.rowGap || "0"};
`;

export interface IGridProps {
  /**
   * Grid template columns css property, used to define number and size of columns
   * @default "1fr 1fr"
   */
  column? : string;
  /**
   * The gap between columns
   * @default "0"
   */
  columnGap? : string;
  /**
   * The gap between rows in the grid
   * @default "0"
   */
  rowGap? : string;
}
