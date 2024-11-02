import { Headline } from './ui/headline'
import { ExperienceItem, ExperienceList } from './ui/experience'

export function Experience() {
  return (
    <div>
      <Headline>Experience</Headline>
      <ExperienceList>
        <ExperienceItem
          title="Full-Stack Developer"
          years="2022-present"
          isPresent
        >
          RGBCode Ltd
        </ExperienceItem>
        <ExperienceItem title="Full-Stack Developer" years="2021-2022">
          Almax Digital
        </ExperienceItem>
        <ExperienceItem title="Frontend Developer" years="2015-2021">
          Freelancer
        </ExperienceItem>
      </ExperienceList>
    </div>
  )
}
