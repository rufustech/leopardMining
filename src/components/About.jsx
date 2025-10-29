// components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Leopard Mining (Pvt) Ltd is a geological company that provides
              geological consulting services to the mining industry. Based in
              Bulawayo, Zimbabwe, our team of consultants have experience
              working with a wide variety of commodities across multiple
              countries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Commitment</li>
              <li>✓ Customer Value</li>
              <li>✓ Teamwork</li>
              <li>✓ Professionalism</li>
              <li>✓ Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
