const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Nav</div>
      {children}
    </div>
  );
};

export default AdminLayout;
