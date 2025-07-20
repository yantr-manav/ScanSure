import { useState } from "react";
import API from "../api/axios";

function VerifyForm() {
  const [name, setName] = useState("");
  const [idProof, setIdProof] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("id_proof", idProof);

    try {
      await API.post("/verify/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Verification submitted");
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Submit Verification</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          className="w-full mb-4"
          onChange={(e) => setIdProof(e.target.files[0])}
        />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default VerifyForm;
