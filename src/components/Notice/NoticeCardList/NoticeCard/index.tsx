import StyledNoticeCard from './style'
import NoticeDetail from '../../NoticeDetail'

export interface NoticeCardProps {
  notice_id: number
  title: string
  depart: string
  type: string
  date: string
}

function NoticeCard({ notice_id, title, depart, type, date }: NoticeCardProps) {
  let openDialog: Function

  const openCallbackDetailDialog = (cb: Function) => {
    openDialog = cb
  }

  return (
    <>
      <StyledNoticeCard
        className="notice-card"
        onClick={e => {
          openDialog(e)
        }}>
        <div className="title">{title}</div>
        <div className="info">
          <div className="depart">{depart}</div>
          <div className="site-name">{type}</div>
          <div className="date">{date}</div>
        </div>
      </StyledNoticeCard>
      <NoticeDetail notice_id={notice_id} openCallback={openCallbackDetailDialog} />
    </>
  )
}

export default NoticeCard
