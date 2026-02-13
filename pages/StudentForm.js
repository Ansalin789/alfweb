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
import { Package, CreditCard } from "lucide-react";


function FloatingPhoneInput({
  label,
  value,
  onChange,
  country,
  ...props
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || (value && String(value).length > 0);

  return (
    <div className="relative w-full">
      <PhoneInput
        country={country}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        inputClass="w-full rounded-md border border-gray-300 bg-white pt-4 pb-[20px] text-sm
                   focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        containerClass="w-full"
        buttonStyle={{
          backgroundColor: "rgb(249,250,251)",
          borderColor: "#d1d5db",
          borderRadius: "8px 0 0 8px",
        }}
        inputStyle={{
          width: "100%",
          borderColor: "#d1d5db",
          borderRadius: "8px",
          paddingLeft: "48px"
        }}
        placeholder=" "
        {...props}
      />
      <label
        className={`absolute left-[48px] bg-white px-1 text-sm transition-all duration-200 ease-in-out pointer-events-none z-10
          ${isFloating
            ? "top-[-8px] scale-90 text-blue-600 left-3"
            : "top-3 text-gray-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
}


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
};


function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  required,
  minLength,
}) {
  const [focused, setFocused] = useState(false);

  const isFloating = focused || value?.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 pt-3 pb-2 text-sm
                   focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />

      <label
        className={`absolute left-3 bg-white px-1 text-sm transition-all duration-200 ease-in-out
          ${isFloating
            ? "top-[-8px] scale-90 text-blue-600"
            : "top-3 text-gray-400"}
        `}
      >
        {label}
      </label>
    </div>
  );
}



function FloatingSelect({ label, value, onChange, children, className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      <select
        value={value}
        onChange={onChange}
        className="peer w-full rounded-md border border-gray-300 bg-white px-3 pt-[13px] pb-[12px] text-sm
                   focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        {children}
      </select>
      {/* <label
          className="absolute left-3 -top-2.5 bg-white px-1 text-sm text-blue-500 transition-all
                   peer-focus:text-blue-600"
        >
          {label}
        </label> */}
    </div>
  );
}


const steps = [
  { label: "Basic Details" },
  { label: "Let's get Started" },
  { label: "Booking Details", icon: Package },
];


function ProgressSidebar({ step }) {
  return (
    <div className="hidden md:flex w-[360px] 
bg-gradient-to-br from-[#D6DBF5] to-[#F4F7FF]
rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] 
p-8 flex-col justify-between border-[#fff] border-8"
>

      <div className="space-y-12 mt-4">
        {steps.map((item, index) => {
          const s = index + 1;
          const active = step === s;
          const completed = step > s;
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-start gap-4">

              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-11 h-11 flex items-center justify-center rounded-full border-2 transition-all
                    ${completed ? "bg-emerald-500 border-emerald-500 text-white" : ""}
                    ${active && !completed ? "border-blue-600 text-blue-600 bg-blue-50" : ""}
                    ${!active && !completed ? "border-gray-300 text-gray-400 bg-white" : ""}
                  `}
                >
                  {completed ? (
                    "✓"
                  ) : Icon && active ? (
                    <Icon size={18} />
                  ) : (
                    <span className="font-semibold">{s}</span>
                  )}
                </div>

                {index !== steps.length - 1 && (
                  <div
                    className={`w-[2px] h-16 mt-1 ${completed ? "bg-emerald-500" : "bg-gray-100"
                      }`}
                  />
                )}
              </div>

              <div>
                <p className="text-[11px] tracking-wide text-gray-400 font-medium">
                  STEP {s}
                </p>
                <p
                  className={`text-[15px] font-semibold mt-1 ${active
                    ? "text-blue-700"
                    : completed
                      ? "text-gray-800"
                      : "text-gray-400"
                    }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border rounded-xl p-4 flex items-center gap-4 shadow-sm">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-800 shadow-lg text-gray-800">
          ?
        </div>
        <div>
          <p className="text-xs text-gray-400">Having troubles?</p>
<p
  className="font-semibold text-gray-800 text-sm cursor-pointer"
  onClick={() => {
    window.location.href = "tel:9099898878";
  }}
>
  Contact Us
</p>
        </div>
      </div>
    </div>
  );
}

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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const [learningInterest, setLearningInterest] = useState([]);
  const [iqraUsageOther, setIqraUsageOther] = useState("");
  const [preferredTeacher, setPreferredTeacher] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [referralSourceOther, setReferralSourceOther] = useState("");
  const [availableCoaches, setAvailableCoaches] = useState([]);
  const [selectedCoachId, setSelectedCoachId] = useState(null);
  const [allSlots, setAllSlots] = useState([]);
  const [selectedCoachIndex, setSelectedCoachIndex] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [openSlotIndex, setOpenSlotIndex] = useState(null);
  const [preferredFromTime, setPreferredFromTime] = useState(null);
  const [preferredToTime, setPreferredToTime] = useState(null);

  const [selectedSlotTimes, setSelectedSlotTimes] = useState(null);

  const [selectedACId, setSelectedACId] = useState(null);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [familyId, setFamilyId] = useState("");
  const [familyEmail, setFamilyEmail] = useState("");

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);
  useEffect(() => {
    if (!country) {
      setStates([]);
      setState("");
      setCities([]);
      setCity("");
      return;
    }

    const selectedCountry = countries.find(
      (c) => c.name === country || c.isoCode === country
    );

    if (selectedCountry) {
      const allStates = State.getStatesOfCountry(selectedCountry.isoCode);
      setStates(allStates);

      setState("");   // reset state
      setCities([]);  // reset cities
      setCity("");
    }
  }, [country, countries]);


  useEffect(() => {
    if (!state || !country) {
      setCities([]);
      setCity("");
      return;
    }

    const selectedCountry = countries.find(
      (c) => c.name === country || c.isoCode === country
    );

    const selectedState = states.find(
      (s) => s.name === state || s.isoCode === state
    );

    if (selectedCountry && selectedState) {
      const stateCities = City.getCitiesOfState(
        selectedCountry.isoCode,
        selectedState.isoCode
      );

      setCities(stateCities.map((city) => city.name));
      setCity("");
    }
  }, [state, country, states]);


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
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return specialChars + randomNum;
  };

  const [referral, setReferral] = useState(generateReferralId());

  /**
   * Handles phone number changes
   * @param {string} value - The phone number value
   * @param {PhoneChangeData} data - The phone change data object
   */


  const handlePhoneChange = (value, data) => {
    setPhoneNumber(value);
    // Optional: update country code if needed using data.countryCode
    // setCountryCode(data.countryCode); 
  };
  /**
   * Handles date changes
   * @param {Value} value - The selected date value
   */
  const handleDateChange = (value) => {
    if (value instanceof Date) {
      setStartDate(value);
      setToDate(value);

      const formattedDate = value.toISOString().split("T")[0];

      loadAvailableTimes(formattedDate);
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
    return (
      learningInterest.length > 0 &&
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
      const v1 = validateStep1();
      if (!v1.isValid) {
        // alert(`Please check Step 1: ${v1.field}`);
        setIsLoading(false);
        setStep(1);
        return;
      }

      if (!validateStep2()) {
        // alert("Please complete all fields in Step 2");
        setIsLoading(false);
        setStep(2);
        return;
      }

      const v3 = validateStep3();
      if (!v3) {
        // alert("Please select a date, a coach slot, and a time.");
        setIsLoading(false);
        return;
      }
      function formatDateLocal(date) {
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

      console.log("Sending data:", formattedData);
      const response = await fetch(
        `https://api.blackstoneinfomaticstech.com/student`,
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

  const calculatePreferredToTime = (fromTime) => {
    for (const coach of allSlots) {
      const match = coach.availableSlots.find(
        (slot) => slot.start === fromTime
      );
      if (match) return match.end;
    }
    return ""; // fallback
  };


  useEffect(() => {
    const timeZones = Intl.supportedValuesOf("timeZone");
    setTimeZones(timeZones);
  }, []);

  const [timeZones, setTimeZones] = useState([]);

  const handleFamilyIdChange = (e) => {
    const id = e.target.value.trim();

    setFormData((prev) => ({
      ...prev,
      familyId: id,
    }));

    if (!id) {
      setFormData((prev) => ({
        ...prev,
        familyEmail: "",
      }));
      return;
    }

    const match = studentList.find(
      (item) => item.familyId?.toLowerCase() === id.toLowerCase()
    );

    if (match) {
      setFormData((prev) => ({
        ...prev,
        familyEmail: match.familyEmail || "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        familyEmail: "",
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
    axios.get("https://api.blackstoneinfomaticstech.com/studentlist")
      .then((res) => {
        setStudentList(res.data.students);
      }).catch((err) => console.log(err));
  }, []);
  const [formData, setFormData] = useState({
    familyId: "",
    familyEmail: "",
  });







  return (
    <div className="min-h-screen bg-[#E9EFFF] flex px-4 py-2 sm:p-4 gap-8">

      {/* LEFT PROGRESS */}
      <ProgressSidebar step={step} />

      {/* RIGHT FORM AREA */}
      <div className="flex-1 bg-white p-4 sm:p-6 bg-gradient-to-br from-[#D6DBF5] to-[#F4F7FF]
rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-[#fff] border-8">
        <form onSubmit={handleSubmit} className="p-2 bg-[#fff] rounded-2xl">
          {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <div>
              <div className="flex justify-center p-3 gap-2">
                <Image
                  src="/assets/img/blackstoneAcademy.png"
                  width={150}
                  height={150}
                  alt="logo"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 p-3">
                <FloatingInput label="First Name" value={firstName || ""} onChange={(e) => setFirstName(e.target.value)} required minLength={3} />
                <FloatingInput label="Last Name" value={lastName || ""} onChange={(e) => setLastName(e.target.value)} required minLength={3} />
                <FloatingInput label="Email" value={email || ""} onChange={(e) => setEmail(e.target.value)} required minLength={3} />

                <FloatingSelect label="Gender" value={gender || ""} onChange={(e) => setGender(e.target.value)} required>
                  <option value="" className="-mt-10">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </FloatingSelect>

                <FloatingPhoneInput
                  label="Phone Number"
                  value={phoneNumber ? String(phoneNumber) : ""}
                  onChange={handlePhoneChange}
                  country={countryCode.toLowerCase()}
                />

                <FloatingSelect label="Country" value={country} onChange={(e) => {
                  const selectedCountry = countries.find((c) => c.name === e.target.value);
                  setCountry(e.target.value);
                  if (selectedCountry) {
                    setCountryCode(selectedCountry.phonecode);
                  }
                }} required>
                  <option value="">Select Country</option>
                  {countries.map((c) => (<option key={c.isoCode} value={c.name}> {c.name} </option>))}
                </FloatingSelect>
                <FloatingSelect label="State" value={state} onChange={(e) => setState(e.target.value)} required>
                  <option value="">Select State</option>
                  {states.map((c) => (<option key={c.isoCode} value={c.name}> {c.name} </option>))}
                </FloatingSelect>

                <FloatingSelect label="City" value={city} onChange={(e) => setCity(e.target.value)} required>
                  <option value="">Select a city</option>
                  {cities.map((cityName) => (<option key={cityName} value={cityName}> {cityName} </option>))}
                </FloatingSelect>

                <FloatingInput label="Referred by" value={refernceby ?? ''} onChange={(e) => setReferral(e.target.value)} required readOnly />

                <FloatingInput label="Your Referral Code" value={referral ?? ''} onChange={(e) => setReferral(e.target.value)} required readOnly />
                <FloatingSelect label="Time Zone" value={timeZone} onChange={(e) => setTimeZone(e.target.value)} required className="sm:col-span-2">
                  <option value="">Select Time Zone</option>
                  {timeZones.map((tz) => (<option key={tz} value={tz}> {tz} </option>))}
                </FloatingSelect>

                <div>
                  <div>
                    <span
                      className="flex text-sm items-center gap-2 cursor-pointer text-[#293552]"
                      onClick={() => {
                        setIsActive(!isActive);

                        if (!isActive) {
                          setFamilyEmail("");
                          setFamilyId("");
                        } else {
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
                  <div>
                    {isActive && (
                      <div className="mt-3">
                        <FloatingInput label="Family Id" value={formData.familyId} onChange={handleFamilyIdChange} required />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="mt-9">
                    <FloatingInput label="Family Email Id" value={formData.familyEmail} onChange={(e) =>
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
                <button type="button" onClick={nextStep}
                  className="px-6 py-2 bg-[#293552] text-white rounded-lg shadow-lg">
                  Next
                </button>
              </div>
            </div>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <div className="">

              {/* Back */}
              <button
                type="button"
                onClick={prevStep}
                className="text-gray-500 text-[12px] mb-4 hover:text-[#293552]"
              >
                ← Back
              </button>

              {/* ===== Section 1 ===== */}
              <h2 className="text-[14px] font-bold text-center text-[#293552] mb-2">
                What will you use AL Furqan for?
              </h2>
              <p className="text-center text-[11px] text-gray-500 mb-4">
                Choose your primary learning interest
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8 px-10">
                {["Quran", "Islamic Studies", "Arabic"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setLearningInterest([option])}
                    className={`rounded-xl p-4 text-center transition-all duration-300 border
          ${learningInterest[0] === option
                        ? "bg-[#0c13752e] border-[#293552] shadow-md scale-[1.02]"
                        : "bg-white border-gray-200 hover:border-[#293552]"
                      }`}
                  >
                    <span className="block text-[11px] font-semibold text-[#293552]">
                      {option}
                    </span>
                  </button>
                ))}
              </div>

              {/* ===== Section 2 ===== */}
              <h2 className="text-[14px] font-bold text-center text-[#293552] mb-2">
                Preferred Teacher
              </h2>
              <p className="text-center text-[11px] text-gray-500 mb-4">
                Select your comfort preference
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 px-10">
                {["Male", "Female"].map((preference) => (
                  <button
                    key={preference}
                    onClick={() => setPreferredTeacher(preference)}
                    className={`rounded-xl p-4 transition-all duration-300 border
          ${preferredTeacher === preference
                        ? "bg-[#0c13752e] border-[#293552] shadow-md"
                        : "bg-white border-gray-200 hover:border-[#293552]"
                      }`}
                  >
                    <span className="text-[12px] font-semibold text-[#293552]">
                      {preference}
                    </span>
                  </button>
                ))}
              </div>

              {/* ===== Section 3 ===== */}
              <h2 className="text-[14px] font-bold text-center text-[#293552] mb-2">
                How did you hear about us?
              </h2>
              <p className="text-center text-[11px] text-gray-500 mb-4">
                Helps us improve our outreach
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4 px-10">
                {["Friend", "Social Media", "E-Mail", "Google", "Other"].map((source) => (
                  <button
                    key={source}
                    onClick={() => setReferralSource(source)}
                    className={`rounded-xl p-3 transition-all duration-300 border text-[10px]
          ${referralSource === source
                        ? "bg-[#0c13752e] border-[#293552] shadow-md"
                        : "bg-white border-gray-200 hover:border-[#293552]"
                      }`}
                  >
                    {source}
                  </button>
                ))}
              </div>

              {/* Other input */}
              {referralSource === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify..."
                  value={referralSourceOther}
                  onChange={(e) => setReferralSourceOther(e.target.value)}
                  className="w-full p-3 text-[12px] rounded-lg border border-gray-300 bg-gray-50
                   focus:outline-none focus:ring-1 focus:ring-[#293552]"
                />
              )}

              {/* ===== CTA ===== */}
              <div className="flex justify-center mt-8">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-3 bg-[#293552] text-white text-[14px]
                   rounded-xl shadow-lg hover:scale-[1.03] transition-all"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}


          {/* ================= STEP 3 ================= */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 p-4 mt-10">
              {/* Header & Back Button */}
              <div className="flex items-center justify-between mb-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-500 hover:text-[#293552] transition-colors flex items-center gap-2 group text-sm font-medium"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                </button>
                <h2 className="text-[16px] font-bold text-[#293552] pr-12 sm:pr-0">
                  Select Date & Time
                </h2>
                <div className="hidden sm:block w-12" />
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Column: Calendar */}
                <div className="flex-1 w-full max-w-[400px] mx-auto lg:mx-0">
                  <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100">
                    <style dangerouslySetInnerHTML={{
                      __html: `
                        .react-calendar {
                          width: 100% !important;
                          background-color: white !important;
                          border: none !important;
                          font-family: inherit !important;
                        }
                        .react-calendar__navigation button {
                          color: #293552 !important;
                          min-width: 44px !important;
                          background: none !important;
                          font-size: 16px !important;
                          font-weight: 600 !important;
                        }
                        .react-calendar__navigation button:enabled:hover,
                        .react-calendar__navigation button:enabled:focus {
                          background-color: #f3f4f6 !important;
                          border-radius: 8px !important;
                        }
                        .react-calendar__month-view__weekdays {
                          text-align: center !important;
                          text-transform: uppercase !important;
                          font-weight: 600 !important;
                          font-size: 10px !important;
                          color: #9ca3af !important;
                          margin-bottom: 8px !important;
                        }
                       .react-calendar__year-view .react-calendar__tile, 
                       .react-calendar__decade-view .react-calendar__tile, 
                       .react-calendar__century-view .react-calendar__tile {
                          padding: 1.5em 0.5em !important;
                        }
                        .react-calendar__tile {
                          padding: 12px 6px !important;
                          background: none !important;
                          text-align: center !important;
                          line-height: 16px !important;
                          font-size: 12px !important;
                          font-weight: 500 !important;
                          color: #374151 !important;
                          border-radius: 8px !important;
                          transition: all 0.2s !important;
                        }
                        .react-calendar__tile:enabled:hover,
                        .react-calendar__tile:enabled:focus {
                          background-color: #eff6ff !important;
                          color: #fff !important;
                        }
                        .react-calendar__tile--now {
                          background: #f3f4f6 !important;
                          color: #293552 !important;
                        }
                        .react-calendar__tile--active {
                          background: #293552 !important;
                          color: white !important;
                          box-shadow: 0 4px 12px rgba(41, 53, 82, 0.3) !important;
                        }
                        .react-calendar__tile--active:enabled:hover,
                        .react-calendar__tile--active:enabled:focus {
                          background: #293552 !important;
                        }
                        .react-calendar__tile--sunday {
                          color: #ef4444 !important;
                        }
                        .react-calendar__tile--active.react-calendar__tile--sunday {
                          color: white !important;
                        }
                      `
                    }} />
                    <Calendar
                      onChange={handleDateChange}
                      value={startDate}
                      tileDisabled={isTileDisabled}
                      minDate={new Date()}
                      view="month"
                      tileClassName={({ date }) => date.getDay() === 0 ? 'react-calendar__tile--sunday' : null}
                      prevLabel={<span className="text-xl">‹</span>}
                      nextLabel={<span className="text-xl">›</span>}
                    />
                  </div>
                </div>

                {/* Right Column: Available Slots */}
                <div className="flex-1 w-full min-w-0">
                  <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-3 px-4 h-full max-h-[450px] min-h-[320px] flex flex-col overflow-hidden">
                    <h3 className="text-sm font-bold text-[#293552] mb-4 flex-shrink-0">
                      <span className="flex items-center gap-2">
                        Available Slots
                        <span className="text-[10px] font-normal text-gray-500 bg-gray-50 px-2 py-0.5 rounded-md">
                          {startDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                        </span>
                      </span>
                    </h3>

                    <div className="overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar flex-1 min-h-0 space-y-3">
                      <style jsx>{`
                        .custom-scrollbar::-webkit-scrollbar {
                          width: 6px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                          background: #f3f4f6;
                          border-radius: 10px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                          background-color: #d1d5db;
                          border-radius: 10px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                          background-color: #9ca3af;
                        }
                      `}</style>

                      {availableTimes.length === 0 ? (
                        <div className="flex flex-col items-center justify-center text-gray-400 text-xs">
                          <p>No slots available for this date.</p>
                          <p>Please try selecting another date.</p>
                        </div>
                      ) : (
                        availableTimes.map((coach, index) => (
                          <div
                            key={coach.academicCoachId || index}
                            className={`border rounded-xl transition-all duration-300 ${openSlotIndex === index
                              ? "border-[#293552] bg-blue-50/30 shadow-sm"
                              : "border-gray-100 bg-gray-50 hover:border-gray-300"
                              }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleSlot(index)}
                              className="w-full flex items-center justify-between p-3  text-left"
                            >
                              <span className={`text-xs font-semibold ${openSlotIndex === index ? "text-[#293552]" : "text-gray-600"}`}>
                                Coach Slot {index + 1}
                              </span>
                              <div className={`transition-transform duration-300 ${openSlotIndex === index ? "rotate-180" : ""}`}>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 1L5 5L9 1" stroke={openSlotIndex === index ? "#293552" : "#9CA3AF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </button>

                            <div
                              className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${openSlotIndex === index ? "max-h-36" : "max-h-0"
                                }`}
                            >
                              <div className="p-2 overflow-y-auto max-h-40 overflow-scroll scrollbar-none custom-scrollbar mb-2 grid grid-cols-4 gap-2">
                                {selectedSlotTimes && selectedSlotTimes.length > 0 ? (
                                  selectedSlotTimes.map((slot, i) => (
                                    <button
                                      type="button"
                                      key={i}
                                      onClick={() => {
                                        setPreferredFromTime(slot.start);
                                        setPreferredToTime(slot.end);
                                        setSelectedCoachIndex(index);
                                      }}
                                      className={`
                                        py-2 px-3 rounded-lg text-xs font-medium transition-all
                                        ${preferredFromTime === slot.start && selectedCoachIndex === index
                                          ? "bg-[#293552] text-white shadow-md"
                                          : "bg-white text-gray-600 border border-gray-200 hover:border-[#293552] hover:text-[#293552]"
                                        }
                                      `}
                                    >
                                      {slot.start}
                                    </button>
                                  ))
                                ) : (
                                  <div className="col-span-2 text-center py-4 text-xs text-gray-400 font-medium bg-white rounded-lg border border-dashed border-gray-200">
                                    All booked up!
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Action */}
              <div className="flex justify-center mt-10">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-[#293552] text-white rounded-xl shadow-lg 
                    text-sm font-semibold transition-all duration-300 
                    disabled:opacity-70 disabled:cursor-not-allowed
                    hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                  `}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Procssing...</span>
                    </div>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div >
    </div >
  );
};


export default MultiStepForm;
