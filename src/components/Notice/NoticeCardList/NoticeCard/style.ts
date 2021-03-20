import styled from 'styled-components'
import '@src/assets/style/__pallette.css'

export const NoticeCardWrapper = styled.div`
  border: 1px solid var(--notice-gray-300);
  border-radius: 0.5rem;
  padding: 0.7rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%);

  & > .title {
    padding-bottom: 0.5rem;
  }

  & > .info {
    font-size: 0.75rem;
    display: flex;
    color: var(--notice-gray-700);

    .depart::after {
      content: '|';
      margin: 0 0.15rem;
    }
    
    .date {
      margin-left: auto;
    }
  }
`
