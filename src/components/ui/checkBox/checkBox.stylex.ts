import * as stylex from '@stylexjs/stylex'

export const styles = stylex.create({
  root: {
    border: 'none',
    outline: 'none',
    borderRadius: '2px',
    width: '20px',
    aspectRatio: '1/1',
    background: 'var(--bg-input-secondary)',
    appearance: 'none',
    cursor: 'pointer',
    position: 'relative',

    ':focus-visible': {
      border: '1px solid transparent',
      outline: '2px solid var(--primary-color)',
    },

    ':checked': {
      background: 'var(--primary-color)',
    },

    ':checked::after': {
      content: '""',
      position: 'absolute',
      top: '0px',
      left: '20%',
      display: 'block',
      boxSizing: 'border-box',
      width: '30%',
      height: '50%',
      border: '0px solid var(--white-color)',
      borderRightWidth: '2px',
      borderBottomWidth: '2px',
      transformOrigin: 'bottom left',
      transform: 'rotate(45deg)',
    },
  },
})
