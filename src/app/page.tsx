import { Bio } from "@/app/components/bio";
import { Experience } from "@/app/components/experience";
import { Projects } from "@/app/components/projects";

export default function Home() {
  return (
    <div>
      <Bio />
      <Experience />
      <Projects />
    </div>
  );
}
