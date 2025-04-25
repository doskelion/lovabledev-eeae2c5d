
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "What is IPTV?",
      answer: "IPTV (Internet Protocol Television) is a service that delivers television content over Internet Protocol (IP) networks. Unlike traditional TV that uses satellite or cable, IPTV uses your internet connection to stream content to your devices."
    },
    {
      question: "What devices can I use with your IPTV service?",
      answer: "Our IPTV service works on a wide range of devices including Smart TVs, Android TV boxes, Amazon Fire Stick, Apple TV, smartphones, tablets, computers, and more. Any device that supports common IPTV player applications can be used."
    },
    {
      question: "How many devices can I use simultaneously with one subscription?",
      answer: "Each subscription allows you to stream on up to 2 devices simultaneously. If you need more concurrent connections, please contact our customer support for custom plans."
    },
    {
      question: "What internet speed do I need?",
      answer: "For SD content, we recommend at least 5 Mbps. For HD content, 10 Mbps or higher is recommended. For 4K content, a minimum of 25 Mbps is recommended for smooth playback."
    },
    {
      question: "How do I pay for my subscription?",
      answer: "We accept payments through PayPal, which provides secure transaction processing and protects your payment information. After selecting your plan, you'll be redirected to PayPal to complete your payment."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 24-hour free trial so you can test our service before committing to a subscription. Contact our customer support team to request a trial account."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account dashboard. If you cancel, your service will continue until the end of your current billing period."
    },
    {
      question: "Is this service legal?",
      answer: "Our service aggregates publicly available streams and operates in compliance with applicable laws. However, it's your responsibility to ensure use of our service complies with local regulations in your country."
    }
  ];

  return (
    <div id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions? Contact our support team.
          </p>
          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
