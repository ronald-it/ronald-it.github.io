import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {
    name,
    role,
    educationInfo,
    frontendInfo,
    backendInfo,
    characteristicsInfo,
    resume,
    social,
  } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{educationInfo && educationInfo}</p>
      <p className='about__desc'>{frontendInfo && frontendInfo}</p>
      <p className='about__desc'>{backendInfo && backendInfo}</p>
      <p className='about__desc'>
        {characteristicsInfo && characteristicsInfo}
      </p>

      <div className='about__contact center'>
        {resume && (
          <a href='/Ronald Cirgofer Resume Full Stack Developer.pdf' download>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
