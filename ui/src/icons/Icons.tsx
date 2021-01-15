import React from 'react'

import marketplaceLogo from './marketplace.svg'
import exchange from './exchange.svg'
import lock from './lock.svg'
import logout from './logout.svg'
import orders from './orders.svg'
import publicIcon from './public.svg'
import user from './user.svg'
import wallet from './wallet.svg'

import './Icons.scss'

type IconProps = {
    size?: '24' | '32' | '48' | '64';
}

export const ArrowRightIcon = () => (
    <svg className="icon arrow-right-icon" viewBox="0 0 13 12">
        <path className="fill-blue"
            d="M6.3,2.3L9,5H0.8C0.4,5,0,5.3,0,5.8s0.3,0.8,0.8,0.8H9L6.3,9.3C6.2,9.4,6.1,9.6,6.1,9.8s0.1,0.4,0.2,0.5
            c0.3,0.3,0.8,0.3,1.1,0l4-4c0.1-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.1-0.4,0-0.5c0-0.1-0.1-0.2-0.2-0.2l-4-4C7,1,6.5,1,6.2,1.3
            C6,1.5,6,2,6.3,2.3"/>
    </svg>
)

export const GlobeIcon = () => (
    <svg className="icon globe-icon" viewBox="0 0 16 16">
      <path className="fill-primary" d="M4.79999 5.86678V5.36678C4.52385 5.36678 4.29999 5.59064 4.29999 5.86678H4.79999ZM4.79999
        6.93345L5.15354 7.287L5.29999 7.14055V6.93345H4.79999ZM2.97908 7.24587L2.62552 7.59942H2.62552L2.97908
        7.24587ZM6.93332 13.8668H7.43332V13.6597L7.28688 13.5132L6.93332 13.8668ZM5.86666 12.8001H5.36666V13.0072L5.5131
        13.1537L5.86666 12.8001ZM5.86666 11.2001H6.36666V10.993L6.22021 10.8466L5.86666 11.2001ZM4.79999 10.1334H4.29999V10.3406L4.44644
        10.487L4.79999 10.1334ZM4.79999 9.06678V8.56678C4.52385 8.56678 4.29999 8.79064 4.29999 9.06678H4.79999ZM9.63332
        0.533447V2.66678H10.6333V0.533447H9.63332ZM9.06666 3.23345H7.99999V4.23345H9.06666V3.23345ZM5.86666
        5.36678H4.79999V6.36678H5.86666V5.36678ZM4.29999 5.86678V6.93345H5.29999V5.86678H4.29999ZM4.44644
        6.57989L4.13402 6.89231L4.84113 7.59942L5.15354 7.287L4.44644 6.57989ZM3.33263 6.89231L1.42021
        4.97989L0.713105 5.687L2.62552 7.59942L3.33263 6.89231ZM6.43332 4.80011C6.43332 5.11307 6.17962
        5.36678 5.86666 5.36678V6.36678C6.7319 6.36678 7.43332 5.66536 7.43332 4.80011H6.43332ZM7.99999
        3.23345C7.13475 3.23345 6.43332 3.93487 6.43332 4.80011H7.43332C7.43332 4.48715 7.68703 4.23345
        7.99999 4.23345V3.23345ZM4.13402 6.89231C3.91272 7.11361 3.55393 7.11361 3.33263 6.89231L2.62552
        7.59942C3.23735 8.21124 4.2293 8.21124 4.84113 7.59942L4.13402 6.89231ZM9.63332 2.66678C9.63332
        2.97974 9.37962 3.23345 9.06666 3.23345V4.23345C9.9319 4.23345 10.6333 3.53203 10.6333 2.66678H9.63332ZM7.43332
        15.4668V13.8668H6.43332V15.4668H7.43332ZM7.28688 13.5132L6.22021 12.4466L5.5131 13.1537L6.57977 14.2203L7.28688
        13.5132ZM6.36666 12.8001V11.2001H5.36666V12.8001H6.36666ZM6.22021 10.8466L5.15354 9.77989L4.44644 10.487L5.5131
        11.5537L6.22021 10.8466ZM5.29999 10.1334V9.06678H4.29999V10.1334H5.29999ZM4.79999 9.56678H9.06666V8.56678H4.79999V9.56678ZM9.63332
        10.1334V10.8446H10.6333V10.1334H9.63332ZM11.5555 12.7668H14.4V11.7668H11.5555V12.7668ZM10.7 11.9112C10.7 12.3837
        11.083 12.7668 11.5555 12.7668V11.7668C11.6353 11.7668 11.7 11.8314 11.7 11.9112H10.7ZM10.4889 11.7001C10.6055
        11.7001 10.7 11.7946 10.7 11.9112H11.7C11.7 11.2423 11.1578 10.7001 10.4889 10.7001V11.7001ZM9.63332 10.8446C9.63332
        11.3171 10.0164 11.7001 10.4889 11.7001V10.7001C10.5687 10.7001 10.6333 10.7648 10.6333 10.8446H9.63332ZM9.06666
        9.56678C9.37962 9.56678 9.63332 9.82049 9.63332 10.1334H10.6333C10.6333 9.2682 9.9319 8.56678 9.06666
        8.56678V9.56678ZM7.99999 14.9668C4.15241 14.9668 1.03333 11.8477 1.03333 8.00011H0.0333252C0.0333252
        12.4 3.60012 15.9668 7.99999 15.9668V14.9668ZM14.9667 8.00011C14.9667 11.8477 11.8476 14.9668
        7.99999 14.9668V15.9668C12.3999 15.9668 15.9667 12.4 15.9667 8.00011H14.9667ZM7.99999
        1.03345C11.8476 1.03345 14.9667 4.15253 14.9667 8.00011H15.9667C15.9667 3.60025 12.3999 0.0334473 7.99999
        0.0334473V1.03345ZM7.99999 0.0334473C3.60012 0.0334473 0.0333252 3.60025 0.0333252 8.00011H1.03333C1.03333
        4.15253 4.15241 1.03345 7.99999 1.03345V0.0334473Z"/>
    </svg>
  );

