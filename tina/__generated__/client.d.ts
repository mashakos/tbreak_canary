import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/5f8cd26a-f872-46fc-8de1-3a91c79e028b/github/master', token: 'c75735c3f8ba8ba9a01480e6f9ff2f3742e6ec37', queries,  });
export default client;
  