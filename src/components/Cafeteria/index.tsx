import MenuList from './MenuList'
import Selector from './Selector'
import Floating from './Floating'
import StyledCafeteria from './style'
import RestaurantDialog from '../Restaurant'

function Cafeteria() {
  let openDialog: Function
  const openCallback = (cb: Function) => {
    openDialog = cb
  }

  return (
    <StyledCafeteria>
      <Selector />
      <MenuList />
      <div className="nearby" onClick={() => openDialog()}>
        <Floating />
      </div>
      <RestaurantDialog {...{ openCallback }} />
    </StyledCafeteria>
  )
}

export default Cafeteria
