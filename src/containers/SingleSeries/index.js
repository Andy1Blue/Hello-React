import React, {Component} from 'react';
import Loader from '../../components/Loader';
import './style.css';

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then(response => response.json())
        .then(json => this.setState({show: json}));
    };

    render() {
        const {show} = this.state;
        console.log(show);

        return (
            <div>
                {show === null && <Loader />}
                {show !== null && <p>Show has been loaded</p>}
                {show !== null 
                    && 
                    <div>
                    <h2>{show.name}</h2>
                    <small>Premiered: {show.premiered}</small>
                    <p><img alt="cover" className="titleImg" src={show.image.medium} /></p>
                    <p>Rating: 
                    {show.rating.average === null && <b>no rating</b>}
                    {show.rating.average !== null && <b>{show.rating.average}</b>}
                    </p>
                    </div>
                    }
            </div>
        )
    }
}

export default SingleSeries;