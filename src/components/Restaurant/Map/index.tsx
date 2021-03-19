import StyledMap from './style'
import Shop from './Shop'

function Map() {
  return (
    <StyledMap>
      <img src="/img/map.png" alt="지도" width="100%" />
      <div className="shop-list">
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
        <Shop />
      </div>
    </StyledMap>
  )
}

export default Map
