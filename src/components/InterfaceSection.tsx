import { motion } from 'framer-motion';
import { Command, Sparkles } from 'lucide-react';

type InterfaceSectionProps = {
  itemVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: [number, number, number, number] };
    };
  };
};

export function InterfaceSection({ itemVariants }: InterfaceSectionProps) {
  return (
    <section id="philosophy" className="mx-auto w-[min(96%,72rem)] border border-t-0 border-[#E5E7EB] px-6 py-16 md:px-12 md:py-24">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-4xl font-medium tracking-tight text-[#111111] md:text-5xl">One Command Bar. Total Clarity.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-[#6B7280] md:text-base">
          Replace fragmented workflows with an interface that feels as natural as a conversation.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-12 max-w-4xl rounded-2xl border border-[#E5E7EB] bg-white/70 p-5 shadow-[0_8px_24px_rgba(17,17,17,0.05)]"
      >
        <div className="rounded-xl border border-[#E5E7EB] bg-[#FAFAFA] p-4">
          <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3 text-xs text-[#6B7280]">
            <Command size={14} strokeWidth={1.5} />
            Xenomi Command
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#111111]">
            <Sparkles size={16} strokeWidth={1.5} className="text-[#6B7280]" />
            <span>Generate a monthly revenue report for Q1...</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
