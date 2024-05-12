import * as stylex from '@stylexjs/stylex'

export const styles = stylex.create({
  container: {
    display: 'grid',
  },

  grower: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    visibility: 'hidden',
  },

  textarea: {
    resize: 'none',
    overflow: 'hidden',
  },

  commun: {
    minHeight: '64px',
    width: '300px',
    maxWidth: '300px',
    fontSize: '14px',
    fontFamily: 'sans-serif',
    border: '2px solid var(--primary-color)',
    padding: '8px 12px',
    borderRadius: '2px',
    gridArea: '1 / 1 / 2 / 2',
  },
})
