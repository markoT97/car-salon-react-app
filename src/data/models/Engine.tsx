export type Engine = {
  engineId: number;
  name: string;
  type: string;
  powerKW: number;
};

export const defaultEngine: Engine = {
  engineId: 0,
  name: "",
  type: "",
  powerKW: 0,
};
