interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className="px-6 py-16 md:px-12 md:py-24 max-w-3xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
