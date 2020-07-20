import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (      
      <div className={"wrapper"}>
      <header class="header">
          <div class="container">
              <div class="row">
                  <div class="col-md-2">
                      <div class="logo">
                          <h2><a href="#">Classic</a></h2>
                      </div>
                  </div>
                  <div class="col-md-10">
                      <div class="menu">
                          <ul>
                              <li class="active"><a href="#">Home</a></li>
                              <li><a href="#">lifestyle</a></li>
                              <li><a href="#">Food</a></li>
                              <li><a href="#">Nature</a></li>
                              <li><a href="#">photography</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </header>

      <section class="single-blog-area">
          <div class="container">
              <div class="row">
                 <div class="col-md-12">
                  <div class="border-top">
                      <div class="col-md-8">
                      <div class="blog-area">
                          <div class="blog-area-part">
                              <h2>The Best Wave Of Your Life Is Stil Out There. Lorem Ipsum Dolor...</h2>
                              <div class="for-style">
                                  <p><span class="drop_caps">L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>
                              </div>
                              <img src="img/single-bg.jpg" alt="">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              <h3><i class="fa fa-quote-left" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labo<i class="fa fa-quote-right" aria-hidden="true"></i></h3>
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="image-one">
                                          <img src="img/blog-image1.jpg" alt="">
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="image-two">
                                          <img src="img/blog-image2.jpg" alt="">
                                      </div>
                                  </div>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <a href="#">officia deserunt mollit</a> anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium </p>
                              <p>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</p>
                          </div>
                          <div class="ads-area">
                              <img src="img/ads.jpg" alt="">
                              <p>Your Ad Banner Goes Here</p>
                          </div>
                          <div class="commententries">
                              <h3>Comments</h3>

                              <ul class="commentlist">
                                  <li>
                                      <article class="comment">
                                          <header class="comment-author">
                                              <img src="img/author-1.jpg" alt="">
                                          </header>
                                          <section class="comment-details">
                                              <div class="author-name">
                                                  <h5><a href="#">Selina Gomez</a></h5>
                                                  <p>February 25 2017</p>
                                              </div>
                                              <div class="comment-body">
                                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                                              </div>
                                              <div class="reply">
                                                  <p><span><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>12</span><span><a href="#"><i class="fa fa-reply" aria-hidden="true"></i></a>7</span></p>
                                              </div>
                                          </section>
                                      </article>

                                      <ul class="children">
                                          <li>
                                              <article class="comment">
                                                  <header class="comment-author">
                                                      <img src="img/author-2.jpg" alt="">
                                                  </header>
                                                  <section class="comment-details">
                                                      <div class="author-name">
                                                          <h5><a href="#">Khalid Hasan Zibon</a></h5>
                                                          <p>February 25 2017</p>
                                                      </div>
                                                      <div class="comment-body">
                                                          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                                                      </div>
                                                      <div class="reply">
                                                          <p><span><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>12</span><span><a href="#"><i class="fa fa-reply" aria-hidden="true"></i></a>7</span></p>
                                                      </div>
                                                  </section>
                                              </article>
                                          </li>
                                      </ul>

                                  </li>
                                  <li>
                                      <article class="comment">
                                          <header class="comment-author">
                                              <img src="img/author-3.jpg" alt="">
                                          </header>
                                          <section class="comment-details">
                                              <div class="author-name">
                                                  <h5><a href="#">Heath Ledger</a></h5>
                                                  <p>February 25 2017</p>
                                              </div>
                                              <div class="comment-body">
                                                  <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                                              </div>
                                              <div class="reply">
                                                  <p><span><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i></a>12</span><span><a href="#"><i class="fa fa-reply" aria-hidden="true"></i></a>7</span></p>
                                              </div>
                                          </section>
                                      </article>
                                  </li>
                              </ul>

                          </div>
                          <form action="#" method="get">
                              <div class="name">
                                  <input type="text" name="" id="" placeholder="Name" class="name">
                              </div>
                              <div class="email">
                                  <input type="email" name="" id="" placeholder="Email" class="email">
                              </div>
                              <div class="comment">
                                  <input type="text" name="" id="" placeholder="Comment" class="comment">
                              </div>
                              <div class="post">
                                  <input type="submit" value="Post">
                              </div>
                          </form>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="button-group filters-button-group">
                          <button data-filter=".recent" class="button is-checked">Recent</button>
                          <button data-filter=".popular" class="button">popular</button>
                          <button data-filter=".users" class="button">Users</button>
                      </div>

                      <div class="grid" style="position: relative; height: 1221.93px;">
                          <div class="portfolio-item recent" style="position: absolute; left: 0px; top: 0px;">
                              <img src="img/portfolio1.jpg" alt="">
                              <div class="portfolio-text">
                                  <h5><a href="#">Pay Close Attention To People Who Don’t Clap When You Win recent1.</a></h5>
                                  <p>By Kabbo Liate <span>|</span>25 February 2017</p>
                              </div>
                          </div>
                          <div class="portfolio-item recent" style="position: absolute; left: 0px; top: 0px;">
                              <img src="img/portfolio2.jpg" alt="">
                              <div class="portfolio-text">
                                  <h5><a href="#">Pay Close Attention To People Who Don’t Clap When You Win recent2.</a></h5>
                                  <p>By Kabbo Liate <span>|</span>25 February 2017</p>
                              </div>
                          </div>
                          <div class="portfolio-item popular" style="position: absolute; left: 0px; top: 0px;">
                              <img src="img/portfolio3.jpg" alt="">
                              <div class="portfolio-text">
                                  <h5><a href="#">Pay Close Attention To People Who Don’t Clap When You Win popular1.</a></h5>
                                  <p>By Kabbo Liate <span>|</span>25 February 2017</p>
                              </div>
                          </div>
                          <div class="portfolio-item popular" style="position: absolute; left: 0px; top: 0px;">
                              <img src="img/portfolio4.jpg" alt="">
                              <div class="portfolio-text">
                                  <h5><a href="#">Pay Close Attention To People Who Don’t Clap When You Win popular2.</a></h5>
                                  <p>By Kabbo Liate <span>|</span>25 February 2017</p>
                              </div>
                          </div>
                          <div class="portfolio-item users" style="position: absolute; left: 0px; top: 0px;">
                              <img src="img/portfolio5.jpg" alt="">
                              <div class="portfolio-text">
                                  <h5><a href="#">Pay Close Attention To People Who Don’t Clap When You Win users1.</a></h5>
                                  <p>By Kabbo Liate <span>|</span>25 February 2017</p>
                              </div>
                          </div>
                          <div class="portfolio-item users" style="position: absolute; left: 0px; top: 0px;">
                              <img src="img/portfolio1.jpg" alt="">
                              <div class="portfolio-text">
                                  <h5><a href="#">Pay Close Attention To People Who Don’t Clap When You Win users2.</a></h5>
                                  <p>By Kabbo Liate <span>|</span>25 February 2017</p>
                              </div>
                          </div>
                      </div>
                      <div class="sidebar-ads">
                          <img src="img/sidebar-ads.jpg" alt="">
                          <p>Place For Your <br> Ad Banner</p>
                      </div>
                      <div class="tags">
                          <h2 class="sidebar-title">Tags</h2>
                          <p><a href="#">Adventure</a></p>
                          <p><a href="#">Animals</a></p>
                          <p><a href="#">Asia</a></p>
                          <p><a href="#">Beauty</a></p>
                          <p><a href="#">Canada</a></p>
                          <p><a href="#">Celebration</a></p>
                          <p><a href="#">City</a></p>
                          <p><a href="#">Coffee</a></p>
                          <p><a href="#">Constructions</a></p>
                          <p><a href="#">Europe</a></p>
                          <p><a href="#">Adventure</a></p>
                          <p><a href="#">Animals</a></p>
                          <p><a href="#">Asia</a></p>
                          <p><a href="#">Beauty</a></p>
                          <p><a href="#">Canada</a></p>
                          <p><a href="#">Celebration</a></p>
                          <p><a href="#">City</a></p>
                          <p><a href="#">Coffee</a></p>
                          <p><a href="#">Constructions</a></p>
                          <p><a href="#">Europe</a></p>
                          <p><a href="#">Adventure</a></p>
                          <p><a href="#">Animals</a></p>
                          <p><a href="#">Asia</a></p>
                          <p><a href="#">Beauty</a></p>
                          <p><a href="#">Canada</a></p>
                      </div>
                      <div class="newsletter">
                          <h2 class="sidebar-title">Subscribe To oUR nEWSLETTER</h2>
                          <form action="#" method="post">
                              <input type="email" name="" id="" placeholder="Email">
                              <input type="submit" value="Subscribe">
                          </form>
                      </div>
                  </div>
                  </div>
                  </div>
              </div>
          </div>
      </section>

      <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="col-md-12">
                      <div class="footer-bg">
                          <div class="row">
                              <div class="col-md-9">
                                  <div class="footer-menu">
                                      <ul>
                                          <li class="active"><a href="#">Home</a></li>
                                          <li><a href="#">lifestyle</a></li>
                                          <li><a href="#">Food</a></li>
                                          <li><a href="#">Nature</a></li>
                                          <li><a href="#">photography</a></li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-md-3">
                                  <div class="footer-icon">
                                      <p><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></p>
                                  </div>
                              </div>
                          </div> .
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  </div>
  );
}

export default App;
