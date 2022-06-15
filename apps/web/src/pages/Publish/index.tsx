import React, { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames';
import styles from './Publish.module.scss';
import Button from 'src/components/Button';
import { UploadFile } from 'src/types';
import { ReactComponent as ThumbnailDrop } from '../../assets/icons/ThumbnailDrop.svg';
import DragAndDrop from 'src/components/DragAndDrop';
import FilesUploading from './FilesUploading';
import ThumbUpload from './ThumbUpload';

//Cycoin market rate will go here.
const cycoinRate = 487;

interface IState {
  private: boolean;
  file: UploadFile[];
  thumbnail: UploadFile[];
  title: string;
  description: string;
  type: string;
  price: number;
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
  price: 0,
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
    if (state.type === 'Pay' && state.price < 1) setIsBtnDisabled(true);
  }, [state]);

  // Handling Upload click
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(state);
  }

  return (
    <div className={styles.PageContainer}>
      {/* ============================================================================ */}
      {/* TITLE BAR BEGINS!!!!!!! */}
      <div className={styles.TitleBarContainer}>
        <h1 className={styles.Heading}>Publish</h1>
        <div className={styles.SubHeading}>
          Your published file will appear in the the public marketplace. <b>They are for sale.</b>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.LowerContainer}>
          {/* ============================================================================ */}
          {/* LEFT SIDE BEGINS!!!!!!! */}
          <div className={classNames(styles.LeftColumn, styles.Column)}>
            <div>
              <div className={styles.AddFileHeading}>
                <h4 className={styles.InputHeading}>1. Add File*</h4>
                <div className={styles.PrivateSettings}>
                  <input className={styles.PrivateCheck} name="private" type="checkbox" id="Private" onChange={handleChange} />
                  <label htmlFor="Private">Make Private</label>
                </div>
              </div>
              <div className={styles.UploadZone}>
                {files.length === 0 ? (
                  <DragAndDrop data={files} setData={setFiles}>
                    <div className={styles.FileDropText}>
                      Drag and Drop <br /> or
                    </div>
                    <Button className={styles.FileDropBtn}>Browse</Button>
                  </DragAndDrop>
                ) : (
                  <FilesUploading data={files} setData={setFiles} />
                )}
              </div>
            </div>
            <div>
              <h4 className={styles.InputHeading}>2. Add Thumbnail Image &#40;Cover Image&#41;</h4>
              <div className={styles.UploadZone}>
                {thumbnail.length === 0 ? (
                  <DragAndDrop data={thumbnail} setData={setThumbnail} maxSize={5242880} maxFiles={1}>
                    <ThumbnailDrop />
                    <div className={styles.ThumbDropText}>Upload image under 5mb</div>
                  </DragAndDrop>
                ) : (
                  <ThumbUpload data={thumbnail} setData={setThumbnail} />
                )}
              </div>
            </div>
          </div>
          {/* ============================================================================ */}
          {/* RIGHT SIDE BEGINS!!!!!!! */}
          <div className={classNames(styles.RightColumn, styles.Column)}>
            <div>
              <div className={styles.TitleContainer}>
                <h4 className={styles.InputHeading}>3. Content Title*</h4>
                <div className={styles.MaxChar}>Max 50 Characters</div>
              </div>
              <input name="title" className={styles.TitleInput} maxLength={50} onChange={handleChange} />
            </div>
            <div>
              <h4 className={styles.InputHeading}>4. Content Description</h4>
              <textarea className={styles.DescriptionInput} name="description" onChange={handleChange} rows={5} />
            </div>
            <div>
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
                  $<input name="price" className={styles.PriceInput} id="price" type="number" min="0" placeholder="Enter Price (USD)" onChange={handleChange} value={state.price} />
                </span>
                <div className={styles.PriceConversion}>
                  ${state.price ? state.price : 1} USD = {state.price ? state.price * cycoinRate : cycoinRate} Cycon Coin
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
      </form>
    </div>
  );
}

export default Publish;
