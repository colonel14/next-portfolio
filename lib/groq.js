import { groq } from "next-sanity";

export const projectquery = groq`
*[_type == "project"]
`;
export const paginatedquery = groq`
*[_type == "project"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  technologies[]->
}
`;

export const skillsquery = groq`
*[_type == "skill"]
`;

export const expericencesquery = groq`
*[_type == "workExperience"] | order(year asc)
`;
