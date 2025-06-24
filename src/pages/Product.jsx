import { BackgroundLines } from "../components/ui/background-lines"
import { CheckCircle, Truck, Users, BarChart3, Bell, Shield, Clock, MapPin, Rocket, Calendar, Star } from "lucide-react"

const Product = () => {
  const features = [
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

  return (
    <div className="bg-black pt-20 h-[400vh] md:h-[310vh] flex items-center">
      <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-4">
        {/* Hero Section with Coming Soon */}
        <div className="md:min-h-screen flex flex-col items-center justify-start text-center max-w-6xl mx-auto z-40md:py-20">
          {/* Coming Soon Badge */}
          <div className="mb-8 relative">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-red-800/20 border border-red-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <Rocket className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold text-lg">Coming Soon</span>
              <div className="absolute -top-1 -right-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-wider">
            Welcome To <br /> YADRO
          </h2>
          
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-4">
            Your Smart Delivery Management Solution
          </p>
          
          {/* Launch Timeline */}
          <div className="mb-8 flex items-center gap-2 text-neutral-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Launching Soon - Stay Tuned!</span>
          </div>
          
         <img src="/images/productPresentation.png" alt=""  className="rounded-3xl z-50"/>

        </div>

        {/* Description Section */}
        <div className="w-full max-w-6xl mx-auto py-44 px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-6">
              🚀 What is Yadro?
            </h3>
            <p className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              A powerful delivery management application currently in development, designed to simplify and streamline the way businesses handle deliveries. 
              Whether you run a supermarket, courier service, or logistics team, <span className="text-red-400 font-semibold">Yadro</span> will give you 
              complete control over every step — from order assignment to real-time tracking.
            </p>
          </div>

          {/* Features Preview */}
          <div className="mb-16">
            <h4 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
              🔑 Planned Features
            </h4>
            <p className="text-center text-neutral-400 mb-12">Here's what we're building for you</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 relative overflow-hidden group"
                >
                  {/* "In Development" Badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-500/20 border border-red-500/30 rounded-full px-2 py-1">
                      <span className="text-red-300 text-xs font-medium">In Development</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h5>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Launch Announcement */}
          <div className="text-center bg-gradient-to-r from-red-900/20 to-black/20 rounded-2xl p-8 border border-red-500/20 mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📦 Built for Speed, Reliability, and Complete Visibility
            </h4>
            <p className="text-lg text-neutral-300 mb-6 max-w-3xl mx-auto">
              We're working hard to bring you the future of delivery management. 
              Yadro will deliver smarter solutions for modern logistics challenges.
            </p>
            <div className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 mb-6">
              Get ready to deliver smarter. Get ready for <span className="text-2xl">Yadro</span>.
            </div>
          </div>
        </div>
      </BackgroundLines>
    </div>
  )
}

export default Product