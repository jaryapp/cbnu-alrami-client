import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Shop = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid var(--gray);
  font-size: 0.9rem;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  picture {
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 0.2rem;
      margin-left: 1rem;
      margin-top: 0.4rem;
      align-self: center;
      object-fit: cover;
    }
  }

  .shop-info {
    margin-left: 1rem;
    align-self: center;

    .title {
      font-weight: 700;
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
    }

    .menu {
      font-size: 0.85rem;
      margin-bottom: 0.3rem;
    }

    .time,
    .break {
      display: flex;
      align-items: center;
      position: relative;
      font-size: 0.75rem;
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
