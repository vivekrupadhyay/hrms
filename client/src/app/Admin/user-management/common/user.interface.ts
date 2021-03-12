export interface User {
  userID: number;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  password: string;
  confirmPassword: string;
  isActive: boolean;
  createdBy: number;
  createdDate: Date;
  modifiedBy: number;
  modifiedDate: Date;
  token: string;
}
