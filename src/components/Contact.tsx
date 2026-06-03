import React, { useState } from "react";
import { Message } from "../types";
import { Mail, Phone, MapPin, Send, Inbox, CheckCircle, Github, Linkedin, Instagram } from "lucide-react";

interface ContactProps {
  email: string;
  secondaryEmail?: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  instagram: string;
  localMessages: Message[];
  onAddNewMessage: (newMessage: Message) => void;
}

export default function Contact({
  email,
  secondaryEmail,
  phone,
  address,
  github,
  linkedin,
  instagram,
  localMessages,
  onAddNewMessage
}: ContactProps) {
  
  // Form parameters
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderBody, setSenderBody] = useState("");
  
  const [activeTab, setActiveTab] = useState<"compose" | "inbox">("compose");
  const [successBanner, setSuccessBanner] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !senderBody.trim()) return;

    onAddNewMessage({
      id: "msg_" + Date.now(),
      name: senderName.trim(),
      email: senderEmail.trim(),
      subject: senderSubject.trim() || "Work Opportunites / Collaboration",
      message: senderBody.trim(),
      date: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true })
    });

    // Reset fields & show success message
    setSenderName("");
    setSenderEmail("");
    setSenderSubject("");
    setSenderBody("");
    setSuccessBanner(true);
    setTimeout(() => setSuccessBanner(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-emerald-500/5 rounded-full filter blur-[110px]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left" id="contact-heading">
          <div className="inline-flex items-center space-x-2 text-emerald-450 font-mono text-xs tracking-wider uppercase mb-3">
            <Send className="w-3.5 h-3.5" />
            <span>Bridge parameters</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
            Contact & Inbox
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mt-4 rounded-full"></div>
        </div>

        {/* Dual channel setup: Sidebar links vs Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12" id="contact-grid">
          
          {/* Side Contacts Channels */}
          <div className="lg:col-span-2 space-y-8" id="contact-channels">
            <div className="space-y-4 text-left">
              <h3 className="text-lg font-sans font-bold text-white">Let's build together</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-sm block font-normal">
                Reach out using the contact details listed in the resume.
              </p>
            </div>

            {/* Direct parameter lists */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-emerald-445" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-zinc-550 uppercase block leading-none mb-1">Electronic Mail Address</span>
                  <a href={`mailto:${email}`} className="font-semibold text-zinc-200 hover:text-emerald-400 transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              {secondaryEmail && (
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-emerald-445" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-550 uppercase block leading-none mb-1">Academic Mail Address</span>
                    <a href={`mailto:${secondaryEmail}`} className="font-semibold text-zinc-200 hover:text-emerald-400 transition-colors">
                      {secondaryEmail}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-455" />
                </div>
                <div className="text-left font-sans">
                  <span className="text-[10px] font-mono text-zinc-550 uppercase block leading-none mb-1">Direct Hotline</span>
                  <a href={`tel:${phone}`} className="font-semibold text-zinc-200 hover:text-cyan-400 transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              {address && (
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-indigo-405" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-550 uppercase block leading-none mb-1">Base Location Coordinates</span>
                    <span className="font-semibold text-zinc-200">{address}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Social Anchor badging */}
            <div className="pt-4 border-t border-zinc-900 space-y-3">
              <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest block">Core Network Registers:</span>
              
              <div className="flex items-center space-x-4">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-1.5 rounded bg-zinc-90 w-fit text-[11px] font-mono text-zinc-400 hover:text-white border border-zinc-850 hover:border-zinc-700 transition-all">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-1.5 rounded bg-zinc-90 w-fit text-[11px] font-mono text-zinc-400 hover:text-emerald-450 border border-zinc-850 hover:border-zinc-700 transition-all">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 px-3 py-1.5 rounded bg-zinc-90 w-fit text-[11px] font-mono text-zinc-400 hover:text-rose-450 border border-zinc-850 hover:border-zinc-700 transition-all">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form Composer Workspace */}
          <div className="lg:col-span-3 flex flex-col space-y-4" id="contact-workspace">
            
            {/* Inbox navigation toggles */}
            <div className="flex items-center space-x-2 bg-zinc-900/60 p-1 rounded-xl border border-zinc-850 self-start">
              <button
                onClick={() => setActiveTab("compose")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide flex items-center space-x-1.5 cursor-pointer ${
                  activeTab === "compose"
                    ? "bg-zinc-950 text-white shadow-md border border-zinc-800"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Write Message</span>
              </button>

              <button
                onClick={() => setActiveTab("inbox")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide flex items-center space-x-1.5 cursor-pointer ${
                  activeTab === "inbox"
                    ? "bg-zinc-950 text-white shadow-md border border-zinc-800"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Inbox className="w-3.5 h-3.5" />
                <span>Incoming Sandbox ({localMessages.length})</span>
              </button>
            </div>

            {/* Compose View */}
            {activeTab === "compose" ? (
              <form onSubmit={handleSendMessage} className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-855 shadow-sm space-y-4">
                
                {/* Success Banner */}
                {successBanner && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center space-x-3 text-xs mb-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-450" />
                    <div>
                      <span className="font-bold block">Transmission Successful!</span>
                      <span>Your message has been received on the local slate. Flip to the Sandbox tab to see it!</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase font-bold">Your Name</label>
                    <input
                      type="text" required placeholder="John Doe"
                      value={senderName} onChange={e => setSenderName(e.target.value)}
                      className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase font-bold">Your Mail Address</label>
                    <input
                      type="email" required placeholder="john@company.com"
                      value={senderEmail} onChange={e => setSenderEmail(e.target.value)}
                      className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase font-bold">Subject matter</label>
                  <input
                    type="text" placeholder="Venture Partnership / Cloud Contract"
                    value={senderSubject} onChange={e => setSenderSubject(e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase font-bold">Message Details</label>
                  <textarea
                    rows={4} required placeholder="State your objective, parameters, and time scales..."
                    value={senderBody} onChange={e => setSenderBody(e.target.value)}
                    className="w-full text-xs text-white bg-zinc-950 border border-zinc-805 rounded-xl px-3 py-2.5 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white flex items-center justify-center space-x-2 shadow-md shadow-emerald-500/5 cursor-pointer select-none active:scale-98 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Secure Message</span>
                </button>
              </form>
            ) : (
              /* Local Inbox Sandbox View */
              <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-855 shadow-sm space-y-4 max-h-[450px] overflow-y-auto">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 border-b border-zinc-850 pb-2 flex items-center justify-between">
                  <span>Inbox Sandbox Dashboard</span>
                  <span className="text-[10px] font-semibold text-emerald-450 bg-emerald-500/5 px-2 rounded-full border border-emerald-500/10">Simulated Reader Live</span>
                </h4>

                <div className="space-y-4">
                  {localMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 flex flex-col space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                        <div>
                          <span className="text-xs font-bold text-zinc-150 block">{msg.name}</span>
                          <span className="text-[9px] font-mono text-zinc-500 block">{msg.email}</span>
                        </div>
                        <span className="text-[9px] font-mono text-zinc-500">{msg.date}</span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-650 uppercase block font-bold">Subject: {msg.subject}</span>
                        <p className="text-xs text-zinc-400 font-sans leading-relaxed text-left pl-3 border-l border-emerald-500">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  ))}

                  {localMessages.length === 0 && (
                    <div className="text-center py-12 text-zinc-550 flex flex-col items-center justify-center space-y-2">
                      <Inbox className="w-8 h-8 text-zinc-650" />
                      <span className="text-xs font-bold">Your Slate Inbox is Empty right now.</span>
                      <p className="text-[11px] text-zinc-500 max-w-xs font-normal">
                        Submit the contact form on the left to see your transmissions live here. No active server keys required.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
