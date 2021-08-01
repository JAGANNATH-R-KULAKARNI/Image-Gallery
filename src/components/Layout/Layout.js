import React from 'react';
import LayoutUI from './LayoutUI';
import MenuUI from '../ScrollBar/MenuUI';
import EditImage from '../EditImage/EditImage';

class Layout extends React.Component
{
    constructor()
    {
        super();
        this.state={
            pageIndex : 1,
            status : true,
            editPageStatus : false
        };

        this.setPageIndex=this.setPageIndex.bind(this);
        this.editStatusHandler=this.editStatusHandler.bind(this);
    }

    setPageIndex(index)
    {
        this.setState({
            status : !this.state.status,
            pageIndex : index,
        });
    }

    editStatusHandler()
    {
        this.setState({
           editPageStatus : !this.state.editPageStatus
        })
    }

    render()
    {
        return (
            <div> 
                {this.state.editPageStatus ? <EditImage editStatusHandler={this.editStatusHandler}/> : null}
            <LayoutUI menu={<MenuUI setPageIndex={this.setPageIndex}/>} index={this.state.pageIndex}
            editStatusHandler={this.editStatusHandler}/>
            </div>
        );
    }
};

export default Layout;