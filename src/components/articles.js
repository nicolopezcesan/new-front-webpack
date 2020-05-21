import React, { Component } from 'react';

// class Articles extends Component {

    const renderProgress = () => {
        return <h3>Cargando..</h3>;
    }

    const renderArticles = (articles) => {
        return articles.map((value, key) => (
            <section id={key} className="cont-figure">
                <a href="" className="figure">
                    <picture id="" className="content-pic picture">
                        <img src={value.promo_items.basic.url} alt="" className="content-img" />
                    </picture>
                </a>
            </section>
        ))
    }


    // render() {
    // const { articles } = this.props;

    // const ForecastExtended = ({ city, forecastData }) => (
    //     <div>
    //         <h2 className='forecast-title'>Pronóstico extendido para: {city}</h2>
    
    //         { forecastData ? renderForecastItemDays(forecastData) : renderProgress() }
    //     </div>
    // );

    const Articles = (articles) => (
        <div>
            {
                console.log('holaaa: ' + articles.length)
            }

            {(articles.length > 0) ? this.renderArticles(articles) : this.renderProgress()}
        </div>
    );
// }

export default Articles;