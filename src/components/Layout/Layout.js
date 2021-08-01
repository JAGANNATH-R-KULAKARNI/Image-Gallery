import React from 'react';
import LayoutUI from './LayoutUI';
import DropBox from '../DropBox/DropBox';

class Layout extends React.Component
{
    render()
    {
        return (
            <div>
              <LayoutUI dropbox={<DropBox />} />
            </div>
        );
    }
};

export default Layout;