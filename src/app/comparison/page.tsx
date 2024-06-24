"use client";

function ComparisonPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
        Comparison
      </h1>
      <div className={"flex flex-row justify-between items-center mb-6"}>
        <div>
          {/*
            .btn-primary {
                background-color: #3490dc;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
                text-align: center;
                }
        */}
          <button className="btn-primary">Click me</button>
        </div>
        <div>
          {/*
            bg-blue-500: Sets the background color to blue.
            text-white: Sets the text color to white.
            px-4: Sets horizontal padding.
            py-2: Sets vertical padding.
            rounded: Applies border-radius.
            text-center: Centers the text.
          */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-center">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComparisonPage;
