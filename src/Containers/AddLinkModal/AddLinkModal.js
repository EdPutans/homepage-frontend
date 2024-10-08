import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import './styles.css';

const AddLinkModal = ({ onClose, addLink, savingError }) => {
  const [image, setimage] = useState(null);
  const [linkInfo, setLinkInfo] = useState({
    name: '',
    url: '',
  });

  return (
    <div className="AddLinkModal_pageCover">
      <div className="AddLinkModal">
        <p className="AddLinkModal_title">Add bookmark</p>
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
              addLink({ url: linkInfo.url, name: linkInfo.name, image });
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
                setimage(e.target.files[0]);
              }
            }
            }
          />
        </div>
        <Button
          disabled={!linkInfo.url || !linkInfo.name}
          onClick={() => addLink({ url: linkInfo.url, name: linkInfo.name, image })}
          text="Submit"
        />
        <Button onClick={() => onClose()} text="Cancel" />
        {savingError && <p className="AddLinkModal_error">{savingError}</p>}
      </div>
    </div>
  );
};

AddLinkModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  addLink: PropTypes.func.isRequired,
  savingError: PropTypes.string.isRequired,
};

export default AddLinkModal;
