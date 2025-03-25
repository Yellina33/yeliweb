import React, { useState } from 'react';
import { Send, ChevronDown, Linkedin } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

// Custom SVG icons as React components
const UxDesignIcon = () => (
  <svg
    width="130"
    height="130"
    viewBox="0 0 73 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="30.0786"
      y="14"
      width="41"
      height="42.5375"
      transform="rotate(45 30.0786 14)"
      fill="url(#paint0_linear_2780_388)"
      fill-opacity="0.44"
    />
    <circle
      cx="44"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 44 28.9914)"
      fill="#D9D9D9"
    />
    <circle
      cx="44"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 44 28.9914)"
      fill="url(#paint1_linear_2780_388)"
    />
    <path
      d="M57.566 42.6981C50.0737 50.1904 37.9263 50.1904 30.434 42.6981C22.9417 35.2058 22.9417 23.0584 30.434 15.5661C37.9263 8.07375 50.0737 8.07375 57.566 15.5661C65.0583 23.0584 65.0583 35.2058 57.566 42.6981Z"
      fill="url(#paint2_linear_2780_388)"
    />
    <path
      d="M35.368 35.6334L41.6333 29.3681M49.523 26.582L47.6476 32.2084C47.6176 32.2986 47.5664 32.3802 47.4982 32.4464C47.43 32.5125 47.3468 32.5612 47.2557 32.5884L35.7589 36.0056C35.6553 36.0363 35.5453 36.0381 35.4407 36.0107C35.3362 35.9832 35.2413 35.9277 35.1661 35.85C35.091 35.7724 35.0386 35.6756 35.0147 35.5702C34.9907 35.4649 34.9962 35.3549 35.0303 35.2524L38.7635 24.0548C38.7903 23.9744 38.834 23.9007 38.8918 23.8387C38.9495 23.7767 39.02 23.7278 39.0983 23.6954L44.4017 21.5118C44.5095 21.4673 44.6281 21.4557 44.7425 21.4785C44.8569 21.5012 44.962 21.5574 45.0446 21.6398L49.3803 25.9775C49.4578 26.0551 49.5123 26.1527 49.5375 26.2595C49.5627 26.3662 49.5577 26.4779 49.523 26.582Z"
      stroke="white"
      stroke-width="1.12687"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.6394 26.2354L52.4235 23.4503C52.7926 23.081 53 22.5803 53 22.0582C53 21.5361 52.7926 21.0354 52.4235 20.6661L50.3364 18.577C50.1535 18.3941 49.9364 18.249 49.6975 18.15C49.4586 18.051 49.2025 18 48.9438 18C48.6852 18 48.4291 18.051 48.1901 18.15C47.9512 18.249 47.7341 18.3941 47.5513 18.577L44.7671 21.3622M43.7216 27.279C43.5844 27.1419 43.4216 27.0331 43.2424 26.9589C43.0632 26.8848 42.8711 26.8466 42.6772 26.8467C42.4833 26.8467 42.2912 26.8849 42.1121 26.9592C41.9329 27.0335 41.7701 27.1423 41.633 27.2795C41.4959 27.4166 41.3871 27.5795 41.313 27.7587C41.2388 27.9379 41.2006 28.1299 41.2007 28.3239C41.2007 28.5178 41.239 28.7099 41.3132 28.889C41.3875 29.0682 41.4963 29.231 41.6335 29.3681C41.9105 29.645 42.2862 29.8005 42.6779 29.8004C43.0696 29.8003 43.4452 29.6446 43.7221 29.3676C43.999 29.0906 44.1545 28.7149 44.1544 28.3232C44.1543 27.9315 43.9986 27.5559 43.7216 27.279Z"
      stroke="white"
      stroke-width="1.12687"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2780_388"
        x1="50.6911"
        y1="-6.28848"
        x2="48.5698"
        y2="60.1796"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D70B5D" />
        <stop offset="0.65818" stop-color="#F2D6E2" />
        <stop offset="0.91493" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2780_388"
        x1="30.699"
        y1="12.3308"
        x2="53.1873"
        y2="47.7773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE092" />
        <stop offset="1" stop-color="#E3A302" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2780_388"
        x1="57.566"
        y1="15.5661"
        x2="30.434"
        y2="42.6981"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.185" stop-color="#EF3781" />
        <stop offset="0.425" stop-color="#EC30EC" />
        <stop offset="0.745" stop-color="#67136C" />
      </linearGradient>
    </defs>
  </svg>
);

