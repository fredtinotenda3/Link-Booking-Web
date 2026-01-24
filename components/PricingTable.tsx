// components\PricingTable.tsx - CORRECTED VERSION

import { SERVICE_PRICING } from "@/constants/services";

export const PricingTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-dark-400">
            <th className="text-left p-4 border border-dark-500">Service</th>
            <th className="text-left p-4 border border-dark-500">Cash Amount</th>
            <th className="text-left p-4 border border-dark-500">Medical Aid Amount</th>
            <th className="text-left p-4 border border-dark-500">Components</th>
          </tr>
        </thead>
        <tbody>
          {SERVICE_PRICING.map((service) => (
            <tr key={service.id} className="hover:bg-dark-400/50">
              <td className="p-4 border border-dark-500">
                <div className="font-semibold">{service.serviceName}</div>
                {service.notes && (
                  <div className="text-sm text-dark-600">{service.notes}</div>
                )}
              </td>
              <td className="p-4 border border-dark-500">
                <div className="font-semibold">{service.cashPrice}</div>
                <div className="text-xs text-dark-600">Cash payment</div>
              </td>
              <td className="p-4 border border-dark-500">
                <div className="font-semibold">{service.insuredPrice}</div>
                <div className="text-xs text-dark-600">Medical aid payment</div>
              </td>
              <td className="p-4 border border-dark-500">
                <div className="space-y-1">
                  {service.includes?.map((item, idx) => (
                    <div key={idx} className="text-sm text-dark-600">• {item}</div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-4 bg-dark-300 rounded-lg">
        <p className="text-sm text-dark-600">
          *Medical aid coverage varies by plan. Amounts are indicative. Contact for current pricing and specific coverage information.
          Consultation required to determine appropriate services.
        </p>
      </div>
    </div>
  );
};