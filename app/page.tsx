import { Bio } from '@/components/bio'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
// import { Articles } from '@/components/articles'
// import { Newsletter } from '@/components/newsletter'

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <Bio />
      <Experience />
      <Projects />
      {/* <Articles /> */}
      {/* <Newsletter /> */}
    </div>
  )
}
