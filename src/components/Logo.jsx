export default function Logo({ compact = false }) {
  return (
    <span className={`brand-logo${compact ? ' brand-logo--compact' : ''}`}>
      <img 
        src="https://vanlocksecurity.co.uk/wp-content/uploads/2025/01/Artboard-new-logo.png" 
        alt="VanLock Security Logo" 
        style={{ height: "42px", width: "auto" }} 
      />
    </span>
  )
}
