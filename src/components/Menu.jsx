'use client';

import { allCocktails } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Menu = () => {
 const contentRef = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
 
 const totalCocktails = allCocktails.length;
 
 const goToSlide = (index) => {
	const newIndex = (index + totalCocktails) % totalCocktails;
	
	setCurrentIndex(newIndex);
 }
 
 const getCocktailAt = (indexOffset) => {
	return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
 }
 
 const currentCocktail = getCocktailAt(0);
 const prevCocktail = getCocktailAt(-1);
 const nextCocktail = getCocktailAt(1);
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only">
		Sports Menu
	 </h2>
	 
	 <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
		{allCocktails.map((cocktail, index) => {
		 const isActive = index === currentIndex;
		 
		 return (
			<button key={cocktail.id} className={`
				${isActive
				 ? 'text-white border-white'
				 : 'text-white/50 border-white/50'}
			 `}	onClick={() => goToSlide(index)}
			>
			 {cocktail.name}
			</button>
		 )
		})}
	 </nav>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
			<span>{prevCocktail.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
			<span>{nextCocktail.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail">
		 <img src={currentCocktail.image} className="object-contain w-[500px] h-[500px] md:mr-48"/>
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Details about:</p>
			<p id="title">{currentCocktail.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentCocktail.title}</h2>
			<p>{currentCocktail.description}</p>
		 </div>
		</div>
	 </div>
	 
	 {/* See All Sports Button */}
	 <div className="flex justify-center mt-12">
		<Link 
		  to="/sports" 
		  className="px-8 py-3 bg-[#e7d393] text-black font-bold rounded-lg hover:bg-[#d4a853] transition-all duration-300 text-lg flex items-center"
		>
		  See All Sports
		  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
			<path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
		  </svg>
		</Link>
	 </div>
	</section>
 )
}
export default Menu
