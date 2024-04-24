import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';
import './New.scss'
// import assets from '../../assets/img/Asset_4x.jpg'
// import fnet from '../../assets/logo/fnet_logo.png'
// import { CaretDoubleDown, CaretDoubleRight, DotsThreeVertical, Heart, MagnifyingGlass, ShieldPlus } from '@phosphor-icons/react';

const New = () => {
  // const [addLike, setAddLike] = useState(false);
  // const [openMenu, setOpenMenu] = useState(false);
  // const [titleMenu, setTitleMenu] = useState('All posts')

  // const [numberLike, setNumberLike] = useState(0)
  // const handleAddLike = () => {
  //   setAddLike(!addLike);
  //   if (addLike === false) {
  //     setNumberLike(numberLike + 1);
  //   } else {
  //     setNumberLike(numberLike - 1);
  //   }
  // };
  // const handleOpenMenu = () => {
  //   setOpenMenu(!openMenu)
  // }
  // const subMenu = [
  //   "All posts",
  //   "Kinh nghiệm kinh doanh",
  //   "Thông cáo báo chí",
  //   "Hướng dẫn",
  //   "Chuỗi phòng game/cyber game"
  // ]
  // const handleChangeMenu = (item) => {
  //   setTitleMenu(item);
  //   setOpenMenu(false);
  // }
  return (
    <div className='news_container'>
      {/* <div className="new_menu">
        <ul>
          <li>All Posts</li>
          <li>Kinh nghiệm kinh doanh</li>
          <li>Thông cáo báo chí</li>
          <li>Hướng dẫn</li>
          <li>Chuỗi phòng game/cyber game</li>
          <li>
            <input type="text" />
            <MagnifyingGlass size={22} />
          </li>
        </ul>
      </div>
      <div className="new_menu_mb">
        <ul>
          <li onClick={() => handleOpenMenu()}>
            {
              openMenu ?
                <CaretDoubleDown size={22} /> :
                <CaretDoubleRight size={22} />
            }
            <span>{titleMenu}</span>
          </li>
          <li>
            <input type="text" />
            <MagnifyingGlass size={22} />
          </li>
        </ul>
      </div>
      {openMenu ?
        <div className="sub_menu">
          <ul>
            {
              subMenu.map((item, index) => {
                return (

                  <li key={index} onClick={() => handleChangeMenu(item)}>{item}</li>
                )
              })
            }
          </ul>
        </div> :
        <></>
      }
      <div className="new_body">
        <ul>
          <li>
            <div className="new_body_left">
              <img src={assets} alt="assets" className='assets_img' />
            </div>
            <div className="new_body_right">
              <div className="body_right_header">
                <div className="right_header_user">
                  <div className="header_user_logo">
                    <img src={fnet} alt="fnet" className='fnet' />
                  </div>
                  <div className="header_user_des">
                    <div className="user_des_name">
                      <div className="des_name">Hòa Nguyễn Thị Phúc</div>
                      <div className="des_infor">
                        <ShieldPlus size={14} />
                      </div>
                    </div>
                    <div className="user_des_time">
                      <div className="des_time_day">
                        26 ngày trước
                      </div>
                      <div className="des_time_seccont">
                        6 phút
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_header_more">
                  <DotsThreeVertical size={25} color={"#008cfc"} />
                </div>
              </div>
              <div className="body_right_content">
                <div className="right_content_title">
                  REVIEW TOP 3 PHẦN MỀM TÍNH TIỀN PHÒNG GAME TỐT NHẤT HIỆN NAY
                </div>
                <div className="right_content_des">
                  Đối với người kinh doanh game net lâu năm chắc chắn sẽ hiểu rõ tầm quan trọng của phần mềm tính tiền phòng game trong việc quản lý dữ liệu, thông tin khách hàng, tính tiền giờ chơi cho khách,… Đây là một trong những công cụ hỗ trợ đắc lực không chỉ đem lại hiệu quả cao trong kinh doanh phòng game mà còn mang lại nhiều tiện ích cho người chơi.
                </div>
              </div>
              <div className="body_right_divier"></div>
              <div className="body_right_footer">
                <div className="right_footer_view">
                  <div className="footer_view">93 lượt xem</div>
                  <div className="footer_cmt">0 bình luận</div>
                </div>
                <div className="right_footer_like">
                  <div className="number_like">2</div>
                  <Heart size={20} />
                </div>

              </div>
            </div>
          </li>
          <li>
            <div className="new_body_left">
              <img src={assets} alt="assets" className='assets_img' />
            </div>
            <div className="new_body_right">
              <div className="body_right_header">
                <div className="right_header_user">
                  <div className="header_user_logo">
                    <img src={fnet} alt="fnet" className='fnet' />
                  </div>
                  <div className="header_user_des">
                    <div className="user_des_name">
                      <div className="des_name">Hòa Nguyễn Thị Phúc</div>
                      <div className="des_infor">
                        <ShieldPlus size={14} />
                      </div>
                    </div>
                    <div className="user_des_time">
                      <div className="des_time_day">
                        26 ngày trước
                      </div>
                      <div className="des_time_seccont">
                        6 phút
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_header_more">
                  <DotsThreeVertical size={25} color={"#008cfc"} />
                </div>
              </div>
              <div className="body_right_content">
                <div className="right_content_title">
                  REVIEW TOP 3 PHẦN MỀM TÍNH TIỀN PHÒNG GAME TỐT NHẤT HIỆN NAY
                </div>
                <div className="right_content_des">
                  Đối với người kinh doanh game net lâu năm chắc chắn sẽ hiểu rõ tầm quan trọng của phần mềm tính tiền phòng game trong việc quản lý dữ liệu, thông tin khách hàng, tính tiền giờ chơi cho khách,… Đây là một trong những công cụ hỗ trợ đắc lực không chỉ đem lại hiệu quả cao trong kinh doanh phòng game mà còn mang lại nhiều tiện ích cho người chơi.
                </div>
              </div>
              <div className="body_right_divier"></div>
              <div className="body_right_footer">
                <div className="right_footer_view">
                  <div className="footer_view">93 lượt xem</div>
                  <div className="footer_cmt">0 bình luận</div>
                </div>
                <div className="right_footer_like">
                  <div className="number_like">3</div>
                  <Heart size={20} />
                </div>

              </div>
            </div>
          </li> <li>
            <div className="new_body_left">
              <img src={assets} alt="assets" className='assets_img' />
            </div>
            <div className="new_body_right">
              <div className="body_right_header">
                <div className="right_header_user">
                  <div className="header_user_logo">
                    <img src={fnet} alt="fnet" className='fnet' />
                  </div>
                  <div className="header_user_des">
                    <div className="user_des_name">
                      <div className="des_name">Hòa Nguyễn Thị Phúc</div>
                      <div className="des_infor">
                        <ShieldPlus size={14} />
                      </div>
                    </div>
                    <div className="user_des_time">
                      <div className="des_time_day">
                        26 ngày trước
                      </div>
                      <div className="des_time_seccont">
                        6 phút
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right_header_more">
                  <DotsThreeVertical size={25} color={"#008cfc"} />
                </div>
              </div>
              <div className="body_right_content">
                <div className="right_content_title">
                  REVIEW TOP 3 PHẦN MỀM TÍNH TIỀN PHÒNG GAME TỐT NHẤT HIỆN NAY
                </div>
                <div className="right_content_des">
                  Đối với người kinh doanh game net lâu năm chắc chắn sẽ hiểu rõ tầm quan trọng của phần mềm tính tiền phòng game trong việc quản lý dữ liệu, thông tin khách hàng, tính tiền giờ chơi cho khách,… Đây là một trong những công cụ hỗ trợ đắc lực không chỉ đem lại hiệu quả cao trong kinh doanh phòng game mà còn mang lại nhiều tiện ích cho người chơi.
                </div>
              </div>
              <div className="body_right_divier"></div>
              <div className="body_right_footer">
                <div className="right_footer_view">
                  <div className="footer_view">93 lượt xem</div>
                  <div className="footer_cmt">0 bình luận</div>
                </div>
                <div className="right_footer_like">
                  <div className="number_like">{numberLike}</div>
                  {
                    !addLike ?
                      <Heart size={20} className="heart" onClick={() => handleAddLike()} />
                      : <Heart size={20} className="heart" weight="fill" onClick={() => handleAddLike()} />
                  }
                </div>

              </div>
            </div>
          </li>
        </ul>

      </div> */}

      <h1>OOPs!!</h1>
      <p>Sorry, This page are building!</p>
      <Link to='/' className="button_back">Go Home</Link>
    </div>
  );
};

export default New;