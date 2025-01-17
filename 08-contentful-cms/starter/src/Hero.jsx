import heroImg from "./assets/hero.svg";

const Hero = () => {
	return (
		<section className='hero'>
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe eligendi illum, corporis quo quia impedit veritatis porro itaque, vitae obcaecati maiores ex voluptatibus omnis. Quia cum necessitatibus explicabo ex ut, voluptates quam praesentium facilis eos fuga quibusdam fugit cumque sit perspiciatis saepe, eaque deleniti excepturi et quae ad ullam.</p>
				</div>
				<div className="image-container">
					<img src={heroImg} alt="hero" className="img" />
				</div>
			</div>
		</section>
	);
}

export default Hero;