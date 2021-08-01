import React from 'react';
import LayoutUI from './LayoutUI';
import MenuUI from '../ScrollBar/MenuUI';

class Layout extends React.Component
{
    render()
    {
        return (
            <div>
              <LayoutUI menu={<MenuUI/>}/>
            </div>
        );
    }
};

export default Layout;