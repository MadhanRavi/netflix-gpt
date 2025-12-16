import OpenAI from "openai";
import { REACT_APP_GPT_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: process.env[REACT_APP_GPT_API_KEY],
});

export default client;
