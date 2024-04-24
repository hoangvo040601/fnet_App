import { CaretCircleDown } from '@phosphor-icons/react';
import React from 'react';
import background2 from '../../assets/background/background2.jpg'
import sun from '../../assets/logo/sun.png'
import './Prize.scss'

const Prize = ({ children }) => {
    return (
        <div className='prize_container'>
            <img src={background2} alt="background2" className='background3' />
            <div className="prize_wraper">
                <div className="prize_header">
                    <h2>
                        <span>Lựa chọn phù hợp</span><br />
                        <span>cho bạn?</span>
                    </h2>
                </div>
                <div className="prize_body">
                    <ul>
                        <li>
                            <div className="prize_body_wraper_left">
                                <div className="body_left_header">Gói chuyên dụng</div>
                                <div className="body_left_prize">15.000đ</div>
                                <div className="body_left_opacity">01 máy trạm/tháng</div>
                                <div className="body_left_des">Dành cho mô hình cyber game, tự động hoá trong quản lý giúp việc kinh doanh đơn giản & hiệu quả</div>
                                <div className="body_left_option">Gói cung cấp các phần mềm bao gồm</div>
                                <div className="body_left_item">
                                    <ul>
                                        <li>
                                            <div className="left_item_icon">
                                                <CaretCircleDown size={32} color={'#008cfc'} />
                                            </div>
                                            <div className="left_item_content">Phần mềm tính tiền</div>
                                        </li>
                                        <li>
                                            <div className="left_item_icon">
                                                <CaretCircleDown size={32} color={'#008cfc'} />
                                            </div>
                                            <div className="left_item_content">Phần mềm cập nhật game</div>
                                        </li><li>
                                            <div className="left_item_icon">
                                                <CaretCircleDown size={32} color={'#008cfc'} />
                                            </div>
                                            <div className="left_item_content">Menu quản lý dịch vụ</div>
                                        </li>
                                        <li>
                                            <div className="left_item_icon">
                                                <CaretCircleDown size={32} color={'#008cfc'} />
                                            </div>
                                            <div className="left_item_content">Ứng dụng mobile theo dõi kinh doanh</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sun ">
                                    <div className="sys">
                                        <img src={sun} alt="sys" className='sun' />
                                        <span>HOT</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="prize_body_wraper_right">
                                <div className="body_left_header">Gói mở rộng</div>
                                <div className="body_left_prize">20.000đ</div>
                                <div className="body_left_opacity">01 máy trạm/tháng</div>
                                <div className="body_left_des">Dành cho mô hình cyber game, tự động hoá trong quản lý giúp việc kinh doanh đơn giản & hiệu quả</div>
                                <div className="body_left_option">Gói cung cấp các phần mềm bao gồm</div>
                                <div className="body_left_item">
                                    <div className="left_item_wraper">
                                        <div className="left_item_icon">
                                            <CaretCircleDown size={32} color={'#008cfc'} />

                                        </div>
                                        <div className="left_item_content">Phần mềm tính tiền</div>
                                    </div>
                                    <div className="left_item_wraper">

                                        <div className="left_item_icon">
                                            <CaretCircleDown size={32} color={'#008cfc'} />

                                        </div>
                                        <div className="left_item_content">Phần mềm cập nhật game</div>
                                    </div>

                                    <div className="left_item_wraper">
                                        <div className="left_item_icon">
                                            <CaretCircleDown size={32} color={'#008cfc'} />

                                        </div>
                                        <div className="left_item_content">
                                            Menu quản lý dịch vụ mở rộng
                                        </div>
                                    </div>

                                    <div className="left_item_content_list">
                                        <ul>
                                            <li>Quản lý tồn kho, sản phẩm, dịch vụ</li>
                                            <li>Kết nối nhiều thiết bị:  Bar, Bếp</li>
                                            <li>Phân quyền quản lý ca, nhân viên</li>
                                            <li>Biểu đồ báo cáo, phân tích chuyên sâu phục vụ kinh doanh</li>
                                        </ul>
                                    </div>
                                    <div className="left_item_wraper">

                                        <div className="left_item_icon">
                                            <CaretCircleDown size={32} color={'#008cfc'} />

                                        </div>
                                        <div className="left_item_content">Ứng dụng Mobile quản lý từ xa doanh thu, tình trạng máy, nhiệt độ, báo cáo...</div>
                                    </div>

                                </div>
                            </div>
                        </li>



                    </ul>
                    {/* <div className="prize_body_right">

                </div> */}
                </div>
                <div className="prize_footer">
                    <h2>
                        <span>Khả năng mở rộng tính năng Bida & Coffee chỉ từ</span><br />
                        <span>30.000đ/tháng</span>
                    </h2>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Prize;