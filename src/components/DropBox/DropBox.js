import React from 'react';
import DropBoxUI from './DropBoxUI';
import DropBoxConatainer from './DropBoxContainer';

class DropBox extends React.Component
{
    render()
    {
        return (
            <div>
            <DropBoxConatainer dropbox={<DropBoxUI />}/>
            </div>
        );
    }
};

export default DropBox;