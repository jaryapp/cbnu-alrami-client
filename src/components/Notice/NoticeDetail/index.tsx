import { BiChevronLeft } from 'react-icons/bi'
import StyledDetail from './style'
import notices from '@src/__mocks/notices'
import Dialog from '@components/shared/Dialog'

interface NoticeDetailProps {
  notice_id: number
  openCallback: Function
}

function NoticeDetail({ notice_id, openCallback }: NoticeDetailProps) {
  const notice = notices[0]
  const ContentComponent = ({ closeDialog }: { closeDialog: Function }) => (
    <StyledDetail>
      <div className="header">
        <BiChevronLeft className="arrow" onClick={e => closeDialog(e)} />
        <div className="title">{notice.title}</div>
      </div>
      <section className="main">
        <div className="title">{notice.title}</div>
        <div className="date">{notice.date}</div>
        <div className="contents" dangerouslySetInnerHTML={{ __html: notice.contents }}></div>
        <div className="url">
          자세한 내용은 및 첨부파일은 <a href={notice.url}>본문</a>에서 확인
          {/* 아이폰 문구는 아이폰 웹뷰 이슈 해결시 삭제될 예정 */}
          <div className="iphone-desc">* 아이폰에서는 본문을 길게 누른뒤 Open Link를 클릭하세요</div>
        </div>
      </section>
    </StyledDetail>
  )

  return Dialog({ ContentComponent })({ openCallback })
}

export default NoticeDetail
