const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, trim: true, required: false },
    creator: { type: String, required: true },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    timestamps: true,
    collection: "events",
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
