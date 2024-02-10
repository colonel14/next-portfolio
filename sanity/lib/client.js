import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { paginatedquery } from "../../lib/groq";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
