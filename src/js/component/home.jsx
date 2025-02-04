import React from "react";

//Importing components
import NavBar from "./navBar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//Importing images
import image1 from "/workspaces/MichPisani-firstPageWithReact/src/img/image1.jpg"
import image2 from "/workspaces/MichPisani-firstPageWithReact/src/img/image2.jpg"
import image8 from "/workspaces/MichPisani-firstPageWithReact/src/img/image8.jpg"
import image10 from "/workspaces/MichPisani-firstPageWithReact/src/img/image10.jpg"



//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<div className= "container-fluid">
			<Jumbotron 
				title="A Warm Welcome!" 
				description="Lorem ipsum dolor sit amet consectetur adipiscing elit tortor pulvinar vestibulum, dictum magnis tristique erat et malesuada nec platea dis tincidunt, condimentum varius fames urna phasellus ac hendrerit euismod fringilla." 
				buttonLabel="Call to action!"
			/>
			<div className= "row">
				<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center ">
					<Card 
						cardImageUrl = {image1}
						cardTitle= "My dog"
						cardDescription= "Not only is the Beagle an excellent hunting dog and loyal companion, it is also happy-go-lucky, funny, and'thanks to its pleading expression'cute. They were bred to hunt in packs, so they enjoy company and are generally easygoing. "
						cardButtonUrl= "#"
						cardButtonLabel= "Learn more!"
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<Card
						cardImageUrl = {image2}
						cardTitle = "My dream trip"
						cardDescription = "Mount Fuji is an active stratovolcano located on the Japanese island of Honshu, with a summit elevation of 3,776.24 m (12,389 ft 3 in). It is the highest mountain in Japan, the second-highest volcano located on an island in Asia"
						cardButtonUrl= "#"
						cardButtonLabel= "Learn more!"
					/>					
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<Card
						cardImageUrl = {image8}
						cardTitle= "Puzzles"
						cardDescription= "A puzzle is a game, problem, or toy that tests a person's ingenuity or knowledge. In a puzzle, the solver is expected to put pieces together (or take them apart) in a logical way, in order to find the solution of the puzzle."
						cardButtonUrl= "#"
						cardButtonLabel= "Learn more!"
					/>					
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
					<Card
						cardImageUrl = {image10}
						cardTitle="Coffee"
						cardDescription= "Coffee is a beverage brewed from roasted, ground coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks."
						cardButtonUrl= "#"
						cardButtonLabel= "Learn more!"
					/>					
				</div>

			</div>
		</div>
		<Footer/>
		</>
		
	);
};

export default Home;
