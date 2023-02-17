import { useState } from "react";

export const EventsList = ({ events }) => {
    return (
        <div>
            {events.map((events) => {
                return (
                    <div className="grid grid-rows-1 grid-cols-2 gap-[0px] justify-center items-center">
                        <div className="m-[auto] text-[24px]">
                            <h3 className="text-[40px]">{events.name}</h3>
                            <hr className="h-[2px] bg-black"></hr>
                            <span className="flex gap-2">
                                <p>At:</p> <p>{events.place}</p>
                            </span>
                            <span className="flex gap-2">
                                <p>Location:</p> <p>{events.location}</p>
                            </span>

                            <span className="flex gap-2">
                                <p>Date:</p>{" "}
                                <p className="whitespace-pre">
                                    {events.startDate} to {events.endDate}
                                    
                                </p>
                            </span>
                            <span className="flex gap-2">
                                <p>Time:</p>
                                <p className="whitespace-pre">
                                    {events.startTime} to {events.endTime}
                                </p>
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={events.url}
                                alt="events"
                                className="w-[430px] h-[600px]"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
