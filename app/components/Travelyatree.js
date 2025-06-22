import React, { Component } from "react";

export default class Travelyatree extends Component {
  render() {
    const services = [
      {
        title: "🌟 Family Travel",
        image:
          "https://images.unsplash.com/photo-1687660187066-dc7e95eb3c5e?q=80&w=1170&auto=format&fit=crop",
        sub: ["Weekend Getaways", "Pilgrimage Tours", "Hill Station Packages"],
      },
      {
        title: "💖 Couple Packages",
        image:
          "https://images.unsplash.com/photo-1726311470391-3f9a72f1642d?q=80&w=1074&auto=format&fit=crop",
        sub: [
          "Honeymoon Trips",
          "Romantic Destinations",
          "Candlelight Dinners",
        ],
      },
      {
        title: "🚖 City Transfers",
        image:
          "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1170&auto=format&fit=crop",
        sub: ["Airport Pickup/Drop", "Outstation Cab", "Hourly Cab Service"],
      },
      {
        title: "💍 Wedding Ceremony",
        image:
          "https://images.unsplash.com/photo-1615439935188-5e488fc6b764?q=80&w=687&auto=format&fit=crop",
        sub: [
          "Bride & Groom Entry Car",
          "Guest Pickup & Drop",
          "Luxury Car Rentals",
        ],
      },
      {
        title: "🏔️ Adventure Trips",
        image:
          "https://images.unsplash.com/photo-1511372733300-ddadd1faa116?q=80&w=1176&auto=format&fit=crop",
        sub: ["Trekking", "River Rafting", "Desert Safari"],
        specialAnimation: "animate-bounce-in",
      },
      {
        title: "💼 Corporate Travel",
        image:
          "https://images.unsplash.com/photo-1556579391-8728ac0c47af?q=80&w=1169&auto=format&fit=crop",
        sub: [
          "Employee Commute Plans",
          "Outstation Team Trips",
          "Business Tour Support",
        ],
      },
    ];

    return (
      <div className=" py-20 px-4 md:px-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#FF6600] mb-24 tracking-wide">
          Travelya Service Tree
        </h1>

        <div className="relative max-w-6xl mx-auto before:content-[''] before:absolute before:top-0 before:left-1/2 before:w-1 before:h-full before:bg-[#FF6600] before:-translate-x-1/2">
          {services.map((item, index) => {
            const isLeft = index % 2 === 0;
            const animationClass = item.specialAnimation
              ? item.specialAnimation
              : "animate-fade-in-up";

            return (
              <div
                key={index}
                className={`mb-20 flex flex-col md:flex-row items-center gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } ${animationClass}`}
              >
                <div className="w-full md:w-1/2 flex justify-center px-4">
                  <div className="bg-white/70 border border-gray-100 shadow-xl p-6 md:p-8 rounded-2xl backdrop-blur-md w-full md:w-[90%] flex flex-col md:flex-row items-center gap-6 hover:shadow-2xl transition-all duration-300">
                    {/* Image on the side */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-28 h-28 rounded-xl object-cover border-2 border-[#FF6600] shadow-sm"
                    />
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-[#222] mb-2">
                        {item.title}
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {item.sub.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dot on the center line */}
                <div className="z-10 w-6 h-6 bg-white border-4 border-[#FF6600] rounded-full shadow-md mx-2" />
              </div>
            );
          })}

          {/* Optional middle divider bump */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[50%] w-1 h-24 bg-black/10 rounded-full shadow-sm"></div>
        </div>

        {/* Animations */}
        <style jsx>{`
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease both;
          }

          .animate-bounce-in {
            animation: bounceIn 1.2s ease both;
          }

          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounceIn {
            0% {
              opacity: 0;
              transform: scale(0.8) translateY(100px);
            }
            60% {
              opacity: 1;
              transform: scale(1.05) translateY(-20px);
            }
            80% {
              transform: scale(0.95) translateY(10px);
            }
            100% {
              transform: scale(1) translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }
}
