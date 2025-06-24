import React, { useState, useEffect } from 'react';
import { Rocket, Lightbulb, Users, MessageCircle, MapPin, RefreshCw, Globe, Target, Mail, ChevronRight } from 'lucide-react';

// Aurora Background Component
const Aurora = ({ colorStops, blend, amplitude, speed }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, ${colorStops[0]} 0%, transparent 50%), 
                      radial-gradient(ellipse 80% 50% at 80% 50%, ${colorStops[1]} 0%, transparent 50%), 
                      radial-gradient(ellipse 80% 50% at 20% 80%, ${colorStops[2]} 0%, transparent 50%)`,
          filter: `blur(${blend}px)`,
          animation: `aurora ${10 / speed}s ease-in-out infinite alternate`
        }}
      />
      <style jsx>{`
        @keyframes aurora {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
};

const Career = () => {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const culturePoints = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Own It. Lead It.",
      description: "We believe in empowering individuals. At Codeteak, you're encouraged to take full ownership of your work and make decisions confidently. Leadership isn't about titles here — it's about action, accountability, and growing every day."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Work with the Best",
      description: "Skip the hierarchy, embrace the collaboration. Work directly with brilliant minds across departments — including our leadership team. Learn, contribute, and innovate in an open environment where silos don't stand a chance."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Speak Up. Be Heard.",
      description: "Have an idea? A concern? Speak up. We practice radical transparency and open communication. Every voice is valued, and every idea has the power to spark the next big breakthrough."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Epic Team Retreats",
      description: "We work hard — and we celebrate harder. From annual offsite retreats to spontaneous team bonding, we believe in making memories together. Expect meaningful connections, fresh perspectives, and lots of laughs."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Recharge and Reconnect",
      description: "We care about you — not just the work you do. That's why we offer generous paid time off, including leave for big life moments like weddings, parenthood, and more. Burnout doesn't belong here."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Explore and Expand",
      description: "Work on real-world projects across various industries. At Codeteak, you won't be boxed into one skill — you'll expand your expertise, grow your confidence, and become the kind of professional who can thrive anywhere."
    }
  ];

  const lookingFor = [
    "Passionate problem-solvers",
    "Collaborative team players", 
    "Curious learners",
    "Honest communicators",
    "People who care — about their work, their team, and their impact"
  ];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={15.7}
        amplitude={1.0}
        speed={0.5}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-pulse">
              <Rocket className="w-16 h-16 mx-auto text-blue-400 mb-6" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 animate-fade-in">
              Join the Journey
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Build with Purpose at <span className="font-bold text-blue-400">Codeteak Private Limited</span>
            </p>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We're not just building products — we're building <span className="text-pink-400 font-semibold">people</span>, 
              <span className="text-purple-400 font-semibold"> purpose</span>, and 
              <span className="text-blue-400 font-semibold"> progress</span>. If you're looking for a place where your ideas matter, 
              your work has real impact, and your growth is just as important as the company's, you're in the right place.
            </p>
          </div>
        </section>

        {/* Culture Section */}
        <section id="section-culture" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Lightbulb className="w-12 h-12 mx-auto text-yellow-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Culture Drives Us</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturePoints.map((point, index) => (
                <div 
                  key={index}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                    isVisible['section-culture'] ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-blue-400 mb-4">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                  <p className="text-white/70 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Look For Section */}
        <section id="section-looking" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Target className="w-12 h-12 mx-auto text-green-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Look For</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {lookingFor.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-green-400/50 transition-all duration-300 ${
                    isVisible['section-looking'] ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ChevronRight className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white/90 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles Section */}
        <section id="section-roles" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <Users className="w-12 h-12 mx-auto text-purple-400 mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Open Roles</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From engineers and designers to product managers and marketers, we're always on the lookout for talent with heart and hustle.
              </p>
            </div>
            
            <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 ${
              isVisible['section-roles'] ? 'animate-fade-in' : 'opacity-0'
            }`}>
              <h3 className="text-2xl font-bold text-white mb-6">Currently Hiring</h3>
              <p className="text-white/70 mb-8">
                We have exciting opportunities across various departments. Check our careers portal for the latest openings 
                or reach out to us directly to discuss how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                  Submit General Application
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="section-cta" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${isVisible['section-cta'] ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Something Great?</h2>
              <p className="text-xl text-white/70 mb-12">Let's create the future together.</p>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
                <Mail className="w-12 h-12 mx-auto text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                <p className="text-white/70 mb-6">
                  Ready to join our team? We'd love to hear from you.
                </p>
                <a 
                  href="mailto:careers@codeteak.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  careers@codeteak.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Career;