import { useState, useEffect } from "react";
import axios from "axios";
import { Heading2, ModalHeading } from "../../components/Heading";
import { ModalPara } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";
import { ViewButton, EditButton, DeleteButton } from "../../components/Button";
import { Modal, LargeModal } from "../../components/Modal";
import { useUser } from "../../service/useUser";
import { PromiseToast, SuccessToast } from "../../helpers/Toast";
import {
    fetchArtistExhibition,
    deleteExhibition,
} from "../../redux-store/exhibitionSlice";
import { useDispatch, useSelector } from "react-redux";

export const ManageEvents = () => {
    const navigate = useNavigate();

    const user = useUser();

    const dispatch = useDispatch();
    const exhibition = useSelector((state) => state.exhibition);

    const { data, deleteStatus, fetchStatus } = exhibition;

    const deleteExhibitions = async (id) => {
        PromiseToast(
            "Event has been deleted",
            dispatch(deleteExhibition({ id }))
        );
    };

    const updateEvent = (id) => {
        navigate(`/artist-dashboard/edit-event/${id}`);
    };

    useEffect(() => {
        const id = user.id;
        dispatch(fetchArtistExhibition({ id }));
        document.title = "Manage Exhibitions | Artist Dashboard";
    }, [deleteStatus]);

    const dateOptions = { day: "numeric", month: "long", year: "numeric" };

    return (
        <div className="flex flex-col gap-[40px] h-[100%] ">
            <Heading2>Featured Events</Heading2>
            {fetchStatus === "success" && (
                <div className="flex flex-col gap-[20px] h-[90%] py-[30px] px-[20px]">
                    <div className="overflow-hidden">
                        <table className=" w-[100%] text-[#252733]">
                            <thead className="text-left top-0">
                                <tr className="text-[#A4A6B3] mx-[0px] my-[0px]">
                                    <th className="font-extralight">SN</th>
                                    <th className="font-extralight">
                                        Exhibition
                                    </th>
                                    <th className="font-extralight">
                                        Location
                                    </th>
                                    <th className="font-extralight">
                                        Start Date
                                    </th>
                                    <th className="font-extralight">
                                        End Date
                                    </th>
                                    <th className="font-extralight">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="overflow-scroll">
                                {data?.exhibitions.map((exhibition, index) => {
                                    var startDateTime = new Date(
                                        exhibition.startDate
                                    );
                                    const newStartDate =
                                        startDateTime.toLocaleDateString(
                                            "en-US",
                                            dateOptions
                                        );

                                    var endDateTime = new Date(
                                        exhibition.endDate
                                    );
                                    const newEndDate =
                                        endDateTime.toLocaleDateString(
                                            "en-US",
                                            dateOptions
                                        );
                                    return (
                                        <tr className="border-b divide-slate-400/25 h-[60px] first:border-t">
                                            <td>{index + 1}</td>
                                            <td>{exhibition.name}</td>
                                            <td>{exhibition.location}</td>
                                            <td>{newStartDate}</td>
                                            <td>{newEndDate}</td>
                                            <td className="">
                                                <EditButton
                                                    onClick={() =>
                                                        updateEvent(
                                                            exhibition._id
                                                        )
                                                    }
                                                />

                                                <Modal
                                                    onClick={() =>
                                                        deleteExhibitions(
                                                            exhibition._id
                                                        )
                                                    }
                                                >
                                                    <ModalHeading>
                                                        Confirm Delete?
                                                    </ModalHeading>
                                                    <ModalPara>
                                                        Are you sure you want to
                                                        delete the following
                                                        event?
                                                    </ModalPara>
                                                </Modal>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};
