import React, { useState } from 'react';
import './Contact.scss'
import background2 from '../../assets/background/background2.jpg'
import mastcot_4x from '../../assets/img/Mascot_4x.jpg'
import { callContact } from '../../services/api';
const Contacts = () => {
    const [nameh, setNameh] = useState('')
    const [namet, setNamet] = useState('')
    const [email, setEmail] = useState('')
    const [notice, setNotice] = useState('')

    const [isValidEmail, setIsValidEmail] = useState(true);


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
    };
    const handleChangeNotice = (value) => {
        setNotice(value)
    }

    const submit = async() => {
        const res = await callContact(nameh,namet,email,notice)
        if(res && res.data){
            console.log("test dữ liệu: ", res.data)
        }else{
            console.log("dữ liệu lỗi:")
        }

    }


    return (
        <div className='contact_container'>
            <img src={background2} alt="background2" className='background_contact' />
            <div className="contact_wraper">
                <div className="contact_header">
                    <span>THÔNG TIN LIÊN HỆ</span>
                    <p>Vui lòng nhập thông tin liên hệ của bạn để được hỗ trợ hoặc hợp tác cùng FNet</p>
                </div>
                <div className="contact_body">
                    <div className="contact_body_left">
                        <img src={mastcot_4x} alt="mastcot_4x" className='contact_mastcot_4x' />
                    </div>
                    <div className="contact_body_right">
                        <div className="body_right_wraper">

                            <div className="contact_right_header">
                                <span>
                                    CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS
                                </span>
                            </div>
                            <div className="contact_right_des">
                                <p>Tầng 5,  144-146 Nguyễn Thái Bình,
                                    Phường Nguyễn Thái Bình, Quận 1,
                                    Tp. Hồ Chí Minh
                                </p>
                            </div>
                            <div className="contact_right_infor">
                                <div className="infor_mail">
                                    <p>
                                        <a href="mailto:infor@fnet.com.vn">infor@fnet.com.vn</a>
                                    </p>
                                </div>
                                <div className="infor_divier"></div>
                                <div className="infor_phone">028 2200 0113</div>

                            </div>
                            <div className="contact_right_name">
                                <div className="name_h">
                                    <span>Họ</span>
                                    <input
                                        type="text"
                                        name="name_h"
                                        value={nameh}
                                        onChange={(e) => handleChangeNameh(e.target.value)}
                                    />
                                </div>
                                <div className="name_t">
                                    <span>Tên</span>
                                    <input
                                        type="text"
                                        value={namet}
                                        name="name_t"
                                        onChange={(e) => handleChangeNamet(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className="contact_right_email">
                                <span>Email *</span>
                                <input
                                    type="email"
                                    value={email}
                                    style={{
                                        borderBottomColor: isValidEmail ? 'initial' : '#ff403f',
                                        borderBottomStyle: 'solid',
                                        borderBottomWidth: isValidEmail ? '1px' : '3px',
                                    }}
                                    className={isValidEmail ? '' : 'input_invalid'}
                                    name="email"
                                    onChange={(e) => handleChangeEmail(e.target.value)}
                                />
                            </div>
                            <div className="contact_right_notice">
                                <span>Vui lòng nhập thông tin</span>
                                <div className="notice">
                                    <input
                                        type="text"
                                        value={notice}
                                        name='notice'
                                        onChange={(e) => handleChangeNotice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="contact_right_button" onClick={() => submit()}>
                                <span>Gởi ngay</span>
                            </div>
                            <a href="https://www.facebook.com/fnet.com.vn" className="contact_right_facebook" target="_blank" rel="noreferrer">
                                <span>Facebook</span>
                            </a>
                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Contacts;