export const LogoIcon: React.FC<IconProps> = ({ size }) => (
    <img
        className={`icon logo-icon icon-size-${size}`}
        src={marketplaceLogo}
        color={'#4BE725'}
        alt="command"/>
)

export const OpenMarketplaceLogo: React.FC<IconProps> = ({ size }) => (
    <svg className={`icon open-marketplace-icon icon-size-${size}`} width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4V28H25M14.2414 4V9.7931M5.96552 19.7241V23.8621M5.96552 10.6207V13.1034M22.5172 10.6207V14.7586M22.5172 21.3793V25.5172M4.31034 13.1034H7.62069V19.7241H4.31034V13.1034ZM12.5862 9.7931H15.8966V16.4138H12.5862V9.7931ZM20.8621 14.7586H24.1724V21.3793H20.8621V14.7586Z" stroke="#4BE725"/>
    </svg>
)

export const CandlestickIcon = () => (
    <svg className='icon icon-size-24 candlestick-icon' width="20" preserveAspectRatio="none" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="9.9165" x2="18" y2="9.9165" stroke="white" strokeWidth="1.5" strokeDasharray="1 1"/>
        <line x1="3.5" y1="0.5" x2="3.5" y2="15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="9.5" y1="0.5" x2="9.5" y2="15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="15.5" y1="0.5" x2="15.5" y2="15.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2.5" y="3.5" width="2" height="3" fill="white" stroke="white"/>
        <rect x="8.5" y="7.5" width="2" height="5" fill="white" stroke="white"/>
        <rect x="14.5" y="4.30957" width="2" height="7.38095" fill="white" stroke="white"/>
    </svg>
)

