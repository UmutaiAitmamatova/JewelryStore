import React from 'react';
import './Cart.scss'

const Cart = () => {
  return (
    <div className='cart'>
      <div className="cart_title">
        <svg width="53" height="25" viewBox="0 0 53 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.64 24.384C5.528 24.384 3.82133 23.5947 2.52 22.016C1.21867 20.416 0.568 18.304 0.568 15.68C0.568 13.056 1.016 10.6773 1.912 8.544C2.82933 6.38933 4.13067 4.64 5.816 3.296C7.50133 1.952 9.368 1.28 11.416 1.28C12.184 1.28 12.8667 1.39733 13.464 1.632C15 0.607999 16.5893 0.0959988 18.232 0.0959988C19 0.0959988 19.7147 0.213332 20.376 0.447998C21.0587 0.661332 21.56 0.927999 21.88 1.248C21.7093 1.97333 21.432 2.63467 21.048 3.232C20.0453 2.48533 19.032 2.112 18.008 2.112C16.984 2.112 16.0453 2.31467 15.192 2.72C16.1947 3.78667 16.696 5.30133 16.696 7.264C16.696 9.20533 16.184 10.976 15.16 12.576C14.136 14.176 12.856 14.976 11.32 14.976C10.4027 14.976 9.656 14.592 9.08 13.824C8.52533 13.056 8.248 12.096 8.248 10.944C8.248 8.17067 9.28267 5.664 11.352 3.424C9.66667 3.488 8.30133 4.59733 7.256 6.752C6.21067 8.88533 5.688 11.4667 5.688 14.496C5.688 18.912 6.968 21.12 9.528 21.12C11.2773 21.12 13.144 20.032 15.128 17.856L16.248 18.784C15.9707 19.2747 15.512 19.8827 14.872 20.608C14.2533 21.3333 13.6347 21.9413 13.016 22.432C12.3973 22.9227 11.5973 23.3707 10.616 23.776C9.63467 24.1813 8.64267 24.384 7.64 24.384ZM14.488 7.584C14.488 5.83467 14.0933 4.64 13.304 4C12.3653 4.832 11.608 5.84533 11.032 7.04C10.4773 8.23467 10.2 9.472 10.2 10.752C10.2 11.4133 10.3173 11.9573 10.552 12.384C10.808 12.8107 11.128 13.024 11.512 13.024C12.344 13.024 13.048 12.4373 13.624 11.264C14.2 10.0907 14.488 8.864 14.488 7.584ZM26.2295 10.752C26.2722 10.7093 26.3895 10.432 26.5815 9.92C27.5842 9.92 28.9282 10.2187 30.6135 10.816C30.0802 12.5867 29.6535 14.4427 29.3335 16.384C29.0135 18.304 28.8535 19.68 28.8535 20.512C28.8535 21.3227 28.9388 21.728 29.1095 21.728C29.2375 21.728 29.7068 21.5253 30.5175 21.12L30.9015 20.928L31.4775 22.048C31.2855 22.2187 31.0295 22.432 30.7095 22.688C30.4108 22.944 29.8348 23.296 28.9815 23.744C28.1282 24.1707 27.3602 24.384 26.6775 24.384C25.3548 24.384 24.5868 23.7867 24.3735 22.592C23.0082 23.7867 21.7708 24.384 20.6615 24.384C19.5735 24.384 18.6455 23.9573 17.8775 23.104C17.1308 22.2507 16.7575 20.9067 16.7575 19.072C16.7575 16.2133 17.3442 13.9627 18.5175 12.32C19.6908 10.656 21.1095 9.824 22.7735 9.824C23.9682 9.824 25.1202 10.1333 26.2295 10.752ZM22.5815 21.664C23.0935 21.664 23.6695 21.4613 24.3095 21.056C24.4588 18.048 24.9602 15.072 25.8135 12.128C25.1735 11.8507 24.6295 11.712 24.1815 11.712C23.4135 11.712 22.7522 12.4693 22.1975 13.984C21.6642 15.4773 21.3975 17.1307 21.3975 18.944C21.3975 20.7573 21.7922 21.664 22.5815 21.664ZM32.0045 24.096H31.7805C31.7378 23.9253 31.7165 23.5413 31.7165 22.944C31.7165 22.3253 32.0045 20.6827 32.5805 18.016C33.1565 15.3493 33.4445 13.824 33.4445 13.44C33.4445 12.7787 33.1458 12.0533 32.5485 11.264L32.2605 10.88L32.2925 10.464C33.4445 10.144 35.2898 9.984 37.8285 9.984C38.0845 10.5387 38.2125 11.3173 38.2125 12.32C38.4472 11.936 38.9378 11.424 39.6845 10.784C40.4312 10.144 41.1992 9.824 41.9885 9.824C43.1405 9.824 43.7165 10.8267 43.7165 12.832C43.6098 12.96 43.4605 13.1307 43.2685 13.344C43.0978 13.536 42.7352 13.8133 42.1805 14.176C41.6472 14.5387 41.1245 14.7627 40.6125 14.848C40.5912 14.848 40.4098 14.56 40.0685 13.984C39.7272 13.408 39.4712 13.12 39.3005 13.12C38.7672 13.312 38.2978 13.632 37.8925 14.08C36.9112 18.496 36.4205 21.3547 36.4205 22.656C36.4205 23.1253 36.4312 23.456 36.4525 23.648C35.7058 23.9467 34.2232 24.096 32.0045 24.096ZM52.9578 10.208C52.9151 10.7413 52.7338 11.36 52.4138 12.064C51.6031 11.9787 50.8351 11.936 50.1098 11.936H49.5338C48.5524 16.6933 48.0618 19.6587 48.0618 20.832C48.0618 21.4507 48.1898 21.76 48.4458 21.76C48.7231 21.76 49.4378 21.4933 50.5898 20.96L51.1658 22.016C49.2671 23.5947 47.5071 24.384 45.8858 24.384C45.1391 24.384 44.5204 24.1493 44.0298 23.68C43.5604 23.2107 43.3258 22.592 43.3258 21.824C43.3258 21.0347 43.4111 20.1493 43.5818 19.168C43.7738 18.1867 44.0298 16.992 44.3498 15.584C44.6698 14.1547 44.9044 13.0027 45.0538 12.128C44.2644 12.192 43.6778 12.256 43.2938 12.32C43.2511 12.064 43.2298 11.7227 43.2298 11.296C43.2298 10.848 43.2618 10.4853 43.3258 10.208H45.3418C45.5124 9.056 45.5978 7.968 45.5978 6.944L45.5658 5.952V5.856C47.2298 5.28 48.7978 4.992 50.2698 4.992C50.3551 5.41867 50.3978 5.952 50.3978 6.592C50.3978 7.232 50.2164 8.43733 49.8538 10.208H52.9578Z" fill="black" />
        </svg>
      </div>

      <div className="content"></div>
    </div>
  )
}

export default Cart