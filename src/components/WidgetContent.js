import React from "react";
import "./WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
         <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        /> 
        <div className="widget__contentTitle">
        <a href="https://medium.com/javarevisited/10-articles-every-web-developer-should-read-2efca81d0696">Developer Zone</a>
          <p>Fun space for all fellow developers </p>
        </div> 
      </div>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1574818-100-mzdwostcualpwcxekyrvyqqpychetdoc.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
        <a href="https://www.brainyquote.com/">Quota of Quotes</a>
        {/* <h5>Quota of Quotes</h5> */}
          <p>Daily dosage of unforgettable lines from ...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="widget__contentTitle">
        <a href="https://m.dailyhunt.in/news/india/english/for+you?mode=pwa&action=click&launch=true">Daily News </a>
          <p>Keep your self updated about the world...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5syhZizKfMqRqFssZ3KBjebFrRI5XU1k3Eg&usqp=CAU"
          alt=""
        />
        <div className="widget__contentTitle">
        <a href="https://www.moneycontrol.com/news/business/cryptocurrency/top-cryptocurrency-news-on-january-11-the-biggest-moves-in-crypto-nfts-and-more-7917641.html">Cryptocurrency </a>
          <p>Cryptocurrency updates ....</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1578647-100-xkggvbyzfkvzhyklewtkjijefekqbazb.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
        <a href="https://www.moneycontrol.com/stocksmarketsindia/">Stock Market</a>
          <p>Everything about investing in Stock...</p>
        </div>
      </div>
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1711686-100-glvgnbatdxpjbhrkyphlfamqrryfccvp.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
        <a href="https://www.wsj.com/articles/gamestop-entering-nft-and-cryptocurrency-markets-as-part-of-turnaround-plan-11641504417">NFT Market</a>
          <p>Non fungible Token is future...</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
