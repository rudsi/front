import { motion } from 'framer-motion';
import { MessageSquare, Plus, Search, Sparkles } from 'lucide-react';

type ItemVariants = {
  hidden: { opacity: number; y: number };
  visible: {
    opacity: number;
    y: number;
    transition: { duration: number; ease: [number, number, number, number] };
  };
};

type ChatWorkspaceProps = {
  itemVariants: ItemVariants;
};

const conversations = [
  'Q1 Revenue Diagnostics',
  'Content Workflow Audit',
  'Schema Sync Review',
  'Enterprise Rollout Notes',
  'Operations Weekly Brief'
];

const messages = [
  {
    role: 'assistant',
    content: 'Good morning. I can summarize operational changes, generate dashboards, or inspect schema drift.'
  },
  {
    role: 'user',
    content: 'Generate a monthly revenue report for Q1 and highlight anomalies.'
  },
  {
    role: 'assistant',
    content: 'Report generated. Revenue increased 14.2% in March, with one outlier tied to delayed invoice posting in Week 9.'
  }
] as const;

export function ChatWorkspace({ itemVariants }: ChatWorkspaceProps) {
  return (
    <section className="mx-auto w-[min(96%,72rem)] border-x border-b border-[#E5E7EB]">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="grid min-h-[calc(100vh-8rem)] grid-cols-1 md:grid-cols-[18rem_1fr]"
      >
        <aside className="border-b border-[#E5E7EB] p-5 md:border-b-0 md:border-r">
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-medium tracking-tight text-[#111111]">Conversations</h1>
            <button
              type="button"
              className="rounded-full border border-[#E5E7EB] p-2 text-[#6B7280] transition-colors duration-200 hover:text-[#111111]"
              aria-label="Create conversation"
            >
              <Plus size={14} strokeWidth={1.5} />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-full border border-[#E5E7EB] px-3 py-2">
            <Search size={14} strokeWidth={1.5} className="text-[#6B7280]" />
            <span className="text-xs text-[#6B7280]">Search threads</span>
          </div>

          <ul className="mt-4 space-y-1" aria-label="Previous conversations">
            {conversations.map((title, index) => (
              <li key={title}>
                <button
                  type="button"
                  className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition-colors duration-200 ${
                    index === 0
                      ? 'border-[#111111] text-[#111111]'
                      : 'border-[#E5E7EB] text-[#6B7280] hover:text-[#111111]'
                  }`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex flex-col p-5 md:p-8">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} strokeWidth={1.5} className="text-[#6B7280]" />
              <p className="text-sm text-[#111111]">Q1 Revenue Diagnostics</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] px-3 py-1 text-xs text-[#6B7280]">
              <Sparkles size={12} strokeWidth={1.5} /> Xenomi AI
            </span>
          </div>

          <div className="flex-1 space-y-4 py-6">
            {messages.map((message) => (
              <article
                key={message.content}
                className={`max-w-2xl rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'ml-auto border-[#111111] bg-[#111111] text-[#FAFAFA]'
                    : 'border-[#E5E7EB] bg-[#FAFAFA] text-[#111111]'
                }`}
              >
                {message.content}
              </article>
            ))}
          </div>

          <form className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-3">
            <label htmlFor="prompt" className="sr-only">
              Message Xenomi
            </label>
            <textarea
              id="prompt"
              rows={3}
              defaultValue="Refine this report for the executive team and add confidence intervals."
              className="w-full resize-none bg-transparent text-sm text-[#111111] outline-none"
            />
            <div className="mt-3 flex justify-end">
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="button"
                className="rounded-full bg-[#111111] px-4 py-2 text-xs font-medium text-[#FAFAFA] transition-opacity duration-200 hover:opacity-90"
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
