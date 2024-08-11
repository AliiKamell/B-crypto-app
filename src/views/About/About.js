import './About.css';


function About() {
    return (
        <div className="about-pg">
            <div className="title-about">
                <h2>About Us</h2>
            </div>
            <div>
                {/* <p className='p-head'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p> */}
            </div>
            <div className="p-about">
                <p>
                    At B-Crypto, we're passionate about providing you with the latest insights, news, and resources to navigate the dynamic world of cryptocurrency. Whether you're a seasoned investor or just starting out, we're here to empower you with knowledge and tools to make informed decisions in the digital asset space.
                </p>
            </div>
            <div className="sub-about">
                <h3>Our Mission</h3>
            </div>
            <div className="p-about">
                <p>Our mission is to demystify cryptocurrency and blockchain technology, making it accessible to everyone. We believe in the transformative potential of decentralized finance and strive to foster a community of learners, innovators, and enthusiasts.</p>
            </div>
            <div className="sub-about">
                <h3>What Sets Us Apart</h3>
            </div>
            <div className="list-about">
                <ul>
                    <li>Expert Analysis: Our team of experienced analysts and researchers curate and deliver high-quality content, including market analysis, project reviews, and educational articles.</li>
                    <li>Unbiased Information: We prioritize objectivity and transparency, providing unbiased information to help you navigate the crypto landscape with confidence.</li>
                    <li>Educational Resources: From beginner's guides to advanced tutorials, we offer a comprehensive range of educational resources to cater to users at all levels of expertise.</li>
                    <li>Community Engagement: Join our vibrant community of crypto enthusiasts, where you can participate in discussions, ask questions, and share insights with like-minded individuals.</li>
                </ul>
            </div>
            <hr />
            <div className='sub-about'>
                <h3>Contact Us</h3>
            </div>
            <div className='input-about'>
                <label htmlFor  ="email">Your Email:</label><br />
                <input type='email' id='email' name='email' placeholder="Enter your email" required></input><br />
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" rows="4" cols="50" className='textarea' placeholder="Please enter your message here." required></textarea><br />
                <input type='submit' value='send' className='btn-about' ></input>
            </div>
        </div>
    )
}

export default About
