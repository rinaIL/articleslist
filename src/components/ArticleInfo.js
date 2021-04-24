import React from 'react';
import { connect } from 'react-redux';

const ArticleInfo = (props) => {
    const DeleteArticle = (id) => {
        props.deleteArticle(id)
    } 
    return (<li>
                {props.article.author} {props.article.title}
                <button onClick={() => DeleteArticle(props.article.id)}>Delete</button>
            </li>);
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArticle: (id) => dispatch({type:'DELETE_ARTICLE', payload: id})
    }

}

export default connect(null, mapDispatchToProps) (ArticleInfo);

