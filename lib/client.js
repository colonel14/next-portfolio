import { client } from "@/sanity/lib/client";
import {
  expericencesquery,
  paginatedquery,
  pathquery,
  projectquery,
  singlequery,
  skillsquery,
} from "./groq";

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

export async function getAllProjects() {
  return (await client.fetch(projectquery, { next: { revalidate: 3600 } })) || [];
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

export async function getProjectBySlug(slug) {
  return (
    (await client.fetch(singlequery, { slug }, { cache: "no-store" })) || {}
  );
}

export async function getAllProjectsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery, { cache: "no-store" })) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
