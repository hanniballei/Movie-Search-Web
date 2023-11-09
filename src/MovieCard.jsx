import React from 'react';

// 电影信息显示卡片的组件
// props意味着我可以在该组件中自定义一些词条，以便使用该组件的部分可以自行填入相应的信息
// 这里将props关键词替换成自己定义的变量名并用花括号括起来
const MovieCard = ({ movie }) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400'} alt={movie.Title}/>
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;