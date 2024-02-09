const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl p-3 w-full h-fit hover:bg-blue-500 hover:shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-300 ">
      {children}
    </div>
  );
};

export default CardWrapper;
