import { BallCanvas } from './canvas/index.js';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants/index.js';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div
          className="w-28 h-28"
          key={tech.name}
        >
          <BallCanvas icon={tech.icon}></BallCanvas>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'tech');