import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import background2 from '../../assets/background/background2.jpg'
import WOW from 'wowjs';
import 'animate.css';

import './Register.scss'

const Register = () => {
    useEffect(() => {
        // Khởi tạo Wow.js
        const wow = new WOW.WOW();
        wow.init();
    }, []);

    const [nameh, setNameh] = useState('')
    const [namet, setNamet] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidAddress, setIsValidAdress] = useState(true);


    const handleChangeNameh = (value) => {
        setNameh(value)
    }
    const handleChangeNamet = (value) => {
        setNamet(value)
    }
    const handleChangeEmail = (value) => {
        // Loại bỏ dấu trong địa chỉ email
        const sanitizedValue = value.replace(/[\u0300-\u036f]/g, ''); // Loại bỏ dấu tiếng Việt
        setEmail(sanitizedValue);
        // Kiểm tra định dạng email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(regex.test(sanitizedValue));
    }
    const handleChangeAddress = (value) => {
        setAddress(value)
        if (value.trim() === '') {
            setIsValidAdress(false)
        } else {
            setIsValidAdress(true)
        }
    }
    const handleProductChange = (e) => {
        const selectedIndex = e.target.selectedIndex; // Lấy chỉ số của tùy chọn đã chọn
        const selectedOptionText = e.target.options[selectedIndex].text; // Lấy văn bản của tùy chọn đã chọn
        setSelectedProduct(selectedOptionText); // Cập nhật giá trị đã chọn vào state
        console.log("test id:", selectedIndex)
    };
    const handleTimeChange = (e) => {
        const selectedIndex = e.target.selectedIndex; // Lấy chỉ số của tùy chọn đã chọn
        const selectedOptionText = e.target.options[selectedIndex].text; // Lấy văn bản của tùy chọn đã chọn
        setSelectedTime(selectedOptionText); // Cập nhật giá trị đã chọn vào state
    };
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); // Cập nhật giá trị của checkbox vào state khi thay đổi
    };


    const handleSubmit = () => {
        console.log("họ: ", nameh);
        console.log("tên: ", namet);
        console.log("email: ", email);
        console.log("địa chỉ: ", address);
        console.log("product: ", selectedProduct);
        console.log("Time: ", selectedTime);
        console.log("Checked: ", isChecked);

    }
    return (
        <div className="content_body_register">
            <img src={background2} alt="background2" className='background2' />

            <div className="body_register_wraper">
                <div className="body_register_mb">
                    <h2>
                        <span>Đăng ký ngay với</span><br />
                        <span>FNet</span>
                    </h2>
                </div>
                <div className="left_all">
                    <div className="register_wraper_left">
                        <div className="left_wraper">
                            <h2>
                                <span>Đăng ký ngay với</span><br />
                                <span>FNet</span>
                            </h2>
                            <h4 className='wow animate__fadeInLeft' data-wow-duration="2s">Địa chỉ</h4>
                            <div className='address wow animate__zoomIn' data-wow-duration="2s">
                                <div className='address_icon'>
                                    <MapPin size={32} color={'#008cfc'} />
                                    <h5>CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS</h5>
                                </div>
                                <p>Tầng 5,  144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1, Tp. Hồ Chí Minh</p>
                            </div>
                            <h4 className='wow animate__zoomIn' data-wow-duration="2s">Liên hệ</h4>
                            <div className="mail wow animate__zoomIn" data-wow-duration="2s">
                                <div className="mail_icon">
                                    <EnvelopeSimple size={32} color={'#008cfc'} />
                                    <h5>Hộp thư</h5>
                                </div>
                                <p>
                                    <a href="mailto:infor@fnet.com.vn">infor@fnet.com.vn</a>
                                </p>
                            </div>
                            <div className="phone mail wow animate__zoomIn" data-wow-duration="2s">
                                <div className="phone_icon">
                                    <Phone size={32} color={'#008cfc'} />
                                    <h5>Điện thoại</h5>
                                </div>
                                <p>028 2200 0113</p>
                            </div>
                        </div>
                    </div>
                    <div className="register_wraper_right">
                        <div className='form_header'>Vui lòng nhập thông tin</div>
                        <div className='form_name'>
                            <div className="name">
                                <span>Tên</span>
                                <input
                                    type="text"
                                    name="namet"
                                    className='input_form_name'
                                    value={namet}
                                    onChange={(e) => handleChangeNamet(e.target.value)}
                                />
                            </div>
                            <div className="ho">
                                <span>Họ</span>
                                <input
                                    type="text"
                                    name="nameh"
                                    value={nameh}
                                    className='input_form_ho'
                                    onChange={(e) => handleChangeNameh(e.target.value)}

                                />
                            </div>
                        </div>
                        <div className='form_email'>
                            <span>Email *</span>
                            <input
                                type="email"
                                value={email}
                                style={{
                                    borderBottomColor: isValidEmail ? 'initial' : '#ff403f',
                                    borderBottomStyle: 'solid',
                                    borderBottomWidth: isValidEmail ? '1px' : '3px',
                                }}
                                className={isValidEmail ? 'input_form_email' : 'input_form_email input_invalid'}
                                name="email"
                                onChange={(e) => handleChangeEmail(e.target.value)}

                            />
                        </div>
                        <div className='form_address'>
                            <span>Địa chỉ *</span>
                            <input
                                type="text"
                                value={address}
                                style={{
                                    borderBottomColor: isValidAddress ? 'initial' : '#ff403f',
                                    borderBottomStyle: 'solid',
                                    borderBottomWidth: isValidAddress ? '1px' : '3px',
                                }}
                                className={isValidAddress ? 'input_form_address' : 'input_form_address input_invalid'}
                                name="address"
                                onChange={(e) => handleChangeAddress(e.target.value)}

                            />
                        </div>
                        <div className='form_body'>Chọn sản phẩm của bạn:</div>
                        <div className="product_time">
                            <div className='form_product'>
                                <span>Gói sản phẩm</span>
                                <select
                                    name="product"
                                    id="product"
                                    onChange={handleProductChange}
                                    className='input_form_product'>
                                    <option value="nomal">Gói chuyên dụng</option>
                                    <option value="open">Gói mở rộng</option>
                                </select>
                            </div>
                            <div className='form_time'>
                                <span>Thời hạn</span>
                                <select
                                    name="time"
                                    id="time"
                                    onChange={handleTimeChange}
                                    className='input_form_time'>
                                    <option value="6month">6 tháng</option>
                                    <option value="12month">12 tháng</option>
                                </select>
                            </div>
                        </div>
                        <div className='form_policy'>
                            <input
                                type="checkbox"
                                name="isChecked"
                                checked={isChecked} // Giá trị của checkbox dựa trên state
                                onChange={handleCheckboxChange} // Xử lý sự kiện khi checkbox thay đổi
                                className='input_form' />
                            <span>Tôi chấp nhận các điều khoản và điều kiện</span>
                        </div>
                        <div
                            onClick={() => handleSubmit()}
                            className="input_button">
                            Gởi ngay
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;