import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Detail = styled.div`
  .header {
    .title {
      font-size: 1.1rem;
    }
  }

  section {
    display: flex column;
    color: #222;

    .time,
    .break,
    .location {
      color: #222;
      font-weight: 600;
      margin-left: 1.8rem;
      margin-top: 0.3rem;
      margin-bottom: 1.3rem;

      .icon {
        position: relative;
        margin-right: 0.2rem;
        top: 1.5px;
        font-size: 0.8rem;
      }

      p {
        margin-top: 0.5rem;
        font-weight: 400;
        color: var(--detail-gray);
      }
    }

    .menu-detail {
      margin: 0 auto;
      margin-top: 2rem;
      margin-bottom: 2rem;
      margin-left: 1.3rem;
      margin-right: 1.3rem;
      padding-bottom: 1.3rem;
      padding-top: 1.3rem;
      padding-left: 1rem;
      background-color: var(--detail-menu-gray);
      border-radius: 0.5rem;

      .detail {
        display: flex;
        justify-content: space-between;

        .line {
          align-self: center;
          flex-basis: 100%;
          flex-shrink: 1;
          border-bottom: 1px solid var(--detail-line-gray);
        }

        .menu,
        .price {
          flex-shrink: 0;
          margin: 0.5rem;
          font-weight: 600;
        }
      }
    }
  }
`
export default Detail
