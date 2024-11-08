import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Gift, Zap, Clock, AlertTriangle, Copy } from 'lucide-react';
import { ScrollProvider } from './components/ScrollProvider';

export default function Component() {
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(''), 3000);
  };

  const faqs = [
    {
      question: 'Who is eligible for this program?',
      answer:
        'Founders of early-stage startups who have not previously used Notion for their business.',
    },
    {
      question: 'How long does the approval process take?',
      answer:
        'Notion typically reviews applications within a few business days, but most applications get accepted in 1 business day.',
    },
    {
      question: 'When will I receive my reward?',
      answer: 'You will receive your reward on Friday of the current week.',
    },
    {
      question: 'What happens after the 3-month Notion Plus plan expires?',
      answer:
        'You can choose to continue with a paid plan or downgrade to the free version.',
    },
  ];

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto space-y-8 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold">
              Get $100 & more from Notion Startup Program
            </h1>
            <h2 className="text-2xl text-purple-600">
              Boost Your Startup with Notion & Internise
            </h2>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() =>
                window.open('https://notion.so/startups-apply', '_blank')
              }
            >
              Apply Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>
                  Are you a founder of an early-stage or developed startup?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Supercharge your business with Notion's Startups Program!
                  Internise has partnered with Notion to provide startups some
                  amazing benefits.
                </p>
                <p className="text-red-600 font-semibold">
                  Note: This offer expires at 11:59 PM CET on 8th November,
                  2024.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">What You'll Get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Gift, text: '$100 Visa Gift Card' },
                { icon: Zap, text: 'Notion Plus plan for 3 months' },
                { icon: Clock, text: 'Unlimited AI access' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-8 w-8 text-purple-600" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-medium mb-2">Partner Number</p>
              <div className="flex items-center">
                <code className="bg-white px-2 py-1 rounded mr-2">
                  REFERRAL#9074410
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard('REFERRAL#9074410')}
                >
                  {copiedCode === 'REFERRAL#9074410' ? (
                    'Copied!'
                  ) : (
                    <Copy size={16} />
                  )}
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-medium mb-2">Partner Key</p>
              <div className="flex items-center">
                <code className="bg-white px-2 py-1 rounded mr-2">
                  KEY9074410
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard('KEY9074410')}
                >
                  {copiedCode === 'KEY9074410' ? 'Copied!' : <Copy size={16} />}
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="border-2 border-orange-500">
              <CardHeader className="bg-orange-100">
                <CardTitle className="flex items-center text-orange-700">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  One thing to avoid
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p>
                  You may be redirected to a <strong>typeform form</strong>{' '}
                  after sign up. Please <strong>avoid filling that form</strong>
                  , as it doesn't include fields to add partner referral number
                  and partner key, so you will not be enrolled for $100 + $3000
                  in credits value and Unlimited Value, rather you will be
                  enrolled in the other program, this $100 specific program is
                  related to us.
                </p>
                <p>
                  If you are referred to <strong>typeform's form</strong>, click
                  the back button, then it will ask some information and then
                  you will be referred to correct page, on that page it is also
                  written that you will get $6000 in Notion subscription credits
                  and unlimited AI.
                </p>
                <p className="font-semibold">
                  Make sure to enter our <strong>partner code</strong> in the
                  referral partner section at the end of the page, another field
                  will appear which will ask to enter{' '}
                  <strong>partner key</strong>. Make sure both are correct and
                  double check it. Then you will be enrolled into Notion Startup
                  Program related to us, which will give you $100 and $3,000 in
                  Notion.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                Go to this link:{' '}
                <a
                  href="https://notion.so/startups-apply"
                  className="text-purple-600 hover:underline"
                >
                  notion.so/startups-apply
                </a>
              </li>
              <li>
                A pop up will appear asking to login or sign up, you will have
                to sign up first. This process takes a minute after you will be
                redirected again to the startup program page.
              </li>
              <li>
                You will see an offer of 6 months free Notion Plan on the
                startup application page, but that page is used for general
                applications mostly.
              </li>
              <li>Then submit information about your startup.</li>
              <li>
                Enter "REFERRAL#9074410" where it asks for your referral partner
                and then a new field will appear asking for partners code, enter
                "KEY9074410" in that field.
              </li>
              <li>
                Most of the startups do get accepted into the program even if
                they are early stage startups. One thing to keep in mind is that
                you should have a website of your startup, this can also be a
                simple website explaining your startup.
              </li>
              <li>If approved, enjoy your Notion Startups Program benefits!</li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-2xl font-bold mb-6">FAQs</h2>
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-lg shadow-md"
            >
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </ScrollProvider>
  );
}
