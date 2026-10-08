import type { Metadata } from "next";
import ProjectDetail from "../../components/ProjectDetail";
import { getProject } from "../../data/projects";

const project = getProject("jerseyos")!;
export const metadata: Metadata = {
  title: `${project.name} — Atherious Labs`,
  description: project.intro,
  alternates: { canonical: `/projects/${project.slug}/` },
};
export default function Page() {
  return <ProjectDetail project={project} />;
}
