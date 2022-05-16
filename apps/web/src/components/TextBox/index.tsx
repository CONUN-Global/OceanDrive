import React from 'react';

import styles from './TextBox.module.scss';

interface ITextBox {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}
function TextBox({ inputText, setInputText }: ITextBox) {
  return <textarea className={styles.TextBox} rows={4} value={inputText} onChange={e => setInputText(e.target.value)}></textarea>;
}

export default TextBox;
