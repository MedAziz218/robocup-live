export type formFieldsType = Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'radio';
    required?: boolean;
    options?: string[];
  }> ;