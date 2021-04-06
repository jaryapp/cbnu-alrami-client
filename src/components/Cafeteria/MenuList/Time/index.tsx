import StyledTime from './style'

interface TimeProps {
  timezone: string
}

function Time({ timezone }: TimeProps) {
  return <StyledTime>{timezone}</StyledTime>
}

export default Time
