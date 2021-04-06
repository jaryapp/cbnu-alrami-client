import { useReactiveVar } from '@apollo/client'

import StyledName from './style'
import { resturantLocationNameVar } from '@src/apollo/cache'

interface NameProps {
  name: string
}

function Name({ name }: NameProps) {
  const resturantLocationName = useReactiveVar(resturantLocationNameVar)
  const active = resturantLocationName === name
  const handleName = () => {
    resturantLocationNameVar(name)
  }

  return (
    <StyledName onClick={handleName} className={active ? 'active' : undefined}>
      {name}
    </StyledName>
  )
}

export default Name
