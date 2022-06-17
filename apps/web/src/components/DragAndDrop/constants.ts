export const ERRORS = {
  SIZE_ERR: {
    CODE: 'file-too-large',
    MSG: 'File too large. Please select a smaller file.',
  },
  COUNT_ERR: {
    CODE: 'too-many-files',
    MSG: 'You have selected too many files. Please use only a single photo for the thumbnail.',
  },
  INVALID_ERR: {
    CODE: 'file-invalid-type',
    MSG: 'This is an invalid file type. Please select a JPEG or PNG.',
  },
  DEFAULT_ERR: {
    MSG: 'Something went wrong, please try again.',
  },
};

// MIME Type + [file extensions to accept]
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

export const UPLOAD_FILE_TYPES = {
  'image/*': ['.jpeg', '.png'],
  'application/zip': ['.zip'],
  'text/html': ['.html', '.htm'],
};
export const THUMBNAIL_FILE_TYPES = {
  'image/*': ['.jpeg', '.png'],
};
