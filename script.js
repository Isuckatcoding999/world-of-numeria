function openPanel(topic) {
  const panel = document.getElementById("panel");
  const text = document.getElementById("panel-text");

  const content = {
    beginner: `
      <h2>Beginner Math (Floors 1–10)</h2>
      <ul>
        <li>Counting: 1, 2, 3...</li>
        <li>Addition: 7 + 5 = 12</li>
        <li>Subtraction: 10 − 3 = 7</li>
        <li>Multiplication: 4 × 6 = 24</li>
        <li>Division: 24 ÷ 6 = 4</li>
        <li>Fractions: 3/4 + 1/4 = 1</li>
        <li>Decimals: 0.75</li>
        <li>Percents: 75% = 0.75</li>
        <li>Area: A = lw</li>
        <li>Perimeter: P = 2l + 2w</li>
      </ul>`,

    algebra: `
      <h2>Algebra City (Floors 11–25)</h2>
      <ul>
        <li>Simplify Expressions: 3x + 4x = 7x</li>
        <li>Linear Equations: 2x + 3 = 11</li>
        <li>Slope: m = (y₂ − y₁)/(x₂ − x₁)</li>
        <li>Intercept Form: y = mx + b</li>
        <li>Adding Polynomials</li>
        <li>Subtracting Polynomials</li>
        <li>Simplifying Radicals: √50 = 5√2</li>
      </ul>`,

    algebra2: `
      <h2>Algebra II Highlands (Floors 26–45)</h2>
      <ul>
        <li>Set Theory: A ∪ B, A ∩ B</li>
        <li>Complex Plane: z = a + bi</li>
        <li>Polynomial Division</li>
        <li>Synthetic Division</li>
        <li>Multiplying Polynomials</li>
        <li>Cross Product: a × b</li>
        <li>Normal Distribution (μ, σ)</li>
        <li>Gauss-Jordan Elimination</li>
        <li>Matrix Inverse: A⁻¹</li>
      </ul>`,

    geometry: `
      <h2>Geometry Realms (Floors 46–65)</h2>
      <ul>
        <li>Formulas & Measurement</li>
        <li>Unit Conversions & Error</li>
        <li>Distance Formula</li>
        <li>Midpoint Formula</li>
        <li>Pythagorean Theorem: a² + b² = c²</li>
        <li>3D Figures</li>
        <li>Symmetry & Transformations</li>
        <li>Inductive & Deductive Reasoning</li>
      </ul>`,

    trig: `
      <h2>Trigonometry Skies (Floors 66–100)</h2>
      <ul>
        <li>Angles & Angle Measures</li>
        <li>Trigonometric Form: z = r(cosθ + i sinθ)</li>
        <li>Complex Numbers</li>
        <li>Linear Relations & Scatter Plots</li>
        <li>Piecewise Functions</li>
        <li>Law of Sines</li>
        <li>Law of Cosines</li>
        <li>Vectors</li>
        <li>Angular Velocity: ω = θ/t</li>
        <li>Linear Velocity: v = d/t</li>
      </ul>`
  };

  text.innerHTML = content[topic];
  panel.classList.remove("hidden");
}

function closePanel() {
  document.getElementById("panel").classList.add("hidden");
}
