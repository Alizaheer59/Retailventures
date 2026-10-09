"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Strategy & Positioning",
    items: ["Brand Identity Development", "Market Positioning", "Competitive Analysis", "Customer Personas", "Brand Vision & Mission"]
  },
  {
    title: "Retail Marketing Strategy",
    items: ["Go-To-Market Planning", "Omni-Channel Marketing", "Launch Strategies", "Regional Marketing"]
  },
  {
    title: "Store Branding & Visual Merchandising",
    items: ["Store Experience Design", "Customer Journey Mapping", "POS Branding", "Retail Environment Strategy"]
  },
  {
    title: "Customer Acquisition & Engagement",
    items: ["Loyalty Programs", "Footfall Generation", "Community Marketing", "Customer Retention"]
  },
  {
    title: "Digital & Social Media Marketing",
    items: ["Performance Marketing", "Content Strategy", "Social Media Management", "Online Reputation Management"]
  },
  {
    title: "Campaign & Promotion Management",
    items: ["Seasonal Campaigns", "Product Launches", "Retail Activations", "Influencer Collaborations"]
  },
  {
    title: "Retail Performance Analytics",
    items: ["KPI Frameworks", "ROI Analysis", "Customer Insights", "Executive Dashboards"]
  },
  {
    title: "Training & Capability Building",
    items: ["Retail Sales Training", "Customer Service Programs", "Brand Ambassador Training", "Leadership Development"]
  },
  {
    title: "Expansion & Growth Strategy",
    items: ["Market Entry Strategy", "Franchise Development", "Channel Expansion", "Growth Roadmaps"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white text-charcoal">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">Our Advisory Services</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 font-light text-lg">
            Comprehensive consulting solutions designed to unlock growth, optimize performance, and build market leadership across the retail value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 group bg-gray-50/50"
            >
              <h3 className="text-xl font-medium mb-6 group-hover:text-gold transition-colors">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600 font-light">
                    <span className="text-gold mr-2 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
