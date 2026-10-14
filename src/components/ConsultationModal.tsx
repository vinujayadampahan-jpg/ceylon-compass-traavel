import React, { useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timeSlot, setTimeSlot] = useState('Tomorrow 2:00 PM GMT');
  const [topics, setTopics] = useState<string[]>(['Tea Estates & Slow Rail']);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleTopic = (t: string) => {
    if (topics.includes(t)) {
      setTopics(topics.filter((item) => item !== t));
    } else {
      setTopics([...topics, t]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onSuccess(`Consultation booked with Colombo Itinerary Specialist for ${name}`);
      onClose();
      setSubmitted(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#012d1d]/15 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0f5f0] hover:bg-[#ebefea] text-[#181d1a] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        <div className="mb-5">
          <span className="text-xs uppercase tracking-widest text-[#765a05] font-bold block mb-1">
            Private Consultation
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#012d1d]">
            Schedule 1-on-1 Itinerary Design
          </h3>
          <p className="text-xs sm:text-sm text-[#414844] mt-1">
            Complimentary 30-minute video or telephone session with our Colombo private itinerary architect.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 text-center bg-[#c1ecd4] text-[#002114] rounded-xl border border-[#86af99] space-y-2">
            <span className="material-symbols-outlined text-4xl text-emerald-800">
              event_available
            </span>
            <h4 className="font-serif text-xl font-bold">Consultation Confirmed</h4>
            <p className="text-xs max-w-sm mx-auto">
              Calendar invitation dispatched to {email}. We look forward to designing your bespoke journey.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lord / Lady / Dr. / Mr. / Ms."
                className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voyager@domain.com"
                className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1">
                Preferred Appointment Time
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-[#f0f5f0] border border-[#c1c8c2] rounded-lg p-2.5 text-xs sm:text-sm text-[#181d1a] outline-none focus:ring-2 focus:ring-[#012d1d]"
              >
                <option value="Today 4:00 PM GMT">Today 4:00 PM GMT</option>
                <option value="Tomorrow 10:00 AM GMT">Tomorrow 10:00 AM GMT</option>
                <option value="Tomorrow 2:00 PM GMT">Tomorrow 2:00 PM GMT</option>
                <option value="Thursday 3:30 PM GMT">Thursday 3:30 PM GMT</option>
                <option value="Friday 11:00 AM GMT">Friday 11:00 AM GMT</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-bold text-[#181d1a] block mb-1.5">
                Key Subjects of Interest
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Tea Estates & Slow Rail',
                  'Sigiriya Pre-Dawn Access',
                  'Private Catamaran Whale Watching',
                  'Geoffrey Bawa Architecture',
                  'Yala Leopard Safari Block 1',
                  'Ayurvedic Forest Retreats',
                ].map((topic) => (
                  <button
                    type="button"
                    key={topic}
                    onClick={() => toggleTopic(topic)}
                    className={`px-2.5 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                      topics.includes(topic)
                        ? 'bg-[#1b4332] text-white font-semibold'
                        : 'bg-[#f0f5f0] text-[#414844] hover:bg-[#ebefea]'
                    }`}
                  >
                    {topics.includes(topic) ? '✓ ' : '+ '}
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#012d1d] hover:bg-[#1b4332] text-white py-3 rounded-lg text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                Confirm Private Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
