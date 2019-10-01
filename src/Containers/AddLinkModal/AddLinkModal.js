import React, { useState } from 'react';
import Input from '../../Components/Input/Input';
import './styles.scss';
import Button from '../../Components/Button/Button';

const AddLinkModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
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
        />
        <div className="AddLinkModal_upload">
          <input
            type="file"
            id="yeet"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              if (e && e.target && e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }
          }
          />
        </div>
        <Button onClick={() => {}} text="Submit" />
        <Button onClick={() => onClose()} text="Cancel" />
      </div>
    </div>
  );
};

export default AddLinkModal;
