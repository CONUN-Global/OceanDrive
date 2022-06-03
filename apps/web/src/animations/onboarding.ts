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

// For backward animations
const BOnboardingInitial = {
  opacity: 0,
  x: -500,
};
const BOnboardingIn = {
  opacity: 1,
  x: 0,
  transition: {
    type: 'ease-in',
  },
};
const BOnboardingExit = {
  opacity: 0,
  x: 500,
  transition: {
    type: 'ease-out',
  },
};

export const BOnboardingProps = {
  initial: 'hidden',
  animate: 'animate',
  exit: 'exit',
  variants: {
    animate: BOnboardingIn,
    hidden: BOnboardingInitial,
    exit: BOnboardingExit,
  },
};
