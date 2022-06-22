import Grid from '@mui/material/Grid';

// import Paper from '@mui/material/Paper';
// import { InputBase, Typography } from '@mui/material';
// import clsx from 'clsx';
// import Button from '@mui/material/Button';
// import { msToSeconds } from '@utils/function';
// import PropTypes from 'prop-types';

const sx = {
  root: {
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#0A1953',
  },
  fab: { top: '0', left: '0', margin: '2%' },
  grow: {
    flexGrow: 1,
  },
  mainRoot: {
    overflowY: 'auto',
  },
  mainArea: {
    height: '100%',
    padding: '20px',
  },
  charArea: {
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
  mainText: {
    textTransform: 'uppercase',
    color: 'green',
    fontSize: '4rem',
    lineHeight: '4rem',
  },
};

export default function Game() {
  return (
    <Grid container direction="column" sx={sx.root} wrap="nowrap">
      dggeg
    </Grid>
  );
}

// Game.defaultProps = {
//   mainText: '',
//   debugText: '',
//   time: 0,
//   highScore: 0,
//   onKeyPress: () => {},
//   onGameReset: () => {},
// };

// Game.propTypes = {
//   mainText: PropTypes.string,
//   time: PropTypes.number,
//   debugText: '',
//   highScore: PropTypes.number,
//   onKeyPress: PropTypes.func,
//   onGameReset: PropTypes.func,
// };
