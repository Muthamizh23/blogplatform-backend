import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dixa1paoe",
  api_key: "972445983997627",
  api_secret: "ntrNHR2sjgjrZaJL3aD6aXlaUEc",
});

app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});
