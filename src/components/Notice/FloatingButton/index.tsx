import { IconType } from 'react-icons'
import StyledFloatingButton from './style'

interface FloatingButtonProps {
  ContentIcon: IconType
}

function FloatingButton({ ContentIcon }: FloatingButtonProps) {
  return (
    <StyledFloatingButton>
      <ContentIcon />
    </StyledFloatingButton>
  )
}

export default FloatingButton