export const ExchangeIcon = () => (
    <svg className="icon exchange-icon" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75H15V5.25H1V6.75Z" fill="#4E5E7E"/>
        <path d="M0.46967 14.5303C0.176777 14.2374 0.176777 13.7626 0.46967 13.4697L5.24264 8.6967C5.53553 8.40381 6.01041 8.40381 6.3033 8.6967C6.59619 8.98959 6.59619 9.46447 6.3033 9.75736L2.06066 14L6.3033 18.2426C6.59619 18.5355 6.59619 19.0104 6.3033 19.3033C6.01041 19.5962 5.53553 19.5962 5.24264 19.3033L0.46967 14.5303ZM15 14.75H1V13.25H15V14.75Z" fill="#4E5E7E"/>
    </svg>
)

export const LockIcon = () => (
    <img
        className="icon lock-icon"
        src={lock}
        alt="command"/>
)

export const LogoutIcon = () => (
    <svg className="icon logout-icon" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.941 6.50026L3.751 6.50026C3.337 6.50026 3.001 6.83626 3.001 7.25026C3.001 7.66426 3.337 8.00026 3.751 8.00026H11.941L9.221 10.7193C9.075 10.8663 9.001 11.0583 9.001 11.2503C9.001 11.4423 9.075 11.6343 9.221 11.7803C9.514 12.0733 9.989 12.0733 10.282 11.7803L14.282 7.78026C14.351 7.71126 14.406 7.62826 14.443 7.53626C14.519 7.35326 14.519 7.14626 14.443 6.96326C14.406 6.87126 14.351 6.78926 14.282 6.71926L10.282 2.71926C9.989 2.42626 9.514 2.42626 9.221 2.71926C8.928 3.01226 8.928 3.48726 9.221 3.78026L11.941 6.50026Z" fill="#174DE8"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.75098 12.5H1.50098L1.50098 2H6.75098V0.5L0.750977 0.5C0.336977 0.5 0.000976562 0.836 0.000976562 1.25L0.000976563 13.25C0.000976563 13.664 0.336977 14 0.750977 14H6.75098V12.5Z" fill="#174DE8"/>
    </svg>
)

export const MarketIcon = () => (
    <svg className="icon market-icon" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 4.36865L2.94737 6.05286L6.73684 4.36865L10.5263 6.05286L13.4737 4.36865V17.0002H0V4.36865Z" fill="#303132"/>
        <path d="M2.10523 6.89474C1.96488 4.92982 2.6947 1 6.73681 1" stroke="#303132" strokeWidth="1.5"/>
        <path d="M10.9314 6.89474C11.0717 4.92982 10.3419 1 6.29981 1" stroke="#303132" strokeWidth="1.5"/>
    </svg>
)

