import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is phishing?",
      answer:
        "Phishing is when a scammer tries to trick you into sharing personal details like passwords, bank details, or OTPs. They usually send fake emails or messages pretending to be from a bank, a shopping site, or even the government. If you click on their link and enter your details, they steal your information."
    },
    {
      question: "How do scammers make fake websites?",
      answer:
        "Scammers create websites that look exactly like real ones. For example, they might copy a bank’s website or a famous shopping site. When you enter your login details or card number, they steal it and misuse it."
    },
    {
      question: "How can I tell if a website is fake?",
      answer:
        "Some common red flags to watch out for: \n- The website link is slightly different (like 'amaz0n.com' instead of 'amazon.com').\n- No padlock symbol (🔒) in the address bar—secure sites always have it.\n- Bad spelling or poor design—big companies don’t make such mistakes.\n- A pop-up appears asking for your password or bank details—real websites don’t do this."
    },
    {
      question: "I accidentally entered my details on a fake website. What should I do?",
      answer:
        "Change your password immediately for that account.\nEnable Two-Factor Authentication (2FA).\nCheck your bank account for any suspicious transactions.\nReport the website to protect others."
    },
    {
      question: "What are the most common online scams?",
      answer:
        "Scammers use different tricks to fool people. Some common scams include:\n- Fake emails pretending to be from your bank, Facebook, or Paytm.\n- Tech support scams, where someone calls saying your computer has a virus.\n- Fake lottery or prize messages, telling you that you won money.\n- Fraud online shopping sites, where you pay but never receive anything.\n- Investment scams, promising big profits in cryptocurrency or stocks but actually stealing your money."
    },
    {
      question: "How can I protect myself from online scams?",
      answer:
        "Think before clicking on links in emails, WhatsApp messages, or SMS.\nNever share your OTP, passwords, or bank details with anyone.\nUse strong, different passwords for each account.\nEnable Two-Factor Authentication (2FA) for extra security.\nIf an offer seems too good to be true, it’s probably a scam!"
    },
    {
      question: "Can I get scammed on WhatsApp, Instagram, or SMS?",
      answer:
        "Yes! Scammers send fake messages with dangerous links. Sometimes, they even hack a friend’s account and send scam links from their number. If something looks suspicious, don’t click!"
    },
    {
      question: "What should I do if I get a suspicious email or message?",
      answer:
        "Don’t click on any links or open any attachments.\nCheck the sender’s email address carefully—scammers use fake ones like 'support@bank-secure.com' instead of 'support@bank.com'.\nReport and delete the message to avoid falling for the scam."
    },
    {
      question: "How can I check if an online shopping website is real or fake?",
      answer:
        "Search for customer reviews—if many people say it's a scam, stay away.\nLook for a real 'Contact Us' page with a phone number and address.\nIf a deal looks unbelievably cheap, it’s probably a scam.\nMake sure the website has HTTPS (🔒 symbol in the address bar)."
    },
    {
      question: "Can my phone or laptop get hacked just by visiting a website?",
      answer:
        "Yes! Some fake websites have viruses that steal your data or damage your device. To stay safe:\n- Use Scamify or antivirus software to check suspicious sites.\n- Keep your browser and phone updated to fix security flaws."
    },
    {
      question: "What is ransomware, and how do I protect myself from it?",
      answer:
        "Ransomware is a type of virus that locks all your files and asks for money to unlock them. To stay safe:\n- Never download unknown files or attachments.\n- Back up important files in case you lose access."
    },
    {
      question: "How can I check if my email or password has been leaked?",
      answer:
        "You can use websites like 'Have I Been Pwned' to check if your email or password has been leaked in a data breach. If it has, change your passwords immediately."
    },
    {
      question: "What’s the safest way to pay online?",
      answer:
        "Use trusted payment apps (Google Pay, UPI, PayPal, etc.).\nNever enter card details on unknown websites.\nTurn on SMS/email alerts to monitor your transactions."
    },
    {
      question: "How does SCAMIFY help me stay safe?",
      answer:
        "SCAMIFY helps you:\n- Detect fake websites before you enter your details.\n- Identify scam links to avoid falling into traps.\n- Stay updated on the latest online scams."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq_3">
      <div className="responsive-container-block container">
        <div className="responsive-container-block faqheading-bg">
          <div className="heading-content">
            <p className="text-blk faq-heading">FAQs - Stay Safe from Online Scams</p>
          </div>
        </div>
        <div className="responsive-container-block dropdown-container-wrapper">
          <div className="responsive-container-block dropdown-container">
            <div className="container-block">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq ${activeIndex === index ? "active" : ""}`}
                >
                  <span
                    className="faq-question-container"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-blk faq-questions">{faq.question}</p>
                    <img
                      className="openimg"
                      src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/arrow.svg"
                      alt="Toggle"
                    />
                  </span>
                  {activeIndex === index && (
                    <div className="answer-box">
                      <p className="text-blk faq-answer">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
