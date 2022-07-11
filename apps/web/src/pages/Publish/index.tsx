import React, { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames';

import Button from '../../components/Button';
import DragAndDrop from '../../components/DragAndDrop';
import FilesUploading from './FilesUploading';
import ThumbUpload from './ThumbUpload';
import UploadingPopup from '../../components/UploadingPopup';

import { UploadFile } from '../../types';
import { ReactComponent as ThumbnailDrop } from '../../assets/icons/ThumbnailDrop.svg';
import styles from './Publish.module.scss';

//Current USD vs Cycoin rate will go here.
const USDRate = 2.23;

const UPLOAD_FILE_TYPES = "'image/*', 'application/zip', 'text/html',";
const THUMBNAIL_FILE_TYPES = 'image/*';

interface IState {
  private: boolean;
  file: UploadFile[];
  thumbnail: UploadFile[];
  title: string;
  description: string;
  type: string;
  price: number | undefined;
}

interface IAction {
  input: string;
  value: string | any[];
}

const initialState: IState = {
  private: false,
  file: [{ filePath: '', type: '', size: 0, path: '', src: '', id: '', name: '' }],
  thumbnail: [{ filePath: '', type: '', size: 0, path: '', src: '', id: '', name: '' }],
  title: '',
  description: '',
  type: 'Pay',
  price: undefined,
};

function reducer(state: IState, action: IAction) {
  return { ...state, [action.input]: action.value };
}

//Gets the value -- depends on the target
function getValue(eTarget: any) {
  if (eTarget.name === 'private') {
    return eTarget.checked;
  } else {
    return eTarget.value;
  }
}

function Publish() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);

  // Files to upload
  const [files, setFiles] = useState<UploadFile[]>([]);
  const [thumbnail, setThumbnail] = useState<UploadFile[]>([]);
  const [isPopupShowing, setIsPopupShowing] = useState(false);

  //Handle Input change
  async function handleChange(event: any) {
    const changeValue = await getValue(event.target);

    const action = {
      input: event.target.name,
      value: changeValue,
    };
    dispatch(action);
  }

  // Listening for File or Thumbnail changes
  useEffect(() => {
    const action = {
      input: 'thumbnail',
      value: [...thumbnail],
    };
    dispatch(action);
  }, [thumbnail]);

  useEffect(() => {
    const action = {
      input: 'file',
      value: [...files],
    };
    dispatch(action);
  }, [files]);

  //Disabling Upload button for file uploads
  useEffect(() => {
    setIsBtnDisabled(true);
    if (state.title.length > 0 && state.file.length > 0) setIsBtnDisabled(false);
    if (state.type === 'Pay' && (state.price === undefined || state.price < 1)) setIsBtnDisabled(true);
  }, [state]);

  // Handling Upload click
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPopupShowing(true);
  }

  return (
    <div className={styles.PageContainer}>
      <div className={styles.TitleBarContainer}>
        <h1 className={styles.Heading}>Upload New Content</h1>
        <div className={styles.SubHeading}>
          Your published file will appear in the public marketplace. <b>They are for sale.</b>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <div className={styles.LowerContainer}>
          <div className={classNames(styles.LeftColumn, styles.Column)}>
            <div>
              <div className={styles.AddFileHeading}>
                <h4 className={styles.InputHeading}>1. Add File*</h4>
                {/* <div className={styles.PrivateSettings}>
                  <input className={styles.PrivateCheck} name="private" type="checkbox" id="Private" onChange={handleChange} />
                  <label htmlFor="Private">Make Private</label>
                </div> */}
              </div>
              <div className={styles.UploadZone}>
                {files.length === 0 ? (
                  <DragAndDrop accept={UPLOAD_FILE_TYPES} data={files} setData={setFiles}>
                    <div className={styles.FileDropText}>
                      Drag and Drop <br /> or
                    </div>
                    <Button type="button" className={styles.FileDropBtn}>
                      Browse
                    </Button>
                  </DragAndDrop>
                ) : (
                  <FilesUploading data={files} setData={setFiles} />
                )}
              </div>
            </div>
            <div className={styles.ThumbnailImgContainer}>
              <h4 className={styles.InputHeading}>
                2. Add Thumbnail Image <div className={styles.NoneBold}> &#40;Cover Image&#41;</div>
              </h4>

              <div className={styles.UploadZone}>
                {thumbnail.length === 0 ? (
                  <DragAndDrop accept={THUMBNAIL_FILE_TYPES} imgOnly={true} data={thumbnail} setData={setThumbnail} maxSize={5242880} maxFiles={1}>
                    <ThumbnailDrop />
                    <div className={styles.ThumbDropText}>Upload image under 5mb</div>
                  </DragAndDrop>
                ) : (
                  <ThumbUpload data={thumbnail} setData={setThumbnail} />
                )}
              </div>
            </div>
          </div>
          <div className={classNames(styles.RightColumn, styles.Column)}>
            <div className={styles.InputContainer}>
              <div className={styles.TitleContainer}>
                <h4 className={styles.InputHeading}>3. Content Title*</h4>
                <div className={styles.MaxChar}>Max 50 Characters</div>
              </div>
              <input name="title" className={styles.TitleInput} maxLength={50} onChange={handleChange} />
            </div>
            <div className={styles.InputContainer}>
              <h4 className={styles.InputHeading}>4. Content Description</h4>
              <textarea className={styles.DescriptionInput} name="description" onChange={handleChange} rows={5} />
            </div>
            <div className={styles.InputContainer}>
              <h4 className={styles.InputHeading}>5. Select Type*</h4>
              <select className={styles.PaymentTypeInput} name="type" onChange={handleChange}>
                <option className={styles.PaymentOption} value="Pay">
                  Paid
                </option>
                <option value="Free">Free</option>
              </select>
            </div>
            {state.type === 'Pay' && (
              <div>
                <span className={styles.PriceInputContainer}>
                  <input name="price" className={styles.PriceInput} id="price" type="number" min="0" placeholder="Enter price (CYCON)" onChange={handleChange} value={state.price} />
                </span>
                {/* BELOW INPUT */}
                <div className={styles.PriceConversion}>
                  {state.price ? state.price : 1} CYCON Coin = ${state.price ? (state.price * USDRate).toFixed(2) : USDRate} USD
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.BtnContainer}>
          <Button isDisabled={isBtnDisabled} type="submit" className={classNames({ [styles.Button]: !isBtnDisabled }, { [styles.disabled]: isBtnDisabled })}>
            Upload
          </Button>
        </div>
        {isPopupShowing && <UploadingPopup page="publish" items={state.file} />}
      </form>
    </div>
  );
}

export default Publish;
