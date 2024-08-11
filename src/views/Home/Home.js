import './Home.css'
import { MdCurrencyBitcoin } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { PiCurrencyEthThin } from "react-icons/pi";
import { MdOutlineCandlestickChart } from "react-icons/md";
import Top100Table from '../../components/HomeTable/HomeTable';



const cardData = [
    {
        id: 1,
        icon: <MdCurrencyBitcoin />,
        title: 'About Crypto',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
        id: 2,
        icon: <PiCurrencyEthThin />,
        title: 'Decentralized',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
        id: 3,
        icon: <FaChartLine />,
        title: 'Community Driven',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    },
    {
        id: 4,
        icon: <MdOutlineCandlestickChart />,
        title: 'Community Driven',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.'
    }
]


function Home() {

    return (
        <main className='main'>
            <section className='sec-1 bg-1'>
                <div className='title-home-1'>
                    <h1>Buy and trade cryptos like never before.</h1>
                </div>
                <div className='subtitle-home-1'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quas iste veniam. Est neque explicabo perspiciatis voluptatem sed corporis soluta necessitatibus magnam! Corporis excepturi quos molestias quod saepe explicabo ex?
                </div>
                <div className='btn-home' id='btn'>
                    <a href="/"><button className="bn632-hover bn20">TRADE NOW</button></a>
                    <a href="/"><button className="btn-home-1">VIEW PRICING</button></a>
                </div>
            </section>
            <section className='sec-2 bg-2'>
                <div className='title-home-2'>
                    <h1>About B-Crypto</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quas iste veniam. Est neque explicabo perspiciatis voluptatem sed corporis soluta necessitatibus magnam! Corporis excepturi quos molestias quod saepe explicabo ex?
                    </p>
                </div>
                <div className='head-2'>
                    <h2>What drives Crypto?</h2>
                </div>


                <div className='card-main'>
                    {
                        cardData.map(card => {
                            return (
                                <div className='card' key={card.id}>
                                    <i className='card-icon card-title'>{card.icon} {card.title}</i>
                                    <p className='card-description'>{card.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className='sec-3 bg-3'>
                <h2 className='head-3'>Top Coins</h2>

            </section>
            <div className='top100T'>
                <Top100Table />
                <p className='p-top100'>The table above highlights the 100 top cryptocurrencies based on their market cap</p>
                <p className='p-top100'>Click a coin for more details.</p>
            </div>
        </main >
    )
}

export default Home;
