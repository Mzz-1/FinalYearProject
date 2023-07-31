import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Label } from "../../components/Label";
import { UpdateButton } from "../../components/Button";
import { useUser } from "../../service/useUser";
import { Heading2 } from "../../components/Heading";
import { PromiseToast } from "../../helpers/Toast";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchArtistBio,
    addArtistBio,
    updateArtistBio,
} from "../../redux-store/artistBioSlice";

const Biography = () => {
    const user = useUser();

    const [bio, setBio] = useState();

    const dispatch = useDispatch();
    const artistBio = useSelector((state) => state.artistBio);

    const { data, fetchStatus } = artistBio;

    const getBio = async () => {
        try {
            const productsData = await axios.get(
                `http://localhost:5000/api/biography/${user.id}`
            );

            const data = await productsData.data.artist;
            setBio(data);
            console.log("getEvents", data);
        } catch {
            console.log("werror");
        }
    };

    useEffect(() => {
        getBio();
        const id = user.id;
        dispatch(fetchArtistBio({ id }));
        console.log(artistBio);
        document.title = "Update Biography | Artist Dashboard";
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    watch("image");

    const onEditorStateChange = (editorState) => {
        setValue("aboutContent", editorState);
    };

    const onEditorStateChange2 = (editorState) => {
        setValue("biography", editorState);
    };

    const aboutArtistContent = watch("aboutContent");
    const biographyContent = watch("biography");

    const addBiography = async (data) => {
        const userID = user.id;
        if (bio) {
            PromiseToast(
                "Biography has been updated",
                dispatch(updateArtistBio({ data, userID }))
            );
        } else {
            PromiseToast(
                "Biography has been added",
                dispatch(addArtistBio({ data, userID }))
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <Heading2>Biography</Heading2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(addBiography)}
            >
                <div className="grid grid-rows-1 grid-cols-1 gap-[30px] font-slab">
                    <div className="flex flex-col gap-[20px]">
                        <Label>Name</Label>
                        <Input
                            type="text"
                            placeholder="Name"
                            defaultValue={data?.artist?.name}
                            register={{
                                ...register("name", {
                                    required: "Please enter your name.",
                                }),
                            }}
                        />
                        <p>{errors.name?.message}</p>
                        <Label>Profile Image</Label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("image", {
                                required: "Please enter an image.",
                            })}
                        />
                        <p>{errors.image?.message}</p>
                        <Label>About the artist</Label>
                        <ReactQuill
                            className="h-[400px] w-[800px] mb-[20px]"
                            theme="snow"
                            value={
                                aboutArtistContent || data?.artist?.aboutArtist
                            }
                            onChange={onEditorStateChange}
                        />
                        <p>{errors.aboutContent?.message}</p>
                        <Label>Biography</Label>
                        <ReactQuill
                            className="h-[400px] w-[800px] mb-[40px]"
                            theme="snow"
                            value={biographyContent || data?.artist?.biography}
                            onChange={onEditorStateChange2}
                        />
                        <p>{errors.biographyContent?.message}</p>
                    </div>
                </div>

                <UpdateButton>Update Inforamtion</UpdateButton>
            </form>
        </div>
    );
};

export default Biography;