const WebDesignIcon = () => (
  <svg
    width="130"
    height="130"
    viewBox="0 0 73 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="30.0786"
      y="14"
      width="41"
      height="42.5375"
      transform="rotate(45 30.0786 14)"
      fill="url(#paint0_linear_2781_504)"
      fill-opacity="0.44"
    />
    <circle
      cx="44"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 44 28.9914)"
      fill="#D9D9D9"
    />
    <circle
      cx="44"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 44 28.9914)"
      fill="url(#paint1_linear_2781_504)"
    />
    <path
      d="M57.566 42.6981C50.0737 50.1904 37.9263 50.1904 30.434 42.6981C22.9417 35.2058 22.9417 23.0584 30.434 15.5661C37.9263 8.07375 50.0737 8.07375 57.566 15.5661C65.0583 23.0584 65.0583 35.2058 57.566 42.6981Z"
      fill="url(#paint2_linear_2781_504)"
    />
    <path
      d="M53.625 29C53.625 28.6548 53.3452 28.375 53 28.375H35.5C35.1548 28.375 34.875 28.6548 34.875 29V36.5C34.875 36.8452 35.1548 37.125 35.5 37.125H53C53.3452 37.125 53.625 36.8452 53.625 36.5V29ZM53.625 21.5C53.625 21.1548 53.3452 20.875 53 20.875H35.5C35.1548 20.875 34.875 21.1548 34.875 21.5V26.5C34.875 26.8452 35.1548 27.125 35.5 27.125H53C53.3452 27.125 53.625 26.8452 53.625 26.5V21.5ZM36.125 35.875V29.625H52.375V35.875H36.125ZM36.125 25.875V22.125H52.375V25.875H36.125ZM53 19.625C53.4973 19.625 53.9742 19.8225 54.3258 20.1742C54.6775 20.5258 54.875 21.0027 54.875 21.5V36.5C54.875 36.9973 54.6775 37.4742 54.3258 37.8258C53.9742 38.1775 53.4973 38.375 53 38.375H35.5C35.0027 38.375 34.5258 38.1775 34.1742 37.8258C33.8225 37.4742 33.625 36.9973 33.625 36.5V21.5C33.625 21.0027 33.8225 20.5258 34.1742 20.1742C34.5258 19.8225 35.0027 19.625 35.5 19.625H53Z"
      stroke="white"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39 23.25C39.1989 23.25 39.3897 23.329 39.5303 23.4697C39.671 23.6103 39.75 23.8011 39.75 24C39.75 24.1989 39.671 24.3897 39.5303 24.5303C39.3897 24.671 39.1989 24.75 39 24.75C38.8011 24.75 38.6103 24.671 38.4697 24.5303C38.329 24.3897 38.25 24.1989 38.25 24C38.25 23.8011 38.329 23.6103 38.4697 23.4697C38.6103 23.329 38.8011 23.25 39 23.25ZM42 23.25C42.1989 23.25 42.3897 23.329 42.5303 23.4697C42.671 23.6103 42.75 23.8011 42.75 24C42.75 24.1989 42.671 24.3897 42.5303 24.5303C42.3897 24.671 42.1989 24.75 42 24.75C41.8011 24.75 41.6103 24.671 41.4697 24.5303C41.329 24.3897 41.25 24.1989 41.25 24C41.25 23.8011 41.329 23.6103 41.4697 23.4697C41.6103 23.329 41.8011 23.25 42 23.25ZM45 23.25C45.1989 23.25 45.3897 23.329 45.5303 23.4697C45.671 23.6103 45.75 23.8011 45.75 24C45.75 24.1989 45.671 24.3897 45.5303 24.5303C45.3897 24.671 45.1989 24.75 45 24.75C44.8011 24.75 44.6103 24.671 44.4697 24.5303C44.329 24.3897 44.25 24.1989 44.25 24C44.25 23.8011 44.329 23.6103 44.4697 23.4697C44.6103 23.329 44.8011 23.25 45 23.25Z"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2781_504"
        x1="50.6911"
        y1="-6.28848"
        x2="48.5698"
        y2="60.1796"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D70B5D" />
        <stop offset="0.65818" stop-color="#F2D6E2" />
        <stop offset="0.91493" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2781_504"
        x1="30.699"
        y1="12.3308"
        x2="53.1873"
        y2="47.7773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE092" />
        <stop offset="1" stop-color="#E3A302" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2781_504"
        x1="57.566"
        y1="15.5661"
        x2="30.434"
        y2="42.6981"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.185" stop-color="#EF3781" />
        <stop offset="0.425" stop-color="#EC30EC" />
        <stop offset="0.745" stop-color="#67136C" />
      </linearGradient>
    </defs>
  </svg>
);

