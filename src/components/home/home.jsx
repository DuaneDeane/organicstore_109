import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {};
    render() { 
        return ( 
            <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4"></hr>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <Link class="btn btn-primary btn-lg" to="/catalog" role="button">Check out the Catalog</Link>
</div>
         );
    }
}
 
export default Home;