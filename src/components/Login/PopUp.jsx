const PopUp = (props) => {
  return (
    <aside
      className={`fixed gap-2 sm:gap-5 w-fit -top-10 -right-20 bg-secondary-100 shadow-[rgba(32,30,30,0.75)] shadow-2xl  z-50  flex flex-col justify-between rounded-lg overflow-hidden animate-bounce transition-opacity`}
    >
      <h2 className="text-base sm:text-lg md:text-2xl text-primary-300 px-3 sm:px-10 py-4">
        {props.msg}
      </h2>
    </aside>
  );
};

export default PopUp;
