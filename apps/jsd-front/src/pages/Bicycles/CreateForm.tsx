import axios from "axios";
import { useState } from "react";

const CreateForm = () => {
  const [createdId, setCreatedId] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      color: formData.get("color"),
      model: formData.get("model"),
      location: [
        Number(formData.get("locationLat")),
        Number(formData.get("locationLng")),
      ],
    };

    const res = await axios.post("/api/bicycles", data);
    if (res.data) setCreatedId(res.data.id);
    else setCreatedId(null);
  };

  return (
    <>
      {createdId && (
        <div
          style={{
            textAlign: "center",
            padding: "0.8rem 0.6rem",
            backgroundColor: "#4DCB4F",
          }}
        >
          Bicycle created with id {createdId}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "block", margin: "10px 0" }}>
          <label htmlFor="name" style={{ lineHeight: "1.5" }}>
            Owner:
          </label>
          <br />
          <input name="name" type="text" style={{ padding: "0.6rem 0.3rem" }} />
        </div>

        <div style={{ display: "block", margin: "10px 0" }}>
          <label htmlFor="color" style={{ lineHeight: "1.5" }}>
            Color:
          </label>
          <br />
          <input name="color" type="color" />
        </div>

        <div style={{ display: "block", margin: "10px 0" }}>
          <label htmlFor="model" style={{ lineHeight: "1.5" }}>
            Model:
          </label>
          <br />
          <input
            name="model"
            type="text"
            style={{ padding: "0.6rem 0.3rem" }}
          />
        </div>

        <div style={{ display: "block", margin: "10px 0" }}>
          <label htmlFor="locationLat" style={{ lineHeight: "1.5" }}>
            Latitude:
          </label>
          <br />
          <input
            name="locationLat"
            step="0.01"
            type="number"
            style={{ padding: "0.6rem 0.3rem" }}
          />
        </div>

        <div style={{ display: "block", margin: "30px 0" }}>
          <label htmlFor="locationLng" style={{ lineHeight: "1.5" }}>
            Longitude:
          </label>
          <br />
          <input
            name="locationLng"
            step="0.01"
            type="number"
            style={{ padding: "0.6rem 0.3rem" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.7rem 2rem" }}>
          Create
        </button>
      </form>
    </>
  );
};

export default CreateForm;
