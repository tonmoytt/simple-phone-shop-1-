import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCreditCard,
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bKash, Nagad, Rocket, PayPal, Visa, MasterCard, and other bank cards.",
    type: "payment",
    icon: <FaCreditCard className="text-white" />,
    color: "bg-blue-500",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3-7 business days depending on your location and chosen courier.",
    type: "shipping",
    icon: <FaTruck className="text-white" />,
    color: "bg-green-500",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes! We offer a 7-day return or exchange policy for damaged or incorrect items.",
    type: "returns",
    icon: <FaUndo className="text-white" />,
    color: "bg-yellow-500",
  },
  {
    question: "Do you offer warranty on products?",
    answer:
      "Yes, all electronic products come with manufacturer warranty as specified on the product page.",
    type: "warranty",
    icon: <FaShieldAlt className="text-white" />,
    color: "bg-purple-500",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing an order, you will receive a tracking ID via email to monitor your shipment.",
    type: "shipping",
    icon: <FaEnvelope className="text-white" />,
    color: "bg-green-500",
  },
  {
    question: "Are online payments secure?",
    answer:
      "Yes, all transactions are encrypted and secure. We never store your card information.",
    type: "payment",
    icon: <FaCreditCard className="text-white" />,
    color: "bg-blue-500",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be canceled within 2 hours of placement. After that, cancellation depends on shipment status.",
    type: "shipping",
    icon: <FaTruck className="text-white" />,
    color: "bg-green-500",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "Yes! We run seasonal promotions, special offers, and discount codes. Subscribe to our newsletter to stay updated.",
    type: "general",
    icon: <FaGlobe className="text-white" />,
    color: "bg-pink-500",
  },
  {
    question: "Is international shipping available?",
    answer:
      "Currently, we only ship within the country. International shipping will be available soon.",
    type: "shipping",
    icon: <FaGlobe className="text-white" />,
    color: "bg-green-500",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us via email at support@gadgetstore.com or call us at +880123456789.",
    type: "support",
    icon: <FaPhoneAlt className="text-white" />,
    color: "bg-red-500",
  },
  {
    question: "How will I receive my parcel?",
    answer:
      "Your parcel will be delivered to the address provided during checkout. You can track it via the tracking ID sent to your email or phone.",
    type: "shipping",
    icon: <FaTruck className="text-white" />,
    color: "bg-green-500",
  },
  {
    question: "What should I do if my parcel is delayed?",
    answer:
      "If your parcel is delayed, please contact our customer support with your order ID. We will provide updated delivery information promptly.",
    type: "shipping",
    icon: <FaTruck className="text-white" />,
    color: "bg-green-500",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">FAQ</h1>
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center p-4 text-left focus:outline-none"
              >
                {/* Colored Icon Badge */}
                <span
                  className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4 ${faq.color}`}
                >
                  {faq.icon}
                </span>

                <span className="font-semibold text-gray-800 flex-1">{faq.question}</span>

                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 pt-0 text-gray-700 border-t border-gray-200"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-10">
        <div className="max-w-7xl mx-auto p-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; 2025 GadgetStore. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaqPage;



// import React, { useState } from "react";
// import {
//   FaChevronDown,
//   FaChevronUp,
//   FaCreditCard,
//   FaTruck,
//   FaUndo,
//   FaShieldAlt,
//   FaEnvelope,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// // Grouped FAQs
// const faqGroups = [
//   {
//     title: "Payment",
//     faqs: [
//       {
//         question: "What payment methods do you accept?",
//         answer:
//           "We accept bKash, Nagad, Rocket, PayPal, Visa, MasterCard, and other bank cards.",
//         icon: <FaCreditCard className="text-white" />,
//         color: "bg-blue-500",
//       },
//       {
//         question: "Are online payments secure?",
//         answer:
//           "Yes, all transactions are encrypted and secure. We never store your card information.",
//         icon: <FaCreditCard className="text-white" />,
//         color: "bg-blue-500",
//       },
//     ],
//   },
//   {
//     title: "Shipping & Parcel Delivery",
//     faqs: [
//       {
//         question: "How long does shipping take?",
//         answer:
//           "Shipping usually takes 3-7 business days depending on your location and chosen courier.",
//         icon: <FaTruck className="text-white" />,
//         color: "bg-green-500",
//       },
//       {
//         question: "How can I track my order?",
//         answer:
//           "After placing an order, you will receive a tracking ID via email to monitor your shipment.",
//         icon: <FaEnvelope className="text-white" />,
//         color: "bg-green-500",
//       },
//       {
//         question: "How will I receive my parcel?",
//         answer:
//           "Your parcel will be delivered to the address provided during checkout. You can track it via the tracking ID sent to your email or phone.",
//         icon: <FaTruck className="text-white" />,
//         color: "bg-green-500",
//       },
//       {
//         question: "What should I do if my parcel is delayed?",
//         answer:
//           "If your parcel is delayed, please contact our customer support with your order ID. We will provide updated delivery information promptly.",
//         icon: <FaTruck className="text-white" />,
//         color: "bg-green-500",
//       },
//       {
//         question: "Is international shipping available?",
//         answer:
//           "Currently, we only ship within the country. International shipping will be available soon.",
//         icon: <FaGlobe className="text-white" />,
//         color: "bg-green-500",
//       },
//     ],
//   },
//   {
//     title: "Returns & Warranty",
//     faqs: [
//       {
//         question: "Can I return or exchange a product?",
//         answer:
//           "Yes! We offer a 7-day return or exchange policy for damaged or incorrect items.",
//         icon: <FaUndo className="text-white" />,
//         color: "bg-yellow-500",
//       },
//       {
//         question: "Do you offer warranty on products?",
//         answer:
//           "Yes, all electronic products come with manufacturer warranty as specified on the product page.",
//         icon: <FaShieldAlt className="text-white" />,
//         color: "bg-purple-500",
//       },
//     ],
//   },
//   {
//     title: "Support & General",
//     faqs: [
//       {
//         question: "Can I cancel my order?",
//         answer:
//           "Orders can be canceled within 2 hours of placement. After that, cancellation depends on shipment status.",
//         icon: <FaTruck className="text-white" />,
//         color: "bg-green-500",
//       },
//       {
//         question: "Do you offer discounts or promotions?",
//         answer:
//           "Yes! We run seasonal promotions, special offers, and discount codes. Subscribe to our newsletter to stay updated.",
//         icon: <FaGlobe className="text-white" />,
//         color: "bg-pink-500",
//       },
//       {
//         question: "How can I contact customer support?",
//         answer:
//           "You can contact us via email at support@gadgetstore.com or call us at +880123456789.",
//         icon: <FaPhoneAlt className="text-white" />,
//         color: "bg-red-500",
//       },
//     ],
//   },
// ];

// const FaqPage = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFaq = (groupIndex, faqIndex) => {
//     const key = `${groupIndex}-${faqIndex}`;
//     setOpenIndex(openIndex === key ? null : key);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-600 text-white py-6 shadow-md">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center">FAQ</h1>
//       </header>

//       <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-10">
//         {faqGroups.map((group, groupIndex) => (
//           <section key={groupIndex}>
//             <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
//               {group.title}
//             </h2>

//             <div className="space-y-4">
//               {group.faqs.map((faq, faqIndex) => {
//                 const key = `${groupIndex}-${faqIndex}`;
//                 return (
//                   <div
//                     key={key}
//                     className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
//                   >
//                     <button
//                       onClick={() => toggleFaq(groupIndex, faqIndex)}
//                       className="w-full flex items-center p-4 text-left focus:outline-none"
//                     >
//                       <span
//                         className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full mr-4 ${faq.color}`}
//                       >
//                         {faq.icon}
//                       </span>
//                       <span className="font-semibold text-gray-800 flex-1">
//                         {faq.question}
//                       </span>
//                       {openIndex === key ? (
//                         <FaChevronUp className="text-gray-600" />
//                       ) : (
//                         <FaChevronDown className="text-gray-600" />
//                       )}
//                     </button>

//                     <AnimatePresence>
//                       {openIndex === key && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="p-4 pt-0 text-gray-700 border-t border-gray-200"
//                         >
//                           {faq.answer}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </div>
//           </section>
//         ))}
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow-inner mt-10">
//         <div className="max-w-7xl mx-auto p-6 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-gray-600">&copy; 2025 GadgetStore. All rights reserved.</p>
//           <div className="flex space-x-4 mt-4 sm:mt-0">
//             <a href="#" className="text-gray-600 hover:text-blue-600">
//               Privacy
//             </a>
//             <a href="#" className="text-gray-600 hover:text-blue-600">
//               Terms
//             </a>
//             <a href="#" className="text-gray-600 hover:text-blue-600">
//               Contact
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FaqPage;

