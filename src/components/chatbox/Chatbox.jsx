import { CaretCircleDown, LinkSimple, PaperPlaneRight, Smiley, X } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Picker from "emoji-picker-react";
import fboxchat from '../../assets/logo/fboxchat.png'
import './chatbox.scss'

const ChatPopup = (props) => {
  const { setOpenPopup, setOpenZoom, setSelectedFile, setIndexImg } = props;
  const [inputStr, setInputStr] = useState('');
  const [inputMes, setInputMes] = useState([]);
  // console.log("type mes:", inputMes);
  const [showPicker, setShowPicker] = useState(false);
  const [sendMes, setSendMes] = useState(false);
  // click lấy emoji
  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + event.emoji);
  };
  // ẩn popup X
  const handleCancelPopup = () => {
    setOpenPopup(true)
  }
  // lấy file và gửi file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const hasSelectedFile = file !== null && file !== undefined;
    let imageUrl;
    if (hasSelectedFile) {
      imageUrl = URL.createObjectURL(file);
    }
    // setSelectedFile(file);
    setInputMes(prevInputMes => [...prevInputMes, {
      id: null,
      role: 'user',
      avt: 'user',
      mes: {
        data: imageUrl,
        type: file.type,
      },
    }])
    const fileNameWithoutExtension = file.name.substring(0, file.name.lastIndexOf('.'));
    const fileExtension = file.name.split('.').pop();
    setSelectedFile(prev => [...prev, {
      name: fileNameWithoutExtension,
      data: imageUrl,
      type: fileExtension,
      size: (file.size / 1024).toFixed(2),
    }]);
    setSendMes(true);
  };
  // click gửi mes
  const handleSendMes = () => {
    setSendMes(true);
    setInputMes(prevInputMes => [...prevInputMes, {
      id: null,
      role: 'user',
      avt: 'user',
      mes: {
        data: inputStr,
        type: 'text',
      },
    }]
    );
    setInputStr('');
    setShowPicker(false);

  }
  // console.log("type mes:", )
  const handleZoomImg = (index) => {
    setIndexImg(index);
    setOpenZoom(true);
  }

  return (
    <div className="chat-popup">
      <div className="messages">
        <div className="messages_header">
          <div className="header_logo">
            <img src={fboxchat} alt="fboxchat" className='fboxchat' />
            <div className="background"></div>
          </div>
          <div className="header_content">
            <h2>Fnet</h2>
            <span>Chúng tôi sẽ trả lời sớm nhất có thể</span>
          </div>
          <div className="header_cancel" onClick={() => handleCancelPopup()}>
            <X size={32} />
          </div>
        </div>
        <div className="messages_body">
          <ul>
            {sendMes ?
              inputMes.map((item, index) => {
                if (item.mes.type === 'text') {
                  return (
                    <li className={item.role} key={index}>
                      <div className={`mes_${item.role}`}>
                        <p>{item.mes.data}</p>
                      </div>
                      <img src={fboxchat} alt="image_user" className={`${item.role}_img`}
                      />
                    </li>
                  )
                }
                if (item.mes.type === 'image/png'
                  || item.mes.type === 'image/svg+xml'
                  || item.mes.type === 'image/gif'
                  || item.mes.type === 'image/jpeg') {
                  return (
                    <li className={item.role} key={index} onClick={() => handleZoomImg(index)}>
                      <div className={`mes_${item.role}`}>
                        <img src={item.mes.data} alt={item.role} />
                      </div>
                      <img src={fboxchat} alt="image_user" className={`${item.role}_img`}
                      />
                    </li>
                  )
                }
                if (item.mes.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                  || item.mes.type === 'application/vnd.ms-excel'
                  || item.mes.type === 'application/pdf'
                ) {
                  return (
                    <li className={item.role} key={index}>
                      <div className={`mes_${item.role}`}>
                        <a href={item.mes.data} target="_blank" rel="noreferrer">{item.mes.data}</a>
                      </div>
                      <img src={fboxchat} alt="image_user" className={`${item.role}_img`}
                      />
                    </li>
                  )
                }
                return (<></>)
              })
              : <></>
            }
          </ul>
        </div>

        <div className="messages_footer">
          <input
            type="text"
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
            placeholder='Type your message...'
            className="footer_input"
          />
          <div className="footer_icon" onClick={() => setShowPicker((val) => !val)}>
            {
              showPicker ?
                <CaretCircleDown size={25} color={"#757575"} /> :
                <Smiley size={25} color={"#757575"} />
            }
          </div>
          <div className="footer_link">
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .svg, .xls"
              onChange={handleFileChange}
            />

            {
              inputStr.trim() !== '' ?
                <PaperPlaneRight
                  size={25}
                  color={"#757575"}
                  onClick={() => handleSendMes()}
                /> :
                <LinkSimple
                  size={25}
                  color={"#757575"}
                  onClick={() => document.getElementById('fileInput').click()}
                />
            }

          </div>
          {showPicker && (
            <Picker
              key="emoji-picker"
              skinTonesDisabled="true"
              previewConfig={{ showPreview: false }}
              searchDisabled="true"
              pickerStyle={{ width: "100%" }}
              onEmojiClick={onEmojiClick}
              className="emoj" />
          )}
        </div>
      </div>
    </div >
  );
};

export default ChatPopup;
