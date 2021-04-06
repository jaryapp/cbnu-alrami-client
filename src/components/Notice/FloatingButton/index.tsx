import { IconType } from 'react-icons'
import { FloatingWrapper } from './style'

interface FloatingButtonProps {
  ContentIcon: IconType
}

function FloatingButton({ ContentIcon }: FloatingButtonProps) {
  return (
    <FloatingWrapper>
      <ContentIcon />
    </FloatingWrapper>
  )
}

export default FloatingButton
