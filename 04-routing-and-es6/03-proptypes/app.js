import React from 'react';
import ReactDOM from 'react-dom';

const Article = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        pictureURL: React.PropTypes.string,
        author: React.PropTypes.shape({
            name: React.PropTypes.string,
            avatarURL: React.PropTypes.string,
            numberOfArticles: React.PropTypes.number
        }),
        type: React.PropTypes.oneOf(['education', 'entertainment']),
        tags: React.PropTypes.arrayOf(React.PropTypes.string),
        numberOfLikes: React.PropTypes.number
    },

    getDefaultProps() {
        return {
            author: {
                name: 'Unnamed Author'
            },
            pictureURL: 'https://i.ytimg.com/vi/O-58MDm1eWI/maxresdefault.jpg',
            type: 'entertainment',
            tags: [],
            numberOfLikes: 0
        };
    },

    render() {
        const {
            title,
            text,
            pictureURL,
            author,
            type,
            tags,
            numberOfLikes,
        } = this.props;

        return (
            <div className='Article'>
                <h1 style={{textAlign: 'center'}}>
                    {title}
                </h1>
                <h4 style={{textAlign: 'center'}}>
                    by {author.name}
                </h4>
                <h4 style={{textAlign: 'center'}}>
                    {type.toUpperCase()}
                </h4>
                <img src={pictureURL} width='100%' />
                <p style={{whiteSpace: 'pre-wrap'}}>
                    {text}
                </p>
                <div className='tags'>
                    <b>Tags:</b> {tags.join(', ')}
                </div>
                <div className='tags'>
                    <b>Likes:</b> {numberOfLikes}
                </div>
            </div>
        );
    }
});

const App = React.createClass({
    render() {
        return (
            <div className='App'>
                <Article
                    title='Cras ultricies mi eu turpis'
                    text='Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nullam accumsan lorem in dui. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Curabitur blandit mollis lacus. Nullam cursus lacinia erat.&#010;Etiam feugiat lorem non metus. Ut a nisl id ante tempus hendrerit. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nulla facilisi.&#010;Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Praesent turpis. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Donec vitae sapien ut libero venenatis faucibus. Nam adipiscing.&#010;Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Pellentesque posuere. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Donec posuere vulputate arcu. Fusce ac felis sit amet ligula pharetra condimentum.&#010;Ut id nisl quis enim dignissim sagittis. Phasellus tempus. Nam at tortor in tellus interdum sagittis. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Nunc interdum lacus sit amet orci.'
                    pictureURL='http://picsfab.com/download/image/128921/1920x1200_priroda-derevo-kosmos-y-k-mlechnyij-put-art-zvezdyi.jpg'
                    author={{
                        name: 'John Smithey',
                        avatarURL: '',
                        numberOfArticles: 25
                    }}
                    type='education'
                    tags={['tag1', 'tag2', 'tag3']}
                    numberOfLikes={190}
                />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('mount-point')
);

