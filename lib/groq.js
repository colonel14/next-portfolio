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

export const singlequery = groq`
    *[_type == 'project' && slug.current == $slug][0] {
    ..., 
    technologies[]->
  }

`;

export const pathquery = groq`
*[_type == "project" && defined(slug.current)][].slug.current
`;
