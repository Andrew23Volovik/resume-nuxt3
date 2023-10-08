import { H3Error } from "h3";
import { AdditionalDataReturn, Paragraph } from "~/db/schema/profile";
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

export type ProfileResponse = {
  paragraphs: Paragraph[];
  additionalData: AdditionalDataReturn;
};