import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 5rem;
    animation: motion 0.3s linear 0s infinite alternate;
    margin-bottom: 3rem;
  }

  @keyframes motion {
    100% {
      margin-top: -5px;
    }
    0% {
      margin-top: 5px;
    }
  }
`
export default Loading
