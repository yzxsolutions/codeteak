import { BackgroundLines } from "../components/ui/background-lines"
import { CheckCircle, Truck, Users, BarChart3, Bell, Shield, Clock, MapPin, Rocket, Calendar, Star, Camera, Eye, Search, Zap } from "lucide-react"
import { useState } from "react"

const Product = () => {
  const [activeTab, setActiveTab] = useState('yaadro')
  const yaadroFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "User Authentication & Secure Access",
      description: "Role-based login for employees and delivery partners with password reset and profile management options"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Intelligent Dashboard",
      description: "Real-time new order alerts, assign delivery partners with a swipe, track urgency levels and countdown timers"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Live Order Tracking",
      description: "Monitor every delivery from dispatch to doorstep with partner status updates and delivery time estimates"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Order Management",
      description: "View and filter orders by ID, bill number, or customer name with detailed breakdowns and payment verification"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Delivery Partner Module",
      description: "Add, update, and manage delivery partners with performance tracking, bonuses, and penalties"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Analytics & Insights",
      description: "Monitor total deliveries, completion rates, delays, and visualize performance trends"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "Push alerts with sound for new orders, status changes, and ticket updates"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ticketing System",
      description: "Delivery partners can raise tickets with proof while admins review, reassign, and resolve with ease"
    }
  ]

  const lensFeatures = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Face Recognition Technology",
      description: "Advanced AI-powered facial recognition system for accurate and secure employee identification"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-Time Attendance Tracking",
      description: "Instant clock-in/clock-out with live face detection and verification for seamless attendance management"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-Industry Support",
      description: "Designed for all industries - offices, factories, schools, hospitals, retail stores, and more"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Privacy-First",
      description: "Biometric data protection with local processing and encrypted storage for maximum security"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Comprehensive Analytics",
      description: "Detailed attendance reports, overtime tracking, and workforce insights for better management"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Time Management",
      description: "Support for multiple shifts, break times, and customizable attendance policies"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Automated Reporting",
      description: "Generate attendance reports, payroll data, and compliance documents automatically"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Seamless integration with existing HR systems, payroll software, and enterprise solutions"
    }
  ]

  const products = {
    yaadro: {
      name: "YAADRO",
      description: "Your Smart Delivery Management Solution",
      image: "/images/productPresentation.png",
      features: yaadroFeatures,
      playStoreLink: "https://play.google.com/store/apps/details?id=com.yaadro.delivery",
      content: "A powerful delivery management application now available on the Play Store, designed to simplify and streamline the way businesses handle deliveries. Whether you run a supermarket, courier service, or logistics team, Yaadro gives you complete control over every step — from order assignment to real-time tracking. Download now and experience the future of delivery management!"
    },
    lens: {
      name: "YAADRO LENS",
      description: "AI-Powered Attendance Management System",
      image: "/images/productPresentation.png", // You can replace this with Lens product image
      features: lensFeatures,
      playStoreLink: "https://play.google.com/store/apps/details?id=com.yaadro.lens", // Update with actual Lens app ID
      content: "Revolutionary AI-powered attendance management system designed for all industries. Yaadro Lens combines advanced face recognition technology with intuitive design to deliver accurate, secure, and efficient attendance tracking. From offices to factories, schools to hospitals - experience the future of biometric attendance management."
    }
  }

  return (
    <div className="bg-black pt-20 h-[400vh] md:h-[310vh] flex items-center">
      <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
        {/* Hero Section with Tabs */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center max-w-6xl mx-auto z-40 py-12 md:py-20">
          
          {/* Product Tabs */}
          <div className="mb-12 flex bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
            <button
              onClick={() => setActiveTab('yaadro')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'yaadro'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              YAADRO
            </button>
            <button
              onClick={() => setActiveTab('lens')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'lens'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              YAADRO LENS
            </button>
          </div>

          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl md:text-5xl lg:text-7xl font-sans py-4 md:py-8 relative z-20 font-bold tracking-wider transition-all duration-700 ease-in-out transform">
            Welcome To <br /> <span className="inline-block transition-all duration-700 ease-in-out">{products[activeTab].name}</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-base md:text-xl text-neutral-700 dark:text-neutral-400 text-center mb-8 transition-all duration-700 ease-in-out opacity-100 transform">
            {products[activeTab].description}
          </p>
          
          {/* Product Image - Only for Yaadro */}
          <div className={`transition-all duration-700 ease-in-out transform ${activeTab === 'yaadro' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}>
            {activeTab === 'yaadro' && (
              <div className="w-full max-w-4xl mx-auto mb-8">
                <img src={products[activeTab].image} alt={products[activeTab].name} className="w-full h-auto rounded-3xl z-50 shadow-2xl transition-all duration-700 ease-in-out"/>
              </div>
            )}
          </div>

        </div>

        {/* Description Section */}
        <div className="w-full max-w-6xl mx-auto py-20 md:py-32 px-6 md:px-8">
          <div className="text-center mb-20 transition-all duration-700 ease-in-out">
            <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-8 transition-all duration-700 ease-in-out">
              🚀 What is {products[activeTab].name}?
            </h3>
            <p className="text-xl md:text-2xl text-neutral-300 max-w-5xl mx-auto leading-relaxed transition-all duration-700 ease-in-out">
              {products[activeTab].content}
            </p>
          </div>

          {/* Features Preview */}
          <div className="mb-20 transition-all duration-700 ease-in-out">
            <h4 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 transition-all duration-700 ease-in-out">
              🔑 Key Features
            </h4>
            <p className="text-center text-neutral-400 mb-16 text-lg transition-all duration-700 ease-in-out">
              {activeTab === 'yaadro' ? 'Everything you need for efficient delivery management' : 'Advanced face recognition for attendance management'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out">
              {products[activeTab].features.map((feature, index) => (
                <div 
                  key={`${activeTab}-${index}`}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/10 relative overflow-hidden group animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-xl flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h5>
                      <p className="text-neutral-400 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Launch Announcement */}
          <div className="text-center bg-gradient-to-r from-red-900/20 to-black/20 rounded-3xl p-12 border border-red-500/20 transition-all duration-700 ease-in-out">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-700 ease-in-out">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-700 ease-in-out">
              📦 Built for Speed, Reliability, and Complete Visibility
            </h4>
            <p className="text-xl text-neutral-300 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-700 ease-in-out">
              {activeTab === 'yaadro' 
                ? "The future of delivery management is here! Yaadro delivers smarter solutions for modern logistics challenges with real-time tracking, intelligent dashboards, and seamless order management."
                : "The future of attendance management is here! Yaadro Lens delivers advanced face recognition technology with secure biometric tracking, comprehensive analytics, and seamless integration for all industries."
              }
            </p>
            <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 transition-all duration-700 ease-in-out">
              {activeTab === 'yaadro' 
                ? <>Start delivering smarter today. Download <span className="text-3xl">Yaadro</span> now!</>
                : <>Transform your attendance management. Download <span className="text-3xl">Yaadro Lens</span> now!</>
              }
            </div>
          </div>
        </div>
      </BackgroundLines>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .tab-content {
          animation: fadeInUp 0.7s ease-out;
        }
        
        .feature-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
    </div>
  )
}

export default Product