import { GlobeHemisphereWest, GooglePodcastsLogo, HouseLine } from '@phosphor-icons/react';
import React from 'react';
import './dowload.scss'
const Dowload = () => {
    return (
        <div className='dowload_container'>
            <div className="dowload_header">
                <span>
                    TẢI FNet
                </span><br />
                <p>Bộ công cụ cài đặt phần mềm</p>
                <div className="divier"></div>
            </div>
            <div className="dowload_footer">
                <ul>
                    <li>
                        <div className="footer_icon">
                            <GooglePodcastsLogo size={100} color={'#fff'} />
                        </div>
                        <div className="footer_header">My SQL</div>
                        <div className="footer_des">Ver: 1.0</div>
                        <a href='https://drive.google.com/file/d/1cuDCJn_uxV3riO5G3zDEOZ8yiCSmXzyr/view' target="_blank" rel="noreferrer" className="footer_dow">
                            <span>Tải về</span>
                        </a>
                    </li>
                    <li>
                        <div className="footer_icon">
                            <GlobeHemisphereWest size={100} color={'#fff'} />
                        </div>
                        <div className="footer_header">FNet Server</div>
                        <div className="footer_des">Ver 1.0.0</div>
                        <a href='https://drive.google.com/drive/folders/1f1FGdtshWqQ8QviPM8x04HREq-68Qvro' target="_blank" rel="noreferrer" className="footer_dow">
                            <span>Tải về</span>
                        </a>
                    </li><li>
                        <div className="footer_icon">
                            <HouseLine size={100} color={'#fff'} />
                        </div>
                        <div className="footer_header">FNet Client</div>
                        <div className="footer_des">Ver 1.0.1</div>
                        <a href='https://drive.google.com/file/d/1RZeD-jktSZnpE2LeYGcUUnlpyWAs_lOC/view' target="_blank" rel="noreferrer" className="footer_dow">
                            <span>Tải về</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="dowload_footer_mb">
                <ul>
                    <li>
                        <div className="footer_icon">
                            <GooglePodcastsLogo size={100} color={'#fff'} />
                        </div>
                        <div className="footer_header">My SQL</div>
                        <div className="footer_des">Ver: 1.0</div>
                        <a href='https://drive.google.com/file/d/1cuDCJn_uxV3riO5G3zDEOZ8yiCSmXzyr/view' target="_blank" rel="noreferrer" className="footer_dow">
                            <span>Tải về</span>
                        </a>
                    </li>
                    <li>
                        <div className="footer_icon">
                            <GlobeHemisphereWest size={100} color={'#fff'} />
                        </div>
                        <div className="footer_header">FNet Server</div>
                        <div className="footer_des">Ver 1.0.0</div>
                        <a href='https://drive.google.com/drive/folders/1f1FGdtshWqQ8QviPM8x04HREq-68Qvro' target="_blank" rel="noreferrer" className="footer_dow">
                            <span>Tải về</span>
                        </a>
                    </li><li>
                        <div className="footer_icon">
                            <HouseLine size={100} color={'#fff'} />
                        </div>
                        <div className="footer_header">FNet Client</div>
                        <div className="footer_des">Ver 1.0.1</div>
                        <a href='https://drive.google.com/file/d/1RZeD-jktSZnpE2LeYGcUUnlpyWAs_lOC/view' target="_blank" rel="noreferrer" className="footer_dow">
                            <span>Tải về</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dowload;