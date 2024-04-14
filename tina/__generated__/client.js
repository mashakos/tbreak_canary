import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: "http://localhost:4001/graphql", token: "c75735c3f8ba8ba9a01480e6f9ff2f3742e6ec37", queries });
export default client;
