import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FolderIcon from '@material-ui/icons/Folder';

const useStyles = makeStyles({
  root: {
    width: "auto",
  },
});

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [arrayIndex,setArrayIndex]=React.useState([1,2,3,4,5]);
  const NavArrays=[
    <BottomNavigationAction label="1" icon={<FolderIcon />} /> ,
    <BottomNavigationAction label="2" icon={<FolderIcon />} />,
   <BottomNavigationAction label="3" icon={<FolderIcon />} />,
   <BottomNavigationAction label="4" icon={<FolderIcon />} />,
     <BottomNavigationAction label="5" icon={<FolderIcon />} />,
    <BottomNavigationAction label="6" icon={<FolderIcon/>} />,
     <BottomNavigationAction label="7" icon={<FolderIcon />} />,
      <BottomNavigationAction label="8" icon={<FolderIcon />} />,
      <BottomNavigationAction label="9" icon={<FolderIcon/>} />,
     <BottomNavigationAction label="10" icon={<FolderIcon />} />
  ];
  const setLPIValue= ()=>{
     var a,b,c,d,e;

     if(arrayIndex[0]+1 > 10)
     a=1;
     else
     a=arrayIndex[0]+1;

     if(arrayIndex[1]+1 > 10)
     b=1;
     else
     b=arrayIndex[1]+1;

     if(arrayIndex[2]+1 > 10)
     c=1;
     else
     c=arrayIndex[2]+1;

     if(arrayIndex[3]+1 > 10)
     d=1;
     else
     d=arrayIndex[3]+1;

     if(arrayIndex[4]+1 > 10)
     e=1;
     else
     e=arrayIndex[4]+1;

     setArrayIndex([a,b,c,d,e]);
  };

  const setMPIValue=()=>{
    var a,b,c,d,e;

    if(arrayIndex[0]-1 < 1)
    a=10;
    else
    a=arrayIndex[0]-1;

    if(arrayIndex[1]-1 < 1)
    b=10;
    else
    b=arrayIndex[1]-1;

    if(arrayIndex[2]-1 < 1)
    c=10;
    else
    c=arrayIndex[2]-1;

    if(arrayIndex[3]-1 < 1)
    d=10;
    else
    d=arrayIndex[3]-1;

    if(arrayIndex[4]-1 < 1)
    e=10;
    else
    e=arrayIndex[4]-1;

    setArrayIndex([a,b,c,d,e]);
  };

  return (
      <div>
    <BottomNavigation
      value={value}
      onChange={async (event, newValue) => {
        await setValue(newValue);
        console.log("here inside value chage"+newValue);
        props.setPageIndex(arrayIndex[newValue-1]);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="" icon={<ArrowBackIosIcon/>} onClick={setLPIValue}/>
     {NavArrays[arrayIndex[0]-1]}
      {NavArrays[arrayIndex[1]-1]}
      {NavArrays[arrayIndex[2]-1]}
      {NavArrays[arrayIndex[3]-1]}
      {NavArrays[arrayIndex[4]-1]}
     <BottomNavigationAction label="" icon={<ArrowForwardIosIcon />} onClick={setMPIValue} />
    </BottomNavigation>
    </div>
  );
}
