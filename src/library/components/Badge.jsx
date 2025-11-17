  export const badge = {
    name: 'Badge',
    code: `<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
  Badge
</span>

<!-- Variants -->
<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Success</span>
<span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Warning</span>
<span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Error</span>`,
    preview: (
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Primary</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Success</span>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Warning</span>
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Error</span>
      </div>
    )
  };