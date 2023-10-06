import { H3Error } from "h3";
export interface ISender {
  name: string;
  email: string;
  message: string;
}

export type JSONResponse = {
  status: "success" | "fail";
  data?: any;
  error?: H3Error | string | number;
};