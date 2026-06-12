// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


import React from 'react'
// import Card from'./Components/card'
// import Card from "./card";

import Card from "../card";
const App = () => {
  return (
    <div>
    <div className='card'>
      <h1> Ishant Raj </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate quod perspiciatis reprehenderit adipisci quas illo. Ipsam totam autem, dolorem ea aperiam id exercitationem eveniet temporibus sequi voluptatum. Nemo, eos?</p>
    </div>
    <div className='card'>
      <h1> Ishant Raj </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus illum iste distinctio autem quo temporibus nemo facere totam, atque neque, adipisci inventore mollitia libero saepe eligendi excepturi repudiandae, vero a praesentium. Repudiandae animi perspiciatis rem fugiat doloribus ipsa sint maiores accusamus, ipsum, id dolorum consectetur reprehenderit inventore odio, libero voluptate debitis nulla. Numquam vel perferendis maxime quaerat et magnam ab autem ex. Officia quae similique illo veritatis eius. Et qui doloribus, voluptatem sit inventore enim veniam vero dolorem cumque minima. Recusandae, totam dolorem quia tempore fuga nam quidem deleniti pariatur aut aspernatur, neque sint architecto necessitatibus consectetur quae est laudantium maxime quis ipsa? Dicta, perferendis enim dolore vero provident repellat dolores! Itaque minima, mollitia suscipit rerum nemo aliquam harum vitae illo animi esse debitis blanditiis culpa excepturi ullam quasi nulla consequuntur obcaecati dignissimos quos labore est autem velit soluta? Temporibus cupiditate culpa maxime ex corporis iure accusamus, provident quas dolorem molestiae eum quod magnam voluptatem rem accusantium ullam! Inventore fuga rerum dolorum iste magni totam! Ex delectus, adipisci autem omnis obcaecati non rerum. Repellat quidem quam molestias facilis aut veniam. Alias voluptatem vel quasi a necessitatibus pariatur deleniti, excepturi at amet minus, iste ipsam earum deserunt sunt, quas expedita?</p>
    </div>
    {card()}
    </div>
  )
}

export default App
