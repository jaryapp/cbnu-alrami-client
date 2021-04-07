import StyledNoticeCardList from './style'
import NoticeCard from './NoticeCard'
import notices from '@src/__mocks/notices'

function NoticeCardList() {
  return (
    <StyledNoticeCardList>
      {notices.map(notice => (
        <NoticeCard key={notice.noticeId} {...notice} />
      ))}
    </StyledNoticeCardList>
  )
}

export default NoticeCardList
