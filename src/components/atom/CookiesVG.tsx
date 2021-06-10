import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={400}
      height={400}
      preserveAspectRatio="xMidYMid slice"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h400v400H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <g display="block">
          <path
            fill="#A27439"
            d="M187.478 181.812c17.51 3.524 24.69 19.549 17.582 31.726a29.596 29.596 0 017.827 2.122c15.022 6.432 19.315 22.391 12.928 37.422 15.585 5.956 33.059 7.164 50.254 2.34 43.116-12.093 68.103-57.431 55.807-101.264-12.295-43.832-57.214-69.56-100.33-57.466-26.207 7.352-45.696 26.993-54.206 51.104 14.383 5.117 20.206 20.261 10.138 34.016z"
          />
          <path
            fill="#CCA25D"
            d="M187.479 181.813c15.328 2.588 25.512 17.304 17.582 31.725a29.588 29.588 0 017.826 2.122c15.022 6.432 19.316 22.39 12.93 37.421 15.584 5.956 33.058 7.164 50.253 2.341 43.116-12.093 53.165-53.24 40.87-97.073-6.695-23.866-48.617-57.796-81.708-48.513-25.149 7.054-47.834 18.908-57.89 37.96 11.13 5.09 23.746 19.465 10.137 34.017z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M187.479 181.813c12.616 1.427 28.387 15.071 17.582 31.726a29.588 29.588 0 017.826 2.12c15.022 6.433 19.316 22.393 12.93 37.423 15.584 5.956 33.058 7.164 50.253 2.341 38.94-10.922 69.556-52.248 55.807-101.265-12.295-43.832-57.215-69.56-100.332-57.466-26.206 7.352-45.694 26.993-54.204 51.104 16.878 7.551 20.87 22.371 10.138 34.017z"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M269.245 181.808a11.252 11.252 0 01-5.348 5.598c-5.593 2.759-12.364.462-15.124-5.13a11.276 11.276 0 01.04-10.074"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M255.52 164.633c6.382-1.79 13.008 1.931 14.798 8.313 1.79 6.382-1.932 13.007-8.314 14.797-6.382 1.79-13.007-1.931-14.797-8.313-1.79-6.382 1.931-13.007 8.313-14.797z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M255.52 164.633c6.382-1.79 13.008 1.931 14.798 8.313 1.79 6.382-1.932 13.007-8.314 14.797-6.382 1.79-13.007-1.931-14.797-8.313-1.79-6.382 1.931-13.007 8.313-14.797z"
            fill="none"
          />
          <path d="M245.542 206.314a2.386 2.386 0 111.29 4.594 2.386 2.386 0 01-1.29-4.594zM258.649 203.03a2.386 2.386 0 111.29 4.594 2.386 2.386 0 01-1.29-4.595zM275.24 206.661a2.385 2.385 0 012.942 1.654 2.385 2.385 0 11-2.942-1.653zM271.498 191.921a2.386 2.386 0 111.29 4.594 2.386 2.386 0 01-1.29-4.594zM303.735 178.442a2.384 2.384 0 012.94 1.653 2.386 2.386 0 11-2.94-1.653zM319.159 183.186a2.386 2.386 0 111.29 4.594 2.386 2.386 0 01-1.29-4.594zM281.81 168.202a2.384 2.384 0 012.94 1.653 2.386 2.386 0 11-2.94-1.653zM280.412 139.493a2.386 2.386 0 111.29 4.595 2.386 2.386 0 01-1.29-4.595zM300.253 133.927a2.386 2.386 0 111.288 4.595 2.386 2.386 0 01-1.288-4.595zM289.16 112.05a2.387 2.387 0 111.288 4.596 2.387 2.387 0 01-1.288-4.597zM266.21 146.543a2.386 2.386 0 111.29 4.595 2.386 2.386 0 01-1.29-4.595zM246.745 158.333a2.385 2.385 0 012.941 1.653 2.385 2.385 0 11-4.594 1.289 2.386 2.386 0 011.653-2.942zM238.206 148.592a2.385 2.385 0 012.941 1.654 2.385 2.385 0 11-4.594 1.288 2.386 2.386 0 011.653-2.942zM226.199 155.221a2.386 2.386 0 111.29 4.595 2.386 2.386 0 01-1.29-4.595zM244.233 137.048a2.385 2.385 0 012.942 1.653 2.385 2.385 0 11-4.594 1.29 2.386 2.386 0 011.652-2.943zM236.226 138.772a2.386 2.386 0 111.29 4.595 2.386 2.386 0 01-1.29-4.595zM226.81 119.163a2.386 2.386 0 111.29 4.595 2.386 2.386 0 01-1.29-4.595zM274.778 151.97a2.386 2.386 0 111.29 4.595 2.386 2.386 0 01-1.29-4.595zM294.806 222.445a2.386 2.386 0 111.29 4.597 2.386 2.386 0 01-1.29-4.597zM238.367 198.409a2.386 2.386 0 111.29 4.594 2.386 2.386 0 01-1.29-4.594zM236.15 209.34a2.384 2.384 0 012.94 1.653 2.385 2.385 0 11-2.94-1.653zM250.431 241.416a2.386 2.386 0 111.29 4.594 2.386 2.386 0 01-1.29-4.594z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M317.479 160.272a11.25 11.25 0 01-5.348 5.596c-5.592 2.76-12.363.463-15.123-5.13a11.272 11.272 0 01.038-10.072"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M317.911 151.364c2.417 5.953-.447 12.737-6.4 15.154-5.95 2.418-12.737-.45-15.153-6.4-2.418-5.953.448-12.739 6.4-15.155 5.952-2.417 12.736.449 15.153 6.4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={4}
            d="M297.916 162.267a11.343 11.343 0 01-1.137-2.023c-2.488-5.72.133-12.372 5.852-14.859 5.721-2.488 12.373.132 14.86 5.852 2.487 5.72-.134 12.372-5.853 14.859a11.25 11.25 0 01-4.32.938"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M309.593 204.457a11.258 11.258 0 01-5.348 5.598c-5.593 2.76-12.364.463-15.124-5.13a11.28 11.28 0 01.038-10.073"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M310.024 195.55c2.418 5.952-.448 12.738-6.4 15.155-5.952 2.418-12.736-.448-15.155-6.4-2.416-5.952.45-12.738 6.402-15.155 5.953-2.417 12.736.448 15.153 6.4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M290.03 206.454a11.28 11.28 0 01-1.137-2.023c-.597-1.37-4.48-10.367 5.852-14.859 5.72-2.487 12.373.132 14.86 5.852 2.487 5.72-.134 12.372-5.853 14.86a11.262 11.262 0 01-4.32.937"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M283.083 233.165a11.25 11.25 0 01-5.348 5.597c-5.592 2.76-12.363.463-15.123-5.13a11.274 11.274 0 01.039-10.073"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M283.516 224.258c2.416 5.952-.447 12.737-6.4 15.153-5.951 2.418-12.737-.448-15.153-6.4-2.418-5.952.447-12.736 6.4-15.153 5.951-2.418 12.736.448 15.153 6.4z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M263.52 235.16a11.28 11.28 0 01-1.136-2.022c-2.488-5.72.134-12.372 5.852-14.859 5.72-2.487 12.372.132 14.86 5.852 2.486 5.719-.135 12.373-5.855 14.86a11.255 11.255 0 01-4.317.937"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M227.11 170.276a11.245 11.245 0 015.212 5.723c2.364 5.772-.398 12.366-6.17 14.73a11.273 11.273 0 01-10.044-.737"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M218.256 169.224c6.106-1.997 12.675 1.333 14.672 7.44 1.997 6.105-1.332 12.673-7.439 14.67-6.106 1.997-12.674-1.333-14.671-7.438-1.999-6.107 1.333-12.675 7.438-14.672z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M227.74 189.929c-.65.395-1.35.73-2.095.994-5.879 2.084-12.335-.994-14.418-6.873-2.083-5.878.995-12.332 6.873-14.415 5.879-2.083 12.334.994 14.416 6.872.513 1.448.714 2.931.635 4.375"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M218.722 147.234a11.242 11.242 0 01-5.423 5.524c-5.629 2.684-12.368.296-15.052-5.334a11.274 11.274 0 01.174-10.071"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M204.645 130.866c6.105-1.998 12.674 1.332 14.671 7.438 1.998 6.107-1.332 12.675-7.438 14.673-6.107 1.996-12.674-1.334-14.672-7.439-1.998-6.106 1.333-12.675 7.439-14.672z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M200.404 133.807c.547-.53 1.157-1.01 1.825-1.433 5.272-3.331 12.248-1.758 15.58 3.515 3.33 5.273 1.757 12.248-3.515 15.58-5.273 3.33-12.249 1.757-15.579-3.516a11.249 11.249 0 01-1.587-4.126"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M269.797 127.225a11.248 11.248 0 01-6.74 3.805c-6.154 1.019-11.967-3.144-12.986-9.297a11.275 11.275 0 012.958-9.628"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M272.794 118.827c.587 6.397-4.123 12.058-10.52 12.645-6.398.586-12.06-4.124-12.647-10.521-.586-6.398 4.125-12.06 10.521-12.646 6.398-.586 12.06 4.125 12.646 10.522z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M270.872 114.036c.394.652.727 1.353.99 2.098 2.073 5.883-1.015 12.331-6.897 14.404-5.883 2.074-12.332-1.014-14.405-6.897-2.071-5.882 1.016-12.332 6.898-14.404 1.45-.511 2.933-.708 4.377-.628"
            fill="none"
          />
        </g>
        <g display="block">
          <path
            fill="#A27439"
            d="M75.469 215.646c17.627-41.165 65.842-60.01 107.69-42.09 41.85 17.92 61.486 65.818 43.859 106.983-17.627 41.166-65.842 60.01-107.691 42.09-41.85-17.919-61.485-65.817-43.858-106.983z"
          />
          <path
            fill="#CCA25D"
            d="M88.018 221.02c13.528-31.594 66.248-42.96 89.035-33.202 41.849 17.92 67.592 51.557 49.966 92.721-17.627 41.166-65.843 60.01-107.692 42.09-41.85-17.92-48.936-60.444-31.31-101.61z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M75.469 215.646c17.627-41.165 65.842-60.01 107.69-42.09 41.85 17.92 61.486 65.818 43.859 106.983-17.627 41.166-65.842 60.01-107.691 42.09-41.85-17.919-64.206-59.462-43.858-106.983z"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M165.406 239.678a11.246 11.246 0 011.004 7.675c-1.359 6.087-7.394 9.919-13.481 8.561a11.275 11.275 0 01-7.82-6.348"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M143.42 239.593c2.61-6.093 9.665-8.917 15.757-6.308 6.093 2.61 8.919 9.664 6.31 15.757-2.61 6.093-9.665 8.918-15.759 6.308-6.092-2.608-8.916-9.664-6.308-15.757z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M143.42 239.593c2.61-6.093 9.665-8.917 15.757-6.308 6.093 2.61 8.919 9.664 6.31 15.757-2.61 6.093-9.665 8.918-15.759 6.308-6.092-2.608-8.916-9.664-6.308-15.757z"
            fill="none"
          />
          <path d="M169.623 273.51a2.387 2.387 0 114.388 1.878 2.387 2.387 0 01-4.388-1.878zM175.287 261.241a2.386 2.386 0 114.387 1.88 2.386 2.386 0 01-4.387-1.88zM188.523 250.597a2.386 2.386 0 114.387 1.88 2.386 2.386 0 01-4.387-1.88zM174.695 244.267a2.387 2.387 0 114.388 1.882 2.387 2.387 0 01-4.388-1.882zM184.418 210.707a2.387 2.387 0 114.39 1.878 2.387 2.387 0 01-4.39-1.878zM197.788 201.669a2.387 2.387 0 114.388 1.88 2.387 2.387 0 01-4.388-1.88zM162.69 221.358a2.387 2.387 0 114.389 1.878 2.387 2.387 0 01-4.388-1.878zM139.455 204.438a2.387 2.387 0 114.388 1.878 2.387 2.387 0 01-4.388-1.878zM147.567 185.495a2.387 2.387 0 114.388 1.878 2.387 2.387 0 01-4.388-1.878zM123.57 180.41a2.386 2.386 0 114.387 1.88 2.386 2.386 0 01-4.387-1.88zM136.037 219.92a2.388 2.388 0 014.389 1.88 2.387 2.387 0 11-4.389-1.88zM133.01 242.475a2.386 2.386 0 114.387 1.879 2.386 2.386 0 01-4.387-1.88zM120.066 243.016a2.388 2.388 0 114.389 1.881 2.388 2.388 0 01-4.39-1.88zM117.699 256.526a2.387 2.387 0 114.388 1.878 2.387 2.387 0 01-4.388-1.878zM114.857 231.082a2.387 2.387 0 114.388 1.877 2.387 2.387 0 01-4.388-1.877zM111.178 238.399a2.387 2.387 0 013.133-1.256 2.387 2.387 0 01-1.879 4.388 2.385 2.385 0 01-1.254-3.132zM90 233.43a2.387 2.387 0 114.385 1.876A2.387 2.387 0 0190 233.432zM145.638 216.65a2.386 2.386 0 114.387 1.88 2.386 2.386 0 01-4.387-1.88zM213.088 245.26a2.386 2.386 0 114.387 1.88 2.386 2.386 0 01-4.387-1.88zM158.965 274.139a2.387 2.387 0 114.388 1.878 2.387 2.387 0 01-4.388-1.878zM134.075 295.1a2.386 2.386 0 114.386 1.878 2.386 2.386 0 01-4.386-1.878zM117.911 308.289a2.387 2.387 0 114.388 1.88 2.387 2.387 0 01-4.388-1.88zM107.849 286.465a2.386 2.386 0 114.386 1.878 2.387 2.387 0 01-3.133 1.256 2.387 2.387 0 01-1.253-3.134zM97.67 288.847a2.386 2.386 0 114.387 1.877 2.386 2.386 0 01-4.387-1.877zM166.088 282.725a2.387 2.387 0 114.388 1.878 2.387 2.387 0 01-4.388-1.878zM200.027 291.722a2.387 2.387 0 114.388 1.877 2.387 2.387 0 01-4.388-1.877zM181.701 303.556a2.387 2.387 0 114.388 1.88 2.387 2.387 0 01-4.388-1.88z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M178.889 188.604a11.25 11.25 0 011.004 7.675c-1.359 6.086-7.395 9.919-13.482 8.561a11.275 11.275 0 01-7.82-6.348"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M172.222 182.68c6.152 1.85 9.64 8.338 7.788 14.49-1.85 6.152-8.339 9.638-14.49 7.787-6.152-1.851-9.64-8.34-7.788-14.49 1.851-6.151 8.338-9.638 14.49-7.787z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M168.172 205.092a11.413 11.413 0 01-2.29-.383c-6.014-1.652-9.55-7.865-7.9-13.88 1.65-6.014 7.865-9.552 13.878-7.9 6.015 1.65 9.552 7.864 7.902 13.878a11.25 11.25 0 01-1.98 3.952"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M208.355 222.463a11.25 11.25 0 011.004 7.675c-1.359 6.087-7.395 9.92-13.482 8.561a11.275 11.275 0 01-7.82-6.348"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M201.69 216.538c6.15 1.851 9.637 8.34 7.786 14.491-1.85 6.152-8.339 9.638-14.49 7.787-6.152-1.85-9.639-8.34-7.787-14.491 1.85-6.151 8.339-9.638 14.49-7.787z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M197.637 238.95a11.413 11.413 0 01-2.289-.382c-6.014-1.652-9.551-7.865-7.9-13.88 1.65-6.014 7.865-9.552 13.878-7.9 6.015 1.65 9.553 7.864 7.902 13.878a11.25 11.25 0 01-1.98 3.952"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M214.083 261.116a11.244 11.244 0 011.005 7.673c-1.36 6.088-7.395 9.92-13.483 8.562a11.27 11.27 0 01-7.82-6.348"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M207.418 255.192c6.152 1.85 9.639 8.338 7.787 14.49-1.851 6.152-8.339 9.637-14.49 7.786-6.153-1.85-9.639-8.339-7.787-14.49 1.85-6.152 8.339-9.637 14.49-7.786z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M203.366 277.603a11.413 11.413 0 01-2.289-.383c-6.014-1.652-9.55-7.865-7.9-13.88 1.65-6.014 7.865-9.552 13.878-7.9 6.015 1.65 9.552 7.865 7.902 13.879a11.25 11.25 0 01-1.98 3.952"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M169.68 300.12a11.243 11.243 0 011.005 7.674c-1.36 6.088-7.395 9.92-13.482 8.56a11.273 11.273 0 01-7.82-6.346"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M163.016 294.194c6.152 1.851 9.64 8.34 7.788 14.49-1.851 6.153-8.34 9.64-14.492 7.788-6.152-1.85-9.638-8.338-7.787-14.49 1.851-6.152 8.34-9.638 14.49-7.788z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M158.964 316.607a11.344 11.344 0 01-2.29-.383c-6.014-1.652-9.55-7.865-7.9-13.88 1.65-6.014 7.865-9.552 13.878-7.9 6.015 1.65 9.553 7.864 7.902 13.878a11.257 11.257 0 01-1.98 3.953"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M129.994 265.258a11.254 11.254 0 017.727-.468c5.978 1.78 9.382 8.067 7.604 14.045a11.278 11.278 0 01-6.879 7.36"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M123.62 271.495c2.275-6.008 8.99-9.035 14.997-6.76 6.008 2.274 9.036 8.989 6.762 14.997-2.275 6.008-8.99 9.034-14.997 6.76-6.009-2.275-9.036-8.99-6.761-14.997z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M145.697 277.096c-.1.754-.28 1.51-.542 2.257-2.065 5.885-8.51 8.981-14.395 6.916-5.885-2.065-8.982-8.51-6.917-14.395 2.067-5.885 8.511-8.982 14.396-6.917a11.29 11.29 0 013.805 2.25"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M106.788 257.338a11.243 11.243 0 01.9 7.688c-1.441 6.068-7.528 9.818-13.595 8.377a11.272 11.272 0 01-7.734-6.454"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M85.21 258.034c2.276-6.008 8.99-9.034 14.997-6.76 6.008 2.274 9.035 8.99 6.76 14.997-2.274 6.008-8.988 9.034-14.996 6.76-6.008-2.275-9.035-8.99-6.76-14.997z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#000"
            strokeWidth={5}
            d="M84.84 263.182c-.068-.759-.06-1.535.03-2.321.713-6.197 6.313-10.641 12.51-9.928 6.195.713 10.64 6.313 9.927 12.51-.712 6.195-6.313 10.64-12.509 9.928a11.255 11.255 0 01-4.208-1.353"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#A27439"
            strokeWidth={4}
            d="M123.244 205.01a11.246 11.246 0 01-1.267 7.637c-3.066 5.43-9.954 7.347-15.385 4.28a11.276 11.276 0 01-5.643-8.342"
            fill="none"
          />
          <path
            fill="#73553A"
            d="M118.582 197.406c5.35 3.556 6.805 10.777 3.248 16.126-3.556 5.35-10.775 6.804-16.126 3.248-5.35-3.556-6.803-10.775-3.247-16.125 3.555-5.35 10.775-6.804 16.125-3.249z"
          />
          <g>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#000"
              strokeWidth={5}
              d="M113.646 195.899c.754.102 1.51.282 2.255.545 5.882 2.076 8.967 8.526 6.892 14.408-2.076 5.88-8.526 8.966-14.408 6.89-5.881-2.074-8.966-8.525-6.89-14.407a11.247 11.247 0 012.256-3.8"
              fill="none"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
