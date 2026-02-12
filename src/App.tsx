import { motion } from 'framer-motion';
import { FeatureGrid } from './components/FeatureGrid';
import { Hero } from './components/Hero';
import { InterfaceSection } from './components/InterfaceSection';
import { Navbar } from './components/Navbar';

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeOut
      }
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#111111] antialiased">
      <Navbar itemVariants={variants.item} />
      <main>
        <Hero containerVariants={variants.container} itemVariants={variants.item} />
        <FeatureGrid itemVariants={variants.item} />
        <InterfaceSection itemVariants={variants.item} />
      </main>
      <motion.footer
        variants={variants.item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex w-[min(96%,72rem)] items-center justify-between border border-t-0 border-[#E5E7EB] px-6 py-6 text-xs text-[#6B7280] md:px-12"
      >
        <span>© {new Date().getFullYear()} Xenomi</span>
        <span>AI-native CMS</span>
      </motion.footer>
    </div>
  );
}

export default App;
