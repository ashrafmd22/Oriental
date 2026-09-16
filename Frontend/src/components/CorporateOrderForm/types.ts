export interface FormData {
  name: string;
  phone: string;
  requirement: string;
  quantity: string;
}

export type Errors = Record<keyof FormData, string>;
