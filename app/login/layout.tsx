const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
