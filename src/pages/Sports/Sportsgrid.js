import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Sportsgrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
           
          <Paper className={classes.paper}>
          <img src="https://static.toiimg.com/thumb/msid-83874342,width-1200,height-900,resizemode-4/.jpg" alt="revanthreddy" style={{width:'300px', height:'150px'}}/>
              టీపీసీసీ చీఫ్‌ రేవంత్‌ రెడ్డి మాజీ మంత్రి దేవేందర్‌ గౌడ్‌ను 
          ఆదివారం మర్యాదపూర్వకంగా కలిశారు.</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src="https://static.toiimg.com/thumb/msid-83874342,width-1200,height-900,resizemode-4/.jpg" alt="revanthreddy" style={{width:'300px', height:'150px'}}/>
             
              టీపీసీసీ చీఫ్‌ రేవంత్‌ రెడ్డి మాజీ మంత్రి దేవేందర్‌
           గౌడ్‌ను ఆదివారం మర్యాదపూర్వకంగా కలిశారు. </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src="https://static.toiimg.com/thumb/msid-83874342,width-1200,height-900,resizemode-4/.jpg" alt="revanthreddy" style={{width:'300px', height:'150px'}}/>
             
              టీపీసీసీ చీఫ్‌ రేవంత్‌ రెడ్డి మాజీ మంత్రి దేవేందర్‌
           గౌడ్‌ను ఆదివారం మర్యాదపూర్వకంగా కలిశారు.</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