const WordPressIcon = () => (
  <svg
    width="130"
    height="130"
    viewBox="0 0 73 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="30.0786"
      y="14"
      width="41"
      height="42.5375"
      transform="rotate(45 30.0786 14)"
      fill="url(#paint0_linear_2780_406)"
      fill-opacity="0.44"
    />
    <circle
      cx="44"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 44 28.9914)"
      fill="#D9D9D9"
    />
    <circle
      cx="44"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 44 28.9914)"
      fill="url(#paint1_linear_2780_406)"
    />
    <path
      d="M57.566 42.6981C50.0737 50.1904 37.9263 50.1904 30.434 42.6981C22.9417 35.2058 22.9417 23.0584 30.434 15.5661C37.9263 8.07375 50.0737 8.07375 57.566 15.5661C65.0583 23.0584 65.0583 35.2058 57.566 42.6981Z"
      fill="url(#paint2_linear_2780_406)"
    />
    <path
      d="M46.3382 20.5071C46.459 20.4926 46.5813 20.5004 46.6992 20.5298C46.7083 20.5329 46.7175 20.5358 46.7269 20.5384C46.8534 20.5738 46.9717 20.6338 47.0751 20.715C47.1784 20.7961 47.2647 20.8969 47.3291 21.0114C47.3935 21.1259 47.4347 21.2521 47.4503 21.3825C47.466 21.513 47.4557 21.6453 47.4202 21.7718L47.4202 21.7718L42.9892 37.5588L42.9891 37.5589C42.9175 37.8144 42.7474 38.0309 42.5161 38.1608C42.2849 38.2908 42.0115 38.3236 41.7561 38.252C41.5006 38.1804 41.2841 38.0102 41.1542 37.779C41.0242 37.5477 40.9914 37.2743 41.063 37.0189L45.494 21.23L45.494 21.2299C45.5295 21.1035 45.5895 20.9852 45.6707 20.8819C45.7519 20.7787 45.8526 20.6924 45.9672 20.6281C46.0817 20.5638 46.2078 20.5226 46.3382 20.5071ZM49.0352 25.8585C49.0311 25.8543 49.0268 25.8502 49.0224 25.8461C48.9242 25.7546 48.8454 25.6442 48.7907 25.5215C48.7361 25.3988 48.7067 25.2664 48.7043 25.1321C48.702 24.9979 48.7267 24.8645 48.7769 24.74C48.8272 24.6155 48.9021 24.5024 48.9971 24.4074C49.092 24.3124 49.2051 24.2376 49.3296 24.1873C49.4542 24.137 49.5875 24.1123 49.7218 24.1147C49.8561 24.117 49.9885 24.1464 50.1112 24.2011C50.2338 24.2557 50.3442 24.3345 50.4358 24.4328C50.4398 24.4371 50.4439 24.4413 50.4481 24.4455L54.691 28.6874C54.8784 28.8749 54.9838 29.1293 54.9838 29.3944C54.9838 29.6596 54.8784 29.9139 54.691 30.1014L50.449 34.3444L50.4489 34.3444C50.3561 34.4373 50.2459 34.511 50.1245 34.5613C50.0032 34.6116 49.8732 34.6375 49.7418 34.6375C49.6105 34.6376 49.4804 34.6117 49.3591 34.5615C49.2377 34.5113 49.1274 34.4376 49.0346 34.3448C48.9417 34.2519 48.868 34.1417 48.8177 34.0204C48.7674 33.899 48.7415 33.769 48.7415 33.6377C48.7414 33.5063 48.7673 33.3763 48.8175 33.2549C48.8677 33.1336 48.9413 33.0233 49.0341 32.9305C49.0342 32.9304 49.0342 32.9304 49.0342 32.9304L52.2161 29.7485C52.4114 29.5533 52.4114 29.2368 52.2162 29.0415L49.0352 25.8585Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.4487 25.244C39.4529 25.2398 39.4572 25.2357 39.4615 25.2316C39.5598 25.1401 39.6386 25.0297 39.6932 24.907C39.7479 24.7843 39.7773 24.6519 39.7796 24.5176C39.782 24.3834 39.7573 24.25 39.707 24.1255C39.6567 24.001 39.5819 23.8879 39.4869 23.7929C39.3919 23.6979 39.2788 23.6231 39.1543 23.5728C39.0298 23.5225 38.8964 23.4978 38.7621 23.5002C38.6279 23.5025 38.4955 23.5319 38.3728 23.5866C38.2501 23.6412 38.1397 23.72 38.0482 23.8183C38.0442 23.8226 38.0401 23.8268 38.0359 23.831L33.793 28.0729C33.793 28.0729 33.7929 28.0729 33.7929 28.073C33.7929 28.073 33.7929 28.073 33.7929 28.073C33.6055 28.2605 33.5002 28.5148 33.5002 28.7799C33.5002 29.0451 33.6055 29.2994 33.793 29.4869C33.793 29.4869 33.793 29.4869 33.793 29.4869L38.035 33.7299L38.035 33.7299C38.1279 33.8228 38.2381 33.8965 38.3594 33.9468C38.4807 33.9971 38.6108 34.023 38.7421 34.023C38.8735 34.0231 39.0035 33.9972 39.1249 33.947C39.2462 33.8968 39.3565 33.8231 39.4494 33.7303C39.5423 33.6374 39.616 33.5272 39.6663 33.4059C39.7166 33.2845 39.7425 33.1545 39.7425 33.0232C39.7425 32.8918 39.7167 32.7618 39.6665 32.6404C39.6162 32.5191 39.5426 32.4088 39.4498 32.316C39.4498 32.3159 39.4498 32.3159 39.4497 32.3159L36.2678 29.134C36.0726 28.9388 36.0725 28.6223 36.2677 28.427L39.4487 25.244Z"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2780_406"
        x1="50.6911"
        y1="-6.28848"
        x2="48.5698"
        y2="60.1796"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D70B5D" />
        <stop offset="0.65818" stop-color="#F2D6E2" />
        <stop offset="0.91493" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2780_406"
        x1="30.699"
        y1="12.3308"
        x2="53.1873"
        y2="47.7773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE092" />
        <stop offset="1" stop-color="#E3A302" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2780_406"
        x1="57.566"
        y1="15.5661"
        x2="30.434"
        y2="42.6981"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.185" stop-color="#EF3781" />
        <stop offset="0.425" stop-color="#EC30EC" />
        <stop offset="0.745" stop-color="#67136C" />
      </linearGradient>
    </defs>
  </svg>
);

