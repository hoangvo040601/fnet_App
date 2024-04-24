import React, { useEffect, useRef } from 'react';
import './Home.scss';
import WOW from 'wowjs';
import 'animate.css';
import background from '../../assets/background/background.jpg'
import background2 from '../../assets/background/background2.jpg'
import img_header from '../../assets/img/img_header.jpg'
import Mascot_3x from '../../assets/img/Mascot_3x.jpg'
import Mascot_4x from '../../assets/img/Mascot_4x.jpg'
import pay_2x from '../../assets/img/pay_2x.jpg'
import hv_4x from '../../assets/img/hv_4x.jpg'
import Asset_4x from '../../assets/img/Asset_4x.jpg'
import Data_2x from '../../assets/img/data_1_2x.jpg'
import rp_2x from '../../assets/img/rp_2x.jpg'
import KM_2x from '../../assets/img/KM_2x.jpg'
import ong from '../../assets/logo/ong_medium.png'
import dv_center from '../../assets/logo/dv_center.png'
import shinbe from '../../assets/logo/shinbe.png'
import pt from '../../assets/logo/pt.png'
import fastup from '../../assets/logo/fastup.png'
import fnet from '../../assets/logo/fnet_logo.png'
import ffood from '../../assets/logo/ffood.png'
import fumeli from '../../assets/logo/fumeli.png'
import gsn from '../../assets/background/gsn.svg'
import gss from '../../assets/background/gss.svg'


