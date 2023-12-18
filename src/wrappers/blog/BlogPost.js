import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-5.jpg"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>22 April, 2018</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>Endless Choices, One Platform: Navigating Our Multitude of Products</h3>
          <p>
            Welcome to SHX Mall, where the world of online shopping unfolds at your fingertips. Our commitment is simple: to offer you a seamless and delightful shopping experience with an unparalleled range of products. In this blog post, we'll guide you through the vast array of choices available on our platform and share some insider tips on making the most of your shopping journey.{" "}
          </p>
          <blockquote>
            Navigating the Platform : Intuitive Search and Filters
          </blockquote>
          <p>
            Finding what you need is a breeze with our intuitive search and filter options. Use keywords to search for specific products or utilize filters to narrow down choices based on categories, brands, and price ranges. Our goal is to simplify your shopping journey, ensuring you spend less time searching and more time exploring.
          </p>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details.png"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details-2.png"
                }
              />
            </div>
          </div>
        </div>
        <p>
          Ready to embark on a journey of endless choices? Explore our platform today and witness the diversity of products that await you. At SHX Mall, we're not just a shopping destination; we're your go-to guide for navigating the multitude of products that cater to your unique lifestyle.
        </p>
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                lifestyle ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Services ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                Halal Related
              </Link>
            </li>
          </ul>
        </div>
        <div className="blog-share">
          <span>share :</span>
          <div className="share-social">
            <ul>
              <li>
                <a className="facebook" href="//facebook.com">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a className="twitter" href="//twitter.com">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a className="instagram" href="//instagram.com">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          {" "}
          <i className="fa fa-angle-left" /> prev post
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          next post <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
  );
};

export default BlogPost;
