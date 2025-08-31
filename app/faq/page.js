export default function FAQ() {
  const faqs = [
    {
      question: "What is this hackathon about?",
      answer:
        "It's a 24-hour event where participants come together to build innovative projects and collaborate.",
    },
    {
      question: "What is Major League Hacking?",
      answer:
        "Major League Hacking is the official student hackathon league in North America & Europe. We work with over 200 Member Events and empower over 70,000 students every year.",
    },
    {
      question: "Do I need to be a student to attend?",
      answer:
        "Yes. Only students who are currently enrolled at a college/university or have graduated within the past 12 months are eligible to attend.",
    },
    {
      question: "Do I need to pay to participate?",
      answer: "Nope! The hackathon is completely free.",
    },
    {
      question: "Where is the event?",
      answer: "The event is being hosted at SRM university.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and lots of enthusiasm. We'll provide food and WiFi!",
    },
    {
      question: "Can I participate without a team?",
      answer:
        "Yes! You can join solo, and we'll help you find teammates during the event.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "Yes there is. We enforce it very strongly. You can find it here.",
    },
  ];

  return (
    <main className="p-8 max-w-3xl mx-auto transition-all ease-in duration-100 ">
      <h1 className="text-4xl font-bold mb-8 text-center transition-all ease-in duration-100 ">
        ❓ Frequently Asked Questions
      </h1>
      <div className="space-y-4 transition-all ease-in duration-100 ">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border rounded-lg p-4 transition hover:shadow-md transition-all ease-in duration-100 ">
            <summary className="cursor-pointer font-semibold text-lg transition-all ease-in duration-100 ">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-700 transition-all ease-in duration-100 ">{faq.answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
