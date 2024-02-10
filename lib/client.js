import { client } from "@/sanity/lib/client";
import {
  expericencesquery,
  paginatedquery,
  projectquery,
  skillsquery,
} from "./groq";

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

export async function getAllProjects() {
  return (await client.fetch(projectquery, { cache: "no-store" })) || [];
}

export async function getAllSkills() {
  return (await client.fetch(skillsquery)) || [];
}

export async function getAllExpericences() {
  return (await client.fetch(expericencesquery)) || [];
}

export async function getPaginatedProjects(limit) {
  if (client) {
    return (
      (await client.fetch(
        paginatedquery,
        {
          pageIndex: 0,
          limit: limit,
        },
        { next: { revalidate: 30 } }
      )) || {}
    );
  }
  return {};
}
