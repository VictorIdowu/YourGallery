// import React, { , useRef } from "react";
import Skeleton from "react-loading-skeleton";
import { Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";

const Image = ({ items }) => {
  const [loading, setLoading] = useState(false);

  //  Loading If item is Empty
  useEffect(() => {
    items.length === 0 ? setLoading(true) : setLoading(false);
  }, [items]);

  return (
    <div
      data-aos="fade-up"
      className="grid gap-3 gap-x-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden items-stretch"
    >
      {items.map((item, i) => (
        <Draggable draggableId={`${i + 1}`} key={i + 1} index={i}>
          {(provided, snapshot) => (
            <div
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
              className={`w-full h-full ${
                snapshot.isDragging ? "scale-105 ease-in-out duration-75" : ""
              }`}
            >
              {loading ? (
                <Skeleton className="w-full h-60 shadow-2xl shadow-primary-200" />
              ) : (
                <img
                  data-testid="gallery-image"
                  className={`ease-in-out duration-75 w-full h-60 cursor-grab object-cover rounded-xl`}
                  src={item.url}
                  alt="image //"
                />
              )}
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Image;
