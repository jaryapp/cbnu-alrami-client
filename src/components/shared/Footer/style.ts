import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid var(--footer-border);
  color: var(--footer-gray);
  background-color: #fff;

  .icon {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 0.4rem;
    margin-top: 0.6rem;
    font-size: 1.5rem;
  }

  p {
    text-align: center;
    font-size: 0.7rem;
    margin-bottom: 0.3rem;
    padding-left: 0.1rem;
  }

  .active {
    color: var(--name-red);
  }
`
export default Footer
