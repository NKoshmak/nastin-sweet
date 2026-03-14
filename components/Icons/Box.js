/** @format */

export default function BoxIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <circle cx="32" cy="32" r="28" fill="#dc8696" fill-opacity="0.15" /> */}
      <rect
        x="20"
        y="28"
        width="24"
        height="16"
        rx="3"
        stroke="#c06a8d"
        stroke-width="2"
        fill="none"
      />
      <path d="M20 32h24" stroke="#c06a8d" stroke-width="2" />
      <path d="M32 28v16" stroke="#c06a8d" stroke-width="2" />
      <path
        d="M26 25c2-3 4-3 6 0 2-3 4-3 6 0"
        stroke="#c06a8d"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
      />
    </svg>
  );
}
