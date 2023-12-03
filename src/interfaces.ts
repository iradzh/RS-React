export interface IFormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirmed: string;
  gender: string;
  pic?: FileList;
  tc: boolean;
}

export interface IDisplayValue {
  isInitialised: boolean;
  name: string;
  age: number;
  email: string;
  password: string;
  passwordConfirmed: string;
  gender: string;
  pic?: string;
  tc: boolean;
}

export interface IUncInputProps {
  id: number;
  name: string;
  type: string;
  errorMessage?: string;
  label: string;
  pattern?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IHookDataProp {
  form: string;
}

export enum TableForm {
  HOOK = 'React Hook Form',
  UNC = 'Uncontrolled Form',
}

export interface ITableValues {
  uncontrForm: IDisplayValue;
  hookData: IDisplayValue;
}

export interface IPicValidation {
  type: string;
  size: number;
}
