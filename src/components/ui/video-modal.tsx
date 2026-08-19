"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function VideoModal({
  open,
  onClose,
  videoUrl,
}: {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              aria-label="Close video"
            >
              <X size={18} />
            </button>
            <video className="h-full w-full object-cover" controls autoPlay src={videoUrl} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
