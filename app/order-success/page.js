"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Suspense } from "react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = searchParams.get("orderId");

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[linear-gradient(180.8deg,#065EB6_0.68%,#000C18_99.32%)]">
      <motion.div
        className="w-full max-w-md text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Success Icon */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center">
            <motion.svg
              className="w-12 h-12 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </motion.svg>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-white text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Order Placed!
        </motion.h1>

        <motion.p
          className="text-blue-200 text-sm mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          Thank you for your purchase 🎉
        </motion.p>

        {/* Order ID */}
        {orderId && (
          <motion.div
            className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 mb-8 mt-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <p className="text-white/60 text-xs mb-1 uppercase tracking-widest">
              Order ID
            </p>
            <p className="text-white font-mono text-sm break-all">{orderId}</p>
          </motion.div>
        )}

        <motion.p
          className="text-blue-200/70 text-xs mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We'll process your order shortly. You can continue shopping below.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <motion.button
            onClick={() => router.push("/")}
            className="w-full py-3 bg-white text-blue-900 font-bold text-sm rounded-lg hover:bg-blue-50 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Continue Shopping →
          </motion.button>
          <motion.button
            onClick={() => router.push("/fish-species")}
            className="w-full py-3 bg-white/10 border border-white/20 text-white text-sm rounded-lg hover:bg-white/20 transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Browse Fish & Species
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#000C18]" />}>
      <OrderSuccessContent />
    </Suspense>
  );
}
