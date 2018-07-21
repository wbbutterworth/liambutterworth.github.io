import React      from 'react';
import Wrapper    from 'components/Wrapper';
import Header     from 'components/Header';
import Section    from 'components/Section';
import Footer     from 'components/Footer';
import Banner     from 'components/Banner';
import Project    from 'components/Project';
import background from 'assets/images/mic-stand.jpg';

const text = {
	static: "Hi, I'm Liam and I",

	dynamic: [
		'make things.',
		'create websites.',
		'play loud music.',
		'drink way too much coffee.',
	],
};

const Home = () => (
	<div>
		<Header />
		<Banner image={ background } staticText={ text.static } dynamicText={ text.dynamic } />

		<main>
			<Wrapper>
				<Section>
					<header><h1 id="about">About</h1></header>

					<p>
						Hi, my name is Liam. Well, actually it’s William, but no one but paychecks and angry
						relatives call me that anymore. I’m a twenty-something year old web developer from
						Tuscaloosa, AL. I enjoy loud music, creative problem solving, and unhealthy amounts of chips and salsa.
					</p>

					<p>
						I became a web developer in 2008 when I was fortunate enough to land a student-worker position at the
						University of Alabama. I’ve been using my accumulated web development skills to avoid starvation ever
						since. Over the course of my career I’ve developed an expertise in Front-End Development using whatever
						tools the industry professionals are drooling over at the time. I enjoy what I do and the people I work
						with. So, if you have a project in mind feel free to&nbsp;
						<a href="mailto:contact@liambutterworth.me">shoot me an email</a>
						&nbsp;or if you’re looking for someone full-time&nbsp;
						<a href="/liambutterworth.pdf">check out my resume</a>.
					</p>

					<p>
						If you’re interested in viewing examples of my work here’s my&nbsp;
						<a href="https://github.com/wbbutterworth">GitHub account</a>.
						I work with all the usual suspects and acronyms; responsive design, cross-browser compatibility,
						RESTful APIs, HTML, CSS, etc.
					</p>
				</Section>

				<Section>
					<header><h1 id="work">Work</h1></header>

					<Project
						icon="laptop"
						title="Keyboard"
						link="https://liambutterworth.me/keyboard"
						tags="JavaScript,React"
					>
						Lorem ipsum delor sit amet
					</Project>

					<Project
						icon="npm"
						title="Bassline"
						link="http://github.com/liambutterworth/postcss-bassline.git"
						tags="JavaScript,PostCSS,Node Module,Mocha"
					>
						I wrote this plugin to make managing vertical rhythm on a website much simpler by abstracting the
						math needed for the font-size and line-height properties. With it you can pass a pixel value reference
						to the font-size() function and it will spit back the correct rem value relative to the base font size.
					</Project>
				</Section>
			</Wrapper>
		</main>

		<Footer />
	</div>
);

export default Home;