"use client";

import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { Paperclip } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const HiringForm = ({ onClose }) => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [experiences, setExperiences] = useState([
    {
      jobRole: "",
      organizationName: "",
      jobLocation: "",
      fromDate: "",
      toDate: "",
      jobDescription: "",
    },
  ]);

  const [addApplicantForm, setAddApplicantForm] = useState({
    applicationDate: new Date().toISOString().split("T")[0],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    country: "USA",
    city: "",
    position: "Arabic Teacher",
    expectedSalary: "",
    workingHours: "",
    skills: "",
    skillList: [],
    professionalExperience: [],
    resume: null,
    comment: "",
  });

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const updateWorkingHours = (start, end) => {
    const value = start && end ? `${start} - ${end}` : "";
    handleChange({
      target: {
        name: "workingHours",
        value,
      },
    });
  };

const handleStartTimeChange = (e) => {
  const value = e.target.value;
  if (!value) return;

  const [hours, minutes] = value.split(":").map(Number);

  // Snap minutes to 00 or 30
  const adjustedMinutes = minutes < 30 ? "00" : "30";
  const adjustedTime = `${String(hours).padStart(2, "0")}:${adjustedMinutes}`;

  setStartTime(adjustedTime);
  updateWorkingHours(adjustedTime, endTime);
};

const handleEndTimeChange = (e) => {
  const value = e.target.value;
  if (!value) return;

  const [hours, minutes] = value.split(":").map(Number);
  const adjustedMinutes = minutes < 30 ? "00" : "30";
  const adjustedTime = `${String(hours).padStart(2, "0")}:${adjustedMinutes}`;

  setEndTime(adjustedTime);
  updateWorkingHours(startTime, adjustedTime);
};

const [fromHour, setFromHour] = useState("");
const [fromMinute, setFromMinute] = useState("");
const [toHour, setToHour] = useState("");
const [toMinute, setToMinute] = useState("");

const handleTimeChange1 = (hour, minute) => {
  setFromHour(hour);
  setFromMinute(minute);

  const from = hour && minute ? `${hour}:${minute}` : "";
  const to = toHour && toMinute ? `${toHour}:${toMinute}` : "";

  updateWorkingHours(from, to); // keep backend field updated
};

