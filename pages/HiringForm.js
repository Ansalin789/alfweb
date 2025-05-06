"use client";

import React, { useState, useEffect, useRef } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { Upload } from "lucide-react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const HiringForm = () => {
  const [country, setCountry] = useState("USA");
  const [cities, setCities] = useState([]); 
  const [city, setCity] = useState("");
  const countriesCities = require("countries-cities");
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [workingDays, setWorkingDays] = useState("Monday-Saturday");
  const fileInputRef = useRef(null);
  const [showAddApplicant, setShowAddApplicant] = useState(false);

  const [addApplicantForm, setAddApplicantForm] = useState({
    applicationDate: new Date().toISOString().split("T")[0],
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    country: "USA",
    city: "",
    position: "Arabic Teacher",
    expectedSalary: "",
    workingHours: "",
    resume: null,
    comment: "",
  });
 

  const handleFileChange = (e) => {
    if (e.target.files) {
      setAddApplicantForm({ ...addApplicantForm, resume: e.target.files[0] });
    }
  };

  const handleAddApplicantSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("applicationDate", addApplicantForm.applicationDate);
    formData.append("candidateFirstName", addApplicantForm.firstName);
    formData.append("candidateLastName", addApplicantForm.lastName);
    formData.append("candidateGender", addApplicantForm.gender);
    formData.append("candidateEmail", addApplicantForm.email);
    formData.append("candidatePhoneNumber", addApplicantForm.phone);
    formData.append("candidateCountry", addApplicantForm.country);
    formData.append("candidateCity", addApplicantForm.city);
    formData.append("positionApplied", addApplicantForm.position);
    formData.append("currency", "$");
    formData.append("gender", addApplicantForm.gender);
    formData.append("overallRating", "1");
    formData.append("expectedSalary", addApplicantForm.expectedSalary);
    formData.append("preferedWorkingHours", addApplicantForm.workingHours);
    formData.append("comments", addApplicantForm.comment);
    formData.append("applicationStatus", "NEWAPPLICATION");
    formData.append("status", "Active");

    if (addApplicantForm.resume) {
      formData.append("uploadResume", addApplicantForm.resume);
    }

    try {
      const response = await axios.post(
        "https://api.blackstoneinfomaticstech.com/recruit",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("API Response:", response.data);

      if (response.status === 200) {
        alert("Applicant added successfully!");
        setShowAddApplicant(false);
        setAddApplicantForm({
          applicationDate: new Date().toISOString().split("T")[0],
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phone: "",
          country: "USA",
          city: "",
          position: "Arabic Teacher",
          expectedSalary: "",
          workingHours: "",
          resume: null,
          comment: "",
        });
      }
    } catch (error) {
      console.error("Error adding applicant:", error);
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response?.data);
      }
      alert("Failed to add applicant");
    }
    setShowAddApplicant(false);
  };

  useEffect(() => {
    const fetchedCities = countriesCities.getCities(country);
    setCities(fetchedCities);
    setCity("");
  }, [country]);

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 12; hour++) {
      const time = hour === 0 ? "12 AM" : `${hour} AM`;
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }
    for (let hour = 1; hour <= 11; hour++) {
      const time = `${hour} PM`;
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }
    options.push(
      <option key="12 PM" value="12 PM">
        12 PM
      </option>
    );
    return options;
  };

  return (
    <div className="fixed inset-0 bg-[#00000023] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-[500px]">
        <h2 className="text-[16px] font-semibold text-gray-800 mb-4 text-center">
          Add Applicant
        </h2>
        <form onSubmit={handleAddApplicantSubmit} className="space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="applicationDate"
                className="block text-gray-700 text-[12px] font-medium mb-2"
              >
                Application Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={addApplicantForm.applicationDate}
                  onChange={(e) =>
                    setAddApplicantForm({
                      ...addApplicantForm,
                      applicationDate: e.target.value,
                    })
                  }
                  id="applicationDate"
                  className="w-full px-4 py-2 text-[11px] rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                value={addApplicantForm.firstName}
                onChange={(e) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    firstName: e.target.value,
                  })
                }
                id="firstName"
                className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                value={addApplicantForm.lastName}
                onChange={(e) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    lastName: e.target.value,
                  })
                }
                id="lastName"
                className="w-full px-4 py-2 rounded-lg border text-[11px] border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Gender
              </label>
              <select
                value={addApplicantForm.gender}
                onChange={(e) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    gender: e.target.value,
                  })
                }
                id="gender"
                className="w-full px-4 py-2 rounded-lg border text-[11px] border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                value={addApplicantForm.email}
                onChange={(e) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    email: e.target.value,
                  })
                }
                id="email"
                className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Phone Number
              </label>
              <PhoneInput
                country="us"
                value={addApplicantForm.phone}
                onChange={(phone) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    phone: phone
                  })
                }
                inputStyle={{
                  width: '100%',
                  height: '34px',
                  fontSize: '11px',
                  borderRadius: '0.2rem',
                  border: '1px solid #E5E7EB',
                }}
                buttonStyle={{
                  borderRadius: '0.5rem 0 0 0.5rem',
                  border: '1px solid #E5E7EB',
                  borderRight: 'none',
                }}
                containerStyle={{
                  width: '100%',
                }}
                dropdownStyle={{
                  width: '300px',
                  fontSize: '11px',
                }}
                inputClass="focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="country"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Country
              </label>
              <CountryDropdown
                value={addApplicantForm.country}
                onChange={(val) => {
                  setCountry(val);
                  setAddApplicantForm({
                    ...addApplicantForm,
                    country: val,
                  });
                }}
                className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                City
              </label>
              <select
                id="city"
                value={addApplicantForm.city}
                onChange={(e) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    city: e.target.value,
                  })
                }
                className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              >
                <option value="">Select a city</option>
                {cities?.map((cityName) => (
                  <option key={cityName} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="position"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Position Applied
              </label>
              <select
                id="position"
                value={addApplicantForm.position}
                onChange={(e) =>
                  setAddApplicantForm({
                    ...addApplicantForm,
                    position: e.target.value,
                  })
                }
                className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              >
                <option value="Arabic Teacher">Arabic Teacher</option>
                <option value="Quran Teacher">Quran Teacher</option>
                <option value="Islamic Studies Teacher">
                  Islamic Studies Teacher
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="salary"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Expected Salary per Hour
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={addApplicantForm.expectedSalary}
                  onChange={(e) =>
                    setAddApplicantForm({
                      ...addApplicantForm,
                      expectedSalary: e.target.value,
                    })
                  }
                  id="salary"
                  className="w-full px-4 py-[7px] text-[11px] rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
                />
                <button className="absolute inset-y-0 right-0 px-3 text-[11px] text-[#1C3557] hover:underline focus:outline-none">
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="workingHours"
                className="block text-gray-600 text-[12px] font-medium mb-2"
              >
                Preferred Working Hours
              </label>
              <input
                type="text"
                value={addApplicantForm.workingHours}
                onChange={(e) => {
                  setWorkingDays(e.target.value);
                  setAddApplicantForm({
                    ...addApplicantForm,
                    workingHours: e.target.value,
                  });
                }}
                id="salary"
                className="w-full px-4 py-2 text-[11px] rounded-lg border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="resume"
                className="text-gray-600 text-[12px] font-medium mb-2 flex items-center"
              >
                Upload Resume
              </label>
              <div className="relative">
                <input
                  ref={fileInputRef}
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="absolute opacity-0 w-full h-full cursor-pointer"
                  onChange={handleFileChange}
                />
                <div className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none bg-white">
                  {addApplicantForm.resume
                    ? addApplicantForm.resume.name
                    : "No file selected"}
                </div>
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 text-[11px] bg-[#1C3557] text-white rounded-lg hover:bg-[#0e1a2c] flex items-center"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-1" />
                  Upload
                </button>
              </div>
              {addApplicantForm.resume && (
                <p className="mt-2 text-[11px] text-gray-500">
                  Selected file: {addApplicantForm.resume.name}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-gray-600 text-[12px] font-medium mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              value={addApplicantForm.comment}
              onChange={(e) =>
                setAddApplicantForm({
                  ...addApplicantForm,
                  comment: e.target.value,
                })
              }
              rows={4}
              placeholder="Write your comment here..."
              className="w-full px-4 py-2 rounded-lg text-[11px] border border-gray-300 focus:ring-1 focus:ring-[#1C3557] focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowAddApplicant(false)}
              className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-[12px] hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleAddApplicantSubmit}
              className="px-4 py-2 bg-[#1C3557] text-white rounded-lg text-[12px] hover:bg-[#0e1a2c]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
