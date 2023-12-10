import { Component } from "react";
class MovieCard extends Component {

    constructor() {
        super();
        this.state = {
            title: "The Avengers!",
            plot: "Supernatural powers shown in the movie!!",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: true,
            cart: false
        }
    }
    minusStars = () => {

        if (this.state.stars <= 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5
            }

        });
    }
    addStars = () => {

        //there are two forms of setState()........form1 is below
        /*
               this.setState({
                   stars:this.state.stars+0.5
       
               });
       
       */
        // second form of setState()
        if (this.state.stars >= 5) {
            return;
        }
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5
            }

        });
        // this.state.stars+=0.5;
        // console.log("this.state.stars:", this.state.stars);
    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart = () => {
        this.setState({
            cart: !this.state.cart
        })
    }
    render() {
        const { title, plot, price, rating, stars, fav, cart } = this.state;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src="https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg" />
                    </div>
                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. 199</div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                <img alt="decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" className="str-btn" onClick={this.minusStars}></img>

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"></img>

                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/9146/9146916.png" className="str-btn" onClick={this.addStars}></img>

                                <span className="starCount">{stars}</span>



                            </div>
                            {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> :
                                <button className="favourite-btn" onClick={this.handleFav}>favourite</button>}

                            {cart ? <button className="Uncart-btn" onClick={this.handleCart}>Remove</button> :
                                <button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>}



                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;
