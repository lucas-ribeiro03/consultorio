type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="bg-blue-950 h-screen text-amber-50 ">
      <div className="px-3 py-5 items-center">{children}</div>
    </div>
  );
};
