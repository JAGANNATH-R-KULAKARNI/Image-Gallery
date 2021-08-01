import React, {createRef} from 'react';
import Dropzone from 'react-dropzone';

const dropzoneRef = createRef();
const openDialog = () => {
  // Note that the ref is set async,
  // so it might be null at some point 
  if (dropzoneRef.current) {
    dropzoneRef.current.open()
  }
};

// Disable click and keydown behavior on the <Dropzone>

export default function DROPZONE (){

    return (
 <Dropzone ref={dropzoneRef} noClick noKeyboard>
  {({getRootProps, getInputProps, acceptedFiles}) => {
    return (
      <div>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here</p>
          <button
            type="button"
            onClick={openDialog}
          >
            Open File Dialog
          </button>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>
            {acceptedFiles.map(file => (
              <li key={file.path}>
                {file.path} - {file.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }}
</Dropzone>
    );
};
