import { motion } from 'framer-motion';
import { Bot, LayoutDashboard, SearchCheck } from 'lucide-react';

const features = [
  {
    title: 'Natural Language Querying.',
    description: 'Ask in plain language and receive trustworthy, context-aware operational insight.',
    icon: SearchCheck
  },
  {
    title: 'Automated Schema Mapping.',
    description: 'Xenomi interprets your existing systems and maps data relationships automatically.',
    icon: Bot
  },
  {
    title: 'Zero-Config Dashboards.',
    description: 'Instantly surface metrics with no manual widget setup or brittle dashboard logic.',
    icon: LayoutDashboard
  }
];

type FeatureGridProps = {
  itemVariants: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: { duration: number; ease: [number, number, number, number] };
    };
  };
};

export function FeatureGrid({ itemVariants }: FeatureGridProps) {
  return (
    <section id="features" className="mx-auto w-[min(96%,72rem)] border border-t-0 border-[#E5E7EB]">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3"
      >
        {features.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className={`group p-8 md:p-10 ${index < features.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''} border-[#E5E7EB]`}
          >
            <Icon
              size={22}
              strokeWidth={1.5}
              className="text-[#6B7280] transition-colors duration-200 group-hover:text-[#111111]"
            />
            <h3 className="mt-8 text-2xl font-medium tracking-tight text-[#111111]">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">{description}</p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
