"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";

interface TrialFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  learningInterest: string;
  studentCount: string;
  preferredTeacher: string;
  referralSource: string;
  preferredDate: string;
  preferredTime: string;
}

  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua & Deps", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Rep", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo {Democratic Rep}", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland {Republic}", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea North", "Korea South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar {Burma}", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russian Federation", "Rwanda", "St Kitts & Nevis", "St Lucia", "Saint Vincent & the Grenadines", "Samoa", "San Marino", "Sao Tome & Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

export default function TrialPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TrialFormData>();

  const [step, setStep] = useState(1);
  const [phoneValue, setPhoneValue] = useState("");
  const [formValues, setFormValues] = useState<Partial<TrialFormData> | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const triggerPopup = () => {
    setShowPopup(true);
    setTimeout(() => setPopupVisible(true), 100);
  };

  const onSubmitStep1 = (data: TrialFormData) => {
    if (!phoneValue) return;
    setFormValues(data);
    setStep(2);
  };

  const onSubmitFinal = async (data: TrialFormData) => {
    const completeData = {
      ...(formValues || {}),
      ...data,
      phone: phoneValue,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(completeData),
      });

      if (res.ok) {
        triggerPopup();
        reset();
        setPhoneValue("");
        setStep(1);
      } else {
        alert("❌ Failed to send. Try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("❌ Submission error. Try again.");
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">
            Let’s begin your journey together
          </h1>
        </div>

        <div className="w-full sm:max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-6 gap-4">
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${step >= 1 ? "bg-blue-900" : "bg-gray-300"}`} />
              <span className={`text-sm mt-2 font-semibold ${step === 1 ? "text-blue-900" : "text-gray-500"}`}>Step 1</span>
            </div>
            <div className="flex-grow h-1 bg-gray-300 relative mx-2">
              <div className={`absolute top-0 left-0 h-full transition-all duration-300 ${step === 2 ? "w-full bg-blue-900" : "w-1/2 bg-blue-900"}`} />
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-4 h-4 rounded-full ${step === 2 ? "bg-blue-900" : "bg-gray-300"}`} />
              <span className={`text-sm mt-2 font-semibold ${step === 2 ? "text-blue-900" : "text-gray-500"}`}>Step 2</span>
            </div>
          </div>

          {/* Step 1 Form */}
          {step === 1 && (
            <form onSubmit={handleSubmit(onSubmitStep1)} className="grid gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-medium">First Name</label>
                  <input {...register("firstName", { required: true })} className="w-full border rounded-lg px-4 py-2 text-sm" />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">Required</p>}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Last Name</label>
                  <input {...register("lastName", { required: true })} className="w-full border rounded-lg px-4 py-2 text-sm" />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">Required</p>}
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input {...register("email", { required: true })} type="email" className="w-full border rounded-lg px-4 py-2 text-sm" />
                {errors.email && <p className="text-red-500 text-sm mt-1">Required</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-sm font-medium">Phone</label>
                  <PhoneInput
                    country={"in"}
                    value={phoneValue}
                    onChange={setPhoneValue}
                    inputProps={{ required: true }}
                    containerClass="!w-full"
                    inputClass="!w-full !h-[42px] !pl-[48px] !border !rounded-lg !text-sm"
                    buttonClass="!border !rounded-l-lg"
                  />
                  {!phoneValue && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Country</label>
                  <select {...register("country", { required: true })} className="w-full border rounded-lg px-4 py-2 text-sm">
                    <option value="">Select Country</option>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">Required</p>}
                </div>
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="px-8 py-2 rounded-full bg-blue-900 text-white">Next Step</Button>
              </div>
            </form>
          )}

          {/* Step 2 Form */}
          {step === 2 && (
            <form onSubmit={handleSubmit(onSubmitFinal)} className="grid gap-6 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3">What would you like to learn?</h3>
                <div className="flex flex-wrap gap-3">
                  {["Quran", "Islamic Studies", "Arabic", "Others"].map((val) => (
                    <label key={val}>
                      <input type="radio" value={val} {...register("learningInterest", { required: true })} className="peer hidden" />
                      <div className="peer-checked:bg-[#F4B841] peer-checked:text-white bg-[#F5F7FA] text-gray-700 px-4 py-2 rounded-full cursor-pointer font-medium transition">
                        {val}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">How many student will join?</h3>
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <label key={n}>
                      <input type="radio" value={n} {...register("studentCount", { required: true })} className="peer hidden" />
                      <div className="w-10 h-10 flex items-center justify-center rounded-full peer-checked:bg-[#F4B841] peer-checked:text-white bg-[#F5F7FA] text-gray-700 font-bold cursor-pointer transition">
                        {n}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Your preferred teacher</h3>
                <div className="flex gap-3 flex-wrap">
                  {["Male", "Female", "Either"].map((val) => (
                    <label key={val}>
                      <input type="radio" value={val} {...register("preferredTeacher", { required: true })} className="peer hidden" />
                      <div className="peer-checked:bg-[#F4B841] peer-checked:text-white bg-[#F5F7FA] text-gray-700 px-4 py-2 rounded-full cursor-pointer font-medium transition">
                        {val}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">How did your find us.</h3>
                <div className="flex gap-3 flex-wrap">
                  {["Friends", "Social Media", "Email", "Google", "Others"].map((val) => (
                    <label key={val}>
                      <input type="radio" value={val} {...register("referralSource", { required: true })} className="peer hidden" />
                      <div className="peer-checked:bg-[#F4B841] peer-checked:text-white bg-[#F5F7FA] text-gray-700 px-4 py-2 rounded-full cursor-pointer font-medium transition">
                        {val}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-1">Preferred Date</label>
                  <input type="date" {...register("preferredDate", { required: true })} className="w-full border rounded-lg px-4 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Preferred Time</label>
                  <input type="time" {...register("preferredTime", { required: true })} className="w-full border rounded-lg px-4 py-2 text-sm" />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button type="button" onClick={() => setStep(1)} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full">Previous</Button>
                <Button type="submit" className="bg-blue-900 text-white px-8 py-2 rounded-full">Submit</Button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ${popupVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center transform transition-all duration-300 scale-100">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Thank you for reaching out!</h2>
            <p className="text-gray-700 mb-4 text-sm">
              We have received your message and will get back to you as soon as possible.
              Keep an eye on your inbox for our response.
            </p>
            <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-blue-600 text-white rounded-full">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
