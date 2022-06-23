import React from 'react';

import { ReactComponent as Image } from '../assets/icons/Upload_File_Types/image.svg';
import { ReactComponent as Text } from '../assets/icons/Upload_File_Types/text.svg';
import { ReactComponent as File } from '../assets/icons/Upload_File_Types/file.svg';

export default function getFileIcon(fileType: string) {
  let Icon;
  switch (fileType.split('/')[0]) {
    case 'image':
      Icon = <Image />;
      break;
    case 'application':
      Icon = <File />;
      break;
    case 'text':
      Icon = <Text />;
      break;
    default:
      Icon = <File />;
  }
  return Icon;
}
