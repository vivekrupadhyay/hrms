import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

import { DynamicNode } from '../common/interface/DynamicNode';

import {
  ChildClient,
  DynamicFlatNode,
} from '../common/interface/wizard.interface';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;
  public treeControl: FlatTreeControl<DynamicFlatNode<ChildClient>>;
  public dataSource: MatTreeFlatDataSource<
    DynamicNode<ChildClient>,
    DynamicFlatNode<ChildClient>
  >;

  public checkListSelection = new SelectionModel<DynamicFlatNode<ChildClient>>(
    true
  );

  private treeFlattener: MatTreeFlattener<
    DynamicNode<ChildClient>,
    DynamicFlatNode<ChildClient>
  >;
  private nodeMap = new Map<ChildClient, DynamicFlatNode<ChildClient>>();
  private unSubscribe$ = new Subject<void>();

  ngOnInit(): void {}
  constructor(public dialog: MatDialog) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<DynamicFlatNode<ChildClient>>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }
  transformer = (
    node: DynamicNode<ChildClient | null>,
    level: number
  ): DynamicFlatNode<ChildClient | null> => {
    return node.item === null
      ? ({
          item: null,
          label: node.label,
          level,
          expandable: node.hasChildren,
        } as DynamicFlatNode<null>)
      : this.memorizedTransformer(node, level);
  };
  memorizedTransformer = (
    node: DynamicNode<ChildClient>,
    level: number
  ): DynamicFlatNode<ChildClient> => {
    const existingNode = this.nodeMap.get(node.item);
    if (existingNode) {
      existingNode.isloading = node.isLoading;
      existingNode.expandable = node.isExpandable;
      return existingNode;
    }

    const newNodes: DynamicFlatNode<ChildClient> = {
      item: node.item,
      label: node.label,
      level,
      expandable: node.isExpandable,
      isSelected: node.isSelected,
      isloading: node.isLoading,
    };
    this.nodeMap.set(node.item, newNodes);
    return newNodes;
  };
  getLevel = (node: DynamicFlatNode<ChildClient>): number => node.level;
  isExpandable = (node: DynamicFlatNode<ChildClient>): boolean =>
    node.expandable;
  getChildren = (node: DynamicNode<ChildClient>): DynamicNode<ChildClient>[] =>
    node.filteredChildren;
  public hasChild(_: number, nodeData: DynamicFlatNode<ChildClient>): boolean {
    return nodeData.expandable;
  }

  public ngOnDestroy(): void {
    this.unSubscribe$.next();
  }
}
