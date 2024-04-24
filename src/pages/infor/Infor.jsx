import React from 'react';
import './Infor.scss';
import master from '../../assets/img/Master.jpg'
import background2 from '../../assets/background/background2.jpg'
import fpt from '../../assets/logo/logo-FPT-Polytechnic.jpg'
import vnpt from '../../assets/logo/logo_VNPT.jpg'
import viettel from '../../assets/logo/Viettel.jpg'
import vtc from '../../assets/logo/Logo_VTC_Game.jpg'
import gtv from '../../assets/logo/logo-gtv-moi.jpg'
import oeg from '../../assets/logo/oeg.jpg'
import baokim from '../../assets/logo/logo_baokim_edited.jpg'
import viresa from '../../assets/logo/logo_Viresa.jpg'
import { Link } from 'react-router-dom';
const Infor = () => {
    return (
        <div className='infor_container'>
            <div className="infor_intro">
                <div className="infor_intro_background">
                    <img src={background2} alt="background2" className='background2' />
                </div>
                <div className='infor_intro_wraper'>
                    <div className="infor_intro_left">
                        <img src={master} alt="master" className='master' />
                    </div>
                    <div className="infor_intro_right">
                        <div className="intro_right_wraper">
                            <h2>
                                <span>NÂNG TẦM QUẢN LÝ</span><br />
                                <span>PHÒNG GAME</span><br />
                                <span>BỨC PHÁ DOANH THU</span><br />
                                <span>CÙNG FNET</span><br />
                            </h2>
                            <h2>Được phát triển bởi Fusoft, đơn vị chuyên cung cấp
                                các giải pháp quản lý & vận hành phòng internet game
                                tại Việt Nam. FNet là mảnh ghép hoàn hảo cho hệ sinh
                                thái phần mềm trong gói giải pháp quản lý phòng game
                                thông minh Với thế mạnh có đội ngũ kỹ thuật viên trên
                                63 tỉnh thành cùng uy tín và chất lượng đã được khẳng định,
                                FNet sẽ là giải pháp quản lý tính tiền phòng game hiệu quả,
                                đáp ứng kịp thời mọi yêu cầu và mang đến những trải nghiệm
                                vượt ngoài mong đợi dành cho khách hàng do ưu điểm nổi bật
                                mà FNet mang lại như:
                                <ul>
                                    <li>Quét CCCD phần mềm tự động tạo tài khoản hội viên chưa tới 2 giây</li>
                                    <li>Theo dõi hiệu quả kinh doanh, thống kê báo cáo, trạng thái máy trạm và vận hành chuỗi phòng game từ xa</li>
                                    <li>Cam kết bảo mật dữ liệu và truy xuất phục hồi khi có sự cố</li>
                                    <li>Gia tăng doanh thu phòng game, mở rộng tệp khách hàng thông qua các tính năng điểm danh quay số</li>
                                    <li>Dịch vụ kỹ thuật toàn quốc, hỗ trợ nhanh chóng - tận tâm</li>
                                </ul>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="infor_partner">
                <h2 className="infor_partner_header">ĐỐI TÁC</h2>
                <p className="infor_partner_des">
                    FNet tự hào là sự lựa chọn hợp tác
                    và đồng hành của nhiều doanh nghiệp.
                    Sự kết nối và hợp tác trong mảng phần mềm
                    và dịch vụ phòng game của các đối tác cho
                    thấy sự hiệu quả khi đồng hành cùng FNet
                    khi chinh phục khách hàng Việt Nam.
                </p>
                <div className="infor_partner_logo">
                    <ul>
                        <li>
                            <img src={fpt} alt="fpt" className='fpt' />
                        </li>
                        <li>
                            <img src={vnpt} alt="vnpt" className='vnpt' />
                        </li>
                        <li>
                            <img src={viettel} alt="viettel" className='viettel' />
                        </li>
                        <li>
                            <img src={vtc} alt="vtc" className='vtc' />
                        </li>
                        <li>
                            <img src={gtv} alt="fpt" className='gtv' />
                        </li>
                        <li>
                            <img src={oeg} alt="fpt" className='oeg' />
                        </li>
                        <li>
                            <img src={baokim} alt="fpt" className='baokim' />
                        </li>
                        <li>
                            <img src={viresa} alt="fpt" className='viresa' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="infor_footer">
                <div className="infor_footer_header">
                    Bạn cần liên hệ với chúng tôi?
                </div>
                <Link to='/contact' className="infor_footer_button">
                    <span>Liên hệ ngay</span>
                </Link>
            </div>
        </div>
    );
};

export default Infor;