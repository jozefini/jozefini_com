import { ExternalLink } from '../external-link'
import { IconGithub } from '../icons/icon-github'
import { IconLinkedin } from '../icons/icon-linkedin'
import { IconX } from '../icons/icon-x'

const css = {
  socialsList: 'flex items-center gap-4',
}

export function SocialsList() {
  return (
    <div className={css.socialsList}>
      <ExternalLink href="https://www.x.com/jozefini_com">
        <IconX />
      </ExternalLink>
      <ExternalLink href="https://github.com/jozefini">
        <IconGithub />
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/jozefini/">
        <IconLinkedin />
      </ExternalLink>
    </div>
  )
}
