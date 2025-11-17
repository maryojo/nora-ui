export const input =  {
    name: 'Input',
    code: `<input 
  type="text" 
  placeholder="Enter text..." 
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
/>

<!-- With label -->
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">Email</label>
  <input 
    type="email" 
    placeholder="your@email.com"
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
</div>`,
    preview: (
      <div className="space-y-4 max-w-md">
        <input 
          type="text" 
          placeholder="Enter text..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            placeholder="your@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    )
  };