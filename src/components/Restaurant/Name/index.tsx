import { useReactiveVar } from '@apollo/client'

import StyledName from './style'
import { resturantNameVar } from '@src/apollo/cache'

function Name({ name }: { name: string }) {
  const resturantName = useReactiveVar(resturantNameVar)
  const active = resturantName === name
  const handleName = () => {
    resturantNameVar(name)
  }

  return (
    <StyledName onClick={handleName} className={active ? 'active' : ''}>
      {name}
    </StyledName>
  )
}

export default Name
