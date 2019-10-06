import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import './styles.scss';
import Button from '../../Components/Button/Button';

const AddLinkModal = ({ onClose, addLink, savingError }) => {
  const [img, setImg] = useState(null);
  const [linkInfo, setLinkInfo] = useState({
    name: '',
    url: '',
  });

  return (
    <div className="AddLinkModal_pageCover">
      <div className="AddLinkModal">

        <Input
          textColor="rgb(100,100,100)"
          onChange={e => setLinkInfo({ ...linkInfo, name: e.target.value })}
          value={linkInfo.name}
          placeholder="Name"
        />
        <Input
          textColor="rgb(100,100,100)"
          onChange={e => setLinkInfo({ ...linkInfo, url: e.target.value })}
          value={linkInfo.url}
          placeholder="URL"
          onEnter={(e) => {
            if (e.keyCode === 13) {
              addLink(addLink({ url: linkInfo.url, name: linkInfo.name }, img));
            }
          }
          }
        />
        <div className="AddLinkModal_upload">
          <input
            type="file"
            id="yeet"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e && e.target && e.target.files && e.target.files[0]) {
                setImg(e.target.files[0]);
              }
            }
          }
          />
        </div>
        <Button
          disabled={!linkInfo.url || !linkInfo.name}
          onClick={() => addLink({ url: linkInfo.url, name: linkInfo.name }, img)}
          text="Submit"
        />
        <Button onClick={() => onClose()} text="Cancel" />
        {savingError && <p className="AddLinkModal_error">{savingError}</p>}
      </div>
    </div>
  );
};

export default AddLinkModal;
