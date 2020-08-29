import { Type } from '@angular/core';

export interface DetailsComponent {
  context: DetailsContext;
}
export interface DetailsContext {
  userId: number;
  // companyCode: string;
}
export interface DetailsComponentHostConfig {
  instanceKey: string;
  title: string;
  component: Type<DetailsComponent>;
}
