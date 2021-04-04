import StyledDrawer from './style'

interface Menu {
  menu: string
  price: number
}

interface RestaurantDetail {
  address: string
  location: string
  longitude: number
  latitude: number
  name: string
  details: Menu[]
  time: string
  break: string
}

function Drawer({ detail }: { detail: RestaurantDetail | undefined }) {
  return (
    <StyledDrawer>
      <div className="drawer">
        <div className="photo" />
        <div className="info">
          <div className="name">{detail?.name}</div>
          <div className="address">{detail?.address}</div>
          <div className="menu">
            {detail?.details[0].menu} {detail?.details[0].price}
          </div>
        </div>
      </div>
    </StyledDrawer>
  )
}

export default Drawer
