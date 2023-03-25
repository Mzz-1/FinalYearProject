import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Input from "../../components/Input";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Label } from "../../components/Label";
import { UpdateButton } from "../../components/Button";
import { useUser } from "../../service/useUser";

const Biography = () => {
    const user = useUser();

    const [bio, setBio] = useState([]);

    const getBio = async () => {
        const productsData = await axios.get(
            `http://localhost:5000/api/biography/${user.id}`
        );

        const data = await productsData.data.artist;
        setBio(data);
        console.log("getEvents", data);
    };

    useEffect(() => {
        getBio();
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    watch("image");

    const [exist, setDoesExist] = useState(false);

    const onEditorStateChange = (editorState) => {
        setValue("aboutContent", editorState);
    };

    const onEditorStateChange2 = (editorState) => {
        setValue("biography", editorState);
    };

    const aboutArtistContent = watch("aboutContent");
    const biographyContent = watch("biography");

    const addBiography = async (data) => {
        console.log("1");

        const formData = new FormData();
        formData.append("userID", user.id);
        formData.append("name", data.name);
        formData.append("aboutContent", data.aboutContent);
        formData.append("biography", data.biography);

        formData.append("image", data.image[0]);

        console.log(user.id, data.name, data.aboutContent, data.biography);

        try {
            const response = await axios.get(
                `http://localhost:5000/api/artist/${user.id}`
            );
            console.log(response.data);
            setDoesExist(true);
        } catch (err) {
            console.log(`err:${err}`);
        }
        if (!exist) {
            try {
                const response = await axios.patch(
                    `http://localhost:5000/api/biography/${user.id}`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log(response.data);
            } catch (err) {
                console.log(`err:${err}`);
            }
        } else {
            try {
                const response = await axios.post(
                    "http://localhost:5000/api/biography",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                // console.log(
                //     name,
                //     place,
                //     location,
                //     image,
                //     startDate,
                //     endDate,
                //     startTime,
                //     endTime
                // );
                console.log(response.data);
                // const { token } = response.data;
                // console.log(token);
            } catch (err) {
                console.log(`err:${err}`);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[20px]">
            <h2 className="text-5xl font-semibold ">Biography</h2>
            <form
                className="flex flex-col gap-[20px] my-[20px]"
                onSubmit={handleSubmit(addBiography)}
            >
                <div className="grid grid-rows-1 grid-cols-1 gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                        <Label>Name</Label>
                        <Input
                            type="text"
                            placeholder="Name"
                            defaultValue={bio.name}
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
                            value={aboutArtistContent || bio.aboutArtist}
                            onChange={onEditorStateChange}
                        />
                        <p>{errors.aboutContent?.message}</p>
                        <Label>Biography</Label>
                        <ReactQuill
                            className="h-[400px] w-[800px] mb-[40px]"
                            theme="snow"
                            value={biographyContent || bio.biography}
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
