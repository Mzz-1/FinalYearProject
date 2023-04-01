import axios from "axios";

export const addExhibition = async (data,userID) => {
    console.log("1");
   

    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("location", data.location);
    formData.append("name", data.name);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);

    formData.append("image", data.image[0]);

    console.log(data.name, data.startDate, data.endDate);

    try {
        const response = await axios.post(
            "http://localhost:5000/api/add-artist-event",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    
        console.log(response.data);
        // const { token } = response.data;
        // console.log(token);
    } catch (err) {
        console.log(`err:${err}`);
    }
    
};