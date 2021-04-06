import { NoticeCardListWrapper } from './style'
import NoticeCard from './NoticeCard'

function NoticeCardList() {
  const notices = [
    {
      notice_id: 1,
      title: '[공지사항] 제목이 들어갈 자리입니다.',
      depart: '소프트웨어학과',
      site_name: '공지사항',
      created_at: '2020-08-09',
    },
    {
      notice_id: 2,
      title: '[공지사항] 제목이 들어갈 자리입니다.',
      depart: '소프트웨어학과',
      site_name: '공지사항',
      created_at: '2020-08-09',
    },
  ]
  return (
    <NoticeCardListWrapper>
      {notices.map(notice => (
        <NoticeCard key={notice.notice_id} {...notice} />
      ))}
    </NoticeCardListWrapper>
  )
}

export default NoticeCardList
