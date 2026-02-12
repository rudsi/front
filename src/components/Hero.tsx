import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

type HeroProps = {
  containerVariants: {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: { staggerChildren: number; delayChildren: number };
    };
  };
  itemVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: [number, number, number, number] };
    };
  };
};

export function Hero({ containerVariants, itemVariants }: HeroProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto w-[min(96%,72rem)] border-x border-[#E5E7EB] px-6 pb-16 pt-20 md:px-12 md:pt-28"
    >
      <motion.p variants={itemVariants} className="mb-6 text-sm uppercase tracking-[0.2em] text-[#6B7280]">
        AI-native Content Operations
      </motion.p>
      <motion.h1
        variants={itemVariants}
        className="max-w-5xl text-5xl font-medium tracking-tighter text-[#111111] sm:text-7xl lg:text-8xl"
      >
        The End of the Back-Office.
      </motion.h1>
      <motion.p variants={itemVariants} className="mt-8 max-w-3xl text-base text-[#6B7280] sm:text-lg">
        Xenomi replaces complex administrative portals with a single, AI-native interface that
        understands your data architecture.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-10 flex items-center gap-4">
        <motion.a
          whileTap={{ scale: 0.98 }}
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-sm font-medium text-[#FAFAFA] transition-opacity duration-200 hover:opacity-90"
        >
          Join the Waitlist
          <ArrowRight size={16} strokeWidth={1.5} />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
