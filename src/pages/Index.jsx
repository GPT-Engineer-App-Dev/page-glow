import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Feature = ({ title, description, icon }) => (
  <div className="flex items-start space-x-3">
    {icon}
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const PricingTier = ({ name, price, features, isPopular }) => (
  <Card className={`flex flex-col ${isPopular ? 'border-blue-500 border-2' : ''}`}>
    <CardHeader>
      <h3 className="text-2xl font-bold">{name}</h3>
      {isPopular && <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">Most Popular</span>}
    </CardHeader>
    <CardContent>
      <p className="text-4xl font-bold">${price}<span className="text-xl text-gray-500">/mo</span></p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="text-green-500 mr-2" size={20} />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="mt-auto">
      <Button className="w-full">{isPopular ? 'Start Free Trial' : 'Choose Plan'}</Button>
    </CardFooter>
  </Card>
);

const SaasLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">SaasApp</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <Button variant="outline">Log in</Button>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Streamline Your Workflow with SaasApp
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Boost productivity and collaboration with our all-in-one platform.
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Start Free Trial <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              title="Task Management"
              description="Organize and prioritize your tasks with ease."
              icon={<CheckCircle className="text-blue-500" size={24} />}
            />
            <Feature
              title="Team Collaboration"
              description="Work together seamlessly with real-time updates."
              icon={<CheckCircle className="text-blue-500" size={24} />}
            />
            <Feature
              title="Analytics Dashboard"
              description="Gain insights with comprehensive data visualization."
              icon={<CheckCircle className="text-blue-500" size={24} />}
            />
            <Feature
              title="Integrations"
              description="Connect with your favorite tools and services."
              icon={<CheckCircle className="text-blue-500" size={24} />}
            />
            <Feature
              title="Mobile App"
              description="Stay productive on-the-go with our mobile app."
              icon={<CheckCircle className="text-blue-500" size={24} />}
            />
            <Feature
              title="24/7 Support"
              description="Get help whenever you need it with our support team."
              icon={<CheckCircle className="text-blue-500" size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingTier
              name="Basic"
              price={9}
              features={[
                "Up to 5 users",
                "Basic features",
                "1GB storage",
                "Email support"
              ]}
            />
            <PricingTier
              name="Pro"
              price={29}
              features={[
                "Up to 20 users",
                "Advanced features",
                "10GB storage",
                "Priority support",
                "API access"
              ]}
              isPopular={true}
            />
            <PricingTier
              name="Enterprise"
              price={99}
              features={[
                "Unlimited users",
                "All features",
                "Unlimited storage",
                "24/7 phone support",
                "Custom integrations"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users and take your workflow to the next level.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 SaasApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SaasLandingPage;