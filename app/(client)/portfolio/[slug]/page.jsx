import "@/styles/projectdetail.css";

import { getAllProjectsSlugs, getProjectBySlug } from "@/lib/client";
import ProjectPage from "./ProjectPage";

export async function generateStaticParams() {
  return await getAllProjectsSlugs();
}

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);
  return { title: project.title };
}

export default async function ServiceDefault({ params }) {
  const project = await getProjectBySlug(params.slug);

  return <ProjectPage project={project} />;
}
