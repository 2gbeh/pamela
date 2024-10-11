export type TPrimaryKey = string | number;

export type TSeries = number[];

export type TList = string[];

export type THashMap = Record<string, unknown>;

export type TCollection = THashMap[];

export type TMatrix = Array<number[]>;

export type TMap = Array<string[]>;

export type TFile = {
  name: string;
  type: string;
  size: number;
  webkitRelativePath: string;
  lastModified: number;
  lastModifiedDate: string | Date;
};

export type TFilePromiseVoid = (file?: File) => Promise<void>;

export type TFunction = () => void;

export type TNavigation = { label: string; path: string };

export type TResponse = {
  success: boolean;
  message: string;
  data: unknown;
};

export type TDialog = {
  h1: string;
  p: string;
  success: boolean;
};

export type TDropDownList = { label: string; value: string | number };

export type TDropDownListUnknown = { label: unknown; value: unknown };

export type TPaginator = (page: number) => void;

enum EGender {
  M = "Male",
  F = "Female",
}

// "M" | "F"
type TGenderKeys = keyof typeof EGender;

// "Male" | "Female"
type TGenderValues = `${EGender}`;