const MusicProductionIcon = () => (
  <svg
    width="130"
    height="130"
    viewBox="0 0 76 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="31.0786"
      y="15.0001"
      width="41"
      height="42.5375"
      transform="rotate(45 31.0786 15.0001)"
      fill="url(#paint0_linear_2781_669)"
      fill-opacity="0.44"
    />
    <circle
      cx="45.9917"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 45.9917 28.9914)"
      fill="#D9D9D9"
    />
    <circle
      cx="45.9917"
      cy="28.9914"
      r="20.5"
      transform="rotate(45 45.9917 28.9914)"
      fill="url(#paint1_linear_2781_669)"
    />
    <path
      d="M59.566 42.6981C52.0737 50.1904 39.9263 50.1904 32.434 42.6981C24.9417 35.2058 24.9417 23.0584 32.434 15.5661C39.9263 8.07375 52.0737 8.07375 59.566 15.5661C67.0583 23.0584 67.0583 35.2058 59.566 42.6981Z"
      fill="url(#paint2_linear_2781_669)"
    />
    <path
      d="M42.3927 26.8856C42.3974 26.8822 42.4102 26.8757 42.3927 26.8829V26.8856ZM42.3927 26.8856C42.3909 26.8868 42.3902 26.8877 42.3927 26.8871M42.3927 26.8856V26.8871M42.3927 26.8871C42.3946 26.8867 42.3986 26.8855 42.4056 26.8829C42.6536 26.7916 42.6341 26.7675 43.5567 26.5358C44.4794 26.3041 45.7379 26.0488 46.9834 25.8185C48.2278 25.5884 49.4702 25.385 50.3987 25.2561C50.8025 25.2001 51.1413 25.159 51.3928 25.1357C51.3929 25.9185 51.3928 27.4288 51.3927 28.3712L51.3927 28.6705C51.1057 28.6051 50.8069 28.5706 50.5 28.5706C48.2909 28.5706 46.5 30.3614 46.5 32.5706C46.5 34.7797 48.2909 36.5706 50.5 36.5706C52.7091 36.5706 54.5002 34.7091 54.5002 32.5V26.008C54.5002 22.9458 54.5002 19.8205 54.5 19.5701C54.4997 19.212 54.1885 19.0842 54.1434 19.0665C54.0531 19.0309 53.9601 19.0178 53.8961 19.0112C53.7573 18.9968 53.5791 18.9976 53.3843 19.0061C52.9869 19.0233 52.4318 19.0767 51.7802 19.1555C50.4731 19.3134 48.7362 19.5784 47.0029 19.8818C45.2702 20.1851 43.5311 20.5286 42.2209 20.8446C41.5682 21.002 41.0085 21.1557 40.6061 21.2977C40.4081 21.3675 40.2264 21.442 40.0861 21.522C40.0175 21.5611 39.9353 21.6146 39.8641 21.6861C39.8012 21.7492  39.6786 21.8948 39.6786 22.1135C39.6786 22.4798 39.6343 24.5853 39.5897 26.6111C39.5674 27.6214 39.5451 28.6083 39.5284 29.3427L39.5111 30.1029C39.3437 30.0815 39.1732 30.0705 39 30.0705C37.1381 30.0705 35.5732 31.3427 35.1274 33.0653C35.0442 33.3865 35 33.7233 35 34.0705C35 34.3209 35.023 34.566 35.067 34.8036C35.4113 36.6626 37.0413 38.0705 39 38.0705C41.2091 38.0705 43 36.2797 43 34.0705C43 33.2919 42.7775 32.5645 42.3927 31.9499V26.8871ZM42 24L52 22"
      stroke="white"
      stroke-linecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2781_669"
        x1="51.6911"
        y1="-5.28845"
        x2="49.5698"
        y2="61.1796"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D70B5D" />
        <stop offset="0.65818" stop-color="#F2D6E2" />
        <stop offset="0.91493" stop-color="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2781_669"
        x1="32.6907"
        y1="12.3308"
        x2="55.179"
        y2="47.7773"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFE092" />
        <stop offset="1" stop-color="#E3A302" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_2781_669"
        x1="59.566"
        y1="15.5661"
        x2="32.434"
        y2="42.6981"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.185" stop-color="#EF3781" />
        <stop offset="0.425" stop-color="#EC30EC" />
        <stop offset="0.745" stop-color="#67136C" />
      </linearGradient>
    </defs>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const projects: Project[] = [
    {
      title: 'E-commerce platforms',
      description:
        'Complete user experience overhaul for different e-commerce platforms as part of my internships immersion. Participation in different team projects using the Agile methodology and ',
      image: '/images/incubateur-projects.webp',
      category: 'ux',
      tags: ['UX Design', 'Wireframing', 'Style guide'],
    },
    {
      title: 'Portfolio website',
      description:
        "WordPress integration for the painting artist Sugaï to promote and showcase his works in illustration, mural painting, and artistic canvases. Integration using WordPress's robust features to create a user-friendly, customizable, and functional components.",
      image: '/images/wordpress-artist-sugai.webp',
      category: 'wordpress',
      tags: ['WordPress integration', 'Wireframe', 'Logo creation'],
    },
    {
      title: 'Plumbing services website',
      description:
        'Website for a plumbing service company based in Lille. This project includes the design of an intuitive user journey, the construction of pages and components, and optimization of content for enhanced visibility and SEO performance.',
      image: '/images/plombier-services.webp',
      category: 'wordpress',
      tags: ['WordPress integration', 'Style guide', 'SEO', 'Logo design'],
    },
    {
      title: 'Business brand identity',
      description:
        'Complete visual identity design for a business of honey products startup',
      image: '/images/precieuse-nahla.webp',
      category: 'visual',
      tags: ['Label design', 'Logo Design', 'Style Guide'],
    },
    {
      title: 'Outfit logo design',
      description: 'Logo and illustration for outfit products',
      image: '/images/epolar-logo.webp',
      category: 'visual',
      tags: ['Typography', 'Logo Design', 'Illustration'],
    },
    {
      title: 'Pub logo design',
      description: 'Logo and illustration for pub restaurant',
      image: '/images/gorilla-brothers-logo.webp',
      category: 'visual',
      tags: ['Typography', 'Logo Design', 'Illustration'],
    },
    {
      title: 'CD cover visual',
      description:
        'Design of CD cover and typographic logo for a music project.',
      image: '/images/visual-music-cover.webp',
      category: 'visual',
      tags: ['Typography', 'Logo Design'],
    },
    {
      title: 'Album Mixing',
      description:
        'Audio production, voice recording and mixing for the artist Sugaï.',
      image: '/images/sugai-music.webp',
      category: 'music',
      tags: ['Music Production', 'Mixing', 'Recording'],
    },
    {
      title: 'Education management application',
      description:
        'Prototype of an integrated desktop application for education and training management. It includes the visualization of student progress, a list of courses, results, and feedback from students.',
      image: '/images/kinot-application.webp',
      category: 'ux',
      tags: ['Figma', 'Wireframing', 'Prototyping'],
    },
    {
      title: 'Candidates management system',
      description:
        'Wireframe and prototype of a desktop application aiming to manage and organize candidates applications for programs on IT careers.',
      image: '/images/kali-application.webp',
      category: 'ux',
      tags: ['Style guide', 'UX/ UI', 'Prototyping'],
    },
    {
      title: 'IT Learning school website',
      description:
        'Participation in a complete branding and prototyping project of a platform dedicated to offering courses and training on digital careers.',
      image: '/images/novao-prototype.webp',
      category: 'ux',
      tags: ['UX / UI', 'Video editing', 'Prototyping', 'Design System'],
    },
    {
      title: 'E-Learning platform',
      description:
        'Wireframes and prototype of an online learning platform developed in collaboration with the scientific community. It offers training programs that emphasize collaboration and immersion in digital projects as key benefits. The application helps participants track their progress in courses and practice by solving complex problems to enhance technical and professional skills.',
      image: '/images/eleapp-application.webp',
      category: 'ux',
      tags: ['Figma', 'Prototyping', 'Design System'],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const filteredProjects =
    activeSection === 'all'
      ? projects
      : projects.filter((project) => project.category === activeSection);

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <header className="min-h-screen bg-gradient-primary text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>

        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary mb-8 shadow-xl">
              <img
                src="/images/logo-yeliweb-round.png"
                alt="YeliWeb Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <h1 className="text-6xl font-bold mb-6">YeliWeb Portfolio</h1>
            <p className="text-xl mb-8 max-w-2xl">
              Crafting digital experiences through design, development, and
              sound
            </p>

            <div className="flex items-center gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/yelibengochea/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              >
                <Linkedin size={24} className="text-white" />
              </a>
            </div>

            <a href="#about" className="inline-flex items-center group">
              <span className="mr-2 bg-gradient-to-r from-[#FFE092] to-secondary bg-clip-text text-transparent font-semibold">
                View My Work
              </span>
              <ChevronDown className="text-secondary animate-bounce" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden items-center justify-center">
                <img
                  src="/images/image-hero.jpg"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-primary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                For the last five years, I have worked on designing apps and
                websites. I've participated on a variety of interesting and
                challenging projects using my skills in UX/UI design, media
                communication and translation. These projects have allowed me to
                work on the creation of user-friendly experiences, combining the
                technical principles of design with informed decisions based on
                interactions and responses from users.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to design, I am passionate about music. I have spent
                several years writing, singing, and producing sound for friends
                and personal projects. This love for music enhances my
                creativity and inspires me to build products that connect with
                people. I believe that design and music are not just
                professions; they are profound forms of communication that can
                touch lives and foster coopération and engagement.
              </p>
              <a
                href="#work"
                className="inline-block mt-8 px-8 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>

          <div className="flex justify-center gap-4 mb-12">
            {['all', 'ux', 'wordpress', 'visual', 'music'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveSection(category)}
                className={`px-6 py-2 rounded-full ${
                  activeSection === category
                    ? 'bg-gradient-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-fit"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-auto h-auto full flex items-center justify-center mx-auto mb-4">
                <UxDesignIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">UX/UI Design</h3>
              <p className="text-gray-600">
                Creating intuitive and visually appealing user interactions
                through wireframing and prototyping
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-auto h-auto full flex items-center justify-center mx-auto mb-4">
                <WebDesignIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-gray-600">
                Responsive and modern website design and creation of content for
                digital platforms
              </p>
            </div>
            <div className="text-center p-6">
              <div className="ww-auto h-auto full flex items-center justify-center mx-auto mb-4">
                <WordPressIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                WordPress integration
              </h3>
              <p className="text-gray-600">
                Tailored WordPress themes and content integration with enhanced
                functionnality through plugins and development tools
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-auto h-auto full flex items-center justify-center mx-auto mb-4">
                <MusicProductionIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2">Music Production</h3>
              <p className="text-gray-600">
                Audio production and mixing of music, voice-over recording for
                audiovisual projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto flex justify-center">
            <a
              href="mailto:info@yeliweb.com"
              className="text-2xl font-semibold hover:opacity-80 transition-opacity duration-300"
            >
              <span className="bg-gradient-to-r from-[#FFE092] to-secondary bg-clip-text text-transparent">
                info@yeliweb.com
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} YeliWeb Portfolio. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
