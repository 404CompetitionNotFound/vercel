import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display font-bold text-xl tracking-tight">Shreya</span>
          <p className="text-xs text-text-secondary">shreya.phy1@gmail.com</p>
          <p className="text-xs text-text-secondary">(+91) 8789660911</p>
        </div>

        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Shreya. All rights reserved.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-xs text-text-secondary hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-text-secondary hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
