const Faq = () => {
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer:
        "To enroll, go to the course page and click the 'Enroll Now' button. Follow the payment and registration steps.",
    },
    {
      question: "Can I access courses after completion?",
      answer:
        "Yes, once you complete a course, you can access the materials anytime from your dashboard.",
    },
    {
      question: "How do I track my progress?",
      answer:
        "Your progress is tracked automatically. You can check it in your profile under the 'My Courses' section.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 7-day refund policy for courses that have not been completed beyond 10%.",
    },
    {
      question: "Can I interact with instructors?",
      answer:
        "Yes, you can ask questions in the course discussion section or join live Q&A sessions.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-plus border border-gray-300 bg-gray-100 rounded-lg"
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
