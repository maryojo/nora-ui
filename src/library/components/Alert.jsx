export const  alert = {
    name: 'Alert',
    code: `<div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
  <div className="flex items-start">
    <div className="flex-1">
      <p className="font-medium">Info Alert</p>
      <p className="text-sm mt-1">This is an informational message.</p>
    </div>
  </div>
</div>

<!-- Variants -->
<div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">Success Alert</div>
<div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">Warning Alert</div>
<div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">Error Alert</div>`,
    preview: (
      <div className="space-y-3">
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Info Alert</p>
          <p className="text-sm mt-1">This is an informational message.</p>
        </div>
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
          <p className="font-medium">Success!</p>
        </div>
      </div>
    )
  };