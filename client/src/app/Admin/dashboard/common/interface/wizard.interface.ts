export interface DynamicFlatNode<T> {
  item: T;
  label: string;
  level: number;
  expandable: boolean;
  isExpanded?: boolean;
  isloading: boolean;
  isSelected: boolean;
}
export interface ChildClient {
  parenClientId: number;
  childClientId: number;
}
