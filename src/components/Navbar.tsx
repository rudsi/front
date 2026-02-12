import { motion } from 'framer-motion';

type NavbarProps = {
  itemVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: [number, number, number, number] };
    };
  };
};

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Philosophy', href: '#philosophy' }
];

export function Navbar({ itemVariants }: NavbarProps) {
  return (
    <motion.header
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-4 z-50 mx-auto w-[min(96%,72rem)] rounded-full border border-[#E5E7EB] bg-[#FAFAFA]/80 px-4 py-3 backdrop-blur"
    >
      <nav className="flex items-center justify-between gap-4">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-[#111111] transition-colors duration-200 hover:text-black/80"
        >
          Xenomi
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#6B7280] transition-colors duration-200 hover:text-[#111111]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <motion.a
          whileTap={{ scale: 0.98 }}
          href="#"
          className="rounded-full border border-[#E5E7EB] bg-[#111111] px-4 py-2 text-sm font-medium text-[#FAFAFA] transition-opacity duration-200 hover:opacity-90"
        >
          Request Access
        </motion.a>
      </nav>
    </motion.header>
  );
}
