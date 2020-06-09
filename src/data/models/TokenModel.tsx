export type TokenModel = {
  exp: number;
  iat: number;
  jti: string;
  role: string;
};

export const defaultToken: TokenModel = {
  exp: 0,
  iat: 0,
  jti: "",
  role: "",
};
