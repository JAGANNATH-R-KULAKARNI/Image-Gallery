import React,{useState,useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ButtonGUI from './buttonGroup';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'table',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
    width: "100%",
    tableLayout: "fixed",
    borderSpacing: "10px"
  },
  Row : {
    display: "table",
    width: "100%",/*Optional*/
    tableLayout: "fixed",/*Optional*/
    borderSpacing: "10px" /*Optional*/
},
Column : {
    display: "table-cell", /*Optional*/
}
}));


export default function SimplePaper(props) {
  const classes = useStyles();
 const [crop,setCrop]=React.useState({
    disabled: false,
    locked: false,
    unit: 'px',
    x: 0,
    y: 0,
    width: 200,
    height: 200
 });

 const handleCrop = (crop)=>{
     setCrop({crop});
 }
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Column}>
          <h2><b>Crop the Image</b></h2>
            {props.REACTCROP}
          </Paper>
          <Paper  className={classes.Column} elevation={0}>
              <br />
              <br/>
              <br />
              <ButtonGUI/>
              </Paper>
          <Paper elevation={3}  className={classes.Column}>
         <h2><b>Cropped Image</b></h2> 
          {props.croppedImage}
          </Paper>
    </div>
  );
}
