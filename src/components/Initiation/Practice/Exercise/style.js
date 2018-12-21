/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, colors, weights } from 'src/themes';
import { breakpoints, maxWidth, minWidth } from 'src/themes/medias';

/*
 * Style
 */
export const Wrapper = styled.div({
  width: '100%',
  maxWidth: '1200px',
  margin: '1em auto',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.1em',
  padding: '0 1em',
  [minWidth(breakpoints.small)]: {
    padding: '0 1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },
  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

// Texte
export const Parcours = styled.h1({
  ...base.primaryTitle,
  textAlign: 'center',
});

export const Content = styled.div({
  '& h2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '2em',
    width: '100%',
    fontFamily: 'EncodeSansCondensed',
    letterSpacing: '.06em',
    margin: '1em auto 0.5em',

    // Pseudo-elements
    '&::before': {
      content: '""',
      display: 'block',
      width: '5%',
      height: '3px',
      marginRight: '1em',
      backgroundColor: colors.black,
    },
    '&::after': {
      content: '""',
      display: 'block',
      width: '5%',
      height: '3px',
      marginLeft: '1em',
      backgroundColor: colors.black,
    },
  },
  '& h3': {
    fontFamily: 'EncodeSansCondensed',
    fontSize: '1.5em',
    letterSpacing: '.06em',
    color: colors.mainColor,
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '1em auto 1em',

    // Breakpoints
    [maxWidth(breakpoints.medium)]: {
      fontSize: '0.8em',
    },
  },
  '& p': {
    textAlign: 'center',

    marginBottom: '3em',
    color: colors.greySubtitle,
    '& em': {
      fontWeight: weights.bold,
    },

    // Breakpoints
    [maxWidth(breakpoints.medium)]: {
      fontSize: '0.8em',
      marginBottom: '2em',
    },
  },
});

export const Border = styled.div({
  borderBottom: `3px solid ${colors.mainColor}`,
  margin: '2em auto',
  width: '4%',
});

// Éditeur de code
export const CodeEditor = styled.div({
  display: 'flex',
  width: '100%',
  margin: '2em auto',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontFamily: 'FiraCode',

  // Breakpoints
  [minWidth(breakpoints.large)]: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

export const Buttons = styled.div({
  textAlign: 'center',
  display: 'flex',
});

export const Button = styled.button({
  margin: '1em 0',
  width: 'fit-content',
  padding: '0.2em 0.4em',
  backgroundColor: colors.mainColor,
  color: 'white',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '0.8em',
  fontFamily: 'EncodeSansCondensed',
  letterSpacing: '.06em',
});

export const PathTo = styled(Link)({
  ...base.primaryButton,
  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    fontSize: '0.9em',
  },
});
