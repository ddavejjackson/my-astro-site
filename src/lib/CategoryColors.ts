export const categoryStyles: Record<string, { border: string; text: string; hover: string }> = {
  coding: { border: 'border-doom-blue', text: 'text-doom-blue', hover: 'hover:border-doom-cyan' },
  politics: { border: 'border-doom-red', text: 'text-doom-red', hover: 'hover:border-doom-orange' },
  ctfs: { border: 'border-doom-green', text: 'text-doom-green', hover: 'hover:border-doom-magenta'},
};

export const defaultCategoryStyle = {
  border: 'border-doom-base4',
  text: 'text-doom-magenta',
  hover: 'hover:border-doom-violet',
};
