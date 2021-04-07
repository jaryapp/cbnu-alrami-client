import StyledSelector from './style'

interface Site {
  id: number
  name: string
}

interface SelectorProps {
  sites: Site[]
}

function Selector({ sites }: SelectorProps) {
  return (
    <StyledSelector>
      {sites.map(site => (
        <li key={site.id}>{site.name}</li>
      ))}
    </StyledSelector>
  )
}

export default Selector
