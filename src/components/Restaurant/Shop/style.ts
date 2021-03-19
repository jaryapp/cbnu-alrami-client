import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Shop = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid var(--gray);
  font-size: 0.9rem;

  img {
    height: 80%;
    border-radius: 0.2rem;
    margin-left: 1rem;
    align-self: center;
  }

  .shop-info {
    margin-left: 1rem;
    align-self: center;

    .title {
      font-weight: 700;
      font-size: 1.1rem;
    }

    .menu,
    .time {
      margin-top: 0.7rem;
    }
  }
`
export default Shop
