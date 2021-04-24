import React, { useContext} from 'react';
import ArticleInfo from './ArticleInfo';
import {ThemeContext} from '../contexts/ThemeContext'
import {connect} from 'react-redux';

const ArticlesList = ({categoryFilter, articles, changeTheFilterCategory}) => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light: dark;
    console.log("categoryFilter", categoryFilter);

    const ChangeFilterCategory = (filter) => {
        changeTheFilterCategory(filter);
    }
   
    
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
            <ul>
                <li><button onClick={ () => ChangeFilterCategory("Fashion")}>Fashion</button></li>
                <li><button onClick={ () => ChangeFilterCategory("Politics")}>Politics</button></li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state.root.articles)

    const articlesByCategory  = state.root.articles.filter( article => article.category === state.root.categoryFilter );
    return {
        categoryFilter: state.root.categoryFilter,
        articles: articlesByCategory,
    }
}

const mapDispatchToProps = (dispatch) => {
        return {
            changeTheFilterCategory: (filter) => dispatch({type: 'CHANGE_CATEGORY_FILTER', payload: filter})
            
        }
}

export default connect(mapStateToProps, mapDispatchToProps) (ArticlesList);