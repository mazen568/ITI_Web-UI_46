import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen bg-secondary/30 px-8 py-12">{children}</main>
    </>
  );
}
