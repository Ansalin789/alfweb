"use client";

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import en from "react-phone-number-input/locale/en.json";
import { useRouter, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { Country, State, City } from "country-state-city";
import { IoToggle } from "react-icons/io5";
import axios from "axios";
// Replace TypeScript types with JSDoc type definitions
/**
 * @typedef {Date | null} ValuePiece
 * @typedef {ValuePiece | [ValuePiece, ValuePiece]} Value
 * @typedef {{ success: boolean, message: string }} ApiResponse
 * @typedef {{ countryCode: string }} PhoneChangeData
 */

const countryCityMap = {
  us: ["New York", "Los Angeles", "Chicago"],
  ca: ["Toronto", "Vancouver", "Montreal"],
  gb: ["London", "Manchester", "Birmingham"],
  // Add more countries and their cities as needed
};

const MultiStepForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  const refernceby = searchParams.get("refernceId");
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const countriesCities = require("countries-cities");
const [studentList, setStudentList] = useState([]);

  // Basic Information States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // Learning Interest States
  const [learningInterest, setLearningInterest] = useState([]);
  const [iqraUsageOther, setIqraUsageOther] = useState("");
  // const [numberOfStudents, setNumberOfStudents] = useState("");
  const [preferredTeacher, setPreferredTeacher] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [referralSourceOther, setReferralSourceOther] = useState("");
  const [availableCoaches, setAvailableCoaches] = useState([]);
  const [selectedCoachId, setSelectedCoachId] = useState(null);
  const [allSlots, setAllSlots] = useState([]);
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(null);
  // Schedule States
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [openSlotIndex, setOpenSlotIndex] = useState(null);
  // Track selected time slot
  const [preferredFromTime, setPreferredFromTime] = useState(null);
  const [preferredToTime, setPreferredToTime] = useState(null);

  // Toggle dropdown open/close
  const [selectedSlotTimes, setSelectedSlotTimes] = useState(null);

  const [selectedACId, setSelectedACId] = useState(null);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]); // Optional if you want to manage states but needed to get cities
  const [cities, setCities] = useState([]); // Keep this state
  const [country, setCountry] = useState("USA"); // Default country
  const [city, setCity] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [familyId, setFamilyId] = useState("");
  const [familyEmail, setFamilyEmail] = useState("");

  // Load countries once
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  // Load states and cities when country changes
  useEffect(() => {
    if (country) {
      const selectedCountry = countries.find(
        (c) => c.name === country || c.isoCode === country
      );

      if (selectedCountry) {
        // Get all states of the selected country
        const allStates = State.getStatesOfCountry(selectedCountry.isoCode);
        setStates(allStates);

        // Collect cities from all states
        const allCities = allStates.flatMap((state) =>
          City.getCitiesOfState(selectedCountry.isoCode, state.isoCode)
        );

        // If you want only city names in the dropdown
        const cityNames = allCities.map((city) => city.name);

        setCities(cityNames);
        setCity(""); // reset city when country changes
      } else {
        setCities([]);
        setStates([]);
        setCity("");
      }
    }
  }, [country, countries]);

  const toggleSlot = (index) => {
    if (openSlotIndex === index) {
      setOpenSlotIndex(null);
      setPreferredFromTime(null);
      setPreferredToTime(null);
      setSelectedCoachIndex(null);
      setSelectedSlotTimes(null);
      setSelectedACId(null);
      console.log("AC ID cleared");
    } else {
      setOpenSlotIndex(index);
      setPreferredFromTime(null);
      setPreferredToTime(null);
      setSelectedCoachIndex(index);
      setSelectedSlotTimes(availableTimes[index]?.availableSlots || []);
      setSelectedACId(availableTimes[index]?.academicCoachId || null);
      console.log("Selected AC ID:", availableTimes[index]?.academicCoachId);
    }
  };

  const [availableTimes, setAvailableTimes] = useState([]);

  const generateReferralId = () => {
    const specialChars = "ALF-REFID-";
    const randomNum = Math.floor(10000 + Math.random() * 90000); // Ensures a 5-digit number
    return specialChars + randomNum;
  };

  // Initialize the referral ID when the component is loaded
  const [referral, setReferral] = useState(generateReferralId());

  /**
   * Handles phone number changes
   * @param {string} value - The phone number value
   * @param {PhoneChangeData} data - The phone change data object
   */
  const handlePhoneChange = (value, data) => {
    // Log the value to understand what is being passed
    console.log("Phone input value:", value);

    // Ensure value contains only digits (strip non-numeric characters)
    const numericValue = value.replace(/\D/g, ""); // Keep only numeric characters

    // Update state with numericValue
    setPhoneNumber(numericValue);
    setCountryCode(data.countryCode || ""); // Set countryCode, fallback to empty string
  };

  /**
   * Handles date changes
   * @param {Value} value - The selected date value
   */
  const handleDateChange = (value) => {
    if (value instanceof Date) {
      setStartDate(value);
      setToDate(value);

      // Format date as YYYY-MM-DD
      const formattedDate = value.toISOString().split("T")[0];

      loadAvailableTimes(formattedDate); // pass the date to loadAvailableTimes
    }
  };
  const selectedCoach =
    selectedCoachIndex !== null ? availableTimes[selectedCoachIndex] : null;

  const loadAvailableTimes = async (scheduleDate) => {
    if (!scheduleDate) {
      console.warn("No scheduleDate provided to loadAvailableTimes");
      return;
    }

    try {
      const response = await fetch(
        `https://api.blackstoneinfomaticstech.com/ac/availabletime?scheduleDate=${scheduleDate}`
      );
      const data = await response.json();

      console.log("Raw API response:", data);

      // Map over the array of coaches and only keep start times
      const uniqueCoaches = data.map((coach) => ({
        academicCoachId: coach.academicCoachId,
        availableSlots: coach.availableSlots.map((slot) => ({
          start: slot.start,
          end: slot.end,
        })),
      }));

      setAvailableTimes(uniqueCoaches);
    } catch (err) {
      console.error("Error fetching available times:", err);
      setAvailableTimes([]);
    }
  };

  const validateStep1 = () => {
    if (!firstName.trim() || firstName.length < 3) {
      return { isValid: false, field: "First Name (minimum 3 characters)" };
    }
    if (!lastName.trim() || lastName.length < 3) {
      return { isValid: false, field: "Last Name (minimum 3 characters)" };
    }
    if (!email.trim()) {
      return { isValid: false, field: "Email" };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, field: "Email Format" };
    }

    if (!gender.trim() || gender.length < 3) {
      return { isValid: false, field: "Gender (minimum 3 characters)" };
    }

    if (!countryCode) {
      return { isValid: false, field: "Country Code" };
    }
    if (!phoneNumber) {
      return { isValid: false, field: "Phone Number" };
    }
    if (!country) {
      return { isValid: false, field: "Country" };
    }
    if (!timeZone) {
      return { isValid: false, field: "Time Zone" };
    }

    return { isValid: true, field: null };
  };

  const validateStep2 = () => {
    // Check if at least one learning interest is selected
    return (
      learningInterest.length > 0 && // At least one interest must be selected
      // numberOfStudents &&
      preferredTeacher &&
      referralSource
    );
  };

  const validateStep3 = () => {
    if (!startDate || !toDate) return false;
    if (!preferredFromTime || !preferredToTime) return false;
    return !!preferredFromTime;
  };

  const nextStep = () => {
    if (step === 1) {
      const validation = validateStep1();
      if (!validation.isValid) {
        alert(`Please fill in the ${validation.field} field correctly.`);
        return;
      }
    }

    if (step === 2) {
      if (!validateStep2()) {
        alert("Please select the missing fields.");
        return;
      }
    }

    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields before submission
      if (!validateStep1().isValid || !validateStep2() || !validateStep3()) {
        // alert("Please fill in all required fields");
        setIsLoading(false);
        return;
      }
      // Clean and format the phone number - remove any non-numeric characters
      // const cleanPhoneNumber = phoneNumber.toString().replace(/\D/g, '');
      function formatDateLocal(date) {
        // Returns yyyy-mm-dd in local time
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

      const formattedData = {
        id: uuidv4(),
        firstName: firstName.trim().padEnd(3),
        lastName: lastName.trim().padEnd(3),
        email: email.trim().toLowerCase(),
        gender: gender,
        phoneNumber: Number(phoneNumber),
        country: country.length >= 3 ? country : country.padEnd(3, " "),
        countryCode: countryCode.toLowerCase(),
        city: city,
        learningInterest: learningInterest[0],
        // numberOfStudents: Number(numberOfStudents),
        preferredTeacher: preferredTeacher,
        preferredFromTime: preferredFromTime,
        preferredToTime: preferredToTime,
        referralSource: referralSource,
 familyId: formData.familyId?.trim() || "",
    familyEmail: formData.familyEmail?.trim() || "", 
        referralDetails: referralSourceOther || referral || "",
        startDate: formatDateLocal(startDate),
        endDate: formatDateLocal(toDate),
        evaluationStatus: "PENDING",
        refernceId: referral,
        referredBy: refernceby ?? '',
        status: "Active",
        createdBy: "SYSTEM",
        lastUpdatedBy: "SYSTEM",
        timeZone: timeZone,
        academicCoach: {
          academicCoachId: availableTimes[selectedCoachIndex].academicCoachId,
        },
      };

      console.log("Form data with AC ID:", formattedData);
      console.log("Selected AC ID at submission:", selectedACId);

      // Debug log to check the data being sent
      console.log("Sending data:", formattedData);
      const response = await fetch(
        `http://localhost:5001/student`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formattedData, null, 2),
          mode: "cors",
        }
      );

      // Log the raw response
      console.log("Raw response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(
          errorData.message || `Server returned ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Success response:", data);

      // Reset form and redirect on success
      alert("Form submitted successfully!");
      router.push("/Thankyou");
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        `Failed to submit form: ${error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Checks if a calendar tile should be disabled
   * @param {{ date: Date }} param0 - The tile date
   * @returns {boolean}
   */
  const isTileDisabled = ({ date }) => {
    return date < new Date();
  };

  /**
   * Function to get country code based on selected country
   * @param {string} country - The country code
   * @returns {string} The corresponding phone country code
   */

  /**
   * Handles country selection changes
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The change event
   */

  // const formatTime = (hours, minutes) => {
  //   const period = hours >= 12 ? "PM" : "AM";
  //   const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Ensure two-digit format
  //   const formattedMinutes = minutes.toString().padStart(2, "0");
  //   return `${formattedHours}:${formattedMinutes} ${period}`;
  // };

  const calculatePreferredToTime = (fromTime) => {
    for (const coach of allSlots) {
      const match = coach.availableSlots.find(
        (slot) => slot.start === fromTime
      );
      if (match) return match.end;
    }
    return ""; // fallback
  };

  // useEffect(() => {
  //   const fetchedCities = countriesCities.getCities(country);
  //   setCities(fetchedCities);
  //   setCity("");
  // }, [country]);

  useEffect(() => {
    // Get all available time zones
    const timeZones = Intl.supportedValuesOf("timeZone");
    setTimeZones(timeZones);
  }, []);

  const [timeZones, setTimeZones] = useState([]);

const handleFamilyIdChange = (e) => {
  const id = e.target.value.trim();

  // Always store user input
  setFormData((prev) => ({
    ...prev,
    familyId: id,
  }));

  if (!id) {
    // Clear email if input cleared
    setFormData((prev) => ({
      ...prev,
      familyEmail: "",
    }));
    return;
  }

  // Check if familyId exists in student list
  const match = studentList.find(
    (item) => item.familyId?.toLowerCase() === id.toLowerCase()
  );

  if (match) {
    // Auto-fill familyEmail
    setFormData((prev) => ({
      ...prev,
      familyEmail: match.familyEmail || "",
    }));
  } else {
    // Do NOT auto-create a familyId
    setFormData((prev) => ({
      ...prev,
      familyEmail: "", // user can enter manually
    }));
  }
};



const handleFamilyEmailChange = (e) => {
  setFormData((prev) => ({
    ...prev,
    familyEmail: e.target.value
  }));
};




useEffect(() => {
  axios.get("http://localhost:5001/studentlist")
.then((res) => {
    setStudentList(res.data.students); 
  })    .catch((err) => console.log(err));
}, []);
const [formData, setFormData] = useState({
  familyId: "",
  familyEmail: "",
});


  return (
    <div className="flex items-center p-2 sm:p-6 min-h-screen bg-gradient-to-r from-[#d9d9da] to-[#d9d9da]">
      <div className="w-full max-w-[100%] sm:max-w-[40%] mx-auto justify-center p-4 sm:p-6 align-middle rounded-br-[20px] rounded-tl-[20px] rounded-bl-[20px] rounded-tr-[20px] shadow-md bg-gradient-to-r from-[#fff] via-[#f8f8f8] to-[#fff]">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xs sm:text-sm font-medium">Complete 3 Steps</div>
          <div className="text-xs sm:text-sm font-medium">
            {step * (33.4).toFixed(0)}%
          </div>
        </div>
        <div className="w-full bg-[#dfdfdf] rounded-full h-2.5 mb-0">
          <div
            className="bg-[#293552] h-2.5 rounded-full"
            style={{ width: `${step * 33.4}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <div className="flex justify-center align-middle p-4 mb-4 gap-2">
                <Image
                  src="/assets/img/alf1.png"
                  width={150}
                  height={150}
                  className="bg-cover bg-center w-8 h-12"
                  alt="logo"
                />
                <div className="text-white mt-2">
                  <h3 className="font-bold text-[21px] text-[#273754]">
                    AL FURQAN
                  </h3>
                  <h4 className="font-medium text-[19px] justify-end ml-8 -mt-2 font-sans text-[#F992A9]">
                    academy
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                <div>
                  <label
                    htmlFor="First Name"
                    className="text-[14px] text-[#293453]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    minLength={3}
                    className={`w-full p-2 placeholder:text-[12px] border text-[13px] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="Last Name"
                    className="text-[14px] text-[#293453]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    minLength={3}
                    className={`w-full p-2 border placeholder:text-[12px] text-[13px] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50`}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="Email" className="text-[14px] text-[#293453]">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    minLength={3}
                    className={`w-full p-2 border placeholder:text-[12px] rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Gender"
                    className="text-[14px] text-[#293453]"
                  >
                    Gender
                  </label>
                  <br />
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className="w-full px-4 py-[8px] placeholder:text-[12px]  border rounded-lg text-[11px] focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-4">
                <div>
                  <label
                    htmlFor="Phone Number"
                    className="text-[14px] text-[#293453]"
                  >
                    Phone Number
                  </label>
                  <PhoneInput
                    country={countryCode.toLowerCase()}
                    value={phoneNumber ? String(phoneNumber) : ""}
                    onChange={handlePhoneChange}
                    inputClass="w-full placeholder:text-[12px] text-[11px] placeholder:text-[#B4AAC5] rounded-lg py-[17px] focus:outline-none focus:ring-1 focus:ring-[#293552]"
                    containerClass="w-full"
                    buttonStyle={{
                      backgroundColor: "rgb(249,250,251)",
                      borderColor: "#e5e7eb",
                      fontSize: "9px",
                    }}
                    inputStyle={{
                      backgroundColor: "rgb(249,250,251)",
                      width: "100%",
                      borderColor: "#e5e7eb",
                      fontSize: "11px",
                    }}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Country"
                    className="text-[14px] text-[#293453]"
                  >
                    Country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-[8px] rounded-lg text-[#293552] text-[11px] border  focus:ring-1 focus:ring-[#293552] focus:outline-none bg-gray-50"
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c.isoCode} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-[12px]">
                <div>
                  <label htmlFor="City" className="text-[14px] text-[#293453]">
                    City
                  </label>
                  <select
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-[8px] rounded-lg text-[#293552] text-[11px] border  focus:ring-1 focus:ring-[#293552] focus:outline-none bg-gray-50"
                  >
                    <option value="">Select a city</option>
                    {cities.map((cityName) => (
                      <option key={cityName} value={cityName}>
                        {cityName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="Referral Code"
                    className="text-[14px] text-[#293453]"
                  >
                    Referred by
                  </label>

                  <br />
                  <input
                    type="text"
                    placeholder="Referral Code"
                    readOnly
                    value={refernceby ?? ''}
                    onChange={(e) => setReferral(e.target.value)}
                    className={`w-full px-4 py-[8px] border text-[11px] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Referral Code"
                    className="text-[14px] text-[#293453]"
                  >
                    Your Referral Code
                  </label>

                  <br />
                  <input
                    type="text"
                    placeholder="Referral Code"
                    readOnly
                    value={referral}
                    onChange={(e) => setReferral(e.target.value)}
                    className={`w-full px-4 py-[8px] border text-[11px] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="Time Zone"
                    className="text-[14px] text-[#293453]"
                  >
                    Time Zone
                  </label>
                  <select
                    id="timeZone"
                    value={timeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    className="w-full px-4 py-[8px] rounded-lg text-[#293552] text-[11px] border focus:ring-1 focus:ring-[#293552] focus:outline-none bg-gray-50"
                  >
                    {timeZones.map((tz) => (
                      <option key={tz} value={tz}>
                        {tz}
                      </option>
                    ))}
                  </select>
                </div>

               <div>
  {/* Toggle */}
  <div>
    <span
      className="flex text-sm items-center gap-2 cursor-pointer text-[#293552]"
      onClick={() => {
        setIsActive(!isActive);

        if (!isActive) {
          // Switching to Family ID Mode
          setFamilyEmail("");
          setFamilyId("");
        } else {
          // Switching back to Manual Email Mode
          setFamilyId("");
          setFamilyEmail("");
        }
      }}
    >
      If you have Family Id (Click here)
      {isActive ? (
        <IoToggle size={22} className="text-[#293552]" />
      ) : (
        <IoToggle size={22} className="text-gray-400 rotate-180" />
      )}
    </span>
  </div>

  {/* FAMILY ID — only when toggle ON */}
  {isActive && (
    <div className="mt-2">
      <label className="text-[14px] text-[#293453]">Family Id</label>
      <input
        type="text"
        placeholder="Enter Family Id"
       value={formData.familyId}
  onChange={handleFamilyIdChange}
        className="w-full px-4 py-[8px] border text-[11px] rounded-lg 
        focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50 mb-2"
      />
    </div>
  )}

  {/* FAMILY EMAIL — Always visible, Auto-fill when toggle ON */}
  <div className="mt-2">
    <label className="text-[14px] text-[#293453]">Family Email Id</label>
   <input
  type="text"
  placeholder="Family Email Id"
  value={formData.familyEmail}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      familyEmail: e.target.value,
    }))
  }
  className="w-full px-4 py-[8px] border text-[11px] rounded-lg 
            focus:outline-none focus:ring-1 focus:ring-[#293552] bg-gray-50"
/>
  </div>
</div>



              
              </div>



              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className=" text-[14px] sm:text-[16px] p-2 py-2 px-4 bg-[#293552] text-white font-semibold hover:shadow-inner rounded-br-[8px] rounded-tl-[8px] rounded-bl-[8px] rounded-tr-[8px] shadow-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <button
                type="button"
                onClick={prevStep}
                aria-label="Go back to previous step"
                className="text-gray-500 p-2 py-4 text-[12px]"
              >
                ← back
              </button>
              <h2 className="text-[12px] sm:text-[14px] text-center font-bold mb-4 text-[#293552]">
                What will you use AL Furqan for?
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 mb-10 text-[11px] sm:text-[11px]">
                {["Quran", "Islamic Studies", "Arabic"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      // Set the selected learning interest
                      setLearningInterest([option]); // Set the selected option as the only interest
                    }}
                    className={`hover:transition-all duration-500 ease-in-out rounded-xl p-3 text-black shadow-sm ${learningInterest[0] === option
                      ? "bg-[#0c13752e] font-semibold"
                      : "bg-gray-100"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* <h2 className="text-center font-bold mb-3 text-[#293552] text-[14px]">
                How many students will join?
              </h2>
              <div className="grid grid-cols-5 gap-4 mb-6 rounded-xl text-[12px]">
                {[1, 2, 3, 4, 5].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setNumberOfStudents(count.toString())}
                    className={`p-3 hover:transition-all duration-500 shadow-sm ease-in-out rounded-xl text-[#000] ${numberOfStudents === count.toString()
                      ? "bg-[#0c13752e] font-semibold"
                      : "bg-gray-100"
                      }`}
                  >
                    {count}
                  </button>
                ))}
              </div> */}

              <h2 className="text-[14px] text-center font-bold mb-4 text-[#293552]">
                Which teacher would you like?
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-10 text-[11px]">
                {["Male", "Female"].map((preference) => (
                  <button
                    key={preference}
                    type="button"
                    onClick={() => setPreferredTeacher(preference)}
                    className={`p-3 hover:transition-all duration-500 shadow-sm ease-in-out rounded-xl text-[#000] ${preferredTeacher === preference
                      ? "bg-[#0c13752e] font-semibold"
                      : "bg-gray-100"
                      }`}
                  >
                    {preference}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <h2 className="text-[14px] text-center font-bold mb-4 text-[#293552]">
                  Where did you hear about AL Furqan?
                </h2>
                <div className="grid grid-cols-3 sm:grid sm:grid-cols-5 gap-4 mb-10 text-[10px]">
                  {["Friend", "Social Media", "E-Mail", "Google", "Other"].map(
                    (source) => (
                      <button
                        key={source}
                        type="button"
                        onClick={() => setReferralSource(source)}
                        className={`p-3 hover:transition-all duration-500 shadow-sm ease-in-out rounded-xl text-[#000] ${referralSource === source
                          ? "bg-[#0c13752e] font-semibold"
                          : "bg-gray-100"
                          }`}
                      >
                        {source}
                      </button>
                    )
                  )}
                </div>

                {referralSource === "Other" && (
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Please specify where you heard about us"
                      value={referralSourceOther}
                      onChange={(e) => setReferralSourceOther(e.target.value)}
                      className="w-full p-2 border-[#b7b8d6] border-[1px]  rounded-lg placeholder:text-[12px] text-[12px] focus:outline-none shadow-sm focus:ring-1 focus:ring-[#293552] bg-gray-100"
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="sm:w-auto sm:justify-end sm:ml-[240px] text-[14px] sm:text-[16px] p-2 py-2 px-4 bg-[#293552] text-white font-semibold hover:shadow-inner rounded-br-[8px] rounded-tl-[8px] rounded-bl-[8px] rounded-tr-[8px] shadow-lg"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="p-2 sm:p-4 rounded-3xl justify-center align-middle">
              <button
                type="button"
                onClick={prevStep}
                className="text-gray-500 p-2 py-2 mb-4 text-[12px] hover:text-gray-700 transition-colors"
              >
                ← back
              </button>

              <div className="text-center mb-4 sm:mb-6">
                <h2 className="text-[14px] sm:text-[18px] font-bold text-[#293552]">
                  Select a Date and Time
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-auto p-2 rounded-[15px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                        .react-calendar {
                          width: 100% !important;
                          background-color: rgb(229, 231, 235) !important;
                          border: none !important;
                          border-radius: 15px !important;
                          padding:15px !important;
                        }
                        
                        .react-calendar .react-calendar__month-view__days__day {
                          font-size: 10px !important;
                          color: black !important;
                        }

                        .react-calendar .react-calendar__month-view__days__day--weekend:nth-child(7n + 1) {
                          color: #ef4444 !important;
                        }
                        
                        .react-calendar .react-calendar__tile--active,
                        .react-calendar .selected-date {
                          background-color: #293552 !important;
                          color: white !important;
                          border-radius: 6px !important;
                        }

                        .react-calendar .react-calendar__tile--active.react-calendar__month-view__days__day--weekend:nth-child(7n + 1),
                        .react-calendar .selected-date.react-calendar__month-view__days__day--weekend:nth-child(7n + 1) {
                          color: white !important;
                          font-size: 10px !important;
                        }

                        /* Hide scrollbar for WebKit browsers */
                        .scrollbar-hidden::-webkit-scrollbar {
                          display: none; /* Safari and Chrome */
                        }

                        /* Hide scrollbar for Firefox */
                        .scrollbar-hidden {
                          scrollbar-width: none; /* Firefox */
                        }
                      `,
                    }}
                  />
                  <Calendar
                    onChange={handleDateChange}
                    value={startDate}
                    tileDisabled={isTileDisabled}
                    className="mx-auto custom-calendar"
                    selectRange={false}
                    minDate={new Date()}
                    tileClassName={({ date, view }) =>
                      view === "month" &&
                        date.toDateString() === startDate.toDateString()
                        ? "selected-date"
                        : null
                    }
                  />
                </div>
                <div className="w-full sm:w-60 p-3 rounded-[15px] shadow-lg">
                  <h3 className="text-sm text-center font-semibold mb-2 text-[#293552]">
                    Available Slots
                  </h3>

                  <div className="flex flex-col gap-2 h-[330px] overflow-scroll scrollbar-hide">
                    <style jsx>{`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                      .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                      }
                    `}</style>
                    {availableTimes.map((coach, index) => (
                      <div key={coach.academicCoachId || index}>
                        <button
                          onClick={() => toggleSlot(index)}
                          className={`w-full text-center px-2 py-2 rounded-full font-semibold ${openSlotIndex === index
                            ? "bg-[#293552] text-white"
                            : "bg-gray-200 hover:bg-gray-400"
                            }`}
                        >
                          Slot {index + 1}
                        </button>

                        {openSlotIndex === index && selectedSlotTimes && (
                          <div className="mt-2 grid grid-cols-1 gap-3 text-xs">
                            {selectedSlotTimes.length > 0 ? (
                              selectedSlotTimes.map((slot, i) => (
                                <button
                                  type="button"
                                  key={i}
                                  onClick={() => {
                                    setPreferredFromTime(slot.start);
                                    setPreferredToTime(slot.end);
                                    setSelectedCoachIndex(index);
                                  }}
                                  className={`p-2 rounded-lg text-center ${preferredFromTime === slot.start &&
                                    selectedCoachIndex === index
                                    ? "bg-gray-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-400"
                                    }`}
                                >
                                  {slot.start}
                                </button>
                              ))
                            ) : (
                              <div className="col-span-2 text-center text-gray-500">
                                No available slots
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`justify-center mt-6 sm:mt-8 text-[12px] sm:text-[14px] p-2 align-middle py-2 px-4 bg-[#293552] text-white font-semibold hover:shadow-inner rounded-[10px] shadow-lg flex ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
