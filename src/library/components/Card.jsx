export const card = {
  name: 'Card',
  code: `<div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-gray-600">Card content goes here. Add any elements you need.</p>
</div>

<!-- With hover effect -->
<div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
  <h3 className="text-xl font-bold mb-2">Hover Card</h3>
  <p className="text-gray-600">This card has a hover effect.</p>
</div>`,
  preview: (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p className="text-gray-600">Card content goes here. Add any elements you need.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
        <h3 className="text-xl font-bold mb-2">Hover Card</h3>
        <p className="text-gray-600">This card has a hover effect.</p>
      </div>
    </div>
  ),
};