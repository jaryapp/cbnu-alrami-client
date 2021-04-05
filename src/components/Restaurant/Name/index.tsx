import { useReactiveVar } from '@apollo/client'

import StyledName from './style'
import { resturantNameVar } from '@src/apollo/cache'

interface NameProps {
  name: string
}

function Name({ name }: NameProps) {
  const resturantName = useReactiveVar(resturantNameVar)
  const active = resturantName === name
  const handleName = () => {
    resturantNameVar(name)
  }

  return (
    <StyledName onClick={handleName} className={active ? 'active' : undefined}>
      {name}
    </StyledName>
  )
}

export default Name
