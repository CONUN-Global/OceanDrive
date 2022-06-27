import React, { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames';
import styles from './Publish.module.scss';
import Button from '../../components/Button';

//Cycoin market rate will go here.
const cycoinRate = 487;

const initialState = {
  private: false,
  file: '',
  thumbnail: '',
  title: '',
  description: '',
  type: 'Pay',
  price: '',
};

function reducer(state: any, action: any) {
  return { ...state, [action.input]: action.value };
}

//Gets the value of the input that was changed
//depends on the type of input method (checkbox vs file vs text input)
function getValue(eTarget: any) {
  if (eTarget.name === 'file' || eTarget.name === 'thumbnail') {
    return eTarget.files[0];
  }
  if (eTarget.name === 'private') {
    return eTarget.checked;
  } else {
    return eTarget.value;
  }
}

function Publish() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
  const [isPriceDisabled, setIsPriceDisabled] = useState<boolean>(false);

  async function handleChange({ target }: any) {
    const changeValue = await getValue(target);

    const action = {
      input: target.name,
      value: changeValue,
    };
    dispatch(action);
  }

  useEffect(() => {
    setIsBtnDisabled(true);
    if (state.title.length > 0 && state.file.size > 0) setIsBtnDisabled(false);
    if (state.type === 'Pay' && state.price < 1) {
      setIsBtnDisabled(true);
    }
    // if (state.type === 'Free') setIsPriceDisabled(true);
    // if (state.type === 'Pay') setIsPriceDisabled(true);
  }, [state]);

  function handleSubmit(e: any) {
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
              <label className={styles.UploadZone}>
                <input name="file" type="file" onChange={handleChange} />
              </label>
            </div>
            <div>
              <h4 className={styles.InputHeading}>2. Add Thumbnail Image &#40;Cover Image&#41;</h4>
              <div className={styles.UploadZone}>
                <input name="thumbnail" type="file" onChange={handleChange} />
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
              <textarea className={styles.DescriptionInput} name="description" onChange={handleChange} />
            </div>
            <div>
              <h4 className={styles.InputHeading}>5. Select Type*</h4>
              <select className={styles.PaymentTypeInput} name="type" onChange={handleChange}>
                <option className={styles.PaymentOption} value="Pay">
                  Pay
                </option>
                <option value="Free">Free</option>
              </select>
            </div>
            {state.type === 'Pay' && (
              <div>
                <input name="price" disabled={false} className={styles.PriceInput} id="price" type="number" min="0" placeholder="Enter Price" onChange={handleChange} value={state.price} />
                <div className={styles.PriceConversion}> = {state.price * cycoinRate} Cycon Coin</div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.BtnContainer}>
          <Button isDisabled={isBtnDisabled} type="submit" className={classNames({ [styles.Button]: !isBtnDisabled }, { [styles.disabled]: isBtnDisabled })}>
            Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Publish;
