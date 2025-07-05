import './Appointment.css';
import React, { useState } from 'react';

export default function Appointment() {
const [formData, setFormData] = useState({
  name: '',
  phone: '',
  date: '',
  timeRange: '',
  details: '',
});
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
};
const [step, setStep] = useState(1);
const handleNextStep = () => {
  if (step < 5) {
    setStep(step + 1);
  } else {
    console.log("Final form submitted:", formData);
  }
};
const handlePrevStep = () => {
  if (step > 1) {
    setStep(step - 1);
  }
};
const handleChange = (field: string, value: string) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
};
  return (
    <div className="appointment-container">
        <h1>Book Your Appointment</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            </label>
            <label>
            Phone:
            <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            </label>
            <label>
            Select Date:
            <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            </label>
            <label>
            Select Time:
            <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
                <option value="">Select a time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
            </select>
            </label>
            <label>
            Additional Details:
            <textarea
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            />
            </label>
            <button type="submit">Submit Appointment</button>
        </form>
    </div>
  );
}