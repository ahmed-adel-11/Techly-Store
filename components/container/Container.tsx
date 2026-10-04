interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className="max-w-7xl mx-4 min-[1288px]:mx-auto mb-10 overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
