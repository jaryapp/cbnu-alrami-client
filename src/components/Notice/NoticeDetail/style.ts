import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const NoticeDetail = styled.div`
  .main {
    overflow-y: auto;
    overflow-x: hidden;
    padding: 1.2rem;
    height: calc(100vh - 5rem);
    white-space: normal;
    word-break: break-all;
    .title {
      font-size: 1rem;
      text-align: center;
    }

    .date {
      font-size: 0.95rem;
      margin-top: 0.5rem;
      color: var(--notice-gray-700);
      text-align: right;
    }

    .contents {
      margin-top: 0.8rem;

      img {
        width: 100%;
        max-width: 800px;
      }
    }

    .url {
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1.1rem;

      a {
        color: var(--link-blue);
        font-weight: bold;
        text-decoration: underline;
      }
      .iphone-desc {
        margin-top: 0.2rem;
        color: var(--notice-gray-800);
        font-size: 0.8rem;
      }
    }
  }
`

export default NoticeDetail
