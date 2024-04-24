import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './layout/MainLayout';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import PrizeLayout from './layout/PrizeLayout';
import Infor from './pages/infor/Infor';
import Contacts from './pages/contact/Contact';
import { ChatTeardropDots, X } from '@phosphor-icons/react';
import Dowload from './pages/dowload/Dowload';
import Csbm from './pages/csbm/csbm';
import Cstt from './pages/cstt/cstt';
import New from './pages/news/News';
import ChatPopup from './components/chatbox/Chatbox';

function App() {
  const [openPupup, setOpenPopup] = useState(true);
  const [openZoom, setOpenZoom] = useState(false);
  const [indexImg, setIndexImg] = useState(null)
  const [selectedFile, setSelectedFile] = useState([]);
  const location = useLocation();

  // console.log("check img:", selectedFile)
  const handleOpenPopup = () => {
    setOpenPopup(false)
  }

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, [location]);
  // Component để cập nhật tiêu đề của trang
  useEffect(() => {
    // Tạo một map để ánh xạ các route tới tiêu đề tương ứng
    const routeTitles = {
      '/': 'Trang chủ | Fus Fnet',
      '/infor': 'Về Fnet | Fus Fnet',
      '/prize': 'Bảng giá | Fus Fnet',
      '/contact': 'Liên hệ | Fus Fnet',
      '/dowload': 'Tải về | Fus Fnet',
      '/news': 'Tin tức | Fus Fnet',
      '/CSBM': 'CSBM | Fus Fnet',
      '/CSTT': 'CSTT | Fus Fnet',
    };

    // Lấy tiêu đề tương ứng với route hiện tại
    const title = routeTitles[location.pathname];

    // Cập nhật tiêu đề của trang
    document.title = title || 'Trang chủ';
  }, [location]);


  return (


    <div className='app_container'>

      <Layout>
        <Routes>
          <Route
            path='/'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <HomeLayout />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
          <Route
            path='/infor'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <Infor />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />

          <Route
            path='/prize'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <PrizeLayout />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
          <Route
            path='/contact'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <Contacts />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
          <Route
            path='/dowload'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <Dowload />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
          <Route
            path='/news'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <New />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
          <Route
            path='/CSBM'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <Csbm />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
          <Route
            path='/CSTT'
            element={
              // <TransitionGroup>
              // <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
              <Cstt />
              // </CSSTransition>
              // </TransitionGroup>
            }
          />
        </Routes>

      </Layout>
      {
        openPupup ?
          <>
            <div className='call_contact' onClick={() => handleOpenPopup()}>
              <div className='contact_icon'>
                <ChatTeardropDots size={30} color={'#333'} />
              </div>
              <div className='contact_title'>Hỗ trợ</div>
            </div>
          </>
          :
          <>
            <div className='popup_contact'>
              <ChatPopup
                setOpenPopup={setOpenPopup}
                setSelectedFile={setSelectedFile}
                setOpenZoom={setOpenZoom}
                setIndexImg={setIndexImg}
              />
            </div>
          </>
      }
      {
        openZoom ?
          selectedFile.map((item, index) => {
            const foundItem = selectedFile.find((item, index) => index === indexImg);
            return (
              < div className='popup_image' key={index}>
                <div className='popup_image_content'>
                  <img src={foundItem ? foundItem.data : ''} alt="imgFull" className="imgFull" />
                  <p className='tiltle_img'>{foundItem.name}</p>
                  <p className='size_img'>
                    <span>{foundItem.type}</span>
                    <span></span>
                    <span>{foundItem.size} KB</span>
                  </p>
                  <a className='btn_dowload' href={foundItem.data} download={foundItem.name} >
                    <span>Tải về</span>
                  </a>
                  <X size={44} className="x" onClick={() => setOpenZoom(false)} />
                </div>
              </div>
            )
          })
          : <></>
      }

    </div >
  );
}

export default App;
