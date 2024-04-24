import { FileText } from '@phosphor-icons/react';
import React from 'react';
import './cstt.scss'

const Cstt = () => {
    return (
        <div className='cstt_container'>
            <div className="cstt_header">
                <FileText size={100} color={"#008cfc"} />
                <span>CHÍNH SÁCH THANH TOÁN</span>
            </div>
            <div className="cstt_footer">
                <div className='cstt_footer_content'>
                    PHƯƠNG THỨC THANH TOÁN <br/>
                    Khách hàng có thể chọn một trong các hình thức thanh toán dưới đây<br/>
                    – Thanh toán khi nhận hàng (COD):
                    <ul>
                        <li>Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ. Trong quá trình đặt hàng, chọn Thanh toán khi nhận hàng (COD) trong phần Phương thức thanh toán.</li>
                        <li>Bước 2: Toàn Nhân xác nhận thông tin Người mua, và tổng giá trị đơn hàng bao gồm: Giá trị sản phẩm + Cước phí vận chuyển (nếu có).</li>
                        <li>Bước 3: FNet giao hàng sau khi xác nhận thông tin.</li>
                        <li>Bước 4: Người mua nhận hàng và thanh toán bằng tiền mặt.</li>
                    </ul>
                    – Chuyển khoản ngân hàng:
                    <ul>
                        <li>Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ. Trong quá trình đặt hàng, hãy chọn Thanh toán chuyển khoản ngân hàng trong phần Phương thức thanh toán và tiến hành chuyển khoản vào tài khoản ngân hàng của FNet</li>
                        <li>Bước 2: FNet xác nhận thông tin Người mua và chuyển khoản;</li>
                        <li>Bước 3: FNet chuyển hàng;</li>
                        <li>Bước 4: Người mua nhận hàng.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cstt;