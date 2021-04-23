import React, { useContext} from 'react';
import ArticleInfo from './ArticleInfo';
import {ThemeContext} from '../contexts/ThemeContext'
import {connect} from 'react-redux';

const ArticlesList = ({categoryFilter, articles}) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light: dark;
    console.log("categoryFilter", categoryFilter);
   
    
    return (
        <div className='article-list' style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                {
                    articles && articles.length 
                    ? articles.map((article) => (
                            <ArticleInfo key={article.id} article={article}  />
                        ))
                    : <p>No Articles</p>
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state.root.articles)
    return {
        categoryFilter: state.root.categoryFilter,
        articles: state.root.articles,
    }
}

export default connect(mapStateToProps) (ArticlesList);