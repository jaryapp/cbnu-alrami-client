import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

const Name = styled.div`
  border-radius: 0.6rem;
  padding: 10px;
  background-color: var(--gray);
  box-shadow: var(--menu-box-shadow);
  font-size: 0.9rem;
  cursor: pointer;
  min-width: 10%;
  display: flex;
  justify-content: center;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-bottom: 1rem;
  height: 1rem;

  &.active {
    color: var(--name-red);
  }
`
export default Name
