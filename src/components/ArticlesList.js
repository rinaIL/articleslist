import React, { useContext} from 'react';
import ArticleInfo from './ArticleInfo';
import {ThemeContext} from '../contexts/ThemeContext'
import {connect} from 'react-redux';

const ArticlesList = ({categoryFilter, articles}) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light: dark;
    
    return (
        <div style={{color: theme.syntax, background: theme.bg}}>
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
    return {
        categoryFilter: state.categoryFilter,
        articles: state.articles
    }
}

export default connect(mapStateToProps) (ArticlesList);