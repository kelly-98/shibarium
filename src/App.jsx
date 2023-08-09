import { MdEast } from "react-icons/md";
import {
  FaTwitter,
  FaTelegramPlane,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { PiRedditLogoFill } from "react-icons/pi";
import ImageLogo from "./assets/images/img-logo.svg";
import ImagePhone from "./assets/images/img-phone.svg";
import ImageShiba from "./assets/images/img-shiba.svg";
import ImageSniper from "./assets/images/img-lightning-sniper.svg";
import ImageExchanges from "./assets/images/img-multiple-exchanges.svg";
import ImagePrivate from "./assets/images/img-private-node.svg";
import ImageDiamond from "./assets/images/img-diamond.svg";
import ImageVector from "./assets/images/icon-vector.svg";
import ImageTrading from "./assets/images/img-trading.svg";
import IconConnect from "./assets/images/icon-connect.svg";
import IconResearch from "./assets/images/icon-research.svg";
import IconEllippse from "./assets/images/icon-ellipse.svg";
import IconTriangle from "./assets/images/icon-triangle.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="page-header">
        <div className="container">
          <img src={ImageLogo} alt="logo" />
          <nav className="header-menu">
            <ul>
              <li>
                <a>Documentations</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Ecosystem</a>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            <span>Get $SBOT</span>
            <MdEast />
          </div>
        </div>
      </header>
      <main className="page-main">
        <section className="section-intro">
          <div className="container">
            <div className="left-content">
              <h1 className="title">Easy to trade on Shibarium.</h1>
              <p className="content">
                The first trading BOT on Shibarium. Lightning speed and
                professional trading features.
              </p>
            </div>
            <div className="right-content">
              <img src={ImagePhone} alt="" />
            </div>
          </div>
        </section>
        <section className="section-vision">
          <div className="container">
            <div className="left-content">
              <p className="content-top">OUR VISION ON SHIBARIUM</p>
              <h3 className="title">
                Create a new universe of trading services.
              </h3>
              <p className="content-bottom">
                Provide a suite of crypto-related tools to Shibarium users on
                Telegram through sniper bots, wallet trackers, transaction
                monitors, and more. Our vision is to create a responsive
                ecosystem for enthusiasts to trade crypto directly on Telegram.
              </p>
              <div className="actions">
                <button className="btn-left">
                  Resources
                  <MdEast />
                </button>
                <button className="btn-right">
                  Documentations
                  <MdEast />
                </button>
              </div>
            </div>
            <div className="right-content">
              <div className="content-top">
                <h3>20+</h3>
                <p>Trading services, and growing</p>
              </div>
              <div className="content-bottom">
                <h3>1M+</h3>
                <p>Users on Shibarium, and growing</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-ecosystem">
          <div className="container">
            <p className="section-title">Enter the ECOSYSTEM</p>
            <div className="content-top">
              <h3>The heart of Shibarium BOT</h3>
              <p>
                Core services create a complete ecosystem that effectively
                supports Shibarium traders using Telegram as a trading tool.
              </p>
            </div>
            <div className="content-bottom">
              <img src={ImageShiba} alt="" />
              <div className="core-boxes">
                <div className="box">
                  <div className="box-img">
                    <img src={ImageTrading} alt="" />
                  </div>
                  <h3>Smart Trading</h3>
                  <p>
                    Allows investors to buy, sell and monitor price changes for
                    free. We offer impeccable speed, unmatched versatility, and
                    excellent accessibility.
                  </p>
                </div>
                <div className="box">
                  <div className="box-img">
                    <img src={ImageSniper} alt="" />
                  </div>
                  <h3>Lightning Sniper</h3>
                  <p>
                    By optimizing the GAS price and bundles combined with
                    on-chain private threading algorithms, buy orders are always
                    completed in the first block.
                  </p>
                </div>
                <div className="box">
                  <div className="box-img">
                    <img src={ImagePrivate} alt="" />
                  </div>
                  <h3>Private Node</h3>
                  <p>
                    A private node designed specifically for users offers
                    exceptional speed and high privacy. At the same time, avoid
                    the risk of price slippage when the number of transactions
                    increases dramatically.
                  </p>
                </div>
                <div className="box">
                  <div className="box-img custom-size">
                    <img src={ImageExchanges} alt="" />
                  </div>
                  <h3>Multiple Exchanges</h3>
                  <p>
                    Enjoy the flexibility to trade on various platforms without
                    switching between different interfaces, streamlining your
                    trading experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="action">
              <button className="btn-trade">
                Trade Now
                <MdEast />
              </button>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="container">
            <div className="section-top">
              <h3>
                Be part of the open
                <br /> economy of the future.
              </h3>
              <p>
                Powerful features
                <MdEast />
              </p>
            </div>
            <div className="section-bottom">
              <div className="content-left">
                <div className="box-chain box-feature">
                  <p className="box-title">Cross-chain Bridge</p>
                  <div className="box-img">
                    <img src={ImageDiamond} alt="" />
                    <img src={ImageVector} alt="" />
                  </div>
                  <h3>Transfer assets from cross-chain on the same wallet.</h3>
                  <p className="text-bottom">Coming soon</p>
                </div>
              </div>
              <div className="content-right">
                <div className="box-exchange box-feature">
                  <p className="box-title">Decentralized Exchange</p>
                  <h3>Swap tokens & collectibles.</h3>
                  <p className="text-bottom">Coming soon</p>
                </div>
                <div className="box-row">
                  <div className="box-farm box-feature">
                    <p className="box-title">Yield Farm</p>
                    <h3>Provide liquidity and earn rewards.</h3>
                    <p className="text-bottom">Coming soon</p>
                  </div>
                  <div className="box-sniper box-feature">
                    <p className="box-title">NFT sniper Bot</p>
                    <h3>Early Mint & Early Own.</h3>
                    <p className="text-bottom">Coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-values">
          <div className="container">
            <p className="section-title">Our values</p>
            <div className="row justify-between">
              <div className="left-content">
                <h3>Lightning sniper Bot on Shibarium.</h3>
                <p className="content-1">
                  Uses advanced AI algorithms on blockchain and high-speed
                  stream to monitor smart contract activity and give early
                  warnings of contract risk even if it is unverified.
                </p>
                <p className="content-2">
                  Automatically detects and interacts with the Smart Contract as
                  soon as it takes the action defined.
                </p>
                <div className="info-values">
                  <p className="info-title">Low fees</p>
                  <p className="value">$0.01</p>
                </div>
              </div>
              <div className="right-content justify-between">
                <div className="info-values">
                  <p className="info-title">Proof-of-transaction</p>
                  <p className="value row align-center">
                    99% <span>First block transactions</span>
                  </p>
                  <p className="note">
                    The earliest interaction with smart contracts.
                  </p>
                </div>
                <div className="info-values">
                  <p className="info-title">Fast transactions</p>
                  <p className="value">0.01 sec</p>
                  <p className="note">
                    Transactions confirmed in milliseconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-journey">
          <div className="container">
            <h3 className="section-title">Join the journey.</h3>
            <div className="journey-list">
              <div className="journey-item">
                <p className="title">connect</p>
                <div className="column-between">
                  <div>
                    <h3 className="sub-title">
                      Connect wallet
                      <span>
                        <MdEast />
                      </span>
                    </h3>
                    <p className="content">
                      Connect your Web3 wallet to our platform through Telegram.
                      Easy and safe with PCI DSS security certificate.
                    </p>
                  </div>
                  <img src={IconConnect} alt="" />
                </div>
              </div>
              <div className="journey-item">
                <p className="title">Research</p>
                <div className="column-between">
                  <div>
                    <h3 className="sub-title">
                      Start research
                      <span>
                        <MdEast />
                      </span>
                    </h3>
                    <p className="content">
                      Do your own research on potential upcoming tokens on
                      Shibarium through blockchain platforms.
                    </p>
                  </div>
                  <img src={IconResearch} alt="" />
                </div>
              </div>
              <div className="journey-item">
                <p className="title">Trade</p>
                <div className="column-between">
                  <div>
                    <h3 className="sub-title">
                      Trade with Bot
                      <span>
                        <MdEast />
                      </span>
                    </h3>
                    <p className="content">
                      Use powerful indicator tools to check the security of
                      smart contracts and earn profits through Shibarium Bot.
                    </p>
                  </div>
                  <div className="">
                    <img src={IconEllippse} alt="" />
                    <img src={IconTriangle} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-community">
          <div className="container">
            <div className="left-content">
              <h3>Meet the passionate community.</h3>
              <p>
                Become part of a rapidly expanding community of visionaries and
                traders from across the globe, collaborating to shape the future
                of the blockchain in this new era of innovation.
              </p>
            </div>
            <div className="right-content">
              <ul>
                <li className="row">
                  <FaTelegramPlane color="#fff" size={32} />
                  <div className="content">
                    <h4>
                      Community Chat
                      <span>
                        <MdEast />
                      </span>
                    </h4>
                    <p>
                      Ask general questions and chat with the most active
                      community on Telegram.
                    </p>
                  </div>
                </li>
                <li className="row">
                  <FaTwitter color="#fff" size={32} />
                  <div className="content">
                    <h4>
                      Twitter
                      <span>
                        <MdEast />
                      </span>
                    </h4>
                    <p>
                      Follow us to get the latest news and updates from the
                      developer team.
                    </p>
                  </div>
                </li>
                <li className="row">
                  <IoLogoDiscord color="#fff" size={32} />
                  <div className="content">
                    <h4>
                      Developer Chat
                      <span>
                        <MdEast />
                      </span>
                    </h4>
                    <p>
                      Have technical questions about Shibarium Bot? Ask a
                      developer on the Community Discord.
                    </p>
                  </div>
                </li>
                <li className="row">
                  <FaMedium color="#fff" size={32} />
                  <div className="content">
                    <h4>
                      Community Blog
                      <span>
                        <MdEast />
                      </span>
                    </h4>
                    <p>
                      Learning about becoming an intelligent investor or
                      interested in Shibarium Bot's mission? Read our blog.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section-enter-ecosystem">
          <div className="container">
            <h3>Enter the Ecosystem</h3>
            <p>
              Whether you’re a developer, token holder, or new to it all,
              there’s a place for everyone in the completed Ecosystem.
            </p>
            <div className="list-system">
              <div className="item">
                <p className="title">Trade</p>
                <p className="sub-title">
                  Fast and safe sniper Bot <MdEast />
                </p>
                <p className="des">
                  Powerful toolkit on Telegram - the flagship crypto platform.
                  Best support for Shibarium users in trading.
                </p>
              </div>
              <div className="item">
                <p className="title">Trade</p>
                <p className="sub-title">
                  Fast and safe sniper Bot <MdEast />
                </p>
                <p className="des">
                  Powerful toolkit on Telegram - the flagship crypto platform.
                  Best support for Shibarium users in trading.
                </p>
              </div>
              <div className="item">
                <p className="title">Trade</p>
                <p className="sub-title">
                  Fast and safe sniper Bot <MdEast />
                </p>
                <p className="des">
                  Powerful toolkit on Telegram - the flagship crypto platform.
                  Best support for Shibarium users in trading.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-become-partner">
          <div className="container row justify-center">
            <div className="left-content">
              <h3>Become our partner.</h3>
              <p>contact@shibariumbot.app</p>
            </div>
            <div className="right-content">
              <input placeholder="Your message..." type="text" />
              <MdEast size={32} color="#666" />
            </div>
          </div>
        </section>
      </main>
      <footer className="page-footer">
        <div className="container">
          <div className="main-footer">
            <ul>
              <li>
                <a href="">Learn</a>
              </li>
              <li>
                <a href="">Introduction</a>
              </li>
              <li>
                <a href="">How to use</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Passive earn</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Toolkits</a>
              </li>
              <li>
                <a href="">Trading Bot</a>
              </li>
              <li>
                <a href="">Sniper Bot</a>
              </li>
              <li>
                <a href="">Token tracker</a>
              </li>
              <li>
                <a href="">Trading monitor</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Explore</a>
              </li>
              <li>
                <a href="">Tokens</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Exchange</a>
              </li>
              <li>
                <a href="">Explore</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Participate</a>
              </li>
              <li>
                <a href="">Telegram</a>
              </li>
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Medium</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Ecosystem</a>
              </li>
              <li>
                <a href="">Statistics</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>Copyright 2023, All Rights Reserved</p>
            <ul>
              <li>
                <FaMedium size={24} color="rgba(255, 255, 255, 1)" />
              </li>
              <li>
                <FaTwitter size={24} color="rgba(255, 255, 255, 1)" />
              </li>
              <li>
                <PiRedditLogoFill size={24} color="rgba(255, 255, 255, 1)" />
              </li>
              <li>
                <FaTelegramPlane size={24} color="rgba(255, 255, 255, 1)" />
              </li>
              <li>
                <IoLogoDiscord size={24} color="rgba(255, 255, 255, 1)" />
              </li>
              <li>
                <FaYoutube size={24} color="rgba(255, 255, 255, 1)" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
