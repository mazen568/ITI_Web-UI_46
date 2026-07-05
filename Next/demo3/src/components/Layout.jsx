import Navbar from "./Navbar";
import { Toaster } from 'react-hot-toast';
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-secondary/30 dark:bg-slate-950/50 px-8 py-12 transition-colors duration-300">
        {children}
      </main>
      <Toaster position="top-right" reverseOrder={false} />    </>
  );
}
