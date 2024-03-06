import "./Gradient.scss"
export default function GradientBg() {
  return (
    <div className="absolute">
      <div className="absolute inset-0 justify-center">
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape1 bg-primary opacity-50 bg-blur"></div>
        <div className="bg-shape1 bg-purple opacity-50 bg-blur"></div>
      </div>
      <div><h1>Hello World</h1></div>
    </div>
  )
}
