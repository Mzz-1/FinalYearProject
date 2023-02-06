const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const eventsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be provided."],
    },
    venue: {
        type: String,
        required: [true, "password must be provided"],
    },
    location: {
        type: String,
        required: [true, "password must be provided"],
    },
    description: {
        type: String,
        required: [true, "password must be provided"],
    },
    startDate: {
        type: Date,
        required: [true, "password must be provided"],
    },
    endDate: {
        type: Date,
        required: [true, "password must be provided"],
    },
    startTime: {
        type: String,
        required: [true, "password must be provided"],
    },
    endTime: {
        type: String,
        required: [true, "password must be provided"],
    },
});

module.exports = mongoose.model("Events", eventsSchema);
