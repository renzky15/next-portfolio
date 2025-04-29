import React, { useState } from "react";
import { useRouter } from "next/router";
import Banner from "@/components/ui/Banner";
import { Roboto_Flex } from "next/font/google";
import { IonIcon } from "@ionic/react";
import { mail } from "ionicons/icons";
import Image from "next/image";

const inter = Roboto_Flex({ weight: "800", subsets: ["latin"] });

const LandingPage: React.FC<{}> = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSendEmail = async () => {
    setLoading(true); // Show spinner
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: "I wanna hire you!",
        ...formData,
      }),
    });
    setLoading(false);
    alert("Thanks! We've triggered an email — check your inbox.");
    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
      <>
        <div className="content">
          <div className="flex justify-between items-center gap-20 w-full">
            <div className={`flex flex-col gap-5`}>
              <div className={`flex gap-5 ${inter.className}`}>
                <h1 className="text-title text-white">Hi, I&apos;m</h1>
                <div>
                  <h1 className="text-title text-primary">Renz Owen Santillan</h1>
                </div>
              </div>
              <h1 className={`text-white text-3xl ${inter.className}`}>
                — a sleepless{" "}
                <span className="text-primary">Frontend Developer</span>{" "}
                passionate about crafting modern web experiences with JavaScript
                frameworks like React and Vue.
              </h1>
              <p className="text-grey text-2xl text-justify">
                I&apos;m excited to share my portfolio — a reflection of my
                passion for web development and commitment to excellence. I&apos;m
                ready to take on new challenges, crafting innovative web solutions
                that create real impact. Let&apos;s collaborate and bring your
                ideas to life!
              </p>
              <div className="mt-3">
                <button
                    onClick={() => setShowModal(true)}
                    className="group bg-transparent border-4 border-primary px-5 py-3 flex justify-center gap-2 items-center text-[#f2a93c] text-xl transition duration-200 ease-in-out hover:bg-primary  hover:text-white"
                >
                  <IonIcon
                      className="stroke-current text-[#f2a93c] group-hover:text-white text-xl transition duration-200 ease-in-out"
                      icon={mail}
                  />
                  renzowensantillan@gmail.com
                </button>

              </div>
            </div>
            <div className="overflow-hidden rounded w-full">
              <Image
                  alt={"me"}
                  src="/static/img/me.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto object-center"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {/* Modal Backdrop */}
        {showModal && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out">
              {/* Modal Content */}
              <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-2xl transform transition-all duration-300 ease-in-out scale-100 opacity-100">
                <div className={`transition-opacity ${loading ? "opacity-40" : "opacity-100"} space-y-5`}>
                <h2 className="text-2xl font-bold mb-4 text-primary">Send me a message</h2>
                  <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className={`w-full mb-1 p-2 border rounded ${errors.name ? "border-red-500" : ""}`}
                      value={formData.name}
                      onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

                  <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className={`w-full mb-1 p-2 border rounded ${errors.email ? "border-red-500" : ""}`}
                      value={formData.email}
                      onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

                  <textarea
                      name="message"
                      placeholder="Your message"
                      rows={4}
                      className={`w-full mb-1 p-2 border rounded ${errors.message ? "border-red-500" : ""}`}
                      value={formData.message}
                      onChange={handleChange}
                  />
                  {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}

                  <div className="flex justify-end gap-3">
                    <button
                        className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                        onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-[#d99125] transition"
                        onClick={async () => {
                          if (validateForm()) {
                            await handleSendEmail();
                            setShowModal(false);
                          }
                        }}
                    >
                      Send
                    </button>
                  </div>
              </div>
                {loading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                      <div className="typewriter italic text-black">Sending email...</div>
                    </div>
                )}
              </div>
            </div>
        )}

      </>
  );
};

export default LandingPage;
