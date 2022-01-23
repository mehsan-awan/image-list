import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './image-list';

class App extends React.Component {
    
    state = { 
        images: [],
        apiKey: 'YOUR API KEY'
    }

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=${this.state.apiKey}&q=${entry}&image_type=photo&pretty=true`)

        this.setState({ images:response.data.hits })
    }

    render() { 
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}
 
export default App;

