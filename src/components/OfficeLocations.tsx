"use client";

export default function OfficeLocations() {
  const offices = [
    {
      name: "Uganda HQ",
      address: "Kampala, Uganda",
      details: "Westgate Towers, 8th Floor, Suite 809",
      phone: "+256 (0) 123 456 789",
      email: "uganda@farmfuzion.com",
    },
    {
      name: "Southern Africa",
      address: "Cape Town, South Africa",
      details: "Business District Center",
      phone: "+27 (0) 21 123 4567",
      email: "africa@farmfuzion.com",
    },
    {
      name: "Global Operations",
      address: "Remote/Hybrid",
      details: "Supporting 15+ countries across Africa",
      phone: "+1 (555) 123-4567",
      email: "ops@farmfuzion.com",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Offices
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, i) => (
            <div key={i} className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {office.name}
              </h3>

              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">
                    {office.address}
                  </p>
                  <p className="text-sm">{office.details}</p>
                </div>

                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Phone:</span> {office.phone}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Email:</span> {office.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
