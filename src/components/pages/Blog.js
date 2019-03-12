import React, { Component } from 'react';
import NavButton from '../parts/NavButton';
import BlogPost from '../parts/BlogPost';

class blog extends Component {
  state = {
    posts: [],
    loading: true
  }
  componentDidMount = () =>{
    this.getPosts()
  }
  loading = () => {
    return (
      <p className="blog__loader">Carregando <span className="blog__loader--dots"> </span></p>
    )
  }
  getPosts = () => {
    fetch("http://layerup.com.br/wp-json/wp/v2/posts?per_page=3&_embed", { headers: { "Content-Type": "application/json; charset=utf-8" }})
    .then(res => res.json())
    .then((response) => (
      this.setState({
        posts: [...response],
        loading: false
      })
    ))
  }
  render() { 
    return (
      <div className="blog">
        <div className="blog__navWrapper">
          <div className={`blog__nav blog__nav--a-layer ${this.props.index === 2 && (`blog__nav--a-layer--animated`)}`}>
            <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Por que a Layer Up'
                navigation={() => this.props.navigation('quem-somos', 0)}
              />
          </div>
          <div className={`blog__nav blog__nav--jornada ${this.props.index === 2 && (`blog__nav--jornada--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Jornada'
                navigation={() => this.props.navigation('quem-somos', 1)}
              />
          </div>
          <div className={`blog__nav blog__nav--parceiros ${this.props.index === 2 && (`blog__nav--parceiros--animated`)}`}>              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Parceiros'
                navigation={() => this.props.navigation('quem-somos', 2)}
              />
          </div>
          <div className={`blog__nav blog__nav--clientes ${this.props.index === 2 && (`blog__nav--clientes--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Clientes'
                navigation={() => this.props.navigation('quem-somos', 3)}
              />
          </div>
          <div className={`blog__nav blog__nav--blog ${this.props.index === 2 && (`blog__nav--blog--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={true}
                borderless={true}
                pageName='Blog'
                navigation={() => this.props.navigation('quem-somos', 4)}
              />
          </div>
        </div>
        <div className="blog__posts">
        {this.state.loading === true ? this.loading() : 
          this.state.posts.map((post) =>
            <React.Fragment key={post.slug}>
              <BlogPost 
                post={post}
              />
            </React.Fragment>
          )
        }
        </div>
      </div>
    )
  }
}

export default blog;
