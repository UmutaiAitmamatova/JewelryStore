import React from 'react';
import './Bracelet.scss';
import { Product } from '../../components'


const Bracelet = ({ items }) => {
  return (
    <div className="bracelet">
      <div className="bracelet_title">
      <svg width="110" height="35" viewBox="0 0 104 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.608 10.912C15.2693 10.7627 15.9093 10.272 16.528 9.44C17.1467 8.608 17.456 7.57333 17.456 6.336C17.456 5.07733 17.008 4.16 16.112 3.584C15.2373 3.008 13.8827 2.72 12.048 2.72C9.31733 2.72 7.07733 3.24267 5.328 4.288C3.6 5.33333 2.736 6.45333 2.736 7.648C2.736 8.26667 2.97067 8.768 3.44 9.152C3.90933 9.51467 4.37867 9.76 4.848 9.888C4.784 10.72 4.496 11.5093 3.984 12.256C3.152 12.1067 2.384 11.6693 1.68 10.944C0.976 10.1973 0.624 9.23733 0.624 8.064C0.624 5.97333 1.78667 4.24533 4.112 2.88C6.43733 1.49333 9.44533 0.799999 13.136 0.799999C15.9733 0.799999 18.224 1.248 19.888 2.144C21.552 3.04 22.384 4.416 22.384 6.272C22.384 7.72267 21.8827 8.928 20.88 9.888C19.8773 10.848 18.5973 11.5733 17.04 12.064C18.5973 12.2987 19.8347 12.8853 20.752 13.824C22.4587 13.376 24.0373 13.152 25.488 13.152L27.056 13.248C27.0987 13.3973 27.12 13.5467 27.12 13.696C27.12 14.4427 27.0133 15.0293 26.8 15.456C26.224 15.328 25.4453 15.264 24.464 15.264C23.504 15.264 22.64 15.3813 21.872 15.616C22.1493 16.4053 22.288 17.248 22.288 18.144C22.288 20.32 21.6373 22.112 20.336 23.52C19.0347 24.928 17.5413 25.632 15.856 25.632C14.704 25.632 13.744 25.28 12.976 24.576C12.208 23.8933 11.824 22.9013 11.824 21.6C11.824 20.2773 12.304 19.0293 13.264 17.856C14.2453 16.6613 15.44 15.7227 16.848 15.04C16.2933 13.6107 15.3013 12.896 13.872 12.896H13.648C13.52 12.3413 13.552 11.712 13.744 11.008C14.064 11.008 14.352 10.976 14.608 10.912ZM8.4 7.424C8.4 7.01867 8.34667 6.72 8.24 6.528C8.15467 6.336 7.952 6.05867 7.632 5.696L7.664 5.472C8.79467 4.81067 10.2027 4.48 11.888 4.48C12.5493 4.48 13.04 4.53333 13.36 4.64C13.4667 4.85333 13.52 5.312 13.52 6.016C13.52 6.69867 12.9653 9.26933 11.856 13.728C10.768 18.1653 10.128 21.472 9.936 23.648C8.67733 24.0107 7.28 24.192 5.744 24.192C5.38133 24.192 5.11467 24.16 4.944 24.096C5.05067 22.752 5.648 19.9573 6.736 15.712C7.84533 11.4667 8.4 8.704 8.4 7.424ZM15.088 22.912C15.664 22.912 16.176 22.3893 16.624 21.344C17.072 20.2773 17.296 19.0827 17.296 17.76L17.264 17.216C16.4747 17.5147 15.7173 18.0587 14.992 18.848C14.288 19.6373 13.936 20.48 13.936 21.376C13.936 21.9093 14.0533 22.304 14.288 22.56C14.544 22.7947 14.8107 22.912 15.088 22.912ZM24.9272 24.096H24.7032C24.6606 23.9253 24.6392 23.5413 24.6392 22.944C24.6392 22.3253 24.9272 20.6827 25.5032 18.016C26.0792 15.3493 26.3672 13.824 26.3672 13.44C26.3672 12.7787 26.0686 12.0533 25.4712 11.264L25.1832 10.88L25.2152 10.464C26.3672 10.144 28.2126 9.984 30.7512 9.984C31.0072 10.5387 31.1353 11.3173 31.1353 12.32C31.3699 11.936 31.8606 11.424 32.6073 10.784C33.3539 10.144 34.1219 9.824 34.9113 9.824C36.0632 9.824 36.6392 10.8267 36.6392 12.832C36.5326 12.96 36.3832 13.1307 36.1912 13.344C36.0206 13.536 35.6579 13.8133 35.1033 14.176C34.5699 14.5387 34.0473 14.7627 33.5352 14.848C33.5139 14.848 33.3326 14.56 32.9913 13.984C32.6499 13.408 32.3939 13.12 32.2233 13.12C31.6899 13.312 31.2206 13.632 30.8152 14.08C29.8339 18.496 29.3432 21.3547 29.3432 22.656C29.3432 23.1253 29.3539 23.456 29.3752 23.648C28.6286 23.9467 27.1459 24.096 24.9272 24.096ZM44.7755 10.752C44.8182 10.7093 44.9355 10.432 45.1275 9.92C46.1302 9.92 47.4742 10.2187 49.1595 10.816C48.6262 12.5867 48.1995 14.4427 47.8795 16.384C47.5595 18.304 47.3995 19.68 47.3995 20.512C47.3995 21.3227 47.4848 21.728 47.6555 21.728C47.7835 21.728 48.2528 21.5253 49.0635 21.12L49.4475 20.928L50.0235 22.048C49.8315 22.2187 49.5755 22.432 49.2555 22.688C48.9568 22.944 48.3808 23.296 47.5275 23.744C46.6742 24.1707 45.9062 24.384 45.2235 24.384C43.9008 24.384 43.1328 23.7867 42.9195 22.592C41.5542 23.7867 40.3168 24.384 39.2075 24.384C38.1195 24.384 37.1915 23.9573 36.4235 23.104C35.6768 22.2507 35.3035 20.9067 35.3035 19.072C35.3035 16.2133 35.8902 13.9627 37.0635 12.32C38.2368 10.656 39.6555 9.824 41.3195 9.824C42.5142 9.824 43.6662 10.1333 44.7755 10.752ZM41.1275 21.664C41.6395 21.664 42.2155 21.4613 42.8555 21.056C43.0048 18.048 43.5062 15.072 44.3595 12.128C43.7195 11.8507 43.1755 11.712 42.7275 11.712C41.9595 11.712 41.2982 12.4693 40.7435 13.984C40.2102 15.4773 39.9435 17.1307 39.9435 18.944C39.9435 20.7573 40.3382 21.664 41.1275 21.664ZM57.2705 11.424C56.4172 11.424 55.7345 12.1387 55.2225 13.568C54.7105 14.976 54.4545 16.4907 54.4545 18.112C54.4545 20.672 55.2438 21.952 56.8225 21.952C57.3345 21.952 57.8785 21.8347 58.4545 21.6C59.0305 21.344 59.4892 21.0987 59.8305 20.864L60.3105 20.48L61.0465 21.472C60.8758 21.7067 60.5345 22.016 60.0225 22.4C59.5105 22.784 59.0305 23.104 58.5825 23.36C58.1345 23.616 57.5585 23.8507 56.8545 24.064C56.1505 24.2773 55.4572 24.384 54.7745 24.384C53.1105 24.384 51.8625 23.84 51.0305 22.752C50.1985 21.664 49.7825 20.2027 49.7825 18.368C49.7825 15.8293 50.4758 13.7707 51.8625 12.192C53.2705 10.6133 55.0732 9.824 57.2705 9.824C58.6998 9.824 59.8305 10.1547 60.6625 10.816C61.5158 11.456 61.9425 12.256 61.9425 13.216C61.9425 14.1547 61.6438 14.9653 61.0465 15.648C60.5132 15.648 59.8945 15.5307 59.1905 15.296C58.4865 15.0613 57.9532 14.7733 57.5905 14.432L58.0705 11.616C57.8785 11.488 57.6118 11.424 57.2705 11.424ZM61.7972 18.464C61.7972 15.7973 62.5972 13.696 64.1972 12.16C65.8186 10.6027 67.6532 9.824 69.7012 9.824C70.9599 9.824 71.9946 10.1333 72.8052 10.752C73.6159 11.3707 74.0212 12.2027 74.0212 13.248C74.0212 14.272 73.7546 15.136 73.2212 15.84C72.7092 16.544 72.0799 17.088 71.3332 17.472C69.8186 18.2187 68.4319 18.688 67.1732 18.88L66.4052 18.976C66.5546 20.9813 67.3759 21.984 68.8692 21.984C69.3812 21.984 69.9252 21.856 70.5012 21.6C71.0772 21.344 71.5252 21.088 71.8452 20.832L72.3252 20.448L73.0932 21.472C72.9226 21.7067 72.5812 22.016 72.0692 22.4C71.5572 22.784 71.0772 23.104 70.6292 23.36C69.3919 24.0427 68.0372 24.384 66.5652 24.384C65.0932 24.384 63.9306 23.8613 63.0772 22.816C62.2239 21.7707 61.7972 20.32 61.7972 18.464ZM66.3732 17.408C67.4612 17.216 68.3252 16.7573 68.9652 16.032C69.6052 15.3067 69.9252 14.368 69.9252 13.216C69.9252 12.064 69.5839 11.488 68.9012 11.488C68.0906 11.488 67.4612 12.1813 67.0132 13.568C66.5866 14.9333 66.3732 16.2133 66.3732 17.408ZM76.4665 24.384C75.7412 24.384 75.1332 24.1387 74.6425 23.648C74.1732 23.1573 73.9385 22.4747 73.9385 21.6C73.9385 20.704 74.4612 17.8773 75.5065 13.12C76.5732 8.34133 77.1065 4.896 77.1065 2.784L76.9145 1.376C78.5785 0.799999 80.1358 0.511999 81.5865 0.511999C81.7998 0.810666 81.9065 1.33333 81.9065 2.08C81.9065 3.78667 81.3625 7.09333 80.2745 12C79.2078 16.8853 78.6745 19.7333 78.6745 20.544C78.6745 21.3333 78.7705 21.728 78.9625 21.728L81.2025 20.928L81.7785 22.048C81.0532 22.624 80.1678 23.1573 79.1225 23.648C78.0985 24.1387 77.2132 24.384 76.4665 24.384ZM81.6705 18.464C81.6705 15.7973 82.4705 13.696 84.0705 12.16C85.6918 10.6027 87.5265 9.824 89.5745 9.824C90.8332 9.824 91.8678 10.1333 92.6785 10.752C93.4892 11.3707 93.8945 12.2027 93.8945 13.248C93.8945 14.272 93.6278 15.136 93.0945 15.84C92.5825 16.544 91.9532 17.088 91.2065 17.472C89.6918 18.2187 88.3052 18.688 87.0465 18.88L86.2785 18.976C86.4278 20.9813 87.2492 21.984 88.7425 21.984C89.2545 21.984 89.7985 21.856 90.3745 21.6C90.9505 21.344 91.3985 21.088 91.7185 20.832L92.1985 20.448L92.9665 21.472C92.7958 21.7067 92.4545 22.016 91.9425 22.4C91.4305 22.784 90.9505 23.104 90.5025 23.36C89.2652 24.0427 87.9105 24.384 86.4385 24.384C84.9665 24.384 83.8038 23.8613 82.9505 22.816C82.0972 21.7707 81.6705 20.32 81.6705 18.464ZM86.2465 17.408C87.3345 17.216 88.1985 16.7573 88.8385 16.032C89.4785 15.3067 89.7985 14.368 89.7985 13.216C89.7985 12.064 89.4572 11.488 88.7745 11.488C87.9638 11.488 87.3345 12.1813 86.8865 13.568C86.4598 14.9333 86.2465 16.2133 86.2465 17.408ZM103.892 10.208C103.849 10.7413 103.668 11.36 103.348 12.064C102.537 11.9787 101.769 11.936 101.044 11.936H100.468C99.4864 16.6933 98.9957 19.6587 98.9957 20.832C98.9957 21.4507 99.1237 21.76 99.3797 21.76C99.6571 21.76 100.372 21.4933 101.524 20.96L102.1 22.016C100.201 23.5947 98.4411 24.384 96.8197 24.384C96.0731 24.384 95.4544 24.1493 94.9637 23.68C94.4944 23.2107 94.2597 22.592 94.2597 21.824C94.2597 21.0347 94.3451 20.1493 94.5157 19.168C94.7077 18.1867 94.9637 16.992 95.2837 15.584C95.6037 14.1547 95.8384 13.0027 95.9877 12.128C95.1984 12.192 94.6117 12.256 94.2277 12.32C94.1851 12.064 94.1637 11.7227 94.1637 11.296C94.1637 10.848 94.1957 10.4853 94.2597 10.208H96.2757C96.4464 9.056 96.5317 7.968 96.5317 6.944L96.4997 5.952V5.856C98.1637 5.28 99.7317 4.992 101.204 4.992C101.289 5.41867 101.332 5.952 101.332 6.592C101.332 7.232 101.15 8.43733 100.788 10.208H103.892Z" fill="black"/>
</svg>
      </div>
      
      <div className="content">
      {
        items.map((obj) => (
          <Product key={obj.id} {...obj} />
        ))
      }
      </div>
    </div>
  )
}

export default Bracelet