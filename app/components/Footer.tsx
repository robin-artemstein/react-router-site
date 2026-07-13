export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 py-6 text-center text-sm text-slate-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Studio.TS. All rights reserved.</p>
        <div className="text-xs text-slate-400">
          React Router v8 SPA Platform
        </div>
      </div>
    </footer>
  );
}