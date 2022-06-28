const PageInitial = {
  opacity: 1,
};
const PageIn = {
  opacity: 1,
  transition: {
    type: 'tween',
    duration: 0.05,
  },
};
const PageExit = {
  opacity: 0,
  transition: {
    type: 'tween',
    duration: 0.05,
  },
};

export const PageProps = {
  initial: 'hidden',
  animate: 'animate',
  exit: 'exit',
  variants: {
    animate: PageIn,
    hidden: PageInitial,
    exit: PageExit,
  },
};
