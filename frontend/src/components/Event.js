export const Event = ({ events, date,type }) => {
    const dateOptions = { day: "numeric", month: "long", year: "numeric" };

    var startDateTime = new Date(events.startDate);
    const newStartDate = startDateTime.toLocaleDateString("en-US", dateOptions);

    var endDateTime = new Date(events.endDate);
    const newEndDate = endDateTime.toLocaleDateString("en-US", dateOptions);

    const today = new Date();
    var datebool;
    if (date === "ongoing") {
        datebool = startDateTime < today;
    }
    if (date === "upcomming") {
        datebool = startDateTime > today;
    }
    return (
        <div className={`mx-5 font-playfair ${type==="carousel" ? "mb-12" :""}`}>
            <div className="flex justify-center">
                <img
                    src={events.url}
                    alt="events"
                    className=" h-[580px] w-auto object-cover"
                />
            </div>
            <div className="text-[20px] w-[500px] m-auto mt-5 text-[#3C3737] ">
                <h3 className="text-[34px] font-cinzel mb-2 ">{events.name}</h3>

                <span className="flex justify-center gap-2 text-[16px]">
                    <p className="whitespace-pre">
                        {newStartDate} - {newEndDate}
                    </p>
                </span>
                <hr className="h-[1px]  my-[15px]"></hr>
                <span className="flex justify-center gap-2 text-[16px]">
                    <p>{events.location}</p>
                </span>
                <span className="flex justify-center gap-2 text-[16px] mb-5">
                    <p>{events.place}</p>
                </span>
            </div>
           
        </div>
    );
};
