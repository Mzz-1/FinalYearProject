import {  useEffect } from "react";
import {
    Heading2,
    ModalHeading,
} from "../../components/Heading";
import { ModalPara } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";
import { ViewButton, EditButton, DeleteButton } from "../../components/Button";
import { Modal, LargeModal } from "../../components/Modal";
import ViewEvents from "./ViewEvent";
import { fetchAllEvents,deleteEvent } from "../../redux-store/eventSlice";
import { useDispatch,useSelector } from "react-redux";

export const AdminEvent = () => {
    const navigate = useNavigate();

    const dispatch= useDispatch()

    const event = useSelector((state)=>state.event)

    const {data, fetchStatus,deleteStatus} = event

    const deleteEvents = (id) => {
        dispatch(deleteEvent({id}))   
    };

    const updateEvent = (id) => {
        navigate(`/admin-dashboard/update-event/${id}`);
    };

    useEffect(() => {
       dispatch(fetchAllEvents())
        document.title = "Manage Events | Admin Dashboard"; 
    }, [deleteStatus]);

    const dateOptions = { day: "numeric", month: "long", year: "numeric" };

    return (
        <div className="flex flex-col gap-[40px] h-[100%] font-slab">
            <Heading2>Event</Heading2>
            <div className="flex flex-col h-[90%] py-[30px] px-[20px]">
                <div className="overflow-hidden">
                    <table className=" w-[100%] text-[#252733]">
                        <thead className="text-left top-0">
                            <tr className="text-[#A4A6B3] mx-[0px] my-[0px]">
                                <th className="font-extralight">SN</th>
                                <th className="font-extralight">Event Name</th>
                                <th className="font-extralight">Place</th>
                                <th className="font-extralight">Start Date</th>
                                <th className="font-extralight">End Date</th>
                                <th className="font-extralight">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-scroll">
                            {fetchStatus === "success" &&<>
                            {data.event.map((events, index) => {
                                var startDateTime = new Date(events.startDate);
                                const newStartDate =
                                    startDateTime.toLocaleDateString(
                                        "en-US",
                                        dateOptions
                                    );

                                var endDateTime = new Date(events.endDate);
                                const newEndDate =
                                    endDateTime.toLocaleDateString(
                                        "en-US",
                                        dateOptions
                                    );
                                return (
                                    <tr className="border-b divide-slate-400/25 h-[60px] first:border-t">
                                        <td>{index + 1}</td>
                                        <td>{events.name}</td>
                                        <td>{events.place}</td>
                                        <td>{newStartDate}</td>
                                        <td>{newEndDate}</td>
                                        <td className="">
                                            <LargeModal
                                              
                                            >
                                                <ViewEvents
                                                    eventID={events._id}
                                                />
                                            </LargeModal>
                                            <EditButton
                                                onClick={() =>
                                                    updateEvent(events._id)
                                                }
                                            />

                                            <Modal
                                                onClick={() =>
                                                    deleteEvents(events._id)
                                                }
                                            >
                                                <ModalHeading>
                                                    Confirm Delete?
                                                </ModalHeading>
                                                <ModalPara>
                                                    Are you sure you want to
                                                    delete the following event?
                                                </ModalPara>
                                            </Modal>
                                        </td>
                                    </tr>
                                );
                            })}</>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
