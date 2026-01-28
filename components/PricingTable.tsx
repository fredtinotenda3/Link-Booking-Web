// components\PricingTable.tsx - COMPLIANT VERSION

export const PricingTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-dark-400">
            <th className="text-left p-4 border border-dark-500">Service</th>
            <th className="text-left p-4 border border-dark-500">Consultation Required</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Comprehensive Eye Examination</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required</div>
            </td>
          </tr>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Basic Vision Test</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required</div>
            </td>
          </tr>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Contact Lens Fitting</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required</div>
            </td>
          </tr>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Dry Eye Evaluation</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required</div>
            </td>
          </tr>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Pediatric Eye Examination</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required</div>
            </td>
          </tr>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Frame with Lenses</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required</div>
            </td>
          </tr>
          <tr className="hover:bg-dark-400/50">
            <td className="p-4 border border-dark-500">
              <div className="font-semibold">Emergency Consultation</div>
            </td>
            <td className="p-4 border border-dark-500">
              <div className="text-sm text-dark-600">Required when needed</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 p-4 bg-dark-300 rounded-lg">
        <p className="text-sm text-dark-600">
          Consultation required to determine appropriate services. Medical aid coverage varies by plan. 
          Contact for specific coverage information.
        </p>
      </div>
    </div>
  );
};