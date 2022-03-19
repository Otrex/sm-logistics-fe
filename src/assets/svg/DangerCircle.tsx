export default function DangerCircle(props: any) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "inline" }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0.75C15.108 0.75 19.25 4.891 19.25 10C19.25 15.108 15.108 19.25 10 19.25C4.891 19.25 0.75 15.108 0.75 10C0.75 4.891 4.891 0.75 10 0.75Z"
          stroke="#2F80ED"
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.99512 6.2041V10.6231"
          stroke="#2F80ED"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.995 13.7959H10.005"
          stroke="#2F80ED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
