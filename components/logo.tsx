export function Logo({
  size = "md",
  variant = "color",
  withText = false,
}: { size?: "sm" | "md" | "lg"; variant?: "color" | "mono" | "white"; withText?: boolean }) {
  const sizeMap = {
    sm: { container: "w-8 h-8", mark: "w-8 h-8", textSize: "text-sm" },
    md: { container: "w-12 h-12", mark: "w-12 h-12", textSize: "text-base" },
    lg: { container: "w-16 h-16", mark: "w-16 h-16", textSize: "text-lg" },
  }

  const { container, mark, textSize } = sizeMap[size]

  const LogoMark = () => (
    <div
      className={`${mark} flex items-center justify-center font-serif font-bold ${textSize} rounded-lg ${
        variant === "white"
          ? "bg-white text-teal-600"
          : variant === "mono"
            ? "bg-gray-100 text-gray-800"
            : "bg-gradient-to-br from-teal-600 to-cyan-500 text-white"
      }`}
    >
      NeH
    </div>
  )

  if (withText) {
    return (
      <div className="flex items-center gap-2">
        <LogoMark />
        <div
          className={`font-serif font-bold ${textSize} ${variant === "white" ? "text-teal-600" : variant === "mono" ? "text-gray-800" : "text-white"} leading-tight`}
        >
          <div>Nigah</div>
          <div className="text-xs opacity-80">e Hussain</div>
        </div>
      </div>
    )
  }

  return <LogoMark />
}
