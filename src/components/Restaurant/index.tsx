import Dialog from '../shared/Dialog'
import StyledRestaurant from './style'
import Name from './Name'
import Map from './Map'

function Restaurant() {
  const NAMES = ['중문', '쪽문', '정문', '후문']
  return (
    <StyledRestaurant>
      <div className="names">
        {NAMES.map(name => (
          <Name key={name} {...{ name }} />
        ))}
      </div>
      <Map />
    </StyledRestaurant>
  )
}

export default Dialog({ title: '맛집', ContentComponent: Restaurant })
