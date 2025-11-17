import { Button } from "@/components/ui/button";

export const button = {
  name: 'Button',
  code: `<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium">
  Button
</button>

<!-- Variants -->
<button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">Secondary</button>
<button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">Outline</button>
<button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">Ghost</button>`,
  preview: (
    <div className="flex flex-wrap gap-2">
      <Button
      
       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium">
        Primary
      </Button>
      <Button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
        Secondary
      </Button>
      <Button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
        Outline
      </Button>
      <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium">
        Ghost
      </button>
    </div>
  ),
};