import React, { useReducer } from 'react';
import classNames from 'classnames';
import styles from './Publish.module.scss';
import Button from 'src/components/Button';

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

function Publish() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getValue(arg: any) {
    if (arg.name === 'file' || arg.name === 'thumbnail') {
      return arg.files[0];
    }
    if (arg.name === 'private') {
      return arg.checked;
    } else {
      return arg.value;
    }
  }

  async function handleChange({ target }: any) {
    const changeValue = await getValue(target);

    const action = {
      input: target.name,
      value: changeValue,
    };
    dispatch(action);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log(state);
  }

  return (
    <div className={styles.PageContainer}>
      <div className={styles.TitleBarContainer}>
        <h1>Publish</h1>
        <div>
          Your published file will appear in the the public marketplace. <b>They are for sale.</b>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.LowerContainer}>
          <div className={classNames(styles.LeftColumn, styles.Column)}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <h4>1. Add File</h4>
                <div>
                  <label htmlFor="Private">Make Private</label>
                  <input name="private" type="checkbox" id="Private" onChange={handleChange} />
                </div>
              </div>
              <input name="file" type="file" style={{ height: '200px', width: '80%', backgroundColor: 'var(--grey2)' }} onChange={handleChange} />
            </div>
            <div>
              <h4>2. Add Thumbnail Image - Cover Image</h4>
              <input name="thumbnail" type="file" style={{ height: '200px', width: '80%', backgroundColor: 'var(--grey2)' }} onChange={handleChange} />
            </div>
          </div>
          <div className={classNames(styles.RightColumn, styles.Column)}>
            <div>
              <h4>3. Content Title</h4>
              <input name="title" style={{ height: '30px', width: '200px' }} onChange={handleChange} />
            </div>
            <div>
              <h4>4. Content Description</h4>
              <input name="description" type="textarea" style={{ height: '60px', width: '200px' }} onChange={handleChange} />
            </div>
            <div>
              <h4>5. Select Type</h4>
              <select name="type" style={{ height: '30px', width: '200px', marginBottom: '10px' }} onChange={handleChange}>
                <option value="Pay">Pay</option>
                <option value="Free">Free</option>
              </select>
            </div>
            <div>
              <input name="price" type="number" placeholder="Enter Price" style={{ height: '30px', width: '200px' }} onChange={handleChange}></input>
            </div>
          </div>
        </div>
        <Button type="submit"> Upload </Button>
      </form>
    </div>
  );
}

export default Publish;
