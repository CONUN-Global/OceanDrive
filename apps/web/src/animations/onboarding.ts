const AOnboardingInitial = {
  opacity: 0,
  x: 500,
};
const AOnboardingIn = {
  opacity: 1,
  x: 0,
  transition: {
    type: 'ease-in',
  },
};
const AOnboardingExit = {
  opacity: 0,
  x: -500,
  transition: {
    type: 'ease-out',
  },
};

export const AOnboardingProps = {
  initial: 'hidden',
  animate: 'animate',
  exit: 'exit',
  variants: {
    animate: AOnboardingIn,
    hidden: AOnboardingInitial,
    exit: AOnboardingExit,
  },
};
