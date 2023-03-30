import axios from "axios";

export const getEvents = async () => {
    const productsData = await axios.get(
        `http://localhost:5000/api/events`
    );

    const data = await productsData.data.event;
    return data;
};

export const getSingleEvent = async (id) => {
    const viewData = await axios.get(
        `http://localhost:5000/api/events/${id}`
    );
    console.log("view event", viewData.data.event);
    return viewData.data.event;
};

export const addEvent = async (data) => {

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("place", data.place);
    formData.append("location", data.location);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("startTime", data.startTime);
    formData.append("endTime", data.endTime);
    formData.append("image", data.image[0]);

    try {
        const response = await axios.post(
            "http://localhost:5000/api/events",
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
}


export const updateEvent = async (data,id) => {
   
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("place", data.place);
    formData.append("location", data.location);
    formData.append("startDate", data.startDate);
    formData.append("endDate", data.endDate);
    formData.append("startTime", data.startTime);
    formData.append("endTime", data.endTime);
    formData.append("image", data.image[0]);

    try {
        console.log(data.name)
        const response = await axios.patch(
            `http://localhost:5000/api/events/${id}`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
 
        console.log("updated data",response.data);
      
       // 
    } catch (err) {
        console.log(`err:${err}`);
    }
}; 