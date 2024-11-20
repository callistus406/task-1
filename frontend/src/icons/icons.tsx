const EyeOpen = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

const EyeClose = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7649 6.07596C14.9991 6.22231 15.0703 6.53079 14.9239 6.76495C14.4849 7.46743 13.9632 8.10645 13.3702 8.66305L14.5712 9.86406C14.7664 10.0593 14.7664 10.3759 14.5712 10.5712C14.3759 10.7664 14.0593 10.7664 13.8641 10.5712L12.6011 9.30817C11.805 9.90283 10.9089 10.3621 9.93375 10.651L10.383 12.3277C10.4544 12.5944 10.2961 12.8685 10.0294 12.94C9.76267 13.0115 9.4885 12.8532 9.41704 12.5865L8.95917 10.8775C8.48743 10.958 8.00036 10.9999 7.50001 10.9999C6.99965 10.9999 6.51257 10.958 6.04082 10.8775L5.58299 12.5864C5.51153 12.8532 5.23737 13.0115 4.97064 12.94C4.7039 12.8686 4.5456 12.5944 4.61706 12.3277L5.06625 10.651C4.09111 10.3621 3.19503 9.90282 2.3989 9.30815L1.1359 10.5712C0.940638 10.7664 0.624058 10.7664 0.428798 10.5712C0.233537 10.3759 0.233537 10.0593 0.428798 9.86405L1.62982 8.66303C1.03682 8.10643 0.515113 7.46742 0.0760677 6.76495C-0.0702867 6.53079 0.000898544 6.22231 0.235065 6.07596C0.469231 5.9296 0.777703 6.00079 0.924058 6.23496C1.40354 7.00213 1.989 7.68057 2.66233 8.2427C2.67315 8.25096 2.6837 8.25972 2.69397 8.26898C4.00897 9.35527 5.65537 9.99991 7.50001 9.99991C10.3078 9.99991 12.6564 8.5063 14.076 6.23495C14.2223 6.00079 14.5308 5.9296 14.7649 6.07596Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

const DeleteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M9.878 4.25a2.251 2.251 0 0 1 4.244 0a.75.75 0 1 0 1.415-.5a3.751 3.751 0 0 0-7.073 0a.75.75 0 1 0 1.414.5M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6m2.367 1.752a.75.75 0 0 1 .798.698l.46 6.9c.09 1.347.154 2.285.294 2.99c.137.685.327 1.047.6 1.303c.274.256.648.422 1.34.512c.714.093 1.654.095 3.004.095h.774c1.35 0 2.29-.002 3.004-.095c.692-.09 1.066-.256 1.34-.512c.273-.256.463-.618.6-1.303c.14-.705.204-1.643.294-2.99l.46-6.9a.75.75 0 1 1 1.497.1l-.464 6.952c-.085 1.282-.154 2.318-.316 3.132c-.169.845-.455 1.551-1.047 2.104s-1.315.793-2.17.904c-.822.108-1.86.108-3.145.108h-.88c-1.285 0-2.323 0-3.145-.108c-.855-.111-1.579-.35-2.17-.904c-.592-.553-.878-1.26-1.047-2.104c-.162-.814-.23-1.85-.316-3.132L4.418 8.55a.75.75 0 0 1 .699-.798"
      ></path>
    </svg>
  );
};

const LoadingIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
        opacity={0.5}
      ></path>
      <path
        fill="currentColor"
        d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
      >
        <animateTransform
          attributeName="transform"
          dur="1s"
          from="0 12 12"
          repeatCount="indefinite"
          to="360 12 12"
          type="rotate"
        ></animateTransform>
      </path>
    </svg>
  );
};

