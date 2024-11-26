

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is a Free Meme Generator?',
      answer:
        'A free meme generator is an online tool that allows users to create and customize memes without any cost. It offers templates or lets you upload your own images, add text, and download or share the final meme.',
    },
    {
      question: 'How do I create a meme using a Free Meme Generator?',
      answer:
        'To create a meme, simply upload your image or select a template, add your text in the desired style and position, and then download or share your meme.',
    },
    {
      question: 'Do I need to pay to use a Free Meme Generator?',
      answer:
        'No, free meme generators are completely free to use, though some may offer additional premium features for advanced editing.',
    },
    {
      question: 'Can I upload my own images?',
      answer:
        'Yes, most free meme generators allow you to upload your own images, which you can then customize with text or other editing features.',
    },
    {
      question: 'Is there a limit to how many memes I can create?',
      answer:
        'No, there is no limit to how many memes you can create using a free meme generator. You can make as many as you want, whenever you want.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">FAQ - Free Meme Generator</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b-2 border-gray-200">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left text-xl font-semibold py-4 px-6 focus:outline-none bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="py-4 px-6 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
