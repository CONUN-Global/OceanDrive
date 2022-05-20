import React from 'react';

import styles from './TextBox.module.scss';

interface ITextBox {
  inputText: string;
}
function TextBox({ inputText }: ITextBox) {
  return <div className={styles.TextBox}>{inputText}</div>;
}

export default TextBox;
