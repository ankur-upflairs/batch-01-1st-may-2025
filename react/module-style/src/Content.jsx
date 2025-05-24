
var bodyText=["The smaller your reality, the more convinced you are that you know everything.", "If the facts don't fit the theory, change the facts.", "The past has no power over the present moment.", "This, too, will pass.", "</p><p>You will not be punished for your anger, you will be punished by your anger.", "Peace comes from within. Do not seek it without.", "<h3>Heading</h3><p>The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now."]
		function generateText(sentenceCount){
            let text= ''
			for (var i=0; i<sentenceCount; i++)
			text+=bodyText[Math.floor(Math.random()*7)]+" "
            return text
		}


export let SideBar = () => {
  return <nav id="left" class="column">
			<h3>Left heading</h3>
			<ul>
				<li><a href="#">Link 1</a></li>
				<li><a href="#">Link 2</a></li>
				<li><a href="#">Link 3</a></li>
				<li><a href="#">Link 4</a></li>
				<li><a href="#">Link 5</a></li>
			</ul>
			<h3>Left heading</h3>
			<ul>
				<li><a href="#">Link 1</a></li>
				<li><a href="#">Link 2</a></li>
				<li><a href="#">Link 3</a></li>
				<li><a href="#">Link 4</a></li>
				<li><a href="#">Link 5</a></li>
			</ul>

		</nav>;
};
export function Content() {
  return <div id="container">

		<main id="center" class="column">
			<article>
			
				<h1>Heading</h1>
				<p dangerouslySetInnerHTML={{__html:generateText(50)}}></p>
			
			</article>								
		</main>

		<SideBar/>

		<div id="right" class="column">
			<h3>Right heading</h3>
			<p>{generateText(1)}</p>
		</div>

	</div>

}




// export {SideBar,Content}