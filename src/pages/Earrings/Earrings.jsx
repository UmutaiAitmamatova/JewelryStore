import React from 'react';
import './Earrings.scss';
import { Product } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from '../../redux/actions/cart'



const Earrings = () => {
  const dispatch = useDispatch()
  const { items } = useSelector(({earrings}) => {
    return {
      items: earrings.items
    }
  })
  const handleAddCart = (obj) => {
    dispatch(addToCart(obj))
  }
  
  return (
    <div className="earrings">
      <div className="earrings_title">
        <svg
          width="120"
          height="35"
          viewBox="0 0 101 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.496 1.888C16.6427 1.888 15.8213 2.06933 15.032 2.432C15.928 3.15733 16.376 4.064 16.376 5.152C16.376 6.24 16.088 7.2 15.512 8.032C14.936 8.864 14.2107 9.28 13.336 9.28C12.4827 9.28 11.7893 9.01333 11.256 8.48C10.744 7.92533 10.488 7.168 10.488 6.208C10.488 5.248 10.808 4.30933 11.448 3.392C10.4453 3.456 9.592 3.88267 8.888 4.672C8.184 5.44 7.832 6.464 7.832 7.744C7.832 9.024 8.088 10.1547 8.6 11.136C9.32533 10.9867 10.0613 10.912 10.808 10.912C13.2187 10.912 14.424 11.6373 14.424 13.088C14.424 13.7067 14.1787 14.2613 13.688 14.752C13.2187 15.2213 12.4187 15.456 11.288 15.456C10.1787 15.456 8.96267 15.0613 7.64 14.272C6.40267 15.4453 5.784 16.7467 5.784 18.176C5.784 19.1147 6.08267 19.8933 6.68 20.512C7.27733 21.1307 8.088 21.44 9.112 21.44C10.136 21.44 11.2027 21.0987 12.312 20.416C13.4213 19.7333 14.4027 18.912 15.256 17.952L16.408 18.976C15.8533 19.7867 15.0853 20.6507 14.104 21.568C12.12 23.4453 9.92267 24.384 7.512 24.384C5.86933 24.384 4.35467 23.9573 2.968 23.104C2.28533 22.656 1.73067 22.0373 1.304 21.248C0.877333 20.4587 0.664 19.552 0.664 18.528C0.664 15.712 2.17867 13.5893 5.208 12.16C4.14133 10.816 3.608 9.32267 3.608 7.68C3.608 5.65333 4.35467 4.08533 5.848 2.976C7.34133 1.84533 9.09067 1.28 11.096 1.28C11.9067 1.28 12.6427 1.376 13.304 1.568C14.7333 0.586665 16.3013 0.0959988 18.008 0.0959988C18.7973 0.0959988 19.5227 0.202665 20.184 0.415998C20.8667 0.629332 21.3573 0.885331 21.656 1.184C21.6133 1.888 21.3787 2.47467 20.952 2.944L20.728 3.168C19.9813 2.31467 18.904 1.888 17.496 1.888ZM14.488 5.696C14.488 4.77867 14.0827 4.10667 13.272 3.68C12.632 4.36267 12.312 5.17333 12.312 6.112C12.312 7.05067 12.6427 7.52 13.304 7.52C13.6453 7.52 13.9227 7.34933 14.136 7.008C14.3707 6.64533 14.488 6.208 14.488 5.696ZM12.696 13.184C12.696 12.9707 12.568 12.8 12.312 12.672C12.0773 12.5227 11.7253 12.448 11.256 12.448C10.808 12.448 10.296 12.576 9.72 12.832C10.3173 13.4507 10.9573 13.76 11.64 13.76C12.344 13.76 12.696 13.568 12.696 13.184ZM26.417 10.752C26.4597 10.7093 26.577 10.432 26.769 9.92C27.7717 9.92 29.1157 10.2187 30.801 10.816C30.2677 12.5867 29.841 14.4427 29.521 16.384C29.201 18.304 29.041 19.68 29.041 20.512C29.041 21.3227 29.1263 21.728 29.297 21.728C29.425 21.728 29.8943 21.5253 30.705 21.12L31.089 20.928L31.665 22.048C31.473 22.2187 31.217 22.432 30.897 22.688C30.5983 22.944 30.0223 23.296 29.169 23.744C28.3157 24.1707 27.5477 24.384 26.865 24.384C25.5423 24.384 24.7743 23.7867 24.561 22.592C23.1957 23.7867 21.9583 24.384 20.849 24.384C19.761 24.384 18.833 23.9573 18.065 23.104C17.3183 22.2507 16.945 20.9067 16.945 19.072C16.945 16.2133 17.5317 13.9627 18.705 12.32C19.8783 10.656 21.297 9.824 22.961 9.824C24.1557 9.824 25.3077 10.1333 26.417 10.752ZM22.769 21.664C23.281 21.664 23.857 21.4613 24.497 21.056C24.6463 18.048 25.1477 15.072 26.001 12.128C25.361 11.8507 24.817 11.712 24.369 11.712C23.601 11.712 22.9397 12.4693 22.385 13.984C21.8517 15.4773 21.585 17.1307 21.585 18.944C21.585 20.7573 21.9797 21.664 22.769 21.664ZM32.192 24.096H31.968C31.9253 23.9253 31.904 23.5413 31.904 22.944C31.904 22.3253 32.192 20.6827 32.768 18.016C33.344 15.3493 33.632 13.824 33.632 13.44C33.632 12.7787 33.3333 12.0533 32.736 11.264L32.448 10.88L32.48 10.464C33.632 10.144 35.4773 9.984 38.016 9.984C38.272 10.5387 38.4 11.3173 38.4 12.32C38.6347 11.936 39.1253 11.424 39.872 10.784C40.6187 10.144 41.3867 9.824 42.176 9.824C43.328 9.824 43.904 10.8267 43.904 12.832C43.7973 12.96 43.648 13.1307 43.456 13.344C43.2853 13.536 42.9227 13.8133 42.368 14.176C41.8347 14.5387 41.312 14.7627 40.8 14.848C40.7787 14.848 40.5973 14.56 40.256 13.984C39.9147 13.408 39.6587 13.12 39.488 13.12C38.9547 13.312 38.4853 13.632 38.08 14.08C37.0987 18.496 36.608 21.3547 36.608 22.656C36.608 23.1253 36.6187 23.456 36.64 23.648C35.8933 23.9467 34.4107 24.096 32.192 24.096ZM43.1443 24.096H42.9203C42.8776 23.9253 42.8563 23.5413 42.8563 22.944C42.8563 22.3253 43.1443 20.6827 43.7203 18.016C44.2963 15.3493 44.5843 13.824 44.5843 13.44C44.5843 12.7787 44.2856 12.0533 43.6883 11.264L43.4003 10.88L43.4323 10.464C44.5843 10.144 46.4296 9.984 48.9683 9.984C49.2243 10.5387 49.3523 11.3173 49.3523 12.32C49.5869 11.936 50.0776 11.424 50.8243 10.784C51.5709 10.144 52.3389 9.824 53.1283 9.824C54.2803 9.824 54.8563 10.8267 54.8563 12.832C54.7496 12.96 54.6003 13.1307 54.4083 13.344C54.2376 13.536 53.8749 13.8133 53.3203 14.176C52.7869 14.5387 52.2643 14.7627 51.7523 14.848C51.7309 14.848 51.5496 14.56 51.2083 13.984C50.8669 13.408 50.6109 13.12 50.4403 13.12C49.9069 13.312 49.4376 13.632 49.0323 14.08C48.0509 18.496 47.5603 21.3547 47.5603 22.656C47.5603 23.1253 47.5709 23.456 47.5923 23.648C46.8456 23.9467 45.3629 24.096 43.1443 24.096ZM60.0805 11.808C60.0805 12.704 59.7925 14.2507 59.2165 16.448C58.6405 18.624 58.3525 20.0533 58.3525 20.736C58.3525 21.3973 58.4485 21.728 58.6405 21.728C58.7685 21.728 59.2592 21.5253 60.1125 21.12L60.4965 20.928L61.0405 22.048C60.8485 22.2187 60.5925 22.432 60.2725 22.688C59.9525 22.944 59.3552 23.296 58.4805 23.744C57.6058 24.1707 56.7952 24.384 56.0485 24.384C55.3018 24.384 54.7152 24.16 54.2885 23.712C53.8618 23.2427 53.6485 22.624 53.6485 21.856C53.6485 21.0667 53.9152 19.68 54.4485 17.696C54.9818 15.6907 55.2485 14.3893 55.2485 13.792C55.2485 12.896 54.9712 12.0533 54.4165 11.264L54.1285 10.88L54.1605 10.464C55.2912 10.144 57.1258 9.984 59.6645 9.984C59.9418 10.304 60.0805 10.912 60.0805 11.808ZM56.4325 6.496C56.0058 6.06933 55.7925 5.504 55.7925 4.8C55.7925 4.096 56.0805 3.47733 56.6565 2.944C57.2538 2.41067 57.9365 2.144 58.7045 2.144C59.4725 2.144 60.0698 2.35733 60.4965 2.784C60.9232 3.21067 61.1365 3.776 61.1365 4.48C61.1365 5.16267 60.8272 5.77067 60.2085 6.304C59.6112 6.83733 58.9392 7.104 58.1925 7.104C57.4458 7.104 56.8592 6.90133 56.4325 6.496ZM62.3352 24.096H61.7272C61.7272 23.0933 62.0259 21.1733 62.6232 18.336C63.2419 15.4987 63.5512 13.888 63.5512 13.504C63.5512 12.8 63.2526 12.0533 62.6552 11.264L62.3672 10.88L62.3992 10.464C63.5512 10.144 65.3966 9.984 67.9352 9.984C68.2126 10.3467 68.3619 11.008 68.3832 11.968C70.2392 10.5387 71.8072 9.824 73.0872 9.824C73.8553 9.824 74.4633 10.0907 74.9113 10.624C75.3806 11.1573 75.6153 11.8293 75.6153 12.64C75.6153 13.4293 75.3699 14.8053 74.8793 16.768C74.3886 18.7307 74.1433 20.0533 74.1433 20.736C74.1433 21.3973 74.2286 21.728 74.3993 21.728C74.5273 21.728 74.9753 21.5253 75.7432 21.12L76.1273 20.928L76.7033 22.048C76.5113 22.2187 76.2552 22.432 75.9353 22.688C75.6152 22.944 75.0179 23.296 74.1433 23.744C73.2899 24.1707 72.5219 24.384 71.8392 24.384C70.2819 24.384 69.5033 23.4987 69.5033 21.728C69.5033 20.9813 69.7379 19.6053 70.2072 17.6C70.6979 15.5947 70.9432 14.304 70.9432 13.728C70.9432 13.152 70.7619 12.864 70.3993 12.864C69.7806 12.864 69.0232 13.1307 68.1272 13.664C68.0632 14.0267 67.8499 14.9867 67.4872 16.544C66.7406 19.8933 66.3672 22.2613 66.3672 23.648C65.6206 23.9467 64.2766 24.096 62.3352 24.096ZM85.2413 29.632C84.4519 30.1653 83.6946 30.5493 82.9693 30.784C82.2439 31.04 81.5399 31.168 80.8573 31.168C80.1746 31.168 79.6199 30.976 79.1933 30.592C78.7666 30.208 78.5533 29.6533 78.5533 28.928C78.5533 28.224 79.0119 27.552 79.9293 26.912C80.8466 26.272 81.7533 25.8347 82.6493 25.6L84.0253 25.28L84.5053 22.72C83.2679 23.6587 82.0733 24.128 80.9213 24.128C79.7906 24.128 78.8626 23.6907 78.1373 22.816C77.4333 21.9413 77.0813 20.544 77.0813 18.624C77.0813 16.1067 77.6466 14.016 78.7773 12.352C79.9079 10.6667 81.4013 9.824 83.2573 9.824C84.3026 9.824 85.3373 10.08 86.3613 10.592C87.4493 10.208 88.6226 10.016 89.8813 10.016L90.5533 10.048C90.6173 10.304 90.6493 10.6667 90.6493 11.136C90.6493 13.0133 89.9773 17.2267 88.6333 23.776C88.3986 25.12 87.9719 26.2933 87.3533 27.296C86.7346 28.32 86.0306 29.0987 85.2413 29.632ZM84.6973 11.712C83.7799 11.712 83.0546 12.4587 82.5213 13.952C81.9879 15.424 81.7213 17.0667 81.7213 18.88C81.7213 20.672 82.1266 21.568 82.9373 21.568C83.4706 21.568 84.0999 21.3653 84.8253 20.96C85.4226 17.376 85.8493 14.4213 86.1053 12.096C85.5079 11.84 85.0386 11.712 84.6973 11.712ZM79.9933 28.864C79.9933 29.2693 80.2279 29.472 80.6973 29.472C81.1879 29.472 81.7213 29.1947 82.2973 28.64C82.8733 28.1067 83.3319 27.4453 83.6733 26.656C82.9693 26.7413 82.1799 26.9973 81.3053 27.424C80.4306 27.872 79.9933 28.352 79.9933 28.864ZM100.951 19.808C100.951 21.152 100.354 22.2507 99.1592 23.104C97.9859 23.9573 96.6419 24.384 95.1272 24.384C93.6126 24.384 92.4072 24.064 91.5112 23.424C90.6366 22.784 90.1992 22.2187 90.1992 21.728C90.1992 21.4293 90.5726 20.9493 91.3192 20.288C92.0659 19.6053 92.6952 19.1893 93.2072 19.04C94.2739 19.8293 95.1486 21.0773 95.8312 22.784C96.6206 22.72 97.0152 22.3467 97.0152 21.664C97.0152 20.6827 96.1512 19.296 94.4232 17.504C92.6952 15.6907 91.8312 14.2507 91.8312 13.184C91.8312 12.1173 92.3112 11.296 93.2712 10.72C94.2312 10.1227 95.3832 9.824 96.7272 9.824C98.0926 9.824 99.1166 10.0693 99.7992 10.56C100.482 11.0293 100.823 11.68 100.823 12.512C100.823 13.3227 100.173 14.4533 98.8712 15.904C99.0206 16.0533 99.2126 16.256 99.4472 16.512C99.6819 16.7467 99.9912 17.2053 100.375 17.888C100.759 18.5707 100.951 19.2107 100.951 19.808ZM97.8792 14.784C98.7752 14.016 99.2232 13.2587 99.2232 12.512C99.2232 11.7653 98.7112 11.392 97.6872 11.392C97.1966 11.392 96.7912 11.4987 96.4712 11.712C96.1512 11.904 95.9912 12.128 95.9912 12.384C95.9912 12.8533 96.4606 13.5147 97.3992 14.368L97.8792 14.784Z"
            fill="black"
          />
        </svg>
      </div>

      <div className="content">
      {items.map((obj) => (
        <Product onAddCart={handleAddCart} key={obj.id} {...obj} />
      ))}
      </div>
    </div>
  );
}

export default Earrings