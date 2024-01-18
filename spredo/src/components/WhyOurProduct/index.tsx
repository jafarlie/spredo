export default function Component() {
  return (
    <div
      className="w-full flex pt-24 justify-center bg-midnightGreen"
      style={{ color: "white" }}
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
            style={{ color: "#dba76c" }}
          >
            Transform Your Office Snacking
          </h2>
          <p className="max-w-[900px] mt-6 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our product offers a range of features designed to help you achieve
            more in less time. Let's explore what makes our product stand out.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 items-start mt-24">
          <div className="flex flex-col items-center text-center mt-12">
            <ShoppingCartIcon
              className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
              style={{ color: "#dba76c" }}
            />
            <h1 className="text-2xl font-semibold mb-2">
              <strong>Huge Variety</strong>
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We offer a wide range of options, encompassing everything from
              classic peanut and almond butters to jams and jellies. We also
              take care to include nut butters that are friendly to those with
              allergies.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-12">
            <SmileIcon
              className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
              style={{ color: "#dba76c" }}
            />
            <h1 className="text-2xl font-semibold mb-2">Satisfied Employees</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Did you know that 60% of employees listed free food as one of
              their top three workplace perks, and 90% of employers found that
              it helped build stronger internal relationships.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-12">
            <HelpCircleIcon
              className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
              style={{ color: "#dba76c" }}
            />
            <h2 className="text-2xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-500 dark:text-gray-400">
              We strive to ensure every customer experience is smooth,
              efficient, and satisfying, reflecting our commitment to
              outstanding service and support.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 items-start mb-24 mt-12">
          <div className="flex flex-col items-center text-center mt-12">
            <BoxIcon
              className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
              style={{ color: "#dba76c" }}
            />
            <h1 className="text-2xl font-semibold mb-2">Monthly Restocking</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Spredo team will deliver your spreads on a monthly basis. We will
              restock your Spredo corner and collect unused items and
              recyclables.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-12">
            <DollarSignIcon
              className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
              style={{ color: "#dba76c" }}
            />
            <h1 className="text-2xl font-semibold mb-2">Cost Effective</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Spredo sits at the intersection of tasty, healthy and
              cost-effective snacking. Boost your employee satisfaction at a
              fraction of a cost.
            </p>
          </div>
          <div className="flex flex-col items-center text-center mt-12">
            <ShieldIcon
              className="h-12 w-12 mb-4 text-gray-900 dark:text-gray-50"
              style={{ color: "#dba76c" }}
            />
            <h3 className="text-2xl font-semibold mb-2">Device Maintenance</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We provide free maintenance for your Spredo device. Should any
              issue arise, rest assured, we've got your back. Free of charge!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FastForwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function HelpCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function SmileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function BoxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
