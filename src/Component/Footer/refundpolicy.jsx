const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h2 className="text-3xl font-semibold text-gray-800">Refund Policy</h2>
      <nav className="mt-2 text-gray-600">
        <a href="/" className="">
          Home
        </a>{" "}
        » Refund Policy
      </nav>

      <hr className="border-t border-gray-300 my-6" />

      <section>
        <h3 className="text-xl font-semibold text-gray-700">Returns</h3>
        <p className="text-gray-600 mt-2">
          At Abroadium, we value your satisfaction. Our refund policy is valid
          for <strong>3 days</strong> from the date of purchase. Unfortunately,
          if more than 3 days have passed, we will not be able to process a
          refund or exchange.
        </p>
        <p className="text-gray-600 mt-2">
          To request a refund, please reach out to our support team at{" "}
          <a
            href="mailto:airesume@abroadium.com"
            className="text-blue-500 hover:underline"
          >
            airesume@abroadium.com
          </a>{" "}
          with details about your concerns. If the issue remains unresolved, we
          will ensure that a refund is processed promptly.
        </p>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          Non-Refundable Items
        </h3>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Digital products, such as PDF files.</li>
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">
          Refund Processing
        </h3>
        <p className="text-gray-600 mt-2">
          If your refund request is approved, we will process the refund within{" "}
          <strong>7 business days</strong>. Your trust matters to us, and we’re
          here to help resolve any concerns.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
