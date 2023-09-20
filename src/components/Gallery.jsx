import DragDrop from "./DragDrop";

const Gallery = ({ items }) => {
  return (
    <section className="mt-4 sm:mt-8 md:mt-14 flex flex-col gap-6 sm:gap-14 md:gap-20">
      <aside className="grid grid-cols-3 justify-between items-center px-3 sm:px-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-primary-300 to-primary-100 rounded-full"></div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          Gallery
        </h2>
        <div className="w-full h-[1px] bg-gradient-to-r from-primary-100 to-primary-300 rounded-full"></div>
      </aside>
      <DragDrop items={items} />
    </section>
  );
};

export default Gallery;
