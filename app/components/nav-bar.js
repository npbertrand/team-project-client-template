import React from 'react';
// import ReactDOM from 'react-dom';

export default class Nav_Bar extends React.Component {
  render() {
    return (
      <div>
      <div class="container-fluid">
        
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a class="navbar-brand" href="#">

            <span class="glyphicon glyphicon-home white"></span>
          </a>
        </div>


        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-right" role="search">


            <div class="input-group">
           <input type="text" class="form-control" placeholder="Search UMass">
           <span class="input-group-btn">
             <button type="submit" class="btn btn-default">
               <span class="glyphicon glyphicon-search"></span>
             </button>
           </span>
         </div>
          </form>
          <div class="nav navbar-nav navbar-left">

            <div class="btn-toolbar pull-right" role="toolbar">
              <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default navbar-btn">
                    <span class="glyphicon glyphicon-user"></span>
                  </button>
                  <button type="button" class="btn btn-default navbar-btn">
                    <span class="glyphicon glyphicon-calendar"></span>
                  </button>
                  <button type="button" class="btn btn-default navbar-btn">
                    <span class="glyphicon glyphicon-plus"></span>
                  </button>
              </div>
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-default navbar-btn">
                  <span class="glyphicon glyphicon-lock"></span>
                </button>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-default dropdown-toggle navbar-btn"
                          data-toggle="dropdown">
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="#">Log out...</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      </nav>

    </div>
    )
  }
}
