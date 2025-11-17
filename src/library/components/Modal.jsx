export const modal = {
    name: 'Modal',
    code: `<!-- Modal Overlay -->
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
    <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
    <p className="text-gray-600 mb-6">Modal content goes here. Add any elements you need.</p>
    <div className="flex justify-end gap-2">
      <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Cancel</button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Confirm</button>
    </div>
  </div>
</div>`,
    preview: (
      <div className="relative h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 m-4">
          <h2 className="text-xl font-bold mb-2">Modal Preview</h2>
          <p className="text-gray-600 text-sm mb-4">This is how the modal looks.</p>
          <div className="flex justify-end gap-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Cancel</button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Confirm</button>
          </div>
        </div>
      </div>
    )
  };