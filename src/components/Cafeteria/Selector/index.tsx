import Arrow from './Arrow'
import Date from './Date'
import Name from './Name'
import StyledSelector from './style'

function Selector() {
  const NAMES = ['본관', '양성재', '양진재', '별빛식당', '은하수식당', '한빛식당']
  return (
    <StyledSelector>
      <div className="date">
        <Arrow direction="left" />
        <Date />
        <Arrow direction="right" />
      </div>
      <div className="names">
        {NAMES.map(name => (
          <Name key={name} {...{ name }} />
        ))}
      </div>
    </StyledSelector>
  )
}

export default Selector
