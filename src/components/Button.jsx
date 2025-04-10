const Button = ({ children, classes = "" }) => {
  return (
    <button
      className={`bg-teal-700 px-5 py-2 text-teal-50 hover:bg-teal-500 cursor-pointer transition-all duration-200 rounded font-normal ${classes}`}
    >
      {children}
    </button>
  );
};
export default Button;
