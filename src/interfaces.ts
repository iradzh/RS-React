export interface IFormValues {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
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
