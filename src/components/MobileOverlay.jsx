export default function MobileOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/35 z-40 "
      onClick={onClose}
    />
  );
}