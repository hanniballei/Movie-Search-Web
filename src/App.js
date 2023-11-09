import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// OMDb电影数据库网站的api url
const API_URL = 'http://www.omdbapi.com?apikey=a891e6e8';

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
};

const App = () => {
    // 设置电影搜索结果状态，初始状态为空数组，只有通过fetch获取电影信息才会填入相应的数据
    const [movies, setMovies] = useState([]);
    // 设置电影搜索关键词状态
    const [searchTerm, setSearchTerm] = useState('');

    // 用于根据标题搜索电影
    // 模板字符串中的s代表搜索参数
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // 使用setter函数修改状态movies的信息
        // 切记不要手动修改状态值！！！
        setMovies(data.Search);
    }

    // 
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="App">
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                    placeholder='Search for Movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies.length > 0 
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                     ) : 
                    (
                        <div className='empty'>
                            <h2>No Movies Found</h2>
                        </div>
                    )
            }
            
        </div>
    );
};

export default App;