import { CheckCircle, Clock, CurrencyCircleDollar, Gear, Heart, ShieldPlus, WhatsappLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
const Home = ({ children }) => {
    const scrollRef = useRef(null);

    const scrollToPosition = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    useEffect(() => {
        // Khởi tạo Wow.js
        const wow = new WOW.WOW();
        wow.init();
    }, []);
    return (
        <div className='content_container'>
            <div className='content_body_infor'>

                <div className='background_wrapper'>
                    <img src={background} alt="backgroud background_mb" className='background' />
                    <img src={background} alt="backgroud" className='background' />
                </div>
                <div className="background_wraper_all">
                    <div className='backgroud_wraper_left'>
                        <div className='background_left_infor'>
                            <div className='infor_header wow animate__fadeInLeft' data-wow-duration="2s" >
                                <h1>
                                    <span>PHẦN MỀM <br />TÍNH TIỀN</span>
                                    <br />
                                </h1>
                                <h1>PHÒNG GAME</h1>
                            </div>
                            <div className='infor_body'>
                                <p>FNet cung cấp đầy đủ các tính năng từ cơ bản đến nâng cao
                                    giúp hoàn thiệt giải pháp kinh doanh phòng game và phục vụ
                                    cho việc quản lý, kinh doanh phòng game hiệu quả, giúp bạn
                                    tiết kiệm thời gian, chi phí quản lý nhằm tối ưu hóa lợi
                                    nhuận kinh doanh tốt nhất.</p>
                            </div>
                            <div className='button_experience wow animate__fadeInLeft' data-wow-duration="2s" onClick={scrollToPosition}>
                                <span>Trải nghiệm ngay</span>
                            </div>
                        </div>
                    </div>
                    <div className='backgroud_wraper_right '>
                        <div className='background_right_infor'>
                            <div className="right_infor_wraper">
                                <div className='img_header'>
                                    <img src={img_header} alt="img_header_img" className='img_header_img' />
                                    <div className='mascot_3x'>
                                        <img src={Mascot_3x} alt="mascot_3x" className='img_mascot_3x' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background_infor">
                    <ul>
                        <li className='infor_feature'>
                            <div className='feature_wraper'>

                                <div className='feature_icon'>
                                    <CheckCircle size={60} color={'#fff'} />
                                </div>
                                <div className='feature_header'>
                                    <h4>Tính năng đa dạng</h4>
                                </div>
                                <p className='feature_body'>
                                    <span>- TÍnh năng cơ bản: quản lý máy trạm, hội viên, tính tiền, báo cáo, combo, sao lưu dữ liệu...</span>
                                    <br />
                                    <span>- Tính năng nâng cao: tạo hội viên qua CCCD, lưu nhật ký web, ứng dụng di động, sao lưu dữ liệu cloud.</span>

                                </p>
                            </div>
                        </li>
                        <li className='infor_feature'>
                            <div className='feature_wraper'>
                                <div className='feature_icon'>
                                    <ShieldPlus size={60} color={'#fff'} />
                                </div>
                                <div className='feature_header'>
                                    <h4>Hệ thống bảo mật</h4>
                                </div>
                                <p className='feature_body'>
                                    <span>- Hệ thống bảo mật cao, sử dụng các giải pháp an ninh tiên tiến.</span>
                                    <br />
                                    <span>- Khả năng lưu trữ dữ liệu lớn, đảm bảo cơ chế sao lưu, khôi phục dữ liệu.</span>

                                </p>

                            </div>

                        </li>
                        <li className='infor_feature'>
                            <div className='feature_wraper'>

                                <div className='feature_icon'>
                                    <WhatsappLogo size={60} color={'#fff'} />
                                </div>
                                <div className='feature_header'>
                                    <h4>Hỗ trợ chuyên nghiệp</h4>
                                </div>
                                <p className='feature_body'>
                                    <span>- Đội ngũ hỗ trợ kỹ thuật toàn quốc.</span>
                                    <br />
                                    <span>- Dịch vụ hỗ trợ kỹ thuật nhanh chóng, tận tâm.</span>

                                </p>
                            </div>

                        </li>
                    </ul>
                </div>
                <div className="background_infor_mb">
                    <ul>
                        <li className='infor_feature'>
                            <div className='feature_wraper'>

                                <div className='feature_icon'>
                                    <CheckCircle size={60} color={'#fff'} />
                                </div>
                                <div className='feature_header'>
                                    <h4>Tính năng đa dạng</h4>
                                </div>
                                <p className='feature_body'>
                                    <span>- TÍnh năng cơ bản: quản lý máy trạm, hội viên, tính tiền, báo cáo, combo, sao lưu dữ liệu...</span>
                                    <br />
                                    <span>- Tính năng nâng cao: tạo hội viên qua CCCD, lưu nhật ký web, ứng dụng di động, sao lưu dữ liệu cloud.</span>

                                </p>
                            </div>
                        </li>
                        <li className='infor_feature'>
                            <div className='feature_wraper'>
                                <div className='feature_icon'>
                                    <ShieldPlus size={60} color={'#fff'} />
                                </div>
                                <div className='feature_header'>
                                    <h4>Hệ thống bảo mật</h4>
                                </div>
                                <p className='feature_body'>
                                    <span>- Hệ thống bảo mật cao, sử dụng các giải pháp an ninh tiên tiến.</span>
                                    <br />
                                    <span>- Khả năng lưu trữ dữ liệu lớn, đảm bảo cơ chế sao lưu, khôi phục dữ liệu.</span>

                                </p>

                            </div>

                        </li>
                        <li className='infor_feature'>
                            <div className='feature_wraper'>

                                <div className='feature_icon'>
                                    <WhatsappLogo size={60} color={'#fff'} />
                                </div>
                                <div className='feature_header'>
                                    <h4>Hỗ trợ chuyên nghiệp</h4>
                                </div>
                                <p className='feature_body'>
                                    <span>- Đội ngũ hỗ trợ kỹ thuật toàn quốc.</span>
                                    <br />
                                    <span>- Dịch vụ hỗ trợ kỹ thuật nhanh chóng, tận tâm.</span>

                                </p>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>

            <div className="content_body_why" ref={scrollRef}>
                <div className="body_why_wraper">
                    <div className="body_why_left">
                        <div className='why_left_img wow animate__zoomIn' data-wow-duration="2s">
                            <img src={Mascot_4x} alt="Mascot_4x" className='mascot_4x' />
                        </div>
                    </div>
                    <div className="body_why_right">
                        <div className="why_right_content">
                            <div className='wow animate__fadeInRight' data-wow-duration="2s">
                                <h2>
                                    <span>
                                        VÌ SAO
                                        <br />
                                        NÊN DÙNG
                                        <br />
                                        PHẦN MỀM
                                    </span>
                                </h2>
                                <h2>QUẢN LÝ FNET?</h2>
                            </div>
                            <p>Các công cụ quản lý tự động giúp
                                giảm thiểu thao tác cài đặt và đào
                                tạo nhân viên thúc đẩy quy trình quản
                                lý và vận hành phòng game được hiệu quả hơn</p>
                        </div>
                        <div className='why_box_content'>
                            <ul>
                                <li className='wow animate__fadeInRight' data-wow-duration="2s">
                                    <div className='box_icon'>
                                        <Heart size={55} color={'#008cfc'} />
                                    </div>
                                    <div className='box_header'>Đơn giản, dễ sử dụng</div>
                                </li>
                                <li className='wow animate__fadeInLeft' data-wow-duration="2s">
                                    <div className='box_icon'>
                                        <Clock size={55} color={'#008cfc'} />
                                    </div>
                                    <div className='box_header'>Tiết kiệm thời gian, chi phí</div>
                                </li>
                                {/* <br /> */}
                                <li className='wow animate__fadeInLeft' data-wow-duration="2s">
                                    <div className='box_icon'>
                                        <Gear size={55} color={'#008cfc'} />
                                    </div>
                                    <div className='box_header'>Đa dạng các tính năng</div>
                                </li>
                                <li className='wow animate__fadeInRight' data-wow-duration="2s">
                                    <div className='box_icon'>
                                        <CurrencyCircleDollar size={55} color={'#011e3c'} />
                                    </div>
                                    <div className='box_header'>Tối ưu hoá lợi nhuận</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="body_why_background_wraper">

                    <div className="body_why_background">
                        <img src={gsn} alt="gsn" className='gsn' />
                        <img src={gsn} alt="gsn" className='gsn' />
                        <img src={gsn} alt="gsn" className='gsn' />
                        <img src={gsn} alt="gsn" className='gsn' />

                    </div>
                </div>
            </div>

            <div className="content_body_feature">
                <h1>TÍNH NĂNG THÔNG MINH
                </h1>
                <h1>TỪ FNET?</h1>
            </div>

            <div className='content_body_prize'>
                <div className="body_prize_background_wraper">
                    <div className="body_prize_background">
                        <img src={gss} alt="gss" className='gss' />
                        <img src={gss} alt="gss" className='gss' />
                        <img src={gss} alt="gss" className='gss' />
                        <img src={gss} alt="gss" className='gss' />
                    </div>
                </div>
                <div className="body_prize_wraper">
                    <div className="body_prize_left">
                        <img src={pay_2x} alt="pay_2x" className='pay_2x' />
                    </div>
                    <div className="body_prize_right">
                        <h2>
                            <span>Nạp tiền hội viên bằng </span>
                            <span>QR & chat với thu ngân</span>
                        </h2>
                        <p>
                            Nạp tiền nhanh chóng và linh động
                            thông qua giao diện trò chuyện
                            thu ngân trực quan và thanh toán
                            QR code trên máy trạm bất kỳ lúc nào.
                            Giúp hội viên, nhân viên quản lý
                            tiết kiệm thời gian, công sức.
                            Đặc biệt phù hợp cho các phòng game
                            có quy mô máy trạm lớn, không gian
                            rộng và nhiều khu vực.
                        </p>
                    </div>
                </div>

            </div>

            <div className="content_body_member">
                <div className="body_member_left">
                    <h2>
                        <span>Tạo hội viên tự động ​và an toàn với </span>
                        <span>CCCD</span>
                    </h2>
                    <p>Tính năng cao cấp duy nhất chỉ có
                        trên FNet giúp tạo tài khoản hội viên
                        bằng việc quét căn cước công dân chỉ
                        1 giây giúp lưu trữ thông tin khách hàng
                        và quản lý hội viên nhanh chóng & dễ dàng.
                        Đây là giải pháp đáp ứng cho các phòng máy quy mô lớn,
                        có lượng khách hàng đông nhằm giảm tải
                        cho thu ngân khi khởi tạo hội viên.
                    </p>
                </div>
                <div className="body_member_right">
                    <img src={hv_4x} alt="hv_4x" className='hv_4x' />
                </div>
            </div>

            <div className="content_body_combo">
                <div className="body_combo_left">
                    <img src={Asset_4x} alt="Asset_4x" className='Asset_4x' />
                </div>
                <div className="body_combo_right">
                    <h2>
                        <span>Tuỳ biến tạo </span>
                        <span>COMBO </span>
                        <span>lên đến </span>
                        <span>20 slot</span>
                    </h2>
                    <p>Với FNet, bạn không còn phải lo
                        giới hạn về việc tạo Combo khuyến
                        mãi như trên các sản phẩm khác
                        Giờ đây bạn thoả sức tạo Combo
                        bán hàng đáp ứng mọi nhu cầu khách hàng
                        với các tuỳ chỉnh vượt trội như:
                        combo xuyên mốc 24h, Combo tiền giờ +
                        nước + đồ ăn dịch vụ....​Giúp chủ phòng
                        máy dễ dàng thao tác và quản lý hơn bao giờ hết.
                    </p>
                </div>
            </div>

            <div className="content_body_protect">
                <div className="body_protect_left">
                    <h2>
                        <span>An toàn </span><br />
                        <span>với tính năng </span>
                        <span>FNet Guard</span>
                    </h2>
                    <p>FNet bảo mật tuyệt đối với tính năng
                        cảnh báo ngay lập tức khi có hành vi
                        can thiệp ứng dụng trên máy trạm, giảm
                        rủi ro thất thoát tài chính.
                    </p>
                </div>
                <div className="body_protect_right">
                    <img src={Data_2x} alt="Data_2x" className='Data_2x' />
                </div>
            </div>

            <div className="content_body_mobile">
                <div className="body_mobile_left">
                    <img src={rp_2x} alt="rp_2x" className='rp_2x' />
                </div>
                <div className="body_mobile_right">
                    <h2>
                        <span>FNet Mobile</span><br />
                        <span>Kiểm soát hoạt động phòng game mọi lúc, mọi nơi
                        </span>
                    </h2>
                    <p>Với ứng dụng di động FNet Mobile,
                        bạn đang trong kỳ nghỉ hay di chuyển
                        trên đường vẫn luôn có giải pháp giúp
                        bạn kiểm soát phòng game mọi lúc mọi nơi,
                        từ xa, bao gồm: Thống kê doanh thu tiền
                        giờ máy và tiền dịch vụ, theo dõi hoạt động
                        máy trạm đang online hay offline, nhiệt độ
                        máy trạm, báo cáo thống kê doanh thu, yêu cầu
                        hỗ trợ kỹ thuật, theo thời gian thực.
                    </p>
                </div>
            </div>

            <div className="content_body_contact">
                <div className="body_contact_left">
                    <h2>
                        <span>Khuyến mãi hàng ngày</span><br />
                        <span>Chăm sóc khách hàng</span>
                    </h2>
                    <p>FNet cung cấp cho bạn bộ công cụ tạo
                        khuyến mãi nhận thưởng hàng ngày và
                        các hoạt động dành cho hội viên như,
                        điểm danh hàng ngày, quay số khuyến mãi,
                        tạo khuyến mãi theo các game HOT giúp
                        "chăm sóc hội viên cũ, tìm kiếm hội viên mới"
                        Các chương trình khuyến mãi là công cụ hỗ
                        trợ kinh doanh tốt nhất và là công cụ gia
                        tăng doanh thu hiệu quả.
                    </p>
                </div>
                <div className="body_contact_right">
                    <img src={KM_2x} alt="KM_2x" className='KM_2x' />
                </div>
            </div>

            <div className="content_body_ecosystem">
                <div className="body_ecosystem_header">
                    <h2>
                        <span>HỆ SINH THÁI</span><br />
                        <span>GIẢI PHÁP PHÒNG GAME</span>
                    </h2>
                </div>
                <div className="body_ecosystem_box">
                    <ul>
                        <li className='box_item'>
                            <a href='https://www.fusoftvn.com/' target="_blank" rel="noreferrer" className="item_logo">
                                <img src={fastup} alt="fastup" className='logo' />
                            </a>
                            <div className="item_des">Phần mềm cập nhật game</div>
                        </li>
                        <li className='box_item'>
                            <Link to='/' className="item_logo">
                                <img src={fnet} alt="fnet" className='logo' />

                            </Link>
                            <div className="item_des">Phần mềm tính tiền phòng game</div>
                        </li>
                        <li className='box_item'>
                            <a href='https://ffood.com.vn/' target="_blank" rel="noreferrer" className="item_logo">
                                <img src={ffood} alt="ffood" className='logo' />

                            </a>
                            <div className="item_des">Phần mềm bán hàng cho phòng game, cafe, bida</div>
                        </li>
                        <li className='box_item'>
                            <div className="item_logo">
                                <img src={fumeli} alt="fumeli" className='logo' />

                            </div>
                            <div className="item_des">Cổng hoạt động nhận ưu đãi dành cho người chơi tại phòng game</div>
                        </li>
                    </ul>
                </div>
                <div className="body_ecosystem_box_mb">
                    <ul>
                        <li className='box_item'>
                            <a href='https://www.fusoftvn.com/' target="_blank" rel="noreferrer" className="item_logo">
                                <img src={fastup} alt="fastup" className='logo' />
                            </a>
                            <div className="item_des">Phần mềm cập nhật game</div>
                        </li>
                        <li className='box_item'>
                            <Link to='/' className="item_logo">
                                <img src={fnet} alt="fnet" className='logo' />

                            </Link>
                            <div className="item_des">Phần mềm tính tiền phòng game</div>
                        </li>
                        <li className='box_item'>
                            <a href='https://ffood.com.vn/' target="_blank" rel="noreferrer" className="item_logo">
                                <img src={ffood} alt="ffood" className='logo' />

                            </a>
                            <div className="item_des">Phần mềm bán hàng cho phòng game, cafe, bida</div>
                        </li>
                        <li className='box_item'>
                            <div className="item_logo">
                                <img src={fumeli} alt="fumeli" className='logo' />

                            </div>
                            <div className="item_des">Cổng hoạt động nhận ưu đãi dành cho người chơi tại phòng game</div>
                        </li>
                    </ul>
                </div>
                <div className="body_ecosystem_background"></div>
            </div>

            <div className="content_body_feedback">
                <div className='background2'>
                    <img src={background2} alt="background2" className='background2' />

                </div>
                <div className='body_feedback_wraper'>
                    <div className="body_feedback_header">
                        <h2>
                            <span>CẢM NHẬN KHÁCH HÀNG</span><br />
                            <span>ĐÃ SỬ DỤNG FNET</span>
                        </h2>
                    </div>
                    <div className="body_feedback_main">
                        <div className="feedback_main_item_first">
                            <div className="main_item_first">
                                <a href='https://www.facebook.com/oegstadiumvn' className="item_first_logo">
                                    <img src={ong} alt="ong" target="_blank" className='ong wow animate__fadeInLeft' data-wow-duration="2s" />
                                </a>
                                <div className="item_first_content">
                                    Phần mềm rất gọn nhẹ và mượt mà.
                                    Nhờ tính năng tạo hội viên tự động bằng
                                    máy quét căn cước công dân mà OEG có thể
                                    phục vụ cùng lúc hàng trăm khách hàng nhanh chóng.
                                    Tính năng này thật sự tiện lợi và đảm bảo yêu cầu
                                    quản lý của nhà nước và giúp cho phòng máy lên đến
                                    250 máy trạm của chúng tôi.
                                </div>
                            </div>
                        </div>
                        <div className="feedback_main_item_secont">

                            <div className="main_item_secont">
                                <div className="item_secont_content">
                                    Đối với DV CENTER FNet chính là trợ
                                    thủ đắc lực và là giải pháp quản lý tính
                                    tiền tuyệt vời dành cho phòng game.
                                    Hệ thống đa dạng các tính năng phù hợp
                                    với nhu cầu thực tế giúp cho việc quản
                                    lý vận hành hiệu quả hơn.
                                </div>
                                <a href='https://www.facebook.com/profile.php?id=61551023300759' className="item_secont_logo">
                                    <img src={dv_center} alt="dv_center" target="_blank" className='dv_center wow animate__fadeInRight' data-wow-duration="2s" />
                                </a>
                            </div>
                        </div>
                        <div className="feedback_main_item_thirt">

                            <div className="main_item_thirt">
                                <a href='https://www.facebook.com/sbnpremium/' rel="noreferrer" target="_blank" className="item_thirt_logo">
                                    <img src={shinbe} alt="shinbe" className='shinbe wow animate__fadeInLeft' data-wow-duration="2s" />
                                </a>
                                <div className="item_thirt_content">

                                    Trước kia, khi đến giờ cao điểm khách hàng
                                    của chúng tôi phải xếp hàng rất lâu để được
                                    sử dụng dịch vụ. Nhưng từ khi sử dụng FNet
                                    phòng game chúng tôi đã phục vụ khách hàng
                                    tốt hơn nhờ các tính năng tự động hóa trong
                                    quản lý máy trạm và hội viên. Giao diện FNet
                                    hiện đại, dễ sử dụng do đó chúng tôi không
                                    mất nhiều thời gian để làm quen và đào tạo
                                    cho nhân viên.
                                </div>
                            </div>
                        </div>

                        <div className="feedback_main_item_last">

                            <div className="main_item_last">
                                <div className="item_last_content">
                                    Trong quá trình sử dụng FNet tôi đã rất hài lòng,
                                    bên cạnh các tính năng hỗ trợ quản lý vận hành
                                    hiệu quả, phần mềm còn có các tính năng tạo khuyến
                                    mãi để thu hút khách hàng nâng cao doanh thu cho
                                    phòng game. Bên cạnh đó đội ngũ kỹ thuật viên
                                    FNet luôn hỗ trợ kịp thời và chính xác các sự
                                    cố xảy ra đảm bảo không làm gián đoạn hoạt động
                                    phòng game.
                                </div>
                                <a href='https://www.facebook.com/PTgamingcenter' rel="noreferrer" target="_blank" className="item_last_logo">
                                    <img src={pt} alt="pt" className='pt wow animate__fadeInRight' data-wow-duration="2s" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Home;