import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton from "react-loading-skeleton";
import { Draggable } from "react-beautiful-dnd";

const DragDrop = (props) => {
  const [galItems, setGalItems] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setGalItems(props.items);
  }, [props]);

  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  useEffect(() => {
    // Update isMobile state based on the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //  DragDrop Function
  const handleDragDrop = function (results) {
    const { source, destination } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const reorderedItems = [...galItems];

    const [removeItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, removeItem);

    return setGalItems(reorderedItems);
  };
  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable
        droppableId="ROOT"
        direction={isMobile ? "vertical" : "horizontal"}
      >
        {(provided) => (
          <div
            className="mb-5 sm:mb-8 md:mb-14"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div
              data-aos="fade-up"
              className="grid gap-3 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden items-stretch"
            >
              {galItems?.map((item, i) => (
                <Draggable draggableId={`${i + 1}`} key={i + 1} index={i}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className={`w-full h-full ${
                        snapshot.isDragging
                          ? "scale-105 ease-in-out duration-75"
                          : ""
                      }`}
                    >
                      {props.loading && (
                        <Skeleton className="w-full h-60 shadow-2xl shadow-primary-200" />
                      )}
                      {!props.loading && (
                        <img
                          data-testid="gallery-image"
                          data-aos="flip-left"
                          className={`ease-in-out duration-75 w-full h-60 cursor-grab object-cover rounded-xl`}
                          src={item.webformatURL}
                          alt={item.tags.split(",").join(" ")}
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDrop;
