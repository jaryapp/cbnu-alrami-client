import { NoticeCardWrapper } from './style'

export interface NoticeCardProps {
  notice_id: number
  title: string
  depart: string
  site_name: string
  created_at: string
}

function NoticeCard({ notice_id, title, depart, site_name, created_at }: NoticeCardProps) {
  return (
    <NoticeCardWrapper className="notice-card">
      <div className="title">{title}</div>
      <div className="info">
        <div className="depart">{depart}</div>
        <div className="site-name">{site_name}</div>
        <div className="date">{created_at}</div>
      </div>
    </NoticeCardWrapper>
  )
}

export default NoticeCard
