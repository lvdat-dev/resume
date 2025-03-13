import { Mail, Server, Database, Terminal, Coffee, Calendar, MapPin, Phone, User } from 'lucide-react';
function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img 
                src="/resume/assets/avatar.png" 
                alt="Luc Van Dat"
                className="w-48 h-48 rounded-full border-4 border-white shadow-xl object-cover"
              />
            </div>
            <Coffee className="w-16 h-16 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Luc Van Dat</h1>
            <h2 className="text-xl md:text-2xl mb-8">Java Developer</h2>
            <div className="flex flex-col items-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>23/01/2000</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Male</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>0332130108</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>lvdat.dev@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Binh Thanh District, Thu Duc City</span>
              </div>
            </div>
            <p className="text-lg max-w-3xl mb-8">
              Java Developer with over 2 years of experience in designing, developing, and maintaining Java-based applications. 
              Proficient in Object-Oriented Programming, SQL databases, and collaborative software development methodologies. 
              Skilled in quickly learning new technologies and adapting to evolving project requirements. Strong problem-solving, 
              critical thinking, and communication skills. Committed to delivering high-quality software solutions and contributing 
              to a dynamic team environment.
            </p>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-emerald-600 pl-6">
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">08/2024 - 12/2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">IVS Company</h3>
              <h4 className="text-xl text-emerald-700 mb-4">Java Developer (Onsite Project)</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Worked directly onsite with the Team Lead and IT contractor to clarify requirements and address technical challenges</li>
                <li>Developed and maintained the web management system using Spring MVC, Java 21, PostgreSQL, jQuery, and Thymeleaf</li>
                <li>Implemented and maintained new features based on basic and detailed design specifications</li>
                <li>Reported directly to the Team Lead and IT Contractor, providing solutions to technical issues and ensuring project alignment</li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">06/2022 - 06/2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Hanatour Japan System Vietnam</h3>
              <h4 className="text-xl text-emerald-700 mb-4">Java Developer</h4>
              
              <div className="space-y-8">
                <div>
                  <h5 className="text-lg font-semibold mb-2">Hanaro API</h5>
                  <p className="mb-2 text-gray-600">An API system providing hotel, room, and pricing data to support Hanaro-side development.</p>
                  <div className="mb-4">
                    <span className="font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Java', 'Spring Boot', 'MySQL', 'MongoDB', 'Hibernate', 'MyBatis'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Developed hotel, room, and pricing APIs, ensuring efficient data retrieval and management</li>
                    <li>Optimized database queries, reducing API response time by 30%</li>
                    <li>Implemented secure and optimized RESTful APIs, improving system performance and reliability</li>
                    <li>Collaborated with frontend and business teams to refine API specifications</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-2">Gorilla B2B</h5>
                  <p className="mb-2 text-gray-600">A B2B sales system covering both hotel and ticket bookings.</p>
                  <div className="mb-4">
                    <span className="font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Java', 'Spring Boot', 'MySQL', 'Hibernate', 'MyBatis', 'MongoDB', 'Vue.js', 'Elasticsearch'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Refactored the booking flow, improving user experience and reducing booking errors</li>
                    <li>Redesigned the order history module, increasing performance and data accuracy</li>
                    <li>Optimized database queries, reducing response time by 40% for key transactions</li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-2">Linktivity Batch</h5>
                  <p className="mb-2 text-gray-600">A batch processing system for product updates and synchronization.</p>
                  <div className="mb-4">
                    <span className="font-medium">Technologies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Java', 'Spring Boot', 'Spring Batch', 'Hibernate', 'MySQL', 'MyBatis'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Designed and implemented batch processing flow for efficient data updates</li>
                    <li>Automated price and inventory synchronization, reducing manual work by 80%</li>
                    <li>Optimized batch job execution, reducing processing time by 50%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Server className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Database className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frameworks & Libraries</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Spring Boot</li>
                <li>Spring MVC</li>
                <li>Hibernate</li>
                <li>MyBatis</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Terminal className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git, SVN, GitLab</li>
                <li>Maven</li>
                <li>IntelliJ</li>
                <li>MySQL, PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="border-l-4 border-emerald-600 pl-6">
              <div className="flex items-center gap-2 text-emerald-700 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">2018 - 2023</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Posts and Telecommunication Institute of Technology</h3>
              <p className="text-lg text-gray-700">Software Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="mailto:lvdat.dev@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>lvdat.dev@gmail.com</span>
              </a>
              <a
                href="tel:0332130108"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>0332130108</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Luc Van Dat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;