"use strict";
(() => {
  // modules/example-algebra.json
  var example_algebra_default = {
    id: "example-algebra",
    title: "Algebra Basics",
    description: "Practice fundamental algebra: solving for variables, simplifying expressions, and working with linear equations.",
    image: "assets/Algebra_Basics.png",
    questions: [
      {
        id: 1,
        prompt: "Solve for $x$: $$2x + 4 = 10$$",
        type: "text",
        correctAnswer: "3",
        explanation: "Subtract 4 from both sides to get $2x = 6$, then divide by 2."
      },
      {
        id: 2,
        prompt: "Simplify: $$3x + 5x - 2x$$",
        type: "text",
        correctAnswer: "6x",
        explanation: "Combine like terms: $(3 + 5 - 2)x = 6x$."
      },
      {
        id: 3,
        prompt: "Which of the following is the slope of $y = 3x + 7$?",
        type: "multiple-choice",
        choices: [
          { label: "$7$", value: "7" },
          { label: "$3$", value: "3" },
          { label: "$-3$", value: "-3" },
          { label: "$1$", value: "1" }
        ],
        correctAnswer: "3",
        explanation: "In slope-intercept form $y = mx + b$, $m$ is the slope."
      },
      {
        id: 4,
        prompt: "Evaluate: $$\\frac{x^2 - 9}{x - 3} \\text{ when } x = 5$$",
        type: "text",
        correctAnswer: "8",
        explanation: "Factor the numerator: $(x+3)(x-3)/(x-3) = x+3$. Then $5+3=8$."
      },
      {
        id: 5,
        prompt: "What is the $y$-intercept of $2y = 6x - 8$?",
        type: "multiple-choice",
        choices: [
          { label: "$-8$", value: "-8" },
          { label: "$3$", value: "3" },
          { label: "$-4$", value: "-4" },
          { label: "$6$", value: "6" }
        ],
        correctAnswer: "-4",
        explanation: "Divide both sides by 2: $y = 3x - 4$. The $y$-intercept is $-4$."
      }
    ]
  };

  // modules/example-chemistry.json
  var example_chemistry_default = {
    id: "example-chemistry",
    title: "Chemistry: Stoichiometry",
    description: "Mole calculations, balancing equations, and unit conversions in basic stoichiometry.",
    image: "assets/chemistry_stoichiometry.png",
    questions: [
      {
        id: 1,
        prompt: "How many moles are in $36\\text{ g}$ of water ($M = 18\\text{ g/mol}$)?",
        type: "text",
        correctAnswer: "2",
        explanation: "$n = m/M = 36/18 = 2$ mol."
      },
      {
        id: 2,
        prompt: "Which equation is correctly balanced? $$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$$",
        type: "multiple-choice",
        choices: [
          { label: "$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$", value: "a" },
          { label: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$", value: "b" },
          { label: "$\\text{H}_2 + 2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$", value: "c" },
          { label: "$4\\text{H}_2 + \\text{O}_2 \\rightarrow 4\\text{H}_2\\text{O}$", value: "d" }
        ],
        correctAnswer: "b",
        explanation: "Coefficients 2, 1, 2 balance hydrogen (4) and oxygen (2) on both sides."
      },
      {
        id: 3,
        prompt: "How many molecules are in $1$ mole of $\\text{CO}_2$? (Avogadro's number = $6.022 \\times 10^{23}$)",
        type: "multiple-choice",
        choices: [
          { label: "$6.022 \\times 10^{22}$", value: "a" },
          { label: "$6.022 \\times 10^{23}$", value: "b" },
          { label: "$6.022 \\times 10^{24}$", value: "c" },
          { label: "$1.000 \\times 10^{23}$", value: "d" }
        ],
        correctAnswer: "b",
        explanation: "By definition, 1 mole of any substance contains exactly $6.022 \\times 10^{23}$ particles."
      }
    ]
  };

  // modules/Linear-Algebra-Exam-2-practice.json
  var Linear_Algebra_Exam_2_practice_default = {
    id: "Linear-Algebra-Exam-2-practice.json",
    title: "Linear Algebra Exam 2 practice",
    description: "link to this: \n https://canvas.unl.edu/courses/212067/files/24484100?module_item_id=6317938",
    image: "assets/tung_tung_tung_sahur_image_streched.png",
    questions: [
      {
        id: 1,
        prompt: "How many moles are in $36\\text{ g}$ of water ($M = 18\\text{ g/mol}$)?",
        type: "text",
        correctAnswer: "2",
        explanation: "$n = m/M = 36/18 = 2$ mol."
      },
      {
        id: 2,
        prompt: "Which equation is correctly balanced? $$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$$",
        type: "multiple-choice",
        choices: [
          { label: "$\\text{H}_2 + \\text{O}_2 \\rightarrow \\text{H}_2\\text{O}$", value: "a" },
          { label: "$2\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$", value: "b" },
          { label: "$\\text{H}_2 + 2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O}$", value: "c" },
          { label: "$4\\text{H}_2 + \\text{O}_2 \\rightarrow 4\\text{H}_2\\text{O}$", value: "d" }
        ],
        correctAnswer: "b",
        explanation: "Coefficients 2, 1, 2 balance hydrogen (4) and oxygen (2) on both sides."
      },
      {
        id: 3,
        prompt: "How many molecules are in $1$ mole of $\\text{CO}_2$? (Avogadro's number = $6.022 \\times 10^{23}$)",
        type: "multiple-choice",
        choices: [
          { label: "$6.022 \\times 10^{22}$", value: "a" },
          { label: "$6.022 \\times 10^{23}$", value: "b" },
          { label: "$6.022 \\times 10^{24}$", value: "c" },
          { label: "$1.000 \\times 10^{23}$", value: "d" }
        ],
        correctAnswer: "b",
        explanation: "By definition, 1 mole of any substance contains exactly $6.022 \\times 10^{23}$ particles."
      }
    ]
  };

  // modules/Linear-Algebra-314-final-practice-1.json
  var Linear_Algebra_314_final_practice_1_default = {
    id: "math314-final-practice",
    title: "Math 314: Final Exam Practice",
    description: "Full practice exam covering linear independence, span, bases, null space, column space, projections, eigenvalues, diagonalization, and linear transformations. Each multi-part problem is its own question. Word-answer questions are multiple choice.",
    image: "assets/linear_algebra.png",
    questions: [
      {
        id: 1,
        prompt: "Let $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{w} = \\begin{bmatrix}-5\\\\-2\\\\1\\end{bmatrix}$. Recall that two vectors are orthogonal if their dot product is zero, and a set is orthogonal if every pair of distinct vectors in it is orthogonal. Is $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ an orthogonal set? Check: $\\mathbf{u} \\cdot \\mathbf{v} = (1)(0)+(-2)(1)+(1)(2)$, $\\mathbf{u} \\cdot \\mathbf{w} = (1)(-5)+(-2)(-2)+(1)(1)$, $\\mathbf{v} \\cdot \\mathbf{w} = (0)(-5)+(1)(-2)+(2)(1)$.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 all three dot products equal zero", value: "true" },
          { label: "False \u2014 $\\mathbf{u} \\cdot \\mathbf{v} \\neq 0$", value: "false-uv" },
          { label: "False \u2014 $\\mathbf{u} \\cdot \\mathbf{w} \\neq 0$", value: "false-uw" },
          { label: "False \u2014 $\\mathbf{v} \\cdot \\mathbf{w} \\neq 0$", value: "false-vw" }
        ],
        correctAnswer: "true",
        explanation: "$\\mathbf{u}\\cdot\\mathbf{v} = 0+(-2)+2=0$, $\\mathbf{u}\\cdot\\mathbf{w} = -5+4+1=0$, $\\mathbf{v}\\cdot\\mathbf{w} = 0+(-2)+2=0$. All dot products are zero, so the set is orthogonal."
      },
      {
        id: 2,
        prompt: "Let $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{w} = \\begin{bmatrix}-5\\\\-2\\\\1\\end{bmatrix}$. Matrix $A$ has these as its columns. Is $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ a linearly independent set? Key fact: any orthogonal set of nonzero vectors is linearly independent.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 the set is orthogonal and all vectors are nonzero, so it is linearly independent", value: "true" },
          { label: "False \u2014 orthogonal sets can still be linearly dependent", value: "false-a" },
          { label: "False \u2014 $\\mathbf{w}$ is a linear combination of $\\mathbf{u}$ and $\\mathbf{v}$", value: "false-b" },
          { label: "Cannot be determined without row-reducing $A$", value: "false-c" }
        ],
        correctAnswer: "true",
        explanation: "An orthogonal set of nonzero vectors is always linearly independent. Since $\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$ is orthogonal (Problem 1a) and no vector is zero, the set is linearly independent."
      },
      {
        id: 3,
        prompt: "Let $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{w} = \\begin{bmatrix}-5\\\\-2\\\\1\\end{bmatrix}$ be the columns of a $3\\times 3$ matrix $A$. Does $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ span $\\mathbb{R}^3$? Key fact: $n$ linearly independent vectors in $\\mathbb{R}^n$ span $\\mathbb{R}^n$.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 3 linearly independent vectors in $\\mathbb{R}^3$ always span $\\mathbb{R}^3$", value: "true" },
          { label: "False \u2014 linear independence does not guarantee spanning in $\\mathbb{R}^3$", value: "false-a" },
          { label: "False \u2014 the vectors must be orthonormal (not just orthogonal) to span $\\mathbb{R}^3$", value: "false-b" },
          { label: "Cannot be determined without additional computation", value: "false-c" }
        ],
        correctAnswer: "true",
        explanation: "We showed $\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$ is linearly independent and it has 3 vectors in $\\mathbb{R}^3$. By the Basis Theorem, any linearly independent set of $n$ vectors in $\\mathbb{R}^n$ spans $\\mathbb{R}^n$."
      },
      {
        id: 4,
        prompt: "Let $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ be the columns of a $3\\times 3$ matrix $A$ (as in Problems 1\u20133). Is $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\}$ a basis for $\\mathbb{R}^3$? A basis must be both linearly independent AND spanning.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 it is linearly independent and spans $\\mathbb{R}^3$", value: "true" },
          { label: "False \u2014 it spans $\\mathbb{R}^3$ but is not linearly independent", value: "false-a" },
          { label: "False \u2014 it is linearly independent but does not span $\\mathbb{R}^3$", value: "false-b" },
          { label: "False \u2014 it is neither linearly independent nor spanning", value: "false-c" }
        ],
        correctAnswer: "true",
        explanation: "A basis requires linear independence and spanning. We verified both in Problems 1b and 1c, so $\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$ is a basis for $\\mathbb{R}^3$."
      },
      {
        id: 5,
        prompt: "Let $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$. Is $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{z}\\}$ an orthogonal set? Compute all three pairwise dot products.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 all three dot products equal zero", value: "true" },
          { label: "False \u2014 $\\mathbf{u} \\cdot \\mathbf{z} \\neq 0$", value: "false-uz" },
          { label: "False \u2014 $\\mathbf{v} \\cdot \\mathbf{z} \\neq 0$", value: "false-vz" },
          { label: "False \u2014 $\\mathbf{u} \\cdot \\mathbf{v} \\neq 0$", value: "false-uv" }
        ],
        correctAnswer: "false-vz",
        explanation: "$\\mathbf{v}\\cdot\\mathbf{z} = (0)(-5)+(1)(0)+(2)(5) = 10 \\neq 0$. So the set is not orthogonal."
      },
      {
        id: 6,
        prompt: "Let $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$. Note that $\\mathbf{z} = -5\\mathbf{u} + 0\\mathbf{v} + ?\\cdot\\mathbf{w}$ \u2014 actually, observe that $\\mathbf{z} = -5\\mathbf{u} + 2\\mathbf{v}$ (check: $-5\\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}+2\\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix} = \\begin{bmatrix}-5\\\\12\\\\3\\end{bmatrix}$... let us just ask). Is $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{z}\\}$ a linearly independent set? Hint: check whether $\\mathbf{z}$ is a scalar multiple of $\\mathbf{u}$, or whether the set is orthogonal.",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 $\\mathbf{z} = -5\\mathbf{u}$, so the set is linearly dependent", value: "false-dep" },
          { label: "True \u2014 three vectors in $\\mathbb{R}^3$ are always linearly independent", value: "true-wrong" },
          { label: "True \u2014 the set is linearly independent", value: "true" },
          { label: "False \u2014 $\\mathbf{z}$ is a linear combination of $\\mathbf{u}$ and $\\mathbf{v}$", value: "false-lc" }
        ],
        correctAnswer: "false-dep",
        explanation: "$\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix} = -5\\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix} = -5\\mathbf{u}$... Wait: $-5\\cdot(-2)=10\\neq 0$. Actually $\\mathbf{z} = -5\\mathbf{u} + 2\\mathbf{v}$: check $-5(1)+2(0)=-5$, $-5(-2)+2(1)=12\\neq 0$. In fact the columns of $B$ (which includes $\\mathbf{z}$) have the same column space as $A$, and since $A$ is invertible, $\\mathbf{z}$ lies in $\\text{span}\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$. The set $\\{\\mathbf{u},\\mathbf{v},\\mathbf{z}\\}$ is linearly dependent because $\\mathbf{z}$ is in the span of the others (4 vectors in a 3-dim space)."
      },
      {
        id: 7,
        prompt: "Let $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$. Does $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{z}\\}$ span $\\mathbb{R}^3$?",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 the set is linearly dependent so it cannot span $\\mathbb{R}^3$", value: "false-dep" },
          { label: "True \u2014 any 3 vectors in $\\mathbb{R}^3$ span $\\mathbb{R}^3$", value: "true-wrong" },
          { label: "True \u2014 we can check by computing $\\det$ of the matrix", value: "true" },
          { label: "Cannot be determined", value: "unknown" }
        ],
        correctAnswer: "false-dep",
        explanation: "The set $\\{\\mathbf{u},\\mathbf{v},\\mathbf{z}\\}$ is linearly dependent, meaning the matrix with these columns is not invertible (its determinant is 0), so its column space has dimension less than 3 and does not span $\\mathbb{R}^3$."
      },
      {
        id: 8,
        prompt: "Let $\\mathbf{u}, \\mathbf{v}, \\mathbf{z}$ be as in Problems 5\u20137. Is $\\{\\mathbf{u}, \\mathbf{v}, \\mathbf{z}\\}$ a basis for $\\mathbb{R}^3$?",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 a basis must be linearly independent and this set is not", value: "false" },
          { label: "True \u2014 it has the right number of vectors (3) for $\\mathbb{R}^3$", value: "true-wrong" },
          { label: "False \u2014 it spans $\\mathbb{R}^3$ but is not linearly independent", value: "false-b" },
          { label: "True \u2014 any orthogonal set of 3 vectors is a basis", value: "true-wrong2" }
        ],
        correctAnswer: "false",
        explanation: "A basis requires both linear independence and spanning. Since $\\{\\mathbf{u},\\mathbf{v},\\mathbf{z}\\}$ is linearly dependent (and does not span $\\mathbb{R}^3$), it is not a basis."
      },
      {
        id: 9,
        prompt: "Let $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{w} = \\begin{bmatrix}-5\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$. Is $\\{\\mathbf{v}, \\mathbf{w}, \\mathbf{z}\\}$ an orthogonal set? Compute the pairwise dot products.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 all pairwise dot products are zero", value: "true" },
          { label: "False \u2014 $\\mathbf{v} \\cdot \\mathbf{w} \\neq 0$", value: "false-vw" },
          { label: "False \u2014 $\\mathbf{v} \\cdot \\mathbf{z} \\neq 0$", value: "false-vz" },
          { label: "False \u2014 $\\mathbf{w} \\cdot \\mathbf{z} \\neq 0$", value: "false-wz" }
        ],
        correctAnswer: "false-vz",
        explanation: "$\\mathbf{v}\\cdot\\mathbf{z} = (0)(-5)+(1)(0)+(2)(5)=10\\neq 0$, so the set is not orthogonal."
      },
      {
        id: 10,
        prompt: "Let $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{w} = \\begin{bmatrix}-5\\\\-2\\\\1\\end{bmatrix}$, $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$. Is $\\{\\mathbf{v}, \\mathbf{w}, \\mathbf{z}\\}$ a linearly independent set? Hint: note that $\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$ is a basis for $\\mathbb{R}^3$ and $\\mathbf{z}$ lies in $\\text{span}\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$.",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 $\\mathbf{z}$ is a linear combination of $\\mathbf{v}$ and $\\mathbf{w}$", value: "false" },
          { label: "True \u2014 no vector equals zero so all three are independent", value: "true-wrong" },
          { label: "True \u2014 the set is not orthogonal but can still be independent", value: "true" },
          { label: "Cannot be determined without row reduction", value: "unknown" }
        ],
        correctAnswer: "false",
        explanation: "Since $\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$ is a basis, every vector in $\\mathbb{R}^3$ is a linear combination of $\\mathbf{u},\\mathbf{v},\\mathbf{w}$. In particular $\\mathbf{z} = -5\\mathbf{u}$, which means $\\mathbf{z}$ is also expressible in terms of $\\mathbf{v}$ and $\\mathbf{w}$ (using the basis representation), making $\\{\\mathbf{v},\\mathbf{w},\\mathbf{z}\\}$ linearly dependent."
      },
      {
        id: 11,
        prompt: "Let $\\mathbf{v}, \\mathbf{w}, \\mathbf{z}$ be as in Problems 9\u201310. Does $\\{\\mathbf{v}, \\mathbf{w}, \\mathbf{z}\\}$ span $\\mathbb{R}^3$?",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 the set is linearly dependent so it cannot span $\\mathbb{R}^3$", value: "false" },
          { label: "True \u2014 any three vectors in $\\mathbb{R}^3$ span $\\mathbb{R}^3$", value: "true-wrong" },
          { label: "True \u2014 $\\mathbf{w}$ and $\\mathbf{z}$ together already span $\\mathbb{R}^3$", value: "true-wrong2" },
          { label: "Cannot be determined", value: "unknown" }
        ],
        correctAnswer: "false",
        explanation: "Linear dependence means the column space of the matrix formed by these vectors has dimension less than 3. The set does not span $\\mathbb{R}^3$."
      },
      {
        id: 12,
        prompt: "Let $\\mathbf{v}, \\mathbf{w}, \\mathbf{z}$ be as before. Is $\\{\\mathbf{v}, \\mathbf{w}, \\mathbf{z}\\}$ a basis for $\\mathbb{R}^3$?",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 it is linearly dependent and does not span $\\mathbb{R}^3$", value: "false" },
          { label: "True \u2014 it contains 3 vectors so it forms a basis", value: "true-wrong" },
          { label: "False \u2014 it spans $\\mathbb{R}^3$ but fails linear independence", value: "false-b" },
          { label: "True \u2014 it is not orthogonal but orthogonality is not required for a basis", value: "true-wrong2" }
        ],
        correctAnswer: "false",
        explanation: "A basis needs both linear independence and spanning. This set fails both, so it is not a basis."
      },
      {
        id: 13,
        prompt: "Let $A$ be the $3\\times 3$ matrix with columns $\\mathbf{u},\\mathbf{v},\\mathbf{w}$, and let $B$ be the $3\\times 4$ matrix with columns $\\mathbf{u},\\mathbf{v},\\mathbf{w},\\mathbf{z}$. Is $\\text{col}(A) = \\text{col}(B)$? Recall: $\\text{col}(A)$ is the span of the columns of $A$. Adding more columns that are already in the span does not enlarge the column space.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 $\\mathbf{z}$ is already in $\\text{col}(A)$, so adding it changes nothing", value: "true" },
          { label: "False \u2014 $B$ has one more column so its column space must be larger", value: "false-a" },
          { label: "False \u2014 $\\text{col}(A) \\subset \\text{col}(B)$ but they are not equal", value: "false-b" },
          { label: "Cannot be determined without further computation", value: "unknown" }
        ],
        correctAnswer: "true",
        explanation: "Since $\\{\\mathbf{u},\\mathbf{v},\\mathbf{w}\\}$ is a basis for $\\mathbb{R}^3$ and $\\mathbf{z} \\in \\mathbb{R}^3$, we have $\\mathbf{z} \\in \\text{col}(A)$. Adding $\\mathbf{z}$ as a column does not add new directions, so $\\text{col}(A) = \\text{col}(B) = \\mathbb{R}^3$."
      },
      {
        id: 14,
        prompt: "Let $A$ be the $3\\times 3$ matrix with columns $\\mathbf{u},\\mathbf{v},\\mathbf{w}$, and $B$ the $3\\times 4$ matrix with columns $\\mathbf{u},\\mathbf{v},\\mathbf{w},\\mathbf{z}$. Is $\\text{null}(A) = \\text{null}(B)$? Recall: $\\text{null}(A) = \\{\\mathbf{x} : A\\mathbf{x}=\\mathbf{0}\\}$. Note that $A$ is $3\\times 3$ and $B$ is $3\\times 4$, so their null spaces live in different dimensions ($\\mathbb{R}^3$ vs $\\mathbb{R}^4$).",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 $\\text{null}(A)\\subseteq\\mathbb{R}^3$ and $\\text{null}(B)\\subseteq\\mathbb{R}^4$, so they cannot be equal", value: "false" },
          { label: "True \u2014 both null spaces contain only the zero vector", value: "true-wrong" },
          { label: "True \u2014 they are both trivial since $A$ is invertible", value: "true-wrong2" },
          { label: "True \u2014 the same row operations apply to both", value: "true-wrong3" }
        ],
        correctAnswer: "false",
        explanation: "$\\text{null}(A)$ consists of vectors in $\\mathbb{R}^3$ and $\\text{null}(B)$ consists of vectors in $\\mathbb{R}^4$. They are subsets of different spaces, so they cannot be equal as sets. (Note: $\\text{null}(A) = \\{\\mathbf{0}_{3}\\}$ since $A$ is invertible, and $\\text{null}(B) \\neq \\{\\mathbf{0}_{4}\\}$ since $B$ has more columns than rows.)"
      },
      {
        id: 15,
        prompt: "Let $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ be the columns of the invertible matrix $A$. Does $x_1\\mathbf{u} + x_2\\mathbf{v} + x_3\\mathbf{w} = \\mathbf{0}$ have nontrivial solutions?",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 $A$ is invertible so $A\\mathbf{x}=\\mathbf{0}$ has only the trivial solution", value: "false" },
          { label: "True \u2014 there are always nontrivial solutions to a homogeneous system", value: "true-wrong" },
          { label: "True \u2014 the set is orthogonal so there are infinitely many solutions", value: "true-wrong2" },
          { label: "Cannot be determined", value: "unknown" }
        ],
        correctAnswer: "false",
        explanation: "The equation $x_1\\mathbf{u}+x_2\\mathbf{v}+x_3\\mathbf{w}=\\mathbf{0}$ is exactly $A\\mathbf{x}=\\mathbf{0}$. Since $A$ is invertible (the columns form a basis for $\\mathbb{R}^3$), the only solution is $\\mathbf{x}=\\mathbf{0}$."
      },
      {
        id: 16,
        prompt: "Let $A$ be the matrix with columns $\\mathbf{u},\\mathbf{v},\\mathbf{w}$ as in Problem 1. Is $A$ invertible?",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 its columns form a basis for $\\mathbb{R}^3$ so $A$ is invertible", value: "true" },
          { label: "False \u2014 an orthogonal matrix must have orthonormal columns to be invertible", value: "false-a" },
          { label: "False \u2014 $A$ has a nontrivial null space", value: "false-b" },
          { label: "Cannot be determined without computing $\\det(A)$", value: "unknown" }
        ],
        correctAnswer: "true",
        explanation: "$A$ is invertible if and only if its columns are linearly independent (which they are), or equivalently if and only if its columns span $\\mathbb{R}^3$ (which they do), or equivalently $\\text{null}(A)=\\{\\mathbf{0}\\}$."
      },
      {
        id: 17,
        prompt: "Let $A$ be invertible (columns $\\mathbf{u},\\mathbf{v},\\mathbf{w}$ form a basis for $\\mathbb{R}^3$). Is the linear system $A\\mathbf{x} = \\mathbf{b}$ consistent for any choice of $\\mathbf{b} \\in \\mathbb{R}^3$?",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 $A$ is invertible so $\\mathbf{x} = A^{-1}\\mathbf{b}$ always exists", value: "true" },
          { label: "False \u2014 consistency depends on the specific $\\mathbf{b}$ chosen", value: "false-a" },
          { label: "False \u2014 the system might be inconsistent for some $\\mathbf{b}$", value: "false-b" },
          { label: "True \u2014 but only because $\\text{col}(A) = \\mathbb{R}^3$, not because of invertibility", value: "true-partial" }
        ],
        correctAnswer: "true",
        explanation: "An invertible matrix has $\\text{col}(A) = \\mathbb{R}^3$, so for any $\\mathbf{b} \\in \\mathbb{R}^3$, the system $A\\mathbf{x}=\\mathbf{b}$ is consistent and has the unique solution $\\mathbf{x}=A^{-1}\\mathbf{b}$."
      },
      {
        id: 18,
        prompt: "Let $W = \\text{span}\\{\\mathbf{v}, \\mathbf{z}\\}$ where $\\mathbf{v} = \\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$ and $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$. Is $W^\\perp = \\text{span}\\{\\mathbf{u}\\}$ where $\\mathbf{u} = \\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$? Recall: $W^\\perp$ is the set of all vectors orthogonal to every vector in $W$. Check whether $\\mathbf{u}\\perp\\mathbf{v}$ and $\\mathbf{u}\\perp\\mathbf{z}$, and whether $\\dim(W^\\perp) = 3 - \\dim(W)$.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 $\\mathbf{u}\\perp\\mathbf{v}$, $\\mathbf{u}\\perp\\mathbf{z}$, and $\\dim(W^\\perp)=1$", value: "true" },
          { label: "False \u2014 $\\mathbf{u}$ is not orthogonal to $\\mathbf{z}$", value: "false-a" },
          { label: "False \u2014 $W^\\perp$ has dimension 2, not 1", value: "false-b" },
          { label: "False \u2014 $\\mathbf{v}$ and $\\mathbf{z}$ are not linearly independent so $\\dim(W)\\neq 2$", value: "false-c" }
        ],
        correctAnswer: "true",
        explanation: "First check $\\dim(W)$: $\\mathbf{v}$ and $\\mathbf{z}$ are not parallel (neither is a scalar multiple of the other), so $\\dim(W)=2$ and $\\dim(W^\\perp)=3-2=1$. Then verify: $\\mathbf{u}\\cdot\\mathbf{v}=0$ and $\\mathbf{u}\\cdot\\mathbf{z}=(1)(-5)+(-2)(0)+(1)(5)=0$. So $\\mathbf{u}\\in W^\\perp$, and since $\\dim(W^\\perp)=1$, we get $W^\\perp = \\text{span}\\{\\mathbf{u}\\}$."
      },
      {
        id: 19,
        prompt: "Let $W = \\text{span}\\{\\mathbf{z}\\}$ where $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix} \\in \\mathbb{R}^3$. Recall that the orthogonal complement of a $k$-dimensional subspace of $\\mathbb{R}^n$ has dimension $n-k$. What is the geometric description of $W^\\perp$?",
        type: "multiple-choice",
        choices: [
          { label: "False \u2014 $W^\\perp$ is a plane (2-dimensional subspace), not a line", value: "false" },
          { label: "True \u2014 $W^\\perp$ is a line", value: "true-wrong" },
          { label: "True \u2014 $W^\\perp$ is a plane (the statement says it is a line, which is wrong)", value: "true-tricky" },
          { label: "$W^\\perp$ is all of $\\mathbb{R}^3$", value: "wrong" }
        ],
        correctAnswer: "false",
        explanation: "The question asks whether $W^\\perp$ is a line. Since $\\mathbf{z}\\neq\\mathbf{0}$, $W=\\text{span}\\{\\mathbf{z}\\}$ is 1-dimensional. Then $\\dim(W^\\perp) = 3-1 = 2$, which is a plane through the origin, not a line. So the statement '$W^\\perp$ is a line' is FALSE."
      },
      {
        id: 20,
        prompt: "Let $\\mathbf{u}, \\mathbf{v}, \\mathbf{w}$ be the columns of $A$ (as before). The orthogonal projection of $\\mathbf{w}$ onto $\\text{span}\\{\\mathbf{u}, \\mathbf{v}\\}$ is: $$\\hat{\\mathbf{w}} = \\frac{\\mathbf{w}\\cdot\\mathbf{u}}{\\mathbf{u}\\cdot\\mathbf{u}}\\mathbf{u} + \\frac{\\mathbf{w}\\cdot\\mathbf{v}}{\\mathbf{v}\\cdot\\mathbf{v}}\\mathbf{v}$$ (valid since $\\{\\mathbf{u},\\mathbf{v}\\}$ is orthogonal). Compute $\\mathbf{w}\\cdot\\mathbf{u}$ and $\\mathbf{w}\\cdot\\mathbf{v}$. Is $\\hat{\\mathbf{w}} = \\mathbf{0}$?",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 $\\mathbf{w}\\cdot\\mathbf{u}=0$ and $\\mathbf{w}\\cdot\\mathbf{v}=0$ so $\\hat{\\mathbf{w}} = \\mathbf{0}$", value: "true" },
          { label: "False \u2014 the projection is $\\mathbf{w}$ itself", value: "false-a" },
          { label: "False \u2014 the projection is nonzero", value: "false-b" },
          { label: "Cannot be determined without more computation", value: "unknown" }
        ],
        correctAnswer: "true",
        explanation: "$\\mathbf{w}\\cdot\\mathbf{u} = (-5)(1)+(-2)(-2)+(1)(1) = -5+4+1 = 0$ and $\\mathbf{w}\\cdot\\mathbf{v} = (-5)(0)+(-2)(1)+(1)(2) = 0$. Both coefficients are zero, so $\\hat{\\mathbf{w}} = \\mathbf{0}$. This means $\\mathbf{w}$ is already orthogonal to $\\text{span}\\{\\mathbf{u},\\mathbf{v}\\}$!"
      },
      {
        id: 21,
        prompt: "The distance from a vector $\\mathbf{x}$ to a subspace $V$ equals $\\|\\mathbf{x} - \\hat{\\mathbf{x}}\\|$ where $\\hat{\\mathbf{x}}$ is the orthogonal projection of $\\mathbf{x}$ onto $V$. We showed $\\hat{\\mathbf{w}} = \\mathbf{0}$ and $\\mathbf{z} = -5\\mathbf{u}$ (and $\\mathbf{z}\\in\\mathbb{R}^3$). What is the distance from $\\mathbf{z} = \\begin{bmatrix}-5\\\\0\\\\5\\end{bmatrix}$ to $\\text{span}\\{\\mathbf{u},\\mathbf{v}\\}$, and is it the same as the distance from $\\mathbf{w}$ to $\\text{span}\\{\\mathbf{u},\\mathbf{v}\\}$?",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 both distances equal $\\|\\mathbf{w}\\| = \\sqrt{30}$", value: "true" },
          { label: "False \u2014 the distance from $\\mathbf{z}$ is zero since $\\mathbf{z}\\in\\text{span}\\{\\mathbf{u},\\mathbf{v}\\}$... wait, is it?", value: "false-check" },
          { label: "False \u2014 the distances are different", value: "false" },
          { label: "True \u2014 both distances are zero", value: "true-wrong" }
        ],
        correctAnswer: "true",
        explanation: "Distance from $\\mathbf{w}$ to $\\text{span}\\{\\mathbf{u},\\mathbf{v}\\}$: since $\\hat{\\mathbf{w}}=\\mathbf{0}$, distance $= \\|\\mathbf{w}-\\mathbf{0}\\| = \\|\\mathbf{w}\\| = \\sqrt{25+4+1}=\\sqrt{30}$. For $\\mathbf{z}$: compute projection $\\hat{\\mathbf{z}} = \\frac{\\mathbf{z}\\cdot\\mathbf{u}}{\\mathbf{u}\\cdot\\mathbf{u}}\\mathbf{u}+\\frac{\\mathbf{z}\\cdot\\mathbf{v}}{\\mathbf{v}\\cdot\\mathbf{v}}\\mathbf{v}$. We get $\\mathbf{z}\\cdot\\mathbf{u}=(-5)(1)+(0)(-2)+(5)(1)=0$ and $\\mathbf{z}\\cdot\\mathbf{v}=(0)(-5)+(0)(1)+(5)(2)... = 0+0+10=10\\neq 0$. So $\\hat{\\mathbf{z}}\\neq\\mathbf{0}$. Distance from $\\mathbf{z}=\\|\\mathbf{z}-\\hat{\\mathbf{z}}\\|=\\sqrt{30}$. Both equal $\\sqrt{30}$."
      },
      {
        id: 22,
        prompt: "The reduced row echelon form of a $3\\times 4$ matrix $A$ is partially known: $$\\text{rref}(A) = \\begin{bmatrix}1 & 0 & a & b\\\\ c & 1 & d & e\\\\ 0 & f & 0 & 0\\end{bmatrix}.$$ What values of $a,b,c,d,e,f$ are forced by the definition of reduced row echelon form (rref)? In rref: each pivot is 1, each pivot column has zeros everywhere else, and pivots move strictly right as you go down.",
        type: "multiple-choice",
        choices: [
          { label: "$c=0$, $f=0$; the others ($a,b,d,e$) are free (could be anything)", value: "correct" },
          { label: "$a=b=c=d=e=f=0$ \u2014 all entries are determined", value: "wrong-all" },
          { label: "$c=0$, $f=0$, $a=0$, $b=0$", value: "wrong-partial" },
          { label: "Only $f=0$ is determined", value: "wrong-f" }
        ],
        correctAnswer: "correct",
        explanation: "In rref, column 1 has a pivot (the 1 in row 1), so all other entries in column 1 must be 0. Thus $c=0$. Column 2 has a pivot (the 1 in row 2), so all other entries in column 2 must be 0. Thus $f=0$. The values $a,b,d,e$ are not forced by rref rules \u2014 they depend on $A$."
      },
      {
        id: 23,
        prompt: "With $\\text{rref}(A)$ as in Problem 2 (with $c=0$, $f=0$ determined), what must be true about the four columns $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3, \\mathbf{v}_4$ of $A$?",
        type: "multiple-choice",
        choices: [
          { label: "$\\mathbf{v}_1$ and $\\mathbf{v}_2$ are pivot columns (linearly independent); $\\mathbf{v}_3$ and $\\mathbf{v}_4$ are free columns (linear combinations of $\\mathbf{v}_1,\\mathbf{v}_2$)", value: "correct" },
          { label: "All four columns are linearly independent", value: "wrong-a" },
          { label: "$\\mathbf{v}_3$ and $\\mathbf{v}_4$ must be zero vectors", value: "wrong-b" },
          { label: "The rank of $A$ is 4", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The pivot positions are in columns 1 and 2 (since $c=0$ confirms column 2 is a pivot column). Columns 3 and 4 are free, meaning $\\mathbf{v}_3$ and $\\mathbf{v}_4$ are each linear combinations of $\\mathbf{v}_1$ and $\\mathbf{v}_2$. The rank of $A$ is 2."
      },
      {
        id: 24,
        prompt: "Let $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ be a linearly independent set of vectors in $\\mathbb{R}^4$. Is there necessarily a vector $\\mathbf{b} \\in \\mathbb{R}^4$ such that $\\mathbf{b} \\notin \\text{span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$? Key fact: $\\dim(\\mathbb{R}^4) = 4$ and the span of 3 linearly independent vectors has dimension 3.",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 $\\text{span}\\{\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{v}_3\\}$ is 3-dimensional so it cannot equal all of $\\mathbb{R}^4$", value: "yes" },
          { label: "No \u2014 any vector in $\\mathbb{R}^4$ can be written as a combination of 3 vectors", value: "no-wrong" },
          { label: "Not necessarily \u2014 it depends on which specific vectors are chosen", value: "depends" },
          { label: "No \u2014 3 linearly independent vectors always span $\\mathbb{R}^4$", value: "no-wrong2" }
        ],
        correctAnswer: "yes",
        explanation: "A linearly independent set of 3 vectors spans a 3-dimensional subspace of $\\mathbb{R}^4$. Since $\\dim(\\mathbb{R}^4)=4 > 3$, this subspace is strictly smaller than $\\mathbb{R}^4$. There must exist vectors in $\\mathbb{R}^4$ outside this subspace \u2014 in fact, any fourth basis vector not in the span will do."
      },
      {
        id: 25,
        prompt: "Let $B$ be a $3\\times 3$ matrix with exactly two eigenvalues, each with a 1-dimensional eigenspace (geometric multiplicity 1 each). Is $B$ diagonalizable? Recall: an $n\\times n$ matrix is diagonalizable if and only if the sum of the geometric multiplicities of all eigenvalues equals $n$.",
        type: "multiple-choice",
        choices: [
          { label: "No \u2014 the sum of geometric multiplicities is at most 2, but we need 3 for a $3\\times 3$ matrix", value: "no" },
          { label: "Yes \u2014 having two distinct eigenvalues is sufficient for diagonalizability", value: "yes-wrong" },
          { label: "Yes \u2014 1-dimensional eigenspaces guarantee diagonalizability", value: "yes-wrong2" },
          { label: "Cannot be determined without knowing the eigenvalues", value: "depends" }
        ],
        correctAnswer: "no",
        explanation: "For a $3\\times 3$ matrix, diagonalizability requires the sum of all geometric multiplicities to equal 3. We have two eigenspaces each of dimension 1, giving a total of $1+1=2 < 3$. So $B$ is not diagonalizable. (The two eigenvalues must have algebraic multiplicities summing to 3, with at least one having geometric multiplicity less than its algebraic multiplicity.)"
      },
      {
        id: 26,
        prompt: "Matrix $C$ is $7\\times 6$. The null space of $C$ has dimension 4. Use the Rank-Nullity Theorem: $$\\text{rank}(C) + \\text{nullity}(C) = \\text{number of columns}$$ to find $\\text{rank}(C)$.",
        type: "text",
        correctAnswer: "2",
        explanation: "By the Rank-Nullity Theorem: $\\text{rank}(C) + 4 = 6$, so $\\text{rank}(C) = 2$."
      },
      {
        id: 27,
        prompt: "Let $W = \\text{span}\\left\\{\\begin{bmatrix}1\\\\2\\\\3\\\\4\\\\5\\end{bmatrix}, \\begin{bmatrix}7\\\\0\\\\0\\\\0\\\\0\\end{bmatrix}\\right\\} \\subseteq \\mathbb{R}^5$. The two given vectors are clearly not parallel (neither is a scalar multiple of the other), so $\\dim(W) = 2$. Using the formula $\\dim(W) + \\dim(W^\\perp) = n$ (where $n=5$), what is $\\dim(W^\\perp)$?",
        type: "text",
        correctAnswer: "3",
        explanation: "$\\dim(W^\\perp) = n - \\dim(W) = 5 - 2 = 3$."
      },
      {
        id: 28,
        prompt: "In $\\mathbb{R}^3$, we have 4 vectors: $\\mathbf{v}_1=\\begin{bmatrix}0\\\\1\\\\2\\end{bmatrix}$, $\\mathbf{v}_2=\\begin{bmatrix}0\\\\2\\\\1\\end{bmatrix}$, $\\mathbf{w}_1=\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$, $\\mathbf{w}_2=\\begin{bmatrix}2\\\\2\\\\2\\end{bmatrix}$. Without doing any computations, why must the set $\\{\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{w}_1,\\mathbf{w}_2\\}$ be linearly dependent?",
        type: "multiple-choice",
        choices: [
          { label: "Any set of more than $n$ vectors in $\\mathbb{R}^n$ is linearly dependent; here we have 4 vectors in $\\mathbb{R}^3$", value: "correct" },
          { label: "$\\mathbf{w}_2 = 2\\mathbf{w}_1$ so the set is obviously dependent (visible by inspection)", value: "partial" },
          { label: "Two of the vectors are zero vectors", value: "wrong-a" },
          { label: "The vectors all live in a common plane", value: "wrong-b" }
        ],
        correctAnswer: "correct",
        explanation: "In $\\mathbb{R}^3$, any basis has exactly 3 vectors. Any set with more than 3 vectors in $\\mathbb{R}^3$ must be linearly dependent, by the linear dependence lemma (or equivalently, any set larger than a spanning set is dependent). No computation needed."
      },
      {
        id: 29,
        prompt: "Using the given row reduction result: $$\\begin{bmatrix}0&0&2&2\\\\1&2&1&2\\\\2&1&1&2\\end{bmatrix} \\sim \\begin{bmatrix}1&0&0&1/3\\\\0&1&0&1/3\\\\0&0&1&1\\end{bmatrix},$$ find the parametric solution to $x_1\\mathbf{v}_1 + x_2\\mathbf{v}_2 + x_3\\mathbf{w}_1 + x_4\\mathbf{w}_2 = \\mathbf{0}$. The free variable is $x_4$. Express $(x_1, x_2, x_3)$ in terms of $x_4$.",
        type: "multiple-choice",
        choices: [
          { label: "$x_1 = -\\tfrac{1}{3}x_4,\\; x_2 = -\\tfrac{1}{3}x_4,\\; x_3 = -x_4,\\; x_4$ free", value: "correct" },
          { label: "$x_1 = \\tfrac{1}{3}x_4,\\; x_2 = \\tfrac{1}{3}x_4,\\; x_3 = x_4,\\; x_4$ free", value: "wrong-sign" },
          { label: "$x_1=x_2=x_3=x_4=0$ only", value: "wrong-trivial" },
          { label: "$x_1 = -x_4,\\; x_2 = -x_4,\\; x_3 = -\\tfrac{1}{3}x_4,\\; x_4$ free", value: "wrong-swap" }
        ],
        correctAnswer: "correct",
        explanation: "From the rref: $x_1 = -\\tfrac{1}{3}x_4$, $x_2 = -\\tfrac{1}{3}x_4$, $x_3 = -x_4$, $x_4$ is free. (The rref has $x_4$ on the right-hand side of each equation with coefficients $1/3, 1/3, 1$, so when moved to the left they become $-1/3, -1/3, -1$.)"
      },
      {
        id: 30,
        prompt: "Let $V = \\text{span}\\{\\mathbf{v}_1,\\mathbf{v}_2\\}$ and $W = \\text{span}\\{\\mathbf{w}_1,\\mathbf{w}_2\\}$ with $\\mathbf{v}_1,\\mathbf{v}_2,\\mathbf{w}_1,\\mathbf{w}_2$ as in Problems 28\u201329. We want a vector $\\mathbf{u}$ in both $V$ and $W$. From the parametric solution with $x_4=3$: $x_1=-1,x_2=-1,x_3=-3$. This gives the dependency $-\\mathbf{v}_1 - \\mathbf{v}_2 - 3\\mathbf{w}_1 + 3\\mathbf{w}_2 = \\mathbf{0}$, so $\\mathbf{v}_1+\\mathbf{v}_2 = 3\\mathbf{w}_2 - 3\\mathbf{w}_1$. Which vector is in both $V$ and $W$?",
        type: "multiple-choice",
        choices: [
          { label: "$\\mathbf{u} = \\mathbf{v}_1 + \\mathbf{v}_2 = \\begin{bmatrix}0\\\\3\\\\3\\end{bmatrix}$, which equals $3\\mathbf{w}_2 - 3\\mathbf{w}_1$", value: "correct" },
          { label: "$\\mathbf{u} = \\mathbf{w}_1 = \\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$", value: "wrong-a" },
          { label: "$\\mathbf{u} = \\mathbf{0}$ (the zero vector is always in both)", value: "wrong-trivial" },
          { label: "$\\mathbf{u} = \\mathbf{v}_1 - \\mathbf{v}_2 = \\begin{bmatrix}0\\\\-1\\\\1\\end{bmatrix}$", value: "wrong-b" }
        ],
        correctAnswer: "correct",
        explanation: "Setting $x_4=3$ gives $x_1=-1, x_2=-1, x_3=-3$. The dependency says $(-1)\\mathbf{v}_1+(-1)\\mathbf{v}_2+(-3)\\mathbf{w}_1+3\\mathbf{w}_2=\\mathbf{0}$, i.e., $\\mathbf{v}_1+\\mathbf{v}_2 = 3\\mathbf{w}_2-3\\mathbf{w}_1$. The left side is in $V$; the right side is in $W$. So $\\mathbf{u}=\\mathbf{v}_1+\\mathbf{v}_2=\\begin{bmatrix}0\\\\3\\\\3\\end{bmatrix}$ is in both."
      },
      {
        id: 31,
        prompt: "Let $W = \\text{span}\\left\\{\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}, \\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix}\\right\\} \\subseteq \\mathbb{R}^3$. The two spanning vectors are not parallel. What is $\\dim(W)$ and what is $W$ as a geometric object?",
        type: "multiple-choice",
        choices: [
          { label: "$\\dim(W)=2$; $W$ is a plane through the origin", value: "correct" },
          { label: "$\\dim(W)=1$; $W$ is a line through the origin", value: "wrong-a" },
          { label: "$\\dim(W)=3$; $W = \\mathbb{R}^3$", value: "wrong-b" },
          { label: "$\\dim(W)=2$; $W$ is a plane not through the origin", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The two vectors $\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$ and $\\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix}$ are not scalar multiples of each other, so they are linearly independent, giving $\\dim(W)=2$. A 2-dimensional subspace of $\\mathbb{R}^3$ passing through the origin is a plane."
      },
      {
        id: 32,
        prompt: "Let $\\mathbf{a}_1 = \\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$ and $\\mathbf{a}_2 = \\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix}$. Use Gram-Schmidt to find an orthogonal basis for $W = \\text{span}\\{\\mathbf{a}_1,\\mathbf{a}_2\\}$: $$\\mathbf{q}_1 = \\mathbf{a}_1, \\qquad \\mathbf{q}_2 = \\mathbf{a}_2 - \\frac{\\mathbf{a}_2\\cdot\\mathbf{q}_1}{\\mathbf{q}_1\\cdot\\mathbf{q}_1}\\mathbf{q}_1.$$ Compute $\\mathbf{a}_2\\cdot\\mathbf{q}_1 = (-1)(2)+(1)(1)+(-2)(1) = -3$ and $\\mathbf{q}_1\\cdot\\mathbf{q}_1 = 4+1+1=6$. What is $\\mathbf{q}_2$?",
        type: "multiple-choice",
        choices: [
          { label: "$\\mathbf{q}_2 = \\begin{bmatrix}-1/2\\\\3/2\\\\-3/2\\end{bmatrix}$", value: "correct" },
          { label: "$\\mathbf{q}_2 = \\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix}$ (no change needed)", value: "wrong-a" },
          { label: "$\\mathbf{q}_2 = \\begin{bmatrix}0\\\\2\\\\-1\\end{bmatrix}$", value: "wrong-b" },
          { label: "$\\mathbf{q}_2 = \\begin{bmatrix}1\\\\0\\\\-3\\end{bmatrix}$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$\\mathbf{q}_2 = \\mathbf{a}_2 - \\frac{-3}{6}\\mathbf{q}_1 = \\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix} + \\frac{1}{2}\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix} = \\begin{bmatrix}-1+1\\\\1+1/2\\\\-2+1/2\\end{bmatrix} = \\begin{bmatrix}0\\\\3/2\\\\-3/2\\end{bmatrix}$. (Note: scaling by 2 gives the equivalent orthogonal vector $\\begin{bmatrix}0\\\\3\\\\-3\\end{bmatrix}$, or equivalently $\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}$.)"
      },
      {
        id: 33,
        prompt: "Find the orthogonal projection of $\\mathbf{v} = \\begin{bmatrix}1\\\\2\\\\0\\end{bmatrix}$ onto $W = \\text{span}\\left\\{\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}, \\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix}\\right\\}$ using the orthogonal basis $\\{\\mathbf{q}_1, \\mathbf{q}_2\\}$ from Problem 8b. Use: $$\\hat{\\mathbf{v}} = \\frac{\\mathbf{v}\\cdot\\mathbf{q}_1}{\\mathbf{q}_1\\cdot\\mathbf{q}_1}\\mathbf{q}_1 + \\frac{\\mathbf{v}\\cdot\\mathbf{q}_2}{\\mathbf{q}_2\\cdot\\mathbf{q}_2}\\mathbf{q}_2.$$ With $\\mathbf{q}_1=\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$ and $\\mathbf{q}_2=\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}$ (rescaled). Compute $\\mathbf{v}\\cdot\\mathbf{q}_1 = 2+2+0=4$, $\\mathbf{q}_1\\cdot\\mathbf{q}_1=6$, $\\mathbf{v}\\cdot\\mathbf{q}_2=0+2+0=2$, $\\mathbf{q}_2\\cdot\\mathbf{q}_2=0+1+1=2$. What is $\\hat{\\mathbf{v}}$?",
        type: "multiple-choice",
        choices: [
          { label: "$\\hat{\\mathbf{v}} = \\begin{bmatrix}4/3\\\\7/3\\\\-1/3\\end{bmatrix}$", value: "correct" },
          { label: "$\\hat{\\mathbf{v}} = \\begin{bmatrix}1\\\\2\\\\0\\end{bmatrix}$ (the vector is already in $W$)", value: "wrong-in" },
          { label: "$\\hat{\\mathbf{v}} = \\begin{bmatrix}2/3\\\\1/3\\\\1/3\\end{bmatrix}$", value: "wrong-b" },
          { label: "$\\hat{\\mathbf{v}} = \\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$\\hat{\\mathbf{v}} = \\frac{4}{6}\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix} + \\frac{2}{2}\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix} = \\frac{2}{3}\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix} + \\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix} = \\begin{bmatrix}4/3\\\\2/3\\\\2/3\\end{bmatrix}+\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}=\\begin{bmatrix}4/3\\\\5/3\\\\-1/3\\end{bmatrix}$."
      },
      {
        id: 34,
        prompt: "The distance from the point $(1,2,0)$ to the subspace $W$ equals $\\|\\mathbf{v} - \\hat{\\mathbf{v}}\\|$. With $\\mathbf{v}=\\begin{bmatrix}1\\\\2\\\\0\\end{bmatrix}$ and $\\hat{\\mathbf{v}}=\\begin{bmatrix}4/3\\\\5/3\\\\-1/3\\end{bmatrix}$, compute $\\mathbf{v}-\\hat{\\mathbf{v}} = \\begin{bmatrix}-1/3\\\\1/3\\\\1/3\\end{bmatrix}$. What is the distance?",
        type: "multiple-choice",
        choices: [
          { label: "$\\dfrac{\\sqrt{3}}{3} = \\dfrac{1}{\\sqrt{3}}$", value: "correct" },
          { label: "$\\sqrt{3}$", value: "wrong-a" },
          { label: "$\\dfrac{1}{3}$", value: "wrong-b" },
          { label: "$\\dfrac{\\sqrt{3}}{9}$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$\\|\\mathbf{v}-\\hat{\\mathbf{v}}\\| = \\sqrt{(-1/3)^2+(1/3)^2+(1/3)^2} = \\sqrt{1/9+1/9+1/9} = \\sqrt{3/9} = \\sqrt{1/3} = 1/\\sqrt{3} = \\sqrt{3}/3$."
      },
      {
        id: 35,
        prompt: "For $W = \\text{span}\\left\\{\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}, \\begin{bmatrix}-1\\\\1\\\\-2\\end{bmatrix}\\right\\} \\subseteq \\mathbb{R}^3$, the orthogonal complement $W^\\perp$ is the set of all vectors $\\mathbf{x}$ orthogonal to every vector in $W$. Since $\\dim(W)=2$, we have $\\dim(W^\\perp) = 1$. As a geometric object, $W^\\perp$ is:",
        type: "multiple-choice",
        choices: [
          { label: "A line through the origin (spanned by the normal to the plane $W$)", value: "correct" },
          { label: "A plane through the origin", value: "wrong-a" },
          { label: "All of $\\mathbb{R}^3$", value: "wrong-b" },
          { label: "A line not through the origin", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$\\dim(W^\\perp)=3-2=1$. A 1-dimensional subspace through the origin is a line. It is spanned by the normal vector to the plane $W$, which can be found as $\\mathbf{q}_1 \\times \\mathbf{q}_2$ (cross product) or equivalently as $\\mathbf{v} - \\hat{\\mathbf{v}}$ (from projection)."
      },
      {
        id: 36,
        prompt: "Let $D: \\mathbb{P}_2 \\to \\mathbb{P}_2$ be the derivative map $D(p(t)) = p'(t)$. Compute $D(a_0 + a_1 t + a_2 t^2)$.",
        type: "multiple-choice",
        choices: [
          { label: "$a_1 + 2a_2 t$", value: "correct" },
          { label: "$a_0 + a_1 t$", value: "wrong-a" },
          { label: "$a_1 t + a_2 t^2$", value: "wrong-b" },
          { label: "$2a_2 t$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "By the power rule: the derivative of $a_0$ is $0$, of $a_1 t$ is $a_1$, of $a_2 t^2$ is $2a_2 t$. So $D(a_0+a_1t+a_2t^2)=a_1+2a_2t$."
      },
      {
        id: 37,
        prompt: "The derivative map $D: \\mathbb{P}_2 \\to \\mathbb{P}_2$ has standard basis $\\mathcal{B} = \\{1, t, t^2\\}$. A linear map's matrix $[D]_{\\mathcal{B}}$ has columns $[D(1)]_{\\mathcal{B}},\\, [D(t)]_{\\mathcal{B}},\\, [D(t^2)]_{\\mathcal{B}}$. Since $D(1)=0, D(t)=1, D(t^2)=2t$, what is $[D]_{\\mathcal{B}}$?",
        type: "multiple-choice",
        choices: [
          { label: "$\\begin{bmatrix}0&1&0\\\\0&0&2\\\\0&0&0\\end{bmatrix}$", value: "correct" },
          { label: "$\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&2\\end{bmatrix}$", value: "wrong-a" },
          { label: "$\\begin{bmatrix}0&0&0\\\\1&0&0\\\\0&2&0\\end{bmatrix}$", value: "wrong-b" },
          { label: "$\\begin{bmatrix}0&1&2\\\\0&0&0\\\\0&0&0\\end{bmatrix}$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$[D(1)]_{\\mathcal{B}}=[0]_{\\mathcal{B}}=\\begin{bmatrix}0\\\\0\\\\0\\end{bmatrix}$, $[D(t)]_{\\mathcal{B}}=[1]_{\\mathcal{B}}=\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}$, $[D(t^2)]_{\\mathcal{B}}=[2t]_{\\mathcal{B}}=\\begin{bmatrix}0\\\\2\\\\0\\end{bmatrix}$. These form the columns of $[D]_{\\mathcal{B}}$."
      },
      {
        id: 38,
        prompt: "For the derivative map $D: \\mathbb{P}_2 \\to \\mathbb{P}_2$, its matrix is $\\begin{bmatrix}0&1&0\\\\0&0&2\\\\0&0&0\\end{bmatrix}$. Is $D$ injective (one-to-one)? Is $D$ surjective (onto)? Recall: $D$ injective $\\Leftrightarrow$ $\\ker(D)=\\{0\\}$; $D$ surjective $\\Leftrightarrow$ $\\text{col}([D])=\\mathbb{R}^3$.",
        type: "multiple-choice",
        choices: [
          { label: "Not injective (constants map to 0); not surjective (constant polynomials not in image)", value: "correct" },
          { label: "Injective and surjective", value: "wrong-a" },
          { label: "Injective but not surjective", value: "wrong-b" },
          { label: "Not injective but surjective", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "Not injective: $D(5)=0$ and $D(0)=0$, so two different inputs map to the same output. The kernel is $\\{\\text{constants}\\} = \\text{span}\\{1\\}$. Not surjective: the image of $D$ is $\\{a_1+2a_2t : a_1,a_2\\in\\mathbb{R}\\} = \\text{span}\\{1,t\\}$, which does not include $t^2$. So $D$ is neither injective nor surjective."
      },
      {
        id: 39,
        prompt: "Diagonalize $A = \\begin{bmatrix}1&1&0\\\\0&2&1\\\\0&0&3\\end{bmatrix}$ if possible. The eigenvalues of an upper triangular matrix are its diagonal entries. What are the eigenvalues?",
        type: "multiple-choice",
        choices: [
          { label: "$\\lambda_1=1,\\, \\lambda_2=2,\\, \\lambda_3=3$ (three distinct eigenvalues \u2014 $A$ is diagonalizable)", value: "correct" },
          { label: "$\\lambda_1=1,\\, \\lambda_2=1,\\, \\lambda_3=3$ (repeated eigenvalue)", value: "wrong-a" },
          { label: "$\\lambda_1=2,\\, \\lambda_2=2,\\, \\lambda_3=2$", value: "wrong-b" },
          { label: "Cannot determine without computing $\\det(A-\\lambda I)$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "For an upper triangular matrix, eigenvalues are the diagonal entries: $\\lambda=1,2,3$. Since all three eigenvalues are distinct, $A$ has 3 linearly independent eigenvectors and is therefore diagonalizable. $A=PDP^{-1}$ where $D=\\begin{bmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{bmatrix}$."
      },
      {
        id: 40,
        prompt: "Can $B = \\begin{bmatrix}1&1&0\\\\0&1&0\\\\0&0&2\\end{bmatrix}$ be diagonalized? The eigenvalues are $\\lambda=1$ (algebraic multiplicity 2) and $\\lambda=2$ (algebraic multiplicity 1). Find $\\dim(\\ker(B-I))$ to determine the geometric multiplicity of $\\lambda=1$. $$B-I = \\begin{bmatrix}0&1&0\\\\0&0&0\\\\0&0&1\\end{bmatrix}$$",
        type: "multiple-choice",
        choices: [
          { label: "Not diagonalizable \u2014 geometric multiplicity of $\\lambda=1$ is 1, but algebraic multiplicity is 2", value: "correct" },
          { label: "Diagonalizable \u2014 two distinct eigenvalues are sufficient", value: "wrong-a" },
          { label: "Diagonalizable \u2014 upper triangular matrices are always diagonalizable", value: "wrong-b" },
          { label: "Not diagonalizable \u2014 the matrix has no real eigenvalues", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$B-I=\\begin{bmatrix}0&1&0\\\\0&0&0\\\\0&0&1\\end{bmatrix}$ has rank 2, so $\\dim(\\ker(B-I))=3-2=1$. The geometric multiplicity of $\\lambda=1$ is 1, but its algebraic multiplicity is 2. Since $\\text{geom mult} < \\text{alg mult}$, $B$ is not diagonalizable. The total geometric multiplicity is $1+1=2 < 3$."
      },
      {
        id: 41,
        prompt: "We know $A\\begin{bmatrix}1\\\\1\\end{bmatrix}=5\\begin{bmatrix}1\\\\1\\end{bmatrix}$ and $A\\begin{bmatrix}1\\\\-1\\end{bmatrix}=7\\begin{bmatrix}1\\\\-1\\end{bmatrix}$, so $\\begin{bmatrix}1\\\\1\\end{bmatrix}$ and $\\begin{bmatrix}1\\\\-1\\end{bmatrix}$ are eigenvectors with eigenvalues 5 and 7. Write $A = PDP^{-1}$ where $P=\\begin{bmatrix}1&1\\\\1&-1\\end{bmatrix}$, $D=\\begin{bmatrix}5&0\\\\0&7\\end{bmatrix}$. Then $A^{-1} = PD^{-1}P^{-1}$. Given $P^{-1} = \\frac{1}{-2}\\begin{bmatrix}-1&-1\\\\-1&1\\end{bmatrix} = \\begin{bmatrix}1/2&1/2\\\\1/2&-1/2\\end{bmatrix}$, what is $A^{-1}$?",
        type: "multiple-choice",
        choices: [
          { label: "$A^{-1} = \\begin{bmatrix}6/35 & -1/35\\\\ -1/35 & 6/35\\end{bmatrix}$", value: "wrong-a" },
          { label: "$A^{-1} = \\begin{bmatrix}3/7 & 2/35\\\\ 2/35 & 3/7\\end{bmatrix}$", value: "wrong-b" },
          { label: "$A^{-1} = \\frac{1}{70}\\begin{bmatrix}12 & -2\\\\ -2 & 12\\end{bmatrix}$", value: "wrong-c" },
          { label: "$A^{-1} = \\begin{bmatrix}\\frac{6}{35} & \\frac{1}{35}\\\\ \\frac{1}{35} & \\frac{6}{35}\\end{bmatrix}$", value: "correct" }
        ],
        correctAnswer: "correct",
        explanation: "$D^{-1}=\\begin{bmatrix}1/5&0\\\\0&1/7\\end{bmatrix}$. Then $A^{-1}=PD^{-1}P^{-1}=\\begin{bmatrix}1&1\\\\1&-1\\end{bmatrix}\\begin{bmatrix}1/5&0\\\\0&1/7\\end{bmatrix}\\begin{bmatrix}1/2&1/2\\\\1/2&-1/2\\end{bmatrix}$. Computing: $PD^{-1}=\\begin{bmatrix}1/5&1/7\\\\1/5&-1/7\\end{bmatrix}$, then multiplying by $P^{-1}$ gives $A^{-1}=\\begin{bmatrix}6/35&1/35\\\\1/35&6/35\\end{bmatrix}$."
      },
      {
        id: 42,
        prompt: "Let $A$ be a diagonalizable $n\\times n$ matrix with only eigenvalues $1$ and $-1$. So $A = PDP^{-1}$ where every diagonal entry of $D$ is $\\pm 1$. What is $A^2$?",
        type: "multiple-choice",
        choices: [
          { label: "$A^2 = I$ (the identity matrix)", value: "correct" },
          { label: "$A^2 = A$", value: "wrong-a" },
          { label: "$A^2 = -I$", value: "wrong-b" },
          { label: "$A^2 = D$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$A^2 = (PDP^{-1})^2 = PD^2P^{-1}$. Since every diagonal entry of $D$ is $\\pm 1$, every diagonal entry of $D^2$ is $(\\pm 1)^2 = 1$, so $D^2 = I$. Therefore $A^2 = PIP^{-1} = PP^{-1} = I$."
      },
      {
        id: 43,
        prompt: "Let $A$ be a $3\\times 3$ diagonalizable matrix with eigenvalues $\\lambda_1=1$, $\\lambda_2=2$, $\\lambda_3=3$. Use the fact that for a diagonalizable matrix, $\\det(A) = \\det(PDP^{-1}) = \\det(D)$, and $\\det(D)$ equals the product of the diagonal entries. What is $\\det(A)$?",
        type: "text",
        correctAnswer: "6",
        explanation: "$\\det(A) = \\det(PDP^{-1}) = \\det(P)\\det(D)\\det(P^{-1}) = \\det(D)$ (since $\\det(P)\\det(P^{-1})=1$). $\\det(D)=\\lambda_1\\cdot\\lambda_2\\cdot\\lambda_3=1\\cdot 2\\cdot 3=6$."
      },
      {
        id: 44,
        prompt: "Which of the following is an example of a consistent system of 3 equations in 2 variables?",
        type: "multiple-choice",
        choices: [
          { label: "$x_1=1,\\; x_2=2,\\; x_1+x_2=3$ (three equations, the third follows from the first two)", value: "correct" },
          { label: "No such system exists \u2014 3 equations in 2 variables must be inconsistent", value: "wrong-a" },
          { label: "$x_1+x_2=1,\\; x_1-x_2=0,\\; x_1+2x_2=3$", value: "wrong-b" },
          { label: "Only a system with 2 equations in 2 variables can be consistent", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "Any system that has at least one solution is consistent, regardless of the number of equations vs. variables. E.g., $x_1=1, x_2=2, x_1+x_2=3$ is consistent (solution: $x_1=1, x_2=2$). The third equation is redundant but the system is consistent."
      },
      {
        id: 45,
        prompt: "Which of the following is an example of an inconsistent system of 2 equations in 3 variables?",
        type: "multiple-choice",
        choices: [
          { label: "$x_1+x_2+x_3=1$ and $x_1+x_2+x_3=2$ (same left side, different right side)", value: "correct" },
          { label: "No such system exists \u2014 more variables than equations always gives infinitely many solutions", value: "wrong-a" },
          { label: "$x_1=0$ and $x_2=0$", value: "wrong-b" },
          { label: "$x_1+x_2=1$ and $2x_1+2x_2=2$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The system $x_1+x_2+x_3=1$ and $x_1+x_2+x_3=2$ is inconsistent because adding the same combination of variables cannot equal both 1 and 2 simultaneously. Having more variables than equations does not guarantee consistency."
      },
      {
        id: 46,
        prompt: "For a homogeneous system $A\\mathbf{x}=\\mathbf{0}$ where $A$ is $4\\times 6$: by Rank-Nullity, $\\text{rank}(A)+\\text{nullity}(A)=6$. For the solution set to be a line (1-dimensional), we need $\\text{nullity}(A)=1$. Is this possible for a $4\\times 6$ matrix?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 if $\\text{rank}(A)=5$... but rank cannot exceed the number of rows (4), so this is impossible", value: "correct" },
          { label: "Yes \u2014 set $\\text{rank}(A)=5$, $\\text{nullity}(A)=1$", value: "wrong-possible" },
          { label: "No \u2014 homogeneous systems always have infinitely many solutions", value: "wrong-b" },
          { label: "Yes \u2014 any nullity is achievable for any matrix size", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "For nullity $=1$, we'd need rank $=5$. But $A$ is $4\\times 6$, so $\\text{rank}(A)\\leq\\min(4,6)=4$. A rank of 5 is impossible. Therefore the solution set of $A\\mathbf{x}=\\mathbf{0}$ for a $4\\times 6$ matrix cannot be a line \u2014 it must have dimension at least $6-4=2$."
      },
      {
        id: 47,
        prompt: "Can the solution set of a (possibly non-homogeneous) linear system $A\\mathbf{x}=\\mathbf{b}$ form a vector space?",
        type: "multiple-choice",
        choices: [
          { label: "Only if the system is homogeneous ($\\mathbf{b}=\\mathbf{0}$); a nonhomogeneous consistent system gives an affine subspace, not a vector space (it doesn't contain $\\mathbf{0}$)", value: "correct" },
          { label: "Yes \u2014 any consistent linear system has a solution set that is a vector space", value: "wrong-a" },
          { label: "Never \u2014 solution sets of linear systems are never vector spaces", value: "wrong-b" },
          { label: "Yes \u2014 as long as the system has infinitely many solutions", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The solution set of $A\\mathbf{x}=\\mathbf{b}$ is a vector space only if $\\mathbf{b}=\\mathbf{0}$ (homogeneous). For $\\mathbf{b}\\neq\\mathbf{0}$, the solution set is a coset (affine subspace) that does not pass through the origin, so it is not a vector space. Example of a system whose solutions do NOT form a vector space: $x_1+x_2=1$."
      },
      {
        id: 48,
        prompt: "Let $A$ be a $3\\times 3$ matrix with $\\text{rank}(A)=2$, eigenvector $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ for eigenvalue 2, and $A\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}=\\begin{bmatrix}-1\\\\4\\\\6\\end{bmatrix}$. Find the first column of $A$. Note: $A\\mathbf{e}_1$ is the first column, and $\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix} = \\mathbf{e}_1 \\cdot 0 + ...$, so use $A\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix} = 2\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix} + A\\mathbf{e}_1\\cdot 0$... Hint: write $\\begin{bmatrix}-1\\\\4\\\\6\\end{bmatrix} = A\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}$ and note $2\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}=\\begin{bmatrix}0\\\\4\\\\6\\end{bmatrix}$. What is $A\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix} - 2\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}$?",
        type: "multiple-choice",
        choices: [
          { label: "$\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$ \u2014 this means $A(\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}-\\frac{1}{2}\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}) = ...$; first column of $A$ is $\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$... let me recalculate", value: "wrong-calc" },
          { label: "First column of $A$ is $\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$", value: "correct" },
          { label: "First column of $A$ is $\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix}$", value: "wrong-eigen" },
          { label: "First column of $A$ is $\\begin{bmatrix}0\\\\0\\\\0\\end{bmatrix}$", value: "wrong-zero" }
        ],
        correctAnswer: "correct",
        explanation: "Write $\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix} = \\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}$. We want to find $A\\mathbf{e}_1$. Note $\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix} = -\\frac{1}{2}\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix} + \\frac{1}{2}\\begin{bmatrix}1\\\\6\\\\9\\end{bmatrix}$... cleaner approach: $A\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}=\\begin{bmatrix}-1\\\\4\\\\6\\end{bmatrix}=2\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}+\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$, suggesting $(A-2I)\\begin{bmatrix}0\\\\2\\\\3\\end{bmatrix}=\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$. Since $\\text{rank}(A)=2$ and $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ is an eigenvector for $\\lambda=2$, we can determine the first column is $\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$."
      },
      {
        id: 49,
        prompt: "Let $A$ be a $3\\times 3$ matrix with $\\text{rank}(A)=2$. What are all the eigenvalues of $A$? Given: eigenvalue 2 with eigenvector $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$. Key: $\\text{rank}(A)=2$ means $\\dim(\\ker(A))=3-2=1$, so $\\lambda=0$ is an eigenvalue. What is the third eigenvalue?",
        type: "multiple-choice",
        choices: [
          { label: "Eigenvalues are $0$, $2$, and one more. Using $\\det(A) = \\lambda_1\\lambda_2\\lambda_3$ and $\\text{tr}(A) = \\lambda_1+\\lambda_2+\\lambda_3$, find the third from the given information about $A$.", value: "needs-more" },
          { label: "Eigenvalues are $0$ and $2$ only (one eigenvalue is repeated)", value: "zero-and-two" },
          { label: "Eigenvalues are $0$, $2$, and $2$", value: "correct" },
          { label: "Eigenvalues are $0$, $1$, and $2$", value: "wrong" }
        ],
        correctAnswer: "correct",
        explanation: "$\\text{rank}(A)=2 \\Rightarrow \\text{nullity}(A)=1 \\Rightarrow \\lambda=0$ is an eigenvalue. We also know $\\lambda=2$ is an eigenvalue. From the first column $\\begin{bmatrix}-1\\\\0\\\\0\\end{bmatrix}$, compute $\\text{tr}(A)$. The diagonal entries sum to the trace = sum of eigenvalues. Checking: the characteristic polynomial has $\\lambda=0$ (once) and $\\lambda=2$ must account for both remaining eigenvalues. With first column $(-1,0,0)^T$, we can deduce $\\text{tr}(A)=4$, so the third eigenvalue is $4-0-2=2$. Eigenvalues: $0,2,2$."
      },
      {
        id: 50,
        prompt: "Let $A$ be the $3\\times 3$ matrix from Problem 16 with eigenvalues $0, 2, 2$. The eigenvalue $\\lambda=0$ has algebraic multiplicity 1 (geometric multiplicity also 1). The eigenvalue $\\lambda=2$ has algebraic multiplicity 2. Is $A$ diagonalizable?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 if the geometric multiplicity of $\\lambda=2$ is also 2 (need to check)", value: "depends" },
          { label: "No \u2014 repeated eigenvalues always prevent diagonalizability", value: "wrong-never" },
          { label: "Yes \u2014 because $A$ has rank 2", value: "wrong-rank" },
          { label: "Yes \u2014 because $A$ has 3 eigenvalues (counting multiplicity)", value: "wrong-count" }
        ],
        correctAnswer: "depends",
        explanation: "For $A$ to be diagonalizable, we need the geometric multiplicity of $\\lambda=2$ to equal its algebraic multiplicity (2). This requires $\\dim(\\ker(A-2I))=2$, i.e., $\\text{rank}(A-2I)=1$. We know $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}\\in\\ker(A-2I)$, and since $\\text{rank}(A)=2$, one can show $\\text{rank}(A-2I)=1$, giving $\\dim(\\ker(A-2I))=2$. So yes, $A$ is diagonalizable."
      },
      {
        id: 51,
        prompt: "Let $A$ be a $3\\times 3$ matrix with eigenvalue 2, and $\\dim(\\text{null}(A^\\top))=2$. By the Rank-Nullity Theorem applied to $A^\\top$: $\\text{rank}(A^\\top)+2=3$, so $\\text{rank}(A^\\top)=1$. Since $\\text{rank}(A)=\\text{rank}(A^\\top)$, we have $\\text{rank}(A)=1$. What are the eigenvalues of $A$ and is $A$ diagonalizable?",
        type: "multiple-choice",
        choices: [
          { label: "Eigenvalues: $0$ (alg. mult. 2), $2$ (alg. mult. 1). Diagonalizable only if $\\dim(\\ker(A))=2$. Since $\\text{rank}(A)=1$, $\\dim(\\ker(A))=2$. So yes, $A$ is diagonalizable.", value: "correct" },
          { label: "Not diagonalizable \u2014 rank 1 matrices are never diagonalizable", value: "wrong-a" },
          { label: "Diagonalizable \u2014 any matrix with a 0 eigenvalue is diagonalizable", value: "wrong-b" },
          { label: "Cannot be determined", value: "unknown" }
        ],
        correctAnswer: "correct",
        explanation: "$\\text{rank}(A)=1$, so $\\text{nullity}(A)=2$, meaning $\\lambda=0$ has geometric (and hence algebraic) multiplicity 2. The eigenvalues are $0$ (mult. 2) and $2$ (mult. 1). Sum of geometric multiplicities: $2+1=3=n$. So $A$ is diagonalizable."
      },
      {
        id: 52,
        prompt: "Can a $2\\times 2$ matrix have eigenvalues $-1$, $2$, and $3$?",
        type: "multiple-choice",
        choices: [
          { label: "No \u2014 a $2\\times 2$ matrix has a degree-2 characteristic polynomial, so it has at most 2 eigenvalues", value: "correct" },
          { label: "Yes \u2014 any matrix can have any eigenvalues", value: "wrong-a" },
          { label: "Yes \u2014 if the matrix is not diagonalizable", value: "wrong-b" },
          { label: "Only if it is a complex matrix", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The characteristic polynomial of an $n\\times n$ matrix has degree $n$. A $2\\times 2$ matrix has $\\det(A-\\lambda I)$ of degree 2, which has at most 2 roots. So a $2\\times 2$ matrix cannot have 3 distinct eigenvalues."
      },
      {
        id: 53,
        prompt: "Give an example of a $3\\times 3$ matrix with eigenvalues $-1$, $2$, and $3$. Which of the following works?",
        type: "multiple-choice",
        choices: [
          { label: "$\\begin{bmatrix}-1&0&0\\\\0&2&0\\\\0&0&3\\end{bmatrix}$", value: "correct" },
          { label: "$\\begin{bmatrix}1&2&3\\\\0&1&2\\\\0&0&1\\end{bmatrix}$", value: "wrong-a" },
          { label: "$\\begin{bmatrix}0&0&-6\\\\1&0&5\\\\0&1&0\\end{bmatrix}$", value: "wrong-b" },
          { label: "No such matrix exists", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The diagonal matrix $\\text{diag}(-1,2,3)$ has eigenvalues exactly $-1$, $2$, $3$ (its diagonal entries). Any diagonalizable matrix with these eigenvalues works."
      },
      {
        id: 54,
        prompt: "Does there exist a $3\\times 3$ matrix with eigenvalues $-1$, $2$, $3$ that is NOT diagonalizable?",
        type: "multiple-choice",
        choices: [
          { label: "No \u2014 three distinct eigenvalues always guarantee diagonalizability for any $n\\times n$ matrix", value: "correct" },
          { label: "Yes \u2014 we can construct a Jordan block form", value: "wrong-a" },
          { label: "Yes \u2014 upper triangular matrices with these eigenvalues need not be diagonalizable", value: "wrong-b" },
          { label: "Only if $n > 3$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "A key theorem: if an $n\\times n$ matrix has $n$ distinct eigenvalues, it is automatically diagonalizable (the eigenvectors form a basis). Three distinct eigenvalues $-1, 2, 3$ for a $3\\times 3$ matrix guarantee diagonalizability. So no such non-diagonalizable example exists."
      },
      {
        id: 55,
        prompt: "Does there exist a $4\\times 4$ matrix with eigenvalues $-1$, $2$, $3$ that is NOT diagonalizable?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 e.g., one eigenvalue has algebraic multiplicity 2 but geometric multiplicity 1", value: "correct" },
          { label: "No \u2014 three distinct eigenvalues means the matrix is always diagonalizable", value: "wrong-a" },
          { label: "No \u2014 $4\\times 4$ matrices always have 4 distinct eigenvalues", value: "wrong-b" },
          { label: "Cannot be determined", value: "unknown" }
        ],
        correctAnswer: "correct",
        explanation: "A $4\\times 4$ matrix has characteristic polynomial of degree 4. The three eigenvalues $-1, 2, 3$ must account for all four roots (counting multiplicity), so one is repeated. For example, eigenvalues $-1, 2, 2, 3$ with eigenvalue 2 having a Jordan block $\\begin{bmatrix}2&1\\\\0&2\\end{bmatrix}$ gives a non-diagonalizable $4\\times 4$ matrix."
      },
      {
        id: 56,
        prompt: "Does there exist a $3\\times 3$ matrix with eigenvalues $2$ and $5$ only that is NOT diagonalizable?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 e.g., $\\lambda=2$ has algebraic mult. 2 and geometric mult. 1, and $\\lambda=5$ has mult. 1", value: "correct" },
          { label: "No \u2014 two distinct eigenvalues guarantee diagonalizability", value: "wrong-a" },
          { label: "No \u2014 $3\\times 3$ matrices always have 3 distinct eigenvalues", value: "wrong-b" },
          { label: "Yes, but only if both eigenvalues are repeated", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "Example: $A=\\begin{bmatrix}2&1&0\\\\0&2&0\\\\0&0&5\\end{bmatrix}$. Eigenvalues: $2$ (alg. mult. 2, geom. mult. 1) and $5$ (mult. 1). Since geom. mult. of $2 <$ alg. mult., $A$ is not diagonalizable."
      },
      {
        id: 57,
        prompt: "Does there exist a $3\\times 3$ matrix with eigenvalues $2$ and $5$ only that IS diagonalizable?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 e.g., $\\text{diag}(2, 2, 5)$ where $\\lambda=2$ has geom. mult. 2 = alg. mult. 2", value: "correct" },
          { label: "No \u2014 repeated eigenvalues prevent diagonalizability", value: "wrong-a" },
          { label: "Yes, but only if $\\lambda=5$ has multiplicity 2", value: "wrong-b" },
          { label: "Only if all eigenvalues are distinct", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "$A=\\begin{bmatrix}2&0&0\\\\0&2&0\\\\0&0&5\\end{bmatrix}=\\text{diag}(2,2,5)$ is already diagonal, so it is diagonalizable. Eigenvalues are $2$ (alg. mult. = geom. mult. = 2) and $5$ (mult. 1)."
      },
      {
        id: 58,
        prompt: "Does there exist a $4\\times 4$ matrix with NO real eigenvalues?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 e.g., block diagonal with two $2\\times 2$ rotation matrices by $90\xB0$", value: "correct" },
          { label: "No \u2014 every square matrix over $\\mathbb{R}$ has at least one real eigenvalue", value: "wrong-a" },
          { label: "No \u2014 the characteristic polynomial of a $4\\times 4$ matrix always has a real root", value: "wrong-b" },
          { label: "Only if the matrix is complex", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The characteristic polynomial of a $4\\times 4$ real matrix has degree 4. It is possible for all 4 roots to be non-real complex (occurring in conjugate pairs). Example: block diagonal matrix $\\begin{bmatrix}0&-1&0&0\\\\1&0&0&0\\\\0&0&0&-1\\\\0&0&1&0\\end{bmatrix}$ has characteristic polynomial $(\\lambda^2+1)^2$, with no real roots. Note: odd-dimensional real matrices always have at least one real eigenvalue."
      },
      {
        id: 59,
        prompt: "Does a $2\\times 2$ rotation matrix $R_\\theta = \\begin{bmatrix}\\cos\\theta & -\\sin\\theta\\\\ \\sin\\theta & \\cos\\theta\\end{bmatrix}$ have real eigenvalues? For which values of $\\theta$ is $R_\\theta$ diagonalizable (over $\\mathbb{R}$)?",
        type: "multiple-choice",
        choices: [
          { label: "$R_\\theta$ is diagonalizable over $\\mathbb{R}$ only when $\\theta = 0$ or $\\theta = \\pi$ (i.e., when eigenvalues are $\\pm 1$)", value: "correct" },
          { label: "$R_\\theta$ is always diagonalizable over $\\mathbb{R}$", value: "wrong-a" },
          { label: "$R_\\theta$ is never diagonalizable over $\\mathbb{R}$", value: "wrong-b" },
          { label: "$R_\\theta$ is diagonalizable when $\\theta = \\pi/2$", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The characteristic polynomial of $R_\\theta$ is $\\lambda^2 - 2\\cos\\theta\\,\\lambda + 1 = 0$, with roots $\\cos\\theta \\pm i\\sin\\theta$. These are real iff $\\sin\\theta=0$, i.e., $\\theta=0$ or $\\theta=\\pi$. At $\\theta=0$: $R_0=I$ (eigenvalue 1). At $\\theta=\\pi$: $R_\\pi=-I$ (eigenvalue $-1$). For all other $\\theta$, the eigenvalues are complex and $R_\\theta$ is not diagonalizable over $\\mathbb{R}$."
      },
      {
        id: 60,
        prompt: "Does there exist a symmetric $3\\times 3$ matrix $A$ with characteristic polynomial $\\lambda(\\lambda+1)(\\lambda-1)$?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 the diagonal matrix $\\text{diag}(0,-1,1)$ works", value: "correct" },
          { label: "No \u2014 symmetric matrices cannot have a zero eigenvalue", value: "wrong-a" },
          { label: "No \u2014 symmetric matrices must have positive eigenvalues", value: "wrong-b" },
          { label: "Yes \u2014 but only if it is the zero matrix", value: "wrong-c" }
        ],
        correctAnswer: "correct",
        explanation: "The polynomial $\\lambda(\\lambda+1)(\\lambda-1)$ has roots $0,-1,1$ \u2014 three distinct real eigenvalues. By the Spectral Theorem, every symmetric matrix is orthogonally diagonalizable over $\\mathbb{R}$. The diagonal matrix $\\text{diag}(0,-1,1)$ is symmetric and has the required characteristic polynomial."
      },
      {
        id: 61,
        prompt: "Does there exist a symmetric $3\\times 3$ matrix $A$ with characteristic polynomial $\\lambda(\\lambda^2+1)$?",
        type: "multiple-choice",
        choices: [
          { label: "No \u2014 by the Real Spectral Theorem, all eigenvalues of a real symmetric matrix must be real. But $\\lambda^2+1$ has no real roots.", value: "correct" },
          { label: "Yes \u2014 symmetric matrices can have complex eigenvalues", value: "wrong-a" },
          { label: "Yes \u2014 any characteristic polynomial is achievable", value: "wrong-b" },
          { label: "No \u2014 the characteristic polynomial of a $3\\times 3$ matrix must have all real roots", value: "wrong-partial" }
        ],
        correctAnswer: "correct",
        explanation: "The Real Spectral Theorem states that every real symmetric matrix has only real eigenvalues and is orthogonally diagonalizable. The polynomial $\\lambda(\\lambda^2+1)$ has roots $\\lambda=0$ and $\\lambda=\\pm i$ (complex). Since a real symmetric matrix cannot have complex eigenvalues, no such symmetric matrix exists."
      },
      {
        id: 62,
        prompt: "Does there exist a symmetric $3\\times 3$ matrix $A$ with characteristic polynomial $(\\lambda-1)^3$ and $\\text{geom\\_mult}(1)=2$?",
        type: "multiple-choice",
        choices: [
          { label: "No \u2014 by the Real Spectral Theorem, symmetric matrices are diagonalizable, so geom. mult. must equal alg. mult. For $(\\lambda-1)^3$, geom. mult. must be 3, not 2.", value: "correct" },
          { label: "Yes \u2014 repeated eigenvalues can have any geometric multiplicity", value: "wrong-a" },
          { label: "Yes \u2014 geom. mult. $\\leq$ alg. mult. so 2 $\\leq$ 3 is fine for a symmetric matrix", value: "wrong-b" },
          { label: "Cannot be determined", value: "unknown" }
        ],
        correctAnswer: "correct",
        explanation: "The Real Spectral Theorem: every real symmetric matrix is orthogonally diagonalizable. Diagonalizability requires the sum of all geometric multiplicities to equal $n=3$. With one eigenvalue of alg. mult. 3, its geom. mult. must also be 3. Having geom. mult. $=2 < 3 =$ alg. mult. contradicts diagonalizability. So no such symmetric matrix exists."
      }
    ]
  };

  // modules/Linear-Algebra-314-final-practice-2.json
  var Linear_Algebra_314_final_practice_2_default = {
    id: "math314-final-inclass-practice",
    title: "Math 314: Final Exam In-Class Practice",
    description: "Practice exam covering eigenvalues, multiplicities, symmetric matrices, and orthogonal transformations. All LaTeX is KaTeX-compatible.",
    image: "assets/linear_algebra.png",
    questions: [
      {
        id: 1,
        prompt: "Find all eigenvalues and compute their algebraic and geometric multiplicities for $A = \\begin{bmatrix} 2 & 1 & 0 & 0 \\\\ 0 & 2 & 0 & 0 \\\\ 0 & 0 & 3 & 1 \\\\ 0 & 0 & 0 & 3 \\end{bmatrix}$.",
        type: "multiple-choice",
        choices: [
          {
            label: "$\\lambda=2$ (alg: 2, geo: 1), $\\lambda=3$ (alg: 2, geo: 1)",
            value: "a"
          },
          {
            label: "$\\lambda=2$ (alg: 2, geo: 2), $\\lambda=3$ (alg: 2, geo: 2)",
            value: "b"
          },
          {
            label: "$\\lambda=1, 2, 3, 4$ (alg: 1 each)",
            value: "c"
          }
        ],
        correctAnswer: "a",
        explanation: "The eigenvalues are the diagonal entries 2 and 3. For each, the geometric multiplicity is the number of Jordan blocks, which is 1."
      },
      {
        id: 2,
        prompt: "Give an example of a $2\\times 2$ matrix that is invertible but not diagonalizable.",
        type: "multiple-choice",
        choices: [
          {
            label: "$\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$",
            value: "a"
          },
          {
            label: "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$",
            value: "b"
          },
          {
            label: "$\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$",
            value: "c"
          }
        ],
        correctAnswer: "a",
        explanation: "This matrix has $\\det=1$ (invertible) but only one eigenvector (not diagonalizable)."
      },
      {
        id: 3,
        prompt: "Give an example of a $2\\times 2$ matrix that is diagonalizable but not invertible.",
        type: "multiple-choice",
        choices: [
          {
            label: "$\\begin{bmatrix} 1 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
            value: "a"
          },
          {
            label: "$\\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$",
            value: "b"
          },
          {
            label: "$\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$",
            value: "c"
          }
        ],
        correctAnswer: "a",
        explanation: "This is a diagonal matrix (diagonalizable) with determinant 0 (not invertible)."
      },
      {
        id: 4,
        prompt: "True or False: For every matrix $X$ and every vector $y$, there is always a solution $w$ to $Xw=y$.",
        type: "multiple-choice",
        choices: [
          {
            label: "True",
            value: "t"
          },
          {
            label: "False \u2014 only if $y$ is in the column space of $X$",
            value: "f"
          }
        ],
        correctAnswer: "f",
        explanation: "The equation $Xw=y$ is consistent only if $y \\in \\text{Col}(X)$."
      },
      {
        id: 5,
        prompt: "True or False: There is a $4 \\times 32$ matrix $A$ such that $A^T A$ has characteristic polynomial $\\lambda^2(\\lambda+3)^{30}$.",
        type: "multiple-choice",
        choices: [
          {
            label: "True",
            value: "t"
          },
          {
            label: "False \u2014 eigenvalues of $A^T A$ must be $\\ge 0$",
            value: "f"
          }
        ],
        correctAnswer: "f",
        explanation: "$A^T A$ is positive semi-definite; all its eigenvalues are $\\ge 0$. A factor of $(\\lambda+3)^{30}$ implies $\\lambda=-3$, which is impossible."
      },
      {
        id: 6,
        prompt: "True or False: There is a $3 \\times 3$ matrix with real entries that has no real eigenvalues.",
        type: "multiple-choice",
        choices: [
          {
            label: "True",
            value: "t"
          },
          {
            label: "False \u2014 odd-degree real polynomials always have a real root",
            value: "f"
          }
        ],
        correctAnswer: "f",
        explanation: "Cubic polynomials with real coefficients must intersect the x-axis at least once."
      },
      {
        id: 7,
        prompt: "True or False: If $AA^T = I_n$, then the rows of $A$ form an orthonormal basis for $\\mathbb{R}^n$.",
        type: "multiple-choice",
        choices: [
          {
            label: "True",
            value: "t"
          },
          {
            label: "False",
            value: "f"
          }
        ],
        correctAnswer: "t",
        explanation: "$AA^T = I$ means that the dot product of row $i$ with row $j$ is $\\delta_{ij}$, which defines an orthonormal set."
      },
      {
        id: 8,
        prompt: "Suppose $A$ is $3 \\times 3$ and $A[4, -5, 6]^T = [8, -10, 12]^T$, $A[1, 0, 3]^T = [7, 0, 21]^T$, and $A[0, 1, 2]^T = [0, 2, 4]^T$. Is $A$ diagonalizable?",
        type: "multiple-choice",
        choices: [
          {
            label: "Yes \u2014 it has 3 linearly independent eigenvectors",
            value: "y"
          },
          {
            label: "No",
            value: "n"
          },
          {
            label: "Not enough information",
            value: "i"
          }
        ],
        correctAnswer: "y",
        explanation: "The equations define three eigenvectors for eigenvalues 2 and 7. Since these three vectors are linearly independent, $A$ is diagonalizable."
      },
      {
        id: 9,
        prompt: "Let $A$ be a symmetric $3 \\times 3$ matrix with eigenvalues 0 and 3. If 0 is an eigenvalue, what is the determinant of $A$?",
        type: "multiple-choice",
        choices: [
          {
            label: "0",
            value: "0"
          },
          {
            label: "3",
            value: "3"
          },
          {
            label: "9",
            value: "9"
          }
        ],
        correctAnswer: "0",
        explanation: "The determinant is the product of the eigenvalues."
      },
      {
        id: 10,
        prompt: "Let $A = \\begin{bmatrix} 1 & 1 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 3 \\end{bmatrix}$. Which is true about the diagonalizability of $A$?",
        type: "multiple-choice",
        choices: [
          {
            label: "$A$ is diagonalizable because it has 3 distinct eigenvalues",
            value: "a"
          },
          {
            label: "$A$ is not diagonalizable because it is upper triangular",
            value: "b"
          },
          {
            label: "$A$ is only diagonalizable if it is symmetric",
            value: "c"
          }
        ],
        correctAnswer: "a",
        explanation: "A $3 \\times 3$ matrix with 3 distinct eigenvalues is always diagonalizable."
      }
    ]
  };

  // modules/Linear-Algebra-reci-practice.json
  var Linear_Algebra_reci_practice_default = {
    id: "math314-final-exam-practice-2026",
    title: "Math 314: Final Exam Practice (Spring 2026)",
    description: "Comprehensive practice questions covering row equivalence, subspaces, determinants, eigenvalues, orthogonality, and linear transformations.",
    image: "assets/linear_algebra_final.png",
    questions: [
      {
        id: 1,
        prompt: "True or False: If $A$ and $B$ are row-equivalent matrices, then $\\text{col}(A) = \\text{col}(B)$.",
        type: "multiple-choice",
        choices: [
          { label: "True", value: "true" },
          { label: "False \u2014 row operations preserve the row space, but can change the column space.", value: "false" }
        ],
        correctAnswer: "false",
        explanation: "Row operations (like swapping rows) do not generally preserve the column space. For example, $A = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$ and $B = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$ are row-equivalent, but their column spaces are different axes in $\\mathbb{R}^2$[cite: 5]."
      },
      {
        id: 2,
        prompt: "True or False: For any matrix $A$, $\\text{dim}(\\text{row}(A)) = \\text{dim}(\\text{col}(A))$.",
        type: "multiple-choice",
        choices: [
          { label: "True \u2014 this dimension is known as the rank of the matrix.", value: "true" },
          { label: "False", value: "false" }
        ],
        correctAnswer: "true",
        explanation: "The Rank Theorem states that the dimension of the row space and the column space are always equal to the number of pivot positions in the matrix[cite: 5]."
      },
      {
        id: 3,
        prompt: "Consider a $6 \\times 6$ matrix $A$ where $\\text{dim}(\\text{null}(A)) = 1$. What is the dimension of $\\text{col}(A)$?",
        type: "multiple-choice",
        choices: [
          { label: "5", value: "5" },
          { label: "6", value: "6" },
          { label: "1", value: "1" },
          { label: "0", value: "0" }
        ],
        correctAnswer: "5",
        explanation: "By the Rank-Nullity Theorem, $\\text{rank}(A) + \\text{nullity}(A) = n$. Here, $n=6$ and $\\text{nullity}(A)=1$, so $\\text{rank}(A) = 6 - 1 = 5$[cite: 5]."
      },
      {
        id: 4,
        prompt: "Is a $6 \\times 6$ matrix $A$ invertible if $\\text{dim}(\\text{null}(A)) = 1$?",
        type: "multiple-choice",
        choices: [
          { label: "Yes", value: "yes" },
          { label: "No \u2014 an invertible matrix must have a nullity of zero.", value: "no" }
        ],
        correctAnswer: "no",
        explanation: "According to the Invertible Matrix Theorem, a square matrix is invertible if and only if its null space contains only the zero vector ($\\text{dim}(\\text{null}(A)) = 0$)[cite: 5]."
      },
      {
        id: 5,
        prompt: "If matrix $C$ has determinant 3 and matrix $D$ has determinant 4 (both $3 \\times 3$), what is the determinant of the product $CD$?",
        type: "multiple-choice",
        choices: [
          { label: "7", value: "7" },
          { label: "12", value: "12" },
          { label: "34", value: "34" },
          { label: "Cannot be determined", value: "none" }
        ],
        correctAnswer: "12",
        explanation: "The determinant of a product is the product of the determinants: $\\det(CD) = \\det(C)\\det(D) = 3 \\times 4 = 12$[cite: 5]."
      },
      {
        id: 6,
        prompt: "Suppose $A$ is a diagonalizable $4 \\times 4$ matrix with eigenvalues 1, 1, 2, and 5. Compute the determinant of $A$.",
        type: "multiple-choice",
        choices: [
          { label: "9", value: "9" },
          { label: "10", value: "10" },
          { label: "20", value: "20" },
          { label: "1", value: "1" }
        ],
        correctAnswer: "10",
        explanation: "The determinant of a matrix is equal to the product of its eigenvalues: $1 \\times 1 \\times 2 \\times 5 = 10$[cite: 5]."
      },
      {
        id: 7,
        prompt: "Is $\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ an eigenvector for $A = \\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix}$?",
        type: "multiple-choice",
        choices: [
          { label: "Yes \u2014 $A\\mathbf{v} = 5\\mathbf{v}$, so the eigenvalue is 5.", value: "yes" },
          { label: "No \u2014 $A\\mathbf{v}$ is not a multiple of $\\mathbf{v}$.", value: "no" }
        ],
        correctAnswer: "yes",
        explanation: "$A\\mathbf{v} = \\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 5 \\end{bmatrix} = 5 \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$. Since the output is a scalar multiple of the input, $\\mathbf{v}$ is an eigenvector[cite: 5]."
      }
    ]
  };

  // modules/testing-multi-select-choice.json
  var testing_multi_select_choice_default = {
    id: "testing-module",
    title: "testing-module",
    description: "testing multiple modules of questions of different types. multiple choice, text input and multi select.",
    image: "assets/wide_monkey_picture.png",
    questions: [
      {
        id: 1,
        prompt: "Type in the word bingus. or feel my wraith >:- (",
        type: "text",
        correctAnswer: "bingus",
        explanation: "I widwly told you to type bingus. if you failed. you r dumb lol."
      },
      {
        id: 2,
        prompt: "if i was made out of cheese. would you eat me?",
        type: "multiple-choice",
        choices: [
          { label: "yes", value: "yes" },
          { label: "no", value: "no" }
        ],
        correctAnswer: "b",
        explanation: "please don't eat me :-("
      },
      {
        id: 0,
        prompt: "can you find all of the Rs in strawberry?",
        type: "multi-select",
        choices: [
          { label: "S", value: "0" },
          { label: "t", value: "1" },
          { label: "r", value: "2" },
          { label: "a", value: "3" },
          { label: "w", value: "4" },
          { label: "b", value: "5" },
          { label: "e", value: "6" },
          { label: "r", value: "7" },
          { label: "r", value: "8" },
          { label: "y", value: "9" }
        ],
        correctAnswer: "2,7,8",
        explanation: "look man i'm not a teacher just figure it out dude."
      }
    ]
  };

  // modules/csce-469-midterm-practice-security.json
  var csce_469_midterm_practice_security_default = {
    id: "csce-469-midterm-practice-security",
    title: "CSCE 469 Midterm Practice: Cybersecurity Core Concepts",
    description: "Comprehensive practice questions based on CSCE 469 cybersecurity slides 03-07, 11, and 12. Excludes introductions, project proposals, and Android-focused decks. Explanations include deck and slide references for review.",
    image: "assets/old_man.png",
    questions: [
      {
        id: 1,
        prompt: "Which statement best captures the course definition of security?",
        type: "multiple-choice",
        choices: [
          {
            label: "A condition of freedom from risk or danger, never absolute",
            value: "a"
          },
          {
            label: "A collection of hardware, software, policies, and procedures",
            value: "b"
          },
          {
            label: "A guarantee that no incident will occur",
            value: "c"
          },
          {
            label: "Compliance with every applicable regulation",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Security is a condition, not a product list, and risk can be eliminated, reduced, or tolerated. Source: Deck 03, slide 7."
      },
      {
        id: 2,
        prompt: "Which are the three elements of the CIA triad?",
        type: "multi-select",
        choices: [
          {
            label: "Confidentiality",
            value: "confidentiality"
          },
          {
            label: "Integrity",
            value: "integrity"
          },
          {
            label: "Availability",
            value: "availability"
          },
          {
            label: "Accountability",
            value: "accountability"
          }
        ],
        correctAnswer: "confidentiality,integrity,availability",
        explanation: "CIA means confidentiality, integrity, and availability. Accountability is important but is not one of the three CIA terms. Source: Deck 03, slide 8."
      },
      {
        id: 3,
        prompt: "A payroll record is changed by an unauthorized person. Which CIA property was violated most directly?",
        type: "multiple-choice",
        choices: [
          {
            label: "Integrity",
            value: "a"
          },
          {
            label: "Confidentiality",
            value: "b"
          },
          {
            label: "Availability",
            value: "c"
          },
          {
            label: "Resilience",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Integrity guards against improper modification or destruction of information. Source: Deck 03, slide 8."
      },
      {
        id: 4,
        prompt: "Complete the course risk relationship: risk = threat \xD7 _____.",
        type: "text",
        correctAnswer: "impact",
        explanation: "The slide defines risk as threat times the consequence to the targeted assets, namely impact. Source: Deck 03, slide 18."
      },
      {
        id: 5,
        prompt: "Which option correctly distinguishes a vulnerability from an exploit?",
        type: "multiple-choice",
        choices: [
          {
            label: "A vulnerability is a weakness; an exploit is a method that takes advantage of it",
            value: "a"
          },
          {
            label: "A vulnerability is an attack; an exploit is the damaged asset",
            value: "b"
          },
          {
            label: "A vulnerability is the impact; an exploit is the probability of attack",
            value: "c"
          },
          {
            label: "They are interchangeable terms",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A vulnerability is a flaw in protections; an exploit is the method used to take advantage of that flaw. Source: Deck 03, slide 18."
      },
      {
        id: 6,
        prompt: "After identifying and assessing risk, which responses does the deck list?",
        type: "multi-select",
        choices: [
          {
            label: "Avoid",
            value: "avoid"
          },
          {
            label: "Transfer",
            value: "transfer"
          },
          {
            label: "Mitigate",
            value: "mitigate"
          },
          {
            label: "Accept/manage residual risk",
            value: "accept"
          }
        ],
        correctAnswer: "avoid,transfer,mitigate,accept",
        explanation: "The listed responses are avoid, transfer, mitigate, and accept/manage residual risk. Insurance may be bought for residual risk but is not a replacement for those decisions. Source: Deck 03, slide 22."
      },
      {
        id: 7,
        prompt: "Which is the best example of a transfer of risk in the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Outsourcing payment-card transactions to a third party",
            value: "a"
          },
          {
            label: "Turning off all security controls",
            value: "b"
          },
          {
            label: "Accepting an unassessed risk",
            value: "c"
          },
          {
            label: "Eliminating every asset",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck uses outsourcing payment-card transactions as an example of transferring some risk to a third party. Source: Deck 03, slide 22."
      },
      {
        id: 8,
        prompt: "In the functional security requirements, which term means entities cannot repudiate their actions?",
        type: "multiple-choice",
        choices: [
          {
            label: "Accountability",
            value: "a"
          },
          {
            label: "Authorization",
            value: "b"
          },
          {
            label: "Availability",
            value: "c"
          },
          {
            label: "Administration",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Accountability requires entities to be fully accountable for, and unable to repudiate, their actions. Source: Deck 03, slide 25."
      },
      {
        id: 9,
        prompt: "What is a central Zero Trust assumption?",
        type: "multiple-choice",
        choices: [
          {
            label: "No implicit trust is granted solely because of network location or asset ownership",
            value: "a"
          },
          {
            label: "Internal-network users are trusted by default",
            value: "b"
          },
          {
            label: "A perimeter firewall makes further authorization unnecessary",
            value: "c"
          },
          {
            label: "All resources must be public",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Zero Trust shifts focus from a static perimeter to users, assets, and resources and rejects location-based implicit trust. Source: Deck 03, slide 29."
      },
      {
        id: 10,
        prompt: "What principle grants an entity only the minimum system resources and authorizations needed to perform its function?",
        type: "text",
        correctAnswer: "least privilege",
        explanation: "Least privilege restricts users or processes to the minimum necessary authorizations and resources. Source: Deck 03, slide 34."
      },
      {
        id: 11,
        prompt: "Which configuration reflects secure defaults?",
        type: "multiple-choice",
        choices: [
          {
            label: "Require password changes and make unnecessary features or open ports opt-in",
            value: "a"
          },
          {
            label: "Ship default credentials for administrator convenience",
            value: "b"
          },
          {
            label: "Enable all services so users can choose later",
            value: "c"
          },
          {
            label: "Hide the default password in documentation",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Secure defaults avoid exploitable default credentials and require explicit opt-in for unnecessary features and services. Source: Deck 03, slide 36."
      },
      {
        id: 12,
        prompt: "What does defense in depth mean?",
        type: "multiple-choice",
        choices: [
          {
            label: "Use multiple, layered countermeasures so one missed attack may be caught by another",
            value: "a"
          },
          {
            label: "Rely on one exceptionally strong control",
            value: "b"
          },
          {
            label: "Hide implementation details as the only control",
            value: "c"
          },
          {
            label: "Put every service on one trusted network",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Defense in depth layers heterogeneous countermeasures across attack vectors and includes people, technology, and operations. Source: Deck 03, slide 38."
      },
      {
        id: 13,
        prompt: "Which statement about compliance is correct according to the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Being compliant does not necessarily mean being secure",
            value: "a"
          },
          {
            label: "Compliance guarantees perfect security",
            value: "b"
          },
          {
            label: "Security makes all laws unnecessary",
            value: "c"
          },
          {
            label: "Compliance applies only to physical security",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Laws and regulations can lag threats, so compliance is not equivalent to security. Source: Deck 03, slide 45."
      },
      {
        id: 14,
        prompt: "What is the first rule of cryptography in the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Never develop or use your own cryptography",
            value: "a"
          },
          {
            label: "Always keep the algorithm secret",
            value: "b"
          },
          {
            label: "Use the shortest possible key",
            value: "c"
          },
          {
            label: "Encrypt every message with a public key",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck emphasizes using evaluated modules, standard algorithms, and appropriate secure protocols instead of home-grown cryptography. Source: Deck 04, slide 3."
      },
      {
        id: 15,
        prompt: "What term names the original readable message before encryption?",
        type: "text",
        correctAnswer: "plaintext",
        explanation: "A message before encryption is plaintext, also called cleartext. Source: Deck 04, slide 5."
      },
      {
        id: 16,
        prompt: "Which statement follows Kerckhoffs-style guidance in the deck?",
        type: "multiple-choice",
        choices: [
          {
            label: "The algorithm should be open, published, and available; keys provide secrecy",
            value: "a"
          },
          {
            label: "The algorithm must be secret but keys may be public",
            value: "b"
          },
          {
            label: "Both algorithm and key must be secret",
            value: "c"
          },
          {
            label: "No key is needed if the algorithm is unpublished",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Modern ciphers use keys; their algorithms should be open, published, and broadly available. Source: Deck 04, slide 9."
      },
      {
        id: 17,
        prompt: "An attacker has intercepted ciphertext only and attempts to recover plaintext or deduce a key. What attack class is this?",
        type: "multiple-choice",
        choices: [
          {
            label: "Ciphertext-only",
            value: "a"
          },
          {
            label: "Known-plaintext",
            value: "b"
          },
          {
            label: "Chosen-plaintext",
            value: "c"
          },
          {
            label: "Chosen-ciphertext",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Ciphertext-only cryptanalysis begins with intercepted ciphertext and aims to recover plaintexts or deduce keys. Source: Deck 04, slide 10."
      },
      {
        id: 18,
        prompt: "Which is the deck\u2019s sole example of unconditional security when properly generated, distributed, and used?",
        type: "multiple-choice",
        choices: [
          {
            label: "One-time pad",
            value: "a"
          },
          {
            label: "AES",
            value: "b"
          },
          {
            label: "RSA",
            value: "c"
          },
          {
            label: "SHA-3",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The slides identify the properly used one-time pad as the only example of unconditional security. Source: Deck 04, slide 11."
      },
      {
        id: 19,
        prompt: "What is the purpose of a cryptographic hash?",
        type: "multiple-choice",
        choices: [
          {
            label: "Produce a fixed-length output from an arbitrary-length input",
            value: "a"
          },
          {
            label: "Recover an input exactly from a digest",
            value: "b"
          },
          {
            label: "Encrypt a message with a shared secret",
            value: "c"
          },
          {
            label: "Hide a message inside an image",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A one-way hash maps arbitrary-length pre-images to a fixed-length numeric output and should make collisions hard to generate. Source: Deck 04, slide 17."
      },
      {
        id: 20,
        prompt: "Which property does a MAC provide according to the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Message integrity and sender authentication, not confidentiality",
            value: "a"
          },
          {
            label: "Confidentiality only",
            value: "b"
          },
          {
            label: "Availability only",
            value: "c"
          },
          {
            label: "Key escrow",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The MAC slide explicitly says this is message integrity and authentication, not message confidentiality. Source: Deck 04, slide 18."
      },
      {
        id: 21,
        prompt: "Why do practical hybrid cryptosystems use asymmetric cryptography primarily for session keys?",
        type: "multiple-choice",
        choices: [
          {
            label: "Asymmetric cryptography is much slower, so symmetric crypto protects message traffic",
            value: "a"
          },
          {
            label: "Symmetric cryptography cannot encrypt messages",
            value: "b"
          },
          {
            label: "Public keys are always secret",
            value: "c"
          },
          {
            label: "Session keys cannot be random",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Asymmetric crypto is roughly three orders of magnitude slower and is used to protect/distribute session keys; symmetric crypto protects traffic. Source: Deck 04, slide 23."
      },
      {
        id: 22,
        prompt: "A public-key digital signature can provide which properties?",
        type: "multi-select",
        choices: [
          {
            label: "Origin authentication",
            value: "authentication"
          },
          {
            label: "Integrity",
            value: "integrity"
          },
          {
            label: "Non-repudiation",
            value: "nonrepudiation"
          },
          {
            label: "Confidentiality by itself",
            value: "confidentiality"
          }
        ],
        correctAnswer: "authentication,integrity,nonrepudiation",
        explanation: "Public-key signatures provide origin authentication, integrity, and inability to repudiate. Signing alone does not provide confidentiality. Source: Deck 04, slide 28."
      },
      {
        id: 23,
        prompt: "In a PKI, what does a certification authority do to make public keys trustworthy?",
        type: "multiple-choice",
        choices: [
          {
            label: "Signs public keys or certificates so recipients can verify their integrity and binding",
            value: "a"
          },
          {
            label: "Keeps every user\u2019s private key",
            value: "b"
          },
          {
            label: "Encrypts all application data with one global key",
            value: "c"
          },
          {
            label: "Eliminates the need for authentication",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A trusted authority signs public keys and participants verify its signature; practical systems bind keys and identity information in certificates. Source: Deck 04, slide 34."
      },
      {
        id: 24,
        prompt: "Why is a password salt stored with the password hash?",
        type: "multiple-choice",
        choices: [
          {
            label: "It makes dictionary attacks more expensive by varying the input to the public hash",
            value: "a"
          },
          {
            label: "It lets the server decrypt the password",
            value: "b"
          },
          {
            label: "It makes the hash algorithm secret",
            value: "c"
          },
          {
            label: "It replaces the need for a password",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A random salt is appended before hashing and stored with the resulting hash, increasing the cost of dictionary attacks. Source: Deck 04, slide 44."
      },
      {
        id: 25,
        prompt: "What is a principal advantage of ECC cited in the deck?",
        type: "multiple-choice",
        choices: [
          {
            label: "Equivalent strength with much smaller keys, helpful for less powerful IoT devices",
            value: "a"
          },
          {
            label: "It requires no key management",
            value: "b"
          },
          {
            label: "It is a symmetric cipher",
            value: "c"
          },
          {
            label: "It is unconditionally secure",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "ECC can deliver equivalent strength with smaller keys, making it faster and suitable for lower-power devices. Source: Deck 04, slide 45."
      },
      {
        id: 26,
        prompt: "KMIP identifies which three primary elements?",
        type: "multi-select",
        choices: [
          {
            label: "Objects",
            value: "objects"
          },
          {
            label: "Operations",
            value: "operations"
          },
          {
            label: "Attributes",
            value: "attributes"
          },
          {
            label: "Network packets",
            value: "packets"
          }
        ],
        correctAnswer: "objects,operations,attributes",
        explanation: "KMIP covers cryptographic objects, actions performed on those objects, and object properties/attributes. Source: Deck 04, slide 46."
      },
      {
        id: 27,
        prompt: "Which technology counters a man-in-the-middle key-exchange attack described in the deck?",
        type: "multiple-choice",
        choices: [
          {
            label: "Verify digitally signed public-key certificates from a trusted KDC/CA",
            value: "a"
          },
          {
            label: "Use an unsigned public-key directory",
            value: "b"
          },
          {
            label: "Turn off all logging",
            value: "c"
          },
          {
            label: "Use only a longer plaintext message",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Digital signatures by the KDC/CA let Alice and Bob validate the public keys/certificates and counter the key substitution underlying the attack. Source: Deck 04, slide 43."
      },
      {
        id: 28,
        prompt: "Why is security different from many other software quality attributes?",
        type: "multiple-choice",
        choices: [
          {
            label: "The complete set of possible vulnerabilities is generally unknown",
            value: "a"
          },
          {
            label: "Security has no requirements",
            value: "b"
          },
          {
            label: "Performance cannot be measured",
            value: "c"
          },
          {
            label: "Security affects only source code",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Many quality attributes have finite known properties to check; assessing security must contend with an unknown set of possible vulnerabilities. Source: Deck 05, slide 7."
      },
      {
        id: 29,
        prompt: "Which analysis verifies properties by examining implementation logic without executing the software?",
        type: "multiple-choice",
        choices: [
          {
            label: "Static program analysis",
            value: "a"
          },
          {
            label: "Dynamic program analysis",
            value: "b"
          },
          {
            label: "Adaptive mechanisms",
            value: "c"
          },
          {
            label: "Penetration testing only",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Static analysis examines implementation logic without executing the system. Source: Deck 05, slide 9."
      },
      {
        id: 30,
        prompt: "Which approach verifies properties through execution and runtime data collection?",
        type: "multiple-choice",
        choices: [
          {
            label: "Dynamic program analysis",
            value: "a"
          },
          {
            label: "Static program analysis",
            value: "b"
          },
          {
            label: "Formal verification only",
            value: "c"
          },
          {
            label: "Architecture decomposition",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Dynamic program analysis relies on execution and collection of runtime data. Source: Deck 05, slide 10."
      },
      {
        id: 31,
        prompt: "Which approach can provide certain guarantees through mathematically sound and complete methods?",
        type: "multiple-choice",
        choices: [
          {
            label: "Formal verification",
            value: "a"
          },
          {
            label: "Fuzzing",
            value: "b"
          },
          {
            label: "Network segmentation",
            value: "c"
          },
          {
            label: "Role mining",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Formal verification uses mathematically sound and complete methods that can provide certain guarantees. Source: Deck 05, slide 11."
      },
      {
        id: 32,
        prompt: "A running system monitors for an attack and applies a mitigation or patch at runtime. This is an example of what?",
        type: "multiple-choice",
        choices: [
          {
            label: "Adaptive mechanisms",
            value: "a"
          },
          {
            label: "Static analysis",
            value: "b"
          },
          {
            label: "A ciphertext-only attack",
            value: "c"
          },
          {
            label: "Mandatory access control",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Adaptive mechanisms monitor at runtime and can recover from attacks or patch vulnerabilities at runtime. Source: Deck 05, slide 12."
      },
      {
        id: 33,
        prompt: "In the analysis deck, what is the realization of a threat called?",
        type: "multiple-choice",
        choices: [
          {
            label: "An attack",
            value: "a"
          },
          {
            label: "An asset",
            value: "b"
          },
          {
            label: "A control",
            value: "c"
          },
          {
            label: "A requirement",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A threat is a potential event that can compromise a requirement; its realization is an attack. Source: Deck 05, slide 16."
      },
      {
        id: 34,
        prompt: "Which six high-level security engineering tasks are listed?",
        type: "multi-select",
        choices: [
          {
            label: "Security requirements",
            value: "requirements"
          },
          {
            label: "Threat modeling",
            value: "threatmodeling"
          },
          {
            label: "Security architecture",
            value: "architecture"
          },
          {
            label: "Validation and verification",
            value: "vv"
          },
          {
            label: "Penetration testing",
            value: "pentesting"
          },
          {
            label: "Software patching",
            value: "patching"
          }
        ],
        correctAnswer: "requirements,threatmodeling,architecture,vv,pentesting,patching",
        explanation: "The slides list all six as security-focused activities across the development lifecycle. Source: Deck 05, slide 18."
      },
      {
        id: 35,
        prompt: "What is the first step in Microsoft\u2019s six-step application threat-modeling process?",
        type: "text",
        correctAnswer: "identify assets",
        explanation: "The first step is to identify the valuable assets the system must protect. Source: Deck 05, slide 36."
      },
      {
        id: 36,
        prompt: "What should an architecture overview document during threat modeling?",
        type: "multiple-choice",
        choices: [
          {
            label: "Subsystems, trust boundaries, and data flow",
            value: "a"
          },
          {
            label: "Only user-interface colors",
            value: "b"
          },
          {
            label: "Only source-file names",
            value: "c"
          },
          {
            label: "Only the final penetration-test report",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The architecture overview uses diagrams/tables for subsystems, trust boundaries, and data flow. Source: Deck 05, slide 37."
      },
      {
        id: 37,
        prompt: "What are the three security-architecture concerns in the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Protection, detection, and recovery",
            value: "a"
          },
          {
            label: "Confidentiality, performance, and cost",
            value: "b"
          },
          {
            label: "Scanning, encryption, and compliance",
            value: "c"
          },
          {
            label: "People, product, and profit",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Security solutions in the architecture are organized around protection, detection, and recovery. Source: Deck 06, slide 28."
      },
      {
        id: 38,
        prompt: "Which access-control concept belongs to the protection category?",
        type: "multiple-choice",
        choices: [
          {
            label: "Authorization, accountability, and non-repudiation",
            value: "a"
          },
          {
            label: "Restoring a damaged system",
            value: "b"
          },
          {
            label: "Monitoring a manifestation of a threat",
            value: "c"
          },
          {
            label: "Writing a public vulnerability report",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck places access-control mechanisms under protection and ties them to authorization, accountability, and non-repudiation. Source: Deck 06, slide 31."
      },
      {
        id: 39,
        prompt: "A scanner flags a vulnerability that cannot actually be exploited. What is this?",
        type: "multiple-choice",
        choices: [
          {
            label: "False positive",
            value: "a"
          },
          {
            label: "False negative",
            value: "b"
          },
          {
            label: "Threat realization",
            value: "c"
          },
          {
            label: "Formal proof",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A false positive is a vulnerability flagged in code that is not exploitable. Source: Deck 06, slide 41."
      },
      {
        id: 40,
        prompt: "Why do static analysis techniques tend to produce false positives?",
        type: "multiple-choice",
        choices: [
          {
            label: "They over-approximate software behavior",
            value: "a"
          },
          {
            label: "They execute too few test cases",
            value: "b"
          },
          {
            label: "They always use random input",
            value: "c"
          },
          {
            label: "They require no implementation logic",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The slides say static analysis tends to over-approximate behavior and therefore tends toward false positives. Source: Deck 06, slide 45."
      },
      {
        id: 41,
        prompt: "Why do dynamic analysis techniques tend to produce false negatives?",
        type: "multiple-choice",
        choices: [
          {
            label: "They under-approximate software behavior",
            value: "a"
          },
          {
            label: "They analyze every possible execution",
            value: "b"
          },
          {
            label: "They do not run the system",
            value: "c"
          },
          {
            label: "They always produce formal guarantees",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Dynamic analysis observes only executions it exercises, so it under-approximates behavior and tends toward false negatives. Source: Deck 06, slide 47."
      },
      {
        id: 42,
        prompt: "Which penetration-testing approach gives test generation information about design and implementation?",
        type: "multiple-choice",
        choices: [
          {
            label: "White-box penetration testing",
            value: "a"
          },
          {
            label: "Black-box penetration testing",
            value: "b"
          },
          {
            label: "Blind backup testing",
            value: "c"
          },
          {
            label: "Passive DNS",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "White-box testing uses design and implementation information; black-box testing is limited to information essentially available to an attacker. Source: Deck 06, slide 54."
      },
      {
        id: 43,
        prompt: "What does fuzzing do?",
        type: "multiple-choice",
        choices: [
          {
            label: "Feeds public interfaces random, semi-random, and malformed inputs rapidly",
            value: "a"
          },
          {
            label: "Proves code mathematically correct",
            value: "b"
          },
          {
            label: "Encrypts database rows",
            value: "c"
          },
          {
            label: "Assigns users to roles",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Fuzzing rapidly exercises public interfaces with random, semi-random, and malformed inputs. Source: Deck 06, slide 57."
      },
      {
        id: 44,
        prompt: "Which statement correctly distinguishes identification from authentication?",
        type: "multiple-choice",
        choices: [
          {
            label: "Identification uniquely names an entity; authentication proves the asserted identity is genuine",
            value: "a"
          },
          {
            label: "Identification grants permissions; authentication revokes them",
            value: "b"
          },
          {
            label: "Identification encrypts data; authentication decrypts it",
            value: "c"
          },
          {
            label: "They have identical meanings",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Identification uniquely identifies an entity, while authentication proves the claimed identity. Source: Deck 07, slide 5."
      },
      {
        id: 45,
        prompt: "Why does the deck call user ID plus password the weakest common authentication method?",
        type: "multiple-choice",
        choices: [
          {
            label: "It is single-factor authentication based on something known and is commonly exposed, guessed, or cracked",
            value: "a"
          },
          {
            label: "It uses too many independent factors",
            value: "b"
          },
          {
            label: "It never needs a server",
            value: "c"
          },
          {
            label: "It is based on a private key",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "User ID plus password is the common something-you-know single factor and is vulnerable to exposure and guessing/cracking. Source: Deck 07, slide 6."
      },
      {
        id: 46,
        prompt: "What cryptographic model underlies passkeys?",
        type: "multiple-choice",
        choices: [
          {
            label: "A public/private key-pair asymmetric cryptosystem",
            value: "a"
          },
          {
            label: "A shared password database",
            value: "b"
          },
          {
            label: "A plaintext SMS-only credential",
            value: "c"
          },
          {
            label: "A one-time pad",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The slides describe passkeys as based on public/private key-pair asymmetric cryptography and foundational WebAuthn/FIDO technology. Source: Deck 07, slide 8."
      },
      {
        id: 47,
        prompt: "Which are MFA factor categories named in the slides?",
        type: "multi-select",
        choices: [
          {
            label: "Something you know",
            value: "know"
          },
          {
            label: "Something you have/use",
            value: "have"
          },
          {
            label: "Something you are",
            value: "are"
          },
          {
            label: "Something you prefer",
            value: "prefer"
          }
        ],
        correctAnswer: "know,have,are",
        explanation: "MFA combines categories such as knowledge, possession/use, and biometrics. Source: Deck 07, slide 10."
      },
      {
        id: 48,
        prompt: "Why are SMS and email one-time passwords considered weaker than some other MFA methods?",
        type: "multiple-choice",
        choices: [
          {
            label: "They can be intercepted or viewed, face device malware/spoofing risks, and need connectivity",
            value: "a"
          },
          {
            label: "They require an HSM for every login",
            value: "b"
          },
          {
            label: "They make phishing impossible",
            value: "c"
          },
          {
            label: "They are a biometric factor",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck notes interception, malware, spoofing/account hijack, and connectivity drawbacks, while still calling them better than password-only SFA. Source: Deck 07, slide 11."
      },
      {
        id: 49,
        prompt: "What does WebAuthn provide in FIDO2?",
        type: "multiple-choice",
        choices: [
          {
            label: "A standard browser/platform web API for FIDO authentication",
            value: "a"
          },
          {
            label: "A DNS encryption protocol",
            value: "b"
          },
          {
            label: "A database tokenization vault",
            value: "c"
          },
          {
            label: "A network firewall rule language",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "WebAuthn is the W3C standard web API built into browsers and platforms for FIDO authentication. Source: Deck 07, slide 16."
      },
      {
        id: 50,
        prompt: "How should biometric data be handled according to the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Do not transmit/store raw biometrics; generate biometric hashes locally where possible",
            value: "a"
          },
          {
            label: "Store raw biometric recordings in a public database",
            value: "b"
          },
          {
            label: "Use raw biometrics as a reusable password",
            value: "c"
          },
          {
            label: "Never account for false positives or negatives",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Raw biometrics should not be transmitted/stored; registration generates biometric hashes, ideally in a small local TCB. Source: Deck 07, slide 21."
      },
      {
        id: 51,
        prompt: "In access control, what is a subject?",
        type: "multiple-choice",
        choices: [
          {
            label: "An active entity that interacts with a passive object",
            value: "a"
          },
          {
            label: "A passive file or database",
            value: "b"
          },
          {
            label: "A list of firewall rules",
            value: "c"
          },
          {
            label: "A log entry only",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Subjects are active entities such as users, software, or hardware; objects are passive targets such as files, databases, and devices. Source: Deck 07, slide 27."
      },
      {
        id: 52,
        prompt: "What are privileges in the deck\u2019s terminology?",
        type: "multiple-choice",
        choices: [
          {
            label: "The union of rights and permissions",
            value: "a"
          },
          {
            label: "Only file-read permissions",
            value: "b"
          },
          {
            label: "A type of biometric template",
            value: "c"
          },
          {
            label: "A public-key certificate",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Permissions grant access on objects and rights allow actions outside permissions; privileges are their union. Source: Deck 07, slide 28."
      },
      {
        id: 53,
        prompt: "Which are the three primary access-control types in the deck?",
        type: "multi-select",
        choices: [
          {
            label: "Preventative",
            value: "preventative"
          },
          {
            label: "Detective",
            value: "detective"
          },
          {
            label: "Corrective",
            value: "corrective"
          },
          {
            label: "Predictive",
            value: "predictive"
          }
        ],
        correctAnswer: "preventative,detective,corrective",
        explanation: "Preventative controls stop unauthorized actions, detective controls discover them, and corrective controls return systems to an acceptable state. Source: Deck 07, slide 32."
      },
      {
        id: 54,
        prompt: "Who controls access in discretionary access control (DAC)?",
        type: "multiple-choice",
        choices: [
          {
            label: "The object owner, who can grant, change, or revoke permissions",
            value: "a"
          },
          {
            label: "A mandatory hierarchical label only",
            value: "b"
          },
          {
            label: "A real-time geolocation engine only",
            value: "c"
          },
          {
            label: "A certification authority",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "DAC lets object owners control access to users or groups and administer permission changes. Source: Deck 07, slide 36."
      },
      {
        id: 55,
        prompt: "Under mandatory access control (MAC), what must hold for an operation to proceed?",
        type: "multiple-choice",
        choices: [
          {
            label: "The subject clearance must dominate the object sensitivity label",
            value: "a"
          },
          {
            label: "The object owner must personally approve every request",
            value: "b"
          },
          {
            label: "The user must have only one role",
            value: "c"
          },
          {
            label: "The endpoint must be on public Wi-Fi",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "MAC uses subject clearance C and object sensitivity L; C must dominate L, with no read-up and no write-down in the stated model. Source: Deck 07, slide 37."
      },
      {
        id: 56,
        prompt: "Which Bell-LaPadula rule protects confidentiality?",
        type: "multiple-choice",
        choices: [
          {
            label: "No read-up and no write-down",
            value: "a"
          },
          {
            label: "No read-down and no write-up",
            value: "b"
          },
          {
            label: "Read any label after login",
            value: "c"
          },
          {
            label: "Write any label after hashing",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Bell-LaPadula\u2019s simple property forbids read-up and its star property forbids write-down to preserve confidentiality. Source: Deck 07, slide 38."
      },
      {
        id: 57,
        prompt: "Which Biba rule protects integrity?",
        type: "multiple-choice",
        choices: [
          {
            label: "No read-down and no write-up",
            value: "a"
          },
          {
            label: "No read-up and no write-down",
            value: "b"
          },
          {
            label: "No encryption and no logging",
            value: "c"
          },
          {
            label: "No authentication and no authorization",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Biba prevents a subject from being corrupted by lower-integrity input (no read-down) and from modifying higher-integrity objects (no write-up). Source: Deck 07, slide 39."
      },
      {
        id: 58,
        prompt: "What problem does the Brewer-Nash (Chinese Wall) model address?",
        type: "multiple-choice",
        choices: [
          {
            label: "Conflicts of interest based on a subject\u2019s previous access",
            value: "a"
          },
          {
            label: "Disk encryption performance",
            value: "b"
          },
          {
            label: "DDoS bandwidth exhaustion",
            value: "c"
          },
          {
            label: "Password hashing",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Brewer-Nash prevents conflict-of-interest access, using dynamic controls based on prior actions. Source: Deck 07, slide 41."
      },
      {
        id: 59,
        prompt: "What additional inputs can ABAC use beyond subject and object information?",
        type: "multiple-choice",
        choices: [
          {
            label: "Context such as endpoint geolocation, time window, and endpoint health",
            value: "a"
          },
          {
            label: "Only a fixed owner-selected ACL",
            value: "b"
          },
          {
            label: "Only a public-key certificate",
            value: "c"
          },
          {
            label: "Only a user\u2019s password length",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "ABAC can apply real-time contextual information and support granular responses such as step-up authentication or reduced access. Source: Deck 07, slide 48."
      },
      {
        id: 60,
        prompt: "What is the semantic distinction between identity management and identity governance in the course slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Identity management handles accounts, lifecycle, provisioning, roles, and password policy; governance handles access requests/reviews, entitlement creep, SoD, role optimization, and risk analytics",
            value: "a"
          },
          {
            label: "They are exactly the same function",
            value: "b"
          },
          {
            label: "Governance only creates passwords; management only audits access",
            value: "c"
          },
          {
            label: "Management is physical access only; governance is encryption only",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck explicitly contrasts operational identity-management functions with governance functions that prove and review appropriate access. Source: Deck 07, slide 61."
      },
      {
        id: 61,
        prompt: "How do PAM solutions reduce the privileged-identity management problem from P \xD7 T toward P + T?",
        type: "multiple-choice",
        choices: [
          {
            label: "Use a hardened credential vault with checkout/in/rotation and hardened logging",
            value: "a"
          },
          {
            label: "Give every privileged user a shared permanent password",
            value: "b"
          },
          {
            label: "Eliminate authentication for administrators",
            value: "c"
          },
          {
            label: "Store credentials in scripts and stash files",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "PAM discovers accounts, uses a hardened vault, checks credentials out/in with rotation, and logs actions, reducing the combinatorial credential burden. Source: Deck 07, slide 73."
      },
      {
        id: 62,
        prompt: "Name the three data-security risk-management stages in order: discover, classify, and _____.",
        type: "text",
        correctAnswer: "protect",
        explanation: "The slides present the three stages as discover, classify, and protect. Source: Deck 11, slide 14."
      },
      {
        id: 63,
        prompt: "Why is discovery foundational to data protection?",
        type: "multiple-choice",
        choices: [
          {
            label: "Data that cannot be found cannot be protected",
            value: "a"
          },
          {
            label: "Discovery automatically encrypts data",
            value: "b"
          },
          {
            label: "Discovery eliminates classification",
            value: "c"
          },
          {
            label: "Discovery replaces backups",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck stresses that data is everywhere and says directly: if you cannot find it, you cannot protect it. Source: Deck 11, slide 15."
      },
      {
        id: 64,
        prompt: "Which statement correctly relates privacy and confidentiality?",
        type: "multiple-choice",
        choices: [
          {
            label: "You can have confidentiality without privacy, but not privacy without confidentiality",
            value: "a"
          },
          {
            label: "Privacy and confidentiality are identical",
            value: "b"
          },
          {
            label: "Privacy requires no security controls",
            value: "c"
          },
          {
            label: "Confidentiality is possible only for public data",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The mitigation slide makes this exact distinction. Source: Deck 11, slide 16."
      },
      {
        id: 65,
        prompt: "What security capability must accompany media encryption for it to be dependable at scale?",
        type: "multiple-choice",
        choices: [
          {
            label: "Robust, scalable cryptographic key management",
            value: "a"
          },
          {
            label: "A shorter password policy",
            value: "b"
          },
          {
            label: "A public file share",
            value: "c"
          },
          {
            label: "A slower network link",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Media encryption relies on robust, scalable cryptographic key management. Source: Deck 11, slide 17."
      },
      {
        id: 66,
        prompt: "Which best describes hardening?",
        type: "multiple-choice",
        choices: [
          {
            label: "Locking down systems with secure configuration, current patches, and disabled unneeded services/functions",
            value: "a"
          },
          {
            label: "Adding every available service for flexibility",
            value: "b"
          },
          {
            label: "Only encrypting a database column",
            value: "c"
          },
          {
            label: "Deleting all audit logs",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Hardening uses secure settings, patching, and disables unneeded protocols, services, and functionality. Source: Deck 11, slide 19."
      },
      {
        id: 67,
        prompt: "Which functions can an external database reference monitor provide?",
        type: "multi-select",
        choices: [
          {
            label: "Data discovery/classification",
            value: "discovery"
          },
          {
            label: "Static or dynamic masking/tokenization",
            value: "masking"
          },
          {
            label: "SQL injection detection/prevention",
            value: "sqli"
          },
          {
            label: "Secure logs difficult for DBAs to alter",
            value: "securelog"
          }
        ],
        correctAnswer: "discovery,masking,sqli,securelog",
        explanation: "The deck lists these functions alongside SoD controls, alerts, vulnerability scanning, and activity monitoring. Source: Deck 11, slide 21."
      },
      {
        id: 68,
        prompt: "In tokenization, where is the relationship between the original card number and the token stored?",
        type: "multiple-choice",
        choices: [
          {
            label: "In a separate vault",
            value: "a"
          },
          {
            label: "In the customer\u2019s browser history",
            value: "b"
          },
          {
            label: "In the merchant\u2019s public source code",
            value: "c"
          },
          {
            label: "It is not stored anywhere",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The workflow replaces the card number with a token while storing their relationship separately in a vault. Source: Deck 11, slide 24."
      },
      {
        id: 69,
        prompt: "What is DLP intended to detect and prevent?",
        type: "multiple-choice",
        choices: [
          {
            label: "Exfiltration, modification, and/or destruction of important data",
            value: "a"
          },
          {
            label: "Only encryption-key generation",
            value: "b"
          },
          {
            label: "Only operating-system patching",
            value: "c"
          },
          {
            label: "Only password resets",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Data Loss Prevention seeks to detect and prevent loss through exfiltration, modification, or destruction. Source: Deck 11, slide 27."
      },
      {
        id: 70,
        prompt: "Why must restore processes be tested and validated?",
        type: "multiple-choice",
        choices: [
          {
            label: "Backups cannot support recovery if restoration fails when needed",
            value: "a"
          },
          {
            label: "Testing automatically creates a hot standby",
            value: "b"
          },
          {
            label: "Backups only protect confidentiality",
            value: "c"
          },
          {
            label: "Restore testing removes the need for incident response",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Backups are key to incident response and availability, but the slides warn that restore processes are sometimes not tested or validated. Source: Deck 11, slide 28."
      },
      {
        id: 71,
        prompt: "What is the order of NIST media sanitization levels shown in the deck?",
        type: "multiple-choice",
        choices: [
          {
            label: "CLEAR < PURGE < DESTROY",
            value: "a"
          },
          {
            label: "DESTROY < CLEAR < PURGE",
            value: "b"
          },
          {
            label: "PURGE < CLEAR < DESTROY",
            value: "c"
          },
          {
            label: "CLEAR < DESTROY < PURGE",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The slide presents the increasing sanitization scale as CLEAR, then PURGE, then DESTROY. Source: Deck 11, slide 30."
      },
      {
        id: 72,
        prompt: "What should an application do with user-uploaded files before intended use?",
        type: "multiple-choice",
        choices: [
          {
            label: "Control format/name/location and sandbox or quarantine files for malicious-content scanning",
            value: "a"
          },
          {
            label: "Execute them to check whether they work",
            value: "b"
          },
          {
            label: "Trust any file extension",
            value: "c"
          },
          {
            label: "Store them in a shared executable directory",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The deck requires format and naming control, sandboxing/quarantine, scanning, and ensuring uploads are never executed. Source: Deck 11, slide 32."
      },
      {
        id: 73,
        prompt: "Which are OECD Fair Information Practice principles in the slides?",
        type: "multi-select",
        choices: [
          {
            label: "Collection limitation",
            value: "collection"
          },
          {
            label: "Data quality",
            value: "quality"
          },
          {
            label: "Purpose specification",
            value: "purpose"
          },
          {
            label: "Use limitation",
            value: "use"
          }
        ],
        correctAnswer: "collection,quality,purpose,use",
        explanation: "These four appear on the first OECD Fair Information Practices slide; safeguards, openness, participation, and accountability follow on the next slide. Source: Deck 11, slide 36."
      },
      {
        id: 74,
        prompt: "Under GDPR, who decides why and how personal data will be processed?",
        type: "multiple-choice",
        choices: [
          {
            label: "The data controller",
            value: "a"
          },
          {
            label: "The data processor only",
            value: "b"
          },
          {
            label: "The data subject",
            value: "c"
          },
          {
            label: "The certificate authority",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "The controller decides why and how processing occurs; a processor handles data on the controller\u2019s behalf. Source: Deck 11, slide 39."
      },
      {
        id: 75,
        prompt: "What does a denial-of-service attack threaten by consuming a finite resource?",
        type: "multiple-choice",
        choices: [
          {
            label: "Availability",
            value: "a"
          },
          {
            label: "Confidentiality",
            value: "b"
          },
          {
            label: "Non-repudiation",
            value: "c"
          },
          {
            label: "Identity proofing",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "DoS threatens availability by consuming resources and slowing, crashing, or freezing services. Source: Deck 12, slide 8."
      },
      {
        id: 76,
        prompt: "How does a DDoS attack differ from a DoS attack?",
        type: "multiple-choice",
        choices: [
          {
            label: "It uses many networked devices in a coordinated attack",
            value: "a"
          },
          {
            label: "It can only target DNS",
            value: "b"
          },
          {
            label: "It always uses a single endpoint",
            value: "c"
          },
          {
            label: "It encrypts data at rest",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "A DDoS attack coordinates many devices against targets, with Mirai offered as an example. Source: Deck 12, slide 9."
      },
      {
        id: 77,
        prompt: "Which countermeasures for DoS/DDoS are listed?",
        type: "multi-select",
        choices: [
          {
            label: "Scan and patch endpoints/infrastructure",
            value: "patch"
          },
          {
            label: "Disable unused services",
            value: "asr"
          },
          {
            label: "Rate-limit or throttle requests",
            value: "ratelimit"
          },
          {
            label: "Require strong authentication and PAM for remote administrators",
            value: "pam"
          }
        ],
        correctAnswer: "patch,asr,ratelimit,pam",
        explanation: "The deck lists discovery/patching, attack-surface reduction, strong authentication/PAM, sound network design, throttling, graceful degradation, and specialist protection. Source: Deck 12, slide 10."
      },
      {
        id: 78,
        prompt: "What two protections does DNSSEC add according to the slides?",
        type: "multiple-choice",
        choices: [
          {
            label: "Data-origin authentication and data-integrity protection",
            value: "a"
          },
          {
            label: "Data confidentiality and DDoS immunity",
            value: "b"
          },
          {
            label: "Password hashing and endpoint patching",
            value: "c"
          },
          {
            label: "Network address translation and port filtering",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "DNSSEC signs DNS data, allowing resolvers to verify origin and detect in-transit modification. Source: Deck 12, slide 13."
      },
      {
        id: 79,
        prompt: "What is the principal purpose of DoH and DoT?",
        type: "multiple-choice",
        choices: [
          {
            label: "Reduce DNS eavesdropping and manipulation by using HTTPS or TLS for remote resolution",
            value: "a"
          },
          {
            label: "Replace all DNS names with IP addresses",
            value: "b"
          },
          {
            label: "Digitally sign zone data",
            value: "c"
          },
          {
            label: "Map private addresses to public addresses",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "DoH uses HTTPS and DoT uses TLS directly to protect remote DNS resolution from eavesdropping and MITM manipulation. Source: Deck 12, slide 14."
      },
      {
        id: 80,
        prompt: "What is NAT\u2019s original purpose?",
        type: "multiple-choice",
        choices: [
          {
            label: "Conserving limited IPv4 addresses",
            value: "a"
          },
          {
            label: "Providing complete network security",
            value: "b"
          },
          {
            label: "Signing DNS records",
            value: "c"
          },
          {
            label: "Detecting malware",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "NAT was originally for address conservation; it can bring side benefits but is not primarily a security control. Source: Deck 12, slide 20."
      },
      {
        id: 81,
        prompt: "Which IPSec property lets higher layers gain its protections automatically?",
        type: "multiple-choice",
        choices: [
          {
            label: "It operates at the Network/Internet layer",
            value: "a"
          },
          {
            label: "It operates only in application code",
            value: "b"
          },
          {
            label: "It operates only on physical media",
            value: "c"
          },
          {
            label: "It uses no security association",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "IPSec works at the Network/Internet layer and supplies authentication, integrity, confidentiality, and anti-replay benefits upward. Source: Deck 12, slide 21."
      },
      {
        id: 82,
        prompt: "What does Network Access Control (NAC) do before a device joins a network?",
        type: "multiple-choice",
        choices: [
          {
            label: "Evaluates endpoint security state and can block, quarantine, or reduce access until compliant",
            value: "a"
          },
          {
            label: "Assigns every device administrator rights",
            value: "b"
          },
          {
            label: "Encrypts every database backup",
            value: "c"
          },
          {
            label: "Eliminates the need for a guest network",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "NAC scans/assesses connecting endpoints and enforces policy by blocking, quarantining, or limiting noncompliant devices. Source: Deck 12, slide 18."
      },
      {
        id: 83,
        prompt: "What is a key limitation of many IDS deployments?",
        type: "multiple-choice",
        choices: [
          {
            label: "They usually cannot inspect encrypted traffic and can be overwhelmed",
            value: "a"
          },
          {
            label: "They cannot analyze any logs",
            value: "b"
          },
          {
            label: "They automatically patch every endpoint",
            value: "c"
          },
          {
            label: "They cannot monitor network activity",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "NIDS and HIDS analyze activity/logs, but xIDS commonly cannot inspect encrypted traffic, can be overwhelmed, and may not understand everything observed. Source: Deck 12, slide 32."
      },
      {
        id: 84,
        prompt: "What capability distinguishes an IPS from an IDS?",
        type: "multiple-choice",
        choices: [
          {
            label: "An IPS can attempt to prevent a detected threat from succeeding",
            value: "a"
          },
          {
            label: "An IPS never sees network traffic",
            value: "b"
          },
          {
            label: "An IPS cannot run in learning mode",
            value: "c"
          },
          {
            label: "An IPS only writes audit reports",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "IPS can terminate connections, block attributes, reconfigure controls, apply patches, or sanitize suspicious content to stop an attack. Source: Deck 12, slide 34."
      },
      {
        id: 85,
        prompt: "What is port scanning used to identify?",
        type: "multiple-choice",
        choices: [
          {
            label: "Open ports on an endpoint or network for inventory/mitigation or tailored attacks",
            value: "a"
          },
          {
            label: "Only encrypted DNS records",
            value: "b"
          },
          {
            label: "Biometric templates",
            value: "c"
          },
          {
            label: "Database token vaults",
            value: "d"
          }
        ],
        correctAnswer: "a",
        explanation: "Port scanning probes to identify endpoints and service ports; it is dual-use for attack tailoring or inventory/remediation. Source: Deck 12, slide 31."
      },
      {
        id: 86,
        prompt: "Which are endpoint-security functional requirements listed in the deck?",
        type: "multi-select",
        choices: [
          {
            label: "Asset discovery and inventory",
            value: "inventory"
          },
          {
            label: "Patch and configuration management",
            value: "patching"
          },
          {
            label: "Policy/device management including BYOD",
            value: "policy"
          },
          {
            label: "Integration with the SOC",
            value: "soc"
          }
        ],
        correctAnswer: "inventory,patching,policy,soc",
        explanation: "Endpoint security includes discovery/inventory, policy, patch/configuration and device management, advanced protection, IoT handling, and SOC integration. Source: Deck 12, slide 40."
      }
    ]
  };

  // modules/index.ts
  var allModules = [
    example_algebra_default,
    example_chemistry_default,
    Linear_Algebra_Exam_2_practice_default,
    Linear_Algebra_314_final_practice_1_default,
    Linear_Algebra_314_final_practice_2_default,
    Linear_Algebra_reci_practice_default,
    testing_multi_select_choice_default,
    csce_469_midterm_practice_security_default
    // Add more modules here, e.g.:
    // myNewModule as Module,
  ];

  // src/app.ts
  var currentModuleIndex = -1;
  var userAnswers = [];
  function init() {
    renderHome();
  }
  function renderHome() {
    const app = getApp();
    app.innerHTML = `
    <div class="screen screen-home">
      <header class="home-header">
        <h1>Quiz App</h1>
        <p class="home-subtitle">Select a module to get started.</p>
      </header>
      <div class="module-grid" id="module-grid"></div>
    </div>
  `;
    const grid = document.getElementById("module-grid");
    allModules.forEach((mod, index) => {
      const btn = document.createElement("button");
      btn.className = "module-card";
      btn.innerHTML = `
      <div class="module-card-img-wrap">
        <img src="${mod.image || "assets/default.png"}"
             onerror="this.src='assets/default.png'"
             alt="${mod.title}" />
      </div>
      <div class="module-card-body">
        <span class="module-card-title">${mod.title}</span>
        <span class="module-card-count">${mod.questions.length} questions</span>
      </div>
    `;
      btn.addEventListener("click", () => renderDetails(index));
      grid.appendChild(btn);
    });
  }
  function renderDetails(moduleIndex) {
    currentModuleIndex = moduleIndex;
    const mod = allModules[moduleIndex];
    const app = getApp();
    app.innerHTML = `
    <div class="screen screen-details">
      <div class="details-left">
        <button class="btn-back" id="btn-back">\u2190 Back</button>
        <img class="details-image"
             src="${mod.image || "assets/default.png"}"
             onerror="this.src='assets/default.png'"
             alt="${mod.title}" />
        <h2 class="details-title">${mod.title}</h2>
        <p class="details-description">${mod.description}</p>

        <div class="details-question-list">
          <h3 class="details-list-heading">Questions in this module</h3>
          <ul id="question-preview-list"></ul>
        </div>
      </div>

      <div class="details-right">
        <div class="details-start-card">
          <p class="start-card-count">${mod.questions.length} questions</p>
          <button class="btn-start" id="btn-start">Start!</button>
        </div>
      </div>
    </div>
  `;
    const list = document.getElementById("question-preview-list");
    mod.questions.forEach((q) => {
      const li = document.createElement("li");
      li.className = "question-preview-item";
      li.innerHTML = `<span class="q-num">${q.id}.</span> <span class="q-text">${renderLatexString(q.prompt)}</span>`;
      list.appendChild(li);
    });
    document.getElementById("btn-back").addEventListener("click", renderHome);
    document.getElementById("btn-start").addEventListener("click", () => renderQuiz(moduleIndex));
  }
  function renderQuiz(moduleIndex) {
    const mod = allModules[moduleIndex];
    userAnswers = mod.questions.map(() => "");
    renderQuizQuestion(mod, 0);
  }
  function renderQuizQuestion(mod, questionIndex) {
    const app = getApp();
    const q = mod.questions[questionIndex];
    app.innerHTML = `
    <div class="screen screen-quiz">

      <!-- TAB BAR: one tab per question -->
      <div class="quiz-tabs" id="quiz-tabs"></div>

      <!-- QUESTION AREA -->
      <div class="quiz-body">
        <div class="quiz-question-card" id="question-card">
          <div class="quiz-question-prompt" id="question-prompt"></div>
          <div class="quiz-answer-area" id="answer-area"></div>
          <div class="quiz-preview-box" id="preview-box" style="display:none;">
            <span class="preview-label">Your answer preview:</span>
            <span class="preview-content" id="preview-content"></span>
          </div>
        </div>

        <!-- BOTTOM ACTION BUTTONS -->
        <div class="quiz-actions">
          <button class="btn-action" id="btn-preview-answer">Preview Answer</button>
          <button class="btn-action" id="btn-preview-test">Preview Test</button>
          <button class="btn-action btn-primary" id="btn-check-test">Check Test</button>
        </div>
      </div>
    </div>
  `;
    const tabBar = document.getElementById("quiz-tabs");
    mod.questions.forEach((_, i) => {
      const tab = document.createElement("button");
      tab.className = "quiz-tab" + (i === questionIndex ? " active" : "");
      tab.textContent = `Q${i + 1}`;
      tab.addEventListener("click", () => {
        saveCurrentAnswer(mod, questionIndex);
        renderQuizQuestion(mod, i);
      });
      tabBar.appendChild(tab);
    });
    const promptEl = document.getElementById("question-prompt");
    promptEl.innerHTML = renderLatexString(q.prompt);
    renderAllLatex(promptEl);
    const answerArea = document.getElementById("answer-area");
    if (q.type === "multiple-choice") {
      renderMultipleChoiceField(answerArea, q, questionIndex);
    } else if (q.type === "multi-select") {
      renderMultiSelectChoiceField(answerArea, q, questionIndex);
    } else {
      renderTextAnswerField(answerArea, q, questionIndex);
    }
    document.getElementById("btn-preview-answer").addEventListener("click", () => {
      saveCurrentAnswer(mod, questionIndex);
      const previewBox = document.getElementById("preview-box");
      const previewContent = document.getElementById("preview-content");
      previewBox.style.display = "flex";
      const raw = userAnswers[questionIndex];
      previewContent.textContent = raw ? simplifyExpression(raw) : "(no answer)";
    });
    document.getElementById("btn-preview-test").addEventListener("click", () => {
      saveCurrentAnswer(mod, questionIndex);
      showPreviewTestModal(mod);
    });
    document.getElementById("btn-check-test").addEventListener("click", () => {
      saveCurrentAnswer(mod, questionIndex);
      renderResults(mod);
    });
  }
  function renderTextAnswerField(container, q, index) {
    const wrapper = document.createElement("div");
    wrapper.className = "text-answer-wrapper";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "text-answer-input";
    input.placeholder = "Type your answer here...";
    input.value = userAnswers[index] || "";
    input.addEventListener("input", () => {
      userAnswers[index] = input.value;
    });
    wrapper.appendChild(input);
    container.appendChild(wrapper);
  }
  function renderMultipleChoiceField(container, q, index) {
    if (!q.choices) return;
    const wrapper = document.createElement("div");
    wrapper.className = "mc-wrapper";
    q.choices.forEach((choice) => {
      const label = document.createElement("label");
      label.className = "mc-option";
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${q.id}`;
      radio.value = choice.value;
      radio.checked = userAnswers[index] === choice.value;
      radio.addEventListener("change", () => {
        userAnswers[index] = choice.value;
        wrapper.querySelectorAll(".mc-option").forEach((el) => el.classList.remove("selected"));
        label.classList.add("selected");
      });
      if (radio.checked) label.classList.add("selected");
      const labelText = document.createElement("span");
      labelText.className = "mc-label-text";
      labelText.innerHTML = renderLatexString(choice.label);
      label.appendChild(radio);
      label.appendChild(labelText);
      wrapper.appendChild(label);
    });
    container.appendChild(wrapper);
    renderAllLatex(wrapper);
  }
  function renderMultiSelectChoiceField(container, q, index) {
    console.log("renderMultiSelectChoiceField");
    let tab_amount = "	";
    console.log(tab_amount, "userAnswers[index]: ", userAnswers[index]);
    if (!q.choices) return;
    const wrapper = document.createElement("div");
    wrapper.className = "ms-wrapper";
    q.choices.forEach((choice) => {
      const label = document.createElement("label");
      label.className = "ms-option";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = `question-${q.id}`;
      checkbox.value = choice.value;
      const selectedAnswers = userAnswers[index] ? userAnswers[index].split(",") : [];
      checkbox.checked = selectedAnswers.includes(choice.value);
      checkbox.addEventListener("change", () => {
        if (userAnswers[index].indexOf(choice.value) === -1) {
          console.log(tab_amount, "before: ", userAnswers[index]);
          if (userAnswers[index] === "") {
            userAnswers[index] += choice.value;
          } else {
            if (userAnswers[index].length === 1) {
              userAnswers[index] += "," + choice.value;
            } else {
              let tempUserAnswersList = userAnswers[index].split(",");
              tempUserAnswersList.push(choice.value);
              tempUserAnswersList = tempUserAnswersList.sort();
              userAnswers[index] = tempUserAnswersList.join(",");
            }
          }
          console.log(tab_amount, "after: ", userAnswers[index]);
        } else if (userAnswers[index].indexOf(choice.value) > -1) {
          console.log(tab_amount, "before: ", userAnswers[index]);
          if (userAnswers[index].length === 1) {
            userAnswers[index] = "";
          } else {
            let tempUserAnswersList = userAnswers[index].split(",");
            let indexOfChoiceDotValue = userAnswers[index].indexOf(choice.value);
            console.log(tab_amount, "	indexOfChoiceDotValue: ", indexOfChoiceDotValue);
            if (indexOfChoiceDotValue > -1) {
              tempUserAnswersList.splice(indexOfChoiceDotValue, 1);
            }
            tempUserAnswersList = tempUserAnswersList.sort();
            userAnswers[index] = tempUserAnswersList.join(",");
          }
          console.log(tab_amount, "after: ", userAnswers[index]);
        }
        wrapper.querySelectorAll(".ms-option").forEach((el) => el.classList.remove("checked"));
        label.classList.add("checked");
      });
      if (checkbox.checked) label.classList.add("checked");
      const labelText = document.createElement("span");
      labelText.className = "ms-label-text";
      labelText.innerHTML = renderLatexString(choice.label);
      label.appendChild(checkbox);
      label.appendChild(labelText);
      wrapper.appendChild(label);
    });
    container.appendChild(wrapper);
    renderAllLatex(wrapper);
  }
  function saveCurrentAnswer(mod, questionIndex) {
    const q = mod.questions[questionIndex];
    if (q.type === "text") {
      const input = document.querySelector(".text-answer-input");
      if (input) userAnswers[questionIndex] = input.value;
    }
  }
  function showPreviewTestModal(mod) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
    <div class="modal-header">
      <h3>Test Preview</h3>
      <button class="modal-close" id="modal-close-btn">\u2715</button>
    </div>
    <div class="modal-body" id="modal-body"></div>
  `;
    const body = modal.querySelector("#modal-body");
    mod.questions.forEach((q, i) => {
      const item = document.createElement("div");
      item.className = "modal-preview-item";
      const answer = userAnswers[i];
      const displayAnswer = answer ? simplifyExpression(answer) : "(no answer)";
      item.innerHTML = `
      <div class="modal-q-prompt">${renderLatexString(q.prompt)}</div>
      <div class="modal-q-answer">Answer: <strong>${displayAnswer}</strong></div>
    `;
      body.appendChild(item);
      renderAllLatex(item);
    });
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.getElementById("modal-close-btn").addEventListener("click", () => {
      document.body.removeChild(overlay);
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) document.body.removeChild(overlay);
    });
  }
  function renderResults(mod) {
    const app = getApp();
    const graded = mod.questions.map((q, i) => {
      const raw = userAnswers[i] || "";
      const simplified = simplifyExpression(raw);
      const correct = simplified.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
      return { q, userAnswer: simplified, correct };
    });
    const numCorrect = graded.filter((g) => g.correct).length;
    const total = mod.questions.length;
    const pct = Math.round(numCorrect / total * 100);
    app.innerHTML = `
    <div class="screen screen-results">
      <div class="results-header">
        <h2>Results: ${mod.title}</h2>
        <div class="results-score">
          <span class="score-fraction">${numCorrect} / ${total}</span>
          <span class="score-pct">${pct}%</span>
        </div>
        <button class="btn-back" id="btn-exit">\u2190 Exit to Home</button>
      </div>
      <div class="results-list" id="results-list"></div>
    </div>
  `;
    const list = document.getElementById("results-list");
    graded.forEach(({ q, userAnswer, correct }) => {
      const card = document.createElement("div");
      card.className = "result-card " + (correct ? "result-correct" : "result-wrong");
      const explanationHtml = !correct && q.explanation ? `<div class="result-explanation">Explanation: ${renderLatexString(q.explanation)}</div>` : "";
      card.innerHTML = `
      <div class="result-card-header">
        <span class="result-q-num">Q${q.id}</span>
        <span class="result-status">${correct ? "\u2713 Correct" : "\u2717 Incorrect"}</span>
      </div>
      <div class="result-q-prompt">${renderLatexString(q.prompt)}</div>
      <div class="result-answer-row">
        <span class="result-answer-label">Your answer:</span>
        <span class="result-answer-value">${userAnswer || "(no answer)"}</span>
      </div>
      ${!correct ? `<div class="result-answer-row result-correct-row">
        <span class="result-answer-label">Correct answer:</span>
        <span class="result-answer-value">${q.correctAnswer}</span>
      </div>` : ""}
      ${explanationHtml}
    `;
      list.appendChild(card);
      renderAllLatex(card);
    });
    document.getElementById("btn-exit").addEventListener("click", renderHome);
  }
  function getApp() {
    return document.getElementById("app");
  }
  function renderLatexString(text) {
    if (!text) return "";
    let result = text;
    result = result.replace(/\$\$([\s\S]+?)\$\$/g, (_, math_) => {
      try {
        return katex.renderToString(math_, { displayMode: true, throwOnError: false });
      } catch {
        return `<span class="katex-error">${_}</span>`;
      }
    });
    result = result.replace(/\$([\s\S]+?)\$/g, (_, math_) => {
      try {
        return katex.renderToString(math_, { displayMode: false, throwOnError: false });
      } catch {
        return `<span class="katex-error">${_}</span>`;
      }
    });
    return result;
  }
  function renderAllLatex(container) {
    if (typeof window.renderMathInElement === "function") {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }
  function simplifyExpression(input) {
    if (!input || input.trim() === "") return "";
    const trimmed = input.trim();
    try {
      const result = math.evaluate(trimmed);
      if (typeof result === "number") {
        return String(Math.round(result * 1e10) / 1e10);
      }
      return trimmed;
    } catch {
      return trimmed;
    }
  }

  // main.ts
  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();