const handleTimeChange2 = (hour, minute) => {
  setToHour(hour);
  setToMinute(minute);

  const from = fromHour && fromMinute ? `${fromHour}:${fromMinute}` : "";
  const to = hour && minute ? `${hour}:${minute}` : "";

  updateWorkingHours(from, to);
};



  const handleChange1 = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const addExperienceForm = () => {
    setExperiences((prev) => [
      ...prev,
      {
        jobRole: "",
        organizationName: "",
        jobLocation: "",
        fromDate: "",
        toDate: "",
        jobDescription: "",
      },
    ]);
  };

  const removeExperienceForm = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index));
  };

  const canAddNewForm = experiences.every(
    (exp) =>
      exp.jobRole &&
      exp.organizationName &&
      exp.jobLocation &&
      exp.fromDate &&
      exp.toDate
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setAddApplicantForm((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    if (addApplicantForm.country) {
      const selectedCountry = countries.find(
        (c) => c.name === addApplicantForm.country
      );
      if (selectedCountry) {
        const allStates = State.getStatesOfCountry(selectedCountry.isoCode);
        const allCities = allStates.flatMap((state) =>
          City.getCitiesOfState(selectedCountry.isoCode, state.isoCode)
        );
        setCities(allCities);
      } else {
        setCities([]);
      }
    }
  }, [addApplicantForm.country, countries]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example validation:
    if (!addApplicantForm.firstName.trim()) {
      setFailedMessage("Please enter your First Name.");
      setSuccess(false);
      return;
    }
    if (!addApplicantForm.lastName.trim()) {
      setFailedMessage("Please enter your Last Name.");
      setSuccess(false);
      return;
    }
    if (!addApplicantForm.email.trim()) {
      setFailedMessage("Please enter your Email.");
      setSuccess(false);
      return;
    }
    if (!addApplicantForm.phone.trim()) {
      setFailedMessage("Please enter your Phone Number.");
      setSuccess(false);
      return;
    }

    setFailedMessage("");

    const formData = new FormData();
    formData.append("applicationDate", addApplicantForm.applicationDate);
    formData.append("candidateFirstName", addApplicantForm.firstName);
    formData.append("candidateLastName", addApplicantForm.lastName);
    formData.append("candidateEmail", addApplicantForm.email);
    formData.append("candidatePhoneNumber", addApplicantForm.phone);
    formData.append("candidateCountry", addApplicantForm.country);
    formData.append("candidateCity", addApplicantForm.city);
    formData.append("positionApplied", addApplicantForm.position);
    formData.append("gender", addApplicantForm.gender);
    formData.append("skills", addApplicantForm.skillList.join(","));
    formData.append("currency", "$");
    formData.append("professionalExperience", JSON.stringify(experiences));
    formData.append("expectedSalary", addApplicantForm.expectedSalary);
    formData.append("preferedWorkingHours", addApplicantForm.workingHours);
    formData.append("comments", addApplicantForm.comment);
    formData.append("applicationStatus", "NEWAPPLICATION");
    formData.append("overallRating", "1");
    formData.append("status", "Active");

    if (addApplicantForm.resume) {
      formData.append("uploadResume", addApplicantForm.resume);
    }

    try {
      const response = await axios.post(
        "https://api.blackstoneinfomaticstech.com/recruit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response);

      if ([200, 201].includes(response.status)) {
        setSuccess(true);
        setFailedMessage("");
        setAddApplicantForm({
          applicationDate: new Date().toISOString().split("T")[0],
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "USA",
          city: "",
          gender: "",
          position: "Arabic Teacher",
          expectedSalary: "",
          workingHours: "",
          skills: "",
          skillList: [],
          professionalExperience: [],
          resume: null,
          comment: "",
        });
        setTimeout(() => {
          setSuccess(false);
          router.push("/");
        }, 3000);
      }
    } catch (err) {
      const status = err.response?.status;
      if (status === 400) {
        setFailedMessage("Please check the input fields.");
        setSuccess(false);
        setTimeout(() => setFailedMessage(""), 5000);
      } else if (status === 401) {
        setFailedMessage("Please login again.");
        setSuccess(false);
        setTimeout(() => setFailedMessage(""), 5000);
      } else if (status === 403) {
        setFailedMessage("You don't have permission to perform this action.");
        setSuccess(false);
        setTimeout(() => setFailedMessage(""), 5000);
      } else if (status === 500) {
        setFailedMessage("Server error occurred.");
        setSuccess(false);
        setTimeout(() => setFailedMessage(""), 5000);
      } else {
        setSuccess(false);
        setFailedMessage("An unexpected error occurred.");
        console.error(`Unexpected error: ${status}`);
        setTimeout(() => setFailedMessage(""), 5000);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setAddApplicantForm({ ...addApplicantForm, resume: e.target.files[0] });
    }
  };

  const handleSkillChange = (e) => {
    setAddApplicantForm((prev) => ({
      ...prev,
      skills: e.target.value,
    }));
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && addApplicantForm.skills.trim()) {
      e.preventDefault();
      const newSkill = addApplicantForm.skills.trim();

      if (!addApplicantForm.skillList.includes(newSkill)) {
        setAddApplicantForm((prev) => ({
          ...prev,
          skillList: [...prev.skillList, newSkill],
          skills: "",
        }));
      }
    }
  };

  const removeSkill = (skillToRemove) => {
    setAddApplicantForm((prev) => ({
      ...prev,
      skillList: prev.skillList.filter((skill) => skill !== skillToRemove),
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-50 p-6"
    >
      <div className="bg-[#fff] rounded-lg shadow-xl p-6 w-full max-w-4xl h-full overflow-y-auto scrollbar-none overflow-auto hide-scrollbar mx-3 text-sm">
        <h1 className="text-lg font-semibold mt-2 text-black mb-3">
          Add Applicant
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-normal text-black mb-1">
                Applicant Date
              </label>
              <input
                name="applicationDate"
                value={addApplicantForm.applicationDate}
                onChange={handleChange}
                type="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-black">First Name</label>
              <input
                name="firstName"
                value={addApplicantForm.firstName}
                onChange={handleChange}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-black">Email</label>
              <input
                name="email"
                value={addApplicantForm.email}
                onChange={handleChange}
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-black">Country</label>
              <select
                name="country"
                value={addApplicantForm.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-black">
                Expected Salary / Hour
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-900">
                  $
                </span>
                <input
                  name="expectedSalary"
                  value={addApplicantForm.expectedSalary}
                  onChange={handleChange}
                  type="number"
                  className="w-full border border-gray-300 pl-4 rounded-lg px-3 py-2 text-xs text-black"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-black">Position Applied</label>
              <select
                name="position"
                value={addApplicantForm.position}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              >
                <option value="">Select Position</option>
                <option value="Quran Teacher">Quran Teacher</option>
                <option value="Arabic Teacher">Arabic Teacher</option>
                <option value="Islamic Teacher">Islamic Teacher</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div>
              <label className="block mb-1 text-black">Phone Number</label>
              <input
                name="phone"
                value={addApplicantForm.phone}
                onChange={handleChange}
                type="number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-black">Last Name</label>
              <input
                name="lastName"
                value={addApplicantForm.lastName}
                onChange={handleChange}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>

            <div>
              <label className="block mb-1 text-black">Gender</label>
              <select
                name="gender"
                value={addApplicantForm.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-black">City</label>
              <select
                name="city"
                value={addApplicantForm.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

<div className="">
  <label className="block mb-1 mt-2 text-black">
    Preferred Working Hours
  </label>
  <div className="flex items-center gap-4 border border-gray-300 rounded-lg">
  {/* From Time */}
  <div className="flex items-center gap-2 ml-2">
    <label
      htmlFor="fromTime"
      className="font-medium text-xs mt-2"
    >
      From
    </label>

    {/* Hours Dropdown */}
    <select
      value={fromHour}
      onChange={(e) => handleTimeChange1(e.target.value, fromMinute)}
      className="h-6 w-8 text-xs px-2 rounded-[3px] border border-[#4f5154] bg-white/5 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="">HH</option>
      {Array.from({ length: 24 }, (_, i) => (
        <option key={i} value={i.toString().padStart(2, "0")}>
          {i.toString().padStart(2, "0")}
        </option>
      ))}
    </select>

    {/* Minutes Dropdown */}
    <select
      value={fromMinute}
      onChange={(e) => handleTimeChange1(fromHour, e.target.value)}
      className="h-6 w-8 text-[10px] px-2 rounded-[3px] border border-[#4f5154] bg-white/5 text-black appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="">MM</option>
      <option value="00">00</option>
      <option value="30">30</option>
    </select>
  </div>
  -

  {/* To Time */}
  <div className="flex items-center gap-2">
    <label
      htmlFor="toTime"
      className="font-medium text-xs mt-2"
    >
      to
    </label>

    {/* Hours Dropdown */}
    <select
      value={toHour}
      onChange={(e) => handleTimeChange2(e.target.value, toMinute)}
      className="h-6 w-8 text-xs px-2 rounded-[3px] border border-[#4f5154] bg-white/5 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="">HH</option>
      {Array.from({ length: 24 }, (_, i) => (
        <option key={i} value={i.toString().padStart(2, "0")}>
          {i.toString().padStart(2, "0")}
        </option>
      ))}
    </select>

    {/* Minutes Dropdown */}
    <select
      value={toMinute}
      onChange={(e) => handleTimeChange2(toHour, e.target.value)}
      className="h-6 w-8 text-xs px-2 rounded-[3px] border border-[#4f5154] bg-white/5 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      <option value="">MM</option>
      <option value="00">00</option>
      <option value="30">30</option>
    </select>
  </div>
</div>

</div>


            <div>
              <label className="block mb-2 text-black">Upload Resume</label>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="resumeUpload"
                  className="cursor-pointer mb-2 inline-flex items-center px-3 py-1.5 bg-[#576CBC] text-white text-xs rounded-lg hover:bg-blue-700 transition"
                >
                  <Paperclip size={14} />
                  {"  "}
                  Upload Resume
                </label>
                <span className="text-xs text-gray-500">
                  {addApplicantForm.resume?.name ?? "No file chosen"}
                </span>
                <input
                  id="resumeUpload"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <label className="block mb-1 text-black">Skills</label>
          <input
            name="skills"
            value={addApplicantForm.skills}
            onChange={handleSkillChange}
            onKeyDown={handleSkillKeyDown}
            type="text"
            placeholder="Type a skill and press Enter"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
          />

          <div className="mt-2 flex flex-wrap gap-2">
            {addApplicantForm.skillList.map((skill) => (
              <button
                key={skill}
                className="bg-[#576CBC] text-white text-xs px-2 py-1 rounded-lg cursor-pointer"
                onClick={() => removeSkill(skill)}
              >
                {skill} ✕
              </button>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-4">
          <label className="text-sm text-black mb-2 block">
            Add Experience
          </label>
          <div
            style={{ maxHeight: "700px" }}
            className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-4 p-3 border border-gray-300 rounded-lg relative"
              >
                <button
                  type="button"
                  onClick={() => removeExperienceForm(index)}
                  className="absolute top-2 right-2 text-red-500 font-bold hover:text-red-700"
                >
                  ×
                </button>

                <input
                  placeholder="Role"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-lg text-xs text-black"
                  value={exp.jobRole}
                  onChange={(e) =>
                    handleChange1(index, "jobRole", e.target.value)
                  }
                />
                <input
                  placeholder="Organization"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-lg text-xs text-black"
                  value={exp.organizationName}
                  onChange={(e) =>
                    handleChange1(index, "organizationName", e.target.value)
                  }
                />
                <input
                  placeholder="Place"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-lg text-xs text-black"
                  value={exp.jobLocation}
                  onChange={(e) =>
                    handleChange1(index, "jobLocation", e.target.value)
                  }
                />
                <div className="flex gap-2 mb-2">
                  <input
                    type="date"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-xs text-black"
                    value={exp.fromDate}
                    onChange={(e) =>
                      handleChange1(index, "fromDate", e.target.value)
                    }
                  />
                  <input
                    type="date"
                    className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg text-xs text-black"
                    value={exp.toDate}
                    onChange={(e) =>
                      handleChange1(index, "toDate", e.target.value)
                    }
                  />
                </div>
                <textarea
                  placeholder="Description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs text-black"
                  value={exp.jobDescription}
                  onChange={(e) =>
                    handleChange1(index, "jobDescription", e.target.value)
                  }
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addExperienceForm}
            disabled={!canAddNewForm}
            className={`px-4 py-1 rounded-lg text-white ${canAddNewForm
                ? "bg-[#576CBC] hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Add Another Experience
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-4">
          <label className="block mb-1 text-black">Comments</label>
          <textarea
            name="comment"
            value={addApplicantForm.comment}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
          />
        </div>

        {/* Action Buttons */}
        <div className="border-t pt-4 mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 border border-[#576CBC] rounded-lg text-[#576CBC] hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-3 py-1 bg-[#576CBC] text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>

      <>
        {/* Success Popup Modal */}
        {success && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded-xl max-w-xs w-full text-center shadow-lg">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold mb-2 text-gray-900">
                Added successfully
              </h2>
              <p className="text-gray-600 mb-4">
                You have successfully added the applicant.
              </p>
              <div className="h-1 w-12 bg-green-500 rounded mx-auto mb-4"></div>
              <button
                onClick={() => {
                  setSuccess(false);
                  router.push("/");
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Error Popup Modal */}
        {failedMessage && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-30">
            <div className="bg-white p-6 rounded-xl max-w-xs w-full text-center shadow-lg relative">
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-bold mb-2 text-gray-900">Error!</h2>
              <p className="text-gray-600 mb-4">{failedMessage}</p>
              <div className="h-1 w-12 bg-red-500 rounded mx-auto mb-4"></div>
              <button
                onClick={() => {
                  setFailedMessage("");
                  // router.push("/");
                }}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </>
    </form>
  );
};

export default HiringForm;
