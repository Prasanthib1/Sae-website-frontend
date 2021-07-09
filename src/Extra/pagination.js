import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import * as BI from "react-icons/bi";
import blogs from './blogs.json'
import './Blogsmain.css';
import SearchBar from './search';
import Fuse from "fuse.js";
 
//import "./styles.css";
const Blogs=({image,title,desc,link,date, author})=>{
  return (
      <div className="blogs">
        <div className="img-hover-blogs">
         <img className="blogs_img" src={image}   height="220px" width="300px"></img>
        <div className="hover-box-blogs">
          <p className="hover-desc-blogs">{desc}</p>
          <a href={link} className="blog-link-btn" style={{textDecoration: 'none'}} target="_blank">READ MORE</a>
        </div>
        </div>
        <div className="blogs_desc">
          <div className="title_date">
           <h3>{title}</h3>
           <p>By {author}</p>
           <p><BI.BiTimeFive style={{ fontSize:"12px" }}/> {date}</p>
          </div> 
            <p>&#9650;</p>
        </div>
      </div>
  )
}

export default class Page extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 9,
          currentPage: 0,
          totalData:blogs
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
              const data = this.state.totalData;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => <React.Fragment>
                <Blogs 
                title={pd.title}
                image={pd.image}
                desc={pd.desc}
                link={pd.link}
                date={pd.date}
                author={pd.author}
                key={pd.title}
                />
            </React.Fragment>)
              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                 
                  postData
              })
  }

  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }

  /* For Search bar*/ 
 
  searchData = (pattern) => {
    if (!pattern) {
      this.state.totalDate=blogs;
      return;
    }
  
  
    const fuse = new Fuse(this.state.totalData, {
      keys: ["author","date"],
      tokenize: false,
      matchAllTokens: true,
      threshold: 0.5,
      location: 0,
      distance: 0,
    });
  
    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      this.state.totalData=[];
    } else {
      result.forEach(({item}) => {
        matches.push(item);
      });
      this.state.totalData=matches;
    }
  };

  render() {
      return (
          <div>
              <h1 className="heading_blog">Blogs</h1>
              <SearchBar
              placeholder="Search by author/date..."
              onChange={(e) => this.searchData(e.target.value)}
              />
              <div className="blog_info">{this.state.postData}</div>
              
              <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}
 