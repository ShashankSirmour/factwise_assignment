import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import withStyles from '@mui/styles/withStyles';

export const ProfilesAccordion = withStyles({
  root: {
    boxShadow: 'none',
    width: '100%',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: 5,
    '&:not(:last-child)': {
      marginBottom: 15,
    },
    '&:before': {
      backgroundColor: 'transparent',
    },
    // '&$expanded': {
    //   margin: 'auto',
    // },
  },
  expanded: {},
})(MuiAccordion);

export const ProfilesAccordionSummary = withStyles({
  root: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 50,
    '&:expanded': {
      minHeight: 50,
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .Mui-focusVisible': {
      backgroundColor: '#ff',
    },
  },
  content: {
    backgroundColor: '#fff',
    '&:expanded': {
      margin: '12px 0',
    },
  },
  focusVisible: {
    backgroundColor: 'transparent',
  },
  expanded: {},
})(MuiAccordionSummary);

export const ProfilesAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
