import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Shop = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid var(--gray);
  font-size: 0.9rem;

  .img {
    width: 5rem;
    height: 77%;
    border-radius: 0.2rem;
    margin-left: 1rem;
    align-self: center;
    background-image: url('https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20180130_263%2F1517301583613dwuaL_JPEG%2FZh5SeEjUT12rWxcLJ2nstPaB.jpg');
    background-size: cover;
  }

  .shop-info {
    margin-left: 1rem;
    align-self: center;

    .title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 0.2rem;
      margin-top: 0.5rem;
    }

    .menu {
      margin-bottom: 0.5rem;
    }

    .time,
    .break {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 0.8rem;
      margin-bottom: 0.2rem;
      .icon {
        position: relative;
        margin-right: 0.2rem;
        top: -1px;
        font-size: 0.7rem;
      }
    }
  }
`
export default Shop
