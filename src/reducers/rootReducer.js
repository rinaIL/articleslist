const initState = {
    categoryFilter: 'Fashion',
    articles: [
        {
            id: '1',
            title: 'Elections of USA 2020',
            author: 'Jacob Yang',
            category: 'Politics',
            article: 'Ea elit ea proident labore. Nulla velit aliquip exercitation voluptate qui irure officia ad amet adipisicing. Reprehenderit incididunt velit cillum ut laborum aute exercitation. Anim quis aliquip irure aliquip officia dolore ipsum cillum ipsum nulla commodo ut est sint. Laborum sint laboris aliquip anim consequat dolor eiusmod est Lorem. Exercitation non anim nostrud quis adipisicing pariatur ut.'
        },
        {
            id: '2',
            title: 'The way to wear hats',
            author: 'Melisa Rendel',
            category: 'Fashion',
            article: 'Ea elit ea proident labore. Nulla velit aliquip exercitation voluptate qui irure officia ad amet adipisicing. Reprehenderit incididunt velit cillum ut laborum aute exercitation. Anim quis aliquip irure aliquip officia dolore ipsum cillum ipsum nulla commodo ut est sint. Laborum sint laboris aliquip anim consequat dolor eiusmod est Lorem. Exercitation non anim nostrud quis adipisicing pariatur ut.'
        },
        {
            id: '3',
            title: 'The way to wear skirt',
            author: 'Barbare Jackson',
            category: 'Fashion',
            article: 'Ea elit ea proident labore. Nulla velit aliquip exercitation voluptate qui irure officia ad amet adipisicing. Reprehenderit incididunt velit cillum ut laborum aute exercitation. Anim quis aliquip irure aliquip officia dolore ipsum cillum ipsum nulla commodo ut est sint. Laborum sint laboris aliquip anim consequat dolor eiusmod est Lorem. Exercitation non anim nostrud quis adipisicing pariatur ut.'
        },
    ]
}
const rootReducer = (state = initState, action) => {

    if(action.type === 'CHANGE_CATEGORY_FILTER') {

        return {
            ...state,
            categoryFilter: action.payload
        };
    }

    if(action.type === 'DELETE_ARTICLE') {
        const deletedArticle = state.articles.filter((article) => article.id != action.payload)
        return {
            ...state,
            articles: deletedArticle
        }
    }

    return state;
}

export default rootReducer;