const AdminIcon = (className: string) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M17 11c.34 0 .67.04 1 .09V6.27L10.5 3L3 6.27v4.91c0 4.54 3.2 8.79 7.5 9.82c.55-.13 1.08-.32 1.6-.55c-.69-.98-1.1-2.17-1.1-3.45c0-3.31 2.69-6 6-6"
      ></path>
      <path
        fill="currentColor"
        d="M17 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 1.38c.62 0 1.12.51 1.12 1.12s-.51 1.12-1.12 1.12s-1.12-.51-1.12-1.12s.5-1.12 1.12-1.12m0 5.37c-.93 0-1.74-.46-2.24-1.17c.05-.72 1.51-1.08 2.24-1.08s2.19.36 2.24 1.08c-.5.71-1.31 1.17-2.24 1.17"
      ></path>
    </svg>
  );
};
function CloseModalIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
        fill="currentColor"
      />
    </svg>
  );
}
function AddIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      className={className}
    >
      <path
        fill="currentColor"
        d="M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
      ></path>
      <path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z"></path>
    </svg>
  );
}
function IconWarning({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}
function MaleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.488T15 14.5q0 2.3-1.6 3.9T9.5 20t-3.9-1.6T4 14.5t1.6-3.9T9.5 9q.825 0 1.625.237t1.475.738L16.575 6H14V4zM9.5 11q-1.45 0-2.475 1.025T6 14.5t1.025 2.475T9.5 18t2.475-1.025T13 14.5t-1.025-2.475T9.5 11"
      ></path>
    </svg>
  );
}
function FeMaleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4m-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5"
      ></path>
    </svg>
  );
}
function MalePupilIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.62}
      height={32}
      viewBox="0 0 1024 1760"
      className={className}
    >
      <path
        fill="currentColor"
        d="M1024 672v416q0 40-28 68t-68 28t-68-28t-28-68V736h-64v912q0 46-33 79t-79 33t-79-33t-33-79v-464h-64v464q0 46-33 79t-79 33t-79-33t-33-79V736h-64v352q0 40-28 68t-68 28t-68-28t-28-68V672q0-80 56-136t136-56h640q80 0 136 56t56 136M736 224q0 93-65.5 158.5T512 448t-158.5-65.5T288 224t65.5-158.5T512 0t158.5 65.5T736 224"
      ></path>
    </svg>
  );
}
function CancelIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 15 15"
      className={className}
    >
      <path
        fill="currentColor"
        d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"
      ></path>
    </svg>
  );
}
function ClassRoomIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M1.637 1.637C.732 1.637 0 2.369 0 3.273v17.454c0 .904.732 1.636 1.637 1.636h20.726c.905 0 1.637-.732 1.637-1.636V3.273c0-.904-.732-1.636-1.637-1.636zm.545 2.181h19.636v16.364h-2.726v-1.09h-4.91v1.09h-12zM12 8.182a1.636 1.636 0 1 0 0 3.273a1.636 1.636 0 1 0 0-3.273m-4.363 1.91c-.678 0-1.229.55-1.229 1.226a1.228 1.228 0 0 0 2.455 0c0-.677-.549-1.226-1.226-1.226m8.726 0a1.227 1.227 0 1 0 0 2.453a1.227 1.227 0 0 0 0-2.453M12 12.545c-1.179 0-2.413.401-3.148 1.006a4.1 4.1 0 0 0-1.215-.188c-1.314 0-2.729.695-2.729 1.559v.896h14.184v-.896c0-.864-1.415-1.559-2.729-1.559c-.41 0-.83.068-1.215.188c-.735-.605-1.969-1.006-3.148-1.006"
      ></path>
    </svg>
  );
}
function FeMalePupilIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23.28}
      height={32}
      className={className}
      viewBox="0 0 1280 1760"
    >
      <path
        fill="currentColor"
        d="M1280 1024q0 40-28 68t-68 28q-51 0-80-43L877 736h-45v132l247 411q9 15 9 33q0 26-19 45t-45 19H832v272q0 46-33 79t-79 33H560q-46 0-79-33t-33-79v-272H256q-26 0-45-19t-19-45q0-18 9-33l247-411V736h-45l-227 341q-29 43-80 43q-40 0-68-28t-28-68q0-29 16-53l256-384q73-107 176-107h384q103 0 176 107l256 384q16 24 16 53M864 224q0 93-65.5 158.5T640 448t-158.5-65.5T416 224t65.5-158.5T640 0t158.5 65.5T864 224"
      ></path>
    </svg>
  );
}
function GraduateIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={32}
      viewBox="0 0 448 512"
      className={className}
    >
      <path
        fill="currentColor"
        d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8M13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3c0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57c0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6"
      ></path>
    </svg>
  );
}
function ChalkBoardTeacherIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={32}
      viewBox="0 0 640 512"
      className={className}
    >
      <path
        fill="currentColor"
        d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360s-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"
      ></path>
    </svg>
  );
}
function UserCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={32}
      viewBox="0 0 640 512"
      className={className}
    >
      <path
        fill="currentColor"
        d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
      ></path>
    </svg>
  );
}
function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1"
      ></path>
    </svg>
  );
}
function ProfileCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 14.5a6.47 6.47 0 0 0 3.25-.87V11.5A2.25 2.25 0 0 0 9 9.25H7a2.25 2.25 0 0 0-2.25 2.25v2.13A6.47 6.47 0 0 0 8 14.5m4.75-3v.937a6.5 6.5 0 1 0-9.5 0V11.5a3.75 3.75 0 0 1 2.486-3.532a3 3 0 1 1 4.528 0A3.75 3.75 0 0 1 12.75 11.5M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
function CalenderIcon2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
      ></path>
      <path
        fill="currentColor"
        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"
      ></path>
    </svg>
  );
}
function LogoutIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <g className="logout-outline">
        <g
          fill="currentColor"
          fillRule="evenodd"
          className="Vector"
          clipRule="evenodd"
        >
          <path d="M3 7a5 5 0 0 1 5-5h5a1 1 0 1 1 0 2H8a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5a1 1 0 1 1 0 2H8a5 5 0 0 1-5-5z"></path>
          <path d="M14.47 7.316a1 1 0 0 1 1.414-.046l4.8 4.5a1 1 0 0 1 0 1.46l-4.8 4.5a1 1 0 1 1-1.368-1.46l2.955-2.77H8a1 1 0 1 1 0-2h9.471l-2.955-2.77a1 1 0 0 1-.046-1.414"></path>
        </g>
      </g>
    </svg>
  );
}
function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 14.5a6.47 6.47 0 0 0 3.25-.87V11.5A2.25 2.25 0 0 0 9 9.25H7a2.25 2.25 0 0 0-2.25 2.25v2.13A6.47 6.47 0 0 0 8 14.5m4.75-3v.937a6.5 6.5 0 1 0-9.5 0V11.5a3.75 3.75 0 0 1 2.486-3.532a3 3 0 1 1 4.528 0A3.75 3.75 0 0 1 12.75 11.5M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
function UserTimesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={32}
      viewBox="0 0 640 512"
      className={className}
    >
      <path
        fill="currentColor"
        d="m589.6 240l45.6-45.6c6.3-6.3 6.3-16.5 0-22.8l-22.8-22.8c-6.3-6.3-16.5-6.3-22.8 0L544 194.4l-45.6-45.6c-6.3-6.3-16.5-6.3-22.8 0l-22.8 22.8c-6.3 6.3-6.3 16.5 0 22.8l45.6 45.6l-45.6 45.6c-6.3 6.3-6.3 16.5 0 22.8l22.8 22.8c6.3 6.3 16.5 6.3 22.8 0l45.6-45.6l45.6 45.6c6.3 6.3 16.5 6.3 22.8 0l22.8-22.8c6.3-6.3 6.3-16.5 0-22.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128m89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4"
      ></path>
    </svg>
  );
}
function AlarmIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      className={className}
    >
      <defs>
        <mask id="ipSAlarmClock0">
          <g fill="none" strokeLinejoin="round" strokeWidth={4}>
            <path
              fill="#fff"
              stroke="#fff"
              d="M24 44.333c10.125 0 18.333-8.208 18.333-18.333S34.125 7.667 24 7.667S5.667 15.875 5.667 26S13.875 44.333 24 44.333Z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              d="m23.76 15.354l-.002 11.008l7.773 7.773"
            ></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              d="m4 9l7-5m33 5l-7-5"
            ></path>
          </g>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSAlarmClock0)"
      ></path>
    </svg>
  );
}
function ConferenceIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 48 48"
      className={className}
    >
      <circle cx={12} cy={21} r={5} fill="#ffa726"></circle>
      <path
        fill="#455a64"
        d="M2 34.7s2.8-6.3 10-6.3s10 6.3 10 6.3V38H2zm44 0s-2.8-6.3-10-6.3s-10 6.3-10 6.3V38h20z"
      ></path>
      <circle cx={24} cy={17} r={6} fill="#ffb74d"></circle>
      <path
        fill="#607d8b"
        d="M36 34.1s-3.3-7.5-12-7.5s-12 7.5-12 7.5V38h24z"
      ></path>
      <circle cx={36} cy={21} r={5} fill="#ffa726"></circle>
      <circle cx={12} cy={21} r={5} fill="#ffa726"></circle>
      <circle cx={36} cy={21} r={5} fill="#ffa726"></circle>
    </svg>
  );
}
function MoreIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4"
        ></path>
      </g>
    </svg>
  );
}
function LoadingScreenIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <circle cx={12} cy={2} r={0} fill="currentColor">
        <animate
          attributeName="r"
          begin={0}
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(45 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.125s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(90 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.25s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(135 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.375s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(180 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.5s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(225 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.625s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(270 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.75s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
      <circle
        cx={12}
        cy={2}
        r={0}
        fill="currentColor"
        transform="rotate(315 12 12)"
      >
        <animate
          attributeName="r"
          begin="0.875s"
          calcMode="spline"
          dur="1s"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
          repeatCount="indefinite"
          values="0;2;0;0"
        ></animate>
      </circle>
    </svg>
  );
}
function OpenBookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 64 64"
      className={className}
    >
      <path fill="#89664c" d="M64 58H0l5.7-46h52.6z"></path>
      <path
        fill="#b0bdc6"
        d="M26.2 8.4c-5.8 0-16.6 1.9-20.1.8c0 0 .9 19.7-4 47.4c6.9-.5 16.1-4.4 22.9-4.4c6.9 0 6.9 4.4 6.9 4.4V13.3c.2 0 .1-4.9-5.7-4.9"
      ></path>
      <path
        fill="#e1ebef"
        d="M26.3 7.7C20.5 7.7 11.6 9.5 8.9 6c0 0 .9 22.3-5.1 47.2c2.2 3.1 14-1.1 20.9-1.1s7.3 4.5 7.3 4.5v-44c.1 0 .1-4.9-5.7-4.9"
      ></path>
      <path
        fill="#94989b"
        d="M25.1 52.2c-6.9 0-19 4.4-22.9 4.4h29.9s-.1-4.4-7-4.4"
      ></path>
      <path
        fill="#7d8b91"
        d="m11.8 14.2l.1-.8c.9 0 2.6-.3 4.5-.7c2.6-.5 5.6-1.1 8-1.1c3.2 0 4.2.7 4.4.8l-.3.3l-.3.3s-1-.6-3.8-.6c-2.3 0-5.2.6-7.8 1.1c-2 .4-3.7.7-4.8.7m-.4 4.3l.1-.9c1 0 2.7-.3 4.6-.7c2.7-.5 5.7-1.1 8.1-1.1c3.2 0 4.3.7 4.4.8l-.2.4l-.3.4s-1-.7-3.9-.7c-2.4 0-5.3.6-8 1.1c-2 .4-3.7.7-4.8.7M11 23l.1-.9c1 0 2.7-.4 4.7-.8c2.7-.6 5.8-1.2 8.3-1.2c3.3 0 4.4.8 4.5.9l-.3.4l-.3.4s-1-.7-4-.7c-2.4 0-5.4.6-8.1 1.2c-2 .4-3.8.7-4.9.7m-.4 4.7l.1-1c1 0 2.8-.4 4.8-.8c2.8-.6 5.9-1.2 8.5-1.2c3.4 0 4.5.8 4.6.9l-.4.4l-.2.4s-1-.7-4.1-.7c-2.5 0-5.6.6-8.3 1.2c-2.1.4-3.9.8-5 .8m-.5 4.9l.1-1c1 0 2.8-.4 4.9-.8c2.8-.6 6-1.3 8.6-1.3c3.4 0 4.6.8 4.7.9l-.3.4l-.3.4s-1-.7-4.2-.7c-2.5 0-5.7.7-8.5 1.3c-2 .4-3.9.8-5 .8m-.5 5.1l.1-1c1 0 2.9-.4 5-.9c2.9-.6 6.2-1.3 8.8-1.3c3.5 0 4.7.9 4.8 1l-.3.4l-.3.4s-1.1-.8-4.3-.8c-2.6 0-5.8.7-8.7 1.3c-2 .5-3.9.9-5.1.9M9.1 43l.1-1.1c1.1 0 2.9-.4 5.1-.9c3-.7 6.3-1.4 9-1.4c3.6 0 4.8.9 4.9 1l-.2.5l-.3.4s-1.1-.8-4.4-.8c-2.6 0-5.9.7-8.9 1.4c-2.1.5-4.1.9-5.3.9m-.5 5.6l.1-1.1c1.1 0 3-.4 5.2-.9c3-.7 6.5-1.5 9.2-1.5c3.7 0 4.9 1 5 1.1l-.3.4l-.2.4s-1.1-.9-4.5-.9c-2.7 0-6.1.8-9.1 1.5c-2.2.5-4.2 1-5.4 1"
      ></path>
      <path
        fill="#b0bdc6"
        d="M37.8 8.4c5.8 0 16.6 1.9 20.1.8c0 0-.9 19.7 4 47.4c-6.9-.5-16.1-4.4-22.9-4.4c-6.9 0-6.9 4.4-6.9 4.4V13.3c-.1 0-.1-4.9 5.7-4.9"
      ></path>
      <path
        fill="#d9e3e8"
        d="M37.7 7.7c5.8 0 14.7 1.8 17.4-1.7c0 0-.9 22.3 5.1 47.2c-2.2 3.1-14-1.1-20.9-1.1S32 56.6 32 56.6v-44s0-4.9 5.7-4.9"
      ></path>
      <path
        fill="#94989b"
        d="M38.9 52.2c6.9 0 19 4.4 22.9 4.4H32s0-4.4 6.9-4.4"
      ></path>
      <path
        fill="#7d8b91"
        d="m52.2 14.2l-.1-.8c-.9 0-2.6-.3-4.5-.7c-2.6-.5-5.6-1.1-8-1.1c-3.2 0-4.2.7-4.4.8l.3.3l.3.3s1-.6 3.8-.6c2.3 0 5.2.6 7.8 1.1c2.1.4 3.8.7 4.8.7m.4 4.3l-.1-.9c-1 0-2.7-.3-4.6-.7c-2.7-.5-5.7-1.1-8.1-1.1c-3.2 0-4.3.7-4.4.8l.3.3l.3.4s1-.7 3.9-.7c2.4 0 5.3.6 8 1.1c1.9.5 3.6.8 4.7.8M53 23l-.1-.9c-1 0-2.7-.4-4.7-.8c-2.7-.6-5.8-1.2-8.3-1.2c-3.3 0-4.4.8-4.5.9l.3.4l.3.4s1-.7 4-.7c2.4 0 5.4.6 8.1 1.2c2.1.4 3.8.7 4.9.7m.5 4.7l-.1-1c-1 0-2.8-.4-4.8-.8c-2.8-.6-5.9-1.2-8.5-1.2c-3.4 0-4.5.8-4.6.9l.3.4l.3.4s1-.7 4.1-.7c2.5 0 5.6.6 8.3 1.2c2 .4 3.9.8 5 .8m.4 4.9l-.1-1c-1 0-2.8-.4-4.9-.8c-2.8-.6-6-1.3-8.6-1.3c-3.4 0-4.6.8-4.7.9l.3.4l.3.4s1-.7 4.2-.7c2.5 0 5.7.7 8.5 1.3c2 .4 3.9.8 5 .8m.5 5.1l-.1-1c-1 0-2.9-.4-5-.9c-2.9-.6-6.2-1.3-8.8-1.3c-3.5 0-4.7.9-4.8 1l.3.4l.3.4s1.1-.8 4.3-.8c2.6 0 5.8.7 8.7 1.3c2 .5 3.9.9 5.1.9m.5 5.3l-.1-1.1c-1.1 0-2.9-.4-5.1-.9c-3-.7-6.3-1.4-9-1.4c-3.6 0-4.8.9-4.9 1l.3.4l.3.4s1.1-.8 4.4-.8c2.6 0 5.9.7 8.9 1.4c2.1.6 4 1 5.2 1m.5 5.6l-.1-1.1c-1.1 0-3-.4-5.2-.9c-3-.7-6.5-1.5-9.2-1.5c-3.7 0-4.9 1-5 1.1l.3.4l.3.5s1.1-.9 4.5-.9c2.7 0 6.1.8 9.1 1.5c2.1.4 4.1.9 5.3.9"
      ></path>
    </svg>
  );
}
function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      className={className}
    >
      <path
        fill="#f2a600"
        d="m57.16 8.42l-52 104c-1.94 4.02-.26 8.85 3.75 10.79c1.08.52 2.25.8 3.45.81h104c4.46-.04 8.05-3.69 8.01-8.15a8.1 8.1 0 0 0-.81-3.45l-52-104a8.067 8.067 0 0 0-14.4 0"
      ></path>
      <path
        fill="#ffcc32"
        d="m53.56 15.72l-48.8 97.4c-1.83 3.77-.25 8.31 3.52 10.14c.99.48 2.08.74 3.18.76h97.5a7.55 7.55 0 0 0 7.48-7.62a7.6 7.6 0 0 0-.78-3.28l-48.7-97.4a7.443 7.443 0 0 0-9.93-3.47a7.5 7.5 0 0 0-3.47 3.47"
      ></path>
      <path
        fill="#424242"
        d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.65 4.65 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8m0 64c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6"
        opacity={0.2}
      ></path>
      <linearGradient
        id="notoWarning0"
        x1={68}
        x2={68}
        y1={-1808.36}
        y2={-1887.05}
        gradientTransform="matrix(1 0 0 -1 -3.64 -1776.09)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#424242"></stop>
        <stop offset={1} stopColor="#212121"></stop>
      </linearGradient>
      <path
        fill="url(#notoWarning0)"
        d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.65 4.65 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8"
      ></path>
      <linearGradient
        id="notoWarning1"
        x1={64.36}
        x2={64.36}
        y1={-1808.36}
        y2={-1887.05}
        gradientTransform="matrix(1 0 0 -1 0 -1772.11)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#424242"></stop>
        <stop offset={1} stopColor="#212121"></stop>
      </linearGradient>
      <circle cx={64.36} cy={104.02} r={6} fill="url(#notoWarning1)"></circle>
      <path
        fill="#fff170"
        d="M53.56 23.02c-1.2 1.5-21.4 41-21.4 41s-1.8 3 .7 4.7c2.3 1.6 4.4-.3 5.3-1.8s19.2-36.9 19.9-38.6c.6-1.87.18-3.91-1.1-5.4c-1.3-1.2-2.6-1-3.4.1"
      ></path>
      <circle cx={31.36} cy={75.33} r={3.3} fill="#fff170"></circle>
    </svg>
  );
}
function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 128 128"
      className={className}
    >
      <path
        fill="#fec417"
        d="M97.12 59.35c2.22-1.83 15.04-9.76 22.06-16.44c5.48-5.22 7.6-18.85-.83-25.48c-10.96-8.61-21.48.43-21.48.43s-.92-5.11-7.32-8.11c-8.06-3.78-18.27-5.19-27.66-5.07c-9.1.11-17.48 1.21-24.92 4.86c-6.66 3.27-7.06 7.93-7.06 7.93s-8.74-8.35-19.45-1.57C-.24 22.69 2.83 36.29 7.98 42c6.71 7.44 14.77 11.23 18.43 13.97c3.65 2.74 7.15 5.35 7.15 7.7s-1.04 2.87-1.44 2.74c-.39-.13-1.08-2.42-2.87-1.44c-2.44 1.35-1.7 6.79 3.39 7.31c4.93.51 5.87-4.7 5.87-4.7l.78-5.09l8.09 5.61l8.87 7.31l-.26 6.26s-.39 4.83-2.74 9.01s-6.13 8.35-6.13 8.35l-.12 3.78l32.89-.78l-1.04-3.65s-4.24-4.66-6.79-9.66c-1.82-3.58-2.11-7.19-2.11-7.19l-.08-8.98l17.07-10.46s1.83 1.44 1.57 1.96s-.32 5.85 3.78 7.83c4.05 1.96 7.31-.52 6.92-3.92c-.39-3.39-2.48-2.22-3.13-1.7s-2.09.65-2.48-1.31c-.4-1.94 1.3-3.77 3.52-5.6M13.09 40.89l-3.91-11.9l4.73-6.19l5.3-1.55s6.77 5.05 7.01 5.46s4.32 8.8 4.32 8.8l5.38 19.48zm76.86 15.65c.08-.41 5.05-20.87 5.05-20.87c0-.24 3.5-1.87 3.5-2.2s6.36-10.68 6.36-10.68l10.6.41l2.2 10.51l-5.3 8.72c.01.01-22.49 14.51-22.41 14.11"
      ></path>
      <path
        fill="#ffa828"
        d="M119.92 30.64c-.78-9.32-10-11.55-13.79-10.2s-6.25 3.88-7.09 7.48c-.68 2.91-1.36 4.85-2.14 5.15c-.86.32-1.65.19-1.65.19s-.14-6.3-.1-8.84c.1-5.24 1.7-6.58 1.7-6.58s-.34-1.77-1.02-2.75c-.68-.97-1.94-2.23-1.94-2.23s.29 2.52-.97 3.11s-2.62-.29-2.62-.29l1.26 5.24s-2.04 26.12-2.23 26.7s-7.86 13.88-7.86 13.88s-4.47 4.18-6.6 5.15c-2.14.97-3.98 3.5-12.23 3.59c-8.25.1-15.34-6.41-15.34-6.41l-7.09-6.8l-5.24-15.44l-.78-15.73l.33-5.72l.23-2.39l-.37-1.21s-.68.68-1.94.39s-1.75-1.94-1.75-1.94s-.49.78-.58 1.17c-.1.39-.2 1.29-.2 1.29s1.36 1.43 1.65 3.47s-.1 10.49-1.55 10.29c-1.46-.19-.98-7.28-6.51-10c-4.79-2.36-11.94-1.65-14.86 4.27c-2.91 5.92-.78 12.91 8.35 19.42s18.85 11.98 20.39 17.2c1.84 6.21-2.33 9.9-2.33 9.9s3.03-.42 4.52-3.67c.48-1.05.66-2.58.73-3.49c3.45 4.5 8.04 8.31 14.12 10.15c2.3.79 4.89 1.19 8.49 1.19c.52 0 1.03-.02 1.54-.04c4.21-.15 7.81-.94 11.3-2.67c4.71-2.18 8.36-5.51 11.18-9.29c-.08.9.47 3.14 1.52 4.91c1.84 3.11 4.95 3.3 4.95 3.3s-4.27-2.52-3.4-8.54s4.85-8.16 10.87-12.04c6.04-3.89 19.82-11.85 19.05-21.17M21.27 43.85c-2.71-1.91-7.46-4.46-9.42-8.35c-2.61-5.19-.49-11.46 4.47-12.23c10.3-1.62 10.49 11.17 11.17 12.72s2.62 1.65 2.62 1.65s.07.86.35 2.52c.01.05.02.09.02.14l.03.15c.19 1.13.46 2.54.84 4.15l.03.12c.21.91.43 1.77.66 2.56c.46 1.66 1.02 3.45 1.71 5.29c-1-.68-6.73-4.65-12.48-8.72m93.31-7.19c-2.15 3.48-6.5 6.07-9.71 8.25c-4.14 2.81-10.3 7.03-12.04 8.21c.4-1.06.75-2.11 1.07-3.14c.52-1.36 1.07-3.02 1.45-4.81c1-4.7 1.17-8.81 1.17-8.81s2.04.58 3.3-.78s1.73-5.58 2.91-7.57c1.84-3.11 5.53-6.31 11.07-2.43c3.2 2.25 3.32 6.96.78 11.08M60.52 79.31l5.65-.07s.15 6.17 1.04 10.77c.89 4.61 2.08 9.73 2.08 9.73s-11.51 3.86-11.44-.3s1.78-12.26 1.78-12.26s1.04-9.65.89-7.87"
      ></path>
      <path
        fill="#ffa828"
        d="M51.04 15.19s6.29-.71 12.14-.62s11.87 1.24 11.87 1.24s-.35 19.58-1.42 30.57c-1.06 10.99-5.22 19.22-6.33 21.55c-1.07 2.26-1.85 3.47-1.85 3.47l-5.64-.66l-9.75-19.58z"
      ></path>
      <path
        fill="#ffefab"
        d="M43.51 18.12s1.77-.89 4.34-1.86c2.33-.88 4.43-1.15 4.43-1.15s.06 12.98.27 22.24c.18 7.89 3.1 20.82 4.52 24.28s3.98 8.74 3.98 8.74s-5.15-.74-8.32-4.76c-1.67-2.12-9.48-18.52-9.75-29.33s.79-18.43.53-18.16"
      ></path>
      <path
        fill="#fffcfd"
        d="M40.58 19.62c-.18.53-1.59 11.7.62 22.06s5.48 17.45 7.64 20.26c1.92 2.49 3.17 3.67 3.88 3.67s-2.92-8.59-4.61-15.33c-1.68-6.73-2.57-14.8-2.75-18.78c-.18-3.99-.35-14.27-.35-14.27s-1.95.89-2.39 1.15c-.44.27-2.04 1.24-2.04 1.24"
      ></path>
      <path
        fill="#ffefab"
        d="M53.34 99.01s3.81-6.2 4.61-10.9s1.24-8.86 1.24-8.86l2.36.1s-.23 6.81-.5 11.42s-1.06 9.13-1.06 9.13z"
      ></path>
      <path
        fill="#d1701c"
        d="M56.27 75.41s1.77-1.73 6.64-1.73s6.96 1.87 6.96 1.87l.13 6.01s-3.24-1.01-7.18-1.06c-3.28-.04-6.81 1.18-6.81 1.18zM35 15.72c.82-.76 8.68-6.66 27.29-6.82c20.02-.18 27.53 5.62 28 5.94c.53.35 1.15 1.95.89 2.66c-.27.71-.8.97-2.3.35c-1.51-.62-8.95-6.05-26.85-5.49c-17.19.53-24.48 5.76-25.25 6.2c-.62.35-1.77.44-2.3-.27c-.54-.7-.01-2.07.52-2.57m56.18 4.17c-2.3.18-.71 18.7-5.58 30.3c-5.22 12.41-11.88 15.95-11.61 16.66s6.79-1.26 10.9-7.09c3.81-5.4 6.11-10.19 7.18-16.57c1.05-6.38 1.67-23.5-.89-23.3m-56.67 2.12c-.58-.03.01 9.21-.93 13.27c-.36 1.56-1.24 1.88-1.33 2.23s1.93 12.24 5.32 17.46c3.28 5.05 9.75 11.34 10.81 10.28s-4.7-4.61-8.59-12.32c-2.24-4.42-4.52-11.08-4.61-18.7c-.06-5.04.57-12.15-.67-12.22"
      ></path>
      <path
        fill="#865c50"
        d="m86.77 112.71l-.01-14.29H40.89c.14 0 .03 11.62.01 14.34h-6.52v10.35h58.25v-10.35z"
      ></path>
      <path
        fill="#fcc219"
        d="M55.59 105.93c-1.13-.05-2.43.18-2.48 1.58s-.05 5.45-.05 6.22s.63 1.44 2.21 1.49s16.41 0 17.45 0s1.58-.9 1.62-1.8c.05-.9-.05-4.69-.05-5.72c0-1.71-1.53-1.71-2.57-1.71c-1.12-.02-16.13-.06-16.13-.06"
      ></path>
    </svg>
  );
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
      >
        <path
          strokeLinejoin="round"
          d="M10.73 5.073A11 11 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.6 11.6 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"
        ></path>
        <path d="m4 4l16 16"></path>
      </g>
    </svg>
  );
}
export function ResultIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h8v5l3-3l3 3v-5h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2l3 2l3-2v3.5l3 1.5l-3 1.5V15l-3-2l-3 2v-3.5L9 10l3-1.5zM4 5h5v2H4zm0 4h3v2H4zm0 4h5v2H4z"
      ></path>
    </svg>
  );
}
export function ReceiptIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="currentColor"
      >
        <path d="M20.016 2C18.903 2 18 4.686 18 8h2.016c.972 0 1.457 0 1.758-.335c.3-.336.248-.778.144-1.661C21.64 3.67 20.894 2 20.016 2"></path>
        <path d="M18 8.054v10.592c0 1.511 0 2.267-.462 2.565c-.755.486-1.922-.534-2.509-.904c-.485-.306-.727-.458-.996-.467c-.291-.01-.538.137-1.062.467l-1.911 1.205c-.516.325-.773.488-1.06.488s-.545-.163-1.06-.488l-1.91-1.205c-.486-.306-.728-.458-.997-.467c-.291-.01-.538.137-1.062.467c-.587.37-1.754 1.39-2.51.904C2 20.913 2 20.158 2 18.646V8.054c0-2.854 0-4.28.879-5.167C3.757 2 5.172 2 8 2h12M6 6h8m-6 4H6"></path>
        <path d="M12.5 10.875c-.828 0-1.5.588-1.5 1.313c0 .724.672 1.312 1.5 1.312s1.5.588 1.5 1.313c0 .724-.672 1.312-1.5 1.312m0-5.25c.653 0 1.209.365 1.415.875m-1.415-.875V10m0 6.125c-.653 0-1.209-.365-1.415-.875m1.415.875V17"></path>
      </g>
    </svg>
  );
}
export function TimeTableIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-5 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1m5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7 14a1 1 0 1 0-1-1a1 1 0 0 0 1 1M19 4h-1V3a1 1 0 0 0-2 0v1H8V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM7 18a1 1 0 1 0-1-1a1 1 0 0 0 1 1"
      ></path>
    </svg>
  );
}

function ClockOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <g fill="none" stroke="currentColor">
        <circle cx={12} cy={12} r={8.5}></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7v5l2.8 2.8"
        ></path>
      </g>
    </svg>
  );
}

function BackIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      strokeWidth={2}
    >
      <path
        fill="currentColor"
        d="M10 21.308L.692 12L10 2.692l1.064 1.064L2.819 12l8.244 8.244z"
      ></path>
    </svg>
  );
}

export {
  AddIcon,
  AdminIcon,
  AlarmIcon,
  BackIcon,
  CalenderIcon2,
  CancelIcon,
  ChalkBoardTeacherIcon,
  ClassRoomIcon,
  ClockOutlineIcon,
  CloseModalIcon,
  ConferenceIcon,
  DashboardIcon,
  DeleteIcon,
  EyeClose,
  EyeOffIcon,
  EyeOpen,
  FeMaleIcon,
  FeMalePupilIcon,
  GraduateIcon,
  IconWarning,
  LoadingIcon,
  LoadingScreenIcon,
  LogoutIcon,
  MaleIcon,
  MalePupilIcon,
  MoreIcon,
  OpenBookIcon,
  ProfileCircleIcon,
  TrophyIcon,
  UserCheckIcon,
  UserTimesIcon,
  WarningIcon,
};
// sudo sysctl fs.inotify.max_user_watches=524288
