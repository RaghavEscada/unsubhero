"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";

const pricingPlans = [
    {
        id: 1,
        name: "Starter",
        monthlyPrice: 29,
        yearlyPrice: 290,
        description: "Perfect for individuals getting started",
        features: [
            "Up to 5 projects",
            "Basic analytics",
            "Email support",
            "1GB storage",
            "Mobile app access"
        ],
        popular: false,
        img: "/p1.svg" // You can replace with your own icons
    },
    {
        id: 2,
        name: "Professional",
        monthlyPrice: 79,
        yearlyPrice: 790,
        description: "Ideal for growing businesses and teams",
        features: [
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "50GB storage",
            "Team collaboration",
            "Custom integrations",
            "API access"
        ],
        popular: true,
        img: "/p2.svg"
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
            "24/7 phone support",
            "Custom onboarding",
            "Advanced security",
            "SLA guarantee",
            "Dedicated account manager"
        ],
        popular: false,
        img: "/p3.svg"
    }
];

const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    const togglePricing = () => {
        setIsYearly(!isYearly);
    };

    return (
        <div className="py-20">
            <h1 className="heading text-white text-center mb-4">
                Choose Your{" "}
                <span
                    className="bg-white px-2 py-1 rounded text-black italic"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                >
                    Perfect Plan
                </span>
            </h1>

            <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
                Scale your intelligent systems with flexible pricing that grows with your needs
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mb-16">
                <div className="flex items-center bg-gray-800 rounded-lg p-1">
                    <button
                        className={`px-6 py-2 rounded-md transition-all duration-300 ${!isYearly
                                ? "bg-white text-black font-medium"
                                : "text-white hover:text-gray-300"
                            }`}
                        onClick={() => setIsYearly(false)}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-6 py-2 rounded-md transition-all duration-300 ${isYearly
                                ? "bg-white text-black font-medium"
                                : "text-white hover:text-gray-300"
                            }`}
                        onClick={() => setIsYearly(true)}
                    >
                        Yearly
                        <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                            Save 17%
                        </span>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10">
                {pricingPlans.map((plan) => (
                    <div
                        className="lg:min-h-[35rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw] relative"
                        key={plan.id}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>
                        )}

                        <PinContainer
                            title={plan.name}
                            href="#"
                        >
                            <div className="relative flex flex-col items-center justify-start sm:w-96 w-[80vw] overflow-hidden h-[28rem] p-6">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl flex flex-col"
                                    style={{
                                        backgroundColor: plan.popular ? "#1a1a2e" : "#13162D",
                                        border: plan.popular ? "2px solid #6366f1" : "1px solid #2a2d47"
                                    }}
                                >
                                    {/* Plan Header */}
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                        <div className="flex items-baseline justify-center mb-2">
                                            <span className="text-4xl font-bold text-white">
                                                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-gray-400 ml-2">
                                                /{isYearly ? 'year' : 'month'}
                                            </span>
                                        </div>
                                        {isYearly && (
                                            <p className="text-green-400 text-sm">
                                                Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
                                            </p>
                                        )}
                                        <p className="text-gray-400 text-sm mt-2">{plan.description}</p>
                                    </div>

                                    {/* Features */}
                                    <div className="flex-1">
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <FaCheck className="text-green-400 mt-1 mr-3 flex-shrink-0" size={12} />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-6">
                                        <button
                                            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${plan.popular
                                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                                                    : "bg-gray-700 text-white hover:bg-gray-600"
                                                }`}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-16">
                <p className="text-gray-400 mb-4">
                    All plans include 14-day free trial • No setup fees • Cancel anytime
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                    <span className="flex items-center">
                        <FaCheck className="text-green-400 mr-2" size={12} />
                        SSL Security
                    </span>
                    <span className="flex items-center">
                        <FaCheck className="text-green-400 mr-2" size={12} />
                        99.9% Uptime
                    </span>
                    <span className="flex items-center">
                        <FaCheck className="text-green-400 mr-2" size={12} />
                        GDPR Compliant
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;