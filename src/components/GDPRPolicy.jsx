import React from 'react';
import { Link } from 'react-router-dom';

const GDPRPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section – navbar gradient with breadcrumb */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-200 mb-6 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mx-auto w-fit">
            <Link to="/" className="hover:text-amber-400 transition">Home</Link>
            <span>›</span>
            <span className="text-amber-400 font-medium">GDPR Compliance Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            GDPR <span className="text-amber-400">Compliance Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Our commitment to protecting your personal data in accordance with the General Data Protection Regulation (GDPR).
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-l-4 border-amber-500 shadow-md overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="space-y-6">
                {/* 1. Introduction */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Introduction</h3>
                  <p className="text-gray-700">
                    Pyramid E&C group is committed to ensuring the security and protection of the personal data that we process, and to provide a compliant and consistent approach to data protection in line with the General Data Protection Regulation (EU) 2016/679 (GDPR).
                  </p>
                </div>

                {/* 2. Purpose */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Purpose</h3>
                  <p className="text-gray-700">
                    This policy outlines our commitment to GDPR compliance, ensuring that personal data is processed lawfully, transparently, and for a specific purpose.
                  </p>
                </div>

                {/* 3. Scope */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Scope</h3>
                  <p className="text-gray-700">
                    This policy applies to all employees, contractors, vendors, and other stakeholders who process personal data on behalf of Pyramid E&C group, including cloud-based and digital systems.
                  </p>
                </div>

                {/* 4. Data Protection Principles */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Data Protection Principles</h3>
                  <p className="text-gray-700 mb-2">We adhere to the following principles as required by GDPR:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Lawfulness, fairness, and transparency</li>
                    <li>Purpose limitation</li>
                    <li>Data minimization</li>
                    <li>Accuracy</li>
                    <li>Storage limitation</li>
                    <li>Integrity and confidentiality</li>
                    <li>Accountability</li>
                  </ul>
                </div>

                {/* 5. Lawful Basis for Processing */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Lawful Basis for Processing</h3>
                  <p className="text-gray-700 mb-2">We only process personal data where we have a lawful basis, which may include:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Consent</li>
                    <li>Contractual necessity</li>
                    <li>Legal obligation</li>
                    <li>Legitimate interests</li>
                  </ul>
                </div>

                {/* 6. Data Subject Rights */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">6. Data Subject Rights</h3>
                  <p className="text-gray-700 mb-2">We respect the rights of data subjects under GDPR, including:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Right to access</li>
                    <li>Right to rectification</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object</li>
                  </ul>
                </div>

                {/* 7. Data Security */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">7. Data Security</h3>
                  <p className="text-gray-700">
                    Appropriate technical and organizational measures are in place to ensure the confidentiality, integrity, and availability of data.
                  </p>
                </div>

                {/* 8. Data Breach Notification */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">8. Data Breach Notification</h3>
                  <p className="text-gray-700">
                    In the event of a data breach, we will notify the supervisory authority within 72 hours and inform affected individuals if there is a high risk to their rights and freedoms.
                  </p>
                </div>

                {/* 9. Third-Party Processors */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">9. Third-Party Processors</h3>
                  <p className="text-gray-700">
                    Where we engage third parties to process personal data, we ensure they comply with GDPR and have appropriate safeguards in place.
                  </p>
                </div>

                {/* 10. Training and Awareness */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">10. Training and Awareness</h3>
                  <p className="text-gray-700">
                    All staff involved in data processing activities receive regular training on GDPR compliance.
                  </p>
                </div>

                {/* 11. Policy Review */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">11. Policy Review</h3>
                  <p className="text-gray-700">
                    This policy will be reviewed annually or when significant changes occur in data processing practices or relevant regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPolicy;