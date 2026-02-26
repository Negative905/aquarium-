"use client";
import { useState } from "react";

// Simple SVG icons inline to avoid import issues
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.5 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-8H6.4C9.7 35.6 16.3 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.2 5.2C40.1 35.6 44 30.3 44 24c0-1.3-.1-2.6-.4-3.9z"/>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const AquariumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 15h20M6 15c0-3 2-5 4-4s3 4 5 3 3-4 5-4"/>
    <circle cx="17" cy="9" r="1" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const TwitterXIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-3 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <div className="text-blue-800">
            <AquariumIcon />
          </div>
          <div>
            <div className="text-xs font-bold tracking-widest text-blue-900 uppercase leading-none">Ocean Crown</div>
          </div>
        </div>
        <ul className="flex items-center gap-6 text-sm text-gray-700 font-medium">
          {["Home", "About us", "Aquariums", "Fish & Species", "Plants & Corals", "Services", "Contact"].map(item => (
            <li key={item} className="cursor-pointer hover:text-blue-700 transition-colors">{item}</li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          <button className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </nav>

      {/* Main Login Section */}
      <main className="flex-1 bg-[#1a5eab] flex items-center justify-center py-16">
        <div className="w-full max-w-sm">
          <h1 className="text-white text-3xl font-bold text-center mb-1">Login</h1>
          <p className="text-blue-200 text-sm text-center mb-6">Hi, Welcome back</p>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium text-sm py-3 rounded-md hover:bg-gray-50 transition-colors mb-4">
            <GoogleIcon />
            Login with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-blue-400"></div>
            <span className="text-blue-200 text-xs">or Login with Email</span>
            <div className="flex-1 h-px bg-blue-400"></div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="eg.johnDoe@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 rounded-md text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-white text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 rounded-md text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 bg-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <EyeIcon />
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between mb-5">
            <label className="flex items-center gap-2 text-blue-100 text-xs cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="w-3.5 h-3.5 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-200 text-xs hover:text-white underline">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-white text-[#1a5eab] font-semibold text-sm py-3 rounded-md hover:bg-blue-50 transition-colors mb-4">
            Login
          </button>

          {/* Sign Up */}
          <p className="text-center text-blue-200 text-xs">
            Not registered yet?{" "}
            <a href="sign" className="text-white font-medium underline">Sign up ↗</a>
          </p>
        </div>
      </main>
    </div>
  );
}