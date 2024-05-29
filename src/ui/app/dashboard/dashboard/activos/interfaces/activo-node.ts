export interface IActivoNode {
  expandable: boolean;
  name: string;
  level: number;
  type?: 'root' | 'environment' | 'machine' | 'engine' | 'spot' | 'route',
  isExpanded?: boolean;
}