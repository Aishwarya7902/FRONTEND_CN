import { Component } from "react";
class MovieCard extends Component {
   
    constructor(){
        super();
        this.state={
            title:"The Avengers!",
            plot:"Supernatural powers shown in the movie!!",
            price:199,
            rating:8.9,
            stars:0
        }
    }
    addStars=()=>{

        //there are two forms of setState()........form1 is below
 /*
        this.setState({
            stars:this.state.stars+0.5

        });

*/
        // second form of setState()
        this.setState((prevState)=>{
            return{
                stars:prevState.stars+0.5
            }

        });
        // this.state.stars+=0.5;
        // console.log("this.state.stars:", this.state.stars);
    }
    render() {
        const {title,plot,price,rating,stars}=this.state;
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
                                 src="https://cdn-icons-png.flaticon.com/128/1828/1828901.png" className="str-btn"></img>

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"></img>

                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/9146/9146916.png" className="str-btn" onClick={this.addStars}></img>

                                <span className="starCount">{stars}</span>
                               


                            </div>
                            <button className="favourite-btn">favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;
