import React from 'react';

const ArticleInfo = (props) => {
    return (<li>{props.article.author} {props.article.title}</li>);
}

export default ArticleInfo;

