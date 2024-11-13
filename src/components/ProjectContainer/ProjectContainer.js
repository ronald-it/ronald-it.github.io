import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && project.livePreview ? (
      <>
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
          target='_blank'
          rel='noreferrer'
        >
          <LaunchIcon />
        </a>
      </>
    ) : (
      <span>In progress</span>
    )}
  </div>
)

export default ProjectContainer
