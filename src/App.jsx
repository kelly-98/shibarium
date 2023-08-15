import { MdEast } from "react-icons/md";
import {
  FaTwitter,
  FaTelegramPlane,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { PiRedditLogoFill } from "react-icons/pi";
import ImageHB1 from "./assets/images/h-b-1.svg";
import ImageHB2 from "./assets/images/h-b-2.svg";
import ImageHB3 from "./assets/images/h-b-3.svg";
import ImageHB4 from "./assets/images/h-b-4.svg";
import ImageHB5 from "./assets/images/h-b-5.svg";
import ImageH1 from "./assets/images/h-1.svg";
import ImageH2 from "./assets/images/h-2.svg";
import ImageH3 from "./assets/images/h-3.svg";
import ImageH4 from "./assets/images/h-4.svg";
import ImageH5 from "./assets/images/h-5.svg";
import ImageH6 from "./assets/images/h-6.svg";
import ImageH7 from "./assets/images/h-7.svg";
import ImageH8 from "./assets/images/h-8.svg";
import ImageH9 from "./assets/images/h-9.svg";
import ImageH10 from "./assets/images/h-10.svg";
import ImageHMain from "./assets/images/img-circle.svg";

import E1 from "./assets/images/e-1.svg";
import E2 from "./assets/images/e-2.svg";
import EB1 from "./assets/images/e-b-1.svg";
import EB2 from "./assets/images/e-b-2.svg";
import EB3 from "./assets/images/e-b-3.svg";
import EB4 from "./assets/images/e-b-4.svg";
import EB5 from "./assets/images/e-b-5.svg";

import Value1 from "./assets/images/value-1.svg";
import Value2 from "./assets/images/value-2.svg";
import Value3 from "./assets/images/value-3.svg";

import ImageLogo from "./assets/images/img-logo.svg";
import ImagePhone from "./assets/images/img-phone.svg";
import ImageShiba from "./assets/images/img-shiba.svg";
import ImageSniper from "./assets/images/img-lightning-sniper.svg";
import ImageExchanges from "./assets/images/img-multiple-exchanges.svg";
import ImagePrivate from "./assets/images/img-private-node.svg";
import ImageDiamond from "./assets/images/img-diamond.svg";
import ImageVector from "./assets/images/icon-vector.svg";
import BoxExchange from "./assets/images/box-exchange.svg";
import BoxExchangeHover from "./assets/images/box-exchange-hover.svg";
import ImageVectorHover from "./assets/images/icon-vector-hover.svg";
import ImageTrading from "./assets/images/img-trading.svg";
import IconConnect from "./assets/images/icon-connect.svg";
import IconResearch from "./assets/images/icon-research.svg";
import IconEllippse from "./assets/images/icon-ellipse.svg";
import IconTriangle from "./assets/images/icon-triangle.svg";
import ImageEcoEarn from "./assets/images/img-eco-earn.svg";
import IconEcoEarn from "./assets/images/icon-eco-earn.svg";
import IconCoin from "./assets/images/icon-coin.svg";
import IconCoin1 from "./assets/images/icon-coin-1.svg.svg";
import IconCoin2 from "./assets/images/icon-coin-2.svg.svg";
import IconCoin3 from "./assets/images/icon-coin-3.svg.svg";
import ImageEarth1 from "./assets/images/img-earth-1.svg";
import ImageEarth2 from "./assets/images/img-earth-2.svg";
import ImageBone from "./assets/images/img-bone.svg";
import ImageDiscoverBg from "./assets/images/img-bg-discover.svg";
import ImageBgJourney from "./assets/images/img-bg-section-journey2.svg";
import ImageEarthJourney from "./assets/images/img-earth-journey.svg";
import ImageBgJourney2 from "./assets/images/img-bg-section-journey.svg";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

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
          <a className="header-right">
            <span>Get $SBOT</span>
            <MdEast />
          </a>
        </div>
      </header>

      <main className="page-main">
        <section className="section-intro">
          <div className="intro-p intro-p-main">
            <img src={ImageHMain} alt="" />
          </div>

          <div className="intro-p intro-p-b-1">
            <img src={ImageHB1} alt="" />
          </div>

          <div className="intro-p intro-p-b-4">
            <img src={ImageHB4} alt="" />
          </div>
          <div className="intro-p intro-p-b-4 intro-p-b-4-2">
            <img src={ImageHB4} alt="" />
          </div>

          <div className="intro-p intro-p-b-4 intro-p-b-4-3">
            <img src={ImageHB4} alt="" />
          </div>

          <div className="intro-p intro-p-b-2">
            <img src={ImageHB2} alt="" />
          </div>

          <div className="intro-p intro-p-b-3">
            <img src={ImageHB3} alt="" />
          </div>

          <div className="intro-p intro-p-b-5">
            <img src={ImageHB5} alt="" />
          </div>

          <div className="intro-p intro-p-1">
            <img src={ImageH1} alt="" />
          </div>

          <div className="intro-p intro-p-2">
            <img src={ImageH2} alt="" />
          </div>

          <div className="intro-p intro-p-3">
            <img src={ImageH3} alt="" />
          </div>

          <div className="intro-p intro-p-4">
            <img src={ImageH4} alt="" />
          </div>

          <div className="intro-p intro-p-5">
            <img src={ImageH5} alt="" />
          </div>

          <div className="intro-p intro-p-6">
            <img src={ImageH6} alt="" />
          </div>

          <div className="intro-p intro-p-7">
            <img src={ImageH7} alt="" />
          </div>

          <div className="intro-p intro-p-8">
            <img src={ImageH8} alt="" />
          </div>

          <div className="intro-p intro-p-9">
            <img src={ImageH9} alt="" />
          </div>

          <div className="intro-p intro-p-10">
            <img src={ImageH10} alt="" />
          </div>

          <div className="container">
            <div data-aos="fade-right" className="left-content">
              <h1 className="title">Easy to trade on Shibarium.</h1>
              <p className="content">
                The first trading BOT on Shibarium. Lightning speed and
                professional trading features.
              </p>
            </div>
            <div data-aos="fade-left" className="right-content">
              <img src={ImagePhone} alt="" />
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="section-vision">
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
                <a className="btn-left">
                  Resources
                  <MdEast />
                </a>
                <a className="btn-right">
                  Documentations
                  <MdEast />
                </a>
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
          <div className="ecosystem-p ecosystem-p-main">
            <img src={ImageHMain} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-1">
            <img src={E1} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-2">
            <img src={E2} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-b-1">
            <img src={EB1} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-b-2">
            <img src={EB2} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-b-3">
            <img src={EB3} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-b-4">
            <img src={EB4} alt="" />
          </div>
          <div className="ecosystem-p ecosystem-p-b-5">
            <img src={EB5} alt="" />
          </div>

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
              <div className="content-bottom-left rotate" data-aos="fade-up">
                <img src={ImageShiba} alt="" />
              </div>
              <div className="core-boxes">
                <div className="box" data-aos="fade-right">
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
                <div className="box" data-aos="fade-left">
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
                <div className="box" data-aos="fade-right">
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
                <div className="box" data-aos="fade-left">
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
              <a className="btn-trade">
                Trade Now
                <MdEast />
              </a>
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
              <div className="content-left" data-aos="fade-right">
                <div className="box-chain box-feature">
                  <p className="box-title">Cross-chain Bridge</p>
                  <div className="box-img">
                    <div className="box-img-1">
                      <img src={ImageDiamond} alt="" />
                    </div>
                    <div className="box-img-2">
                      <img src={ImageVectorHover} alt="" />
                    </div>
                  </div>
                  <h3>Transfer assets from cross-chain on the same wallet.</h3>
                  <p className="text-bottom">Coming soon</p>
                </div>
              </div>
              <div className="content-right">
                <div className="box-exchange box-feature" data-aos="fade-left">
                  <p className="box-title">Decentralized Exchange</p>
                  <h3>Swap tokens & collectibles.</h3>
                  <p className="text-bottom">Coming soon</p>

                  <div className="box-exchange-img">
                    <img
                      className="box-exchange-img-not-hover"
                      src={BoxExchange}
                      alt=""
                    />
                    <img
                      className="box-exchange-img-hover"
                      src={BoxExchangeHover}
                      alt=""
                    />
                  </div>
                </div>
                <div className="box-row" data-aos="fade-up">
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

        <section data-aos="fade-up" className="section-values">
          <div className="value-p value-p-1">
            <img src={Value2} alt="" />
          </div>
          <div className="value-p value-p-2">
            <img src={Value1} alt="" />
          </div>
          <div className="value-p value-p-3">
            <img src={Value3} alt="" />
          </div>

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
          <div className="img-section-journey">
            <img src={ImageBgJourney} alt="" />
          </div>
          <div className="img-section-journey-2">
            <img src={ImageBgJourney2} alt="" />
          </div>
          <div className="img-section-journey-3">
            <img src={ImageBgJourney2} alt="" />
          </div>
          <div className="img-section-journey-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="864"
              height="562"
              viewBox="0 0 864 562"
              fill="none"
            >
              <path
                d="M244.483 278.541C223.684 307.671 214.739 334.428 218.815 355.044C222.883 375.622 239.742 389.128 267.135 393.6C294.537 398.075 331.046 393.269 371.508 379.836C411.966 366.404 454.308 345.034 492.547 318.744C530.787 292.455 562.979 262.582 584.58 233.352C606.186 204.116 616.073 177.042 612.93 155.948C611.358 145.413 606.575 136.626 598.861 129.834C591.143 123.039 580.48 118.227 567.142 115.657C540.455 110.524 504.45 114.651 464.206 127.486M249.203 230.642C193.77 275.2 155.989 320.517 142.615 358.425C135.931 377.374 135.573 393.825 141.229 407.166C146.883 420.504 158.566 430.779 176.055 437.344C211.052 450.481 266.922 447.869 333.634 429.917C400.334 411.968 473.443 379.878 539.794 339.423C606.146 298.966 661.364 252.812 695.515 209.276C712.589 187.509 723.829 167.12 729.002 148.972C734.176 130.823 733.28 114.931 726.116 102.124C718.953 89.3173 705.733 79.9726 687.283 74.3722C668.827 68.7801 645.16 66.9369 617.138 69.1294C561.091 73.5192 491.375 93.7413 420.535 126.178M10.2303 519.633C58.0374 600.799 285.68 559.7 518.685 427.837C751.689 295.974 901.819 123.281 854.016 42.1166C806.207 -39.0505 578.566 2.04479 345.56 133.91C112.556 265.773 -37.5768 438.467 10.2303 519.633Z"
                stroke="white"
                stroke-opacity="0.2"
                stroke-width="0.922546"
              />
            </svg>
          </div>
          <div className="img-earth-journey">
            <img src={ImageEarthJourney} alt="" />
          </div>
          <div className="container">
            <h3 className="section-title">Join the journey.</h3>
            <div className="journey-list">
              <div className="journey-item" data-aos="fade-up">
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
                  <div className="journey-item-hover-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <path
                        d="M4.08824 30.1999C5.79383 30.1999 7.17648 28.8173 7.17648 27.1117C7.17648 25.4061 5.79383 24.0234 4.08824 24.0234C2.38265 24.0234 1 25.4061 1 27.1117C1 28.8173 2.38265 30.1999 4.08824 30.1999Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M27.9115 30.1999C29.6171 30.1999 30.9997 28.8173 30.9997 27.1117C30.9997 25.4061 29.6171 24.0234 27.9115 24.0234C26.2059 24.0234 24.8232 25.4061 24.8232 27.1117C24.8232 28.8173 26.2059 30.1999 27.9115 30.1999Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M16.0003 8.13742C17.7059 8.13742 19.0886 6.75477 19.0886 5.04918C19.0886 3.34359 17.7059 1.96094 16.0003 1.96094C14.2948 1.96094 12.9121 3.34359 12.9121 5.04918C12.9121 6.75477 14.2948 8.13742 16.0003 8.13742Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M14.0242 8.57422L5.62305 23.5762"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17.9756 8.57422L26.3767 23.5762"
                        stroke="white"
                        stroke-width="1.5"
                      />
                      <path
                        d="M8.05859 27.1055H23.9409"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="journey-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
                  <div className="journey-item-hover-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                    >
                      <path
                        d="M17 30.6604L32 16.3083L17.0002 1.95703M17 30.6604L2 16.3083L17.0002 1.95703M17 30.6604L9.06396 16.3083L17.0002 1.95703M17 30.6604L24.9363 16.3083L17.0002 1.95703"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                className="journey-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
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
                  <div className="journey-item-hover-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M16.25 8C16.25 11.9619 12.8237 15.25 8.5 15.25C4.17631 15.25 0.75 11.9619 0.75 8C0.75 4.03812 4.17631 0.75 8.5 0.75C12.8237 0.75 16.25 4.03812 16.25 8Z"
                        stroke="white"
                        stroke-opacity="0.9"
                        stroke-width="1.5"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="19"
                      viewBox="0 0 26 19"
                      fill="none"
                    >
                      <path
                        d="M9.99176 1H2L13.0661 16.9351L24.1322 1H15.1404L14.6743 1.0932C13.2826 1.3715 11.8496 1.3715 10.4579 1.0932L9.99176 1Z"
                        stroke="white"
                        stroke-opacity="0.9"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-community">
          <div className="container">
            <div className="left-content" data-aos="fade-right">
              <h3>Meet the passionate community.</h3>
              <p>
                Become part of a rapidly expanding community of visionaries and
                traders from across the globe, collaborating to shape the future
                of the blockchain in this new era of innovation.
              </p>
            </div>
            <div className="right-content">
              <ul>
                <li className="row" data-aos="fade-left">
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
                <li className="row" data-aos="fade-left" data-aos-delay="100">
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
                <li className="row" data-aos="fade-left" data-aos-delay="200">
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
                <li className="row" data-aos="fade-left" data-aos-delay="300">
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

        <section className="section-enter-ecosystem" data-aos="fade-up">
          <div className="container">
            <h3>Enter the Ecosystem</h3>
            <p>
              Whether you’re a developer, token holder, or new to it all,
              there’s a place for everyone in the completed Ecosystem.
            </p>
            <div className="list-system">
              <div className="item">
                <div className="img-earn">
                  <img src={ImageEcoEarn} alt="" />
                </div>
                <div className="icon-earn">
                  <img src={IconEcoEarn} alt="" />
                </div>
                <p className="title">Trade</p>
                <p className="sub-title">
                  Fast and safe sniper Bot <MdEast />
                </p>
                <p className="des">
                  Powerful toolkit on Telegram - the flagship crypto platform.
                  Best support for Shibarium users in trading.
                </p>
              </div>
              <div className="item item-2">
                <div className="icon-coin1">
                  <img src={IconCoin} alt="" />
                </div>
                <div className="icon-coin2">
                  <img src={IconCoin} alt="" />
                </div>
                <div className="icon-coin3">
                  <img src={IconCoin} alt="" />
                </div>
                <p className="title">Earn</p>
                <p className="sub-title">
                  Staking & Yield farming <MdEast />
                </p>
                <p className="des">
                  Defi methods for earning passive income by locking up tokens
                  or providing liquidity to our platform.
                </p>
              </div>
              <div className="item item-discover">
                <div className="item-discover-bg">
                  <img src={ImageDiscoverBg} alt="" />
                </div>
                <div className="img-earth1">
                  <img src={ImageEarth1} alt="" />
                </div>

                <div className="img-bone">
                  <img src={ImageBone} alt="" />
                </div>
                <div className="img-earth2">
                  <img src={ImageEarth2} alt="" />
                </div>
                <p className="title">Discover</p>
                <p className="sub-title">
                  Explore the transactions <MdEast />
                </p>
                <p className="des">
                  Powerful tools are seamlessly integrated, providing users with
                  trading insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-become-partner" data-aos="fade-up">
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

      <footer className="page-footer" data-aos="fade-down">
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
              <a>
                <FaMedium size={24} color="#808080" />
              </a>
              <a>
                <FaTwitter size={24} color="#808080" />
              </a>
              <a>
                <PiRedditLogoFill size={24} color="#808080" />
              </a>
              <a>
                <FaTelegramPlane size={24} color="#808080" />
              </a>
              <a>
                <IoLogoDiscord size={24} color="#808080" />
              </a>
              <a>
                <FaYoutube size={24} color="#808080" />
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
