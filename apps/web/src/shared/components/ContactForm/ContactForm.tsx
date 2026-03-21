import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\s-]{10,}$/, "Invalid phone number")
    .required("Phone number is required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      city: "",
      state: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      setTimeout(() => {
        setSubmitted(true);
        setCountdown(10);
        formik.setSubmitting(false);
        formik.resetForm();
      }, 1200);
    },
  });

  // Countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (submitted && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (submitted && countdown === 0) {
      setSubmitted(false);
      setCountdown(10);
    }
    return () => clearInterval(timer);
  }, [submitted, countdown]);

  return (
    <div className="w-full">
      {submitted ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-16 gap-4"
        >
          <div className="w-16 h-16 rounded-full bg-[#588d58]/15 flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-[#588d58]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0a2e29]">Application sent!</h2>
          <p className="text-slate-600">Thank you for joining our community. We'll reach out to you shortly.</p>
          <div className="mt-4 px-4 py-2 rounded-full text-primary text-lg font-bold ">
            Redirecting in {countdown}s...
          </div>
        </motion.div>
      ) : (
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6 w-full">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">First Name*</label>
              <input
                type="text"
                placeholder="First Name"
                {...formik.getFieldProps("firstName")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                  formik.touched.firstName && formik.errors.firstName ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.firstName}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">Last Name*</label>
              <input
                type="text"
                placeholder="Last Name"
                {...formik.getFieldProps("lastName")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                  formik.touched.lastName && formik.errors.lastName ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.lastName}</span>
              )}
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">Email</label>
              <input
                type="email"
                placeholder="you@gmail.com"
                {...formik.getFieldProps("email")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                  formik.touched.email && formik.errors.email ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.email}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">Phone*</label>
              <input
                type="tel"
                placeholder="+91 XXX XXX XXX"
                {...formik.getFieldProps("phone")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                  formik.touched.phone && formik.errors.phone ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.phone && formik.errors.phone && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.phone}</span>
              )}
            </div>
          </div>

          {/* Additional Fields - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">Date of Birth*</label>
              <input
                type="date"
                {...formik.getFieldProps("dob")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 appearance-none ${
                    formik.touched.dob && formik.errors.dob ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.dob && formik.errors.dob && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.dob}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">Gender*</label>
              <select
                {...formik.getFieldProps("gender")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 appearance-none cursor-pointer ${
                    formik.touched.gender && formik.errors.gender ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {formik.touched.gender && formik.errors.gender && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.gender}</span>
              )}
            </div>
          </div>

          {/* Address Fields - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">City*</label>
              <input
                type="text"
                placeholder="City"
                {...formik.getFieldProps("city")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                    formik.touched.city && formik.errors.city ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.city && formik.errors.city && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.city}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">State / Province*</label>
              <input
                type="text"
                placeholder="State"
                {...formik.getFieldProps("state")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                    formik.touched.state && formik.errors.state ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.state && formik.errors.state && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.state}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#0a2e29]">Country*</label>
              <input
                type="text"
                placeholder="Country"
                {...formik.getFieldProps("country")}
                className={`w-full h-12 rounded-lg bg-[#eff6f1] border-none px-4 text-sm focus:ring-2 transition-all outline-none text-slate-700 ${
                    formik.touched.country && formik.errors.country ? "ring-2 ring-red-500/20" : "focus:ring-[#588d58]/20"
                }`}
              />
              {formik.touched.country && formik.errors.country && (
                <span className="text-xs text-red-500 font-medium px-1">{formik.errors.country}</span>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="mt-2 w-full h-14 bg-primary hover:bg-primary/80 text-white font-bold rounded-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {formik.isSubmitting ? (
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : "Join the Team"}
          </button>

          {/* Important Information */}
          {/* <div className="mt-8 border-t border-slate-100 pt-8">
            <h3 className="text-primary font-bold mb-4">Important Information</h3>
            <ul className="space-y-3">
              {[
                "You'll receive a confirmation email shortly.",
                "We'll send a reminder email one day before the event.",
                "Please bring a water bottle and comfortable shoes."
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-500 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div> */}
        </form>
      )}
    </div>
  );
}
