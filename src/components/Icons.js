// Financial Icons as SVG Components

export function ChitFundIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="#1e40af" opacity="0.1" />
      <path
        d="M32 16L40 24H36V32H28V24H24L32 16Z"
        fill="#1e40af"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <path
        d="M32 48L24 40H28V32H36V40H40L32 48Z"
        fill="#1e40af"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <circle cx="32" cy="32" r="4" fill="#1e40af" />
    </svg>
  );
}

export function MoneyTransferIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="20"
        width="48"
        height="32"
        rx="4"
        fill="#1e40af"
        opacity="0.1"
      />
      <rect
        x="8"
        y="20"
        width="48"
        height="32"
        rx="4"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <path
        d="M20 32L28 24M28 24L36 32M28 24V40"
        stroke="#1e40af"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="44" cy="36" r="3" fill="#1e40af" />
    </svg>
  );
}

export function InvestmentIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 48L24 36L32 44L44 32L52 40"
        stroke="#1e40af"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 48L24 36L32 44L44 32L52 40"
        stroke="#1e40af"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
      />
      <circle cx="12" cy="48" r="3" fill="#1e40af" />
      <circle cx="24" cy="36" r="3" fill="#1e40af" />
      <circle cx="32" cy="44" r="3" fill="#1e40af" />
      <circle cx="44" cy="32" r="3" fill="#1e40af" />
      <circle cx="52" cy="40" r="3" fill="#1e40af" />
    </svg>
  );
}

export function LoanIcon({ className = "w-12 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="12"
        width="32"
        height="40"
        rx="4"
        fill="#1e40af"
        opacity="0.1"
      />
      <rect
        x="16"
        y="12"
        width="32"
        height="40"
        rx="4"
        stroke="#1e40af"
        strokeWidth="2"
      />
      <path
        d="M24 24H40M24 32H40M24 40H32"
        stroke="#1e40af"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="20" r="2" fill="#1e40af" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export function CheckIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

export function MailIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}
