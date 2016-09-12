import React from 'react'
import moment from 'moment';
import url from 'url';
import Image from './Image';
import RudoVideo from './RudoVideo';

moment.locale('es');

export default class Article extends React.Component {

  render(){
    let {onReadArticle, article} = this.props;
    let date = moment(article.raw_post_date);
    let {protocol} = url.parse(article.video_rudo_destacado);
    let imageOrVideo = <Image article={article} />;
    if(protocol != null) {
      imageOrVideo = <RudoVideo article={article} />
    }
    return (
      <article>
        {imageOrVideo}
        <a href={article.post_url}>
          <h1 dangerouslySetInnerHTML={{ __html: article.post_title }}></h1>
          <time datetime={date.format('YYYY-MM-DD HH:mm')}>{date.format('LL')}</time>
        </a>
      </article>
    );
  }
}
