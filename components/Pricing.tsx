"use client";
import { useState } from "react";
import { FaCheck, FaStar, FaRocket, FaBuilding, FaUsers, FaShield, FaCrown, FaLightbulb } from "react-icons/fa";

const pricingPlans = [
    {
        id: 1,
        name: "Starter",
        monthlyPrice: 29,
        yearlyPrice: 290,
        description: "Perfect for individuals and small projects",
        features: [
            "Up to 5 projects",
            "Basic analytics dashboard",
            "Email support (24h response)",
            "5GB storage",
            "Mobile app access",
            "Standard templates",
            "Basic integrations"
        ],
        popular: false,
        icon: FaLightbulb,
        color: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50"
    },
    {
        id: 2,
        name: "Professional",
        monthlyPrice: 79,
        yearlyPrice: 790,
        description: "Ideal for growing businesses and teams",
        features: [
            "Unlimited projects",
            "Advanced analytics & insights",
            "Priority support (4h response)",
            "100GB storage",
            "Team collaboration tools",
            "Custom integrations",
            "API access",
            "Advanced templates",
            "White-label options"
        ],
        popular: true,
        icon: FaRocket,
        color: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-50 to-pink-50"
    },
    {
        id: 3,
        name: "Enterprise",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        description: "For large organizations with advanced needs",
        features: [
            "Everything in Professional",
            "Unlimited storage",
            "24/7 dedicated support",
            "Custom onboarding program",
            "Enterprise security & SSO",
            "SLA guarantee (99.9%)",
            "Dedicated account manager",
            "Custom feature development",
            "Advanced compliance tools"
        ],
        popular: false,
        icon: FaBuilding,
        color: "from-amber-500 to-orange-500",
        bgGradient: "from-amber-50 to-orange-50"
    }
];

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [hoveredPlan, setHoveredPlan] = useState(null);

    const calculateSavings = (plan) => {
        return (plan.monthlyPrice * 12) - plan.yearlyPrice;
    };

    const calculateSavingsPercentage = (plan) => {
        const savings = calculateSavings(plan);
        const monthlyTotal = plan.monthlyPrice * 12;
        return Math.round((savings / monthlyTotal) * 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                    <FaStar className="text-purple-400 mr-2" size={16} />
                    <span className="text-purple-300 text-sm font-medium">Flexible Pricing Plans</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Choose Your{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Perfect Plan
                    </span>
                </h1>

                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Scale your intelligent systems with flexible pricing that grows with your needs.
                    Start free, upgrade when ready.
                </p>

                {/* Enhanced Pricing Toggle */}
                <div className="flex items-center justify-center mb-16">
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-1.5 shadow-2xl">
                        <div
                            className={`absolute top-1.5 left-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transition-all duration-300 ease-out ${isYearly ? 'translate-x-[140px]' : 'translate-x-0'
                                }`}
                            style={{
                                width: isYearly ? '160px' : '100px',
                                height: '44px'
                            }}
                        />
                        <div className="relative flex items-center">
                            <button
                                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium relative z-10 ${!isYearly ? "text-white" : "text-gray-400 hover:text-gray-200"
                                    }`}
                                onClick={() => setIsYearly(false)}
                            >
                                Monthly
                            </button>
                            <button
                                className={`px-6 py-3 rounded-lg transition-all duration-300 font-medium relative z-10 flex items-center ${isYearly ? "text-white" : "text-gray-400 hover:text-gray-200"
                                    }`}
                                onClick={() => setIsYearly(true)}
                            >
                                Yearly
                                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-pulse">
                                    Save up to 17%
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {pricingPlans.map((plan, index) => {
                        const Icon = plan.icon;
                        const savings = calculateSavings(plan);
                        const savingsPercentage = calculateSavingsPercentage(plan);

                        return (
                            <div
                                key={plan.id}
                                className={`relative w-full max-w-sm transform transition-all duration-500 ${plan.popular ? 'lg:scale-110 lg:-translate-y-4' : ''
                                    } ${hoveredPlan === plan.id ? 'scale-105' : ''}`}
                                onMouseEnter={() => setHoveredPlan(plan.id)}
                                onMouseLeave={() => setHoveredPlan(null)}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                                            <FaCrown className="mr-2" size={14} />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                {/* Card */}
                                <div className={`relative h-full bg-slate-800/40 backdrop-blur-sm border-2 rounded-2xl p-8 shadow-2xl transition-all duration-500 ${plan.popular
                                        ? 'border-purple-500/50 shadow-purple-500/25'
                                        : 'border-slate-700/50 hover:border-slate-600/50'
                                    } ${hoveredPlan === plan.id ? 'shadow-3xl' : ''}`}>

                                    {/* Background Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-2xl`} />

                                    <div className="relative z-10">
                                        {/* Icon and Title */}
                                        <div className="text-center mb-8">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${plan.color} rounded-xl mb-4 shadow-lg`}>
                                                <Icon className="text-white" size={24} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                                        </div>

                                        {/* Pricing */}
                                        <div className="text-center mb-8">
                                            <div className="flex items-baseline justify-center mb-2">
                                                <span className="text-5xl font-bold text-white">
                                                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                                </span>
                                                <span className="text-gray-400 ml-2 text-lg">
                                                    /{isYearly ? 'year' : 'month'}
                                                </span>
                                            </div>
                                            {isYearly && (
                                                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mt-3">
                                                    <p className="text-green-400 text-sm font-medium">
                                                        🎉 Save ${savings} annually ({savingsPercentage}% off!)
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Features */}
                                        <div className="mb-8">
                                            <h4 className="text-white font-semibold mb-4 flex items-center">
                                                <FaShield className="mr-2 text-green-400" size={16} />
                                                What's included:
                                            </h4>
                                            <ul className="space-y-3">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start group">
                                                        <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0 transition-transform group-hover:scale-110" size={12} />
                                                        <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${plan.popular
                                                    ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-xl hover:shadow-purple-500/25`
                                                    : "bg-slate-700 text-white hover:bg-slate-600 hover:shadow-xl"
                                                }`}
                                        >
                                            {plan.popular ? 'Start Free Trial' : 'Get Started'}
                                            {plan.popular && <span className="ml-2">→</span>}
                                        </button>

                                        {/* Additional Info for Popular Plan */}
                                        {plan.popular && (
                                            <p className="text-center text-gray-400 text-xs mt-3">
                                                14-day free trial • No credit card required
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Enhanced Footer Section */}
            <div className="text-center mt-20">
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Why choose our platform?</h3>
                    <p className="text-gray-300 mb-6">
                        Join thousands of satisfied customers who trust our platform for their business needs
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                        <div className="flex items-center justify-center space-x-3">
                            <FaCheck className="text-green-400" size={16} />
                            <span>SSL Security & Encryption</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <FaCheck className="text-green-400" size={16} />
                            <span>99.9% Uptime Guarantee</span>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                            <FaCheck className="text-green-400" size={16} />
                            <span>GDPR & SOC2 Compliant</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400">
                    <span className="flex items-center space-x-2">
                        <FaUsers className="text-blue-400" size={16} />
                        <span>10,000+ happy customers</span>
                    </span>
                    <span>•</span>
                    <span>No setup fees</span>
                    <span>•</span>
                    <span>Cancel anytime</span>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;