export const OrdersIcon = () => (
    <svg className="icon orders-icon" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
            <path d="M10.8109 1.40002L10.8887 1.78891H12.0554L11.822 0.622244C11.7443 0.311133 11.4332 0.0777996 11.122 0.155577L1.71094 1.78891H8.55538L10.8109 1.40002Z" fill="#B4F5A3"/>
            <path d="M13.2219 4.43338L13.1442 2.41116C13.1442 2.10005 12.9108 1.78894 12.5219 1.78894H12.0553H10.8886H8.55527H1.71083H0.777496C0.466385 1.78894 0.155273 2.02227 0.155273 2.41116V10.8889C0.155273 11.2001 0.388607 11.5112 0.777496 11.5112H12.5997C12.9108 11.5112 13.2219 11.2778 13.2219 10.8889V9.48894C13.5331 9.48894 13.8442 9.25561 13.8442 8.86672V4.97783C13.8442 4.66672 13.5331 4.43338 13.2219 4.43338ZM11.9775 10.3445H1.39972V2.95561H12.0553V4.43338H8.08861C7.62194 4.43338 7.38861 4.66672 7.38861 4.97783V8.9445C7.38861 9.25561 7.62194 9.56672 8.01083 9.56672H11.9775V10.3445ZM12.5997 8.32227H11.9775H8.55527V5.60005H11.9775H12.5997V8.32227Z" fill="#B4F5A3"/>
            <path d="M10.5783 7.62213C10.9219 7.62213 11.2005 7.34355 11.2005 6.99991C11.2005 6.65626 10.9219 6.37769 10.5783 6.37769C10.2346 6.37769 9.95605 6.65626 9.95605 6.99991C9.95605 7.34355 10.2346 7.62213 10.5783 7.62213Z" fill="#B4F5A3"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="14" height="11.6667" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

export const PublicIcon = () => (
    <svg className="icon public-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.83636C0 4.00909 3.92727 0 8.83636 0C13.6636 0 17.5909 4.00909 17.5909 8.83636C17.5909 13.6636 13.7455 17.6727 8.83636 17.6727C3.92727 17.6727 0 13.6636 0 8.83636ZM1.55455 6.62727C1.30909 7.28182 1.22727 8.1 1.22727 8.83636C1.22727 9.57273 1.39091 10.3909 1.55455 11.1273H5.31818V6.62727H1.55455ZM6.54545 6.62727H11.0455V11.1273H6.54545V6.62727ZM16.0364 6.62727H12.2727V11.0455H16.0364C16.2818 10.3909 16.3636 9.57273 16.3636 8.83636C16.3636 8.1 16.2818 7.36364 16.0364 6.62727ZM15.5455 5.4H12.2727V2.12727C13.6636 2.86364 14.8091 4.00909 15.5455 5.4ZM11.0455 5.4V1.63636C10.3091 1.39091 9.65455 1.30909 8.83636 1.30909C8.01818 1.30909 7.28182 1.39091 6.54545 1.63636V5.4H11.0455ZM5.31818 2.12727V5.4H2.04545C2.78182 4.00909 3.92727 2.86364 5.31818 2.12727ZM5.4 12.2727H2.12727C2.78182 13.6636 3.92727 14.8091 5.4 15.5455V12.2727ZM6.54545 16.0364V12.2727H11.0455V16.0364C10.3091 16.2818 9.57273 16.3636 8.83636 16.3636C8.1 16.3636 7.28182 16.2818 6.54545 16.0364ZM12.2727 12.2727V15.5455C13.6636 14.8091 14.8091 13.6636 15.5455 12.2727H12.2727Z" fill="#B4F5A3"/>
    </svg>
)

export const UserIcon = () => (
    <svg  className="icon user-icon" width="55" height="19" viewBox="0 0 55 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.918 17.6318C33.4896 17.6318 33.1523 17.5703 32.9062 17.4473V16.4561C33.2298 16.5472 33.5671 16.5928 33.918 16.5928C34.3691 16.5928 34.7109 16.4561 34.9434 16.1826C35.1803 15.9092 35.2988 15.515 35.2988 15V5.00586H36.4609V14.9043C36.4609 15.7702 36.2422 16.4401 35.8047 16.9141C35.3672 17.3926 34.7383 17.6318 33.918 17.6318ZM45.416 11.2471C45.416 12.4684 45.1084 13.4232 44.4932 14.1113C43.8779 14.7949 43.028 15.1367 41.9434 15.1367C41.2734 15.1367 40.6787 14.9795 40.1592 14.665C39.6396 14.3506 39.2386 13.8994 38.9561 13.3115C38.6735 12.7236 38.5322 12.0355 38.5322 11.2471C38.5322 10.0257 38.8376 9.07552 39.4482 8.39648C40.0589 7.71289 40.9066 7.37109 41.9912 7.37109C43.0394 7.37109 43.8711 7.71973 44.4863 8.41699C45.1061 9.11426 45.416 10.0576 45.416 11.2471ZM39.708 11.2471C39.708 12.2041 39.8994 12.9333 40.2822 13.4346C40.665 13.9359 41.2279 14.1865 41.9707 14.1865C42.7135 14.1865 43.2764 13.9382 43.6592 13.4414C44.0465 12.9401 44.2402 12.2087 44.2402 11.2471C44.2402 10.2946 44.0465 9.57227 43.6592 9.08008C43.2764 8.58333 42.709 8.33496 41.957 8.33496C41.2142 8.33496 40.6536 8.57878 40.2754 9.06641C39.8971 9.55404 39.708 10.2809 39.708 11.2471ZM50.5771 15.1367C49.4697 15.1367 48.5947 14.7995 47.9521 14.125C47.3141 13.4505 46.9951 12.514 46.9951 11.3154C46.9951 10.1077 47.2913 9.14844 47.8838 8.4375C48.4808 7.72656 49.2806 7.37109 50.2832 7.37109C51.222 7.37109 51.9648 7.68099 52.5117 8.30078C53.0586 8.91602 53.332 9.72949 53.332 10.7412V11.459H48.1709C48.1937 12.3385 48.4147 13.0062 48.834 13.4619C49.2578 13.9176 49.8525 14.1455 50.6182 14.1455C51.4248 14.1455 52.2223 13.9769 53.0107 13.6396V14.6514C52.6097 14.8245 52.2292 14.9476 51.8691 15.0205C51.5137 15.098 51.083 15.1367 50.5771 15.1367ZM50.2695 8.32129C49.668 8.32129 49.1872 8.51725 48.8271 8.90918C48.4717 9.30111 48.262 9.84342 48.1982 10.5361H52.1152C52.1152 9.82064 51.9557 9.27376 51.6367 8.89551C51.3177 8.5127 50.862 8.32129 50.2695 8.32129Z" fill="white"/>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="18" height="18">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1H17.9999V18.9997H0V1Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7325 15.4805C14.5144 14.1707 13.7531 11.7609 11.1685 10.8746C12.096 10.2012 12.7059 9.11591 12.7059 7.88238C12.7059 5.83568 11.0467 4.1765 9.00002 4.1765C6.95331 4.1765 5.29413 5.83568 5.29413 7.88238C5.29413 9.11591 5.90402 10.2012 6.83155 10.8746C4.24696 11.7609 3.4846 14.1697 3.26755 15.4805C1.90272 14.0532 1.05884 12.1251 1.05884 10C1.05884 5.62074 4.62072 2.05885 9.00002 2.05885C13.3793 2.05885 16.9412 5.62074 16.9412 10C16.9412 12.1251 16.0973 14.0532 14.7325 15.4805ZM6.35319 7.88239C6.35319 6.42227 7.54119 5.23533 9.00025 5.23533C10.4593 5.23533 11.6473 6.42227 11.6473 7.88239C11.6473 9.34145 10.4593 10.5294 9.00025 10.5294C7.54119 10.5294 6.35319 9.34145 6.35319 7.88239ZM4.23522 16.3381C4.23733 16.0523 4.3411 11.5883 8.99992 11.5883C13.6355 11.5883 13.7615 16.047 13.7636 16.3381C12.4358 17.3387 10.7883 17.9412 8.99992 17.9412C7.21051 17.9412 5.56404 17.3387 4.23522 16.3381ZM9 1C4.02988 1 0 5.02882 0 10C0 14.9701 4.02988 19 9 19C13.9701 19 18 14.9701 18 10C18 5.02882 13.9701 1 9 1Z" fill="#B4F5A3"/>
        </g>
    </svg>
)

export const WalletIcon = () => (
    <svg className="icon wallet-icon" width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8109 1.40002L10.8887 1.78891H12.0554L11.822 0.622244C11.7443 0.311133 11.4332 0.0777996 11.122 0.155577L1.71094 1.78891H8.55538L10.8109 1.40002Z" fill="#B4F5A3"/>
        <path d="M13.2219 4.43338L13.1442 2.41116C13.1442 2.10005 12.9108 1.78894 12.5219 1.78894H12.0553H10.8886H8.55527H1.71083H0.777496C0.466385 1.78894 0.155273 2.02227 0.155273 2.41116V10.8889C0.155273 11.2001 0.388607 11.5112 0.777496 11.5112H12.5997C12.9108 11.5112 13.2219 11.2778 13.2219 10.8889V9.48894C13.5331 9.48894 13.8442 9.25561 13.8442 8.86672V4.97783C13.8442 4.66672 13.5331 4.43338 13.2219 4.43338ZM11.9775 10.3445H1.39972V2.95561H12.0553V4.43338H8.08861C7.62194 4.43338 7.38861 4.66672 7.38861 4.97783V8.9445C7.38861 9.25561 7.62194 9.56672 8.01083 9.56672H11.9775V10.3445ZM12.5997 8.32227H11.9775H8.55527V5.60005H11.9775H12.5997V8.32227Z" fill="#B4F5A3"/>
    </svg>
)

export const CircleIcon = () => (
    <div className="icon circle-icon"></div>
)

export const IconClose = () => (
    <svg className='icon close' viewBox="0 0 14 14">
      <path className="fill-primary" d="M8.6,7.5L12.1,4c0.3-0.3,0.3-0.8,0-1.1S11.3,2.7,11,3L7.5,6.5L4,3C3.7,2.7,3.2,2.7,3,3S2.7,3.7,3,4l3.5,3.5
          L3,11c-0.3,0.3-0.3,0.8,0,1.1c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l3.5-3.5l3.5,3.5c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2
          c0.3-0.3,0.3-0.8,0-1.1L8.6,7.5z"/>
    </svg>
  );

export const IconChevronDown = () => (
<svg className='icon chevron-down' viewBox="0 -6 16 16">
    <path className="fill-primary"
        d="M7,7L1,1h2l4.5,4.4L12,1h2.1l-6,6C7.9,7.1,7.7,7.2,7.5,7.2C7.3,7.2,7.1,7.1,7,7z"/>
</svg>
);

export const IconChevronUp = () => (
    <svg className='icon chevron-up' viewBox="0 3 16 16">
        <IconChevronDown/>
    </svg>
);

export const AddPlusIcon = () => (
    <svg className='icon add-plus' viewBox="0 0 14 14" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.15 6.65H7.35V3.85C7.35 3.6568 7.1932 3.5 7 3.5C6.8068 3.5 6.65 3.6568 6.65 3.85V6.65H3.85C3.6568 6.65 3.5 6.8068 3.5 7C3.5 7.1932 3.6568 7.35 3.85 7.35H6.65V10.15C6.65 10.3432 6.8068 10.5 7 10.5C7.1932 10.5 7.35 10.3432 7.35 10.15V7.35H10.15C10.3432 7.35 10.5 7.1932 10.5 7C10.5 6.8068 10.3432 6.65 10.15 6.65Z" fill="#303132"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.1764C3.59422 13.1764 0.823531 10.4058 0.823531 6.99997C0.823531 3.59419 3.59422 0.823503 7 0.823503C10.4058 0.823503 13.1765 3.59419 13.1765 6.99997C13.1765 10.4058 10.4058 13.1764 7 13.1764ZM0 7C0 10.8596 3.14042 14 7 14C10.8596 14 14 10.8596 14 7C14 3.14042 10.8596 0 7 0C3.14042 0 0 3.14042 0 7Z" fill="#303132"/>
    </svg>
);

export const OverflowIcon = () => (
    <svg className='icon overflow-icon' width='20px' viewBox="0 0 17.8 4.6">
        <circle className="fill-primary" cx="2" cy="2.3" r="2"/>
        <circle className="fill-primary" cx="8.9" cy="2.3" r="2"/>
        <circle className="fill-primary" cx="15.8" cy="2.3" r="2"/>
    </svg>
  );
