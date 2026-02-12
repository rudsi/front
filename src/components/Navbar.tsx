import { motion } from 'framer-motion';

type ItemVariants = {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: { duration: number; ease: [number, number, number, number] };
  };
};

type PageView = 'landing' | 'chat';

type NavbarProps = {
  itemVariants: ItemVariants;
  activeView: PageView;
  onViewChange: (view: PageView) => void;
};

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Philosophy', href: '#philosophy' }
];

export function Navbar({ itemVariants, activeView, onViewChange }: NavbarProps) {
  return (
    <motion.header
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-4 z-50 mx-auto w-[min(96%,72rem)] rounded-full border border-[#E5E7EB] bg-[#FAFAFA]/80 px-4 py-3 backdrop-blur"
    >
      <nav className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onViewChange('landing')}
          className="text-sm font-medium tracking-tight text-[#111111] transition-colors duration-200 hover:text-black/80"
        >
          Xenomi
        </button>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => onViewChange('landing')}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
              activeView === 'landing' ? 'text-[#111111]' : 'text-[#6B7280] hover:text-[#111111]'
            }`}
          >
            Landing
          </button>
          <button
            type="button"
            onClick={() => onViewChange('chat')}
            className={`rounded-full px-3 py-1.5 text-sm transition-colors duration-200 ${
              activeView === 'chat' ? 'text-[#111111]' : 'text-[#6B7280] hover:text-[#111111]'
            }`}
          >
            Chat UI
          </button>
          {activeView === 'landing' &&
            navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#111111]"
              >
                {item.label}
              </a>
            ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => onViewChange(activeView === 'landing' ? 'chat' : 'landing')}
          className="rounded-full border border-[#E5E7EB] bg-[#111111] px-4 py-2 text-sm font-medium text-[#FAFAFA] transition-opacity duration-200 hover:opacity-90"
        >
          {activeView === 'landing' ? 'Open Chat Demo' : 'Back to Landing'}
        </motion.button>
      </nav>
    </motion.header>
  );
}
