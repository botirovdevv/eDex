import React, { useEffect } from 'react'
import img from '../../assets/images/achievement.png'
import ScrollReveal from 'scrollreveal';

const Achievement = () => {
  useEffect(() => {
    ScrollReveal().reveal('.achievement-subtitle', {
      duration: 1100,
      delay: 10,
      distance: '20px',
      origin: 'right',
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.achievement-card', {
      duration: 1100,
      delay: 20,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.achievement-img', {
      duration: 1100,
      delay: 20,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: true
    });

    ScrollReveal().reveal('.achievement-svg', {
      duration: 1300,
      delay: 20,
      distance: '200px',
      origin: 'top',
      easing: 'ease-in-out',
      reset: true
    });
  }, [])
  return (
    <section className='achievement'>
      <div className="container">
        <div className="achievement-content">
          <h1 className="backet-title">Our <span className='backet-color'>Achievement</span></h1>
          <p className="achievement-subtitle">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <div className="achievement-items">
            <div className="achievement-cards">
              <div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.375 16.5L22 5.5L42.625 16.5L22 27.5L1.375 16.5Z" stroke="#ED4459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M32.3125 41.25V22L22 16.5" stroke="#ED4459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M37.8125 19.061V28.4454C37.8113 28.7374 37.7147 29.0211 37.5375 29.2532C36.3859 30.8001 31.5047 36.4376 22 36.4376C12.4953 36.4376 7.61406 30.8001 6.4625 29.2532C6.28529 29.0211 6.18873 28.7374 6.1875 28.4454V19.061" stroke="#ED4459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <h1 className="achievement-num">300</h1>
                    <h2 className='achievement-info'>Instructor</h2>
                  </div>
                </div>

                <div className="achievement-card">
                  <div className="achievement-camera_icon">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.125 10.3125H26.125C27.5837 10.3125 28.9826 10.892 30.0141 11.9234C31.0455 12.9549 31.625 14.3538 31.625 15.8125V32.3125C31.625 32.6772 31.4801 33.0269 31.2223 33.2848C30.9644 33.5426 30.6147 33.6875 30.25 33.6875H8.25C6.79131 33.6875 5.39236 33.108 4.36091 32.0766C3.32946 31.0451 2.75 29.6462 2.75 28.1875V11.6875C2.75 11.3228 2.89487 10.9731 3.15273 10.7152C3.41059 10.4574 3.76033 10.3125 4.125 10.3125V10.3125Z" stroke="#FFC27A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M31.625 19.25L41.25 13.75V30.25L31.625 24.75" stroke="#FFC27A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <h1 className="achievement-num">10,000+</h1>
                    <h2 className='achievement-info'>Video</h2>
                  </div>
                </div>

              </div>
              <div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.375 16.5L22 5.5L42.625 16.5L22 27.5L1.375 16.5Z" stroke="#ED4459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M32.3125 41.25V22L22 16.5" stroke="#ED4459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M37.8125 19.061V28.4454C37.8113 28.7374 37.7147 29.0211 37.5375 29.2532C36.3859 30.8001 31.5047 36.4376 22 36.4376C12.4953 36.4376 7.61406 30.8001 6.4625 29.2532C6.28529 29.0211 6.18873 28.7374 6.1875 28.4454V19.061" stroke="#ED4459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <h1 className="achievement-num">20,000+</h1>
                    <h2 className='achievement-info'>Student</h2>
                  </div>
                </div>

                <div className="achievement-card">
                  <div className="achievement-icon">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 30.9375C25.797 30.9375 28.875 27.8595 28.875 24.0625C28.875 20.2655 25.797 17.1875 22 17.1875C18.203 17.1875 15.125 20.2655 15.125 24.0625C15.125 27.8595 18.203 30.9375 22 30.9375Z" stroke="#0075FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M33.6875 19.9375C35.2889 19.9348 36.8688 20.3064 38.3012 21.0226C39.7336 21.7388 40.9788 22.7798 41.9375 24.0625" stroke="#0075FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.0625 24.0625C3.02122 22.7798 4.26642 21.7388 5.69879 21.0226C7.13116 20.3064 8.71106 19.9348 10.3125 19.9375" stroke="#0075FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.1 37.125C13.0055 35.2706 14.4136 33.7078 16.1639 32.6147C17.9142 31.5215 19.9364 30.9419 22 30.9419C24.0636 30.9419 26.0858 31.5215 27.8361 32.6147C29.5864 33.7078 30.9945 35.2706 31.9 37.125" stroke="#0075FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.3125 19.9375C9.2686 19.9386 8.24596 19.6425 7.36406 19.084C6.48217 18.5254 5.77744 17.7274 5.33222 16.7832C4.88701 15.839 4.71969 14.7876 4.84982 13.7519C4.97995 12.7161 5.40216 11.7388 6.0671 10.9341C6.73205 10.1294 7.61228 9.5305 8.60494 9.20747C9.5976 8.88443 10.6617 8.85056 11.6729 9.10982C12.6841 9.36908 13.6006 9.91076 14.3154 10.6716C15.0301 11.4324 15.5136 12.3809 15.7094 13.4062" stroke="#0075FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M28.2906 13.4062C28.4864 12.3809 28.9698 11.4324 29.6846 10.6716C30.3994 9.91076 31.3159 9.36908 32.3271 9.10982C33.3383 8.85056 34.4024 8.88443 35.3951 9.20747C36.3877 9.5305 37.2679 10.1294 37.9329 10.9341C38.5978 11.7388 39.02 12.7161 39.1502 13.7519C39.2803 14.7876 39.113 15.839 38.6678 16.7832C38.2226 17.7274 37.5178 18.5254 36.6359 19.084C35.754 19.6425 34.7314 19.9386 33.6875 19.9375" stroke="#0075FD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>

                  <div>
                    <h1 className="achievement-num">1,00,000+</h1>
                    <h2 className='achievement-info'>Users</h2>
                  </div>
                </div>

              </div>
            </div>

            <div className="achievement-images">
              <img src={img} className='achievement-img' alt="Image" />
              <span className="achievement-stroke">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8781 14.3282L11.7031 20.3094C11.6498 20.453 11.5539 20.5767 11.4282 20.6642C11.3025 20.7516 11.1531 20.7984 11 20.7984C10.8469 20.7984 10.6974 20.7516 10.5718 20.6642C10.4461 20.5767 10.3501 20.453 10.2969 20.3094L8.12186 14.3282C8.08387 14.2251 8.02397 14.1314 7.94627 14.0538C7.86858 13.9761 7.77496 13.9162 7.67186 13.8782L1.69061 11.7032C1.54708 11.6499 1.42329 11.554 1.33587 11.4283C1.24845 11.3026 1.2016 11.1531 1.2016 11C1.2016 10.8469 1.24845 10.6975 1.33587 10.5718C1.42329 10.4461 1.54708 10.3502 1.69061 10.2969L7.67186 8.12192C7.77496 8.08393 7.86858 8.02403 7.94627 7.94634C8.02397 7.86864 8.08387 7.77502 8.12186 7.67192L10.2969 1.69067C10.3501 1.54714 10.4461 1.42335 10.5718 1.33593C10.6974 1.24852 10.8469 1.20166 11 1.20166C11.1531 1.20166 11.3025 1.24852 11.4282 1.33593C11.5539 1.42335 11.6498 1.54714 11.7031 1.69067L13.8781 7.67192C13.9161 7.77502 13.976 7.86864 14.0537 7.94634C14.1314 8.02403 14.225 8.08393 14.3281 8.12192L20.3094 10.2969C20.4529 10.3502 20.5767 10.4461 20.6641 10.5718C20.7515 10.6975 20.7984 10.8469 20.7984 11C20.7984 11.1531 20.7515 11.3026 20.6641 11.4283C20.5767 11.554 20.4529 11.6499 20.3094 11.7032L14.3281 13.8782C14.225 13.9162 14.1314 13.9761 14.0537 14.0538C13.976 14.1314 13.9161 14.2251 13.8781 14.3282V14.3282Z" stroke="#FFC27A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>

              <span className="achievement-svg">
                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.6995 48.6013L44.3147 61.8428C44.3025 62.2322 44.1713 62.6086 43.9389 62.9213C43.7066 63.234 43.384 63.4681 43.0147 63.5922C42.6453 63.7162 42.2469 63.7243 41.8728 63.6152C41.4988 63.5062 41.1671 63.2853 40.9223 62.9822L32.6225 52.6575C32.4473 52.4396 32.2269 52.2623 31.9765 52.1378C31.7262 52.0133 31.4518 51.9446 31.1723 51.9365L17.9308 51.5517C17.5414 51.5395 17.165 51.4083 16.8523 51.1759C16.5396 50.9436 16.3055 50.621 16.1814 50.2517C16.0574 49.8823 16.0493 49.4839 16.1584 49.1098C16.2674 48.7358 16.4883 48.4041 16.7914 48.1592L27.1161 39.8595C27.334 39.6843 27.5113 39.4639 27.6358 39.2135C27.7603 38.9632 27.8289 38.6888 27.837 38.4093L28.2219 25.1678C28.2341 24.7784 28.3653 24.402 28.5976 24.0893C28.83 23.7766 29.1526 23.5425 29.5219 23.4184C29.8913 23.2944 30.2897 23.2863 30.6638 23.3954C31.0378 23.5044 31.3695 23.7253 31.6143 24.0284L39.9141 34.3531C40.0893 34.571 40.3097 34.7483 40.56 34.8728C40.8104 34.9973 41.0848 35.0659 41.3643 35.074L54.6058 35.4589C54.9952 35.4711 55.3716 35.6022 55.6843 35.8346C55.997 36.067 56.2311 36.3896 56.3552 36.7589C56.4792 37.1282 56.4873 37.5267 56.3782 37.9008C56.2692 38.2748 56.0483 38.6065 55.7452 38.8513L45.4205 47.1511C45.2026 47.3263 45.0253 47.5467 44.9008 47.797C44.7763 48.0474 44.7077 48.3218 44.6995 48.6013V48.6013Z" fill="#0075FD" />
                  <path d="M41.0199 9.69531L44.666 20.5511" stroke="#0075FD" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M48.2709 13.3L37.4151 16.946" stroke="#0075FD" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M56.1295 18.7146L58.5601 25.9518" stroke="#0075FD" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M60.9634 21.1174L53.7262 23.5481" stroke="#0075FD" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Achievement