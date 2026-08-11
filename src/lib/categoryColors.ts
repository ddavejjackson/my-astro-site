interface CategoryStyle {
  border: string;
  text: string;
  hover: string;
}

const colorPool: CategoryStyle[] = [
  { border: 'border-doom-blue', text: 'text-doom-blue', hover: 'hover:border-doom-cyan' },
  { border: 'border-doom-red', text: 'text-doom-red', hover: 'hover:border-doom-orange' },
  { border: 'border-doom-green', text: 'text-doom-green', hover: 'hover:border-doom-teal' },
  { border: 'border-doom-yellow', text: 'text-doom-yellow', hover: 'hover:border-doom-orange' },
  { border: 'border-doom-magenta', text: 'text-doom-magenta', hover: 'hover:border-doom-violet' },
  { border: 'border-doom-cyan', text: 'text-doom-cyan', hover: 'hover:border-doom-blue' },
  { border: 'border-doom-orange', text: 'text-doom-orange', hover: 'hover:border-doom-yellow' },
  { border: 'border-doom-violet', text: 'text-doom-violet', hover: 'hover:border-doom-magenta' },
];

export function getCategoryStyle(category: string): CategoryStyle {
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = (hash * 31 + category.charCodeAt(i)) % colorPool.length;
  }
  return colorPool[Math.abs(hash) % colorPool.length];
}