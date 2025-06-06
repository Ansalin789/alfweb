"use client";

import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { Paperclip } from "lucide-react";
import axios from "axios";

const HiringForm = ({ onClose }) => {
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
      exp.jobRole && exp.organizationName && exp.jobLocation && exp.fromDate && exp.toDate
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

      if ([200, 201].includes(response.status)) {
        setSuccess(true);
        setFailedMessage("");
        setTimeout(() => setSuccess(false), 3000);
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
        onClose();
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm z-50 p-6">
      <div className="bg-[#fff] rounded-lg shadow-xl p-6 w-full max-w-4xl h-full overflow-y-auto scrollbar-none overflow-auto hide-scrollbar mx-3 text-sm">
        <h1 className="text-lg font-semibold mt-2 text-black mb-3">
          Add Applicant
        </h1>

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Applicant added successfully!</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                onClick={() => setSuccess(false)}
                className="fill-current h-6 w-6 text-green-500 cursor-pointer"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15L6.303 6.097a1.2 1.2 0 0 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.151a1.2 1.2 0 0 1 0 1.697z" />
              </svg>
            </span>
          </div>
        )}

        {failedMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {failedMessage}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                onClick={() => setFailedMessage("")}
                className="fill-current h-6 w-6 text-red-500 cursor-pointer"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15L6.303 6.097a1.2 1.2 0 0 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.151a1.2 1.2 0 0 1 0 1.697z" />
              </svg>
            </span>
          </div>
        )}

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
              <label className="block mb-1 text-black">
                First Name
              </label>
              <input
                name="firstName"
                value={addApplicantForm.firstName}
                onChange={handleChange}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-black">
                Last Name
              </label>
              <input
                name="lastName"
                value={addApplicantForm.lastName}
                onChange={handleChange}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-black">
                Email
              </label>
              <input
                name="email"
                value={addApplicantForm.email}
                onChange={handleChange}
                type="email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-black">
                Country
              </label>
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
                Position Applied
              </label>
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
              <label className="block mb-1 text-black">
                Phone Number
              </label>
              <input
                name="phone"
                value={addApplicantForm.phone}
                onChange={handleChange}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-1 text-black">
                City
              </label>
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
            <div>
              <label className="block mb-1 text-black">
                Gender
              </label>
              <select
                name="gender"
                value={addApplicantForm.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
              <label className="block mb-1 text-black">
                Preferred Working Hours
              </label>
              <input
                name="workingHours"
                value={addApplicantForm.workingHours}
                onChange={handleChange}
                type="text"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-black"
              />
            </div>
            <div>
              <label className="block mb-2 text-black">
                Upload Resume
              </label>
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
          <label className="block mb-1 text-black">
            Skills
          </label>
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
                  onChange={(e) => handleChange1(index, "jobRole", e.target.value)}
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
            className={`px-4 py-1 rounded-lg text-white ${
              canAddNewForm
                ? "bg-[#576CBC] hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Add Another Experience
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-4">
          <label className="block mb-1 text-black">
            Comments
          </label>
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
    </div>
  );
};

export default HiringForm;
