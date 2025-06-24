import { useState, useEffect } from "react";
import { Shield, X, ArrowRight, Check, Server, Cloud, Code, Smartphone, Database, Wifi, Monitor, Settings, Lock, Zap, Users, Globe, Grid, List, ChevronDown, Filter, Search, Star, Clock, DollarSign, Menu } from 'lucide-react';

import itServicesData from "../components/ui/data/serviceData";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedComplexity, setSelectedComplexity] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState([]);
  const [sortBy, setSortBy] = useState('Most Popular');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

const categories = [
  'Security',
  'Cloud',
  'Development',
  'Mobile',
  'Database',
  'Infrastructure',
  'Support',
  'Web',
  'Analytics',
  'DevOps',
  'AI',
  'Blockchain',
  'Consulting',
  'Compliance',
  'IoT',
  'Training',
  'Business Systems',
  'Automation'
];

const types = [
  'Standard',
  'Custom',
  'Enterprise'
];



  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleTypeChange = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleComplexityChange = (complexity) => {
    setSelectedComplexity(prev => 
      prev.includes(complexity) 
        ? prev.filter(c => c !== complexity)
        : [...prev, complexity]
    );
  };

  const handleDurationChange = (duration) => {
    setSelectedDuration(prev => 
      prev.includes(duration) 
        ? prev.filter(d => d !== duration)
        : [...prev, duration]
    );
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const filteredServices = itServicesData.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(service.category);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(service.type);
    const matchesComplexity = selectedComplexity.length === 0 || selectedComplexity.includes(service.complexity);
    const matchesDuration = selectedDuration.length === 0 || selectedDuration.includes(service.duration);
    
    return matchesSearch && matchesCategory && matchesType && matchesComplexity && matchesDuration;
  });

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedComplexity([]);
    setSelectedDuration([]);
    setSearchTerm('');
  };

  const FilterSection = ({ title, options, selected, onChange }) => (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onChange(option)}
              className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
            />
            <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold font-wave text-gray-900">Codeteak Services</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className={`${isMobile ? 'hidden' : 'block'} w-80 bg-white/90 backdrop-blur-sm shadow-lg h-screen sticky top-0 overflow-y-auto border-r border-gray-200`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <button
                onClick={clearAllFilters}
                className="text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Clear All
              </button>
            </div>

            {/* Desktop Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>

            <FilterSection
              title="Category"
              options={categories}
              selected={selectedCategories}
              onChange={handleCategoryChange}
            />
            <FilterSection
              title="Type"
              options={types}
              selected={selectedTypes}
              onChange={handleTypeChange}
            />
            
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {isMobile && showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white h-full w-80 overflow-y-auto">
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <FilterSection
                  title="Category"
                  options={categories}
                  selected={selectedCategories}
                  onChange={handleCategoryChange}
                />
                <FilterSection
                  title="Type"
                  options={types}
                  selected={selectedTypes}
                  onChange={handleTypeChange}
                />
               
                <div className="mt-6 space-y-3">
                  <button
                    onClick={clearAllFilters}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                  >
                    Clear All Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          {/* Desktop Header */}
          <div className="hidden lg:block mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Our IT Services</h1>
                <p className="text-gray-600">Showing {filteredServices.length} of {itServicesData.length} services</p>
              </div>
              
              <div className="flex items-center space-x-4">
                

                <div className="flex bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Results Count */}
          <div className="lg:hidden mb-4 px-4">
            <p className="text-sm text-gray-600">Showing {filteredServices.length} of {itServicesData.length} services</p>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-4 lg:gap-6 ${
            isMobile 
              ? 'grid-cols-1' 
              : viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                    isMobile 
                      ? 'p-4' 
                      : viewMode === 'list' 
                        ? 'p-6 flex items-center space-x-6' 
                        : 'p-6'
                  }`}
                >
                  {/* Mobile Card Layout */}
                  {isMobile ? (
                    <>
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">{service.title}</h3>
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                            <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">{service.category}</span>
                            <span>{service.type}</span>
                          </div>
                         
                        </div>
                        
                      </div>
                      
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                      
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">Key Benefits</h4>
                        <div className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-start text-xs">
                              <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 line-clamp-1">{benefit}</span>
                            </div>
                          ))}
                          {service.benefits.length > 2 && (
                            <div className="text-xs text-red-600 font-medium">
                              +{service.benefits.length - 2} more benefits
                            </div>
                          )}
                        </div>
                      </div>
                      
                     
                      
                      <button
                        onClick={() => openModal(service)}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        View Details
                      </button>
                    </>
                  ) : (
                    /* Desktop Card Layout */
                    <>
                      <div className={`${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                        <div className="flex items-center mb-4">
                          <div className="bg-red-100 p-3 rounded-xl mr-4">
                            <IconComponent className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">{service.title}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">{service.category}</span>
                              <span className="text-sm text-gray-500">{service.type}</span>
                            </div>
                           
                          </div>
                        </div>
                      </div>

                      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <p className={`text-gray-600 text-sm mb-4 ${viewMode === 'list' ? '' : 'line-clamp-3'}`}>
                          {service.description}
                        </p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
                          <div className="space-y-2">
                            {service.benefits.slice(0, viewMode === 'list' ? 2 : 3).map((benefit, idx) => (
                              <div key={idx} className="flex items-start">
                                <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </div>
                            ))}
                            {service.benefits.length > (viewMode === 'list' ? 2 : 3) && (
                              <div className="text-sm text-red-600 font-medium">
                                +{service.benefits.length - (viewMode === 'list' ? 2 : 3)} more benefits
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className={`${viewMode === 'list' ? 'flex-shrink-0 text-right' : ''}`}>
                        <button
                          onClick={() => openModal(service)}
                          className={`bg-red-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center ${viewMode === 'list' ? 'w-auto' : 'w-full'}`}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-xl font-semibold mb-2">No services found</div>
              <p className="text-gray-500 mb-4">Try adjusting your filters to see more services.</p>
              <button
                onClick={clearAllFilters}
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div
            className={`bg-white rounded-2xl shadow-2xl border border-gray-200 ${
              isMobile ? 'w-full h-full overflow-y-auto' : 'max-w-4xl w-full max-h-[90vh] overflow-y-auto'
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
              <div className="flex items-center">
                <div className="bg-red-100 p-2 lg:p-3 rounded-xl mr-3 lg:mr-4">
                  <selectedService.icon className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg lg:text-2xl font-bold text-gray-900">{selectedService.title}</h2>
                  <div className="flex items-center space-x-2 mt-1 text-sm">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                      {selectedService.category}
                    </span>
                    <span className="text-gray-500">{selectedService.type}</span>
                    <span className="text-gray-500">{selectedService.complexity}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 lg:w-6 lg:h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 lg:p-6">
              <div className={`grid gap-6 lg:gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
                {/* Left Column - Benefits */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Overview</h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {selectedService.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h3>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm lg:text-base">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Deliverables</h3>
                    <div className="space-y-2">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm lg:text-base">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Features */}
                {!isMobile && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                      <div className="space-y-3">
                        {selectedService.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm lg:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 pt-6 mt-8">
                <div className={`grid gap-3 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-3'}`}>
                   <Link to={"/contact"} className="bg-red-600 col-span-3 text-center text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition-colors">
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-in-out;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Services;