"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const API = process.env.NEXT_PUBLIC_API_URL;

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.5 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-8H6.4C9.7 35.6 16.3 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.2 5.2C40.1 35.6 44 30.3 44 24c0-1.3-.1-2.6-.4-3.9z"
    />
  </svg>
);

const EyeIcon = ({ open }) =>
  open ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );

const formContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");

    if (!name || !email || !phone || !password || !confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed. Please try again.");
        setLoading(false);
        return;
      }

      // ✅ Redirect to login after successful registration
      router.push("/login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center font-sans relative"
      style={{
        backgroundImage: "url('/aquaback-login.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-sm mx-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-10 shadow-2xl"
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className="text-white text-3xl font-bold text-center mb-1"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Register
        </motion.h1>
        <motion.p
          className="text-blue-100 text-sm text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Create your Ocean Crown account 🌊
        </motion.p>

        <motion.div variants={formContainer} initial="hidden" animate="visible">
          {/* Google Register */}
          <motion.div variants={fieldVariant}>
            <motion.button
              className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium text-sm py-3 rounded-lg hover:bg-gray-50 transition-colors mb-4 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GoogleIcon />
              Register with Google
            </motion.button>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fieldVariant}
            className="flex items-center gap-3 mb-4"
          >
            <div className="flex-1 h-px bg-white/30" />
            <span className="text-white/70 text-xs whitespace-nowrap">
              or Register with Email
            </span>
            <div className="flex-1 h-px bg-white/30" />
          </motion.div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-400/40 text-red-200 text-xs rounded-lg px-3 py-2 mb-3 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Name */}
          <motion.div variants={fieldVariant} className="mb-3">
            <label className="block text-white text-sm mb-1 font-medium">
              Full Name
            </label>
            <motion.input
              type="text"
              placeholder="eg. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white/90 backdrop-blur-sm transition-shadow"
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fieldVariant} className="mb-3">
            <label className="block text-white text-sm mb-1 font-medium">
              Email
            </label>
            <motion.input
              type="email"
              placeholder="eg. johnDoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white/90 backdrop-blur-sm transition-shadow"
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={fieldVariant} className="mb-3">
            <label className="block text-white text-sm mb-1 font-medium">
              Phone Number
            </label>
            <motion.input
              type="tel"
              placeholder="eg. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white/90 backdrop-blur-sm transition-shadow"
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>

          {/* Password */}
          <motion.div variants={fieldVariant} className="mb-3">
            <label className="block text-white text-sm mb-1 font-medium">
              Password
            </label>
            <div className="relative">
              <motion.input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white/90 backdrop-blur-sm pr-10 transition-shadow"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                whileTap={{ scale: 0.85, rotate: 15 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={showPassword ? "open" : "closed"}
                    initial={{ opacity: 0, rotate: -20 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 20 }}
                    transition={{ duration: 0.15 }}
                  >
                    <EyeIcon open={showPassword} />
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Confirm Password */}
          <motion.div variants={fieldVariant} className="mb-5">
            <label className="block text-white text-sm mb-1 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <motion.input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white/90 backdrop-blur-sm pr-10 transition-shadow"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                whileTap={{ scale: 0.85, rotate: 15 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={showConfirm ? "open" : "closed"}
                    initial={{ opacity: 0, rotate: -20 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 20 }}
                    transition={{ duration: 0.15 }}
                  >
                    <EyeIcon open={showConfirm} />
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Register Button */}
          <motion.div variants={fieldVariant}>
            <motion.button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-white text-[#1a5eab] font-semibold text-sm py-3 rounded-lg hover:bg-blue-50 transition-colors mb-4 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? "Creating account..." : "Create Account"}
            </motion.button>
          </motion.div>

          {/* Login link */}
          <motion.p
            variants={fieldVariant}
            className="text-center text-white/70 text-xs"
          >
            Already have an account?{" "}
            <motion.a
              href="/login"
              className="text-white font-medium underline"
              whileHover={{ x: 2 }}
            >
              Login ↗
            </motion.a>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
