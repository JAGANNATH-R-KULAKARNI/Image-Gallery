import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    width: "100%",
    tableLayout: "fixed",
    borderSpacing: "10px" 
},
Column : {
    display: "table-cell",
}
}));


export default function SimplePaper(props) {
  const classes = useStyles();


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
              </Paper>
          <Paper elevation={3}  className={classes.Column}>
         <h2><b>Cropped Image</b></h2> 
          {props.croppedImage}
          </Paper>
    </div>
  );
}
