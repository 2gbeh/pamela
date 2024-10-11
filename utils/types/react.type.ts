// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

export interface IParams {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface IProps {
  children: React.ReactNode;
}

export interface INextParams {
  head: { title: string };
}

export interface INextContext {
  req: unknown;
  res: unknown;
  resolvedUrl: string;
}

export type TFormState = {
  root?: {
    success?: boolean;
    message?: string;
  };
};

export type TNextFormAction = (
  prevState: { error: string | undefined },
  formData: FormData
) => Promise<any>;

// export interface IForm extends React.Fo .InputHTMLAttributes<HTMLInputElement> {}
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface ISelect
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}
export interface ITextarea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export type TOnSubmit = React.FormEvent;
export type TOnChange = React.ChangeEvent<HTMLInputElement>;
export type TOnKeyUp = React.KeyboardEvent<HTMLInputElement>;
export type TOnClick = React.MouseEvent<HTMLButtonElement>;

export type TSetStateBoolean = React.Dispatch<React.SetStateAction<boolean>>;
export type TSetStateNumber = React.Dispatch<React.SetStateAction<number>>;
export type TSetStateString = React.Dispatch<
  React.SetStateAction<string | null>
>;
