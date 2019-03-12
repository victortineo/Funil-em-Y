import React from 'react'
import placeholder from '../../assets/images/quem-somos/placeholder.png'

function cutText(text){
  text = text.replace(/<(?:.|\n)*?>/gm, '');
  let trimmedString = text.substr(0, 161);
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
  return trimmedString
}

const BlogPost = (props) => {
	return (
    <a href={props.post.link} target="_blank" rel="noopener noreferrer" className="blogPost">
      <img className="blogPost__image" src={props.post._embedded ? props.post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url : placeholder} alt={props.post._embedded ? props.post.title.rendered : ''} />
      <p className="blogPost__text">
        {cutText(props.post.content.rendered)}
      </p>
      <div className="blogPost__button">
        <button className="navButton">
          <span className="navButton__text">
            Leia Mais
          </span>
          <span className="navButton__line navButton__line--vertical"></span>
        </button>
      </div>
    </a>
	)
}

export default BlogPost