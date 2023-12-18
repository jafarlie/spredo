const FAQComponent = () => {
  return (
    <>
      <div className="mx-12 my-12 text-center">
        <h1
          className="text-5xl font-bold tracking-tight text-white sm:text-4xl"
          style={{ color: "#05393c" }}
        >
          FAQ
        </h1>
      </div>
      <div className="px-6 lg:px-8 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white mx-12 my-12">
        <details
          className="group p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">What is Spredo?</h2>

            <span className="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            Spredo is an innovative solution designed to enhance the office
            kitchen experience. We specialize in providing a wide range of
            gourmet spread options, delivered in convenient, single-use
            cartridge pouches. Our service is tailored to meet the needs of
            modern office environments, offering a variety of flavors to cater
            to diverse tastes and dietary preferences. With Spredo, offices can
            enjoy hassle-free, regular replenishment of high-quality spreads,
            ensuring a constant supply of delicious choices for employees. Our
            goal is to simplify pantry management while elevating the office
            snacking experience, making healthy and tasty food options readily
            available to all employees at a smart cost.
          </p>
        </details>

        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              How does the Spredo device work?
            </h2>

            <span className="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <p>
              The Spredo device is a user-friendly and innovative tool designed
              to seamlessly dispense our gourmet spreads. With its ease of use,
              consistent performance, and minimal maintenance, the Spredo device
              is an ideal solution for busy office environments, making gourmet
              snacking convenient and enjoyable. Here&apos;s how it works:
            </p>
            <br></br>
            <p>
              <strong>1. Loading the Cartridge</strong>: Simply insert a Spredo
              single-use cartridge pouch into the device. These pouches come in
              a variety of gourmet spread flavors, catering to diverse tastes.
            </p>
            <p>
              <strong>2. Dispensing the Spread</strong>: Once the cartridge is
              loaded, the device is ready to use. Press the dispensing button or
              lever (depending on the model) to smoothly apply the spread
              directly onto your bread or snack.
            </p>
            <p>
              <strong>3. Consistent Quantity</strong>: The Spredo device is
              designed to dispense a consistent amount of spread each time,
              ensuring perfect coverage and taste with every use.
            </p>
            <p>
              <strong>4. Easy Maintenance</strong>: After use, the device
              requires minimal cleaning. Just remove the empty cartridge and
              replace it with a new one for your next snack.
            </p>
            <p>
              <strong>5. Eco-Friendly Design</strong>: The cartridges are
              designed to be eco-friendly and can be recycled or disposed of in
              an environmentally conscious way.
            </p>
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              What happens if the Spredo machine breaks?
            </h2>

            <span className="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <p>
              If you encounter any issues with the Spredo machine, rest assured
              that our customer support team is here to help. We pride ourselves
              on responsive and helpful customer service to ensure that your
              Spredo experience is always positive and hassle-free. Here&apos;s
              what to do if the machine breaks:
            </p>
            <br></br>
            <p>
              <strong>Contact Support</strong>: Reach out to our customer
              support team immediately. You can contact us via phone, email, or
              through our website. Provide details about the issue you&apos;re
              experiencing.
            </p>
            <p>
              <strong>Troubleshooting Assistance</strong>: Our team will first
              guide you through some basic troubleshooting steps to see if the
              issue can be resolved quickly and easily.
            </p>
            <p>
              <strong>Repair or Replacement</strong>: If the machine cannot be
              fixed through troubleshooting, we will arrange for a repair or
              replacement. Our goal is to ensure minimal disruption to your
              office&apos;s snack routine.
            </p>
            <p>
              <strong>Follow-Up</strong>: After your machine is repaired or
              replaced, we will follow up to ensure everything is working
              smoothly and that you are satisfied with the solution.
            </p>
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Where should I store the Spredo package?
            </h2>

            <span className="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <p>
              The Spredo package, containing our single-use cartridge pouches,
              is designed to be conveniently stored in any standard office
              kitchen space. By following these simple storage guidelines, you
              can ensure that the Spredo spreads remain fresh and are always
              ready to enhance your office snacking experience. Here are some
              storage tips to ensure optimal freshness and usability:
            </p>
            <br></br>
            <p>
              <strong>1. Room Temperature Storage</strong>: Store the Spredo
              package in a cool, dry place at room temperature. This is ideal
              for maintaining the quality and taste of the spreads.
            </p>
            <p>
              <strong>2. Accessible Location</strong>: Keep the package in an
              easily accessible area of your office kitchen or pantry. This
              ensures that employees can conveniently grab a new cartridge
              whenever needed.
            </p>
            <p>
              <strong>3. Avoid Direct Sunlight and Heat</strong>: To preserve
              the spreads&apos; freshness, avoid storing the package in direct
              sunlight or near any heat sources, such as ovens or stovetops.
            </p>
            <p>
              <strong>4. Organized Storage</strong>: If you have multiple
              flavors, you might consider organizing them in a way that makes it
              easy for employees to find their preferred choice.
            </p>
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Are there any delivery fees?
            </h2>

            <span className="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <p>
              When it comes to delivery fees for Spredo, we aim to maintain
              transparency and simplicity. All delivery-related costs are
              comprehensively included in your service contract. This means
              there are no separate or hidden delivery fees.
            </p>
            <p>
              The total cost outlined in your contract covers everything - from
              the regular delivery of spread cartridges to any necessary
              maintenance services. By consolidating all fees into the contract,
              we ensure that you can budget effectively without any surprises.
            </p>
          </p>
        </details>
        <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="text-lg font-medium">
              Are all ingredients allergen-friendly?
            </h2>

            <span className="relative h-5 w-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            <p>
              At Spredo, we offer a diverse range of gourmet spread flavors,
              each with its unique blend of ingredients. It&apos;s important for our
              customers to be aware that some of these ingredients may contain
              allergens. At Spredo, we are committed to providing high-quality,
              flavorful options while prioritizing the health and safety of our
              consumers. Your wellbeing is our top priority. Here are a few key
              points to consider:
            </p>
            <br></br>
            <p>
              <strong>Ingredient Transparency</strong>: We believe in full
              transparency regarding our product ingredients. Detailed
              ingredient lists for each flavor are available on our packaging
              and our website, making it easy for you to check for potential
              allergens.
            </p>
            <p>
              <strong>Common Allergens</strong>: Some of our spread flavors may
              contain allergens such as nuts, dairy, gluten, soy, and others. We
              are committed to clearly labeling any common allergens in our
              products.
            </p>
            <p>
              <strong>Facility Information</strong>: Our spreads are produced in
              facilities that handle a variety of ingredients, including common
              allergens. While we adhere to stringent safety protocols to
              minimize cross-contamination, there is still a possibility of
              trace amounts being present.
            </p>
            <p>
              <strong>Advisory Note</strong>: We recommend that individuals with
              severe allergies or specific dietary concerns review the
              ingredient lists carefully and consult with a healthcare provider
              if necessary before consuming our products.
            </p>
          </p>
        </details>
      </div>
    </>
  );
};

export default FAQComponent;
