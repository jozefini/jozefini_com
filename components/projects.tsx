import { Headline } from './ui/headline'
import { ProjectItem, ProjectsGrid } from './ui/projects'

export function Projects() {
  return (
    <div>
      <Headline>Projects</Headline>
      <ProjectsGrid>
        <ProjectItem
          href="https://store.jozefini.com"
          title="Store"
          tags={['react', 'state-management']}
          iconClassName="bg-cyan-600"
        >
          A react state management that handles frequent state changes
          efficiently
        </ProjectItem>
      </ProjectsGrid>
    </div>
  )
}
