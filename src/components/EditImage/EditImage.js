import React from 'react';
import DialogUI from './DialogUI';
import EditI from './EditCode';

class EditImage extends React.Component
{
    render()
    {
        return (
            <div>
            <DialogUI editStatusHandler={this.props.editStatusHandler} editLayout={<EditI />}/>
            </div>
        );
    }
};

export default EditImage;