import { BehaviorSubject } from 'rxjs';

export class DynamicNode<T> {
  childChange = new BehaviorSubject<DynamicNode<T>[]>([]);
  get children(): DynamicNode<T>[] {
    return this.childChange.value;
  }
  isLoadingChange = new BehaviorSubject<boolean>(false);
  get isLoading(): boolean {
    return this.isLoadingChange.value;
  }
  filteredChildrenChange = new BehaviorSubject<DynamicNode<T>[]>([]);
  get filteredChildren(): DynamicNode<T>[] {
    return this.filteredChildrenChange.value;
  }
  get isExpandable(): boolean {
    const hasNotLoadedChildren = this.children.length === 0 && this.hasChildren;
    const hasLoadedChildren = this.children.length > 0;

    return hasNotLoadedChildren || hasLoadedChildren;
  }

  constructor(
    public item: T,
    public label: string,
    public hasChildren: false,
    public isSelected: boolean = false
  ) {}
}
